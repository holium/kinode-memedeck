(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7937],{76214:function(e,a,s){Promise.resolve().then(s.bind(s,48146))},48146:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var t=s(7590),n=s(23143),o=s(82581),r=s(84394),l=s(3333),i=s(32475),c=s(92782);function d(){let e=(0,n.useRouter)(),a=(0,l.iS)();return(0,o.useEffect)(()=>{c.j7&&i.R.setPublicAddress(window.location.href)},[]),(0,o.useEffect)(()=>{a.isFetching||(a.data?e.push("/home"):e.push("/trending"))},[a.data,a.isFetching,e]),(0,t.jsx)("div",{className:"fixed inset-0 bg-black-0 flex size-full items-center justify-center",children:(0,t.jsx)(r.Ew,{})})}},84394:function(e,a,s){"use strict";s.d(a,{Ud:function(){return h},hd:function(){return d},Ew:function(){return u},QB:function(){return m}});var t=s(7590),n=s(64064),o=s(27613),r=s(4763),l={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo.a86b8f2b.svg",height:256,width:256,blurWidth:0,blurHeight:0},i=s(22566),c=s(57031);let d=()=>(0,t.jsx)("div",{className:"flex h-16 min-h-16 select-none items-center justify-center lg:justify-start",children:(0,t.jsxs)(r.default,{href:"/home",children:[(0,t.jsxs)("div",{className:"hidden gap-3 items-center lg:flex",children:[(0,t.jsx)(m,{}),(0,t.jsx)(h,{})]}),(0,t.jsx)("div",{className:"lg:hidden",children:(0,t.jsx)(u,{})})]})}),u=()=>(0,t.jsx)(o.default,{src:l,alt:"".concat(c.jG," Icon"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:"h-10 min-w-10 w-full select-none"}),m=e=>{let{className:a="h-12 w-[120px] object-cover"}=e;return(0,t.jsx)(o.default,{priority:!0,src:i.Z,alt:"".concat(c.jG," Logo"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:a,draggable:!1})},h=()=>(0,t.jsx)(n.z,{size:"sm",color:"warning",classNames:{base:"mb-0.5 text-yellow-400 bg-yellow-50 border-1 border-yellow-400/10"},children:"Alpha"})},32475:function(e,a,s){"use strict";s.d(a,{R:function(){return o}});var t=s(92782);class n{async setPublicAddress(e){return fetch("".concat(n.BASE_URL,"/set_public_address"),{method:"POST",body:JSON.stringify({url:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json())}async setTGBot(e,a,s){return fetch("".concat(n.BASE_URL,"/set_tg_bot/").concat(e,"/").concat(a,"/").concat(s),{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json())}}n.BASE_URL=(0,t.bR)();let o=new n},57031:function(e,a,s){"use strict";s.d(a,{K7:function(){return o},jG:function(){return n},sw:function(){return l},vk:function(){return r},zD:function(){return i}});var t=s(92782);let n="MemeDeck",o="Meme With Frens",r="Create & discover memes with AI.";function l(e){return{title:"AI Meme",description:"View the AI-generated meme on MemeDeck.xyz",titleWithAttribution:"AI Meme by ".concat(e.by.name," (@").concat(e.by.handle,")"),source:e.source,creator:e.by.name,url:e.source_url||e.url,width:e.width,height:e.height}}function i(e){var a,s,t,n,o,r,l,i,c,d,u,m,h,b,f,g,v,p;let w="".concat(e.by.name," (@").concat(e.by.handle,")"),y="AI Meme",x="View the AI-generated meme by ".concat(w," on MemeDeck.xyz"),C="",j=1152,J=1152,_="image";if("image"===e.post_type)_=null!==(r=null===(a=e.image)||void 0===a?void 0:a.source)&&void 0!==r?r:"image",C=(null===(s=e.image)||void 0===s?void 0:s.source_url)||(null===(t=e.image)||void 0===t?void 0:t.url)||"",j=null!==(l=null===(n=e.image)||void 0===n?void 0:n.width)&&void 0!==l?l:1152,J=null!==(i=null===(o=e.image)||void 0===o?void 0:o.height)&&void 0!==i?i:1152;else if("meme"===e.post_type){let a=Object.values(null!==(f=null===(c=e.meme)||void 0===c?void 0:c.panels)&&void 0!==f?f:{}),s=a.find(e=>"image"===e.panel_type&&e.panel_config.prompt),t=a.find(e=>"image"===e.panel_type&&e.panel_config.image),n=s?s.panel_config.prompt:null,o=t?t.panel_config.image:null,r=a.find(e=>"faceswap"===e.panel_type&&e.panel_config.faceswap),l=r?r.panel_config.faceswap:null;if(n)y=n.character.replace("ai_character:","").replace("_"," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),x=n.user_positive_prompt;else if(o){let e=null!==(g=null==o?void 0:o.extracted_text)&&void 0!==g?g:"";y=e.length>50?"".concat(e.slice(0,50),"..."):e,x=o.search_text}else l&&(y="Face Swap",x="View the face swap meme by ".concat(w," on MemeDeck.xyz"));C=(null===(d=e.meme)||void 0===d?void 0:d.url)||(null===(u=e.image)||void 0===u?void 0:u.source_url)||(null===(m=e.image)||void 0===m?void 0:m.url)||"",j=null!==(v=null===(h=e.meme)||void 0===h?void 0:h.width)&&void 0!==v?v:1152,J=null!==(p=null===(b=e.meme)||void 0===b?void 0:b.height)&&void 0!==p?p:1152}let E="".concat(y," by ").concat(w);return{title:y,titleWithAttribution:E,description:x,source:_,creator:w,url:C,width:j,height:J}}"".concat(n," – ").concat(o),new URL(t.j7?"http://localhost:8080":"https://memedeck.xyz")},22566:function(e,a){"use strict";a.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo-wide.572ec4d3.svg",height:256,width:702,blurWidth:0,blurHeight:0}},81050:function(e,a,s){"use strict";s.d(a,{v:function(){return f}});var t=s(38197),n=s(31473),o=s(13150),r=s(97811),l=s(36010),i=s(42871),c=s(7493),d=(0,i.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...c.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:l.J.solid.default}},{variant:"solid",color:"primary",class:{base:l.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:l.J.solid.secondary}},{variant:"solid",color:"success",class:{base:l.J.solid.success}},{variant:"solid",color:"warning",class:{base:l.J.solid.warning}},{variant:"solid",color:"danger",class:{base:l.J.solid.danger}},{variant:"shadow",color:"default",class:{base:l.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:l.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:l.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:l.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:l.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:l.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:l.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:l.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:l.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:l.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:l.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:l.J.bordered.danger}},{variant:"flat",color:"default",class:{base:l.J.flat.default}},{variant:"flat",color:"primary",class:{base:l.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:l.J.flat.secondary}},{variant:"flat",color:"success",class:{base:l.J.flat.success}},{variant:"flat",color:"warning",class:{base:l.J.flat.warning}},{variant:"flat",color:"danger",class:{base:l.J.flat.danger}},{variant:"faded",color:"default",class:{base:l.J.faded.default}},{variant:"faded",color:"primary",class:{base:l.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:l.J.faded.secondary}},{variant:"faded",color:"success",class:{base:l.J.faded.success}},{variant:"faded",color:"warning",class:{base:l.J.faded.warning}},{variant:"faded",color:"danger",class:{base:l.J.faded.danger}},{variant:"light",color:"default",class:{base:l.J.light.default}},{variant:"light",color:"primary",class:{base:l.J.light.primary}},{variant:"light",color:"secondary",class:{base:l.J.light.secondary}},{variant:"light",color:"success",class:{base:l.J.light.success}},{variant:"light",color:"warning",class:{base:l.J.light.warning}},{variant:"light",color:"danger",class:{base:l.J.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),u=s(45899),m=s(46855),h=s(2739),b=s(82581);function f(e){let[a,s]=(0,t.oe)(e,d.variantKeys),{ref:l,as:i,children:c,avatar:f,startContent:g,endContent:v,onClose:p,classNames:w,className:y,...x}=a,C=(0,u.gy)(l),j=(0,m.W)(null==w?void 0:w.base,y),J=!!p,_="dot"===e.variant,{focusProps:E,isFocusVisible:z}=(0,r.F)(),k=(0,b.useMemo)(()=>"string"==typeof c&&(null==c?void 0:c.length)===1,[c]),N=(0,b.useMemo)(()=>!!f||!!g,[f,g]),A=(0,b.useMemo)(()=>!!v||J,[v,J]),S=(0,b.useMemo)(()=>d({...s,hasStartContent:N,hasEndContent:A,isOneChar:k,isCloseable:J,isCloseButtonFocusVisible:z}),[(0,h.Xx)(s),z,N,A,k,J]),{pressProps:B}=(0,o.r)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:p}),M=e=>(0,b.isValidElement)(e)?(0,b.cloneElement)(e,{className:(0,m.W)("max-h-[80%]",e.props.className)}):null;return{Component:i||"div",children:c,slots:S,classNames:w,isDot:_,isCloseable:J,startContent:((0,b.isValidElement)(f)?(0,b.cloneElement)(f,{className:S.avatar({class:null==w?void 0:w.avatar})}):null)||M(g),endContent:M(v),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:S.closeButton({class:null==w?void 0:w.closeButton}),...(0,n.d)(B,E)}),getChipProps:()=>({ref:C,className:S.base({class:j}),...x})}}},64064:function(e,a,s){"use strict";s.d(a,{z:function(){return c}});var t=s(81050),n=s(66097),o=s(38197),r=s(82581),l=s(7590),i=(0,o.Gp)((e,a)=>{let{Component:s,children:o,slots:i,classNames:c,isDot:d,isCloseable:u,startContent:m,endContent:h,getCloseButtonProps:b,getChipProps:f}=(0,t.v)({...e,ref:a}),g=(0,r.useMemo)(()=>d&&!m?(0,l.jsx)("span",{className:i.dot({class:null==c?void 0:c.dot})}):m,[i,m,d]),v=(0,r.useMemo)(()=>u?(0,l.jsx)("span",{...b(),children:h||(0,l.jsx)(n.f,{})}):h,[h,u,b]);return(0,l.jsxs)(s,{...f(),children:[g,(0,l.jsx)("span",{className:i.content({class:null==c?void 0:c.content}),children:o}),v]})});i.displayName="NextUI.Chip";var c=i},66097:function(e,a,s){"use strict";s.d(a,{f:function(){return n}});var t=s(7590),n=e=>(0,t.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,t.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})})}},function(e){e.O(0,[2138,116,3333,3998,7814,1744],function(){return e(e.s=76214)}),_N_E=e.O()}]);