"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6040],{14074:function(e,l,t){t.d(l,{U:function(){return g}});var s=t(62284),a=t(46231),i=t(46902),n=t(7563),r=t(87335),c=t(68880),d=t(88938),o=t(23405),u=t(66975),m=t(59297),x=t(96690),h=t(10469),f=t(99378);let p=async e=>new Promise((l,t)=>{let s=new Image,a=new FileReader;a.onload=()=>{s.src=a.result},s.onload=()=>{let t=(0,h.vO)(s.width,s.height),{paneWidth:a,paneHeight:i}=(0,h.rf)(x.L.One,t),n=document.createElement("canvas");n.width=a,n.height=i;let r=n.getContext("2d");if(!r)return;let c=s.width,d=s.height;(0,f.h)({ctx:r,image:s,targetWidth:a,targetHeight:i,imageWidth:c,imageHeight:d}),l({base64:n.toDataURL(e.type),aspectRatio:t,targetWidth:a,targetHeight:i})},a.onerror=e=>{t(e)},a.readAsDataURL(e)});var v=t(25845);let g=e=>{let{initialSrc:l,imageRef:t,bgColor:x="bg-black-300",onParseImage:h,onClickDeleteMeme:f}=e,[g,b]=(0,m.useState)(l),[j,w]=(0,m.useState)(!1),[y,N]=(0,m.useState)(!1),k=(0,m.useCallback)(async e=>{if(e){if((0,u.sy)(),e.length>10){(0,u.yv)("Please upload 10 files or less",{variant:"error"});return}for(let l=0;l<e.length;l++)if(e[l].size>33554432){(0,u.yv)("Please upload files 32MB or less",{variant:"error"});return}w(!0);try{if(0===e.length)return;let l=e[0],{base64:t,aspectRatio:s,targetWidth:a,targetHeight:i}=await p(l),n=t.split(",")[1],r=Uint8Array.from(atob(n),e=>e.charCodeAt(0));await h(r,a,i,s),b(t)}catch(e){(0,u.yv)("Error uploading files",{variant:"error"})}finally{w(!1)}}},[h]),C=(0,m.useCallback)(async()=>{N(!0);try{await f(),b(null)}catch(e){}finally{N(!1)}},[f]);return(0,s.jsxs)(i.w,{radius:"md",shadow:"none",className:(0,o.cn)(x,"border-1 border-transparent transition-all",g?"":"hover:border-orange-400"),children:[(0,s.jsx)("div",{className:(0,o.cn)("relative size-full max-h-full max-w-full aspect-square flex items-center justify-center",g?"":"cursor-pointer"),children:g?(0,s.jsx)(n.J,{ref:t,alt:"Image input",classNames:{wrapper:"size-full min-w-full min-h-full",img:"size-full object-cover rounded-none"},src:g}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.JO,{className:"size-8",icon:"hugeicons:image-upload-01"}),(0,s.jsx)("input",{type:"file",multiple:!1,accept:v.RL,className:"absolute inset-0 size-full cursor-pointer opacity-0",onChange:e=>k(e.target.files)})]})}),(0,s.jsxs)(r.i,{className:"gap-4 justify-end min-h-10 overflow-hidden absolute w-full z-10 -top-2.5 -right-2.5",children:[j?(0,s.jsx)(c.c,{size:"sm",color:"warning"}):null,g&&!j?(0,s.jsx)(d.A,{size:"sm",variant:"flat",radius:"full",className:"backdrop-blur-sm bg-red-900/70",isIconOnly:!0,color:"danger",isLoading:y,onClick:C,children:(0,s.jsx)(a.JO,{className:"size-5 !text-red-400",icon:"ic:baseline-close"})}):null]})]})}},40409:function(e,l,t){t.d(l,{h:function(){return y}});var s=t(62284),a=t(46902),i=t(46231),n=t(68880),r=t(12863),c=t(15837),d=t(59297),o=t(49804),u=t(15219),m=t(92453),x=t(81255);let h=()=>{let{admins:e,onClickAddAdmin:l}=(0,m.z)(),[t,a]=(0,d.useState)(""),[h,f]=(0,d.useState)(""),{data:p,isFetching:v}=(0,u.fg)({search:h,start:0,limit:5}),g=(0,d.useCallback)((0,x.D)(e=>f(e),500),[]);(0,d.useEffect)(()=>{g(t)},[t,g]);let b=(0,d.useCallback)(e=>{a(e)},[]);return(0,s.jsx)("div",{className:"flex gap-3 p-3 justify-between",children:(0,s.jsxs)("div",{className:"flex gap-2 items-center flex-1",children:[(0,s.jsx)("div",{className:"flex items-center justify-center size-8 bg-white-400/10 rounded-full",children:v?(0,s.jsx)(n.c,{size:"sm"}):(0,s.jsx)(i.JO,{icon:"tabler:plus",className:" size-4"})}),(0,s.jsx)(r.d,{items:p||[],"aria-label":"Add admin",placeholder:"Add admin",size:"sm",fullWidth:!0,classNames:{base:"flex-1 max-w-full"},value:t,onValueChange:b,onSelectionChange:e=>{let t=null==p?void 0:p.find(l=>l.id===e);t&&(l({id:t.id,name:t.name,handle:t.handle,avatar:t.avatar,badge_image_url:t.badge_image_url}),a(""))},children:l=>(0,s.jsx)(c.R,{value:l.id,textValue:l.name,isDisabled:e.some(e=>e.id===l.id),children:(0,s.jsx)(o.W,{poster:l,p:"p-0"})},l.id)})]})})};var f=t(81374),p=t(98314),v=t(88938),g=t(33548),b=t(12967),j=t(5522);let w=e=>{let{admin:l}=e,{fetchedDeck:t,isAddingAdmin:a,isRemovingAdmin:n,onClickRemoveAdmin:r}=(0,m.z)(),c=(0,d.useMemo)(()=>(null==t?void 0:t.by.id.replace("user:",""))===l.id.replace("user:",""),[l.id,t]);return(0,s.jsxs)("div",{className:"flex gap-3 p-3 items-center justify-between border-b border-white-400/10",children:[(0,s.jsx)(o.W,{poster:l,p:"p-0"}),(0,s.jsx)("div",{className:"size-8 flex items-center justify-center",children:c?(0,s.jsx)("span",{className:"text-[10px] text-white-400/50",children:"Creator"}):(0,s.jsxs)(f.F,{"aria-label":"Admin actions",children:[(0,s.jsx)(p.S,{children:(0,s.jsx)(v.A,{isIconOnly:!0,size:"sm",variant:"light",isLoading:a===l.id||n===l.id,children:(0,s.jsx)(i.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,s.jsx)(g.a,{children:(0,s.jsx)(b.d,{title:"Admin actions",children:(0,s.jsx)(j.W,{"aria-label":"Remove",textValue:"Remove",color:"danger",startContent:(0,s.jsx)(i.JO,{className:"size-5",icon:"tabler:trash"}),onClick:()=>r(l),children:"Remove"},"remove")})})]})})]})},y=e=>{let{bg:l="bg-black-300"}=e,{admins:t}=(0,m.z)();return(0,s.jsx)(a.w,{className:l,shadow:"none",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[t.map(e=>(0,s.jsx)(w,{admin:e},e.id)),(0,s.jsx)(h,{})]})})}},66230:function(e,l,t){t.d(l,{G:function(){return d}});var s=t(62284),a=t(68880),i=t(15254),n=t(44443),r=t(14074),c=t(92453);let d=e=>{let{inputsBgColor:l="bg-black-300"}=e,{isFetching:t,name:d,onChangeName:o,description:u,onChangeDescription:m,coverPhoto:x,onUploadImage:h}=(0,c.z)();return t?(0,s.jsx)("div",{className:"w-full p-3 flex items-center justify-center",children:(0,s.jsx)(a.c,{})}):(0,s.jsxs)("section",{className:"flex gap-3",children:[(0,s.jsx)("div",{className:"size-[128px] sm:size-[168px]",children:(0,s.jsx)(r.U,{imageRef:void 0,bgColor:l,initialSrc:x,onParseImage:async e=>{h(e)},onClickDeleteMeme:async()=>{h(null)}})}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 flex-1",children:[(0,s.jsx)(i.Y,{isRequired:0===d.length,label:"Deck Name",fullWidth:!0,classNames:{inputWrapper:l},value:d,onValueChange:o}),(0,s.jsx)(n.Y,{isRequired:0===u.length,label:"Description",fullWidth:!0,classNames:{inputWrapper:l},value:u,onValueChange:m})]})]})}},68689:function(e,l,t){t.d(l,{F:function(){return r}});var s=t(62284),a=t(46902),i=t(91798),n=t(23405);let r=e=>{let{title:l,description:t,value:r,onValueChange:c,bg:d="bg-black-300",children:o}=e;return(0,s.jsxs)(a.w,{className:(0,n.cn)("flex flex-col gap-3 p-3 min-h-16 overflow-y-auto",d),shadow:"none",children:[(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h4",{className:"text-base font-semibold",children:l}),(0,s.jsx)("p",{className:"text-white-400/50 text-sm",children:t})]}),(0,s.jsx)(i.i,{color:"primary",classNames:{thumb:"bg-white-400",label:"text-white-400/75"},isSelected:r,onValueChange:c})]}),o]})}},23175:function(e,l,t){t.d(l,{D:function(){return n}});var s=t(62284),a=t(65615),i=t(9067);let n=e=>{let{isOpen:l,children:t,onClickClose:n}=e;return(0,s.jsx)(a.R,{size:"lg",classNames:{base:"overflow-hidden",header:"px-4 sm:px-6",body:"px-4 sm:px-6 min-h-96 max-h-96 overflow-hidden",footer:"px-4 sm:px-6"},hideCloseButton:!0,shouldCloseOnInteractOutside:e=>!e.classList.contains("wallet-adapter-modal-container"),isOpen:l,onClose:n,onOpenChange:n,children:(0,s.jsx)(i.A,{children:t})})}},17652:function(e,l,t){t.d(l,{d:function(){return o}});var s=t(62284),a=t(98335),i=t(77618),n=t(64392),r=t(59297),c=t(92271);let d={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?1e3:-1e3,opacity:0})},o=e=>{let{children:l}=e,{index:t}=(0,c.vT)(),[o,u]=(0,r.useState)(t),m=(0,r.useMemo)(()=>t>o?1:-1,[t,o]);return(0,r.useEffect)(()=>{u(t)},[t]),(0,s.jsx)(i.E.div,{className:"min-h-96",transition:{type:"spring",stiffness:300,damping:0},children:(0,s.jsx)(n.M,{initial:!1,custom:m,children:(0,s.jsx)(i.E.div,{custom:m,variants:d,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},className:"absolute size-full",children:(0,s.jsx)(a.I,{children:l})},t)})})}},68619:function(e,l,t){t.d(l,{Y:function(){return c}});var s=t(62284),a=t(79083),i=t(88938),n=t(59297),r=t(92271);let c=()=>{let{index:e,stepCount:l,isBackDisabled:t,isNextDisabled:c,goBack:d,goForward:o}=(0,r.vT)(),u=(0,n.useMemo)(()=>0===e,[e]),m=(0,n.useMemo)(()=>e===l-1,[e,l]),x=(0,n.useMemo)(()=>u?"Cancel":"Back",[u]),h=(0,n.useMemo)(()=>m?"Finish":"Next",[m]);return(0,s.jsx)(a.R,{children:(0,s.jsxs)("div",{className:"w-full flex items-center justify-end gap-3",children:[(0,s.jsx)(i.A,{type:"button",variant:"flat",isDisabled:t,onClick:d,children:x}),(0,s.jsx)(i.A,{type:"button",variant:"solid",color:"primary",isDisabled:c,onClick:o,children:h})]})})}},54681:function(e,l,t){t.d(l,{e:function(){return c}});var s=t(62284),a=t(15382),i=t(92271);let n=e=>{let{text:l=""}=e;return(0,s.jsx)("h3",{className:"font-bold text-lg",children:l})},r=e=>{let{text:l=""}=e;return(0,s.jsx)("p",{className:"font-normal text-xs text-white-400/50",children:l})},c=e=>{let{title:l="",subtitle:t=""}=e,{index:c,stepCount:d}=(0,i.vT)();return(0,s.jsxs)(a.k,{className:"pt-6 flex flex-col gap-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(n,{text:l}),(0,s.jsxs)("div",{className:"text-white-400/25 text-sm leading-7 font-normal tracking-widest",children:[c+1,"/",d]})]}),(0,s.jsx)(r,{text:t})]})}},49804:function(e,l,t){t.d(l,{W:function(){return d},y:function(){return o}});var s=t(62284),a=t(46231),i=t(23405),n=t(63006),r=t(2793),c=t(76971);let d=e=>{let{poster:l,winCount:t=0,p:d="px-4 py-2"}=e;return(0,s.jsxs)("div",{className:(0,i.cn)("flex items-center gap-3 text-sm select-none",d),children:[(0,s.jsx)("div",{className:(0,i.cn)("relative size-8 rounded-full",t>0?"bg-yellow-400":"bg-black-400"),children:(0,s.jsx)(r.default,{className:"rounded-full",src:l.avatar,alt:"@".concat(l.handle),width:40,height:40})}),(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center gap-1 truncate",children:[(0,s.jsx)(c.a,{poster:l,children:(0,s.jsx)("div",{className:"max-w-48 truncate text-md font-semibold leading-tight hover:underline",children:l.name})}),(0,s.jsx)("div",{className:"flex items-center",children:Array.from({length:t}).map((e,l)=>(0,s.jsx)(a.JO,{icon:"mdi:star",className:"-mt-0.5 text-yellow-400 size-4 shadow-small"},l))}),l.badge_image_url&&(0,s.jsx)(n.e,{content:"Kinode user",children:(0,s.jsx)(r.default,{src:l.badge_image_url,alt:"Kinode badge",className:"rounded-sm",width:14,height:14})})]}),(0,s.jsxs)("div",{className:"text-white-400/50 text-sm",children:["@",l.handle]})]})]})},o=()=>(0,s.jsxs)("div",{className:"flex items-center gap-3 text-sm select-none px-4 py-2 w-full",children:[(0,s.jsx)("div",{className:"bg-white-400/10 size-8 rounded-full"}),(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,s.jsx)("div",{className:"bg-white-400/10 w-24 h-[18px] rounded-md"}),(0,s.jsx)("div",{className:"bg-white-400/5 w-20 h-[20px] rounded-md"})]})]})},95279:function(e,l,t){t.d(l,{d:function(){return m}});var s=t(62284),a=t(46231),i=t(12863),n=t(23405),r=t(88938),c=t(15837),d=t(59297),o=t(35976),u=t(15219);let m=e=>{var l;let{aestheticId:t,onSelect:m,hideDescription:x=!1,isMobile:h=!1,isSmall:f=!1,isDisabled:p=!1}=e,v=(0,u.iS)(),g=(0,d.useMemo)(()=>{var e;return null===(e=v.currentData)||void 0===e?void 0:e.studio_config},[null===(l=v.currentData)||void 0===l?void 0:l.studio_config]),b=(0,d.useMemo)(()=>g?g.aesthetics.find(e=>e.id===t):null,[t,g]),j=(0,d.useMemo)(()=>{var e;return x?null:null!==(e=null==b?void 0:b.description)&&void 0!==e?e:"Applies a style to the prompt"},[x,null==b?void 0:b.description]),[w,y]=(0,d.useState)(!1),[N,k]=(0,d.useState)("No style");(0,o.y)({locked:w});let C=(0,d.useCallback)(e=>{if(e||m(null),!g)return;let l=g.aesthetics.find(l=>l.id===e);m(null!=l?l:null)},[g,m]);return g?(0,s.jsx)(i.d,{"aria-label":"Aesthetic",label:f?null:"Style",placeholder:N,description:j,classNames:{base:f?"flex-1":"w-full",popoverContent:(0,n.cn)("absolute transform xs:left-1/2 xs:-translate-x-1/2","bg-[#0F0F0F] border-1 border-black-100 min-w-72 sm:min-w-[340px]"),listboxWrapper:"min-h-80 sm:min-h-[400px]"},inputProps:{classNames:{input:f?"!text-xs truncate":"",inputWrapper:f?"bg-black-300":"",description:"truncate"}},selectedKey:t,size:f?"sm":"md",radius:f?"full":"md",onFocus:e=>{h&&e.preventDefault()},onOpenChange:e=>{y(e),e?k("Type to filter"):k("No style")},className:"z-0",isClearable:!1,isDisabled:p,endContent:b&&!p?(0,s.jsx)(r.A,{size:"sm",isIconOnly:!0,variant:"flat",className:f?"bg-black-300":"",onClick:()=>C(null),children:(0,s.jsx)(a.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}):null,onSelectionChange:C,children:g.aesthetics.map(e=>(0,s.jsx)(c.R,{"aria-label":e.name,textValue:e.name,className:"flex flex-column justify-center gap-2",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-base font-semibold truncate",children:e.name}),(0,s.jsx)("span",{className:"text-xs text-white-400/50 truncate",children:e.description})]})},e.id))}):null}},25854:function(e,l,t){t.d(l,{z:function(){return h}});var s=t(62284),a=t(46231),i=t(86127),n=t(88938),r=t(8836),c=t(15837),d=t(23405),o=t(59297),u=t(35976),m=t(85908);let x=e=>{let l="",t=[];for(let s of e)s.grouping!==l&&(t.push({id:Math.random().toString(),grouping:s.grouping,isDivider:!0}),l=s.grouping),t.push(s);return t},h=e=>{let{characterId:l,onSelect:t,isMiniStudio:h,showClearButton:f=!0,isDisabled:p=!1}=e,{characters:v}=(0,m.Z)(),[g,b]=(0,o.useState)(!1);(0,u.y)({locked:g});let j=(0,o.useMemo)(()=>v.reduce((e,l)=>{let t=l.grouping;return e[t]||(e[t]=0),e[t]++,e},{}),[v]),w=(0,o.useMemo)(()=>x(v.slice().filter(e=>e.enabled).filter(Boolean).sort((e,l)=>"normal"===e.id?1:"normal"===l.id?-1:0).map(e=>{var t;return{...e,avatar:null!==(t=e.thumbnail)&&void 0!==t?t:"",isSelected:l===e.id,isDivider:!1}}).sort((e,l)=>{let t=e.grouping.toUpperCase(),s=l.grouping.toUpperCase();return"ELECTION"===t||t<s?-1:t>s?1:0})),[v,l]),y=(0,o.useCallback)(e=>{let l=v.find(l=>l.id===e);l&&t(l)},[v,t]),N=(0,o.useMemo)(()=>[l.replace("ai_character:","")].filter(Boolean),[l]);return(0,s.jsx)(i.g,{items:w,isOpen:g,onOpenChange:b,placeholder:"Select a character","aria-label":"Character",disabled:p,classNames:{base:h?"flex-1":"w-full",trigger:h?"min-h-0 h-8 px-1 bg-black-300":"h-[80px]",popoverContent:"bg-[#0F0F0F] border-1 border-black-100 min-w-72 sm:min-w-[340px]",listbox:"h-fit selector-list-box",listboxWrapper:"min-h-80 sm:min-h-[400px]"},radius:h?"full":"md",isDisabled:p,defaultSelectedKeys:["pepe"],selectedKeys:N,onChange:e=>y(e.target.value),endContent:l&&f&&(0,s.jsx)(n.A,{size:"sm",isIconOnly:!0,variant:"flat",onClick:()=>t(null),children:(0,s.jsx)(a.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}),renderValue:e=>e.map(e=>{var l,t,a,i,n;return(null===(l=e.data)||void 0===l?void 0:l.isDivider)?null:(0,s.jsxs)("div",{className:(0,d.cn)("flex items-center",h?"gap-2":"gap-4"),children:[(0,s.jsx)(r.h,{alt:(null===(t=e.data)||void 0===t?void 0:t.id)+"-avatar",className:(0,d.cn)("shrink-0",h?"size-4 max-w-6 max-h-6":""),radius:h?"full":"md",size:h?"sm":"lg",src:null===(a=e.data)||void 0===a?void 0:a.avatar}),h?(0,s.jsx)("div",{className:"font-semibold text-xs truncate",children:null===(i=e.data)||void 0===i?void 0:i.name}):(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-tiny text-default-600",children:"Character"}),(0,s.jsx)("h3",{className:"text-xl font-semibold",children:null===(n=e.data)||void 0===n?void 0:n.name})]})]},e.key)}),children:e=>e.isDivider?(0,s.jsx)(c.R,{textValue:e.grouping,hideSelectedIcon:!0,isReadOnly:!0,"aria-disabled":!0,className:"col-span-full",classNames:{base:"bg-transparent hover:!bg-transparent cursor-default"},children:(0,s.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,s.jsx)("h3",{className:"uppercase text-xs tracking-wide font-medium text-white-400/50 select-none",children:e.grouping}),(0,s.jsx)("div",{className:"text-xs font-normal text-white-400/70 bg-white-400/10 rounded-full px-1 py-0.5 min-w-[20px] text-center",children:j[e.grouping]}),(0,s.jsx)("hr",{className:"flex-1 opacity-10"},"divider-".concat(Math.random()))]})},null==e?void 0:e.id):(0,s.jsx)(c.R,{"aria-label":null==e?void 0:e.name,color:e.isSelected?"primary":"default",variant:"solid","data-hover":!0,hideSelectedIcon:!0,classNames:{base:"flex-1 flex flex-col gap-0 ".concat(e.isSelected?"bg-primary-400":""),wrapper:"flex flex-col"},children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 items-center",children:[(0,s.jsx)(r.h,{alt:(null==e?void 0:e.id)+"-avatar",radius:"md",size:"lg",src:null==e?void 0:e.avatar}),(0,s.jsx)("div",{className:"flex items-center gap-1",children:(0,s.jsx)("span",{className:"text-sm font-semibold",children:null==e?void 0:e.name})})]})},null==e?void 0:e.id)})}},85908:function(e,l,t){t.d(l,{Z:function(){return i}});var s=t(59297),a=t(15219);function i(){let{data:e,isLoading:l}=(0,a.iS)(),t=(0,s.useMemo)(()=>null==e?void 0:e.studio_config,[null==e?void 0:e.studio_config]),i=(0,s.useMemo)(()=>{var e;return null!==(e=null==t?void 0:t.characters)&&void 0!==e?e:[]},[null==t?void 0:t.characters]),n=(0,s.useMemo)(()=>{var e;return null!==(e=null==t?void 0:t.aesthetics)&&void 0!==e?e:[]},[null==t?void 0:t.aesthetics]);return{me:e,config:t,isLoading:l,characters:i,aesthetics:n}}},83494:function(e,l,t){t.d(l,{K:function(){return i}});var s=t(59297),a=t(81255);let i=e=>{let{sendUpdate:l}=e,t=(0,s.useRef)({}),[i,n]=(0,s.useState)(!1),r=(0,s.useMemo)(()=>(0,a.k)(l,500),[l]);return{hasUnsavedChanges:i,queueUpdate:(0,s.useCallback)(e=>{t.current={...t.current,...e},n(!0),r(t.current).finally(()=>{t.current={},n(!1)})},[r])}}},92453:function(e,l,t){t.d(l,{u:function(){return d},z:function(){return o}});var s=t(62284),a=t(66975),i=t(59297),n=t(83494),r=t(15219);let c=(0,i.createContext)(void 0),d=e=>{var l;let{deckId:t,children:d}=e,o=(0,i.useMemo)(()=>t.replace("deck:",""),[t]),[u]=(0,r.X2)(),[m,{isLoading:x}]=(0,r.zk)(),[h,f]=(0,i.useState)(!0),[p,v]=(0,i.useState)(null),[g,b]=(0,i.useState)(""),[j,w]=(0,i.useState)(""),[y,N]=(0,i.useState)(null),[k,C]=(0,i.useState)([]),[S,z]=(0,i.useState)(null),[_,D]=(0,i.useState)(null!==(l=null==p?void 0:p.admins)&&void 0!==l?l:[]),[O,I]=(0,i.useState)(null),[R,M]=(0,i.useState)(null),[A,F]=(0,i.useState)(!1),[E,P]=(0,i.useState)(!1),[U,W]=(0,i.useState)(null),{hasUnsavedChanges:L,queueUpdate:V}=(0,n.K)({sendUpdate:m}),J=(0,i.useCallback)(e=>V({id:o,...e}),[o,V]),K=(0,i.useCallback)(async e=>{var l,t;let s=await u(e);if(!s.data)return;let a=s.data;v(a),b(a.title),w(null!==(l=a.description)&&void 0!==l?l:""),N(a.cover_photo),C(null!==(t=a.external_links)&&void 0!==t?t:[]),D(a.admins),F(a.require_approval),P(a.auto_post),W(a.matching_rules)},[]),q=(0,i.useCallback)(e=>{b(e),J({title:e})},[J]),B=(0,i.useCallback)(e=>{w(e),J({description:e})},[J]),Y=(0,i.useCallback)(e=>{N(e?URL.createObjectURL(new Blob([e])):null),J({cover_photo:e?Array.from(e):null})},[J]),T=(0,i.useCallback)(e=>{let l=[...k,e];C(l),J({external_links:l})},[k,J]),G=(0,i.useCallback)(e=>{let l=k.filter(l=>l!==e);z(e),J({external_links:l}),C(l),z(null)},[k,J]),H=(0,i.useCallback)(e=>{try{I(e.id),D(l=>[...l,e]),J({add_admin:e.id})}catch(l){(0,a.yv)("Failed to add admin",{variant:"error"}),D(l=>l.filter(l=>l.id!==e.id))}finally{I(null)}},[J]),Z=(0,i.useCallback)(e=>{try{M(e.id),J({remove_admin:e.id}),D(l=>l.filter(l=>l.id!==e.id))}catch(e){(0,a.yv)("Failed to remove admin",{variant:"error"})}finally{M(null)}},[J]),X=(0,i.useCallback)(e=>{F(e),J({require_approval:e})},[J]),Q=(0,i.useCallback)(e=>{P(e),J({auto_post:e})},[J]),$=(0,i.useCallback)(e=>{W(l=>{var t,s,a;let i={characters:void 0!==e.characters?e.characters:null!==(t=null==l?void 0:l.characters)&&void 0!==t?t:null,styles:void 0!==e.styles?e.styles:null!==(s=null==l?void 0:l.styles)&&void 0!==s?s:null,keywords:void 0!==e.keywords?e.keywords:null!==(a=null==l?void 0:l.keywords)&&void 0!==a?a:null};return J({matching_rules:i}),i})},[J]);return(0,i.useEffect)(()=>{f(!0),K(o).finally(()=>f(!1))},[K,o]),(0,s.jsx)(c.Provider,{value:{deckId:o,isFetching:h,fetchedDeck:p,name:g,onChangeName:q,description:j,onChangeDescription:B,coverPhoto:y,onUploadImage:Y,links:k,onClickAddLink:T,isRemovingLink:S,onClickRemoveLink:G,admins:_,isAddingAdmin:O,onClickAddAdmin:H,isRemovingAdmin:R,onClickRemoveAdmin:Z,adminApproval:A,onChangeAdminApproval:X,autoPost:E,onChangeAutoPost:Q,matchingRules:U,onChangeMatchingRules:$,isSaving:x,hasUnsavedChanges:L},children:d})},o=()=>{let e=(0,i.useContext)(c);if(void 0===e)throw Error("useEditDeck must be used within EditDeckProvider");return e}},16040:function(e,l,t){t.d(l,{NewDeckProvider:function(){return z},W:function(){return _}});var s=t(62284),a=t(28403),i=t(66975),n=t(59297),r=t(92449),c=t(92271),d=t(40409),o=t(15254),u=t(68689),m=t(95279),x=t(25854),h=t(92453);let f=()=>{var e,l,t,a;let{autoPost:i,matchingRules:n,onChangeMatchingRules:r,onChangeAutoPost:c}=(0,h.z)();return(0,s.jsx)(u.F,{title:"Auto-post",description:"Any new generation that meets your constraints will be posted to your deck.",bg:"bg-white-400/5",value:i,onValueChange:c,children:i&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.d,{aestheticId:null==n?void 0:null===(e=n.styles)||void 0===e?void 0:e[0],onSelect:e=>{r({styles:e?[e.id]:null})},hideDescription:!0}),(0,s.jsx)(x.z,{characterId:null!==(t=null==n?void 0:null===(l=n.characters)||void 0===l?void 0:l[0])&&void 0!==t?t:"",onSelect:e=>{r({characters:e?[e.id]:null})}}),(0,s.jsx)(o.Y,{label:"Keywords","aria-label":"Keywords",description:"Comma-separated list of words, one of which must be present in the prompt.",placeholder:"elon, rocket, happy",isClearable:!0,value:null!==(a=null==n?void 0:n.keywords)&&void 0!==a?a:"",onValueChange:e=>{r({keywords:e})}})]})})};var p=t(66230),v=t(23175),g=t(17652),b=t(68619),j=t(54681),w=t(82258);let y=e=>{let{deckId:l,onClickClose:t}=e;return(0,s.jsx)(v.D,{isOpen:!!l,onClickClose:t,children:l&&(0,s.jsx)(h.u,{deckId:l,children:(0,s.jsx)(N,{deckId:l,onClickClose:t})})})},N=e=>{let{deckId:l,onClickClose:t}=e,a=(0,r.useRouter)(),{name:i,description:o,coverPhoto:u}=(0,h.z)(),m=(0,n.useCallback)(e=>0===e&&(0===i.length||0===o.length||!u),[u,o.length,i.length]),x=(0,n.useCallback)(e=>{if(0===e)return t()},[t]),v=(0,n.useCallback)(e=>{if(l&&2===e){let e=(0,w.o4)(l);return a.push(e)}},[l,a]);return(0,s.jsxs)(c.H2,{stepCount:3,isNextDisabled:m,onBack:x,onNext:v,children:[(0,s.jsxs)(c.Cj,{index:0,children:[(0,s.jsx)(j.e,{title:"Tell Us About Your Deck",subtitle:"A deck is a collection of memes around a theme, style, or character."}),(0,s.jsx)(g.d,{children:(0,s.jsx)(p.G,{inputsBgColor:"bg-white-400/5"})}),(0,s.jsx)(b.Y,{})]}),(0,s.jsxs)(c.Cj,{index:1,children:[(0,s.jsx)(j.e,{title:"Invite Friends",subtitle:"Invite your friends to help manage your deck."}),(0,s.jsx)(g.d,{children:(0,s.jsx)(d.h,{bg:"bg-white-400/5"})}),(0,s.jsx)(b.Y,{})]}),(0,s.jsxs)(c.Cj,{index:2,children:[(0,s.jsx)(j.e,{title:"Post Settings",subtitle:"Set rules for how memes get posted into your deck."}),(0,s.jsx)(g.d,{children:(0,s.jsx)(f,{})}),(0,s.jsx)(b.Y,{})]})]})};var k=t(15219),C=t(25845);let S=(0,n.createContext)(void 0),z=e=>{let{children:l}=e,t=(0,a.useSearchParams)(),[r,{isLoading:c}]=(0,k.uG)(),d=(0,n.useMemo)(()=>t.get("newDeckId"),[t]),o=(0,n.useCallback)(async()=>{try{let e=await r({title:"",description:"",auto_post:!1,require_approval:!1,cover_photo:null,admins:null,matching_rules:null,post_ids:null});if(!e.data)throw Error();let l=e.data,t=(0,C.eC)(l.id),s=new URL(window.location.href);s.searchParams.delete("newContestId"),s.searchParams.set("newDeckId",t),window.history.pushState({},"",s.toString())}catch(e){(0,i.yv)("Failed to create new deck",{variant:"error"})}},[r]),u=(0,n.useCallback)(()=>{let e=new URL(window.location.href);e.searchParams.delete("newDeckId"),window.history.pushState({},"",e.toString())},[]);return(0,s.jsxs)(S.Provider,{value:{isCreating:c,onClickNewDeck:o},children:[l,(0,s.jsx)(y,{deckId:d,onClickClose:u})]})},_=()=>{let e=(0,n.useContext)(S);if(void 0===e)throw Error("useNewDeck must be used within NewDeckProvider");return e}}}]);