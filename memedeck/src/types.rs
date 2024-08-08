use serde::{Serialize, Deserialize};
use kinode_process_lib::{
    set_state, get_typed_state, Address,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct TwitterRequestToken {
    pub oauth_callback_confirmed: bool,
    pub oauth_token: String,
    pub oauth_token_secret: String,
}
impl TwitterRequestToken {
    pub fn new() -> TwitterRequestToken {
        TwitterRequestToken {
            oauth_callback_confirmed: false,
            oauth_token: String::new(),
            oauth_token_secret: String::new(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct TwitterAccessToken {
    pub user_id: u64,
    pub screen_name: String,
    pub oauth_token: String,
    pub oauth_token_secret: String,
}
impl TwitterAccessToken {
    pub fn new() -> TwitterAccessToken {
        TwitterAccessToken {
            oauth_token: String::new(),
            oauth_token_secret: String::new(),
            screen_name: String::new(),
            user_id: 0,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct TwitterProfile {
    pub name: Option<String>,
    pub location: Option<String>,
    pub description: Option<String>,
    // pub followers_count: u64,
    // pub friends_count: u64,
    // pub favourites_count: u64,
    // pub statuses_count: u64,
    pub profile_image_url: Option<String>,
    pub profile_image_url_https: Option<String>,
    pub profile_background_image_url_https: Option<String>,
    pub screen_name: Option<String>,
    pub id_str: String,
    // pub protected: bool,
    // pub lang: Option<String>,
    // pub created_at: String,
    // pub status: Option<TwitterPost>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct KinodeLoginInfo {
    pub token: String,
    pub verifier: String,
    pub kinode_location: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct CreateMemeRequest {
    pub filename: String,
    pub filetype: String,
    pub title: Option<String>,
    pub caption: Option<String>,
    pub source_url: Option<String>,
    pub bytes: Option<Vec<u8>>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ComposedUploadRequest {
    pub filename: Option<String>,
    pub filetype: String,
    pub bytes: Option<Vec<u8>>,
    pub height: u32,
    pub width: u32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct FaceswapUploadRequest {
    pub filename: Option<String>,
    pub filetype: String,
    pub bytes: Vec<u8>,
    pub is_face: bool,
}

#[derive(Deserialize)]
pub struct PublicAddress {
    pub url: String
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct MemeDeckState {
    pub twitter: TwitterRequestToken,
    pub oauth_verifier: String,
    pub twitter_access: TwitterAccessToken,
    pub profile: Option<TwitterProfile>,
    pub following: Vec<String>, // list of node ids
    pub blocked: Vec<String>,   // list of node ids
    pub public_address: String,
    pub api_cookie: Option<String>,
    pub telegram_token: Option<String>,
    pub tg_process_address: Option<Address>,
    pub tg_chat_id: Option<i64>,
    pub tg_character_id: Option<String>,
    pub tg_posts_per_hour: u64,
    pub timer_is_set: bool,
}
impl MemeDeckState {
    pub fn save(&self) {
        set_state(&bincode::serialize(self).unwrap());
    }

    pub fn load() -> MemeDeckState {
        match get_typed_state(|bytes| Ok(bincode::deserialize::<MemeDeckState>(bytes)?)) {
            Some(s) => s,
            None => MemeDeckState {
                twitter: TwitterRequestToken::new(),
                oauth_verifier: String::new(),
                twitter_access: TwitterAccessToken::new(),
                profile: None,
                following: Vec::new(),
                blocked: Vec::new(),
                public_address: String::new(),
                api_cookie: None,
                telegram_token: None,
                tg_process_address: None,
                tg_chat_id: None,
                tg_character_id: None,
                tg_posts_per_hour: 60,
                timer_is_set: false,
            },
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MemeDeckConnections {
    pub following: Vec<String>, // list of node ids
    pub blocked: Vec<String>,   // list of node ids
}
impl From<&MemeDeckState> for MemeDeckConnections {
    fn from(state: &MemeDeckState) -> Self {
        MemeDeckConnections {
            following: state.following.clone(),
            blocked: state.blocked.clone(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum AdminTerminalRequest {
    SetToken(String),
    StartCharacterMonitorBot {
        chat_id: i64,
        character: String,
    },
    StopCharacterMonitorBot,
    CreatePromptBatchFromTweets,
    StartLLMBatchTimer,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum MemedeckKinodeRequest {
    GroqForMe(String),
}
