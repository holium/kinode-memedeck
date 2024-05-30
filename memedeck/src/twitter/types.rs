// THESE TYPES ARE DEFINED REDUNDANTLY HERE
// SO WE DON'T NEED TO IMPORT memedeck_api

use percent_encoding::{utf8_percent_encode, AsciiSet, CONTROLS};
use serde::{Deserialize, Serialize};

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

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct KinodeLoginInfo {
    pub token: String,
    pub verifier: String,
    pub kinode_location: Option<String>,
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
    pub profile_image_url: Option<String>,
    pub profile_image_url_https: Option<String>,
    pub profile_background_image_url_https: Option<String>,
    pub screen_name: Option<String>,
    pub id_str: String,
}

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

#[derive(Serialize, Deserialize, Debug)]
pub struct CreateMemeRequest {
    pub filename: String,
    pub filetype: String,
    pub title: Option<String>,
    pub caption: Option<String>,
    pub source_url: Option<String>,
    pub bytes: Option<Vec<u8>>,
}

pub fn default_percent_enc(string: &str) -> String {
  utf8_percent_encode(string, FRAGMENT).to_string()
}
