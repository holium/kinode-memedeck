(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7405],{33056:function(e,t,n){Promise.resolve().then(n.bind(n,74886))},74886:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var s=n(59547),l=n(30912),a=n(1463),i=n(54056),r=n(93078),c=n(35875),o=n(99854),u=n(82972),d=n(71904),f=n(15076),m=n(44399),h=n(81771),x=n(25957),p=n(88992),g=n(22083),v=n(10188),y=n(24449),w=n(73726),j=n(17432),b=n(39992),k=n(79886),C=n(67887),N=n(94667);let P=e=>{let{username:t}=e;return(0,s.jsxs)(k.default,{href:"https://twitter.com/".concat(t),target:"_blank",className:"flex flex-1 gap-2 sm:gap-3 items-center min-w-0 hover:underline",children:[(0,s.jsx)(C.h,{src:"https://unavatar.io/twitter/".concat(t),alt:t,name:t,showFallback:!0,size:"sm",className:"min-w-8"}),(0,s.jsxs)("p",{className:"flex tracking-wide",children:["@".concat(t),(0,s.jsx)(N.x,{})]})]})},_=e=>{let{columnKey:t,invite:n,isDeleting:l,onClickDelete:a}=e;if("created_at"===t)return(0,s.jsx)("p",{className:"flex-1 truncate text-xs sm:text-sm px-2 text-white-400/75",children:(0,b.Po)((0,w.sF)(n,t))});if("status"===t){let e=(0,w.sF)(n,t),i=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),c="ACCEPTED"===e;return(0,s.jsxs)("div",{className:"flex flex-1 items-center justify-between",children:[(0,s.jsx)(j.z,{size:"sm",color:c?"success":"primary",classNames:{base:c?"bg-green-400 text-green-900":"text-white-400"},children:i}),!c&&(0,s.jsx)(u.A,{size:"sm",isIconOnly:!0,variant:"light",isLoading:l,onClick:a,children:(0,s.jsx)(r.JO,{icon:"mdi:remove",className:"text-white-400/75",width:16})})]})}if("to"===t){let e=(0,w.sF)(n,t);return(0,s.jsx)(P,{username:e})}},D=[{key:"to",value:"To"},{key:"created_at",value:"Sent"},{key:"status",value:"Status"}],S=e=>{let{invites:t,isFetching:n,isDeleting:l,onClickDeleteInvite:a}=e;return(0,s.jsxs)(m.b,{classNames:{wrapper:"p-2 lg:p-3",table:"max-w-full min-w-full relative flex flex-col gap-3",thead:"flex flex-col gap-0",th:"flex flex-1 items-center truncate min-h-0 bg-black-400",tbody:"flex flex-col gap-3",tr:"flex max-w-full min-w-full",td:"flex flex-1 items-center truncate px-1 py-0",emptyWrapper:"flex flex-col items-center justify-center"},children:[(0,s.jsx)(h.J,{columns:D,children:e=>(0,s.jsx)(x.j,{children:e.value},e.key)}),(0,s.jsx)(p.y,{items:t,emptyContent:(0,s.jsx)("p",{className:"p-3",children:"No invites issued yet"}),children:n?(0,s.jsxs)(g.g,{children:[(0,s.jsx)(v.X,{children:""}),(0,s.jsx)(v.X,{children:(0,s.jsx)("div",{className:"w-full h-[160px] flex items-center justify-center",children:(0,s.jsx)(y.c,{})})}),(0,s.jsx)(v.X,{children:""})]}):t.sort((e,t)=>"ACCEPTED"===e.status&&"ACCEPTED"!==t.status?1:"ACCEPTED"!==e.status&&"ACCEPTED"===t.status?-1:new Date(t.created_at/1e6).getTime()-new Date(e.created_at/1e6).getTime()).map(e=>(0,s.jsx)(g.g,{children:t=>(0,s.jsx)(v.X,{children:(0,s.jsx)(_,{columnKey:t,invite:e,isDeleting:l===e.id,onClickDelete:()=>a(e.id)},t)})},e.id))})]})};function E(){var e;let{profile:t}=(0,f.useProfile)(),n=null!==(e=null==t?void 0:t.user.invite_cap)&&void 0!==e?e:5,[m,h]=(0,l.useState)([]),[x,p]=(0,l.useState)(!0),[g,v]=(0,l.useState)(""),[y,w]=(0,l.useState)(!1),[j,b]=(0,l.useState)(null),k=(0,l.useMemo)(()=>m.length>=n,[n,m.length]),C=(0,l.useCallback)(async()=>{h(await a.P.getInvites()),p(!1)},[]),N=(0,l.useCallback)(async()=>{if(y||k)return;let e=g.trim().replace(/^@/,"");if(m.some(t=>t.to.toLowerCase()===e.toLowerCase())){(0,d.yv)("User already invited",{variant:"info"});return}try{w(!0);try{if((await a.P.getProfileByHandle(e)).id){(0,d.yv)("User already exists",{variant:"info"});return}}catch(e){}await a.P.postInvite({x_handle:e})}catch(e){(0,d.yv)("Failed to send invite",{variant:"error"})}finally{await C(),v(""),w(!1)}},[y,k,g,m,C]),P=(0,l.useCallback)(async e=>{if(j!==e)try{b(e),await a.P.deleteInvite(e)}catch(e){(0,d.yv)("Failed to delete invite",{variant:"error"})}finally{await C(),b(null)}},[C,j]);return(0,l.useEffect)(()=>{C()},[C]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.y,{title:(0,s.jsxs)("span",{className:"flex items-center gap-1 justify-between",children:["Invite Friends from X",(0,s.jsx)(c.e,{content:(0,s.jsx)("p",{className:"max-w-48",children:"As a Memedeck user you can invite a friend from X which allows them to skip the waitlist."}),children:(0,s.jsx)("div",{className:"flex items-center justify-center size-12",children:(0,s.jsx)(r.JO,{icon:"mdi:information-outline",className:"text-white-400/75",width:16})})})]}),border:"border-b border-white-400/10"}),(0,s.jsxs)("div",{className:"flex flex-col p-3 gap-3 min-w-full max-w-full",children:[(0,s.jsxs)("p",{className:"text-white-400/75 text-sm",children:["You have ",Number(n-m.length),"/",n," invites left."]}),(0,s.jsx)(o.Y,{type:"text",size:"lg",classNames:{input:"placeholder:text-white-400/50"},placeholder:"elonmusk",value:g,onValueChange:v,startContent:(0,s.jsx)(r.JO,{icon:"mdi:at",className:"text-white-400",width:20}),endContent:(0,s.jsx)(u.A,{size:"sm",color:"primary",isLoading:y,isDisabled:k,onClick:N,children:"Invite"}),onKeyDown:e=>{"Enter"===e.key&&N()}}),(0,s.jsx)(S,{invites:m,isFetching:x,isDeleting:j,onClickDeleteInvite:P})]})]})}},54056:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var s=n(59547),l={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/arrow.left.37648ed6.svg",height:46,width:57,blurWidth:0,blurHeight:0},a=n(62350),i=n(89204);let r=e=>{let{title:t,border:n="border-b border-transparent",isLoading:r=!1,endContent:c,onGoBack:o}=e,{goBack:u}=(0,i.useAppHistory)();return(0,s.jsxs)("div",{className:"flex h-16 w-full items-center ".concat(n),children:[(0,s.jsx)(a.O,{src:l,alt:"Back",onClick:null!=o?o:u}),r?(0,s.jsx)("h1",{className:"h-6 w-24 animate-pulse rounded bg-gray-200"}):(0,s.jsx)("h1",{className:"flex-1 text-left text-lg font-bold truncate",children:t}),c]})}},62350:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var s=n(59547),l=n(15361);let a=e=>{let{src:t,alt:n,id:a,margin:i="m-2",w:r="w-3.5",onClick:c}=e;return(0,s.jsx)("button",{id:a,className:"flex size-9 items-center justify-center rounded-full hover:bg-black-100 ".concat(i),onClick:c,children:(0,s.jsx)(l.default,{priority:!0,src:t,alt:n,className:"opacity-85 ".concat(r)})})}},89204:function(e,t,n){"use strict";n.r(t),n.d(t,{AppHistoryProvider:function(){return c},useAppHistory:function(){return o}});var s=n(59547),l=n(74600),a=n(71904),i=n(30912);let r=(0,i.createContext)({}),c=e=>{let{children:t}=e,n=(0,l.usePathname)(),c=(0,l.useRouter)(),[o,u]=(0,i.useState)([]),d=(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",t=arguments.length>1?arguments[1]:void 0;console.log("goBack",{defaultRoute:e,ignoreRouteBase:t});let n=e;o.length>1&&(n=o[o.length-2],void 0!==t&&n.includes(t)&&(n=e)),"string"!=typeof n&&(n="/home"),c.push(n,{scroll:!1})},[o,c]);return(0,i.useEffect)(()=>{u(e=>e[e.length-1]!==n?[...e,n]:e)},[n]),(0,s.jsxs)(r.Provider,{value:{goBack:d},children:[t,(0,s.jsx)(a.wT,{dense:!0,maxSnack:3})]})},o=()=>(0,i.useContext)(r)},39992:function(e,t,n){"use strict";n.d(t,{Df:function(){return a},Po:function(){return l},RL:function(){return r},eh:function(){return i},uZ:function(){return c}});var s=n(60198);let l=e=>{let t=new Date(e/1e6),n=Math.round((new Date().getTime()-t.getTime())/1e3),s=Math.round(n/60),l=Math.round(s/60),a=Math.round(l/24);return n<60?"".concat(n,"s ago"):s<60?"".concat(s,"m ago"):l<24?"".concat(l,"h ago"):"".concat(a," day").concat(1===a?"":"s"," ago")},a=e=>e.replace(/[^a-z0-9]/gi,"_").toLowerCase();function i(e){let t=atob(e.split(",")[1]||e),n=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return new Uint8Array(n)}let r="image/*,.jpg_large,.png_large,.jpeg_large,.jpg_small,.png_small,.jpeg_small";function c(){let e=(0,s.Z)().replace(/-/g,"_"),t="meme:".concat(e);return console.log("Generated new meme id",t),t}},24665:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var s=n(22161),l=n(88830),a=n(75652);function i(e,t,n){let{isDisabled:i=!1,isReadOnly:r=!1,value:c,name:o,children:u,"aria-label":d,"aria-labelledby":f,validationState:m="valid",isInvalid:h}=e;null!=u||null!=d||null!=f||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:x,isPressed:p}=(0,a.r7)({isDisabled:i}),{pressProps:g,isPressed:v}=(0,a.r7)({isDisabled:i||r,onPress(){t.toggle()}}),{focusableProps:y}=(0,l.kc)(e,n),w=(0,s.dG)(x,y),j=(0,s.zL)(e,{labelable:!0});return(0,s.y$)(n,t.isSelected,t.setSelected),{labelProps:(0,s.dG)(g,{onClick:e=>e.preventDefault()}),inputProps:(0,s.dG)(j,{"aria-invalid":h||"invalid"===m||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":r||void 0,onChange:e=>{e.stopPropagation(),t.setSelected(e.target.checked)},disabled:i,...null==c?{}:{value:c},name:o,type:"checkbox",...w}),isSelected:t.isSelected,isPressed:p||v,isDisabled:i,isReadOnly:r,isInvalid:h||"invalid"===m}}},22381:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var s=n(63271);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isReadOnly:t}=e,[n,l]=(0,s.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:n,setSelected:function(e){t||l(e)},toggle:function(){t||l(!n)}}}}},function(e){e.O(0,[1775,1904,3817,2972,9886,920,3372,276,5875,8723,4116,7930,3957,1744],function(){return e(e.s=33056)}),_N_E=e.O()}]);