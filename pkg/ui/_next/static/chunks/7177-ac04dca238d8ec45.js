"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{13296:function(e,t,r){r.d(t,{T:function(){return o}});var a=r(40538),n=r(74600);let o=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),r=(0,n.useSearchParams)(),o=e=>{let n=new URLSearchParams(r.toString());n.delete("deckId"),n.delete("memeIndex");let o=encodeURIComponent(e.replace("meme:",""));return n.set("memeId",o),(0,a.wS)(t,n)};return{openMemeModal:t=>{let r=o(t);e.push(r,{scroll:!1})},getMemeModalPath:o}}},74491:function(e,t,r){r.r(t),r.d(t,{FeedProvider:function(){return i},useFeed:function(){return l}});var a=r(59547),n=r(30912);let o=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)([]),[l,s]=(0,n.useState)(!1),[u,c]=(0,n.useState)({}),[d,f]=(0,n.useState)(""),[p,m]=(0,n.useState)([]),[v,h]=(0,n.useState)(!1),[y,w]=(0,n.useState)(""),[_,g]=(0,n.useState)([]),[b,k]=(0,n.useState)(!1),[S,C]=(0,n.useState)([]),[x,D]=(0,n.useState)(!1),[M,P]=(0,n.useState)([]),[I,T]=(0,n.useState)(!1),F=(0,n.useCallback)(e=>r.find(t=>(t.post_type,t.post.id===e))||_.find(t=>t.id===e)||M.find(t=>t.id===e)||S.find(t=>t.id===e),[r,_,M,S]),j=(0,n.useCallback)((e,t,a,n)=>{let o=r.findIndex(e=>e.post.id===t),l=_.findIndex(e=>e.id===t),s=S.findIndex(e=>e.id===t),u=M.findIndex(e=>e.id===t);if(-1===o&&-1===l&&-1===s&&-1===u)return;let c=(t,r)=>{let o={...r[t]},i={react:n,by:e,id:":irrelevant:"+Math.random(),avatar:":irrelevant:"+Math.random(),handle:":irrelevant:"+Math.random(),name:":irrelevant:"+Math.random()};return"add"===a?"upvote"===n?(o.votes.up.push(i),o.votes.down=o.votes.down.filter(t=>t.by!==e)):(o.votes.down.push(i),o.votes.up=o.votes.up.filter(t=>t.by!==e)):"upvote"===n?o.votes.up=o.votes.up.filter(t=>t.by!==e):o.votes.down=o.votes.down.filter(t=>t.by!==e),[...r.slice(0,t),o,...r.slice(t+1)]};-1!==o&&i(e=>c(o,e)),-1!==l&&g(e=>c(l,e)),-1!==s&&C(e=>c(s,e)),-1!==u&&P(e=>c(u,e))},[r,_,M,S]),U=(0,n.useCallback)((e,t)=>{i(r=>0===r.length?r:[...e.map(e=>({id:Math.random().toString(36).substring(2,15),post_type:"meme",by:t.twitter_profile.id,by_avatar:t.twitter_profile.profile_image_url_https,by_handle:t.twitter_profile.screen_name,by_name:t.twitter_profile.name,post:{...e,is_creator:!0,creator_name:e.creator_name,creator_handle:e.creator_handle,creator_avatar:e.creator_avatar},votes:{up:[],down:[]},created_at:1e6*Date.now(),updated_at:1e6*Date.now(),published_at:1e6*Date.now()})),...r])},[]),A=(0,n.useCallback)((e,t)=>{i(r=>0===r.length?r:r.map(r=>{if("meme"in r&&r.post.id===e){let e=r.post;return{...r,post:{...e,...t}}}return r}))},[]),E=(0,n.useCallback)((e,t)=>{i(r=>0===r.length?r:[{id:Math.random().toString(36).substring(2,15),post_type:"deck",by:t.twitter_profile.id,by_avatar:t.twitter_profile.profile_image_url_https,by_handle:t.twitter_profile.screen_name,by_name:t.twitter_profile.name,post:{...e,memes:Object.values(e.memes).map(e=>({...e,is_public:!0})),is_creator:!0,creator_name:e.creator_name,creator_handle:e.creator_handle,creator_avatar:e.creator_avatar},votes:{up:[],down:[]},created_at:1e6*Date.now(),updated_at:1e6*Date.now(),published_at:1e6*Date.now()},...r])},[]),R=(0,n.useCallback)(e=>{i(t=>t.filter(t=>t.post.id!==e))},[]),L=(0,n.useCallback)(e=>{_.length>0&&g(t=>[e,...t]),S.length>0&&C(t=>[e,...t])},[_.length,S.length]);return(0,a.jsx)(o.Provider,{value:{feed:r,setFeed:i,hasFetchedFeed:l,setHasFetchedFeed:s,feedActions:u,setFeedActions:c,appendMemesToFeed:U,appendDeckToFeed:E,removeItemFromFeed:R,updateMemeInFeed:A,searchQuery:d,setSearchQuery:f,searchResults:p,setSearchResults:m,hasFetchedSearchResults:v,setHasFetchedSearchResults:h,librarySearchQuery:y,setLibrarySearchQuery:w,library:_,setLibrary:g,hasFetchedLibrary:b,setHasFetchedLibrary:k,uploads:S,setUploads:C,hasFetchedUploads:x,setHasFetchedUploads:D,saved:M,setSaved:P,hasFetchedSaved:I,setHasFetchedSaved:T,onUploadMeme:L,getItem:F,voteOnItem:j},children:t})},l=()=>{let e=(0,n.useContext)(o);if(void 0===e)throw Error("useFeed must be used within a FeedProvider");return e}},47177:function(e,t,r){r.r(t),r.d(t,{UploadProvider:function(){return y},useUpload:function(){return w}});var a=r(59547),n=r(71904),o=r(30912);let i=e=>{let t=new FileReader;return new Promise((r,a)=>{t.onload=e=>{var t;let n=null===(t=e.target)||void 0===t?void 0:t.result;if(!n){a(Error("Failed to read file"));return}r(new Uint8Array(n))},t.onerror=()=>a(t.error),t.readAsArrayBuffer(e)})};var l=r(82972);let s=e=>{let{text:t,textButton:r,onClick:n}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[t,r&&n&&(0,a.jsx)(l.A,{variant:"solid",color:"success",size:"sm",className:"text-white-400",onClick:n,children:r})]})};var u=r(58741),c=r(15076),d=r(74600),f=r(74491),p=r(1463),m=r(39992),v=r(13296);let h=(0,o.createContext)({}),y=e=>{let{children:t}=e,r=(0,d.useRouter)(),{openMemeModal:l}=(0,v.T)(),{isPostingMemes:y,setIsHovering:w}=(0,c.useProfile)(),{onUploadMeme:_}=(0,f.useFeed)(),[g,b]=(0,o.useState)([]),[k,S]=(0,o.useState)(),[C,x]=(0,o.useState)(!1),D=(0,o.useCallback)(async(e,t)=>{try{(0,n.sy)();let r=e.name.slice(0,20),o=(0,n.yv)("Uploading ".concat(r),{variant:"info",persist:!0});S(o);let u=await i(e),c="";if(void 0!==t){let r=await p.P.postDeckSubmission({deckId:t,filename:(0,m.Df)(e.name),filetype:e.type,bytes:u});if(!r)throw Error("Failed to upload");c=r.meme_id}else{let t=await p.P.postMeme({filename:(0,m.Df)(e.name),filetype:e.type,bytes:u});if(!t)throw Error("Failed to upload");c=t.id,b(e=>[t,...e]),_(t)}(0,n.sy)(k),S(void 0);let d=(0,n.yv)((0,a.jsx)(s,{text:"Successfully uploaded",textButton:"View",onClick:()=>{(0,n.sy)(d),l(c)}}),{variant:"success",autoHideDuration:3e3})}catch(e){console.error(e),S(void 0),(0,n.sy)(),(0,n.yv)("Failed to upload some memes",{variant:"error"})}},[k,l,_,b]),M=(0,o.useCallback)(async e=>{try{let t=(0,m.Df)(e),r=t.slice(0,20),o=(0,n.yv)("Uploading ".concat(r),{variant:"info",persist:!0});S(o);let i=await p.P.postMeme({filename:t,filetype:"image",source_url:e});if(!i)throw Error("Failed to paste link");b(e=>[i,...e]),_(i),(0,n.sy)(k),S(void 0);let u=(0,n.yv)((0,a.jsx)(s,{text:"Successfully pasted link",textButton:"View",onClick:()=>{(0,n.sy)(u),l(i.id)}}),{variant:"success",autoHideDuration:3e3})}catch(e){console.error(e),(0,n.yv)("Failed to paste link",{variant:"error"})}},[k,l,_]),P=(0,o.useMemo)(()=>(0,u.k)(D,1e3),[D]),I=(0,o.useCallback)(async(e,t)=>{if(void 0===k){if(e.size>33554432){(0,n.yv)("Please upload files 32MB or less",{variant:"error"});return}return P(e,t)}},[P,k]),T=(0,o.useCallback)(async e=>{if(e.clipboardData){let t=e.clipboardData.items;for(let e=0;e<t.length;e++){let r=t[e];if(r.type.includes("image")){let e=r.getAsFile();e&&await I(e)}}}},[I]);(0,o.useEffect)(()=>(window.addEventListener("paste",T),()=>{window.removeEventListener("paste",T)}),[T]);let F=async e=>{if(!(e.dataTransfer.items.length>0)||!e.dataTransfer.items[0].type.includes("image"))return!1;e.preventDefault(),w(!1),x(!0);let t=e.dataTransfer.files;try{for(let e=0;e<t.length;e++){let r=t[e];r.type.includes("image")&&await I(r)}y||r.push("/library")}catch(e){console.error(e)}finally{x(!1)}};return(0,a.jsx)(h.Provider,{value:{uploads:g,setUploads:b,startUpload:I,pasteImageLink:M,isBatchUploading:C},children:(0,a.jsx)("div",{className:"flex min-h-0 w-full min-w-0 flex-1",onDragOver:e=>{e.preventDefault(),e.dataTransfer.items.length>0&&e.dataTransfer.items[0].type.includes("image")&&w(!0)},onDragLeave:()=>w(!1),onDrop:F,children:t})})},w=()=>(0,o.useContext)(h)},58741:function(e,t,r){r.d(t,{D:function(){return a},k:function(){return n}});let a=(e,t)=>{let r=null;return function(){for(var a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];r&&clearTimeout(r),r=setTimeout(()=>{r&&clearTimeout(r);let t=e(...n);return r=null,t},t)}},n=(e,t)=>{let r=null;return function(){for(var a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];return new Promise((a,o)=>{let i=async()=>{r&&clearTimeout(r);try{let t=await e(...n);a(t)}catch(e){o(e)}r=null};r&&clearTimeout(r),r=setTimeout(i,t)})}}},39992:function(e,t,r){r.d(t,{Df:function(){return o},Po:function(){return n},RL:function(){return l},eh:function(){return i},uZ:function(){return s}});var a=r(60198);let n=e=>{let t=new Date(e/1e6),r=Math.round((new Date().getTime()-t.getTime())/1e3),a=Math.round(r/60),n=Math.round(a/60),o=Math.round(n/24);return r<60?"".concat(r,"s ago"):a<60?"".concat(a,"m ago"):n<24?"".concat(n,"h ago"):"".concat(o," day").concat(1===o?"":"s"," ago")},o=e=>e.replace(/[^a-z0-9]/gi,"_").toLowerCase();function i(e){let t=atob(e.split(",")[1]||e),r=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return new Uint8Array(r)}let l="image/*,.jpg_large,.png_large,.jpeg_large,.jpg_small,.png_small,.jpeg_small";function s(){let e=(0,a.Z)().replace(/-/g,"_"),t="meme:".concat(e);return console.log("Generated new meme id",t),t}},40538:function(e,t,r){r.d(t,{Mm:function(){return o},bb:function(){return a},s9:function(){return n},wS:function(){return i}});let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",r=encodeURIComponent(e.id.replace("deck:",""));return"view"===t?"?deckId=".concat(r):"/deck/edit/".concat(r)},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",r=encodeURIComponent(e.id.replace("deck:",""));return"view"===t?"?deckId=".concat(r):"/deck/edit/".concat(r)},o=(e,t)=>{let r=encodeURIComponent(e.replace("deck:",""));return"?deckId=".concat(r,"&memeIndex=").concat(t)};function i(e,t){return t.toString().length?"".concat(e,"?").concat(t.toString()):e}}}]);