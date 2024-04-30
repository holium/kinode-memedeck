"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{1463:function(e,t,n){n.d(t,{P:function(){return o}});var c=n(60044);class r{async setPublicAddress(e){return fetch("".concat(r.BASE_URL,"/set_public_address"),{method:"POST",body:JSON.stringify({url:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json())}xGetRedirectUrl(){let e=(0,c.ZB)();return"".concat(r.BASE_URL,"/v1/auth/twitter/login?redirect_url=").concat(e)}async getMe(){return fetch("".concat(r.BASE_URL,"/v1/profile/me"),{credentials:"include"}).then(e=>e.json())}async getInvites(){return fetch("".concat(r.BASE_URL,"/v1/profile/me/invites"),{credentials:"include"}).then(e=>e.json())}async postInvite(e){let{x_handle:t}=e;return fetch("".concat(r.BASE_URL,"/v1/profile/me/invites"),{method:"POST",body:JSON.stringify({x_handle:t}),headers:{"Content-Type":"application/json"},credentials:"include"}).then(e=>e.json())}async deleteInvite(e){return fetch("".concat(r.BASE_URL,"/v1/profile/me/invites/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"}).then(e=>e.json())}logout(){return fetch("".concat(r.BASE_URL,"/v1/auth/logout"),{credentials:"include"})}async getProfile(e){return fetch("".concat(r.BASE_URL,"/v1/profile/").concat(e),{credentials:"include"}).then(e=>e.json())}async getProfileByHandle(e){return fetch("".concat(r.BASE_URL,"/v1/profile/by_handle/").concat(e),{credentials:"include"}).then(e=>e.json())}async getInvitedBy(){return fetch("".concat(r.BASE_URL,"/v1/profile/me/invited_by"),{credentials:"include"}).then(e=>e.json())}async getDecks(e,t,n){let c=new URLSearchParams;return t&&c.append("is_draft",String(t)),e&&c.append("user_id",e),n&&c.append("is_bookmarked",String(n)),fetch("".concat(r.BASE_URL,"/v1/decks?").concat(c),{credentials:"include"}).then(e=>e.json())}async getFeed(e,t){let{start:n=0,limit:c=20}=e,o=new URLSearchParams;return o.append("start",n.toString()),o.append("limit",c.toString()),fetch("".concat(r.BASE_URL,"/v1/feed?").concat(o),{credentials:"include",signal:t}).then(e=>e.json())}async getDeck(e){return fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e),{credentials:"include"}).then(e=>e.json())}async getDeckSubmissions(e){return fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e,"/submissions"),{credentials:"include"}).then(e=>e.json())}async postDeckSubmission(e){let{deckId:t,filename:n,filetype:c,source_url:o,bytes:a}=e;try{let e={filename:n,filetype:c};o?e={...e,source_url:o}:a&&(e={...e,bytes:Array.from(new Uint8Array(a))});let s=await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(t,"/submissions"),{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}});if(!s.ok)throw Error("HTTP Error: ".concat(s.status));let i=await s.json();return console.log("Meme creation response:",i),i}catch(e){console.error("Error creating meme:",e)}}async deleteDeckSubmission(e,t){let n="".concat(r.BASE_URL,"/v1/decks/").concat(e.replace("deck:",""),"/submissions/").concat(t.replace("meme:",""));try{let e=await fetch(n,{method:"DELETE",credentials:"include"});if(!e.ok)throw Error("HTTP Error: ".concat(e.status));let t=await e.json();return console.log("Delete submission response:",t),t}catch(e){console.error("Delete submission error:",e)}}async updateDeckSubmission(e,t,n,c){let o,a,s="".concat(r.BASE_URL,"/v1/decks/").concat(e.replace("deck:",""),"/submissions/").concat(t.replace("meme:",""));"rejected"===n?s+="/reject":"accepted"===n&&(s+="/accept",o=JSON.stringify({index:c}),a={"Content-Type":"application/json"});let i="POST";"rejected"===n?i="DELETE":"accepted"===n&&(i="POST");try{let e=await fetch(s,{method:i,credentials:"include",headers:a,body:o});if(!e.ok)throw Error("HTTP Error: ".concat(e.status));let t=await e.json();return console.log("update submission response:",t),t}catch(e){console.error("update submission error:",e)}}async getLibrary(e,t){let{search:n="",is_generated:c,start:o=0,limit:a=20}=e,s=new URLSearchParams;return n&&s.append("search",n),void 0!==c&&s.append("is_generated",String(c)),s.append("limit",a.toString()),s.append("start",o.toString()),fetch("".concat(r.BASE_URL,"/v1/profile/me/library?").concat(s),{credentials:"include",signal:t}).then(e=>e.json())}async getUploads(e,t){let{deckId:n,search:c="",start:o=0,limit:a=20}=e,s=new URLSearchParams;return n&&s.append("deck_id",n),c&&s.append("search",c),s.append("limit",a.toString()),s.append("start",o.toString()),fetch("".concat(r.BASE_URL,"/v1/profile/me/uploads?").concat(s),{credentials:"include",signal:t}).then(e=>e.json())}async getMemesByHandle(e,t,n){let{search:c="",start:o=0,limit:a=20}=t,s=new URLSearchParams;return c&&s.append("search",c),s.append("limit",a.toString()),s.append("start",o.toString()),fetch("".concat(r.BASE_URL,"/v1/profile/by_handle/").concat(e,"/memes?").concat(s),{credentials:"include",signal:n}).then(e=>e.json())}async getMeme(e){return fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e),{credentials:"include"}).then(e=>e.json())}async getSavedMemes(e,t){let{search:n="",start:c=0,limit:o=20}=e,a=new URLSearchParams;return n&&a.append("search",n),a.append("limit",o.toString()),a.append("start",c.toString()),fetch("".concat(r.BASE_URL,"/v1/memes/saved?").concat(a),{credentials:"include",signal:t}).then(e=>e.json())}async deleteMeme(e){return fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e),{method:"DELETE",credentials:"include"}).then(e=>e.json())}async postMeme(e){let{filename:t,filetype:n,source_url:c,bytes:o}=e;try{let e={filename:t,filetype:n};c?e={...e,source_url:c}:o&&(e={...e,bytes:Array.from(new Uint8Array(o))});let a=await fetch("".concat(r.BASE_URL,"/v1/memes"),{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}});if(!a.ok)throw Error("HTTP Error: ".concat(a.status));let s=await a.json();return console.log("Meme creation response:",s),s}catch(e){console.error("Error creating meme:",e)}}async postMemeTextOverlay(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e,"/text_overlay"),{method:"POST",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status));let c=await n.json();return console.log("Meme text overlay response:",c),c}catch(e){console.error("Error creating meme text overlay:",e)}}async getTrending(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return fetch("".concat(r.BASE_URL,"/v1/search/trending?start=0&limit=").concat(e),{credentials:"include"}).then(e=>e.json())}async getRecommendedFollows(){return fetch("".concat(r.BASE_URL,"/v1/recommended-follow"),{credentials:"include"}).then(e=>e.json())}async createDeck(){try{let e=await fetch("".concat(r.BASE_URL,"/v1/decks"),{method:"POST",body:JSON.stringify({name:"",description:"",memes:[]}),credentials:"include",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("HTTP Error: ".concat(e.status," ").concat(e.body));let t=await e.json();return console.log("Deck creation response:",t),t}catch(e){console.error("Error creating deck:",e)}}async updateDeck(e,t){try{console.log("updating deck",e,t);let n=await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e.replace("deck:","")),{method:"PUT",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status));let c=await n.json();console.log("Deck update response:",c)}catch(e){console.error("Error creating deck:",e)}}async deleteDeck(e){try{let t=await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e),{method:"DELETE",credentials:"include"});if(!t.ok)throw Error("HTTP Error: ".concat(t.status));console.log("Deck deletion response:",t)}catch(e){console.error("Error deleting deck:",e)}}async publishDeck(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e,"/publish"),{method:t?"DELETE":"POST",body:null,credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status," ").concat(n.body));let c=await n.json();return console.log("deck publish response:",c),c}catch(e){console.error("deck publish error:",e)}}async createPost(e){return(await fetch("".concat(r.BASE_URL,"/v1/feed"),{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}})).json()}async publishMeme(e){try{let t=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e.replace("meme:",""),"/publish"),{method:"POST",body:null,credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP Error: ".concat(t.status," ").concat(t.body));return await t.json()}catch(e){console.error("deck publish error:",e)}}async unpublishMeme(e){try{let t=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e.replace("meme:",""),"/publish"),{method:"DELETE",body:null,credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP Error: ".concat(t.status," ").concat(t.body));return await t.json()}catch(e){console.error("deck publish error:",e)}}async bookmarkDeck(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e,"/bookmark"),{method:t?"DELETE":"POST",body:null,credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status," ").concat(n.body));let c=await n.json();return console.log("deck bookmark response:",c),c}catch(e){console.error("deck bookmark error:",e)}}async getMemeReactions(e){let t=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e.replace("meme:",""),"/reacts"),{credentials:"include"}),n=await t.json();return n.reduce((e,t)=>(e[t.react]||(e[t.react]={count:0,data:n}),e[t.react].count+=1,e),{})}async createMemeReaction(e,t){return(await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e.replace("meme:",""),"/reacts"),{method:"POST",credentials:"include",body:JSON.stringify({react:t}),headers:{"Content-Type":"application/json"}})).json()}async deleteMemeReaction(e,t){return(await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e.replace("meme:",""),"/reacts"),{method:"DELETE",credentials:"include",body:JSON.stringify({react:t}),headers:{"Content-Type":"application/json"}})).json()}async searchTags(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return fetch("".concat(r.BASE_URL,"/v1/tags/search?search=").concat(e,"&limit=").concat(t),{credentials:"include"}).then(e=>e.json())}async tagResource(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/tags"),{method:"POST",body:JSON.stringify({resource_id:e,tag:t}),credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status," ").concat(n.body));let c=await n.json();return console.log("tag resource response:",c),c}catch(e){console.error("tag resource error:",e)}}async untagResource(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/tags"),{method:"DELETE",body:JSON.stringify({resource_id:e,tag_id:t}),credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status," ").concat(n.body));let c=await n.json();return console.log("untag resource response:",c),c}catch(e){console.error("untag resource error:",e)}}async saveMeme(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e,"/save"),{method:t?"DELETE":"POST",body:null,credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status," ").concat(n.body));let c=await n.json();return console.log("deck bookmark response:",c),c}catch(e){console.error("deck bookmark error:",e)}}async updateMeme(e,t){try{let n=await fetch("".concat(r.BASE_URL,"/v1/memes/").concat(e),{method:"PUT",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("HTTP Error: ".concat(n.status));let c=await n.json();return console.log("Meme put response:",c),c}catch(e){console.error("Error updating meme:",e)}}async search(e,t){let{search:n="",start:c=0,limit:o=20}=e,a=new URLSearchParams;return n&&a.append("search",n),a.append("limit",o.toString()),a.append("start",c.toString()),fetch("".concat(r.BASE_URL,"/v1/search?").concat(a),{credentials:"include",signal:t}).then(e=>e.json())}async getExplore(e,t){let{interval:n,limit:c}=e,o=new URLSearchParams;return n&&o.append("interval",n.toString()),c&&o.append("limit",c.toString()),fetch("".concat(r.BASE_URL,"/v1/explore?").concat(o),{credentials:"include",signal:t}).then(e=>e.json())}async randomMeme(e){return fetch("".concat(r.BASE_URL,"/v1/memes/random?search=").concat(e||"pepe"),{credentials:"include"}).then(e=>e.json())}async createDeckReaction(e,t){return(await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e.replace("deck:",""),"/reacts"),{method:"POST",credentials:"include",body:JSON.stringify({react:t}),headers:{"Content-Type":"application/json"}})).json()}async deleteDeckReaction(e,t){return(await fetch("".concat(r.BASE_URL,"/v1/decks/").concat(e.replace("deck:",""),"/reacts"),{method:"DELETE",credentials:"include",body:JSON.stringify({react:t}),headers:{"Content-Type":"application/json"}})).json()}async getAnalytics(){return fetch("".concat(r.BASE_URL,"/v1/analytics"),{credentials:"include"}).then(e=>e.json())}}r.BASE_URL=(0,c.bR)();let o=new r},56582:function(e,t,n){n.d(t,{O:function(){return o}});var c=n(3890);let r={profile:null,userMemes:{},userDecks:{},userDrafts:{},userBookmarks:{},trending:[],recommendedFollows:[],isSignupModalOpen:!1,isPostingMemes:!1,isHovering:!1},o=(0,c.Ue)((e,t)=>({...r,setProfile:t=>e({profile:t}),setUserMemes:(t,n)=>e({userMemes:{[t]:n}}),setUserDecks:(t,n)=>e({userDecks:{[t]:n}}),setUserDrafts:(t,n)=>e({userDrafts:{[t]:n}}),setUserBookmarks:(t,n)=>e({userBookmarks:{[t]:n}}),setTrending:t=>e({trending:t}),setRecommendedFollows:t=>e({recommendedFollows:t}),setIsSignupModalOpen:t=>e({isSignupModalOpen:t}),setIsHovering:t=>e({isHovering:t}),setIsPostingMemes:t=>e({isPostingMemes:t})}))},60044:function(e,t,n){n.d(t,{Dt:function(){return s},ZB:function(){return l},bR:function(){return i},j7:function(){return a}});var c=n(81247);let r="true"===c.env.NEXT_PUBLIC_IS_PROD,o="true"===c.env.NEXT_PUBLIC_IS_STAGING,a=!0,s=()=>/Android/i.test(navigator.userAgent);function i(){return a?"http://localhost:8080/memedeck:memedeck:holium.os":r?"https://api.memedeck.xyz":o?"https://staging-api.memedeck.xyz":"http://localhost:8080"}function l(){return a?"http://localhost:8080/memedeck:memedeck:holium.os/home":r?"https://memedeck.xyz/home":o?"https://staging.memedeck.xyz/home":"http://localhost:3000/home"}}}]);