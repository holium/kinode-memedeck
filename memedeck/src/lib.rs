use std::collections::HashMap;
use std::time::{SystemTime, UNIX_EPOCH};
use uuid::Uuid;
use kinode_process_lib::{
    await_message, call_init, println, Address, ProcessId,
    Message, get_blob, http, Request, Response, spawn, OnExit,
    http::{
        server::{HttpServerRequest, HttpBindingConfig, HttpServer, IncomingHttpRequest, send_response},
        StatusCode,
        client::send_request_await_response, 
    },
    vfs::{create_drive, open_file, create_file, open_dir},
    our_capabilities,
    timer::set_timer,
};
use storage_interface::Request as StorageRequest;
use storage_interface::Response as StorageResponse;
use storage_interface::TweetData;
use llm_interface::openai::LLMRequest;
use llm_interface::openai::LLMResponse;
use llm_interface::openai::MessageBuilder;
use llm_interface::openai::ChatRequestBuilder;
mod tg;
mod types;
use types::{
    CreateMemeRequest,
    ComposedUploadRequest,
    FaceswapUploadRequest,
    PublicAddress, MemeDeckState,
    TwitterProfile,
    KinodeLoginInfo,
    AdminTerminalRequest,
    MemedeckKinodeRequest,
    ConfigSubmission,
    NewGeneratedImage,
};
use std::str::FromStr;
use shared::{
    GENERATION_MEMEDECK_API, MEMEDECK_API,
    WorkerRequest, proxy, plain_hm, stringify_params
};

const ICON: &str = include_str!("icon");
const LLM_ADDRESS: (&str, &str, &str, &str) =
    ("our", "openai", "memedeck", "meme-deck.os");
const LLM_FALLBACK_ADDRESS: (&str, &str, &str, &str) =
    ("meme-deck.os", "memedeck", "memedeck", "meme-deck.os");

wit_bindgen::generate!({
    path: "target/wit",
    world: "process-v0",
});

call_init!(init);

fn init(our: Address) {
    println!("memedeck: started");

    // add ourselves to the homepage
    kinode_process_lib::homepage::add_to_homepage(
        "MemeDeck",
        Some(ICON),
        Some("/"),
        None, // widget
    );

    let private_paths = vec!["/", "/_next/static/*", "/trending", "/home", "/library", "/library/saved", "/library/uploads", "/search", "/telegram-bot", "/studio"];
    let public_paths = vec!["/images", "/favicon.ico"];
    let mut server = HttpServer::new(30);
    let conf = HttpBindingConfig::new(true, false, false, None);
    let open_conf = HttpBindingConfig::new(false, false, false, None);
    let _ = server.serve_ui(&our, "ui", private_paths, conf.clone());
    let _ = server.serve_ui(&our, "ui", public_paths, open_conf.clone());
    //let _ = serve_ui(&our, "ui", false, false, public_paths);
    //let _ = bind_http_path("/", true, false);
    let _ = server.bind_http_path("/set_tg_bot/:token/:character/:posts_per_hour", conf.clone());
    let _ = server.bind_http_path("/new_generated_image", open_conf.clone());
    let _ = server.bind_http_path("/submit_settings", open_conf.clone());
    let _ = server.bind_http_path("/set_public_address", conf.clone());
    let _ = server.bind_http_path("/v2/auth/twitter/login", conf.clone());
    let _ = server.bind_http_path("/twitter_callback", open_conf);
    let _ = server.bind_http_path("/v2/images", conf.clone());
    let _ = server.bind_http_path("/v2/memes/:meme_id", conf.clone());
    let _ = server.bind_http_path("/v2/memes/:meme_id/composed-upload", conf.clone());
    let _ = server.bind_http_path("/v2/memes/:meme_id/panel/:panel_id", conf.clone());
    let _ = server.bind_http_path("/v2/memes/:meme_id/panel/:panel_id/faceswap-upload", conf.clone());
    let _ = server.bind_http_path("/v1/*", conf.clone());
    let _ = server.bind_http_path("/v2/*", conf.clone());
    let _ = server.bind_http_path("/deck/edit/:deck_id", conf.clone());
    let _ = server.bind_http_path("/deck/:deck_id", conf.clone());
    let _ = server.bind_http_path("/home/:meme_id", conf.clone());
    let _ = server.bind_http_path("/trending/:meme_id", conf.clone());
    let _ = server.bind_http_path("/u/:uid/bookmarks", conf.clone());
    let _ = server.bind_http_path("/u/:uid/drafts", conf.clone());
    let _ = server.bind_http_path("/u/:uid/decks", conf.clone());
    let _ = server.bind_http_path("/u/:uid", conf.clone());
    let _ = server.bind_http_path("/deck/:id", conf.clone());
    let _ = server.bind_http_path("/deck/:id/edit", conf.clone());
    let _ = server.bind_http_path("/_next/image", conf.clone());

    let mut state = MemeDeckState::load();

    // rebind all the local images
    let Ok(drive_path) = create_drive(our.package_id(), "img", None) else {
        return println!("can't create_drive {}/img", our.package_id());
    };
    let Ok(dir) = open_dir(&format!("{drive_path}/images"), state.should_create_images_dir, None) else {
        return println!("coudln't open images dir {drive_path}/images");
    };
    state.should_create_images_dir = false;
    state.save();
    if let Ok(entries) = dir.read() {
        for img in entries {
            let Ok(file) = open_file(&img.path.clone(), false, None) else {
                return println!("open_file failed {}", img.path);
            };
            let Ok(contents) = file.read() else {
                return println!("couldn't read file {}", img.path);
            };
            let path = img.path.clone();
            let content_type = match path.split(".").last() {
                Some(s) => s,
                None => "jpeg"
            };
            let mut iter = img.path.split("/");
            let _ = iter.next();
            let _ = iter.next();
            let bind_path_vec: Vec<&str> = iter.collect();
            let bind_path = bind_path_vec.join("/");
            println!("binding {bind_path}");
            let _ = server.bind_http_static_path(bind_path, false, false, Some(format!("image/{content_type}")), contents);
        }
        println!("done binding static images");
    } else {
        println!("couldn't get the entires from images dir");
    };

    // start sub-processes if we know the needed info for them
    if let Some(token) = state.telegram_token.clone() {
        match start_tg(&our, &mut state, &token) {
            Ok(_) => (),
            Err(e) => println!("start_tg failed: {e}"),
        };
        match start_bot_if_ready(&our, &mut state) {
            Ok(_) => (),
            Err(e) => println!("start_bot_if_ready failed: {e}"),
        }
    }

    loop {
        match await_message() {
            Err(send_error) => {
                println!("{}: got network error: {send_error:?}", our);
                continue;
            }
            Ok(message) => match handle_request(&our, &mut state, &message, &mut server) {
                Ok(()) => continue,
                Err(e) => println!("error handling request: {:?}", e),
            },
        }
    }
}

fn handle_request(
    our: &Address,
    state: &mut MemeDeckState,
    message: &Message,
    server: &mut HttpServer,
) -> anyhow::Result<()> {
    let proc = message.source().process.clone();
    if message.source().node == our.node && proc == "http_server:distro:sys"
    {
        //println!("handle_http_server_request");
        handle_http_server_request(our, &message.body(), state, server)
    } else if message.source().node == our.node && proc.package_name == "terminal" && proc.publisher_node == "sys" {
        //println!("handle_admin_request");
        handle_admin_request(our, &message.body(), state)
    } else if state.tg_process_address.is_some() && state.tg_process_address.clone().unwrap() == message.source().clone() {
        //println!("handle_tg_request");
        handle_tg_request(our, &message.body(), state)
    } else if !message.is_request() {
        //it's a response which currently we only accept from timer
        send_recent_tweets_batch_to_api(state)
    } else if message.source().node != our.node {
        println!("message source: {:?}", message.source());
        let Ok(meme_request) = serde_json::from_slice::<MemedeckKinodeRequest>(message.body()) else {
            return Err(anyhow::anyhow!("invalid meme deck request"));
        };
        handle_kinode_meme_request(our, meme_request)
    } else {
        Err(anyhow::anyhow!("unhandled message type"))
    }
}

fn handle_kinode_meme_request(
    our: &Address,
    request: MemedeckKinodeRequest
) -> anyhow::Result<()> {
    println!("handling kinode meme request as our: {our}");
    match request {
        MemedeckKinodeRequest::GroqForMe(prompt) => {
            if our.node != "meme-deck.os" {
                return Err(anyhow::anyhow!("We aren't letting random people use our api key"));
            }
            // Send the prompt to llama3-70b
            let request = ChatRequestBuilder::default()
                .model("llama3-70b-8192".to_string())
                .messages(vec![MessageBuilder::default()
                    .role("user".to_string())
                    .content(prompt.clone())
                    .build()?])
                .build()?;
            let request = serde_json::to_vec(&LLMRequest::GroqChat(request))?;
            let response = Request::to(LLM_ADDRESS)
                .body(request)
                .send_and_await_response(10)??;
            match Response::new().body(response.body()).send() {
                Ok(_) => Ok(()),
                Err(e) => Err(anyhow::anyhow!("{e}")),
            }
        }
    }
}

fn handle_http_server_request(
    our: &Address,
    body: &[u8],
    state: &mut MemeDeckState,
    server: &mut HttpServer,
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
                    //println!("GET {r_path}");
                    // Route to appropriate endpoint based on the path
                    match b_path {
                        "/twitter_callback" => get_oauth_callback(our, state, headers, request),
                        "/v2/auth/twitter/login" => get_login_with_twitter(state, request),
                        "/_next/image" => {
                            let params = request.query_params();
                            headers.remove("Content-Type");
                            headers.insert("Location".into(), params.get("url").unwrap().clone());
                            Ok(send_response(StatusCode::TEMPORARY_REDIRECT, Some(headers), vec![]))
                        }
                        "/deck/:id" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "deck/reserved", "deckId",
                            request.url_params().get("id").unwrap()
                        )),
                        "/deck/:id/edit" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "deck/reserved/edit", "deckId",
                            request.url_params().get("id").unwrap()
                        )),
                        "/home/:meme_id" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "home/reserved", "memeId",
                            request.url_params().get("meme_id").unwrap()
                        )),
                        "/trending/:meme_id" => Ok(replace_reserved_dynamic_next_page(
                            our, r_path, &mut headers,
                            "trending/reserved", "memeId",
                            request.url_params().get("meme_id").unwrap()
                        )),
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
                        _ if { r_path.starts_with("/v1/") || r_path.starts_with("/v2/") } => proxy(
                            &format!("{MEMEDECK_API}{r_path}?{}", stringify_params(request.query_params())),
                            http::Method::GET, vec![],
                            req_h,
                            headers.clone()
                        ),
                        _ => {
                            //println!("unmatched path: {}", r_path);
                            Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                        }
                    }
                }
                "POST" => {
                    //println!("POST {r_path}");
                    match r_path {
                        "/new_generated_image" => {
                            let Some(blob) = get_blob() else {
                                return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
                            };
                            let details = serde_json::from_slice::<NewGeneratedImage>(&blob.bytes)?;
                            let bytes = match send_request_await_response(
                                http::Method::GET,
                                url::Url::parse(&details.url)?,
                                None,
                                10000,
                                vec![],
                            ) {
                                Ok(resp) => resp.body().clone(),
                                Err(_) => return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
                            };
                            let file = create_file(&format!("{}/img/images/{}.{}", our.package_id(), details.name, details.filetype), None)?;
                            file.write(&bytes)?;
                            // 2. Make the file publically accessible
                            let access_path = format!("images/{}.{}", details.name, details.filetype);
                            server.bind_http_static_path(
                                &access_path,
                                false,
                                false,
                                Some(format!("image/{}", details.filetype)),
                                bytes
                            )?;
                            Ok(send_response(
                                StatusCode::OK,
                                Some(headers.clone()),
                                format!("{}/memedeck:{}/{access_path}", state.public_address, our.package_id()).as_bytes().to_vec()
                            ))
                        }
                        "/submit_settings" => {
                            let Some(blob) = get_blob() else {
                                return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
                            };
                            let config = serde_json::from_slice::<ConfigSubmission>(&blob.bytes)?;
                            //println!("groq_key: {}", config.groq_key);
                            let req = serde_json::to_vec(
                                &llm_interface::openai::LLMRequest::RegisterGroqApiKey(
                                    llm_interface::openai::RegisterApiKeyRequest {
                                        api_key: config.groq_key,
                                    },
                                ),
                            )?;
                            let _ = Request::new()
                                .target(Address::new(&our.node, ("openai", "memedeck", "meme-deck.os")))
                                .body(req)
                                .send_and_await_response(5)??;

                            Ok(send_response(
                                StatusCode::OK,
                                Some(headers.clone()),
                                b"{\"message\": \"success\"}".to_vec()
                            ))
                        },
                        "/set_public_address" => {
                            let Some(blob) = get_blob() else {
                                return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
                            };
                            let upload_data = serde_json::from_slice::<PublicAddress>(&blob.bytes)?;
                            state.public_address = upload_data.url.clone();
                            //println!("setting addr: {}", upload_data.url);
                            state.save();

                            Ok(send_response(
                                StatusCode::OK,
                                Some(headers.clone()),
                                serde_json::to_vec(
                                    &serde_json::json!({"address":state.public_address.clone()}),
                                )?,
                            ))
                        }
                        "/v2/images" => create_meme(our, state, server),
                        _ if { r_path.starts_with("/v2/memes/") && r_path.ends_with("/composed-upload") } => {
                            let parts: Vec<&str> = r_path.split("/").collect();
                            let meme_id = parts[3];
                            let meme_id_str = meme_id.to_string();
                            return composed_upload(state, &meme_id_str, server);
                        }
                        _ if { r_path.starts_with("/v2/memes/") && r_path.ends_with("/faceswap-upload") } => {
                            let parts: Vec<&str> = r_path.split("/").collect();
                            let meme_id = parts[3];
                            let meme_id_str = meme_id.to_string();
                            let panel_id = parts[5];
                            let panel_id_str = panel_id.to_string();
                            return faceswap_upload(state, &meme_id_str, &panel_id_str, server);
                        }
                        _ if { r_path.starts_with("/v1/") || r_path.starts_with("/v2/") } => {
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
                        _ if { r_path.starts_with("/set_tg_bot/") } => {
                            let token = request.url_params().get("token").unwrap();
                            let character = request.url_params().get("character").unwrap();
                            let posts_per_hour: u64 = request.url_params().get("posts_per_hour").unwrap().parse().unwrap_or(60);
                            state.tg_character_id = Some(character.clone());
                            state.tg_posts_per_hour = posts_per_hour;
                            start_tg(our, state, &token)?;
                            start_bot_if_ready(our, state)
                        }
                        _ => Ok(send_response(StatusCode::NOT_FOUND, None, vec![]))
                    }
                }
                "PUT" => {
                    //println!("PUT {r_path}");
                    match b_path {
                        _ if { r_path.starts_with("/v1/") || r_path.starts_with("/v2/") } => {
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
                    //println!("DELETE {r_path}");
                    match b_path {
                        "/v2/memes/:meme_id" => delete_meme(state, request.url_params().get("meme_id").unwrap(), server),
                        _ if { r_path.starts_with("/v1/") || r_path.starts_with("/v2/") } => {
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

fn handle_tg_request(
    our: &Address,
    body: &[u8],
    state: &mut MemeDeckState,
) -> anyhow::Result<()> {
    if let Some(token) = state.telegram_token.clone() {
        let bot_id: u64 = token.split(":").next().unwrap().parse().unwrap();
        match tg::get_most_recently_joined_chat(bot_id, body) {
            Some(id) => {
                state.tg_chat_id = Some(id);
                println!("state.tg_chat_id: {:?}", state.tg_chat_id);
                state.save();
                if let Err(e) = start_bot_if_ready(our, state) {
                    println!("start_bot_if_ready error: {e:?}");
                    return Err(e);
                }
            }
            None => ()
        }
    }
    Ok(())
}

fn start_tg(our: &Address, state: &mut MemeDeckState, token: &str) -> anyhow::Result<()> {
    let tg_bot_wasm_path = format!("{}/pkg/tg.wasm", our.package_id());
    // give spawned process both our caps, and grant http_client messaging.
    let http_client = ProcessId::from_str("http_client:distro:sys").unwrap();
    let process_id = spawn(
        Some("tg"),
        &tg_bot_wasm_path,
        OnExit::None,
        our_capabilities(),
        vec![http_client, "http_server:distro:sys".parse().unwrap()],
        false,
    )?;
    let worker_address = Address {
        node: our.node.clone(),
        process: process_id.clone(),
    };
    state.tg_process_address = Some(worker_address.clone());

    tg::init_tg(token, &worker_address)?;
    tg::subscribe(&worker_address)?;
    state.telegram_token = Some(token.into());
    state.save();
    Ok(())
}

fn start_bot_if_ready(our: &Address, state: &mut MemeDeckState) -> anyhow::Result<()> {
    if state.telegram_token.is_none() {
        println!("telegram_token not set, bot not starting");
        return Ok(());
    }
    if state.tg_process_address.is_none() {
        println!("tg_process_address not set, bot not starting");
        return Ok(());
    }
    let Some(chat_id) = state.tg_chat_id else {
        println!("chat_id not set, bot not starting");
        return Ok(());
    };
    let Some(character) = state.tg_character_id.clone() else {
        println!("character not set, bot not starting");
        return Ok(());
    };
    // this function actually spawns the child process
    let spawned_process_id: ProcessId = match spawn(
        // name of the child process
        Some("worker"),
        // path to find the compiled Wasm file for the child process
        &format!("{}/pkg/worker.wasm", our.package_id()),
        OnExit::None,
        our_capabilities(),
        vec![
            "http_client:distro:sys".parse().unwrap(),
            "terminal:terminal:sys".parse().unwrap(),
            "timer:distro:sys".parse().unwrap(),
            state.tg_process_address.clone().unwrap().process,
        ],
        false,
    ) {
        Ok(spawned_process_id) => spawned_process_id,
        Err(e) => {
            panic!("couldn't spawn {e:?}");
        }
    };

    let our_worker_address = Address {
        node: our.node.clone(),
        process: spawned_process_id,
    };

    let _resp = Request::new()
        .body(serde_json::to_vec(&WorkerRequest::Initialize {
            chat_id,
            character,
            tg_address: state.tg_process_address.clone().unwrap_or(our.clone()),
            query_interval: 60 * 60_000 / state.tg_posts_per_hour,
            cookie: state.api_cookie.clone().unwrap_or("".into())
        })?)
        .target(&our_worker_address)
        .send_and_await_response(5)??;
    Ok(())
}

fn handle_admin_request(
    our: &Address,
    body: &[u8],
    state: &mut MemeDeckState,
) -> anyhow::Result<()> {
    let admin_request = serde_json::from_slice::<AdminTerminalRequest>(body).map_err(|e| {
        println!("Failed to parse admin request: {:?}", e);
        e
    })?;

    match admin_request {
        //m our@memedeck:memedeck:meme-deck.os '"StartLLMBatchTimer"'
        AdminTerminalRequest::StartLLMBatchTimer => {
            if state.timer_is_set {
                return Err(anyhow::anyhow!("timer is alreay set, no need to run this again"));
            }
            println!("starting the llm batch timer, will run 1x per day. (running right away)");
            set_timer(1000 * 60 * 60 * 24, None);
            state.timer_is_set = true;
            state.save();
            send_recent_tweets_batch_to_api(state)
        },
        //m our@memedeck:memedeck:meme-deck.os '"CreatePromptBatchFromTweets"'
        AdminTerminalRequest::CreatePromptBatchFromTweets => {
            send_recent_tweets_batch_to_api(state)
        },
        //m our@memedeck:memedeck:meme-deck.os '{"SetToken":"7270979454:AAEjH7mfC-ZVOimVDsAhWJw87g1PxQriMfc"}'
        AdminTerminalRequest::SetToken(s) => {
            start_tg(our, state, &s)
        },

        //m our@memedeck:memedeck:meme-deck.os '{"StartCharacterMonitorBot":{"chat_id":-4278984459,"character":"apu_apustaja"}}'
        AdminTerminalRequest::StartCharacterMonitorBot { chat_id, character, } => {
            state.tg_character_id = Some(character);
            state.tg_chat_id = Some(chat_id);
            state.save();
            start_bot_if_ready(our, state)
        }

        //m our@memedeck:memedeck:meme-deck.os '"StopCharacterMonitorBot"'
        AdminTerminalRequest::StopCharacterMonitorBot => {
            // TODO: kill the tg process
            let our_worker_address = Address {
                node: our.node.clone(),
                process: "worker:memedeck:meme-deck.os".parse().unwrap(),
            };

            let _resp = Request::new()
                .body(serde_json::to_vec(&WorkerRequest::Kill)?)
                .target(&our_worker_address)
                .send_and_await_response(5)??;
            Ok(())
        }
    }
}

fn send_recent_tweets_batch_to_api(state: &MemeDeckState) -> anyhow::Result<()> {
    // Get the unix time between now and 24 hours ago.
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs() as i64;
    let yesterday = now - 86400 as i64; // Subtract 86400 seconds (1 day) from the current time

    // Send the request to storage to get the tweets from the last 24 hours.
    let request = serde_json::to_vec(&StorageRequest::GetTweets {
        start_time: yesterday,
        end_time: now,
    })?;
    let storage_address: (&str, &str, &str, &str) =
        ("our", "storage", "memedeck", "meme-deck.os");
    let Ok(Ok(response)) = Request::to(storage_address)
        .body(request)
        .send_and_await_response(30)
    else {
        return Err(anyhow::anyhow!("openai didn't response to our request properly"));
    };

    // Parse the response from storage.
    let body = response.body();
    let response: StorageResponse = serde_json::from_slice(&body)?;
    let StorageResponse::GetTweets { tweets } = response;

    // Extract the top 25 tweets by views
    let mut tweets_vec: Vec<(&String, &TweetData)> = tweets.iter().collect();
    tweets_vec.sort_by(|a, b| b.1.views.unwrap_or(0).cmp(&a.1.views.unwrap_or(0)));
    let top_25_tweets = tweets_vec.into_iter().take(25).collect::<Vec<_>>();
    if top_25_tweets.len() == 0 {
        return Err(anyhow::anyhow!("no tweets to send to batch"));
    }
    // Delineate the tweets with <start_tweet> and </end_tweet>
    let mut delineated_tweet_contents = String::new();
    for (_, tweet_data) in top_25_tweets {
        delineated_tweet_contents.push_str("\n<start_tweet>");
        delineated_tweet_contents.push_str(&tweet_data.content);
        delineated_tweet_contents.push_str("</end_tweet>");
    }

    // Make the prompt for the llm
    let prompt_url = format!("{GENERATION_MEMEDECK_API}/v2/generation/llm_prompt");
    let mut headers = HashMap::new();
    headers.insert("Content-Type".to_string(), "application/json".to_string());
    let prompt = match curl(http::Method::GET, url::Url::from_str(&prompt_url)?, Some(headers), 10000, vec![]) {
        Err(e) => {
            println!("warning: failed to read llm prompt from api... falling back to default prompt: {e}");
            format!("Given this list of the top 25 most popular tweets in my feed today, write me the 3-6 most common topics. Describe them in detail, as a 4chan user would, in order to create a descriptive and visually interesting image prompt for a diffusion model. Be silly and irreverent.
Respond in a JSON list of strings only! Do not respond with a prelude or anything else but valid json. ONLY RESPOND IN VALID JSON!
Don't be vague about the topics, talk about the exact specific topic. It's better to be more specific than vague.
\n\n{}", delineated_tweet_contents)
        },
        Ok(r) => {
            format!("{r}\n\n{delineated_tweet_contents}")
        }
    };

    // Send the prompt to llama3-70b
    let request = ChatRequestBuilder::default()
        .model("llama3-70b-8192".to_string())
        .messages(vec![MessageBuilder::default()
            .role("user".to_string())
            .content(prompt.clone())
            .build()?])
        .build()?;
    let request = serde_json::to_vec(&LLMRequest::GroqChat(request))?;
    let response = match Request::to(LLM_ADDRESS)
        .body(request)
        .send_and_await_response(10)? {
        Ok(r) => r,
        Err(_) => {
            Request::to(LLM_FALLBACK_ADDRESS)
                .body(serde_json::to_vec(&MemedeckKinodeRequest::GroqForMe(prompt))?)
                .send_and_await_response(30)??
        }
    };
    let LLMResponse::Chat(chat) = serde_json::from_slice(response.body())? else {
        println!("failed to parse LLM response");
        return Err(anyhow::anyhow!("Failed to parse LLM response"));
    };
    println!("sending to batch api:\n{}", chat.choices[0].message.content.clone());
    let prompts: Vec<String> = serde_json::from_str(&chat.choices[0].message.content)?;

    // transform to api batch endpoint format
    let prompts_payload = serde_json::json!({"prompts":prompts});
    // send to api
    let mut headers = HashMap::new();
    headers.insert("Content-Type".to_string(), "application/json".to_string());
    if let Some(cookie) = state.api_cookie.clone() {
        headers.insert("Cookie".into(), cookie);
    }
    let url = format!("{GENERATION_MEMEDECK_API}/v2/generation/batch");
    let resp_str = curl(
        http::Method::POST,
        url::Url::from_str(&url)?,
        Some(headers),
        10000,
        serde_json::to_vec(&prompts_payload)?
    )?;
    println!("api batch response: {}", resp_str);

    Ok(())
}

fn create_meme(our: &Address, state: &mut MemeDeckState, server: &mut HttpServer) -> anyhow::Result<()> {
    let Some(blob) = get_blob() else {
        return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
    };
    // Extract the URL from the request body
    let mut upload_data = serde_json::from_slice::<CreateMemeRequest>(&blob.bytes)?;
    // 1. generate unique filename, save the file to vfs
    let content_type = upload_data.filetype.clone();
    let extension = match content_type.split("/").last() {
        Some(s) => s,
        None => "png",
    };
    let filename = format!("images/{}.{extension}", Uuid::new_v4().to_string().replace("-", "_") );
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
                Ok(resp) => resp.body().clone(),
                Err(_) => return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
            }
        }
    };
    let file = create_file(&format!("{}/img/{filename}", our.package_id()), None)?;
    file.write(&bytes)?;
    // 2. Make the file publically accessible
    server.bind_http_static_path(&filename, false, false, Some(upload_data.filetype.clone()), bytes)?;
    // 3. POST it to the api, so that it can save the metadata to the graph
    upload_data.filename = filename;
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));
    match send_request_await_response(
        http::Method::POST,
        url::Url::parse(&format!("{MEMEDECK_API}/v2/images"))?,
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

fn delete_meme(state: &mut MemeDeckState, meme_id: &String, server: &mut HttpServer) -> anyhow::Result<()> {
    // 1. unbind the http path to the meme
    let filename = format!("images/{meme_id}");
    server.unbind_http_path(&filename)?;
    // 2. forward the request to the api for metadata
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));
    match send_request_await_response(
        http::Method::DELETE,
        url::Url::parse(&format!("{MEMEDECK_API}/v2/memes/{meme_id}"))?,
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

fn composed_upload(state: &mut MemeDeckState, meme_id: &String, server: &mut HttpServer) -> anyhow::Result<()> {
    let Some(blob) = get_blob() else {
        return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
    };

    // Deserialize the JSON payload into ComposedUploadRequest
    let mut upload_data: ComposedUploadRequest = serde_json::from_slice(&blob.bytes)?;

    // 1. Generate unique filename, save the file to vfs
    let filename = format!("images/{}", Uuid::new_v4().to_string().replace("-", "_"));
    upload_data.filename = Some(filename.clone());
    
    // 2. Make the file publically accessible
    let bytes = match upload_data.bytes.clone() {
        Some(b) => b,
        None => return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    };
    server.bind_http_static_path(&filename, false, false, Some(upload_data.filetype.clone()), bytes)?;

    // Remove the `bytes` field since we've uploaded to Kinode
    let mut upload_data_value = serde_json::to_value(&upload_data)?;
    if let Some(map) = upload_data_value.as_object_mut() {
        map.remove("bytes");
    }

    // Serialize the JSON payload back
    let payload_body = serde_json::to_vec(&upload_data_value)?;

    // 3. POST it to the API, so that it can save the metadata to the graph
    // Add headers
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));

    let _payload_body_str = String::from_utf8_lossy(&payload_body).to_string();

    match send_request_await_response(
        http::Method::POST,
        url::Url::parse(&format!("{MEMEDECK_API}/v2/memes/{meme_id}/composed-upload"))?,
        Some(api_headers),
        10000,
        payload_body
    ) {
        Ok(resp) => {
            let mut response_headers = HashMap::new();
            response_headers.insert("content-type".to_string(), "application/json".to_string());
            // 4. Proxy/return the response of the API to the client
            Ok(send_response(resp.status(), Some(response_headers), resp.body().clone()))
        }
        Err(_) => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
    }
}

fn faceswap_upload(state: &mut MemeDeckState, meme_id: &String, panel_id: &String, server: &mut HttpServer) -> anyhow::Result<()> {
    let Some(blob) = get_blob() else {
        return Ok(send_response(StatusCode::BAD_REQUEST, None, vec![]));
    };

    // Deserialize the JSON payload into ComposedUploadRequest
    let mut upload_data: FaceswapUploadRequest = serde_json::from_slice(&blob.bytes)?;

    // 1. Generate unique filename, save the file to vfs
    let filename = format!("images/{}", Uuid::new_v4().to_string().replace("-", "_"));
    upload_data.filename = Some(filename.clone());
    
    // 2. Make the file publically accessible
    let bytes = upload_data.bytes.clone();
    server.bind_http_static_path(&filename, false, false, Some(upload_data.filetype.clone()), bytes)?;

    // Remove the `bytes` field since we've uploaded to Kinode
    let mut upload_data_value = serde_json::to_value(&upload_data)?;
    if let Some(map) = upload_data_value.as_object_mut() {
        map.remove("bytes");
    }

    // Serialize the JSON payload back
    let payload_body = serde_json::to_vec(&upload_data_value)?;

    // 3. POST it to the API, so that it can save the metadata to the graph
    // Add headers
    let mut api_headers = HashMap::new();
    api_headers.insert("content-type".to_string(), "application/json".to_string());
    api_headers.insert("cookie".to_string(), state.api_cookie.clone().unwrap_or("".into()));

    match send_request_await_response(
        http::Method::POST,
        url::Url::parse(&format!("{MEMEDECK_API}/v2/memes/{meme_id}/panel/{panel_id}/faceswap-upload"))?,
        Some(api_headers),
        10000,
        payload_body
    ) {
        Ok(resp) => {
            let mut response_headers = HashMap::new();
            response_headers.insert("content-type".to_string(), "application/json".to_string());
            // 4. Proxy/return the response of the API to the client
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
    //println!("starting kinode oauth callback to twitter {}", state.public_address);
    let params = request.query_params();
    match params.get("oauth_token") {
        None => Ok(send_response(StatusCode::BAD_REQUEST, None, vec![])),
        Some(oauth_token) => {
            let verifier = params.get("oauth_verifier").unwrap().clone();
            let payload = KinodeLoginInfo {
                token: oauth_token.clone(),
                verifier,
                kinode_location: Some(state.public_address.clone()),
            };
            let mut api_headers: HashMap<String, String> = HashMap::new();
            api_headers.insert("content-type".into(), "application/json".into());
            let api_url = format!("{MEMEDECK_API}/v2/auth/twitter/kinode_callback");
            let (kinode_cookie, profile): (String, TwitterProfile) = match send_request_await_response(
                http::Method::POST,
                url::Url::parse(&api_url)?,
                Some(api_headers),
                10000,
                serde_json::to_vec(&payload)?
            ) {
                Ok(resp) => {
                    let r_headers = resp.headers();
                    Ok((
                        r_headers.get("set-cookie").unwrap_or(&http::HeaderValue::from_static("no set-cookie")).to_str()?.to_string(),
                        serde_json::from_slice(resp.body())?
                    ))
                }
                Err(e) => Err(anyhow::anyhow!("error: {}", e)),
            }?;
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

fn get_login_with_twitter(state: &mut MemeDeckState, request: IncomingHttpRequest) -> anyhow::Result<()> {
    let url = request.query_params().get("redirect_url").unwrap();
    let redirect = format!("{MEMEDECK_API}/v2/auth/twitter/kinode_login?redirect_url={url}&kinode_location={}", state.public_address);
    let mut headers = HashMap::new();
    headers.insert("Location".into(), redirect);
    Ok(send_response(
        StatusCode::TEMPORARY_REDIRECT,
        Some(headers),
        vec![],
    ))
}

fn curl(
    m: http::Method,
    u: url::Url,
    h: Option<HashMap<String, String>>,
    t: u64,
    b: Vec<u8>,
) -> anyhow::Result<String> {
    match send_request_await_response(m, u, h, t, b) {
        Ok(resp) => {
            //println!("{}", resp.status());
            let response: String = String::from_utf8_lossy(resp.body()).to_string();
            Ok(response)
        }
        Err(e) => Err(anyhow::anyhow!("error: {}", e)),
    }
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
            let matcher2 = format!(r#"{{\"{prop_name}\":\"$undefined\","#);
            if contents.contains(&matcher2) {
                let new_str = format!(r#"{{\":{prop_name}\":\"{id}\","#);
                contents = contents.replace(&matcher2, &new_str);
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

