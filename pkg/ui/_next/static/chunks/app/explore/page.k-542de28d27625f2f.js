(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{602:function(e,t,r){Promise.resolve().then(r.bind(r,9277))},9277:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(59547),l=r(30912),s=r(74600),a=r(72251),i=r(92382),o=r(46113),c=r(47023);let u=e=>{let{onClickTag:t}=e;return(0,n.jsx)("div",{className:"flex h-12 w-full min-w-0 items-center overflow-x-auto rounded-none border-b border-white-400/15 px-3 pb-2",children:(0,n.jsx)(c.TrendingTopics,{limit:5,wrap:"flex-nowrap",onClickTag:t})})};var d=r(1463),h=r(12384),m=r(74491);function f(){var e;let t=null!==(e=(0,s.useSearchParams)().get("query"))&&void 0!==e?e:void 0,r=Number(null==t?void 0:t.length)>0,[c,f]=(0,l.useState)([]),[p,b]=(0,l.useState)(!0),{searchQuery:g,setSearchQuery:w,searchResults:v,setSearchResults:x,hasFetchedSearchResults:C,setHasFetchedSearchResults:y}=(0,m.useFeed)(),{isFetching:j,onSearch:k}=(0,o.M)({feed:v,setFeed:x,hasFetched:C,setHasFetched:y,searchQuery:g,setSearchQuery:w,initialQuery:t,fetchOnLoad:r,fetchFn:d.P.search});return(0,l.useEffect)(()=>{b(!0),d.P.getExplore({interval:168,limit:21}).then(f).finally(()=>b(!1))},[]),(0,l.useEffect)(()=>(t&&w(t),()=>{w(""),x([]),y(!1)}),[t,w,x,y]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.SearchBar,{autofocus:!0,initialSearch:t,border:"border-b border-transparent",value:g,onSearch:k}),(0,n.jsx)(u,{onClickTag:k}),(0,n.jsx)(i.o,{memes:g.length>0?v:c,isFetching:j||p,hasFetched:C,hasSearched:g.length>0,renderItem:(e,t)=>(0,n.jsx)(h.P,{meme:e},t)})]})}},95320:function(e,t,r){"use strict";r.d(t,{hd:function(){return c},Ew:function(){return u},QB:function(){return d}});var n=r(59547),l=r(79886),s=r(15361),a={src:"/memedeck:memedeck:holium.os/_next/static/media/logo.a86b8f2b.svg",height:256,width:256,blurWidth:0,blurHeight:0},i=r(7692),o=r(1489);let c=()=>(0,n.jsx)("div",{className:"flex h-16 select-none items-center justify-center lg:px-2 lg:text-left",children:(0,n.jsxs)(l.default,{href:"/home",children:[(0,n.jsx)("div",{className:"hidden lg:block lg:w-[170px]",children:(0,n.jsx)(d,{})}),(0,n.jsx)("div",{className:"lg:hidden",children:(0,n.jsx)(u,{})})]})}),u=()=>(0,n.jsx)(s.default,{src:a,alt:"".concat(o.jG," Icon"),className:"h-10 w-full select-none"}),d=e=>{let{className:t="h-12"}=e;return(0,n.jsx)(s.default,{priority:!0,src:i.Z,alt:"".concat(o.jG," Logo"),className:t,draggable:!1})}},92382:function(e,t,r){"use strict";r.d(t,{o:function(){return d}});var n=r(59547),l=r(24449),s=r(30912);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class c extends s.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,n=t.default||2;for(let l in t){let s=parseInt(l);s>0&&e<=s&&s<r&&(r=s,n=t[l])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=s.Children.toArray(this.props.children);for(let n=0;n<r.length;n++){let l=n%e;t[l]||(t[l]=[]),t[l].push(r[n])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,n=this.itemsInColumns(),l="".concat(100/n.length,"%"),i=r;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));let c=o(o(o({},e),t),{},{style:o(o({},t.style),{},{width:l}),className:i});return n.map((e,t)=>s.createElement("div",a({},c,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:n,columnAttrs:l,column:i,className:o}=e,c=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),u=o;return"string"!=typeof o&&(this.logDeprecated('The property "className" requires a string'),void 0===o&&(u="my-masonry-grid")),s.createElement("div",a({},c,{className:u}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}c.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};let u={default:3,1100:3,700:2,500:1},d=e=>{let{memes:t,isFetching:r,hasFetched:s,hasSearched:a,renderItem:i}=e;return(0,n.jsxs)("div",{className:"overflow-hidden pl-3 pt-3",children:[!r&&0===t.length&&(s||a)?(0,n.jsx)("div",{className:"text-white-400/75",children:"No memes"}):null,r&&0===t.length&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})}),(0,n.jsx)(c,{breakpointCols:u,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(i)}),r&&t.length>0&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})})]})}},47023:function(e,t,r){"use strict";r.r(t),r.d(t,{TrendingTopics:function(){return c}});var n=r(59547),l=r(30912),s=r(17432),a=r(1463),i=r(56582),o=r(67630);let c=e=>{let{limit:t,wrap:r="flex-wrap",onClickTag:c}=e,{trending:u,setTrending:d}=(0,i.O)(),[h,m]=(0,l.useState)(!0),f=(0,l.useCallback)(async()=>{d(await a.P.getTrending(t)),m(!1)},[d,t]);return((0,l.useEffect)(()=>{let e=u.length;(0===e||e<t)&&f()},[f,t,u.length]),h&&0===u.length)?(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:[1,2,3].map(e=>(0,n.jsx)(s.z,{variant:"flat",className:"cursor-pointer select-none px-2 py-1 text-sm font-bold tracking-wide text-transparent",children:1===e?"abcdefg":"xyzw"},e))}):(0,n.jsx)(o.$,{wrap:r,tags:u.slice(0,t).map(e=>e.name),onClickTag:c})}},72251:function(e,t,r){"use strict";r.r(t),r.d(t,{SearchBar:function(){return i}});var n=r(59547),l=r(74600),s=r(95320),a=r(65883);let i=e=>{let{value:t,autofocus:r,initialSearch:i,responsiveness:o="",border:c="border-b border-white-400/15",placeholder:u="Search for memes. (i.e. bell curve)",onSearch:d}=e,h=(0,l.useRouter)();return(0,n.jsxs)("div",{className:"sticky top-0 z-10 flex gap-3 h-16 w-full items-center bg-black-0 px-3 ".concat(o," ").concat(c),onClick:()=>{d||h.push("/explore")},children:[(0,n.jsx)("div",{className:"sm:hidden size-10 max-w-10",children:(0,n.jsx)(s.Ew,{})}),(0,n.jsx)(a.T,{value:t,autofocus:r,initialSearch:i,placeholder:u,onSearch:d})]})}},65883:function(e,t,r){"use strict";r.d(t,{T:function(){return o}});var n=r(59547),l=r(30912),s=r(15361),a=r(99854),i=r(61505);let o=e=>{let{value:t,autofocus:r,initialSearch:o,placeholder:c="Search for memes. (i.e. bell curve)",onFocus:u,onSearch:d}=e,h=(0,l.useRef)(null);return(0,n.jsx)(a.Y,{isClearable:!0,onClear:()=>{null==d||d("")},radius:"full",classNames:{input:"text-base placeholder:text-base placeholder:text-white-400/50"},startContent:(0,n.jsx)(s.default,{priority:!0,src:i.Z,alt:"Dropdown",onClick:e=>{var t;e.preventDefault(),null===(t=h.current)||void 0===t||t.focus()},className:"mr-1 size-5 cursor-text select-none opacity-75"}),ref:h,autoFocus:r,defaultValue:o,placeholder:c,className:"h-10 min-w-24 flex-1 rounded-full border border-white-400/5 bg-white-400/5 shadow-sm outline-none placeholder:text-xl placeholder:text-white-400/50",value:t,onFocus:u,onChange:e=>null==d?void 0:d(e.target.value)})}},12384:function(e,t,r){"use strict";r.d(t,{P:function(){return u}});var n=r(59547),l=r(15361),s=r(30912),a=r(82972),i=r(1463),o=r(78457),c=r(93078);let u=e=>{var t,r;let{meme:u,onClick:d}=e,{onOpenMeme:h}=(0,o.useMemeModal)(),[m,f]=(0,s.useState)(u.is_saved);return(0,n.jsx)("article",{className:"relative w-full cursor-pointer",onClick:()=>{if(d){d();return}h(u.id)},children:(0,n.jsxs)("div",{className:"group flex w-full flex-col gap-2 overflow-hidden rounded-lg",children:[(0,n.jsx)(l.default,{className:"z-0 size-full rounded-md bg-white-400/5 sm:transition-transform sm:group-hover:scale-105",src:u.url,alt:u.id,width:null!==(t=u.width)&&void 0!==t?t:200,height:null!==(r=u.height)&&void 0!==r?r:200}),(0,n.jsx)("div",{className:"absolute inset-0 z-0 flex select-none items-end px-1.5 py-1 opacity-0 sm:transition-opacity sm:hover:opacity-100",children:(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2",children:[(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate p-1 text-sm font-semibold drop-shadow-[0.5px_0.5px_1px_rgba(0,0,0,80)]",children:[(0,n.jsx)(l.default,{src:u.creator_avatar,alt:u.creator_handle,className:"rounded-full hover:scale-105",width:24,height:24}),u.creator_handle]}),(0,n.jsx)(a.A,{isIconOnly:!0,size:"sm",radius:"full",variant:"ghost",className:"mr-1 rounded-full bg-black-400 backdrop-blur-md",onClick:e=>{if(d){d();return}e.preventDefault(),f(!m),i.P.saveMeme(u.id,m).catch(()=>{f(m)})},children:(0,n.jsx)(c.JO,{className:"select-none",icon:m?"material-symbols:bookmark":"material-symbols:bookmark-outline",width:16})})]})})]})})}},46113:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(30912),l=r(58741);let s=e=>{let{feed:t,setFeed:r,hasFetched:s,setHasFetched:a,searchQuery:i,setSearchQuery:o,fetchFn:c,initialQuery:u,fetchOnLoad:d=!0,pageSize:h=50}=e,[m,f]=(0,n.useState)(0),[p,b]=(0,n.useState)(!0),[g,w]=(0,n.useState)(!1),v=(0,n.useCallback)(async(e,t)=>{let n=await c(e,t);r(t=>n.length>0&&Number(e.start)>0?[...t,...n]:n),w(!1),a(!0),b(n.length===h)},[c,h,r,a]),x=(0,n.useMemo)(()=>(0,l.k)(v,1e3),[v]),C=(0,n.useCallback)(async(e,t)=>{var r,n,l;w(!0),a(!1),x({search:null!==(r=e.search)&&void 0!==r?r:i,start:null!==(n=e.start)&&void 0!==n?n:m,limit:null!==(l=e.limit)&&void 0!==l?l:h},t)},[x,h,i,a,m]),y=(0,n.useCallback)(async()=>{if(!s||!p||g)return;let e=window.innerHeight;if(document.body.offsetHeight-window.scrollY<3*e){let e=m+h;f(e),C({start:e})}},[C,s,p,g,h,m]),j=(0,n.useCallback)(e=>{let t=new URL(window.location.href);e.length>0?t.searchParams.set("query",e):t.searchParams.delete("query"),window.history.pushState({},"",t.toString())},[]),k=(0,n.useCallback)(async e=>{null==o||o(e),o&&j(e),f(0),b(!0),C({search:e,start:0,limit:h})},[C,h,o,j]);return(0,n.useEffect)(()=>(window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)),[y]),(0,n.useEffect)(()=>{let e=new AbortController;if(!s&&!(t.length>0)&&d&&!g)return C({search:u,start:0,limit:h},e.signal),()=>{!e.signal.aborted&&g&&e.abort()}},[t.length,C,d,s,u,g,h]),{feed:t,setFeed:r,setHasMore:b,onSearch:k,isFetching:g,setIsFetching:w,setHasFetched:a}}},1489:function(e,t,r){"use strict";r.d(t,{K7:function(){return s},jG:function(){return l},vk:function(){return a}});var n=r(60044);let l="MemeDeck",s="Meme With Frens",a="Create & discover memes with AI.";"".concat(l," – ").concat(s),new URL(n.j7?"http://localhost:8080":"https://memedeck.xyz")},61505:function(e,t){"use strict";t.Z={src:"/memedeck:memedeck:holium.os/_next/static/media/search.3dc28276.svg",height:18,width:18,blurWidth:0,blurHeight:0}},7692:function(e,t){"use strict";t.Z={src:"/memedeck:memedeck:holium.os/_next/static/media/logo-wide.572ec4d3.svg",height:256,width:702,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[290,703,972,886,674,417,708,331,203,177,457,930,957,744],function(){return e(e.s=602)}),_N_E=e.O()}]);