use serde::{Serialize, Deserialize};
use crate::twitter::types::{TwitterAccessToken, TwitterProfile, TwitterRequestToken};
use kinode_process_lib::{
    set_state, get_typed_state, Address, sqlite,
};

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

