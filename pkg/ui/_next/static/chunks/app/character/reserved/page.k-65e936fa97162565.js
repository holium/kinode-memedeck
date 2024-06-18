(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7890],{68484:function(e,s,a){Promise.resolve().then(a.bind(a,79626))},79626:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return O}});var t=a(91104),l=a(51163),r=a(63137),n=a(33968),c=a(4180),i=a(83301),d=a(42891);let o=e=>{let{characterId:s,interval:a}=e,[l,o]=(0,r.useState)(null),[u,x]=(0,r.useState)(!0),h=(0,r.useCallback)(async(e,s)=>{o(await n.P.getCharacter(e,{interval:s}))},[]);return((0,r.useEffect)(()=>{x(!0),h(s,a).then(()=>{x(!1)})},[s,h,a]),u&&!l)?(0,t.jsxs)("div",{className:"flex flex-col gap-4 pt-1 pb-3 px-5",children:[(0,t.jsx)("div",{className:"animate-pulse rounded-xl size-28 md:size-40 bg-gray-200 shadow-lg"}),(0,t.jsxs)("header",{className:"w-full flex flex-col gap-3",children:[(0,t.jsx)("div",{className:"animate-pulse rounded bg-gray-200 h-9 md:h-10 w-40"}),(0,t.jsx)("div",{className:"animate-pulse rounded bg-gray-200 h-8 md:h-5 w-full md:w-1/2"}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)("div",{className:"animate-pulse rounded bg-gray-200 h-6 w-28"}),(0,t.jsx)("div",{className:"animate-pulse rounded bg-gray-200 h-6 w-28"}),(0,t.jsx)("div",{className:"animate-pulse rounded bg-gray-200 h-6 w-28"})]})]})]}):l?(0,t.jsxs)("div",{className:"flex flex-col gap-4 pt-1 pb-3 px-5",children:[(0,t.jsx)(i.default,{width:200,height:200,alt:l.name,src:l.thumbnail,className:"rounded-xl size-28 md:size-40 bg-black-400/10 object-cover object-center shadow-lg select-none border-1 border-white-400/10"}),(0,t.jsx)("header",{className:"w-full flex flex-col",children:(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-3",children:[(0,t.jsxs)("div",{className:"w-full flex gap-3 justify-between items-center",children:[(0,t.jsxs)("h1",{className:"text-3xl md:text-4xl flex gap-3",children:[(0,t.jsx)("span",{className:"text-white-400 font-bold truncate",children:l.name}),(0,t.jsxs)("span",{className:"text-white-400/70 font-bold",children:["#",l.rank]})]}),(0,t.jsx)(d.F,{title:"Generate ".concat(l.name),variant:"ghost",color:"default",size:"md",queryParam:"?character=".concat(s),innerClassName:"lg:px-2.5",className:"w-auto max-w-[260px] rounded-xl"})]}),l.description&&(0,t.jsx)("p",{className:"text-tiny md:text-sm text-white-400/60",children:l.description}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)("p",{className:"flex gap-1.5 text-base",children:[(0,t.jsx)("span",{className:"font-bold",children:l.total_generations}),(0,t.jsx)("span",{className:"text-white-400/60",children:(0,c._6)(l.total_generations,"generation","generations")})]}),(0,t.jsxs)("p",{className:"flex gap-1.5 text-base",children:[(0,t.jsx)("span",{className:"font-bold",children:l.total_posted}),(0,t.jsx)("span",{className:"text-white-400/60",children:(0,c._6)(l.total_posted,"post","posts")})]}),(0,t.jsxs)("p",{className:"flex gap-1.5 text-base",children:[(0,t.jsx)("span",{className:"font-bold",children:l.creator_count}),(0,t.jsx)("span",{className:"text-white-400/60",children:(0,c._6)(l.creator_count,"creator","creators")})]})]})]})})]}):null};var u=a(26816),x=a(64737),h=a(87221),m=a(61698),p=a(9051),f=a(29398),j=a(21204),g=a(35650),b=a(41116),N=a(71035),w=a(41340),v=a(49566);let y={[j.a.Hot]:"ph:fire",[j.a.Recent]:"ph:clock"},k=e=>{let{icon:s,label:a}=e;return(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[s&&(0,t.jsx)(v.JO,{icon:s,className:"min-w-5 size-5"}),a&&a.charAt(0).toUpperCase()+a.slice(1)]})},_=e=>{let{size:s="sm",sortBy:a,onSelect:l}=e;return(0,t.jsx)(N.g,{"aria-label":"Sort by",size:s,radius:"full",variant:"bordered",color:"primary",placeholder:"Sort by",className:"w-20",classNames:{trigger:"w-20 pl-3 gap-1",popoverContent:"w-36"},value:a,selectedKeys:[a],renderValue:()=>(0,t.jsx)(k,{"aria-label":a,icon:y[a]}),onChange:e=>{l(e.target.value)},children:Object.values(j.a).map(e=>(0,t.jsx)(w.R,{"aria-label":e,children:(0,t.jsx)(k,{label:e,icon:y[e]})},e))})};var C=a(60402),S=a(59442);async function z(e,s){return(await n.P.search(e,s)).memes}let F=e=>{let{characterId:s}=e,a=(0,u.useRouter)(),{profile:l,searchInterval:n,setSearchInterval:c,isSignupModalOpen:i,setIsSignupModalOpen:d}=(0,b.useProfile)(),[N,w]=(0,r.useState)(j.a.Recent);console.log("profile",l);let{characterQuery:v,setCharacterQuery:y,characterResults:k,setCharacterResults:F,hasFetchedCharacterResults:O,setHasFetchedCharacterResults:P}=(0,C.useFeed)(),{isFetching:R,onSearch:E,setHasFetched:B,setIsFetching:G}=(0,x.M)({feed:k,setFeed:F,hasFetched:O,setHasFetched:P,searchQuery:v,setSearchQuery:y,fetchOnLoad:!0,characterId:s,interval:n,fetchFn:z});return(0,r.useEffect)(()=>()=>{B(!1),F([]),G(!0),P(!1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.y,{title:"Character",onGoBack:()=>a.push("/explore")}),(0,t.jsx)(o,{characterId:s,interval:n}),(0,t.jsxs)("div",{className:"flex px-3 items-center justify-between border-b border-white-400/15 gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(g.m,{size:"md",interval:n,onSelect:e=>{F([]),c(e),E("",e)}}),(0,t.jsx)(_,{size:"md",sortBy:N,onSelect:e=>{F([]),w(e),E("",n,e)}})]}),(0,t.jsx)(h.SearchBar,{hideLogo:!0,className:"px-0",border:"",placeholder:"Search by keyword",value:v,onSearch:E})]}),(0,t.jsx)(m.o,{memes:k,isFetching:R,hasFetched:O,hasSearched:v.length>0,renderItem:(e,s)=>(0,t.jsx)(p.P,{meme:e,onClick:l?void 0:()=>d(!0)},s)}),i&&(0,t.jsx)(S.c,{isOpen:i,onClose:()=>d(!1)})]})};function O(e){let{params:s}=e,{id:a}=(0,l.u)({params:s,key:"id"});return(0,t.jsx)(F,{characterId:a})}},42891:function(e,s,a){"use strict";a.d(s,{F:function(){return d}});var t=a(91104),l=a(26816),r=a(83301),n=a(57826),c=a(41116),i=a(61281);let d=e=>{let{title:s="Generate",variant:a="shadow",color:d="primary",size:o="lg",queryParam:u="",className:x="mt-3 md:w-full min-w-[50px] rounded-full",innerClassName:h="lg:px-4"}=e,m=(0,l.useRouter)(),{profile:p,setIsSignupModalOpen:f}=(0,c.useProfile)();return(0,t.jsx)(n.A,{type:"button",variant:a,color:d,className:x,size:o,radius:"full",disableRipple:!0,isIconOnly:!0,onClick:()=>{if(!p){f(!0);return}m.push("/studio".concat(u))},children:(0,t.jsxs)("div",{className:"flex gap-2 items-center justify-center w-full ".concat(h),children:[(0,t.jsx)(r.default,{src:i.Z,alt:"Generate",className:"size-6"}),(0,t.jsx)("h1",{className:"hidden lg:block text-base truncate",children:s})]})})}},29398:function(e,s,a){"use strict";a.d(s,{y:function(){return c}});var t=a(91104),l={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/arrow.left.37648ed6.svg",height:46,width:57,blurWidth:0,blurHeight:0},r=a(23640),n=a(48751);let c=e=>{let{title:s,border:a="border-b border-transparent",isLoading:c=!1,endContent:i,onGoBack:d}=e,{goBack:o}=(0,n.useAppHistory)();return(0,t.jsxs)("div",{className:"flex h-16 w-full items-center ".concat(a),children:[(0,t.jsx)(r.O,{src:l,alt:"Back",onClick:null!=d?d:o}),c?(0,t.jsx)("h1",{className:"h-6 w-24 animate-pulse rounded bg-gray-200"}):(0,t.jsx)("h1",{className:"flex-1 text-left text-lg font-bold truncate",children:s}),i]})}},51163:function(e,s,a){"use strict";a.d(s,{u:function(){return l}});var t=a(26816);let l=e=>{var s;let{key:a,index:l,params:r}=e,n=(0,t.usePathname)(),c=null!==(s=n&&n.split("/")[l||2])&&void 0!==s?s:"",i=r[a]||c;return{[a]:i}}}},function(e){e.O(0,[3107,6557,2376,7826,9749,5981,27,330,9566,6593,1397,9697,1035,3968,8933,3634,6443,9514,5171,1744],function(){return e(e.s=68484)}),_N_E=e.O()}]);