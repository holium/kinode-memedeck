use kinode_process_lib::{await_message, call_init, get_blob, http, println, Address, Message, Response};
use std::collections::HashMap;

use storage_interface::GlobalTweetMap;

mod structs;
use structs::*;

wit_bindgen::generate!({
    path: "target/wit",
    world: "process-v0",
});

pub fn default_headers() -> HashMap<String, String> {
    HashMap::from([
        ("Content-Type".to_string(), "application/json".to_string()),
        ("Access-Control-Allow-Origin".to_string(), "*".to_string()),
        (
            "Access-Control-Allow-Headers".to_string(),
            "Content-Type".to_string(),
        ),
        (
            "Access-Control-Allow-Methods".to_string(),
            "GET, POST, OPTIONS".to_string(),
        ),
    ])
}

fn handle_message(our: &Address, state: &mut Option<State>) -> anyhow::Result<()> {
    let message = await_message()?;
    if message.source().node != our.node {
        return Ok(());
    }
    match message.source().process.to_string().as_str() {
        "http_server:distro:sys" | "http_client:distro:sys" => {
            handle_http_message(&our, &message, state)
        }
        _ => handle_internal_message(state, &message),
    }
}

fn handle_internal_message(state: &mut Option<State>, message: &Message) -> anyhow::Result<()> {
    match message {
        Message::Request { ref body, .. } => handle_internal_request(state, body),
        Message::Response { .. } => Ok(()),
    }
}

fn handle_internal_request(state: &mut Option<State>, body: &[u8]) -> anyhow::Result<()> {
    let request = serde_json::from_slice::<storage_interface::Request>(body)?;
    match request {
        storage_interface::Request::GetTweets {
            start_time,
            end_time,
        } => get_tweets(state, start_time, end_time),
    }
}

fn get_tweets(state: &mut Option<State>, start_time: i64, end_time: i64) -> anyhow::Result<()> {
    let filtered_tweets: GlobalTweetMap = state.as_ref().map_or_else(
        || HashMap::new(),
        |s| {
            s.tweets
                .iter()
                .filter(|(_, tweet)| {
                    tweet.date.unwrap_or(0) > start_time && tweet.date.unwrap_or(0) < end_time
                })
                .map(|(k, v)| (k.clone(), v.clone()))
                .collect::<GlobalTweetMap>()
        },
    );
    let _ = Response::new()
        .body(serde_json::to_vec(
            &storage_interface::Response::GetTweets {
                tweets: filtered_tweets,
            },
        )?)
        .send();
    Ok(())
}

fn handle_http_message(
    our: &Address,
    message: &Message,
    state: &mut Option<State>,
) -> anyhow::Result<()> {
    match message {
        Message::Request { ref body, .. } => handle_http_request(our, state, body),
        Message::Response { .. } => Ok(()),
    }
}

fn handle_http_request(
    our: &Address,
    state: &mut Option<State>,
    body: &[u8],
) -> anyhow::Result<()> {
    let http_request = http::HttpServerRequest::from_bytes(body)?
        .request()
        .ok_or_else(|| anyhow::anyhow!("Failed to parse http request"))?;
    match http_request.method().ok() {
        Some(http::Method::OPTIONS) => {
            let _ = http::send_response(http::StatusCode::OK, Some(default_headers()), Vec::new());
            return Ok(());
        }
        Some(http::Method::POST) => {
            let path = http_request.path()?;
            let bytes = get_blob()
                .ok_or_else(|| anyhow::anyhow!("Failed to get blob"))?
                .bytes;
            match path.as_str() {
                "/populate" => populate_tweets(our, state, &bytes),
                _ => Ok(()),
            }
        }
        _ => Err(anyhow::anyhow!("Method not allowed")),
    }
}

fn populate_tweets(our: &Address, state: &mut Option<State>, bytes: &[u8]) -> anyhow::Result<()> {
    let tweets = serde_json::from_slice::<GlobalTweetMap>(bytes)?;
    if let Some(state) = state {
        for (key, value) in tweets {
            if !state.tweets.contains_key(&key) {
                println!("Inserted tweet {}", key.clone());
                state.tweets.insert(key, value);
            }
        }
        state.save();
    } else {
        let inner_state = State {
            our: our.clone(),
            tweets: tweets.clone(),
        };
        println!("Saved {} tweets", inner_state.tweets.len());
        inner_state.save();
        *state = Some(inner_state);
    }

    http::send_response(
        http::StatusCode::OK,
        Some(default_headers()),
        b"{\"message\": \"success\"}".to_vec(),
    );
    Ok(())
}

call_init!(init);
fn init(our: Address) {
    if let Err(e) = http::serve_index_html(&our, "ui", false, true, vec!["/", "/populate"]) {
        panic!("Error binding https paths: {:?}", e);
    }

    let mut state = State::fetch();
    loop {
        match handle_message(&our, &mut state) {
            Ok(_) => {}
            Err(e) => println!("Error: {:?}", e),
        }
    }
}

