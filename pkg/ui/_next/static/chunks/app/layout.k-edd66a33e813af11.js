(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1556],{59868:function(e,l,s){Promise.resolve().then(s.t.bind(s,23608,23)),Promise.resolve().then(s.bind(s,14414)),Promise.resolve().then(s.bind(s,78957)),Promise.resolve().then(s.bind(s,15623)),Promise.resolve().then(s.t.bind(s,17679,23)),Promise.resolve().then(s.t.bind(s,11884,23)),Promise.resolve().then(s.t.bind(s,93116,23)),Promise.resolve().then(s.t.bind(s,54689,23)),Promise.resolve().then(s.bind(s,13582)),Promise.resolve().then(s.bind(s,56608)),Promise.resolve().then(s.bind(s,35971)),Promise.resolve().then(s.bind(s,73421)),Promise.resolve().then(s.bind(s,71402)),Promise.resolve().then(s.bind(s,64720)),Promise.resolve().then(s.bind(s,70520)),Promise.resolve().then(s.bind(s,82033))},19783:function(e,l,s){"use strict";s.d(l,{U:function(){return g}});var t=s(57348),i=s(53350),r=s(92378),n=s(6526),a=s(950),c=s(4930),o=s(67425),d=s(12465),u=s(15346),m=s(69467),h=s(39543),x=s(38857);let f=async e=>new Promise((l,s)=>{let t=new Image,i=new FileReader;i.onload=()=>{t.src=i.result},t.onload=()=>{let s=(0,h.vO)(t.width,t.height),{paneWidth:i,paneHeight:r}=(0,h.rf)(m.WV.One,s),n=document.createElement("canvas");n.width=i,n.height=r;let a=n.getContext("2d");if(!a)return;let c=t.width,o=t.height;(0,x.h)({ctx:a,image:t,targetWidth:i,targetHeight:r,imageWidth:c,imageHeight:o}),l({base64:n.toDataURL(e.type),aspectRatio:s,targetWidth:i,targetHeight:r})},i.onerror=e=>{s(e)},i.readAsDataURL(e)});var p=s(99957),v=s(81727);let g=e=>{let{initialSrc:l,imageRef:s,bgColor:m="bg-black-300",onParseImage:h,onClickDeleteMeme:x}=e,[g,b]=(0,u.useState)(l),[j,w]=(0,u.useState)(!1),[N,y]=(0,u.useState)(!1),C=(0,u.useCallback)(async e=>{if(e){if((0,d.sy)(),e.length>10){(0,d.yv)("Please upload 10 files or less",{variant:"error"});return}for(let l=0;l<e.length;l++)if(e[l].size>33554432){(0,d.yv)("Please upload files 32MB or less",{variant:"error"});return}w(!0);try{if(0===e.length)return;let l=e[0],{base64:s,aspectRatio:t,targetWidth:i,targetHeight:r}=await f(l),n=s.split(",")[1],a=Uint8Array.from(atob(n),e=>e.charCodeAt(0));await h(a,i,r,t),b(s)}catch(e){console.error("Error uploading files",e),(0,d.yv)("Error uploading files",{variant:"error"})}finally{w(!1)}}},[h]),k=(0,u.useCallback)(async()=>{y(!0);try{await x(),b(null)}catch(e){console.error("Error deleting meme",e)}finally{y(!1)}},[x]);return(0,t.jsxs)(r.w,{radius:"md",shadow:"none",className:(0,p.cn)(m,"border-1 border-transparent transition-all",g?"":"hover:border-orange-400"),children:[(0,t.jsx)("div",{className:"relative size-full max-h-full max-w-full aspect-square flex items-center justify-center ".concat(g?"":"cursor-pointer"),children:g?(0,t.jsx)(n.J,{ref:s,alt:"Image input",classNames:{wrapper:"size-full min-w-full min-h-full",img:"size-full object-cover rounded-none"},src:g}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.JO,{className:"size-8",icon:"hugeicons:image-upload-01"}),(0,t.jsx)("input",{type:"file",multiple:!1,accept:v.RL,className:"absolute inset-0 size-full cursor-pointer opacity-0",onChange:e=>C(e.target.files)})]})}),(0,t.jsxs)(a.i,{className:"gap-4 justify-end min-h-10 overflow-hidden absolute w-full z-10 -top-2.5 -right-2.5",children:[j?(0,t.jsx)(c.c,{size:"sm",color:"warning"}):null,g&&!j?(0,t.jsx)(o.A,{size:"sm",variant:"flat",radius:"full",className:"backdrop-blur-sm bg-red-900/70",isIconOnly:!0,color:"danger",isLoading:N,onClick:k,children:(0,t.jsx)(i.JO,{className:"size-5 !text-red-400",icon:"ic:baseline-close"})}):null]})]})}},19935:function(e,l,s){"use strict";s.d(l,{F:function(){return m}});var t=s(57348),i=s(67425),r=s(32162),n=s(45155),a=s(16189),c=s(15346),o=s(71402),d=s(64720),u=s(73139);let m=e=>{let{title:l="Generate",variant:s="shadow",color:m="primary",size:h="md",queryParam:x="",className:f="mt-3 md:w-full min-w-[50px] rounded-full",iconSize:p="size-6",isIconOnly:v=!1}=e,g=(0,a.useRouter)(),{profile:b}=(0,o.useProfile)(),{setIsSignupModalOpen:j}=(0,d.useSidebar)(),[w,N]=(0,c.useState)(!1),y=(0,c.useCallback)(()=>{if(!b){j(!0);return}try{N(!0),g.push("/studio".concat(x))}catch(e){N(!1)}},[b,x,g,j]);return(0,c.useEffect)(()=>{},[]),(0,t.jsx)(i.A,{type:"button",variant:s,color:m,className:(0,r.cn)("flex !gap-2",f),size:h,radius:"full",disableRipple:!0,isIconOnly:v,startContent:(0,t.jsx)(n.default,{src:u.Z,alt:"Generate",className:p}),isDisabled:w,onClick:y,children:(0,t.jsx)("h4",{className:"hidden lg:block text-base truncate",children:l})})}},53786:function(e,l,s){"use strict";s.d(l,{h:function(){return w}});var t=s(57348),i=s(92378),r=s(53350),n=s(4930),a=s(51934),c=s(88036),o=s(15346),d=s(15800),u=s(72148),m=s(35878);let h=(0,s(74859).k)(m.P.searchUser,1e3),x=()=>{let{admins:e,onClickAddAdmin:l}=(0,u.useEditDeck)(),[s,i]=(0,o.useState)(""),[m,x]=(0,o.useState)(!1),[f,p]=(0,o.useState)([]),v=(0,o.useCallback)(e=>{if(i(e),x(!0),e.length<1){p([]);return}h({search:e,start:0,limit:5}).then(e=>{e&&p(e)}).finally(()=>{x(!1)})},[]);return(0,t.jsx)("div",{className:"flex gap-3 p-3 justify-between",children:(0,t.jsxs)("div",{className:"flex gap-2 items-center flex-1",children:[(0,t.jsx)("div",{className:"flex items-center justify-center size-8 bg-white-400/10 rounded-full",children:m?(0,t.jsx)(n.c,{size:"sm"}):(0,t.jsx)(r.JO,{icon:"tabler:plus",className:" size-4"})}),(0,t.jsx)(a.d,{items:f,placeholder:"Add admin",size:"sm",fullWidth:!0,classNames:{base:"flex-1 max-w-full"},value:s,onValueChange:v,onSelectionChange:e=>{let s=f.find(l=>l.id===e);s&&(l({id:s.id,name:s.screen_name,screen_name:s.twitter_handle,profile_image_url_https:s.profile_image_url,badge_image_url:s.badge_image_url}),i(""),p(l=>l.filter(l=>l.id!==e)))},children:l=>(0,t.jsx)(c.R,{value:l.id,isDisabled:e.some(e=>e.id===l.id),children:(0,t.jsx)(d.W,{avatarSrc:l.profile_image_url,screenName:l.screen_name,userHandle:l.twitter_handle,badgeSrc:l.badge_image_url,p:"p-0"},l.id)},l.id)})]})})};var f=s(22094),p=s(54611),v=s(67425),g=s(22596),b=s(58484);let j=e=>{let{admin:l}=e,{fetchedDeck:s,isAddingAdmin:i,isRemovingAdmin:n,onClickRemoveAdmin:a}=(0,u.useEditDeck)(),c=(0,o.useMemo)(()=>(null==s?void 0:s.by.id.replace("user:",""))===l.id.replace("user:",""),[l.id,s]);return(0,t.jsxs)("div",{className:"flex gap-3 p-3 items-center justify-between border-b border-white-400/10",children:[(0,t.jsx)(d.W,{avatarSrc:l.profile_image_url_https,badgeSrc:l.badge_image_url,screenName:l.name,userHandle:l.screen_name,p:"p-0"}),(0,t.jsx)("div",{className:"size-8 flex items-center justify-center",children:c?(0,t.jsx)("span",{className:"text-[10px] text-white-400/50",children:"Creator"}):(0,t.jsxs)(f.F,{children:[(0,t.jsx)(p.S,{children:(0,t.jsx)(v.A,{isIconOnly:!0,size:"sm",variant:"light",isLoading:i===l.id||n===l.id,children:(0,t.jsx)(r.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,t.jsx)(g.a,{children:(0,t.jsx)(b.W,{color:"danger",startContent:(0,t.jsx)(r.JO,{className:"size-5",icon:"tabler:trash"}),onClick:()=>a(l),children:"Remove admin"},"remove")})]})})]})},w=e=>{let{bg:l="bg-black-300"}=e,{admins:s}=(0,u.useEditDeck)();return(0,t.jsx)(i.w,{className:l,shadow:"none",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[s.map(e=>(0,t.jsx)(j,{admin:e},e.id)),(0,t.jsx)(x,{})]})})}},10385:function(e,l,s){"use strict";s.d(l,{G:function(){return o}});var t=s(57348),i=s(4930),r=s(46766),n=s(37734),a=s(19783),c=s(72148);let o=e=>{let{inputsBgColor:l="bg-black-300"}=e,{isFetching:s,name:o,onChangeName:d,description:u,onChangeDescription:m,coverPhoto:h,onUploadImage:x}=(0,c.useEditDeck)();return s?(0,t.jsx)("div",{className:"w-full p-3 flex items-center justify-center",children:(0,t.jsx)(i.c,{})}):(0,t.jsxs)("section",{className:"flex gap-3",children:[(0,t.jsx)("div",{className:"size-[128px] sm:size-[168px]",children:(0,t.jsx)(a.U,{imageRef:void 0,bgColor:l,initialSrc:h,onParseImage:async e=>{x(e)},onClickDeleteMeme:async()=>{x(null)}})}),(0,t.jsxs)("div",{className:"flex flex-col gap-3 flex-1",children:[(0,t.jsx)(r.Y,{isRequired:0===o.length,label:"Deck Name",fullWidth:!0,classNames:{inputWrapper:l},value:o,onValueChange:d}),(0,t.jsx)(n.Y,{isRequired:0===u.length,label:"Description",fullWidth:!0,classNames:{inputWrapper:l},value:u,onValueChange:m})]})]})}},14251:function(e,l,s){"use strict";s.d(l,{F:function(){return a}});var t=s(57348),i=s(92378),r=s(98833),n=s(99957);let a=e=>{let{title:l,description:s,value:a,onValueChange:c,bg:o="bg-black-300",children:d}=e;return(0,t.jsxs)(i.w,{className:(0,n.cn)("flex flex-col gap-3 p-3 min-h-0 overflow-y-auto",o),shadow:"none",children:[(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h4",{className:"text-base font-semibold",children:l}),(0,t.jsx)("p",{className:"text-white-400/50 text-sm",children:s})]}),(0,t.jsx)(r.i,{color:"primary",classNames:{thumb:"bg-white-400",label:"text-white-400/75"},isSelected:a,onValueChange:c})]}),d]})}},14414:function(e,l,s){"use strict";s.r(l),s.d(l,{CreateDeckFlowModalProvider:function(){return j}});var t=s(57348),i=s(16189),r=s(15346),n=s(53786),a=s(4930),c=s(46766),o=s(14251),d=s(86628),u=s(98832),m=s(72148),h=s(87140),x=s(71046);let f=()=>{var e;let{autoPost:l,matchingRules:s,onChangeMatchingRules:i,onChangeAutoPost:n}=(0,m.useEditDeck)(),{config:f}=(0,h.useDiffusionConfig)(),p=(0,r.useMemo)(()=>{var e;let l=null==s?void 0:null===(e=s.characters)||void 0===e?void 0:e[0];return null==f?void 0:f.characters.find(e=>e.id===l)},[null==f?void 0:f.characters,null==s?void 0:s.characters]),v=(0,r.useMemo)(()=>{var e;let l=null==s?void 0:null===(e=s.styles)||void 0===e?void 0:e[0];return null==f?void 0:f.aesthetics.find(e=>e.id===l)},[null==f?void 0:f.aesthetics,null==s?void 0:s.styles]);return f?(0,t.jsx)(o.F,{title:"Auto-post",description:"Any new generation that meets your constraints will be posted to your deck.",bg:"bg-white-400/5",value:l,onValueChange:n,children:l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.d,{selectedAesthetic:v,onSelect:e=>{i({styles:e?[e.id]:null})},hideDescription:!0}),(0,t.jsx)(u.z,{selectedCharacter:p,selectedStyler:x.fP,onSelect:e=>{i({characters:e?[e.id]:null})}}),(0,t.jsx)(c.Y,{label:"Keywords",placeholder:"happy",isClearable:!0,value:null!==(e=null==s?void 0:s.keywords)&&void 0!==e?e:"",onValueChange:e=>{i({keywords:e})}})]})}):(0,t.jsx)("div",{className:"w-full p-3 flex items-center justify-center",children:(0,t.jsx)(a.c,{})})};var p=s(10385),v=s(41307),g=s(35878),b=s(93276);let j=e=>{let{children:l}=e,s=(0,i.useRouter)(),a=(0,r.useMemo)(()=>({steps:[{title:"Tell Us About Your Deck",subtitle:"A deck is a collection of memes around a theme, style, or character.",body:(0,t.jsx)(p.G,{inputsBgColor:"bg-white-400/5"})},{title:"Invite Friends",subtitle:"Invite your friends to help manage your deck.",body:(0,t.jsx)(n.h,{bg:"bg-white-400/5"})},{title:"Post Settings",subtitle:"Set rules for how memes get posted into your deck.",body:(0,t.jsx)(f,{})}],queryParamKey:"newDeckId",BodyWrapper:h.DiffusionConfigProvider,createFlow:()=>g.P.createDeck({title:"",description:"",auto_post:!1,require_approval:!1,cover_photo:null,admins:null,matching_rules:null,post_ids:null}),finishFlow:e=>{let l=(0,b.o4)(e);return s.push(l)}}),[s]);return(0,t.jsx)(v.p,{...a,children:l})}},78957:function(e,l,s){"use strict";s.r(l),s.d(l,{Menu:function(){return P}});var t=s(57348),i=s(16189),r=s(15346),n=s(19935),a=s(53350),c=s(81015),o=s(22094),d=s(54611),u=s(67425),m=s(5070),h=s(22596),x=s(58484),f=s(71402),p=s(35878),v=s(99957);let g=()=>(0,t.jsxs)("div",{className:"lg:flex hidden gap-2 px-2 select-none",children:[(0,t.jsxs)("div",{className:"flex flex-row gap-2 font-medium text-lg",children:[(0,t.jsx)("span",{className:"text-white-400/25 text-xl font-normal",children:"0.000"})," ",(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1.5 text-white-400/50 text-sm font-normal mt-1",children:[(0,t.jsx)("span",{className:"text-white-400/25",children:"RIZZ"}),(0,t.jsx)(c.e,{placement:"top",content:"Coming soon...",children:(0,t.jsx)(a.Wb,{className:"text-white-400/25",icon:"ic:outline-info"})})]})]})," "]}),b=()=>{let{profile:e}=(0,f.useProfile)(),l=null==e?void 0:e.twitter_profile,s=(0,r.useCallback)(()=>{p.P.logout().then(()=>{window.location.reload()})},[]);return l?(0,t.jsxs)("div",{className:(0,v.cn)("flex flex-col gap-3 py-4","bg-black-0 border-t border-white-400/10"),children:[(0,t.jsx)(g,{}),(0,t.jsxs)(o.F,{className:"min-h-20",children:[(0,t.jsx)(d.S,{children:(0,t.jsx)(u.A,{fullWidth:!0,size:"lg",variant:"light",disableRipple:!0,disableAnimation:!0,className:"p-0 lg:px-2 min-w-0",startContent:(0,t.jsx)(m.h,{src:l.profile_image_url_https,alt:l.name,size:"sm"}),endContent:(0,t.jsx)(a.JO,{icon:"tabler:dots",className:"hidden lg:block"}),children:(0,t.jsxs)("div",{className:"flex-1 lg:flex flex-col hidden",children:[(0,t.jsx)("p",{className:"flex-1 truncate text-sm font-semibold leading-tight text-left",children:l.name}),(0,t.jsxs)("p",{className:"text-sm text-white-400/50 truncate text-left",children:["@",l.screen_name]})]})})}),(0,t.jsx)(h.a,{className:"w-52",children:(0,t.jsxs)(x.W,{startContent:(0,t.jsx)(a.JO,{className:"size-5",icon:"mdi:logout"}),onClick:s,children:["Log out @",l.screen_name]})})]})]}):null};var j=s(29492),w=s(64720),N=s(12854);let y=e=>{let{tab:l,defaultBorder:s="border-black-0"}=e,r=(0,i.useRouter)(),n=(0,i.usePathname)(),{profile:c}=(0,f.useProfile)(),{setIsSignupModalOpen:o}=(0,w.useSidebar)(),d=(0,N.c1)(l,null==c?void 0:c.twitter_profile.screen_name),u=n.startsWith(d),m=(0,N.br)(l,u);return(0,t.jsx)("div",{className:"tab py-1 cursor-pointer",onClick:()=>{let e=(0,N.W1)(l);if(!c&&!e){o(!0);return}r.push(d)},children:(0,t.jsxs)("div",{className:(0,v.cn)("tab-pill","h-12 lg:h-10","inline-flex w-full items-center justify-center rounded-xl select-none","lg:min-w-44 lg:justify-normal lg:px-4","border",u?"active border-blue-500 bg-blue-100":s),children:[(0,t.jsx)(a.JO,{icon:m,className:(0,v.cn)("flex size-5 lg:size-4",u?"text-blue-300":"text-white-400")}),(0,t.jsx)("h2",{className:(0,v.cn)("hidden lg:block","mx-3 text-md",u?"text-blue-300":"text-white-400/75"),children:l})]})})};var C=s(18860);let k=()=>(0,t.jsx)("aside",{className:"relative hidden sm:flex w-16 min-w-16 lg:w-64 lg:min-w-64",children:(0,t.jsxs)("div",{className:"fixed inset-y-0 flex flex-col w-[64px] lg:w-64",children:[(0,t.jsxs)("div",{className:"flex flex-col flex-1 gap-6 min-h-0",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2 pr-3 lg:pr-7",children:[(0,t.jsx)(j.hd,{}),(0,t.jsx)("section",{className:"flex flex-col",children:Object.values(N.mQ).map(e=>(0,t.jsx)(y,{tab:e},e))}),(0,t.jsx)("section",{className:"mt-2 z-0",children:(0,t.jsx)(n.F,{iconSize:"size-6 lg:size-5",className:"h-12 lg:h-10 md:w-full min-w-[50px] rounded-xl"})})]}),(0,t.jsx)("section",{className:"flex-1 lg:flex hidden min-h-0 overflow-y-auto pr-3 lg:pr-7",children:(0,t.jsx)(C._,{})})]}),(0,t.jsx)("section",{className:"pr-3 lg:pr-7 z-[1]",children:(0,t.jsx)(b,{})})]})}),z=e=>{let{tab:l,pathname:s}=e,r=(0,i.useRouter)(),{profile:n}=(0,f.useProfile)(),{setIsSignupModalOpen:c}=(0,w.useSidebar)(),o=(0,N.c1)(l,null==n?void 0:n.twitter_profile.screen_name),d=s.startsWith(o),u=(0,N.br)(l,d),h=null;return h=l===N.mQ.Profile?(0,t.jsx)(m.h,{size:"sm",className:"!size-7 ".concat(d?"border-1.5 border-blue-500":""),src:null==n?void 0:n.twitter_profile.profile_image_url_https}):(0,t.jsx)(a.JO,{icon:u,color:d?"rgb(147 197 253)":"white",className:"flex size-6"}),(0,t.jsx)("button",{className:"flex flex-1 justify-center",onClick:()=>{let e=(0,N.W1)(l);if(!n&&!e){c(!0);return}r.push(o)},children:(0,t.jsx)("div",{className:"inline-flex h-16 items-center justify-center rounded-full",children:h})})},_=()=>{let e=(0,i.usePathname)();return(0,t.jsxs)("nav",{className:"fixed inset-x-0 px-3 bottom-0 z-50 h-16 border-t border-white-400/10 bg-black-400 sm:hidden xs:fixed",children:[(0,t.jsx)("div",{className:"flex w-full items-center justify-center gap-3",children:Object.values(N.mQ).map(l=>(0,t.jsx)(z,{tab:l,pathname:e},l))}),(0,t.jsx)("div",{className:"fixed bottom-20 right-4 sm:right-6 block sm:hidden size-12",children:(0,t.jsx)(n.F,{isIconOnly:!0,size:"lg",iconSize:"size-6",className:"mt-0"})})]})},P=()=>{let e=(0,i.usePathname)(),l=(0,r.useMemo)(()=>"/"===e,[e]),s=(0,r.useMemo)(()=>e.startsWith("/studio"),[e]),{profile:n,setProfile:a,setIsFetching:c}=(0,f.useProfile)(),o=(0,r.useCallback)(async()=>{try{c(!0);let e=await p.P.getMe();a(e)}catch(e){console.error("Failed to get profile")}finally{c(!1)}},[c,a]);return((0,r.useEffect)(()=>{!l&&(n||o())},[o,l,s,n]),l||s)?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(_,{})]})}},12854:function(e,l,s){"use strict";var t,i;function r(e){return"Trending"===e}s.d(l,{W1:function(){return r},br:function(){return n},c1:function(){return a},mQ:function(){return t}}),(0,s(75952).Cb)("all"),(i=t||(t={})).Home="Home",i.Trending="Trending",i.Library="My Library",i.Profile="Profile";let n=(e,l)=>{switch(e){case"Home":return l?"fluent:home-24-filled":"fluent:home-24-regular";case"Trending":return l?"ph:fire-fill":"ph-fire";case"My Library":return l?"fluent:emoji-meme-24-filled":"fluent:emoji-meme-24-regular";case"Profile":return l?"fluent:person-24-filled":"fluent:person-24-regular"}},a=(e,l)=>{switch(e){case"Home":return"/home";case"Trending":return"/trending";case"My Library":return"/library";case"Profile":return"/u/".concat(l)}}},86628:function(e,l,s){"use strict";s.d(l,{d:function(){return d}});var t=s(57348),i=s(53350),r=s(51934),n=s(67425),a=s(88036),c=s(15346),o=s(87140);let d=e=>{var l;let{selectedAesthetic:s,onSelect:d,hideDescription:u=!1,isMobile:m=!1}=e,{config:h}=(0,o.useDiffusionConfig)(),[x,f]=(0,c.useState)("None selected"),p=(0,c.useCallback)(e=>{if(e||d(null),!h)return;let l=h.aesthetics.find(l=>l.id===e);d(null!=l?l:null)},[h,d]);return h?(0,t.jsx)(r.d,{"aria-label":"aesthetic selector",label:"Style",placeholder:x,description:u?null:null!==(l=null==s?void 0:s.description)&&void 0!==l?l:"Applies a style to the prompt",selectedKey:s?s.id:null,size:"md",onFocus:e=>{m&&e.preventDefault()},onOpenChange:e=>{e?f("Type to filter"):f("None selected")},className:"z-0",isClearable:!1,endContent:s&&(0,t.jsx)(n.A,{size:"sm",isIconOnly:!0,variant:"flat",onClick:()=>d(null),children:(0,t.jsx)(i.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}),onSelectionChange:p,children:h.aesthetics.map(e=>(0,t.jsx)(a.R,{"aria-label":e.name,className:"flex flex-column justify-center gap-2",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)("span",{className:"text-xs text-gray-500",children:e.description})]})},e.id))}):null}},98832:function(e,l,s){"use strict";s.d(l,{z:function(){return x}});var t=s(57348),i=s(53350),r=s(1718),n=s(67425),a=s(5070),c=s(88036),o=s(15346),d=s(87140);let u=e=>"base"===e?0:1,m=e=>{switch(e){case 0:return"Meme Characters";case 1:return"Crypto Friends";default:return"Other"}},h=e=>{let l=-1,s=[];for(let t of e)t.section!==l&&(s.push({id:Math.random().toString(),section:t.section,isDivider:!0}),l=t.section),s.push(t);return s},x=e=>{let{selectedCharacter:l,selectedStyler:s,onSelect:x,showClearButton:f=!0}=e,{config:p}=(0,d.useDiffusionConfig)(),[v,g]=(0,o.useState)(!1),b=(0,o.useMemo)(()=>{var e;return null!==(e=null==p?void 0:p.characters)&&void 0!==e?e:[]},[null==p?void 0:p.characters]),j=(0,o.useMemo)(()=>null==l?void 0:l.id,[l]),w=(0,o.useMemo)(()=>h(b.sort((e,l)=>"normal"===e.id?1:"normal"===l.id?-1:0).map(e=>{var l;return{...e,avatar:null!==(l=e.thumbnail)&&void 0!==l?l:"",section:u(e.grouping),isSelected:j===e.id,isDivider:!1}}).sort((e,l)=>e.section-l.section)),[b,j]),N=(0,o.useCallback)(e=>{let l=b.find(l=>l.id===e);l&&x(l)},[b,x]),y=(0,o.useMemo)(()=>w.filter(e=>0===e.section).length,[w]),C=(0,o.useMemo)(()=>w.filter(e=>1===e.section).length,[w]);return(0,t.jsx)(r.g,{items:w,isOpen:v,onOpenChange:g,placeholder:"Select a character","aria-label":"Character",classNames:{trigger:"h-[80px]",popoverContent:"bg-[#0F0F0F] border-1 border-black-100",listbox:"h-fit selector-list-box",listboxWrapper:"min-h-[400px]"},selectedKeys:[j].filter(Boolean),onChange:e=>N(e.target.value),endContent:j&&f&&(0,t.jsx)(n.A,{size:"sm",isIconOnly:!0,variant:"flat",onClick:()=>x(null),children:(0,t.jsx)(i.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}),renderValue:e=>e.map(e=>{var l,s,i,r;return(null===(l=e.data)||void 0===l?void 0:l.isDivider)?null:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(a.h,{alt:(null===(s=e.data)||void 0===s?void 0:s.id)+"-avatar",className:"shrink-0 mr-2",radius:"md",size:"lg",src:null===(i=e.data)||void 0===i?void 0:i.avatar}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-tiny text-default-600",children:"Character"}),(0,t.jsx)("h3",{className:"text-xl font-semibold",children:null===(r=e.data)||void 0===r?void 0:r.name})]})]},e.key)}),children:e=>e.isDivider?(0,t.jsx)(c.R,{hideSelectedIcon:!0,isReadOnly:!0,"aria-disabled":!0,className:"col-span-full",classNames:{base:"bg-transparent hover:!bg-transparent cursor-default"},children:(0,t.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,t.jsxs)("h3",{className:"uppercase text-xs tracking-wide font-medium text-white-400/50 select-none",children:[m(e.section)," "]}),(0,t.jsx)("div",{className:"text-xs font-normal text-white-400/70 bg-white-400/10 rounded-full px-1 py-0.5 min-w-[20px] text-center",children:0===e.section?y:C}),(0,t.jsx)("hr",{className:"flex-1 opacity-10"},"divider-".concat(Math.random()))]})},null==e?void 0:e.id):(0,t.jsx)(c.R,{"aria-label":null==e?void 0:e.name,color:e.isSelected?"primary":"default",variant:"solid","data-hover":!0,hideSelectedIcon:!0,classNames:{base:"flex-1 flex flex-col gap-0 ".concat(e.isSelected?"bg-primary-400":""),wrapper:"flex flex-col"},children:(0,t.jsxs)("div",{className:"flex flex-col gap-2 items-center",children:[(0,t.jsx)(a.h,{alt:(null==e?void 0:e.id)+"-avatar",radius:"md",size:"lg",src:null==e?void 0:e.avatar}),(0,t.jsx)("div",{className:"flex items-center gap-1",children:(0,t.jsx)("span",{className:"text-sm font-medium",children:null==e?void 0:e.name})})]})},null==e?void 0:e.id)})}},56608:function(e,l,s){"use strict";s.r(l),s.d(l,{EventsProvider:function(){return c},useEvents:function(){return o}});var t=s(57348),i=s(14635),r=s(16189),n=s(15346);let a=(0,n.createContext)({}),c=e=>{let{children:l}=e,s=(0,r.useSearchParams)();return(0,n.useEffect)(()=>{s.has("source")&&(0,i.j)("source",{source:s.get("source")})},[s]),(0,t.jsx)(a.Provider,{value:{},children:l})},o=()=>{let e=(0,n.useContext)(a);if(void 0===e)throw Error("useEvents must be used within EventsProvider");return e}},70520:function(e,l,s){"use strict";s.r(l),s.d(l,{UIProvider:function(){return r}});var t=s(57348),i=s(38830);function r(e){let{children:l}=e;return(0,t.jsx)(i.w,{className:"flex min-h-0 w-full min-w-0 flex-1",children:l})}},23608:function(){}},function(e){e.O(0,[7398,7425,4175,3159,8797,2079,6002,3881,7686,1639,6440,9028,4822,1510,6814,1718,5952,9394,3520,1202,8230,874,9599,4598,5658,4801,937,7114,1744],function(){return e(e.s=59868)}),_N_E=e.O()}]);