"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1332],{95320:function(e,t,r){r.d(t,{hd:function(){return c},Ew:function(){return u},QB:function(){return d}});var l=r(59547),n=r(79886),a=r(15361),s={src:"/memedeck:memedeck:holium.os/_next/static/media/logo.a86b8f2b.svg",height:256,width:256,blurWidth:0,blurHeight:0},o=r(7692),i=r(1489);let c=()=>(0,l.jsx)("div",{className:"flex h-16 select-none items-center justify-center lg:px-2 lg:text-left",children:(0,l.jsxs)(n.default,{href:"/home",children:[(0,l.jsx)("div",{className:"hidden lg:block lg:w-[170px]",children:(0,l.jsx)(d,{})}),(0,l.jsx)("div",{className:"lg:hidden",children:(0,l.jsx)(u,{})})]})}),u=()=>(0,l.jsx)(a.default,{src:s,alt:"".concat(i.jG," Icon"),className:"h-10 w-full select-none"}),d=e=>{let{className:t="h-12"}=e;return(0,l.jsx)(a.default,{priority:!0,src:o.Z,alt:"".concat(i.jG," Logo"),className:t,draggable:!1})}},92382:function(e,t,r){r.d(t,{o:function(){return d}});var l=r(59547),n=r(24449),a=r(30912);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var l;l=r[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class c extends a.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,l=t.default||2;for(let n in t){let a=parseInt(n);a>0&&e<=a&&a<r&&(r=a,l=t[n])}l=Math.max(1,parseInt(l)||1),this.state.columnCount!==l&&this.setState({columnCount:l})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=a.Children.toArray(this.props.children);for(let l=0;l<r.length;l++){let n=l%e;t[n]||(t[n]=[]),t[n].push(r[l])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,l=this.itemsInColumns(),n="".concat(100/l.length,"%"),o=r;o&&"string"!=typeof o&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===o&&(o="my-masonry-grid_column"));let c=i(i(i({},e),t),{},{style:i(i({},t.style),{},{width:n}),className:o});return l.map((e,t)=>a.createElement("div",s({},c,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:l,columnAttrs:n,column:o,className:i}=e,c=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),u=i;return"string"!=typeof i&&(this.logDeprecated('The property "className" requires a string'),void 0===i&&(u="my-masonry-grid")),a.createElement("div",s({},c,{className:u}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}c.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};let u={default:3,1100:3,700:2,500:1},d=e=>{let{memes:t,isFetching:r,hasFetched:a,hasSearched:s,renderItem:o}=e;return(0,l.jsxs)("div",{className:"overflow-hidden pl-3 pt-3",children:[!r&&0===t.length&&(a||s)?(0,l.jsx)("div",{className:"text-white-400/75",children:"No memes"}):null,r&&0===t.length&&(0,l.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,l.jsx)(n.c,{})}),(0,l.jsx)(c,{breakpointCols:u,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(o)}),r&&t.length>0&&(0,l.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,l.jsx)(n.c,{})})]})}},72251:function(e,t,r){r.r(t),r.d(t,{SearchBar:function(){return o}});var l=r(59547),n=r(74600),a=r(95320),s=r(65883);let o=e=>{let{value:t,autofocus:r,initialSearch:o,responsiveness:i="",border:c="border-b border-white-400/15",placeholder:u="Search for memes. (i.e. bell curve)",onSearch:d}=e,h=(0,n.useRouter)();return(0,l.jsxs)("div",{className:"sticky top-0 z-10 flex gap-3 h-16 w-full items-center bg-black-0 px-3 ".concat(i," ").concat(c),onClick:()=>{d||h.push("/explore")},children:[(0,l.jsx)("div",{className:"sm:hidden size-10 max-w-10",children:(0,l.jsx)(a.Ew,{})}),(0,l.jsx)(s.T,{value:t,autofocus:r,initialSearch:o,placeholder:u,onSearch:d})]})}},65883:function(e,t,r){r.d(t,{T:function(){return i}});var l=r(59547),n=r(30912),a=r(15361),s=r(99854),o=r(61505);let i=e=>{let{value:t,autofocus:r,initialSearch:i,placeholder:c="Search for memes. (i.e. bell curve)",onFocus:u,onSearch:d}=e,h=(0,n.useRef)(null);return(0,l.jsx)(s.Y,{isClearable:!0,onClear:()=>{null==d||d("")},radius:"full",classNames:{input:"text-base placeholder:text-base placeholder:text-white-400/50"},startContent:(0,l.jsx)(a.default,{priority:!0,src:o.Z,alt:"Dropdown",onClick:e=>{var t;e.preventDefault(),null===(t=h.current)||void 0===t||t.focus()},className:"mr-1 size-5 cursor-text select-none opacity-75"}),ref:h,autoFocus:r,defaultValue:i,placeholder:c,className:"h-10 min-w-24 flex-1 rounded-full border border-white-400/5 bg-white-400/5 shadow-sm outline-none placeholder:text-xl placeholder:text-white-400/50",value:t,onFocus:u,onChange:e=>null==d?void 0:d(e.target.value)})}},23780:function(e,t,r){r.d(t,{Y:function(){return o}});var l=r(59547),n=r(15361),a=r(78457),s=r(74078);let o=e=>{var t,r,o,i;let{meme:c,showCreator:u=!1}=e,{onOpenMeme:d}=(0,a.useMemeModal)();return(0,l.jsx)("article",{className:"relative w-full cursor-pointer",onClick:()=>d(c.id),children:(0,l.jsxs)("div",{className:"group flex w-full flex-col gap-2 overflow-hidden rounded-lg",children:[c.text_overlay?(0,l.jsx)(s.g,{src:c.url,alt:c.id,width:c.width,height:c.height,topText:null!==(o=null===(t=c.text_overlay)||void 0===t?void 0:t.top_text)&&void 0!==o?o:null,bottomText:null!==(i=null===(r=c.text_overlay)||void 0===r?void 0:r.bottom_text)&&void 0!==i?i:null,className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105"}):(0,l.jsx)(n.default,{className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105",src:c.url,alt:c.id,width:c.width,height:c.height}),u&&(0,l.jsx)("div",{className:"absolute inset-0 z-0 flex select-none items-end px-1.5 py-1 opacity-0 transition-opacity hover:opacity-100",children:(0,l.jsx)("div",{className:"flex flex-1 items-center gap-2",children:(0,l.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate p-1 text-sm font-semibold drop-shadow-[0.5px_0.5px_1px_rgba(0,0,0,80)]",children:[(0,l.jsx)(n.default,{src:c.creator_avatar||"",alt:c.creator_handle||"",className:"rounded-full hover:scale-105",width:24,height:24}),c.creator_handle]})})})]})})}},690:function(e,t,r){r.d(t,{g:function(){return p}});var l=r(59547),n=r(79886),a=r(74600),s=r(49955),o=r(6566),i=r(82972),c=r(34614),u=r(40538),d=r(93078),h=r(39992),m=r(47177),f=r(30912);let p=()=>{let e=(0,a.useSearchParams)(),t=(0,a.usePathname)(),r=new URLSearchParams(e.toString()),[p,b]=(0,f.useState)(!1),{startUpload:v}=(0,m.useUpload)(),w=async e=>{if(e&&0!==e.length&&!p){b(!0);for(let t=0;t<e.length;t++){let r=e[t];await v(r)}b(!1)}};return(0,l.jsxs)("div",{className:"w-full flex px-3 border-b border-divider",children:[(0,l.jsx)(s.n,{color:"primary",variant:"underlined","aria-label":"Library tabs",radius:"full",selectedKey:t,classNames:{base:"flex-1",tabList:"gap-4 w-full relative rounded-none p-0",cursor:"w-full bg-blue-500",tab:"max-w-fit px-0 !h-12 select-none outline-none",tabContent:"group-data-[selected=true]:text-blue-500 text-white-400/75 px-1 font-semibold text-base md:text-base lg:text-base tracking-wide mb-1"},children:Object.values(c.$9).map(e=>{let t=(0,c.Zt)(e),a=(0,u.wS)(t,r);return(0,l.jsx)(o.r,{className:"!focus-visible:outline-none",title:(0,l.jsx)("h2",{children:e}),as:n.default,href:a},t)})}),(0,l.jsxs)(i.A,{size:"md",variant:"solid",color:"primary",disableRipple:!0,isLoading:p,startContent:!p&&(0,l.jsx)(d.JO,{icon:"material-symbols:upload",width:18}),children:["Upload",(0,l.jsx)("input",{type:"file",multiple:!0,accept:h.RL,className:"absolute inset-0 size-full cursor-pointer opacity-0",onChange:e=>w(e.target.files)})]})]})}},34614:function(e,t,r){r.d(t,{$9:function(){return n},DH:function(){return s},Zt:function(){return o}});var l,n,a=r(1463);(l=n||(n={})).All="All",l.Uploads="Uploads",l.Saved="Saved";let s=e=>{switch(e){case"Uploads":return a.P.getUploads;case"Saved":return a.P.getSavedMemes;default:return a.P.getLibrary}},o=e=>{switch(e){case"Saved":return"/library/saved";case"Uploads":return"/library/uploads";default:return"/library"}}},46113:function(e,t,r){r.d(t,{M:function(){return a}});var l=r(30912),n=r(58741);let a=e=>{let{feed:t,setFeed:r,hasFetched:a,setHasFetched:s,searchQuery:o,setSearchQuery:i,fetchFn:c,initialQuery:u,fetchOnLoad:d=!0,pageSize:h=50}=e,[m,f]=(0,l.useState)(0),[p,b]=(0,l.useState)(!0),[v,w]=(0,l.useState)(!1),g=(0,l.useCallback)(async(e,t)=>{let l=await c(e,t);r(t=>l.length>0&&Number(e.start)>0?[...t,...l]:l),w(!1),s(!0),b(l.length===h)},[c,h,r,s]),x=(0,l.useMemo)(()=>(0,n.k)(g,1e3),[g]),y=(0,l.useCallback)(async(e,t)=>{var r,l,n;w(!0),s(!1),x({search:null!==(r=e.search)&&void 0!==r?r:o,start:null!==(l=e.start)&&void 0!==l?l:m,limit:null!==(n=e.limit)&&void 0!==n?n:h},t)},[x,h,o,s,m]),C=(0,l.useCallback)(async()=>{if(!a||!p||v)return;let e=window.innerHeight;if(document.body.offsetHeight-window.scrollY<3*e){let e=m+h;f(e),y({start:e})}},[y,a,p,v,h,m]),j=(0,l.useCallback)(e=>{let t=new URL(window.location.href);e.length>0?t.searchParams.set("query",e):t.searchParams.delete("query"),window.history.pushState({},"",t.toString())},[]),N=(0,l.useCallback)(async e=>{null==i||i(e),i&&j(e),f(0),b(!0),y({search:e,start:0,limit:h})},[y,h,i,j]);return(0,l.useEffect)(()=>(window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)),[C]),(0,l.useEffect)(()=>{let e=new AbortController;if(!a&&!(t.length>0)&&d&&!v)return y({search:u,start:0,limit:h},e.signal),()=>{!e.signal.aborted&&v&&e.abort()}},[t.length,y,d,a,u,v,h]),{feed:t,setFeed:r,setHasMore:b,onSearch:N,isFetching:v,setIsFetching:w,setHasFetched:s}}},77551:function(e,t,r){r.d(t,{y:function(){return i}});var l=r(34614),n=r(46113),a=r(74491),s=r(74600),o=r(30912);let i=e=>{var t;let{activeTab:r}=e,i=null!==(t=(0,s.useSearchParams)().get("query"))&&void 0!==t?t:void 0,{librarySearchQuery:c,setLibrarySearchQuery:u,library:d,setLibrary:h,hasFetchedLibrary:m,setHasFetchedLibrary:f,uploads:p,hasFetchedUploads:b,setHasFetchedUploads:v,setUploads:w,saved:g,setSaved:x,hasFetchedSaved:y,setHasFetchedSaved:C}=(0,a.useFeed)(),{feed:j,setFeed:N,hasFetched:k,setHasFetched:O}=(0,o.useMemo)(()=>{switch(r){case l.$9.Uploads:return{feed:p,setFeed:w,hasFetched:b,setHasFetched:v};case l.$9.Saved:return{feed:g,setFeed:x,hasFetched:y,setHasFetched:C};default:return{feed:d,setFeed:h,hasFetched:m,setHasFetched:f}}},[r,m,y,b,d,g,f,C,v,h,x,w,p]),{isFetching:S,onSearch:P}=(0,n.M)({feed:j,setFeed:N,hasFetched:k,setHasFetched:O,initialQuery:i,searchQuery:c,setSearchQuery:u,fetchFn:(0,l.DH)(r)});return(0,o.useEffect)(()=>(i&&u(i),()=>{N([]),u(""),O(!1)}),[i,N,O,u]),{feed:j,setFeed:N,hasFetched:k,isFetching:S,librarySearchQuery:c,onSearch:P}}},1489:function(e,t,r){r.d(t,{K7:function(){return a},jG:function(){return n},vk:function(){return s}});var l=r(60044);let n="MemeDeck",a="Meme With Frens",s="Create & discover memes with AI.";"".concat(n," – ").concat(a),new URL(l.j7?"http://localhost:8080":"https://memedeck.xyz")},61505:function(e,t){t.Z={src:"/memedeck:memedeck:holium.os/_next/static/media/search.3dc28276.svg",height:18,width:18,blurWidth:0,blurHeight:0}},7692:function(e,t){t.Z={src:"/memedeck:memedeck:holium.os/_next/static/media/logo-wide.572ec4d3.svg",height:256,width:702,blurWidth:0,blurHeight:0}}}]);