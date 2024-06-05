use std::collections::HashMap;
use serde_json::{self, Value};
use uuid::Uuid;
use kinode_process_lib::{
    await_message, call_init, println, Address,
    Message, get_blob, http, Request,
    http::{
        serve_ui,
        HttpServerRequest, send_response, StatusCode,
        bind_http_path,
        bind_http_static_path,
        unbind_http_path,
        send_request_await_response, IncomingHttpRequest,
        HeaderMap, HeaderValue,
    },
    vfs::open_file,
};
use percent_encoding::{utf8_percent_encode, AsciiSet, CONTROLS};
mod types;
use types::{
    CreateMemeRequest,
    ComposedUploadRequest,
    PublicAddress, MemeDeckState,
    TwitterProfile,
    KinodeLoginInfo,
};

const MEMEDECK_API: &str = "https://api.memedeck.xyz";
// const MEMEDECK_API: &str = "https://staging-api.memedeck.xyz";
// const MEMEDECK_API: &str = "http://localhost:8080";

/// https://url.spec.whatwg.org/#fragment-percent-encode-set
const FRAGMENT: &AsciiSet = &CONTROLS
    .add(b' ')
    .add(b'"')
    .add(b'<')
    .add(b'>')
    .add(b'`')
    .add(b'/')
    .add(b':')
    .add(b'=')
    .add(b'+')
    .add(b'&')
    .add(b'%')
    .add(b'?');
const ICON: &str = include_str!("icon");

wit_bindgen::generate!({
    path: "wit",
    world: "process",
    exports: {
        world: Component,
    },
});

call_init!(init);

fn init(our: Address) {
    println!("memedeck: started");

    // add ourselves to the homepage
    Request::to(("our", "homepage", "homepage", "sys"))
        .body(
            serde_json::json!({
                "Add": {
                    "label": "MemeDeck",
                    "icon": ICON,
                    "path": "/", // just our root
                }
            })
            .to_string()
            .as_bytes()
            .to_vec(),
        )
        .send()
        .unwrap();

    let private_paths = vec!["/", "/_next/static/*", "/home", "/library", "/library/saved", "/library/uploads", "/search"];
    let public_paths = vec!["/images", "/favicon.ico"];
    let _ = serve_ui(&our, "ui", true, false, private_paths);
    let _ = serve_ui(&our, "ui", false, false, public_paths);
    //let _ = serve_ui(&our, "ui", false, false, public_paths);
    //let _ = bind_http_path("/", true, false);
    let _ = bind_http_path("/set_public_address", true, false);
    let _ = bind_http_path("/v1/auth/twitter/login", true, false);
    let _ = bind_http_path("/twitter_callback", false, false);
    let _ = bind_http_path("/v1/memes", true, false);
    let _ = bind_http_path("/v1/memes/:meme_id", true, false);
    let _ = bind_http_path("/v1/memes/:meme_id/panel/:panel_id", true, false);
    let _ = bind_http_path("/v1/memes/:meme_id/composed-upload", true, false);
    let _ = bind_http_path("/v1/*", true, false);
    let _ = bind_http_path("/deck/edit/:deck_id", true, false);
    let _ = bind_http_path("/deck/:deck_id", true, false);
    let _ = bind_http_path("/u/:uid/bookmarks", true, false);
    let _ = bind_http_path("/u/:uid/drafts", true, false);
    let _ = bind_http_path("/u/:uid/decks", true, false);
    let _ = bind_http_path("/u/:uid", true, false);
    let _ = bind_http_path("/_next/image", true, false);

    let mut state = MemeDeckState::load(&our);

    loop {
        match await_message() {
            Err(send_error) => {
                println!("{}: got network error: {send_error:?}", our);
                continue;
            }
            Ok(message) => match handle_request(&our, &mut state, &message) {
                Ok(()) => continue,
                Err(e) => println!("{}: error handling request: {:?}", our, e),
            },
        }
    }
}

fn handle_request(
    our: &Address,
    state: &mut MemeDeckState,
    message: &Message,
) -> anyhow::Result<()> {
    if message.source().node == our.node && message.source().process == "http_server:distro:sys"
    {
        handle_http_server_request(our, &message.body(), state)
    } else if message.source().node != our.node {
        /*
         * TODO: actually implement node-to-node communications
        let Ok(meme_request) = serde_json::from_slice::<MemeDeckRequest>(message.body()) else {
            return Err(anyhow::anyhow!("invalid meme deck request"));
        };
        handle_kinode_meme_request(our, &message.source().node, state, &meme_request)
        */
        Err(anyhow::anyhow!("no protocol yet"))
    } else {
        Err(anyhow::anyhow!("unhandled message type"))
    }
}

fn handle_http_server_request(
    our: &Address,
    body: &[u8],
    state: &mut MemeDeckState,
) -> anyhow::Result<()> {
    let server_request = serde_json::from_slice::<HttpServerRequest>(body).map_err(|e| {
        println!("Failed to parse server request: {:?}", e);
        e
    })?;

    let mut headers = HashMap::new();
    headers.insert("Content-Type".to_string(), "application/json".to_string());

    match server_request {
        HttpServerRequest::Http(request) => {
            let r_path = request.path()?;
            let r_path = r_path.as_str();
            let b_path = request.bound_path(Some(&our.process.to_string()));
            let mut req_h = plain_hm(request.headers());
            req_h.remove("host".into());
            req_h.insert("host".into(), state.public_address.clone());
            req_h.remove("cookie".into());
            req_h.remove("Cookie".into());
            if let Some(cookie) = state.api_cookie.clone() {
                req_h.insert("cookie".into(), cookie);
            }
            match request.method()?.as_str() {
                "GET" => {
                    println!("GET {r_path}");
                    // Route to appropriate endpoint based on the path
                    match b_path {
                        "/twitter_callback" => get_oauth_callback(our, state, headers, request),
                        "/v1/auth/twitter/login" => get_login_with_twitter(our, state, request),
                        "/_next/image" => {
                            let params = request.query_params();
                            headers.remove("Content-Type");
                            headers.insert("Location".into(), params.get("url").unwrap().clone());
                            Ok(send_response(StatusCode::TEMPORARY_REDIRECT, Some(headers), vec![]))
                        }
                        "/u/:uid/decks" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "u/reserved/decks", "handle",
                            request.url_params().get("uid").unwrap()
                        )),
                        "/u/:uid/drafts" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "u/reserved/drafts", "handle",
                            request.url_params().get("uid").unwrap()
                        )),
                        "/u/:uid/bookmarks" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "u/reserved/bookmarks", "handle",
                            request.url_params().get("uid").unwrap()
                        )),
                        "/u/:uid" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "u/reserved", "handle",
                            request.url_params().get("uid").unwrap()
                        )),
                        "/deck/edit/:deck_id" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "deck/edit/reserved", "deckId",
                            request.url_params().get("deck_id").unwrap()
                        )),
                        "/deck/:deck_id" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "deck/reserved", "deckId",
                            request.url_params().get("deck_id").unwrap()
                        )),
                        _ if { r_path.starts_with("/v1/") } => proxy(
                            &format!("{MEMEDECK_API}{r_path}?{}", stringify_params(request.query_params())),
                            http::Method::GET, vec![],
                            req_h,
                            headers.clone()
                        ),
                        _ => {
                            println!("unmatched path: {}", r_path);
                            Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                        }
                    }
                }
                "POST" => {
                    println!("POST {r_path}");
                    match r_path {
                        "/set_public_address" => {
                            let Some(blob) = get_blob() else {
                                return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
                            };
                            let upload_data = serde_json::from_slice::<PublicAddress>(&blob.bytes)?;
                            state.public_address = upload_data.url.clone();
                            println!("setting addr: {}", upload_data.url);
                            state.save();

                            Ok(send_response(
                                StatusCode::OK,
                                Some(headers.clone()),
                                serde_json::to_vec(
                                    &serde_json::json!({"address":state.public_address.clone()}),
                                )?,
                            ))
                        }
                        "/v1/memes" => create_meme(state),
                        // POST /v1/memes/meme:68af2305_6adb_49a0_a58d_6f21037b92fc/composed-upload
                        _ if { r_path.starts_with("/v1/memes/") && r_path.ends_with("/composed-upload") } => {
                            let parts: Vec<&str> = r_path.split("/").collect();
                            let meme_id = parts[3];
                            let meme_id_str = meme_id.to_string();
                            return composed_upload(state, &meme_id_str);
                        }
                        _ if { r_path.starts_with("/v1/") } => {
                            let blob = match get_blob() {
                                Some(blob) => blob.bytes,
                                None => vec![],
                            };
                            proxy(
                                &format!("{MEMEDECK_API}{r_path}"),
                                http::Method::POST, blob,
                                req_h,
                                headers.clone()
                            )
                        },
                        _ if { r_path.starts_with("/toggle_follow/") } => {
                            println!("{:?}", request);
                            toggle_follow(state, r_path)
                        }
                        _ if { r_path.starts_with("/toggle_block/") } => {
                            println!("{:?}", request);
                            toggle_block(state, r_path)
                        }
                        _ => Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                    }
                }
                "PUT" => {
                    println!("PUT {r_path}");
                    match b_path {
                        _ if { r_path.starts_with("/v1/") } => {
                            let blob = match get_blob() {
                                Some(blob) => blob.bytes,
                                None => vec![],
                            };
                            proxy(
                                &format!("{MEMEDECK_API}{r_path}?{}", stringify_params(request.query_params())),
                                http::Method::PUT, blob,
                                req_h,
                                headers.clone()
                            )
                        },
                        _ => Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                    }
                }
                "DELETE" => {
                    println!("DELETE {r_path}");
                    match b_path {
                        "/v1/memes/:meme_id" => delete_meme(state, request.url_params().get("meme_id").unwrap()),
                        _ if { r_path.starts_with("/v1/") } => {
                            let blob = match get_blob() {
                                Some(blob) => blob.bytes,
                                None => vec![],
                            };
                            proxy(
                                &format!("{MEMEDECK_API}{r_path}?{}", stringify_params(request.query_params())),
                                http::Method::DELETE, blob,
                                req_h,
                                headers.clone()
                            )
                        },
                        _ => Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                    }
                }
                _ => {
                    println!("unknown request: {:?}", request);
                    Ok(send_response(StatusCode::METHOD_NOT_ALLOWED, None, vec![]))
                }
            }
        }
        _ => {
            println!("Ignored non-HTTP server request");
            Ok(())
        }
    }
}

fn create_meme(state: &mut MemeDeckState) -> anyhow::Result<()> {
    let Some(blob) = get_blob() else {
        return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
    };
    // Extract the URL from the request body
    let mut upload_data = serde_json::from_slice::<CreateMemeRequest>(&blob.bytes)?;
    // 1. generate unique filename, save the file to vfs
    let filename = format!("images/{}", Uuid::new_v4().to_string().replace("-", "_"));
    let bytes = match upload_data.bytes.clone() {
        Some(b) => b,
        None => {
            match send_request_await_response(
                http::Method::POST,
                url::Url::parse(&upload_data.source_url.clone().unwrap_or("".into()))?,
                None,
                10000,
                vec![],
            ) {
                Ok(resp) => {
                    resp.body().clone()
                }
                Err(_) => return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
            }
        }
    };
    // 2. Make the file publically accessible
    bind_http_static_path(&filename, false, false, Some(upload_data.filetype.clone()), bytes)?;
    // 3. POST it to the api, so that it can save the metadata to the graph
    upload_data.filename = filename;
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));
    println!("sending to api");
    match send_request_await_response(
        http::Method::POST,
        url::Url::parse(&format!("{MEMEDECK_API}/v1/memes"))?,
        Some(api_headers),
        10000,
        serde_json::to_vec(&upload_data)?,
    ) {
        Ok(resp) => {
            let mut response_headers = HashMap::new();
            response_headers.insert("content-type".to_string(), "application/json".to_string());
            // 4. proxy/return the response of the api to the client
            Ok(send_response(resp.status(), Some(response_headers), resp.body().clone()))
        }
        Err(_) => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    }
}

fn delete_meme(state: &mut MemeDeckState, meme_id: &String) -> anyhow::Result<()> {
    // 1. unbind the http path to the meme
    let filename = format!("images/{meme_id}");
    unbind_http_path(&filename)?;
    // 2. forward the request to the api for metadata
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));
    match send_request_await_response(
        http::Method::DELETE,
        url::Url::parse(&format!("{MEMEDECK_API}/v1/memes/{meme_id}"))?,
        Some(api_headers),
        10000,
        vec![],
    ) {
        Ok(resp) => {
            let mut response_headers = HashMap::new();
            response_headers.insert("content-type".to_string(), "application/json".to_string());
            // 4. proxy/return the response of the api to the client
            Ok(send_response(resp.status(), Some(response_headers), resp.body().clone()))
        }
        Err(_) => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    }
}

fn composed_upload(state: &mut MemeDeckState, meme_id: &String) -> anyhow::Result<()> {
    println!("composed_upload for meme_id: {meme_id}");
    let Some(blob) = get_blob() else {
        return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
    };

    // Deserialize the JSON payload into ComposedUploadRequest
    let mut upload_data: ComposedUploadRequest = serde_json::from_slice(&blob.bytes)?;

    // Extract the fields from the request body
    let width = upload_data.width;
    let height = upload_data.height;
    let filetype = upload_data.filetype.clone();

    // 1. Generate unique filename, save the file to vfs
    let filename = format!("images/{}", Uuid::new_v4().to_string().replace("-", "_"));
    upload_data.filename = Some(filename.clone());
    
    // 2. Make the file publically accessible
    let bytes = match upload_data.bytes.clone() {
        Some(b) => b,
        None => return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    };
    bind_http_static_path(&filename, false, false, Some(upload_data.filetype.clone()), bytes)?;

    // Remove the `bytes` field since we've uploaded to Kinode
    // let mut upload_data_value = serde_json::to_value(&upload_data)?;
    // if let Some(map) = upload_data_value.as_object_mut() {
    //     map.remove("bytes");
    // }

    // Serialize the JSON payload back
    let payload_body = serde_json::to_vec(&upload_data)?;

    // 3. POST it to the API, so that it can save the metadata to the graph
    // Add headers
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));

    let payload_body_str = String::from_utf8_lossy(&payload_body).to_string();
    println!("sending to api: {payload_body_str}");

    match send_request_await_response(
        http::Method::POST,
        url::Url::parse(&format!("{MEMEDECK_API}/v1/memes/{meme_id}/composed-upload"))?,
        Some(api_headers),
        10000,
        payload_body
    ) {
        Ok(resp) => {
            let mut response_headers = HashMap::new();
            response_headers.insert("content-type".to_string(), "application/json".to_string());
            // 4. Proxy/return the response of the API to the client
            let resp_string = String::from_utf8_lossy(resp.body()).to_string();
            println!("resp_string {resp_string}");
            Ok(send_response(resp.status(), Some(response_headers), resp.body().clone()))
        }
        Err(_) => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    }
}

fn get_oauth_callback(
    our: &Address,
    state: &mut MemeDeckState,
    mut headers: HashMap<String, String>,
    request: IncomingHttpRequest,
) -> anyhow::Result<()> {
    println!("starting kinode oauth callback to twitter");
    let params = request.query_params();
    match params.get("oauth_token") {
        None => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
        Some(oauth_token) => {
            let verifier = params.get("oauth_verifier").unwrap().clone();
            let payload = KinodeLoginInfo {
                token: oauth_token.clone(),
                verifier,
                kinode_location: Some(format!("{}{}", state.public_address, url_pre(our))),
            };
            let mut api_headers: HashMap<String, String> = HashMap::new();
            api_headers.insert("content-type".into(), "application/json".into());
            let api_url = format!("{MEMEDECK_API}/v1/auth/twitter/kinode_callback");
            println!("{api_url}");
            let (kinode_cookie, profile): (String, TwitterProfile) = match send_request_await_response(
                http::Method::POST,
                url::Url::parse(&api_url)?,
                Some(api_headers),
                10000,
                serde_json::to_vec(&payload)?
            ) {
                Ok(resp) => {
                    println!("{resp:?}");
                    let r_headers = resp.headers();
                    println!("{r_headers:?}");
                    Ok((
                        r_headers.get("set-cookie").unwrap_or(&http::HeaderValue::from_static("no set-cookie")).to_str()?.to_string(),
                        serde_json::from_slice(resp.body())?
                    ))
                }
                Err(e) => Err(anyhow::anyhow!("error: {}", e)),
            }?;
            println!("api cookie: {kinode_cookie}");
            state.api_cookie = Some(format!("{};", kinode_cookie.split(";").next().unwrap_or("")));
            state.profile = Some(profile);
            state.save();

            headers.insert("Location".into(), url_pre(our));
            Ok(send_response(
                StatusCode::TEMPORARY_REDIRECT,
                Some(headers),
                vec![],
            ))
        }
    }
}

fn get_login_with_twitter(our: &Address, state: &mut MemeDeckState, request: IncomingHttpRequest) -> anyhow::Result<()> {
    let url = request.query_params().get("redirect_url").unwrap();
    let redirect = format!("{MEMEDECK_API}/v1/auth/twitter/kinode_login?redirect_url={url}&kinode_location={}", format!("{}{}", state.public_address, url_pre(our)));
    let mut headers = HashMap::new();
    headers.insert("Location".into(), redirect);
    Ok(send_response(
        StatusCode::TEMPORARY_REDIRECT,
        Some(headers),
        vec![],
    ))
}

fn toggle_follow(state: &mut MemeDeckState, r_path: &str) -> anyhow::Result<()> {
    let parts: Vec<&str> = r_path.split("/").collect();
    let node_id = parts[2];
    let toggle = parts[3];
    let mut iter = state.following.iter();
    Ok(if toggle == "follow" {
        match iter.find(|&n| node_id == n) {
            None => {
                state.following.push(node_id.into());
                state.save();
                send_response(StatusCode::NO_CONTENT, None, vec![]);
            }
            Some(_) => {
                println!("{node_id} already is being followed");
                send_response(
                    StatusCode::IM_A_TEAPOT,
                    None,
                    serde_json::to_vec(&serde_json::json!("already being followed"))?,
                );
            }
        }
    } else {
        match iter.position(|n| node_id == n) {
            None => {
                println!("{node_id} already is not being followed");
                send_response(
                    StatusCode::IM_A_TEAPOT,
                    None,
                    serde_json::to_vec(&serde_json::json!("already not being followed"))?,
                );
            }
            Some(index) => {
                state.following.swap_remove(index);
                state.save();
                send_response(StatusCode::NO_CONTENT, None, vec![]);
            }
        }
    })
}

fn toggle_block(state: &mut MemeDeckState, r_path: &str) -> anyhow::Result<()> {
    let parts: Vec<&str> = r_path.split("/").collect();
    let node_id = parts[2];
    let toggle = parts[3];
    let mut iter = state.blocked.iter();
    Ok(if toggle == "block" {
        match iter.find(|&n| node_id == n) {
            None => {
                state.blocked.push(node_id.into());
                state.save();
                send_response(StatusCode::NO_CONTENT, None, vec![]);
            }
            Some(_) => {
                println!("{node_id} already is being blocked");
                send_response(
                    StatusCode::IM_A_TEAPOT,
                    None,
                    serde_json::to_vec(&serde_json::json!("already being blocked"))?,
                );
            }
        }
    } else {
        match iter.position(|n| node_id == n) {
            None => {
                println!("{node_id} already is not being blocked");
                send_response(
                    StatusCode::IM_A_TEAPOT,
                    None,
                    serde_json::to_vec(&serde_json::json!("already not being blocked"))?,
                );
            }
            Some(index) => {
                state.blocked.swap_remove(index);
                state.save();
                send_response(StatusCode::NO_CONTENT, None, vec![]);
            }
        }
    })
}

fn proxy(to: &str, method: http::Method, body: Vec<u8>, mut req_headers: HashMap<String, String>, mut headers: HashMap<String, String>) -> anyhow::Result<()> {
    println!("proxying {to}");
    req_headers.insert("host".to_string(), "api.memedeck.xyz".to_string());
    println!("{req_headers:?}");
    match send_request_await_response(
        method, 
        url::Url::parse(to).unwrap(),
        Some(req_headers),
        10000,
        body
    ) {
        Ok(resp) => {
            let body = resp.body();
            println!("status: {:?}, headers: {:?}", resp.status(), resp.headers());
            match resp.status() {
                StatusCode::OK => {
                    headers.remove("Content-Type");
                    headers.insert(
                        "Content-Type".to_string(),
                        match resp.headers().get("Content-Type") {
                            None => "text/html".to_string(),
                            Some(v) => v.to_str().unwrap().to_string(),
                        }
                    );
                    Ok(send_response(
                        StatusCode::OK,
                        Some(headers),
                        body.clone(),
                    ))
                },
                StatusCode::UNAUTHORIZED => Ok(send_response(StatusCode::UNAUTHORIZED, None, vec![])),
                StatusCode::INTERNAL_SERVER_ERROR =>
                    Ok(send_response(StatusCode::INTERNAL_SERVER_ERROR, Some(plain_hm(resp.headers().clone())), vec![])),
                _ => Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
            }
        }
        Err(e) => Err(anyhow::anyhow!("error: {}", e)),
    }
}

/*
fn curl(
    m: http::Method,
    u: url::Url,
    h: Option<HashMap<String, String>>,
    t: u64,
    b: Vec<u8>,
) -> anyhow::Result<String> {
    match send_request_await_response(m, u, h, t, b) {
        Ok(resp) => {
            let response: String = String::from_utf8_lossy(resp.body()).to_string();
            Ok(response)
        }
        Err(e) => Err(anyhow::anyhow!("error: {}", e)),
    }
}
*/

fn stringify_params(p: &HashMap<String,String>) -> String {
    let mut r = String::new();
    for k in p.keys() {
        r.push_str(k);
        r.push_str("=");
        r.push_str(&default_percent_enc(p.get(k).unwrap()));
        r.push_str("&");
    }
    r
}

fn plain_hm(m: HeaderMap<HeaderValue>) -> HashMap<String, String> {
    let mut result = HashMap::new();
    for key in m.keys() {
        let mut newval = String::new();
        let mut i = 0;
        for val in m.get_all(key).iter() {
            if i > 0 { newval.push_str("; "); }
            newval.push_str(val.to_str().unwrap());
            i += 1;
        }
        result.insert(key.as_str().into(), newval);
    }
    result
}

fn replace_reserved_dynamic_next_page(our: &Address, r_path: &str, headers: &mut HashMap<String, String>, file: &str, prop_name: &str, id: &str) {
    headers.remove("Content-Type");
    let filepath = if r_path.ends_with(".txt") {
        headers.insert("Content-Type".to_string(), "text/plain".to_string());
        format!("{}/pkg/ui/{file}.txt", our.package_id())
    } else {
        headers.insert("Content-Type".to_string(), "text/html".to_string());
        format!("{}/pkg/ui/{file}.html", our.package_id())
    };
    let root = open_file(&filepath, false, None);
    match root {
        Err(_) => send_response(StatusCode::NOT_FOUND, None, vec![]),
        Ok(file) => {
            // Reads the entire file, from start position.
            // Returns a vector of bytes.
            let contents = file.read().unwrap();
            let mut contents = String::from_utf8_lossy(&contents).to_string();
            let matcher = r#"propsForComponent\":{\"params\":{}"#;
            if contents.contains(matcher) {
                let new_str = format!("propsForComponent\\\":{{\\\"params\\\":{{\\\"{prop_name}\\\":\\\"{id}\\\"}}");
                contents = contents.replace(matcher, &new_str);
            }
            send_response(
                StatusCode::OK,
                Some(headers.clone()),
                contents.as_bytes().to_vec(),
            )
        }
    }
}

fn url_pre(our: &Address) -> String {
    format!("/{}:{}", our.process(), our.package_id())
}

fn default_percent_enc(string: &str) -> String {
    utf8_percent_encode(string, FRAGMENT).to_string()
}
