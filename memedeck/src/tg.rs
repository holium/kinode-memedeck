use frankenstein::UpdateContent;
use kinode_process_lib::{println, Request, Address};
use telegram_interface::*;
//use shared::TG_ADDRESS;

pub fn init_tg(key: &str, addr: &Address) -> anyhow::Result<()> {
    let init_req = TgInitialize {
        token: key.to_string(),
        params: None,
    };

    let req = serde_json::to_vec(&TgRequest::RegisterApiKey(init_req))?;

    let response = Request::to(addr)
        .body(req)
        .send_and_await_response(3)??;
    let TgResponse::Ok = serde_json::from_slice(response.body())? else {
        println!("bad init response");
        return Err(anyhow::anyhow!("Failed to parse init response"));
    };
    Ok(())
}

pub fn get_most_recently_joined_chat(bot_id: u64, body: &[u8]) -> Option<i64> {
    let Ok(TgResponse::Update(tg_update)) = serde_json::from_slice(body) else {
        return None;
    };
    for update in tg_update.updates.iter().rev() {
        let chat_id: Option<i64> = match update.content.clone() {
            UpdateContent::Message(c) => {
                let mut cid: Option<i64> = None;
                match c.new_chat_members {
                    Some(mems) => {
                        for member in mems {
                            if member.id == bot_id {
                                cid = Some(c.chat.id);
                                break;
                            }
                        }
                    }
                    None => ()
                };
                cid
            }
            _ => None,
        };
        if chat_id.is_some() {
            return chat_id;
        }
    }
    None
}

pub fn subscribe(addr: &Address) -> anyhow::Result<()> {
    let subscribe_request = serde_json::to_vec(&TgRequest::Subscribe)?;
    let result = Request::to(addr)
        .body(subscribe_request)
        .send_and_await_response(3)??;
    let TgResponse::Ok = serde_json::from_slice::<TgResponse>(result.body())? else {
        return Err(anyhow::anyhow!("Failed to parse subscription response"));
    };
    Ok(())
}
