(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1556],{17996:function(e,t,l){Promise.resolve().then(l.bind(l,39049)),Promise.resolve().then(l.bind(l,95686)),Promise.resolve().then(l.t.bind(l,95504,23)),Promise.resolve().then(l.t.bind(l,36871,23)),Promise.resolve().then(l.t.bind(l,43297,23)),Promise.resolve().then(l.t.bind(l,74511,23)),Promise.resolve().then(l.t.bind(l,1095,23)),Promise.resolve().then(l.bind(l,50739)),Promise.resolve().then(l.bind(l,52494)),Promise.resolve().then(l.bind(l,45241)),Promise.resolve().then(l.bind(l,51922)),Promise.resolve().then(l.bind(l,27391)),Promise.resolve().then(l.bind(l,85060)),Promise.resolve().then(l.bind(l,88542)),Promise.resolve().then(l.bind(l,68908))},84394:function(e,t,l){"use strict";l.d(t,{Ud:function(){return h},hd:function(){return d},Ew:function(){return u},QB:function(){return m}});var s=l(7590),n=l(64064),r=l(27613),i=l(4763),a={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo.a86b8f2b.svg",height:256,width:256,blurWidth:0,blurHeight:0},o=l(22566),c=l(57031);let d=()=>(0,s.jsx)("div",{className:"flex h-16 min-h-16 select-none items-center justify-center lg:justify-start",children:(0,s.jsxs)(i.default,{href:"/home",children:[(0,s.jsxs)("div",{className:"hidden gap-3 items-center lg:flex",children:[(0,s.jsx)(m,{}),(0,s.jsx)(h,{})]}),(0,s.jsx)("div",{className:"lg:hidden",children:(0,s.jsx)(u,{})})]})}),u=()=>(0,s.jsx)(r.default,{src:a,alt:"".concat(c.jG," Icon"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:"h-10 min-w-10 w-full select-none"}),m=e=>{let{className:t="h-12 w-[120px] object-cover"}=e;return(0,s.jsx)(r.default,{priority:!0,src:o.Z,alt:"".concat(c.jG," Logo"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:t,draggable:!1})},h=()=>(0,s.jsx)(n.z,{size:"sm",color:"warning",classNames:{base:"mb-0.5 text-yellow-400 bg-yellow-50 border-1 border-yellow-400/10"},children:"Alpha"})},71550:function(e,t,l){"use strict";l.d(t,{g:function(){return o}});var s=l(7590),n=l(70244),r=l(82581),i=l(3333),a=l(62247);let o=e=>{let{deck:t,size:l="md",onClickOverride:o}=e,[c]=(0,i.gJ)(),[d]=(0,i.A6)(),[u,m]=(0,r.useState)(!1),h=(0,r.useCallback)(e=>{if(e.stopPropagation(),e.preventDefault(),o){o();return}t.is_following?d(t.id):c(t.id)},[t.id,t.is_following,c,o,d]);return t?(0,s.jsx)(n.A,{variant:t.is_following?"ghost":"solid",color:t.is_following&&u?"danger":"primary",size:l,className:(0,a.cn)("rounded-xl","sm"===l?"!h-[26px] px-1":"",t.is_following&&"sm"===l?"w-[89px]":"",t.is_following&&"md"===l?"w-[106px]":""),disableRipple:!0,onClick:h,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:(0,s.jsx)("div",{className:"flex gap-2 items-center justify-center w-full",children:(0,s.jsx)("h4",{className:"md"===l?"text-base":"text-sm",children:t.is_following?u?"Unfollow":"Following":"Follow"})})}):null}},12571:function(e,t,l){"use strict";l.d(t,{F:function(){return h}});var s=l(7590),n=l(70244),r=l(72728),i=l(27613),a=l(23143),o=l(82581),c=l(61784),d=l(3333),u=l(85183),m=l(38725);let h=e=>{let{title:t="Generate",variant:l="shadow",color:h="primary",size:x="md",queryParam:f="",className:v="mt-3 md:w-full min-w-[50px] rounded-full",iconSize:g="size-6",isIconOnly:p=!1}=e,j=(0,a.useRouter)(),{data:w}=(0,d.iS)(),b=(0,u.TL)(),[y,N]=(0,o.useState)(!1),k=(0,o.useCallback)(()=>{if(!w){b((0,c.it)());return}try{N(!0),j.push("/studio".concat(f))}catch(e){N(!1)}},[b,w,f,j]);return(0,o.useEffect)(()=>{},[]),(0,s.jsx)(n.A,{type:"button",variant:l,color:h,className:(0,r.cn)("flex !gap-2",v),size:x,radius:"full",disableRipple:!0,isIconOnly:p,startContent:(0,s.jsx)(i.default,{src:m.Z,alt:"Generate",className:g}),isDisabled:y,onClick:k,children:(0,s.jsx)("h4",{className:"hidden lg:block text-base truncate",children:t})})}},43833:function(e,t,l){"use strict";l.d(t,{L:function(){return m},z:function(){return u}});var s=l(7590),n=l(61594),r=l(4763),i=l(71550),a=l(21307),o=l(62247),c=l(89405),d=l(96616);let u=e=>{var t,l,u,m,h,x;let{deck:f,radius:v,rank:g,metric:p="memes",onClickNavigate:j}=e;return(0,s.jsxs)(r.default,{href:(0,d.o4)(f.id),className:(0,o.cn)("flex items-center gap-3","h-[54px] px-4 py-2 text-sm","hover:bg-white-400/5",v),onClick:j,children:[g&&(0,s.jsx)("h2",{className:"text-white-400 font-medium text-md",children:g}),(0,s.jsx)("div",{className:"bg-black-400 size-8 rounded-md overflow-hidden",children:(0,s.jsx)(n.h,{size:"sm",radius:"sm",src:null!==(l=null!==(t=f.cover_photo)&&void 0!==t?t:f.thumbnail)&&void 0!==l?l:"",alt:f.title,className:"object-cover object-center size-full"})}),(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,s.jsx)("div",{className:"max-w-48 truncate text-md font-semibold leading-tight",children:f.title}),(0,s.jsx)("div",{className:"text-white-400/50 text-sm truncate",children:"memes"===p?"".concat(null!==(u=f.total_posted)&&void 0!==u?u:0," ").concat((0,c._6)(null!==(m=f.total_posted)&&void 0!==m?m:0,"meme","memes")):"".concat(null!==(h=f.follower_count)&&void 0!==h?h:0," ").concat((0,c._6)(null!==(x=f.follower_count)&&void 0!==x?x:0,"follower","followers"))})]}),f.is_admin?(0,s.jsx)(a.g,{deckId:f.id,onEdit:j}):(0,s.jsx)(i.g,{size:"sm",deck:f})]},f.id)},m=()=>(0,s.jsxs)("div",{className:"flex items-center gap-3 h-[54px] px-4 py-2 text-sm w-full",children:[(0,s.jsx)("div",{className:"bg-white-400/5 size-3 rounded-sm"}),(0,s.jsx)("div",{className:"bg-white-400/10 size-8 rounded-md"}),(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,s.jsx)("div",{className:"bg-white-400/10 h-[18px] w-1/2 rounded-md"}),(0,s.jsx)("div",{className:"bg-white-400/5 h-[20px] w-1/3 rounded-md"})]})]})},21307:function(e,t,l){"use strict";l.d(t,{Z:function(){return n},g:function(){return g}});var s,n,r=l(7590),i=l(69622),a=l(21059),o=l(99395),c=l(15866),d=l(70244),u=l(42739),m=l(60997),h=l(23143),x=l(72655),f=l(82581),v=l(3333);(s=n||(n={})).Edit="edit",s.Delete="delete";let g=e=>{let{deckId:t,size:l="sm",variant:s="light",itemsToRender:n=["edit","delete"],isLoading:g,isDisabled:p,onEdit:j,onDelete:w}=e,b=(0,h.useRouter)(),[y]=(0,v.ez)(),[N,k]=(0,f.useState)(!1),C=(0,f.useCallback)(()=>{b.push("/deck-edit/".concat(t.replace("deck:",""))),null==j||j()},[b,t,j]),P=(0,f.useCallback)(async e=>{e.stopPropagation(),e.preventDefault();try{k(!0),y(t),null==w||w(),b.push("/home")}catch(e){console.error("Failed to delete deck",e),(0,x.yv)("Failed to delete deck",{variant:"error"})}finally{k(!1)}},[t,y,w,b]),z=(0,f.useMemo)(()=>[{key:"edit",label:"Edit",color:"default",startContent:(0,r.jsx)(i.JO,{className:"size-5",icon:"mdi:edit"}),onClick:C},{key:"delete",label:"Delete",color:"danger",startContent:(0,r.jsx)(i.JO,{className:"size-5",icon:"tabler:trash"}),onClick:P}],[C,P]);return(0,r.jsxs)(a.F,{classNames:{content:"min-w-0 w-auto"},children:[(0,r.jsx)(o.S,{children:N||g?(0,r.jsx)("div",{className:"flex items-center justify-center size-8",children:(0,r.jsx)(c.c,{size:"sm"})}):(0,r.jsx)(d.A,{isIconOnly:!0,size:l,variant:s,isDisabled:p,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,r.jsx)(i.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,r.jsx)(u.a,{children:z.filter(e=>n.includes(e.key)).map(e=>(0,r.jsx)(m.W,{color:e.color,startContent:e.startContent,onClick:e.onClick,children:e.label},e.key))})]})}},39049:function(e,t,l){"use strict";l.d(t,{Menu:function(){return M}});var s=l(7590),n=l(23143),r=l(82581),i=l(12571),a=l(84394),o=l(69622),c=l(21059),d=l(99395),u=l(70244),m=l(61594),h=l(42739),x=l(60997),f=l(29908);let v=()=>(0,s.jsxs)("div",{className:"lg:flex hidden gap-2 px-2 select-none",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-2 font-medium text-lg",children:[(0,s.jsx)("span",{className:"text-white-400/25 text-xl font-normal",children:"0.000"})," ",(0,s.jsxs)("div",{className:"flex flex-row items-center gap-1.5 text-white-400/50 text-sm font-normal mt-1",children:[(0,s.jsx)("span",{className:"text-white-400/25",children:"RIZZ"}),(0,s.jsx)(f.e,{placement:"top",content:"Coming soon...",children:(0,s.jsx)(o.Wb,{className:"text-white-400/25",icon:"ic:outline-info"})})]})]})," "]});var g=l(3333),p=l(62247);let j=()=>{let{data:e}=(0,g.iS)(),[t]=(0,g._y)(),l=(0,r.useCallback)(()=>{t().then(()=>{window.location.reload()})},[t]);return e?(0,s.jsxs)("div",{className:(0,p.cn)("flex flex-col gap-3 py-4","bg-black-0 border-t border-white-400/10"),children:[(0,s.jsx)(v,{}),(0,s.jsxs)(c.F,{className:"min-h-20",children:[(0,s.jsx)(d.S,{children:(0,s.jsx)(u.A,{fullWidth:!0,size:"lg",variant:"light",disableRipple:!0,className:"p-0 lg:px-2 min-w-0",startContent:(0,s.jsx)(m.h,{src:e.avatar,alt:e.name,size:"sm"}),endContent:(0,s.jsx)(o.JO,{icon:"tabler:dots",className:"hidden lg:block"}),children:(0,s.jsxs)("div",{className:"flex-1 lg:flex flex-col hidden h-",children:[(0,s.jsx)("p",{className:"flex-1 truncate text-sm font-semibold leading-tight text-left",children:e.name}),(0,s.jsxs)("p",{className:"text-sm text-white-400/50 truncate text-left",children:["@",e.handle]})]})})}),(0,s.jsx)(h.a,{className:"w-52",children:(0,s.jsxs)(x.W,{className:"min-h-12 max-h-12",startContent:(0,s.jsx)(o.JO,{className:"size-5",icon:"mdi:logout"}),onClick:l,children:["Log out @",e.handle]})})]})]}):null};var w=l(23512),b=l(51884),y=l(61784),N=l(85183);function k(e){let t=(0,n.useRouter)(),l=(0,n.usePathname)(),{data:s}=(0,g.iS)(),i=(0,N.TL)(),a=(0,r.useMemo)(()=>(0,b.c1)(e,null==s?void 0:s.handle),[null==s?void 0:s.handle,e]),o=(0,r.useMemo)(()=>l.startsWith(a),[l,a]);return{tabIcon:(0,r.useMemo)(()=>(0,b.br)(e,o),[o,e]),isActive:o,onClickTab:(0,r.useCallback)(()=>{let l=(0,b.W1)(e);if(!s&&!l)return i((0,y.it)());t.push(a,{scroll:!1})},[i,s,t,e,a])}}let C=e=>{let{tab:t,defaultBorder:l="border-black-0"}=e,{tabIcon:n,isActive:r,onClickTab:i}=k(t);return(0,s.jsx)("div",{className:"tab py-1 cursor-pointer",onClick:i,children:(0,s.jsxs)("div",{className:(0,p.cn)("tab-pill","h-12 lg:h-10","inline-flex w-full items-center justify-center rounded-xl select-none","lg:min-w-44 lg:justify-normal lg:px-4","border",r?"active border-blue-500 bg-blue-100":l),children:[(0,s.jsx)(o.JO,{icon:n,className:(0,p.cn)("flex size-5 lg:size-4",r?"text-blue-300":"text-white-400")}),(0,s.jsx)("h2",{className:(0,p.cn)("hidden lg:block","mx-3 text-md",r?"text-blue-300":"text-white-400/75"),children:t})]})})},P=()=>(0,s.jsx)("aside",{className:"relative hidden sm:flex w-16 min-w-16 lg:w-64 lg:min-w-64",children:(0,s.jsxs)("div",{className:"fixed inset-y-0 flex flex-col w-[64px] lg:w-64",children:[(0,s.jsxs)("div",{className:"flex flex-col flex-1 gap-6 min-h-0",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2 pr-3 lg:pr-7",children:[(0,s.jsx)(a.hd,{}),(0,s.jsx)("section",{className:"flex flex-col",children:Object.values(b.mQ).map(e=>(0,s.jsx)(C,{tab:e},e))}),(0,s.jsx)("section",{className:"mt-2 z-0",children:(0,s.jsx)(i.F,{iconSize:"size-6 lg:size-5",className:"h-12 lg:h-10 md:w-full min-w-[50px] rounded-xl"})})]}),(0,s.jsx)("section",{className:"flex-1 lg:flex hidden min-h-0 overflow-y-auto pr-3 lg:pr-7",children:(0,s.jsx)(w._,{})})]}),(0,s.jsx)("section",{className:"pr-3 lg:pr-7 z-[1]",children:(0,s.jsx)(j,{})})]})}),z=e=>{let{tab:t}=e,{tabIcon:l,isActive:n,onClickTab:r}=k(t),{data:i}=(0,g.iS)();return(0,s.jsx)("button",{className:"flex flex-1 justify-center",onClick:r,children:(0,s.jsx)("div",{className:"inline-flex h-16 items-center justify-center rounded-full",children:(0,s.jsx)(S,{tab:t,isActive:n,me:i,tabIcon:l})})})},S=e=>{let{tab:t,tabIcon:l,isActive:n,me:r}=e;return t===b.mQ.Profile?(0,s.jsx)(m.h,{size:"sm",className:"!size-7 ".concat(n?"border-1.5 border-blue-500":""),src:null==r?void 0:r.avatar}):(0,s.jsx)(o.JO,{icon:l,color:n?"rgb(147 197 253)":"white",className:"flex size-6"})},I=()=>(0,s.jsxs)("nav",{className:"fixed inset-x-0 px-3 bottom-0 z-50 h-16 border-t border-white-400/10 bg-black-400 sm:hidden xs:fixed",children:[(0,s.jsx)("div",{className:"flex w-full items-center justify-center gap-3",children:Object.values(b.mQ).map(e=>(0,s.jsx)(z,{tab:e},e))}),(0,s.jsx)("div",{className:"fixed bottom-20 right-4 sm:right-6 block sm:hidden size-12",children:(0,s.jsx)(i.F,{isIconOnly:!0,size:"lg",iconSize:"size-6",className:"mt-0"})})]}),M=()=>{let e=(0,n.usePathname)(),t=(0,r.useMemo)(()=>"/"===e,[e]),l=(0,r.useMemo)(()=>e.startsWith("/studio"),[e]);return t||l?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P,{}),(0,s.jsx)(I,{})]})}},23512:function(e,t,l){"use strict";l.d(t,{_:function(){return k}});var s=l(7590),n=l(69622),r=l(70244),i=l(82581),a=l(43833),o=l(81750),c=l(22595),d=l(50695),u=l(21990);let m=e=>{let{title:t,children:l,onScroll:n,onClose:r}=e;return(0,s.jsx)(o.R,{isOpen:!0,onOpenChange:r,children:(0,s.jsxs)(c.A,{className:"pb-4",children:[(0,s.jsx)(d.k,{className:"flex items-center gap-3 px-6",children:(0,s.jsx)("h3",{children:t})}),(0,s.jsx)(u.I,{className:"max-h-96 min-h-96 overflow-y-auto px-2 py-0",onScroll:n,children:l})]})})};var h=l(15866),x=l(3333),f=l(36572);let v=e=>{let{onClose:t}=e,[l,n]=(0,i.useState)(1),{data:r,isLoading:o,isFetching:c,isError:d}=(0,x.Ug)({start:0,limit:100*l,interval:f.u.Month}),u=(0,i.useCallback)(()=>{c||o||d||n(e=>{let t=!r||0===r.length,l=(null!=r?r:[]).length<100*e;return t||l?e:e+1})},[r,d,c,o]),v=(0,i.useCallback)(e=>{let{scrollLeft:t,clientWidth:l,scrollWidth:s}=e.currentTarget;t+l>=s-400&&u()},[u]),g=(0,i.useMemo)(()=>(null!=r?r:[]).filter(e=>e.title.length>0).filter(e=>!e.is_following&&!e.is_admin),[r]);return(0,s.jsx)(m,{title:"Explore Decks",onScroll:v,onClose:t,children:(0,s.jsxs)("div",{className:"flex flex-col size-full",children:[c||0!==g.length?g.map(e=>(0,s.jsx)(a.z,{deck:e,radius:"rounded-sm",onClickNavigate:t},e.id)):(0,s.jsx)("p",{className:"mx-4 text-tiny text-white-400/50 mt-1",children:"No more decks"}),c&&(0,s.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,s.jsx)(h.c,{})})]})})};var g=l(25689),p=l(64064);let j=e=>{let{title:t,count:l,endContent:n,onClick:r}=e;return(0,s.jsxs)("header",{className:"h-10 mt-2 min-h-10 flex items-center justify-between border-b border-white-400/10",children:[(0,s.jsxs)(g.O,{className:"flex items-center gap-3 cursor-pointer",onClick:r,children:[(0,s.jsx)("h3",{className:"text-white-400 font-base",children:t}),l>0&&(0,s.jsx)(p.z,{size:"sm",variant:"flat",children:l})]}),n]})};var w=l(15659);let b=e=>{let{title:t,icon:l,onClick:r}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-2 px-1.5 h-8 min-h-8 cursor-pointer",onClick:r,children:[(0,s.jsx)("div",{className:"flex items-center justify-center size-5",children:(0,s.jsx)(n.JO,{icon:l,className:"size-5 text-white-400/75"})}),(0,s.jsx)("span",{className:"text-white-400/75 text-sm",children:t})]})},y=e=>{let{isFetching:t,decks:l,collapsedLength:n,showAllTitle:r,newPostCounts:a,onClickShowAll:o}=e,[c,d]=(0,i.useState)(n),u=(0,i.useMemo)(()=>l.map(e=>{var t;return{...e,newPosts:null!==(t=null==a?void 0:a[e.id])&&void 0!==t?t:0}}).sort((e,t)=>t.newPosts!==e.newPosts?t.newPosts-e.newPosts:e.title.localeCompare(t.title)).slice(0,c),[l,a,c]),m=(0,i.useMemo)(()=>u.length<l.length,[l,u]),h=(0,i.useMemo)(()=>u.length<l.length&&l.length>n,[n,l.length,u.length]),x=(0,i.useMemo)(()=>u.length===l.length&&l.length>n,[n,l.length,u.length]),f=(0,i.useCallback)(()=>d(l.length),[l.length]),v=(0,i.useCallback)(()=>d(n),[n]);return(0,s.jsxs)("div",{className:"flex flex-col gap-1.5",children:[t?[1,2,3].map(e=>(0,s.jsx)(w.h,{},e)):0===u.length?(0,s.jsx)("p",{className:"text-tiny text-white-400/50 mt-1",children:"No decks"}):u.map(e=>{let{newPosts:t,...l}=e;return(0,s.jsx)(w.D,{deck:l,newPosts:t},l.id)}),m&&h&&(0,s.jsx)(b,{title:"Show more",icon:"mdi:chevron-down",onClick:f}),x&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{title:r,icon:"tabler:list",onClick:o}),(0,s.jsx)(b,{title:"Show less",icon:"mdi:chevron-up",onClick:v})]})]})};var N=l(52494);let k=e=>{var t,l;let{closeParentModal:o}=e,c=(0,x.iS)(),d=(0,x.m4)(),{isCreating:u,onClickNewDeck:h}=(0,N.W)(),[f,g]=(0,i.useState)(!1),[p,w]=(0,i.useState)(!1),[b,k]=(0,i.useState)(!1),C=(0,i.useMemo)(()=>d.currentData,[d.currentData]),P=(0,i.useMemo)(()=>{var e,t;return Object.values(null!==(t=null===(e=c.currentData)||void 0===e?void 0:e.decks)&&void 0!==t?t:{}).filter(e=>e.is_creator||e.is_admin)},[null===(t=c.currentData)||void 0===t?void 0:t.decks]),z=(0,i.useMemo)(()=>P.filter(e=>e.title.length>0).sort((e,t)=>{var l,s;return new Date(null!==(l=t.updated_at)&&void 0!==l?l:t.created_at).getTime()-new Date(null!==(s=e.updated_at)&&void 0!==s?s:e.created_at).getTime()}),[P]),S=(0,i.useMemo)(()=>{var e,t;return Object.values(null!==(t=null===(e=c.currentData)||void 0===e?void 0:e.decks)&&void 0!==t?t:{}).filter(e=>e.is_following&&!e.is_creator)},[null===(l=c.currentData)||void 0===l?void 0:l.decks]),I=(0,i.useMemo)(()=>C?S.slice().filter(e=>!e.is_admin).sort((e,t)=>{var l,s,n,r;let i=null!==(l=C[e.id])&&void 0!==l?l:0,a=null!==(s=C[t.id])&&void 0!==s?s:0;return a!==i?a-i:(null!==(n=t.follower_count)&&void 0!==n?n:0)-(null!==(r=e.follower_count)&&void 0!==r?r:0)}):S,[S,C]);return c.currentData||c.isFetching?(0,s.jsxs)("div",{className:"flex flex-col gap-1 size-full",children:[(0,s.jsx)(j,{title:"My Decks",count:P.length,endContent:(0,s.jsx)(r.A,{size:"sm",isIconOnly:!0,variant:"light",isLoading:u,onClick:()=>{h(),null==o||o()},children:(0,s.jsx)(n.JO,{icon:"mdi:plus",className:"size-6 text-white-400/75"})}),onClick:()=>{g(!0),null==o||o()}}),(0,s.jsx)(y,{isFetching:c.isLoading,decks:z,collapsedLength:3,newPostCounts:C,showAllTitle:"All decks",onClickShowAll:()=>{g(!0),null==o||o()}}),(0,s.jsx)(j,{title:"Following",count:S.length,endContent:(0,s.jsx)(r.A,{size:"sm",isIconOnly:!0,variant:"light",onClick:()=>{k(!0),null==o||o()},children:(0,s.jsx)(n.JO,{icon:"mdi:search",className:"size-5 text-white-400/75"})}),onClick:()=>{w(!0),null==o||o()}}),(0,s.jsx)(y,{isFetching:c.isLoading,decks:S,collapsedLength:10,newPostCounts:C,showAllTitle:"All following",onClickShowAll:()=>{w(!0),null==o||o()}}),f&&(0,s.jsx)(m,{title:"My Decks",onClose:()=>g(!1),children:(0,s.jsxs)("div",{className:"flex flex-col size-full",children:[0===z.length&&(0,s.jsx)("p",{className:"mx-4 text-sm text-white-400/50 mt-1",children:"No decks"}),z.map(e=>(0,s.jsx)(a.z,{deck:e,metric:"followers",radius:"rounded-sm",onClickNavigate:()=>g(!1)},"".concat(e.id,"-").concat(e.cover_photo)))]})}),p&&(0,s.jsx)(m,{title:"Following",onClose:()=>w(!1),children:(0,s.jsxs)("div",{className:"flex flex-col size-full",children:[0===I.length&&(0,s.jsx)("p",{className:"mx-4 text-sm text-white-400/50 mt-1",children:"No decks"}),I.map(e=>(0,s.jsx)(a.z,{deck:e,metric:"followers",radius:"rounded-sm",onClickNavigate:()=>w(!1)},e.id))]})}),b&&(0,s.jsx)(v,{onClose:()=>k(!1)}),(0,s.jsx)("div",{className:"w-full h-3 min-h-3"})]}):null}},51884:function(e,t,l){"use strict";var s,n;function r(e){return"Trending"===e}l.d(t,{W1:function(){return r},br:function(){return i},c1:function(){return a},mQ:function(){return s}}),(0,l(14081).Cb)("all"),(n=s||(s={})).Home="Home",n.Trending="Trending",n.Library="My Library",n.Profile="Profile";let i=(e,t)=>{switch(e){case"Home":return t?"fluent:home-24-filled":"fluent:home-24-regular";case"Trending":return t?"ph:fire-fill":"ph-fire";case"My Library":return t?"fluent:emoji-meme-24-filled":"fluent:emoji-meme-24-regular";case"Profile":return t?"fluent:person-24-filled":"fluent:person-24-regular"}},a=(e,t)=>{switch(e){case"Home":return"/home";case"Trending":return"/trending";case"My Library":return"/library";case"Profile":return"/u/".concat(t)}}},61784:function(e,t,l){"use strict";l.d(t,{HN:function(){return o},KS:function(){return g},Rs:function(){return u},TU:function(){return a},dZ:function(){return x},et:function(){return f},it:function(){return d},lf:function(){return v},rP:function(){return c},tK:function(){return i},uJ:function(){return h},yZ:function(){return m}});var s=l(4417),n=l(36572);let r={searchInterval:n.u.Week,searchSortBy:n.a.Hot,contestEntryIndex:0,isSignupModalOpen:!1,isHovering:!1},i=(0,s.oM)({name:"appSlice",initialState:r,reducers:e=>({setSearchInterval:e.reducer((e,t)=>{e.searchInterval=t.payload}),setSearchSortBy:e.reducer((e,t)=>{e.searchSortBy=t.payload}),setContestEntryIndex:e.reducer((e,t)=>{e.contestEntryIndex=t.payload}),openSignupModal:e.reducer(e=>{e.isSignupModalOpen=!0}),closeSignupModal:e.reducer(e=>{e.isSignupModalOpen=!1}),setIsHovering:e.reducer((e,t)=>{e.isHovering=t.payload})}),selectors:{selectSearchInterval:e=>e.searchInterval,selectSearchSortBy:e=>e.searchSortBy,selectContestEntryIndex:e=>e.contestEntryIndex,selectIsSignupModalOpen:e=>e.isSignupModalOpen,selectIsHovering:e=>e.isHovering}}),{setSearchInterval:a,setSearchSortBy:o,setContestEntryIndex:c,openSignupModal:d,closeSignupModal:u,setIsHovering:m}=i.actions,{selectSearchInterval:h,selectSearchSortBy:x,selectContestEntryIndex:f,selectIsSignupModalOpen:v,selectIsHovering:g}=i.selectors},85183:function(e,t,l){"use strict";l.d(t,{CG:function(){return r},TL:function(){return n}});var s=l(24580);let n=s.I0.withTypes(),r=s.v9.withTypes();s.oR.withTypes()},50739:function(e,t,l){"use strict";l.d(t,{AppHistoryProvider:function(){return o},h:function(){return c}});var s=l(7590),n=l(23143),r=l(72655),i=l(82581);let a=(0,i.createContext)({}),o=e=>{let{children:t}=e,l=(0,n.usePathname)(),o=(0,n.useRouter)(),[c,d]=(0,i.useState)([]),u=(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",t=arguments.length>1?arguments[1]:void 0,l=e;c.length>1&&(l=c[c.length-2],void 0!==t&&l.includes(t)&&(l=e)),"string"!=typeof l&&(l="/home"),o.push(l,{scroll:!1})},[c,o]);return(0,i.useEffect)(()=>{d(e=>e[e.length-1]!==l?[...e,l]:e)},[l]),(0,s.jsxs)(a.Provider,{value:{goBack:u},children:[t,(0,s.jsx)(r.wT,{dense:!0,maxSnack:3})]})},c=()=>{let e=(0,i.useContext)(a);if(void 0===e)throw Error("useFeed must be used within AppHistoryProvider");return e}},45241:function(e,t,l){"use strict";l.d(t,{EventsProvider:function(){return o}});var s=l(7590),n=l(45898),r=l(23143),i=l(82581);let a=(0,i.createContext)({}),o=e=>{let{children:t}=e,l=(0,r.useSearchParams)();return(0,i.useEffect)(()=>{l.has("source")&&(0,n.j)("source",{source:l.get("source")})},[l]),(0,s.jsx)(a.Provider,{value:{},children:t})}},51922:function(e,t,l){"use strict";l.d(t,{ImageModalProvider:function(){return d},g:function(){return u}});var s=l(7590),n=l(23143),r=l(82581),i=l(41612),a=l(86960),o=l(84187);let c=(0,r.createContext)({}),d=e=>{let{params:t,children:l}=e,{imageId:r}=(0,o.d)({params:t,key:"imageId"}),d=(0,n.useSearchParams)().get("imageId"),u=r.length>0?r:d,{openLightBox:m,closeLightBox:h}=(0,a.e)();return(0,s.jsxs)(c.Provider,{value:{onOpenImage:e=>m({imageId:e}),onCloseImage:h},children:[l,u&&(0,s.jsx)(i.e,{imageId:u,onClose:h})]})},u=()=>{let e=(0,r.useContext)(c);if(void 0===e)throw Error("useImageModal must be used within ImageModalProvider");return e}},27391:function(e,t,l){"use strict";l.d(t,{PostModalProvider:function(){return d},h:function(){return u}});var s=l(7590),n=l(23143),r=l(82581),i=l(41612),a=l(86960),o=l(84187);let c=(0,r.createContext)({}),d=e=>{let{params:t,children:l}=e,{postId:r}=(0,o.d)({params:t,key:"postId"}),d=(0,n.useSearchParams)().get("postId"),u=r.length>0?r:d,{openLightBox:m,closeLightBox:h}=(0,a.e)();return(0,s.jsxs)(c.Provider,{value:{onOpenPost:e=>m({postId:e}),onClosePost:h},children:[l,u&&(0,s.jsx)(i.e,{postId:u,onClose:h})]})},u=()=>{let e=(0,r.useContext)(c);if(void 0===e)throw Error("usePostModal must be used within PostModalProvider");return e}},85060:function(e,t,l){"use strict";l.d(t,{ReduxProvider:function(){return m}});var s=l(7590),n=l(42596),r=l(82581),i=l(24580),a=l(4417),o=l(61784),c=l(3333);let d=(0,a.Ku)(c.vK,o.tK),u=()=>(0,a.xC)({reducer:d,middleware:e=>e().concat(c.vK.middleware)}),m=e=>{let{children:t}=e,l=(0,r.useRef)(null);return l.current||(l.current=u()),(0,r.useEffect)(()=>{if(null!=l.current)return(0,n.sj)(l.current.dispatch)},[]),(0,s.jsx)(i.zt,{store:l.current,children:t})}},88542:function(e,t,l){"use strict";l.d(t,{UIProvider:function(){return r}});var s=l(7590),n=l(10785);function r(e){let{children:t}=e;return(0,s.jsx)(n.w,{className:"flex min-h-0 w-full min-w-0 flex-1",children:t})}},68908:function(e,t,l){"use strict";l.d(t,{UploadProvider:function(){return g},V:function(){return p}});var s=l(7590),n=l(23143),r=l(72655),i=l(82581),a=l(24580),o=l(70244);let c=e=>{let{text:t,textButton:l,onClick:n}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[t,l&&n&&(0,s.jsx)(o.A,{variant:"solid",color:"success",size:"sm",className:"text-white-400",onClick:n,children:l})]})};var d=l(86960),u=l(61784),m=l(3333),h=l(32701);let x=e=>{let t=new FileReader;return new Promise((l,s)=>{t.onload=e=>{var t;let n=null===(t=e.target)||void 0===t?void 0:t.result;if(!n){s(Error("Failed to read file"));return}l(new Uint8Array(n))},t.onerror=()=>s(t.error),t.readAsArrayBuffer(e)})};var f=l(89405);let v=(0,i.createContext)({}),g=e=>{let{children:t}=e,l=(0,n.useRouter)(),{openLightBox:o}=(0,d.e)(),g=(0,a.I0)(),[p]=(0,m.V4)(),[j,w]=(0,i.useState)([]),[b,y]=(0,i.useState)(),[N,k]=(0,i.useState)(!1),C=(0,i.useCallback)(async e=>{try{(0,r.sy)();let t=e.name.slice(0,20),s=(0,r.yv)("Uploading ".concat(t),{variant:"info",persist:!0});y(s);let n=await x(e),i=Array.from(new Uint8Array(n)),a=(await p({filename:(0,f.Df)(e.name),filetype:e.type,bytes:i})).data;if(!a)throw Error("Failed to upload");a.id,(0,r.sy)(b),y(void 0),l.push("/library/uploads")}catch(e){console.error(e),y(void 0),(0,r.sy)(),(0,r.yv)("Failed to upload some memes",{variant:"error"})}},[b,p,l]),P=(0,i.useCallback)(async e=>{try{let t=(0,f.Df)(e),l=t.slice(0,20),n=(0,r.yv)("Uploading ".concat(l),{variant:"info",persist:!0});y(n);let i=(await p({filename:t,filetype:"image",source_url:e})).data;if(!i)throw Error("Failed to paste link");w(e=>[i,...e]),(0,r.sy)(b),y(void 0);let a=(0,r.yv)((0,s.jsx)(c,{text:"Successfully pasted link",textButton:"View",onClick:()=>{(0,r.sy)(a),o({postId:i.id})}}),{variant:"success",autoHideDuration:3e3})}catch(e){console.error(e),(0,r.yv)("Failed to paste link",{variant:"error"})}},[b,o,p]),z=(0,i.useMemo)(()=>(0,h.k)(C,1e3),[C]),S=(0,i.useCallback)(async e=>{if(void 0===b){if(e.size>33554432){(0,r.yv)("Please upload files 32MB or less",{variant:"error"});return}return z(e)}},[z,b]),I=(0,i.useCallback)(async e=>{if(e.clipboardData){let t=e.clipboardData.items;for(let e=0;e<t.length;e++){let l=t[e];if(l.type.includes("image")){let e=l.getAsFile();e&&await S(e)}}}},[S]);(0,i.useEffect)(()=>(window.addEventListener("paste",I),()=>{window.removeEventListener("paste",I)}),[I]);let M=(0,i.useCallback)(async e=>{if(!(e.dataTransfer.items.length>0)||!e.dataTransfer.items[0].type.includes("image"))return!1;e.preventDefault(),g((0,u.yZ)(!1)),k(!0);let t=e.dataTransfer.files;try{for(let e=0;e<t.length;e++){let l=t[e];l.type.includes("image")&&await S(l)}}catch(e){console.error(e)}finally{k(!1)}},[g,S]);return(0,s.jsx)(v.Provider,{value:{uploads:j,setUploads:w,startUpload:S,pasteImageLink:P,isBatchUploading:N},children:(0,s.jsx)("div",{className:"flex min-h-0 w-full min-w-0 flex-1",onDragOver:e=>{e.preventDefault(),e.dataTransfer.items.length>0&&e.dataTransfer.items[0].type.includes("image")&&(0,u.yZ)(!0)},onDragLeave:()=>(0,u.yZ)(!1),onDrop:M,children:t})})},p=()=>{let e=(0,i.useContext)(v);if(void 0===e)throw Error("useFeed must be used within UploadProvider");return e}},1095:function(){},22566:function(e,t){"use strict";t.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo-wide.572ec4d3.svg",height:256,width:702,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[8033,2345,2138,244,116,7482,8236,9447,417,7847,2305,9101,774,4494,9738,7273,4483,4081,6244,7832,6676,7421,3051,6936,3333,3585,6939,3998,7814,1744],function(){return e(e.s=17996)}),_N_E=e.O()}]);