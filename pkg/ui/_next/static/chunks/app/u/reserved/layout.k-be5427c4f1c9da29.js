(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{55347:function(e,t,s){Promise.resolve().then(s.bind(s,96283))},16859:function(e,t,s){"use strict";s.r(t),s.d(t,{Page:function(){return x}});var r=s(59547),l=s(30912),a=s(74600),n=s(56582),i=s(1463),c=s(47177),o=s(24449),d=s(65589),u=s(15361);let f=()=>{let{isBatchUploading:e}=(0,c.useUpload)();return(0,r.jsx)("div",{className:"relative size-full min-w-0 p-3",children:(0,r.jsx)("div",{className:"relative flex size-full min-w-0 items-center justify-center rounded-xl border-3 border-dashed border-blue-400",children:e?(0,r.jsx)(o.c,{}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,r.jsx)(u.default,{src:d.Z,width:64,height:64,alt:"cloud",loading:"eager",className:"size-24"}),(0,r.jsx)("h2",{className:"text-center text-xl font-semibold text-white-400",children:"Drop bangers to upload"})]})})})},x=e=>{let{children:t,isGated:s=!0,border:c="xs:border-0 sm:border-x border-white-400/15"}=e,o=(0,a.useRouter)(),{profile:d,setProfile:u,isHovering:x,isPostingMemes:m}=(0,n.O)();return(0,l.useEffect)(()=>{s&&!d&&i.P.getMe().then(u).catch(e=>{console.error(e),o.push("/")})},[s,d,o,u]),(0,r.jsx)("div",{className:"relative size-full min-w-0 xs:pb-16 ".concat(c),children:x&&!m?(0,r.jsx)(f,{}):t})}},62350:function(e,t,s){"use strict";s.d(t,{O:function(){return a}});var r=s(59547),l=s(15361);let a=e=>{let{src:t,alt:s,id:a,margin:n="m-2",onClick:i}=e;return(0,r.jsx)("button",{id:a,className:"flex size-9 items-center justify-center rounded-full hover:bg-black-100 ".concat(n),onClick:i,children:(0,r.jsx)(l.default,{priority:!0,src:t,alt:s,className:"w-3.5 opacity-85 xs:w-4"})})}},96283:function(e,t,s){"use strict";s.r(t),s.d(t,{ProfileBaseLayout:function(){return C}});var r,l,a=s(59547),n=s(16859),i=s(56582),c=s(79886),o=s(74600),d=s(49955),u=s(6566),f=s(15361),x={src:"/memedeck:memedeck:holium.os/_next/static/media/stack.46b44c3b.svg",height:68,width:65,blurWidth:0,blurHeight:0},m=s(82972);let h=()=>(0,a.jsxs)(m.A,{variant:"flat",color:"default",className:"h-9 min-w-10 justify-center gap-3 sm:flex sm:px-0 md:w-[140px] xs:hidden xs:px-0",as:c.default,href:"/deck/edit",children:[(0,a.jsx)(f.default,{src:x,alt:"New deck",className:"w-4 fill-blue-300"}),(0,a.jsx)("p",{className:"hidden font-semibold md:flex",children:"New deck"})]});(r=l||(l={})).Memes="Memes",r.Decks="Decks",r.Drafts="Drafts",r.Bookmarks="Bookmarks";let p=(e,t)=>{switch(e){case"Memes":return"/u/".concat(t);case"Decks":return"/u/".concat(t,"/decks");case"Drafts":return"/u/".concat(t,"/drafts");case"Bookmarks":return"/u/".concat(t,"/bookmarks");default:return""}},g=e=>{let{handle:t,isSelf:s}=e,r=(0,o.usePathname)();return(0,a.jsxs)("div",{className:"relative flex min-w-full max-w-full flex-row items-center justify-between overflow-x-auto border-b-1 border-white-400/15 px-1.5",children:[(0,a.jsx)(d.n,{color:"primary",variant:"underlined","aria-label":"Profile tabs",radius:"full",selectedKey:r,classNames:{base:"w-full xs:mt-2 mt-1",tabList:"gap-4 w-full relative rounded-none p-0 border-b border-divider px-3 xs:justify-center md:justify-start border-none",cursor:"w-full bg-blue-500",tab:"max-w-fit px-0 !h-12 select-none outline-none",tabContent:"group-data-[selected=true]:text-blue-500 px-1 text-white-400/75 font-semibold tracking-wide mb-1 !text-base !font-semibold"},children:Object.values(l).map(e=>{let r=p(e,t);return"Drafts"!==e||s?(0,a.jsx)(u.r,{className:"!focus-visible:outline-none",title:(0,a.jsx)("h2",{children:e}),as:c.default,href:r},r):null})}),s&&(0,a.jsx)(h,{})]})};var b={src:"/memedeck:memedeck:holium.os/_next/static/media/arrow.left.37648ed6.svg",height:46,width:57,blurWidth:0,blurHeight:0},v=s(62350),j=s(89204);let k=e=>{let{title:t,border:s="border-b border-transparent",isLoading:r=!1,endContent:l,onGoBack:n}=e,{goBack:i}=(0,j.useAppHistory)();return(0,a.jsxs)("div",{className:"flex h-16 w-full items-center ".concat(s),children:[(0,a.jsx)(v.O,{src:b,alt:"Back",onClick:null!=n?n:i}),r?(0,a.jsx)("h1",{className:"h-6 w-24 animate-pulse rounded bg-gray-200"}):(0,a.jsx)("h1",{className:"flex-1 text-left text-lg font-bold truncate",children:t}),l]})};var w=s(30912),y=s(1463);let N=e=>{let{handle:t=""}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-12",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 px-3",children:[(0,a.jsx)("div",{className:"size-24 rounded-full bg-black-300"}),(0,a.jsx)("div",{className:"mb-2 flex flex-col gap-2",children:(0,a.jsxs)("h3",{className:"text-lg font-medium leading-4 text-white-400/70",children:["@",t]})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 px-3",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold leading-6",children:"This account doesn’t exist"}),(0,a.jsx)("p",{className:"text-lg font-medium leading-4 text-white-400/70",children:"Try searching for another."})]})]})};var P=s(29619),_=s(39515),B=s(94667),z=s(93078);let C=e=>{var t;let{children:s}=e,r=null!==(t=(0,o.usePathname)().split("/")[2])&&void 0!==t?t:"",{profile:l}=(0,i.O)(),{goBack:c}=(0,j.useAppHistory)(),[d,u]=(0,w.useState)(!0),[f,x]=(0,w.useState)(),h=(0,w.useMemo)(()=>(null==l?void 0:l.twitter_profile.screen_name)===r,[r,l]),p=(0,w.useMemo)(()=>{var e;return null!==(e=null==f?void 0:f.profile_image_url_https.replace("_normal",""))&&void 0!==e?e:""},[f]);return((0,w.useEffect)(()=>{l&&!f&&(h?(x(l.twitter_profile),u(!1)):y.P.getProfileByHandle(r).then(e=>{e?x(e.twitter_profile):x(null)}).catch(()=>{x(null)}).finally(()=>{u(!1)}))},[h,r,l,f]),d)?(0,a.jsx)(n.Page,{children:(0,a.jsxs)("div",{className:"flex size-full flex-col gap-3",children:[(0,a.jsx)(k,{title:"",isLoading:!0}),(0,a.jsxs)("div",{className:"mb-2 flex items-center gap-3 px-3",children:[(0,a.jsx)("div",{className:"size-24 animate-pulse rounded-full bg-gray-200"}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"h-6 w-48 animate-pulse rounded bg-gray-200"}),(0,a.jsx)("div",{className:"h-4 w-32 animate-pulse rounded bg-gray-200"})]})]}),(0,a.jsx)(g,{handle:"",isSelf:h})]})}):f?(0,a.jsx)(n.Page,{children:(0,a.jsxs)("div",{className:"flex size-full flex-col gap-3",children:[(0,a.jsx)(k,{title:"Profile",onGoBack:()=>c("/home","/u/".concat(f.screen_name)),endContent:h?(0,a.jsx)(m.A,{isIconOnly:!0,variant:"flat",className:"flex md:hidden mr-3",onClick:()=>{y.P.logout().then(()=>{window.location.reload()})},children:(0,a.jsx)(z.JO,{icon:"iconamoon:exit",width:16})}):void 0}),(0,a.jsx)(P.z,{name:(0,a.jsx)("h2",{className:"text-2xl font-black",children:f.name}),classNames:{base:"flex sm:flex-col mb-2 xs:mb-2 xs:flex-col md:flex-row lg:flex-row xs:gap-2 sm:gap-4 justify-start sm:px-4",wrapper:"flex xs:items-center xs:gap-1 sm:gap-1 md:gap-0.5 sm:items-center md:items-start",name:"text-2xl font-bold"},description:(0,a.jsxs)(_.O,{href:"https://twitter.com/".concat(f.screen_name),size:"sm",className:"flex items-center text-base font-normal text-white-400/50",isExternal:!0,children:["@".concat(f.screen_name),(0,a.jsx)(B.x,{})]}),avatarProps:{className:"!xs:size-14 !size-24 overflow-hidden rounded-full",src:p,alt:f.screen_name}}),(0,a.jsx)(g,{handle:r,isSelf:h}),s]})}):(0,a.jsx)(n.Page,{children:(0,a.jsxs)("div",{className:"flex size-full flex-col gap-3",children:[(0,a.jsx)(k,{title:""}),(0,a.jsx)(N,{handle:r})]})})}},89204:function(e,t,s){"use strict";s.r(t),s.d(t,{AppHistoryProvider:function(){return i},useAppHistory:function(){return c}});var r=s(59547),l=s(74600),a=s(30912);let n=(0,a.createContext)({}),i=e=>{let{children:t}=e,s=(0,l.usePathname)(),i=(0,l.useRouter)(),[c,o]=(0,a.useState)([]),d=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",t=arguments.length>1?arguments[1]:void 0;console.log("goBack",{defaultRoute:e,ignoreRouteBase:t});let s=e;c.length>1&&(s=c[c.length-2],void 0!==t&&s.includes(t)&&(s=e)),"string"!=typeof s&&(s="/home"),i.push(s,{scroll:!1})},[c,i]);return(0,a.useEffect)(()=>{o(e=>e[e.length-1]!==s?[...e,s]:e)},[s]),(0,r.jsx)(n.Provider,{value:{goBack:d},children:t})},c=()=>(0,a.useContext)(n)},65589:function(e,t){"use strict";t.Z={src:"/memedeck:memedeck:holium.os/_next/static/media/cloud.c8336d47.svg",height:74,width:74,blurWidth:0,blurHeight:0}},39515:function(e,t,s){"use strict";s.d(t,{O:function(){return o}});var r=s(59614),l=s(94925),a=s(59547),n=e=>(0,a.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,a.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,a.jsx)("path",{d:"M15 3h6v6"}),(0,a.jsx)("path",{d:"M10 14L21 3"})]}),i=s(94963),c=(0,l.Gp)((e,t)=>{let{Component:s,children:l,showAnchorIcon:c,anchorIcon:o=(0,a.jsx)(n,{className:i.A}),getLinkProps:d}=(0,r.n)({ref:t,...e});return(0,a.jsx)(s,{...d(),children:(0,a.jsxs)(a.Fragment,{children:[l,c&&o]})})});c.displayName="NextUI.Link";var o=c},59614:function(e,t,s){"use strict";s.d(t,{n:function(){return u}});var r=s(94963),l=s(22161),a=s(88830),n=s(66455),i=s(94925),c=s(27404),o=s(52624),d=s(30912);function u(e){var t,s;let[u,f]=(0,i.oe)(e,r.p.variantKeys),{ref:x,as:m,children:h,anchorIcon:p,isExternal:g=!1,showAnchorIcon:b=!1,autoFocus:v=!1,className:j,onPress:k,onPressStart:w,onPressEnd:y,onClick:N,...P}=u,_=(0,c.gy)(x),{linkProps:B}=function(e,t){let{elementType:s="a",onPress:r,onPressStart:i,onPressEnd:c,onClick:o,isDisabled:d,...u}=e,f={};"a"!==s&&(f={role:"link",tabIndex:d?void 0:0});let{focusableProps:x}=(0,a.kc)(e,t),{pressProps:m,isPressed:h}=(0,n.r)({onPress:r,onPressStart:i,onPressEnd:c,isDisabled:d,ref:t}),p=(0,l.zL)(u,{labelable:!0,isLink:"a"===s}),g=(0,l.dG)(x,m),b=(0,l.tv)();return{isPressed:h,linkProps:(0,l.dG)(p,{...g,...f,"aria-disabled":d||void 0,"aria-current":e["aria-current"],onClick:e=>{var t;null==(t=m.onClick)||t.call(m,e),o&&o(e),!b.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&(0,l.b0)(e.currentTarget,e)&&(e.preventDefault(),b.open(e.currentTarget,e))}})}}({...P,onPress:k,onPressStart:w,onPressEnd:y,onClick:N,isDisabled:e.isDisabled,elementType:"".concat(m)},_),{isFocused:z,isFocusVisible:C,focusProps:D}=(0,a.Fx)({autoFocus:v});g&&(P.rel=null!=(t=P.rel)?t:"noopener noreferrer",P.target=null!=(s=P.target)?s:"_blank");let O=(0,d.useMemo)(()=>(0,r.p)({...f,className:j}),[...Object.values(f),j]);return{Component:m||"a",children:h,anchorIcon:p,showAnchorIcon:b,getLinkProps:(0,d.useCallback)(()=>({ref:_,className:O,"data-focus":(0,o.PB)(z),"data-disabled":(0,o.PB)(e.isDisabled),"data-focus-visible":(0,o.PB)(C),...(0,l.dG)(D,B,P)}),[O,z,C,D,B,P])}}},94963:function(e,t,s){"use strict";s.d(t,{A:function(){return n},p:function(){return a}});var r=s(20162),l=s(33952),a=(0,r.tv)({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...l.Dh],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1,disableAnimation:!1}}),n="flex mx-1 text-current self-center"}},function(e){e.O(0,[290,703,972,886,674,708,203,177,930,957,744],function(){return e(e.s=55347)}),_N_E=e.O()}]);