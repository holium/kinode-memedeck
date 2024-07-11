use std::collections::HashMap;
use serde::{Serialize, Deserialize};
use kinode_process_lib::{
    //get_blob, Message,
    Request, Address,
    http::{
        Method, StatusCode,
        HeaderMap, HeaderValue,
        send_request_await_response, send_response,
    },
};
use percent_encoding::{utf8_percent_encode, AsciiSet, CONTROLS};
use frankenstein::{ChatId, Message as TgMessage, SendMessageParams, SendPhotoParams, ParseMode};
use telegram_interface::*;

pub const TG_ADDRESS: (&str, &str, &str, &str) = ("our", "tg", "memedeck", "meme-deck.os");
pub const MEMEDECK_API_PARTIAL: &str = "api.memedeck.xyz";
pub const MEMEDECK_API: &str = "https://api.memedeck.xyz";
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

#[derive(Debug, Serialize, Deserialize)]
pub enum WorkerRequest {
    Initialize {
        chat_id: i64,
        character: String,
        tg_address: Address,
        query_interval: u64,
        cookie: String,
    },
    ChangeInterval(u64),
    ChangeMinimum(u64),
    Kill
}

pub fn proxy(to: &str, method: Method, body: Vec<u8>, mut req_headers: HashMap<String, String>, mut headers: HashMap<String, String>) -> anyhow::Result<()> {
    println!("proxying {to}");
    req_headers.insert("host".to_string(), MEMEDECK_API_PARTIAL.to_string());
    //println!("{req_headers:?}");
    match send_request_await_response(
        method, 
        url::Url::parse(to).unwrap(),
        Some(req_headers),
        10000,
        body
    ) {
        Ok(resp) => {
            let body = resp.body();
            //println!("status: {:?}, headers: {:?}", resp.status(), resp.headers());
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

pub fn plain_hm(m: HeaderMap<HeaderValue>) -> HashMap<String, String> {
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

pub fn stringify_params(p: &HashMap<String,String>) -> String {
    let mut r = String::new();
    for k in p.keys() {
        r.push_str(k);
        r.push_str("=");
        r.push_str(&default_percent_enc(p.get(k).unwrap()));
        r.push_str("&");
    }
    r
}

fn default_percent_enc(string: &str) -> String {
    utf8_percent_encode(string, FRAGMENT).to_string()
}

pub fn send_bot_message(text: &str, id: i64, addr: &Address) -> anyhow::Result<TgMessage> {
    let params = SendMessageParams::builder()
        .chat_id(ChatId::Integer(id))
        .text(text)
        .parse_mode(ParseMode::Html)
        .build();
    let send_message_request = serde_json::to_vec(&TgRequest::SendMessage(params))?;
    let response = Request::to(addr)
        .body(send_message_request)
        .send_and_await_response(30)??;
    let TgResponse::SendMessage(message) = serde_json::from_slice(response.body())? else {
        println!("failed to send message");
        return Err(anyhow::anyhow!("Failed to send message"));
    };
    Ok(message)
}

pub fn send_bot_photo(pic: &str, caption: &str, chat_id: i64, addr: &Address) -> anyhow::Result<TgMessage> {
    println!("send_bot_photo() started");
    let params = SendPhotoParams::builder()
        .chat_id(ChatId::Integer(chat_id))
        .caption(caption)
        .photo(pic.to_string())
        .parse_mode(ParseMode::Html)
        .build();
    println!("params built");
    let send_photo_result = serde_json::to_vec(&TgRequest::SendPhoto(params));
    let Ok(send_request) = send_photo_result else {
        let err_msg = format!("{}", send_photo_result.unwrap_err());
        println!("TgRequest::SendPhoto to json error: {err_msg}");
        return Err(anyhow::anyhow!("{err_msg}"));
    };
    println!("json parsed to the send_photo TgRequest");
    println!("requesting to {addr} with {send_request:?}");
    let response = Request::to(addr)
        .body(send_request)
        .send_and_await_response(30);
    println!("request call complete");
    let Ok(response) = response else {
        let err_msg = format!("{}", response.unwrap_err());
        println!("Request to {addr} send_and_await_response1 error: {err_msg}");
        return Err(anyhow::anyhow!("{err_msg}"));
    };
    let Ok(response) = response else {
        let err_msg = format!("{}", response.unwrap_err());
        println!("Request to {addr} send_and_await_response2 error: {err_msg}");
        return Err(anyhow::anyhow!("{err_msg}"));
    };
    let TgResponse::SendPhoto(message) = serde_json::from_slice(response.body())? else {
        println!("failed to send photo");
        return Err(anyhow::anyhow!("Failed to send message"));
    };
    Ok(message)
}

