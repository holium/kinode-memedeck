"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3421],{36313:function(e,t,l){l.d(t,{R:function(){return s}});var n=l(59547),a=l(30912);let i=e=>{let t=new Image;return t.src=e,t.complete},s=e=>{let{src:t,alt:l,width:s,height:r,draggable:c=!0,style:o,noAnimation:d,prefetch:u=!1,initialLoader:m=!1,className:x}=e,[f,h]=(0,a.useState)(!m),v=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(t&&u&&!i(t)){let e=new Image;e.src=t,e.onload=()=>{h(!0)}}},[t,u]),(0,a.useEffect)(()=>{t&&v.current&&v.current.complete&&h(!0)},[v,t]),(0,n.jsxs)("div",{className:"relative flex size-full max-h-full min-h-0 flex-col justify-center",children:[!f&&(0,n.jsx)("div",{className:"absolute left-0 top-0 size-full animate-pulse"}),(0,n.jsx)("img",{ref:v,style:o,src:t,alt:l,width:s,height:r,draggable:c,className:"flex max-h-full min-h-0 select-none ".concat(d?"":"transition-opacity duration-300"," ").concat(f?"opacity-100":"opacity-0","  ").concat(x),onLoad:()=>h(!0)})]})}},27694:function(e,t,l){l.d(t,{u:function(){return s}});var n=l(59547),a=l(15361),i=l(69919);let s=e=>{let{title:t,children:l,isOpen:s,glow:r=!0,hideOnCloseButton:c=!1,onClose:o}=e;return s?(0,n.jsx)("div",{className:"bg-white-100 fixed inset-0 z-50 flex size-full max-h-full min-h-0 items-center justify-center overflow-y-auto overflow-x-hidden p-4",onClick:o,children:(0,n.jsxs)("div",{className:"".concat(r?"glow":""," bg-black-400 relative flex w-full max-w-md flex-col items-center gap-6 rounded-lg px-6 pb-8 pt-6 shadow-lg"),onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("header",{className:"relative flex w-full items-center justify-between",children:[(0,n.jsx)("h2",{className:"text-xl font-bold",children:t}),o&&!c&&(0,n.jsx)("button",{onClick:o,className:"absolute right-0 translate-x-1/4 p-2",children:(0,n.jsx)(a.default,{src:i.Z,alt:"close",className:"w-3"})})]}),(0,n.jsx)("div",{children:l})]})}):null}},77376:function(e,t,l){l.d(t,{L:function(){return a}});var n=l(59547);let a=e=>{let{items:t,position:l="absolute inset-x-0 -top-16",width:a="w-auto",itemPadding:i="px-2"}=e;return(0,n.jsx)("div",{id:"profile-dropdown",className:"border-white-400/10 bg-black-300 z-10 mb-2 flex cursor-default flex-col items-center rounded-lg border py-2 drop-shadow ".concat(l," ").concat(a),children:t.map((e,t)=>(0,n.jsx)("button",{className:"hover:bg-black-400 w-full cursor-pointer text-left text-sm font-semibold leading-10 ".concat(i),onClick:e.onClick,children:(0,n.jsx)("p",{className:"truncate ".concat("danger"===e.type?"text-red-500":""),children:e.label})},"dropdown-item-".concat(e.label,"-").concat(t)))})}},79700:function(e,t,l){l.d(t,{M:function(){return i}});var n=l(59547),a=l(27694);let i=e=>{let{isOpen:t,onCancel:l,onConfirm:i}=e;return(0,n.jsx)(a.u,{isOpen:t,onClose:l,title:"Are you sure?",glow:!1,children:(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)("p",{className:"mt-2 text-white-400/75",children:"This action cannot be undone. Are you sure you want to delete this deck?"}),(0,n.jsxs)("div",{className:"mt-4 flex justify-between",children:[(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("button",{className:"px-4 py-2 text-white-400",onClick:l,children:"Cancel"}),(0,n.jsx)("button",{className:"rounded-lg bg-red-500 px-4 py-2 text-white-400",onClick:i,children:"Delete"})]})]})]})})}},50995:function(e,t,l){l.d(t,{L:function(){return a}});var n=l(59547);let a=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 px-3 pb-3 md:grid-cols-2 lg:grid-cols-3",children:t})}},82168:function(e,t,l){l.d(t,{K:function(){return p},i:function(){return g}});var n=l(59547),a=l(79886);let i=e=>{let{className:t,bg:l="bg-black-100",children:a}=e;return(0,n.jsx)("div",{className:"border-white-400/10 hover:animate-fade-in hover:bg-white-400/5 rounded-2xl border ".concat(l," ").concat(t),children:a})};var s=l(23059),r=l(30912),c=l(77376),o=l(74600),d=l(79700),u=l(1463),m=l(71904),x=l(56582),f=l(40538),h=l(36313),v=l(15361);let p=e=>{var t,l;let{deck:p,refetch:g}=e,j=(0,o.useRouter)(),{profile:b}=(0,x.O)(),w=p.memes,N=Object.keys(w).length,k=w["0"],y=p.is_draft,C=(0,f.bb)(p,y?"edit":"view"),z="edit-".concat(p.id.replaceAll(":","-")),_=p.creator_handle===(null==b?void 0:b.twitter_profile.screen_name),[I,D]=(0,r.useState)(!1),[E,P]=(0,r.useState)(!1),R=e=>{e.target.closest("#"+z)||D(!1)},L=[{label:"Edit",onClick:e=>{e.preventDefault(),e.stopPropagation(),D(!1);let t=(0,f.bb)(p,"edit");j.push(t)}},{label:"Delete",type:"danger",onClick:e=>{e.preventDefault(),e.stopPropagation(),D(!1),P(!0)}}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{href:C,className:"relative",children:(0,n.jsxs)(i,{bg:"transparent",className:"w-full p-2",children:[(0,n.jsxs)("div",{className:"mb-2 mt-1 flex",children:[(0,n.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col gap-2 px-1",children:[(0,n.jsx)("h3",{className:"flex-1 truncate font-medium leading-4 tracking-wide",children:p.name}),(0,n.jsx)("p",{className:"text-white-400/50 truncate text-sm leading-4",children:"".concat(N," meme").concat(1===N?"":"s")})]}),_?(0,n.jsxs)("div",{className:"relative flex flex-col items-end gap-1",children:[(0,n.jsx)("button",{id:z,className:"hover:bg-white-400/10 h-4 rounded-full px-2",onClick:e=>(e.preventDefault(),e.stopPropagation(),D(!0),document.addEventListener("click",R),()=>{document.removeEventListener("click",R)}),children:(0,n.jsx)(v.default,{src:s.Z,alt:"Edit deck",className:"size-4 object-contain object-center opacity-75",width:24,height:24})}),I&&(0,n.jsx)(c.L,{width:"w-24",itemPadding:"px-3",position:"absolute right-0 top-4",items:L}),y&&(0,n.jsx)("div",{className:"rounded-2xl bg-orange-500/25 px-2 text-xs font-medium uppercase leading-5 text-yellow-400/75",children:"Draft"})]}):(0,n.jsx)("div",{className:"relative flex flex-col items-end gap-1",children:(0,n.jsxs)("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),j.push("/u/".concat(p.creator_handle))},className:"flex flex-row items-center pr-2 text-sm font-normal hover:text-gray-300",children:[(0,n.jsx)("div",{id:"creator-avatar",className:"mr-2 size-3 rounded-full bg-gray-500",children:(0,n.jsx)(h.R,{className:"rounded-full",src:p.creator_avatar,alt:p.creator_handle,width:20,height:20})}),(0,n.jsx)("div",{className:"text-gray-400 hover:text-gray-300",children:p.creator_handle})]})})]}),(0,n.jsx)("div",{className:"bg-black-300/70 relative flex size-full items-center justify-center overflow-hidden rounded-lg",children:(0,n.jsx)("div",{className:"square-container relative w-full",children:(0,n.jsx)("div",{className:"absolute inset-0 flex flex-row justify-center",children:k&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{style:{zIndex:0,filter:"brightness(0.5) blur(24px)",transform:"scale(1.2)",border:0,overflow:"hidden"},className:"absolute z-0 size-full",src:k.url,alt:null===(t=k.tags)||void 0===t?void 0:t.join(", ")}),(0,n.jsx)(h.R,{src:k.url,alt:null===(l=k.tags)||void 0===l?void 0:l.join(", "),className:"size-full object-contain",width:512,height:512})]})})})})]})}),(0,n.jsx)(d.M,{isOpen:E,onCancel:()=>P(!1),onConfirm:()=>{P(!1),u.P.deleteDeck(p.id).then(()=>{(0,m.yv)("Deck deleted",{variant:"info"}),g()}).catch(e=>{(0,m.yv)("Something went wrong",{variant:"error"}),console.error(e)})}})]})},g=()=>(0,n.jsx)("div",{className:"border-white-400/10 relative flex size-full items-center justify-center overflow-hidden rounded-2xl border",children:(0,n.jsxs)("div",{className:"flex h-[372px] w-full flex-col justify-start p-2",children:[(0,n.jsx)("div",{className:"mb-2 mt-1 flex",children:(0,n.jsxs)("div",{className:"flex h-[40px] flex-col gap-2 px-0.5",children:[(0,n.jsx)("div",{className:"h-5 w-48 animate-pulse rounded"}),(0,n.jsx)("div",{className:"h-3 w-32 animate-pulse rounded"})]})}),(0,n.jsx)("div",{className:"relative flex size-full animate-pulse items-center justify-center overflow-hidden rounded-lg",children:(0,n.jsx)("div",{className:"square-container relative w-full",children:(0,n.jsx)("div",{className:"absolute inset-0 flex flex-row"})})})]})})},27492:function(e,t,l){l.d(t,{E:function(){return s}});var n=l(59547),a=l(82168),i=l(50995);let s=e=>{let{decks:t,emptyText:l,fetchDecks:s}=e,r=t.filter(e=>e.name||e.description||e.tags.length||Object.keys(e.memes).length);return(0,n.jsx)(i.L,{children:0===r.length?(0,n.jsx)("div",{className:"text-white-400/75",children:l}):r.map(e=>(0,n.jsx)(a.K,{deck:e,refetch:s},e.id))})}},71112:function(e,t,l){l.d(t,{u:function(){return a}});var n=l(74600);let a=e=>{var t;let{key:l,index:a,params:i}=e,s=(0,n.usePathname)(),r=null!==(t=s&&s.split("/")[a||2])&&void 0!==t?t:"",c=i[l]||r;return{[l]:c}}},40538:function(e,t,l){l.d(t,{Mm:function(){return i},bb:function(){return n},s9:function(){return a},wS:function(){return s}});let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",l=encodeURIComponent(e.id.replace("deck:",""));return"view"===t?"?deckId=".concat(l):"/deck/edit/".concat(l)},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",l=encodeURIComponent(e.id.replace("deck:",""));return"view"===t?"?deckId=".concat(l):"/deck/edit/".concat(l)},i=(e,t)=>{let l=encodeURIComponent(e.replace("deck:",""));return"?deckId=".concat(l,"&memeIndex=").concat(t)};function s(e,t){return t.toString().length?"".concat(e,"?").concat(t.toString()):e}},23059:function(e,t){t.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/ellipsis.a4814300.svg",height:10,width:49,blurWidth:0,blurHeight:0}},69919:function(e,t){t.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/xmark.ac6fe3e8.svg",height:48,width:48,blurWidth:0,blurHeight:0}}}]);