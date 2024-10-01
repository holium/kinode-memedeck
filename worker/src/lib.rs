use std::collections::HashMap;
use kinode_process_lib::{
    await_message, call_init, println, get_typed_state, set_state,
    Address, Message, Response,
    http::{Method, client::send_request_await_response},
    timer::set_timer,
};
use serde::{Serialize, Deserialize};
use shared::{MEMEDECK_API, WorkerRequest, send_bot_message};
extern crate inflector;
use inflector::Inflector;

#[derive(Debug, Serialize, Deserialize)]
struct WorkerState {
    chat_id: i64,
    character: String,
    tg_address: Address,
    cookie: String,
    posted_memes: Vec<String>,
    should_kill: bool,
    query_interval: u64,
    vote_minimum: u64,
}
impl WorkerState {
    pub fn save(&self) {
        set_state(&bincode::serialize(self).unwrap());
    }

    pub fn load(our: &Address) -> WorkerState {
        get_typed_state(|bytes| bincode::deserialize::<WorkerState>(bytes)).unwrap_or(WorkerState {
            chat_id: 0,
            character: "".into(),
            tg_address: our.clone(),
            cookie: "".into(),
            posted_memes: vec![],
            should_kill: false,
            query_interval: 60,
            vote_minimum: 0,
        })
    }
}


#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemeSearchResponse {
    memes: Vec<MemeSearchItem>
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemeSearchItem {
    id: String,
    by: MemeSearchItemBy,
    votes_total: Option<u64>,
    prompts: Option<MemePromptSet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemeSearchItemBy {
    name: String,
    handle: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MemePromptSet {
    #[serde(rename="0")]
    first: Option<String>,
    #[serde(rename="1")]
    second: Option<String>
}

wit_bindgen::generate!({
    path: "target/wit",
    world: "process-v0",
});

call_init!(init);
fn init(our: Address) {
    println!("{our} worker: begin");

    let mut state = WorkerState::load(&our);
    println!("{our} worker state: {state:?}");

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
                //m our@worker:memedeck:meme-deck.os '{"ChangeMinimum":1}'
                WorkerRequest::ChangeMinimum(min) => {
                    println!("{our} worker changing vote_minimum to {min}");
                    state.vote_minimum = min;
                    state.save();
                    match Response::new().body(b"ack").send() {
                        Ok(_) => Ok(()),
                        Err(e) => Err(anyhow::anyhow!("{e}")),
                    }
                },

                // interval = ms until next query of MEMEDECK_API
                //m our@worker:memedeck:meme-deck.os '{"ChangeInterval":60000}'
                WorkerRequest::ChangeInterval(interval) => {
                    println!("{our} worker changing query interval to {interval}");
                    state.query_interval = interval;
                    state.save();
                    match Response::new().body(b"ack").send() {
                        Ok(_) => Ok(()),
                        Err(e) => Err(anyhow::anyhow!("{e}")),
                    }
                },

                WorkerRequest::Initialize {
                    chat_id,
                    character,
                    tg_address,
                    cookie,
                    query_interval,
                } => {
                    state.character = character;
                    state.chat_id = chat_id;
                    state.tg_address = tg_address;
                    state.cookie = cookie;
                    state.query_interval = query_interval;
                    state.save();

                    // 1. send request to MEMEDECK_API for new generations matching the character
                    // 2. if any "new" ones are found, send to tg bot for it to post to the
                    //    chat_id
                    // 3. wait to poll again
                    let _ = req_api(state);
                    set_timer(state.query_interval, None);

                    match Response::new().body(b"ack").send() {
                        Ok(_) => Ok(()),
                        Err(e) => Err(anyhow::anyhow!("{e}")),
                    }
                },

                WorkerRequest::Kill => {
                    state.should_kill = true;
                    state.save();
                    println!("{our} worker recieved kill request");
                    match Response::new().body(b"ack").send() {
                        Ok(_) => Ok(()),
                        Err(e) => Err(anyhow::anyhow!("{e}")),
                    }
                }
            }
        }

        Message::Response {
            ..
        } => {
            let r = req_api(state);
            if let Err(e) = r {
                println!("req_api error: {e}");
            }
            set_timer(state.query_interval, None);
            Ok(())
        }
    }
}

fn req_api(state: &mut WorkerState) -> anyhow::Result<()> {
    let req_h: HashMap<String, String> = HashMap::new();

    let mut headers = HashMap::new();
    headers.insert("Content-Type".to_string(), "application/json".to_string());

    let character_query = if state.character == "normal" {
        "".into()
    } else {
        format!("&deck_id={}", state.character)
    };
    let api_url = format!(
        "{}/v2/posts/search?limit=10&start=0&interval=week&sort_by=recent&include_prompts=true{}",
        MEMEDECK_API,
        character_query
    );

    println!("pinging {api_url} for {}", state.character);
    match send_request_await_response(
        Method::GET,
        url::Url::parse(&api_url).unwrap(),
        Some(req_h.clone()),
        10_000,
        vec![]
    ) {
        Ok(resp) => {
            let body = resp.body();
            //println!("{}", String::from_utf8_lossy(body));
            let meme_search_response: MemeSearchResponse = serde_json::from_slice(body)?;
            //println!("got memedeck api response with {} memes", meme_search_response.memes.len());
            if meme_search_response.memes.len() > 0 {
                for meme in meme_search_response.memes {
                    let send_meme = meme.clone();
                    if state.posted_memes.contains(&meme.id) {
                        continue;
                    }
                    if state.vote_minimum > 0 {
                        let meme_has_enough_votes: bool =
                            meme.votes_total.is_some()
                            && meme.votes_total.unwrap() >= state.vote_minimum;
                        if !meme_has_enough_votes {
                            //println!("meme {} didn't have enough votes", meme.id);
                            continue;
                        }
                    }
                    // if we get here, we found our new meme to post
                    let char_name = state.character.replace("_", " ").to_title_case();
                    println!("new meme {} found for {char_name}, posting to telegram", meme.id);

                    let mut prompt = String::new();
                    if let Some(prompts) = meme.prompts {
                        if let Some(p) = prompts.first {
                            prompt = p;
                        } else if let Some(p) = prompts.second {
                            prompt = p;
                        } else {
                            println!("meme {} has no prompt listed in {api_url}", meme.id);
                        }
                    } else {
                        println!("\"prompts\" object not present in memedeck api response");
                    }

                    format_and_send(
                        &prompt,
                        &send_meme,
                        &char_name,
                        state
                    )?;

                    state.posted_memes.push(meme.id.clone());
                    state.save();
                    break;
                }
            }
            Ok(())
        }
        Err(e) => Err(anyhow::anyhow!("memedeck api didn't respond properly {e:?}")),
    }
}

fn format_and_send(prompt: &str, newest_meme: &MemeSearchItem, char_name: &str, state: &WorkerState) -> anyhow::Result<()> {
    let prompt_str = if prompt == "" { "".into() } else {
        format!("\n\nPrompt: <i>{prompt}</i>")
    };
    let new_char_str = if state.character == "normal" {
        "New meme".into()
    } else {
        format!("New <b>{char_name}</b>")
    };
    let msg = format!(
        "<a href='https://memedeck.xyz/home/{}'>{new_char_str}</a> created by <a href='https://memedeck.xyz/u/{}'>{}</a>!{prompt_str}",
        newest_meme.id,
        newest_meme.by.handle,
        newest_meme.by.name,
    );
    match send_bot_message(&msg, state.chat_id, &state.tg_address) {
        Ok(_) => Ok(()),
        Err(e) => {
            println!("send_bot_message error: {e}");
            Err(e)
        }
    }
}

