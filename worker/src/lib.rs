use std::collections::HashMap;
use kinode_process_lib::{
    await_message, call_init, println,
    Address, Message, Response,
    http::{Method, send_request_await_response},
    timer::set_timer,
};
use serde::{Serialize, Deserialize};
use shared::{MEMEDECK_API, WorkerRequest, send_bot_message};

struct WorkerState {
    chat_id: i64,
    character: String,
    tg_address: Address,
    cookie: String,
    posted_memes: Vec<String>,
    should_kill: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemeSearchResponse {
    memes: Vec<MemeSearchItem>
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemeSearchItem {
    id: String,
    interval_bucket: String,
    creator_name: String,
    url: String,
}

wit_bindgen::generate!({
    path: "target/wit",
    world: "process-v0",
});

call_init!(init);
fn init(our: Address) {
    println!("{our} worker: begin");

    let mut state = WorkerState {
        chat_id: 0,
        character: "".into(),
        tg_address: our.clone(),
        cookie: "".into(),
        posted_memes: vec![],
        should_kill: false,
    };

    loop {
        match handle_message(&our, &mut state) {
            Ok(()) => {}
            Err(e) => {
                println!("worker: error: {:?}", e);
            }
        };
        if state.should_kill {
            println!("{our} worker terminating");
            break;
        }
    }
}

fn handle_message(
    our: &Address,
    state: &mut WorkerState,
) -> anyhow::Result<()> {
    let message = await_message()?;

    match message {
        Message::Request {
            ref body,
            ..
        } => {
            let request = serde_json::from_slice::<WorkerRequest>(body)?;

            match request {
                WorkerRequest::Initialize {
                    chat_id,
                    character,
                    tg_address,
                    cookie,
                } => {
                    state.character = character;
                    state.chat_id = chat_id;
                    state.tg_address = tg_address;
                    state.cookie = cookie;

                    // 1. send request to MEMEDECK_API for new generations matching the character
                    // 2. if any "new" ones are found, send to tg bot for it to post to the
                    //    chat_id
                    // 3. wait to poll again
                    req_api(state)?;
                    set_timer(30_000, None); // 30 seconds from now

                    Response::new().body(b"ack").send()
                },

                WorkerRequest::Kill => {
                    state.should_kill = true;
                    println!("{our} worker recieved kill request");
                    Response::new().body(b"ack").send()
                }
            }
        }

        Message::Response {
            ..
        } => {
            req_api(state)?;
            set_timer(30_000, None); // 30 seconds from now
            Ok(())
        }
    }
}

fn req_api(state: &mut WorkerState) -> anyhow::Result<()> {
    let req_h: HashMap<String, String> = HashMap::new();

    let mut headers = HashMap::new();
    headers.insert("Content-Type".to_string(), "application/json".to_string());

    let api_url = format!("{MEMEDECK_API}/v1/search?limit=2&start=0&interval=today&character_id={}&sort_by=recent", state.character);

    println!("pinging {MEMEDECK_API} for {}", state.character);
    match send_request_await_response(
        Method::GET,
        url::Url::parse(&api_url).unwrap(),
        Some(req_h.clone()),
        10_000,
        vec![]
    ) {
        Ok(resp) => {
            let body = resp.body();
            let meme_search_response: MemeSearchResponse = serde_json::from_slice(body)?;
            //println!("{meme_search_response:?}");
            if meme_search_response.memes.len() > 0 {
                let newest_meme = meme_search_response.memes[0].clone();
                if !state.posted_memes.contains(&newest_meme.id) {
                    println!("new meme found for {}, posting to telegram", state.character);
                    state.posted_memes.push(newest_meme.id.clone());
                    let meme_url = str::replace(&newest_meme.url, "memedeckblob.blob.core.windows.net", "media.memedeck.xyz");
                    let msg = format!("user {} created meme {}", newest_meme.creator_name, meme_url);
                    send_bot_message(&msg, state.chat_id, &state.tg_address)?;
                }
            }
            Ok(())
        }
        Err(e) => Err(anyhow::anyhow!("memedeck api didn't respond properly {e:?}")),
    }
}

