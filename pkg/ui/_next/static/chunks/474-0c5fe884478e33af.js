"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{29492:function(e,t,r){r.d(t,{Ud:function(){return h},hd:function(){return u},Ew:function(){return d},QB:function(){return m}});var l=r(57348),n=r(52053),a=r(45155),o=r(13881),s={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo.a86b8f2b.svg",height:256,width:256,blurWidth:0,blurHeight:0},i=r(21008),c=r(62568);let u=()=>(0,l.jsx)("div",{className:"flex h-16 select-none items-center justify-center lg:px-2 lg:text-left",children:(0,l.jsxs)(o.default,{href:"/home",children:[(0,l.jsxs)("div",{className:"hidden gap-1 items-center lg:flex",children:[(0,l.jsx)(m,{}),(0,l.jsx)(h,{})]}),(0,l.jsx)("div",{className:"lg:hidden",children:(0,l.jsx)(d,{})})]})}),d=()=>(0,l.jsx)(a.default,{src:s,alt:"".concat(c.jG," Icon"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:"h-10 min-w-10 w-full select-none"}),m=e=>{let{className:t="h-12 w-auto"}=e;return(0,l.jsx)(a.default,{priority:!0,src:i.Z,alt:"".concat(c.jG," Logo"),"aria-label":"".concat(c.jG," - ").concat(c.vk),className:t,draggable:!1})},h=()=>(0,l.jsx)(n.z,{size:"sm",color:"warning",classNames:{base:"mb-0.5 text-yellow-400 bg-yellow-50 border-1 border-yellow-400/10"},children:"Alpha"})},8485:function(e,t,r){r.d(t,{o:function(){return s}});var l=r(57348),n=r(4930),a=r(82896);let o={default:3,1100:3,700:2,500:1},s=e=>{let{memes:t,isFetching:r,hasFetched:s,hasSearched:i,noResultsMessage:c="No memes",className:u="overflow-hidden pl-3 pt-3",breakpoints:d=o,renderItem:m}=e;return(0,l.jsxs)("div",{className:u,children:[!r&&0===t.length&&(s||i)?(0,l.jsx)("div",{className:"text-white-400/75",children:c}):null,r&&0===t.length&&(0,l.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,l.jsx)(n.c,{})}),(0,l.jsx)(a.Z,{breakpointCols:d,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(m)}),r&&t.length>0&&(0,l.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,l.jsx)(n.c,{})})]})}},24605:function(e,t,r){r.d(t,{d:function(){return a}});var l=r(57348),n=r(81727);let a=e=>{let{isFetching:t,hasSearched:r,stats:a}=e;return t||!r?null:(0,l.jsxs)("span",{className:"px-3 text-white-400/50 text-tiny",children:[a.total_memes," ",(0,n._6)(a.total_memes,"meme","memes")," in"," ",a.time_ms,"ms"]})}},89765:function(e,t,r){r.d(t,{Z:function(){return n},g:function(){return b}});var l,n,a=r(57348),o=r(53350),s=r(22094),i=r(54611),c=r(4930),u=r(67425),d=r(22596),m=r(58484),h=r(16189),f=r(12465),p=r(15346),v=r(35878);(l=n||(n={})).Edit="edit",l.Delete="delete";let b=e=>{let{deckId:t,size:r="sm",variant:l="light",itemsToRender:n=["edit","delete"],isLoading:b,onDelete:w}=e,x=(0,h.useRouter)(),[g,C]=(0,p.useState)(!1),y=(0,p.useCallback)(()=>{x.push("/deck/".concat(t,"/edit"))},[x,t]),j=(0,p.useCallback)(async e=>{e.stopPropagation(),e.preventDefault();try{C(!0),await v.P.deleteDeck(t),w()}catch(e){console.error("Failed to delete deck",e),(0,f.yv)("Failed to delete deck",{variant:"error"}),C(!1)}},[t,w]),k=(0,p.useMemo)(()=>[{key:"edit",label:"Edit",color:"default",startContent:(0,a.jsx)(o.JO,{className:"size-5",icon:"mdi:edit"}),onClick:y},{key:"delete",label:"Delete",color:"danger",startContent:(0,a.jsx)(o.JO,{className:"size-5",icon:"tabler:trash"}),onClick:j}],[y,j]);return(0,a.jsxs)(s.F,{classNames:{content:"min-w-0 w-auto"},children:[(0,a.jsx)(i.S,{children:g||b?(0,a.jsx)("div",{className:"flex items-center justify-center size-8",children:(0,a.jsx)(c.c,{size:"sm"})}):(0,a.jsx)(u.A,{isIconOnly:!0,size:r,variant:l,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,a.jsx)(o.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,a.jsx)(d.a,{children:k.filter(e=>n.includes(e.key)).map(e=>(0,a.jsx)(m.W,{color:e.color,startContent:e.startContent,onClick:e.onClick,children:e.label},e.key))})]})}},95967:function(e,t,r){r.r(t),r.d(t,{SearchBar:function(){return u}});var l=r(57348),n=r(16189),a=r(15346),o=r(29492),s=r(23136),i=r(16818),c=r(76808);let u=e=>{let{value:t,autofocus:r,initialSearch:u,className:d="px-3",responsiveness:m="",border:h="border-b border-white-400/15",placeholder:f,hideLogo:p=!1,onSearch:v,searchInterval:b,onSelectInterval:w}=e,x=(0,n.useRouter)(),{initialQuery:g}=(0,c.x)(),C=(0,a.useMemo)(()=>t.length>0,[t.length]),y=(0,a.useCallback)(()=>{v||x.push("/trending")},[v,x]);return(0,l.jsxs)("div",{className:"sticky top-0 z-10 flex gap-3 h-16 w-full items-center justify-between bg-black-0 ".concat(d," ").concat(m," ").concat(h),onClick:y,children:[!p&&(0,l.jsx)("div",{className:"sm:hidden size-10 max-w-10",children:(0,l.jsx)(o.Ew,{})}),(0,l.jsx)(s.T,{value:t,autofocus:r,initialSearch:g,placeholder:f,onSearch:v}),C&&b&&w&&(0,l.jsx)(i.m,{interval:b,onSelect:w})]})}},23136:function(e,t,r){r.d(t,{T:function(){return i}});var l=r(57348),n=r(46766),a=r(45155),o=r(15346),s=r(82739);let i=e=>{let{value:t,autofocus:r,initialSearch:i,placeholder:c="Search for memes. (i.e. pepe)",onFocus:u,onSearch:d}=e,m=(0,o.useRef)(null);return(0,l.jsx)(n.Y,{isClearable:!0,onClear:()=>{null==d||d("")},radius:"full",classNames:{base:"flex-1",input:"text-base placeholder:text-base placeholder:text-white-400/50"},startContent:(0,l.jsx)(a.default,{priority:!0,src:s.Z,alt:"Dropdown",onClick:e=>{var t;e.preventDefault(),null===(t=m.current)||void 0===t||t.focus()},className:"mr-1 size-5 cursor-text select-none opacity-75"}),ref:m,autoFocus:r,defaultValue:i,placeholder:c,className:"h-10 min-w-24 flex-1 rounded-full border border-white-400/5 bg-white-400/5 shadow-sm outline-none placeholder:text-xl placeholder:text-white-400/50",value:t,onFocus:u,onChange:e=>null==d?void 0:d(e.target.value)})}},6076:function(e,t,r){r.d(t,{P:function(){return v}});var l=r(57348),n=r(92378),a=r(950),o=r(45155),s=r(15346),i=r(96622),c=r(71402),u=r(35878),d=r(69467),m=r(62568),h=r(81727),f=r(2406),p=r(18491);let v=e=>{var t,r,v,b,w,x,g;let{meme:C,priorityLoadImage:y,onClick:j}=e,{profile:k}=(0,c.useProfile)(),[N,O]=(0,s.useState)((0,d.kl)(C)),P="".concat(C.creator_name," (@").concat(C.creator_handle,")"),_=null!==(b=null!==(v=null!==(r=C.template)&&void 0!==r?r:C.title)&&void 0!==v?v:C.caption)&&void 0!==b?b:C.ai_description,S=C.search_text?C.search_text:null===(t=C.tags)||void 0===t?void 0:t.map(e=>e.name).join(", "),D="".concat(_||"AI Generated Meme"," on Memedeck by ").concat(P," – ").concat(Number(null==S?void 0:S.length)>0?S:m.vk),{onOpenMeme:I}=(0,i.useMemeModal)();return(0,l.jsx)("article",{className:"relative w-full cursor-pointer",onClick:()=>{if(j){j();return}I(C.id)},children:(0,l.jsxs)(n.w,{isFooterBlurred:!0,className:"group overflow-hidden rounded-md",children:[(0,l.jsx)(o.default,{className:"z-0 size-full rounded-md bg-white-400/5 sm:transition-transform sm:group-hover:scale-104",src:C.url,quality:50,priority:y,alt:D,width:null!==(w=C.width)&&void 0!==w?w:200,height:null!==(x=C.height)&&void 0!==x?x:200}),(0,l.jsx)(a.i,{className:"justify-between bg-black-400/30 border-1 border-zinc-600/40 overflow-hidden py-2 absolute before:rounded-lg rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-1 opacity-0 sm:transition-opacity sm:group-hover:opacity-100",children:(0,l.jsxs)("div",{className:"flex flex-1 items-center gap-2 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate text-sm font-semibold",children:[(0,l.jsx)(o.default,{src:C.creator_avatar,alt:P,className:"rounded-full min-w-8",width:32,height:32,quality:50}),(0,l.jsxs)("div",{className:"flex flex-col flex-1 truncate",children:[(0,l.jsx)("span",{className:"truncate",children:C.creator_handle}),C.published_at&&(0,l.jsx)("span",{className:"text-tiny font-normal text-white-400/70",children:(0,h.Po)(C.published_at)})]})]}),(0,l.jsx)(f.I,{itemId:C.id,userId:null!==(g=null==k?void 0:k.user.id)&&void 0!==g?g:"",addVoteApi:u.P.createMemeReaction,removeVoteApi:u.P.deleteMemeReaction,onClick:j,initialVotes:C.votes,border:"border-zinc-400/50"})]})}),N&&(0,l.jsx)(p.T,{src:C.url,onClickShow:()=>O(!1)})]})})}},16818:function(e,t,r){r.d(t,{m:function(){return s}});var l=r(57348),n=r(1718),a=r(88036),o=r(41973);let s=e=>{let{interval:t,onSelect:r}=e;return(0,l.jsx)(n.g,{size:"md","aria-label":"Interval",radius:"full",variant:"bordered",color:"primary",placeholder:"Sort by",classNames:{base:"w-auto",trigger:"w-28",popoverContent:"w-28"},value:t,selectedKeys:[t],onChange:e=>{r(e.target.value)},children:Object.values(o.u).map(e=>(0,l.jsx)(a.R,{children:e.charAt(0).toUpperCase()+e.slice(1)},e))})}},5265:function(e,t,r){r.d(t,{M:function(){return o}});var l=r(15346),n=r(74859),a=r(76808);let o=e=>{let{feed:t,setFeed:r,hasFetched:o,setHasFetched:s,searchQuery:i,setSearchQuery:c,storeUrlParams:u=!0,fetchFn:d,deckId:m,fetchOnLoad:h=!0,pageSize:f=50,ignoreWindowScroll:p=!1,onFetchOnLoad:v}=e,{initialQuery:b,initialInterval:w,initialSortBy:x}=(0,a.x)(),[g,C]=(0,l.useState)(0),[y,j]=(0,l.useState)(!0),[k,N]=(0,l.useState)(!1),[O,P]=(0,l.useState)(w),[_,S]=(0,l.useState)(x),D=(0,l.useCallback)(async(e,t)=>{let l=await d(e,t);return r(t=>l.length>0&&Number(e.start)>0?[...t,...l]:l),N(!1),s(!0),j(l.length===f),l},[d,f,r,s]),I=(0,l.useMemo)(()=>(0,n.k)(D,1e3),[D]),M=(0,l.useCallback)(async(e,t,r)=>{var l,n,a,o,c;N(!0),s(!1);let u={search:null!==(l=e.search)&&void 0!==l?l:i,start:null!==(n=e.start)&&void 0!==n?n:g,limit:null!==(a=e.limit)&&void 0!==a?a:f,interval:null!==(o=e.interval)&&void 0!==o?o:O,sort_by:null!==(c=e.sort_by)&&void 0!==c?c:_,...m?{deck_id:m}:{}};return r?D(u,t):I(u,t)},[I,m,D,f,O,i,_,s,g]),z=(0,l.useCallback)(e=>{if(!o||!y||k)return;let t=null!=e?e:g+f;C(t),M({start:t})},[o,y,k,g,f,M]),E=(0,l.useCallback)(async()=>{let e=window.innerHeight;document.body.offsetHeight-window.scrollY<3*e&&z()},[z]),A=(0,l.useCallback)((e,t,r)=>{let l=new URL(window.location.href);e.length>0?l.searchParams.set("query",e):l.searchParams.delete("query"),t?l.searchParams.set("interval",t):l.searchParams.delete("interval"),r?l.searchParams.set("sort_by",r):l.searchParams.delete("sort_by"),window.history.pushState({},"",l.toString())},[]),F=(0,l.useCallback)(async(e,t,r)=>{null==c||c(e),u&&A(e,t,r),C(0),j(!0),M({search:e,start:0,limit:f,interval:t,sort_by:r})},[M,f,c,u,A]),R=(0,l.useCallback)(e=>{r([]),P(e),F(null!=i?i:"",e,_)},[F,i,_,r]),q=(0,l.useCallback)(e=>{r([]),S(e),F("",O,e)},[F,O,r]);return(0,l.useEffect)(()=>{if(!p)return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[E,p]),(0,l.useEffect)(()=>{let e=new AbortController;if(!o&&!(t.length>0)&&h&&!k)return M({search:b,start:0,limit:f,interval:w,sort_by:x},e.signal,!0).then(v),()=>{!e.signal.aborted&&k&&e.abort()}},[t.length,M,h,o,b,w,k,v,f,x]),(0,l.useEffect)(()=>(b&&(null==c||c(b)),w&&P(w),x&&S(x),()=>{r([]),null==c||c(""),s(!1)}),[w,b,x,r,s,P,c,S]),{feed:t,setFeed:r,setHasMore:j,onSearch:F,searchInterval:O,onSelectInterval:R,searchSortBy:_,onSelectSortBy:q,isFetching:k,hasMore:y,setIsFetching:N,setHasFetched:s,onReachedEnd:z}}},76808:function(e,t,r){r.d(t,{x:function(){return a}});var l=r(16189),n=r(41973);let a=()=>{var e,t,r;let a=(0,l.useSearchParams)();return{initialQuery:null!==(e=a.get("query"))&&void 0!==e?e:"",initialInterval:null!==(t=a.get("interval"))&&void 0!==t?t:n.u.Week,initialSortBy:null!==(r=a.get("sort_by"))&&void 0!==r?r:n.a.Hot}}},82896:function(e,t,r){var l=r(15346);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var l;l=r[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class s extends l.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,l=t.default||2;for(let n in t){let a=parseInt(n);a>0&&e<=a&&a<r&&(r=a,l=t[n])}l=Math.max(1,parseInt(l)||1),this.state.columnCount!==l&&this.setState({columnCount:l})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=l.Children.toArray(this.props.children);for(let l=0;l<r.length;l++){let n=l%e;t[n]||(t[n]=[]),t[n].push(r[l])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,a=this.itemsInColumns(),s="".concat(100/a.length,"%"),i=r;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));let c=o(o(o({},e),t),{},{style:o(o({},t.style),{},{width:s}),className:i});return a.map((e,t)=>l.createElement("div",n({},c,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:a,columnAttrs:o,column:s,className:i}=e,c=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),u=i;return"string"!=typeof i&&(this.logDeprecated('The property "className" requires a string'),void 0===i&&(u="my-masonry-grid")),l.createElement("div",n({},c,{className:u}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}s.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},t.Z=s},96622:function(e,t,r){r.r(t),r.d(t,{MemeModalProvider:function(){return u},useMemeModal:function(){return d}});var l=r(57348),n=r(16189),a=r(15346),o=r(13214),s=r(77623),i=r(93276);let c=(0,a.createContext)({}),u=e=>{var t;let{children:r}=e,a=(0,n.useRouter)(),u=(0,n.usePathname)(),d=(0,n.useSearchParams)(),m=decodeURIComponent(null!==(t=d.get("memeId"))&&void 0!==t?t:""),h=new URLSearchParams(d.toString()),{openMemeModal:f}=(0,s.T)(),p=()=>{h.delete("memeId");let e=(0,i.wS)(u,h);a.push(e,{scroll:!1})};return(0,l.jsxs)(c.Provider,{value:{onOpenMeme:f,onCloseMeme:p},children:[r,m&&(0,l.jsx)(o.k,{memeId:m,onClose:p})]})},d=()=>{let e=(0,a.useContext)(c);if(void 0===e)throw Error("useFeed must be used within MemeModalProvider");return e}},82739:function(e,t){t.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/search.3dc28276.svg",height:18,width:18,blurWidth:0,blurHeight:0}},21008:function(e,t){t.Z={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/logo-wide.572ec4d3.svg",height:256,width:702,blurWidth:0,blurHeight:0}},950:function(e,t,r){r.d(t,{i:function(){return c}});var l=r(93720),n=r(97308),a=r(59485),o=r(89707),s=r(57348),i=(0,n.Gp)((e,t)=>{var r;let{as:n,className:i,children:c,...u}=e,d=(0,a.gy)(t),{slots:m,classNames:h}=(0,l.R)(),f=(0,o.W)(null==h?void 0:h.footer,i);return(0,s.jsx)(n||"div",{ref:d,className:null==(r=m.footer)?void 0:r.call(m,{class:f}),...u,children:c})});i.displayName="NextUI.CardFooter";var c=i}}]);