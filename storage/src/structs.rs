use kinode_process_lib::{get_state, set_state, Address};
use serde::{Deserialize, Serialize};
use storage_interface::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct State {
    pub our: Address,
    pub tweets: GlobalTweetMap,
}

impl State {
    pub fn fetch() -> Option<State> {
        if let Some(state_bytes) = get_state() {
            bincode::deserialize(&state_bytes).ok()
        } else {
            None
        }
    }

    pub fn save(&self) {
        let serialized_state = bincode::serialize(self).expect("Failed to serialize state");
        set_state(&serialized_state);
    }
}
