(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3474],{24090:function(e,t,n){Promise.resolve().then(n.bind(n,78926))},78926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7590),r=n(70244),s=n(82581),l=n(33151),o=n(61594),i=n(82187);let d=e=>{let{conf:t,selected:n,newSelection:r}=e,d=(0,s.useMemo)(()=>t.characters,[t.characters]),u="anime",c=(0,s.useMemo)(()=>d.map(e=>({...e,avatar:function(e,t){if("normal"===t)return;let n=e.replace(/[_\s]/g,"-"),a=t.replace(/[_\s]/g,"-");return"https://memedeckblob.blob.core.windows.net/ai-characters/".concat(n,"-").concat(a,".png")}(u,e.id)})).sort((e,t)=>"normal"===e.id?1:"normal"===t.id?-1:0),[d,u]),f=(0,s.useCallback)(e=>{let t=d.find(t=>t.id===e);console.log(t),t&&(console.log(e),r&&r(e))},[r,d]);return(0,a.jsx)(l.g,{items:c,placeholder:"Select a character","aria-label":"Character",classNames:{trigger:"h-[80px]",listbox:"h-fit",listboxWrapper:"min-h-[400px]"},selectedKeys:[n].filter(Boolean),onChange:e=>f(e.target.value),renderValue:e=>e.map(e=>{var t,n,r;return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(o.h,{alt:(null===(t=e.data)||void 0===t?void 0:t.id)+"-avatar",className:"shrink-0 mr-2",radius:"md",size:"lg",src:null===(n=e.data)||void 0===n?void 0:n.avatar}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-tiny text-default-600",children:"Character"}),(0,a.jsx)("h3",{className:"text-xl font-semibold",children:null===(r=e.data)||void 0===r?void 0:r.name})]})]},e.key)}),children:e=>(0,a.jsx)(i.R,{textValue:null==e?void 0:e.name,"aria-label":null==e?void 0:e.name,children:(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,a.jsx)(o.h,{alt:(null==e?void 0:e.id)+"-avatar",className:"shrink-0 mr-2",radius:"md",size:"lg",src:null==e?void 0:e.avatar}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("span",{className:"text-base font-medium",children:null==e?void 0:e.name})})]})},null==e?void 0:e.id)})};var u=n(3333),c=n(32475);function f(){var e;let t=(0,u.iS)(),[n,l]=(0,s.useState)(""),[o,i]=(0,s.useState)(60),[f,h]=(0,s.useState)("doomer"),[m,b]=(0,s.useState)(!1),g={color:"black",backgroundColor:"#ddd",width:"500px"};return(0,a.jsxs)("div",{style:{flexDirection:"column"},children:[(0,a.jsx)("h1",{style:{fontSize:"24px"},children:"Guide to running a MemeDeck Telegram Bot"}),(0,a.jsxs)("p",{style:{marginBottom:"12px"},children:["You ",(0,a.jsx)("b",{children:"must"})," be running a kinode to use this feature."]}),(0,a.jsxs)("ol",{style:{listStyle:"decimal"},children:[(0,a.jsxs)("li",{children:["Message @BotFather on Telegram, with ",(0,a.jsx)("code",{children:"/start"})," as your message"]}),(0,a.jsxs)("li",{children:["Then send him the message ",(0,a.jsx)("code",{children:"/newbot"})," and choose a name and handle. When the bot is created you should see a message like",(0,a.jsxs)("blockquote",{style:{padding:"5px",backgroundColor:"#222"},children:["Done! Congratulations on your new bot. You will find it at t.me/YourBotHandle. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.",(0,a.jsx)("br",{}),"Use this token to access the HTTP API:",(0,a.jsx)("code",{children:"12345:ASDF4452-ASDFASDFM"}),"Keep your token secure and store it safely, it can be used by anyone to control your bot.",(0,a.jsx)("br",{}),"For a description of the Bot API, see this page:",(0,a.jsx)("span",{children:"https://core.telegram.org/bots/api"})]}),"We need you to enter that token here:",(0,a.jsx)("div",{children:(0,a.jsx)("input",{style:g,type:"text",value:n,onChange:e=>l(e.target.value)})})]}),(0,a.jsx)("li",{children:"Now, go to the chat you would like your bot to contribute to, and add your bot to the chat."}),(0,a.jsx)("li",{children:"If you have permission restrictions, make the bot an admin in Telegram."}),(0,a.jsxs)("li",{children:["Now, select your character:",(null===(e=t.currentData)||void 0===e?void 0:e.studio_config)&&(0,a.jsx)(d,{conf:t.currentData.studio_config,selected:f,newSelection:e=>h(e)})]}),(0,a.jsxs)("li",{children:["And finally, tell us the maximum number of posts per hour you will allow from this bot: (60 = 1 post per minute at most, 30 = 1 post every other minute, etc)",(0,a.jsx)("div",{children:(0,a.jsx)("input",{style:g,type:"number",value:o,onChange:e=>i(parseInt(e.target.value))})})]}),(0,a.jsx)("li",{children:m?"Your bot may take a moment to start poasting...":(0,a.jsx)(r.A,{onClick:()=>{b(!0),c.R.setTGBot(n,f,o)},children:"Save and Start your bot"})})]})]})}},32475:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var a=n(92782);class r{async setPublicAddress(e){return fetch("".concat(r.BASE_URL,"/set_public_address"),{method:"POST",body:JSON.stringify({url:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json())}async setTGBot(e,t,n){return fetch("".concat(r.BASE_URL,"/set_tg_bot/").concat(e,"/").concat(t,"/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json())}}r.BASE_URL=(0,a.bR)();let s=new r},94450:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var a=n(7590),r=()=>(0,a.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,a.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]})},788:function(e,t,n){"use strict";n.d(t,{F:function(){return g}});var a=n(14962),r=n(32611),s=n(1116),l=n(31473),o=n(45899),i=n(96421),d=n(55684),u=n(46855),c=n(37630),f=n(97811),h=n(82581),m=n(22543),b=n(79970);function g(){var e,t,n,g,x,v,p;let y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},j=(0,s.w)(),k=(0,a.C)(),w=!!k,{as:C,ref:B,src:N,name:S,icon:_,classNames:A,fallback:G,alt:z=S||"avatar",imgRef:T,color:D=null!=(e=null==k?void 0:k.color)?e:"default",radius:P=null!=(t=null==k?void 0:k.radius)?t:"full",size:I=null!=(n=null==k?void 0:k.size)?n:"md",isBordered:M=null!=(g=null==k?void 0:k.isBordered)&&g,isDisabled:F=null!=(x=null==k?void 0:k.isDisabled)&&x,isFocusable:R=!1,getInitials:J=d.e,ignoreFallback:E=!1,showFallback:O=!1,ImgComponent:U="img",imgProps:W,className:Y,onError:V,...L}=y,H=C||"span",K=(0,o.gy)(B),Z=(0,o.gy)(T),{isFocusVisible:q,isFocused:X,focusProps:Q}=(0,f.F)(),{isHovered:$,hoverProps:ee}=(0,b.X)({isDisabled:F}),et=null!=(p=null!=(v=y.disableAnimation)?v:null==j?void 0:j.disableAnimation)&&p,en="loaded"===(0,m.d)({src:N,onError:V,ignoreFallback:E}),ea="string"==typeof U,er=(!N||!en)&&O,es=(0,h.useMemo)(()=>{var e;return(0,r.r)({color:D,radius:P,size:I,isBordered:M,isDisabled:F,isInGroup:w,disableAnimation:et,isInGridGroup:null!=(e=null==k?void 0:k.isGrid)&&e})},[D,P,I,M,F,et,w,null==k?void 0:k.isGrid]),el=(0,u.W)(null==A?void 0:A.base,Y),eo=(0,h.useMemo)(()=>R||"button"===C,[R,C]),ei=(0,h.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:K,tabIndex:eo?0:-1,"data-hover":(0,c.PB)($),"data-focus":(0,c.PB)(X),"data-focus-visible":(0,c.PB)(q),className:es.base({class:(0,u.W)(el,null==e?void 0:e.className)}),...(0,l.d)(L,ee,eo?Q:{})}},[eo,es,el,Q,L]),ed=(0,h.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:Z,src:N,disableAnimation:et,"data-loaded":(0,c.PB)(en),className:es.img({class:null==A?void 0:A.img}),...(0,l.d)(W,e,(0,i.z)({disableAnimation:et},{enabled:ea}))}},[es,en,W,et,N,Z,ea]);return{Component:H,ImgComponent:U,src:N,alt:z,icon:_,name:S,imgRef:Z,slots:es,classNames:A,fallback:G,isImgLoaded:en,showFallback:er,ignoreFallback:E,getInitials:J,getAvatarProps:ei,getImageProps:ed}}},61594:function(e,t,n){"use strict";n.d(t,{h:function(){return d}});var a=n(94450),r=n(788),s=n(82581),l=n(38197),o=n(7590),i=(0,l.Gp)((e,t)=>{let{Component:n,ImgComponent:l,src:i,icon:d=(0,o.jsx)(a.f,{}),alt:u,classNames:c,slots:f,name:h,showFallback:m,fallback:b,getInitials:g,getAvatarProps:x,getImageProps:v}=(0,r.F)({...e,ref:t}),p=(0,s.useMemo)(()=>!m&&i?null:b?(0,o.jsx)("div",{"aria-label":u,className:f.fallback({class:null==c?void 0:c.fallback}),role:"img",children:b}):h?(0,o.jsx)("span",{"aria-label":u,className:f.name({class:null==c?void 0:c.name}),role:"img",children:g(h)}):(0,o.jsx)("span",{"aria-label":u,className:f.icon({class:null==c?void 0:c.icon}),role:"img",children:d}),[m,i,b,h,c]);return(0,o.jsxs)(n,{...x(),children:[i&&(0,o.jsx)(l,{...v(),alt:u}),p]})});i.displayName="NextUI.Avatar";var d=i},14962:function(e,t,n){"use strict";n.d(t,{C:function(){return r},k:function(){return a}});var[a,r]=(0,n(26454).k)({name:"AvatarGroupContext",strict:!1})},55684:function(e,t,n){"use strict";n.d(t,{e:function(){return a},x:function(){return r}});var a=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),r=(...e)=>{let t=" ";for(let n of e)if("string"==typeof n&&n.length>0){t=n;break}return t}},32611:function(e,t,n){"use strict";n.d(t,{r:function(){return l},z:function(){return o}});var a=n(36010),r=n(42871),s=n(7493),l=(0,r.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...s.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...s.z6,"flex","items-center","justify-center"],name:[...s.z6,"font-normal","text-center","text-inherit"],icon:[...s.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:a.J.solid.default},primary:{base:a.J.solid.primary},secondary:{base:a.J.solid.secondary},success:{base:a.J.solid.success},warning:{base:a.J.solid.warning},danger:{base:a.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}},disableAnimation:{true:{base:"transition-none",img:"transition-none"},false:{}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]}),o=(0,r.tv)({slots:{base:"flex items-center justify-center h-auto w-max",count:"hover:-translate-x-0"},variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}})},22543:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var a=n(82581),r=n(20984);function s(e={}){let{loading:t,src:n,srcSet:s,onLoad:l,onError:o,crossOrigin:i,sizes:d,ignoreFallback:u}=e,[c,f]=(0,a.useState)("pending");(0,a.useEffect)(()=>{f(n?"loading":"pending")},[n]);let h=(0,a.useRef)(),m=(0,a.useCallback)(()=>{if(!n)return;b();let e=new Image;e.src=n,i&&(e.crossOrigin=i),s&&(e.srcset=s),d&&(e.sizes=d),t&&(e.loading=t),e.onload=e=>{b(),f("loaded"),null==l||l(e)},e.onerror=e=>{b(),f("failed"),null==o||o(e)},h.current=e},[n,i,s,d,l,o,t]),b=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,r.G)(()=>{if(!u)return"loading"===c&&m(),()=>{b()}},[c,m,u]),u?"loaded":c}}},function(e){e.O(0,[2138,244,8236,9447,7847,9101,4494,3333,3998,7814,1744],function(){return e(e.s=24090)}),_N_E=e.O()}]);