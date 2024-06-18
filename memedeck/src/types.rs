use serde::{Serialize, Deserialize};
use kinode_process_lib::{
    set_state, get_typed_state, Address, sqlite,
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

#[derive(Debug, Serialize, Deserialize)]
pub struct SavableMemeDeckState {
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
}
impl SavableMemeDeckState {
    pub fn save(&self) {
        set_state(&bincode::serialize(self).unwrap());
    }
}

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
    pub db: sqlite::Sqlite,
}
impl MemeDeckState {
    pub fn save(&self) {
        SavableMemeDeckState {
            twitter: self.twitter.clone(),
            oauth_verifier: self.oauth_verifier.clone(),
            twitter_access: self.twitter_access.clone(),
            profile: self.profile.clone(),
            following: self.following.clone(),
            blocked: self.blocked.clone(),
            public_address: self.public_address.clone(),
            api_cookie: self.api_cookie.clone(),
            telegram_token: self.telegram_token.clone(),
            tg_process_address: self.tg_process_address.clone(),
            tg_chat_id: self.tg_chat_id.clone(),
            tg_character_id: self.tg_character_id.clone(),
        }.save()
    }

    pub fn load(our: &Address) -> MemeDeckState {
        match get_typed_state(|bytes| Ok(bincode::deserialize::<SavableMemeDeckState>(bytes)?)) {
            Some(s) => MemeDeckState {
                twitter: s.twitter,
                oauth_verifier: s.oauth_verifier,
                twitter_access: s.twitter_access,
                profile: s.profile,
                following: s.following,
                blocked: s.blocked,
                public_address: s.public_address,
                api_cookie: s.api_cookie,
                telegram_token: s.telegram_token,
                tg_process_address: s.tg_process_address,
                tg_chat_id: s.tg_chat_id,
                tg_character_id: s.tg_character_id,
                db: sqlite::open(our.package_id(), "memedeck", None).expect("cant access sqlite db"),
            },
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
                db: sqlite::open(our.package_id(), "memedeck", None).expect("cant access sqlite db"),
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
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FrankensteinBotDetails {
    pub first_name: String,
    pub last_name: Option<String>,
    pub username: Option<String>,
    pub language_code: Option<String>,
    pub can_join_groups: Option<bool>,
}

