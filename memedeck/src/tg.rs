use frankenstein::{ChatId, Message as TgMessage, SendMessageParams, UpdateContent};
use kinode_process_lib::{println, get_blob, Message, Request, Address};
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

pub fn get_last_tg_msg(message: &Message) -> Option<TgMessage> {
    let Ok(TgResponse::Update(tg_update)) = serde_json::from_slice(message.body()) else {
        return None;
    };
    let update = tg_update.updates.last()?;
    let msg = match &update.content {
        UpdateContent::Message(msg) | UpdateContent::ChannelPost(msg) => msg,
        _ => {
            return None;
        }
    };
    Some(msg.clone())
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
