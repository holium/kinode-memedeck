(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3995],{69854:function(e,t,r){Promise.resolve().then(r.bind(r,64955))},64955:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(57348),l=r(15346),o=r(24645),s=r(8485),a=r(5265),i=r(95478),u=r(71402),c=r(35878);function d(e){var t;let{params:r}=e,{handle:d}=(0,i.u)({params:r,key:"handle"}),{userBookmarks:m,setUserBookmarks:h}=(0,u.useProfile)(),[p,f]=(0,l.useState)(null!==(t=m[d])&&void 0!==t?t:[]),[v,b]=(0,l.useState)(!1),{isFetching:C}=(0,a.M)({feed:p,setFeed:f,hasFetched:v,setHasFetched:b,fetchFn:(e,t)=>{let{start:r,limit:n}=e;return c.P.getSavedMemes({start:r,limit:n,user_handle:d},t)},pageSize:20});return(0,l.useEffect)(()=>{0!==p.length&&h(e=>({...e,[d]:p}))},[p,d,h]),(0,n.jsx)(s.o,{memes:p,hasFetched:v,hasSearched:!1,isFetching:C,renderItem:(e,t)=>(0,n.jsx)(o.Y,{meme:e},"".concat(t,"-").concat(e.id))})}},8485:function(e,t,r){"use strict";r.d(t,{o:function(){return a}});var n=r(57348),l=r(4930),o=r(82896);let s={default:3,1100:3,700:2,500:1},a=e=>{let{memes:t,isFetching:r,hasFetched:a,hasSearched:i,noResultsMessage:u="No memes",className:c="overflow-hidden pl-3 pt-3",breakpoints:d=s,renderItem:m}=e;return(0,n.jsxs)("div",{className:c,children:[!r&&0===t.length&&(a||i)?(0,n.jsx)("div",{className:"text-white-400/75",children:u}):null,r&&0===t.length&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})}),(0,n.jsx)(o.Z,{breakpointCols:d,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(m)}),r&&t.length>0&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})})]})}},24645:function(e,t,r){"use strict";r.d(t,{Y:function(){return c}});var n=r(57348),l=r(45155),o=r(15346),s=r(18491),a=r(81254),i=r(96622),u=r(69467);let c=e=>{var t,r,c,d,m,h,p,f,v,b;let{meme:C,isSelected:w,showCreator:g=!1,onClick:y}=e,{onOpenMeme:x}=(0,i.useMemeModal)(),[j,P]=(0,o.useState)((0,u.kl)(C));return(0,n.jsx)("article",{className:"relative w-full cursor-pointer select-none overflow-hidden rounded-lg border-2 ".concat(w?"border-blue-500":"border-transparent"),onClick:()=>y?y():x(C.id),children:(0,n.jsxs)("div",{className:"group flex w-full flex-col",children:["generated"===C.source?(0,n.jsx)(a.g,{type:C.source,src:C.url,alt:C.id,canvasWidth:null!==(c=C.width)&&void 0!==c?c:1024,canvasHeight:null!==(d=C.height)&&void 0!==d?d:1024,imageWidth:null!==(m=C.width)&&void 0!==m?m:1024,imageHeight:null!==(h=C.height)&&void 0!==h?h:1024,topText:null!==(p=null===(t=C.text_overlay)||void 0===t?void 0:t.top_text)&&void 0!==p?p:null,bottomText:null!==(f=null===(r=C.text_overlay)||void 0===r?void 0:r.bottom_text)&&void 0!==f?f:null,centerText:null,className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105"}):(0,n.jsx)(l.default,{className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105",src:C.url,alt:C.id,width:null!==(v=C.width)&&void 0!==v?v:1024,height:null!==(b=C.height)&&void 0!==b?b:1024}),j&&(0,n.jsx)(s.T,{src:C.url,onClickShow:()=>P(!1)}),g&&(0,n.jsx)("div",{className:"absolute inset-0 z-0 flex select-none items-end px-1.5 py-1 opacity-0 transition-opacity hover:opacity-100",children:(0,n.jsx)("div",{className:"flex flex-1 items-center gap-2",children:(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate p-1 text-sm font-semibold drop-shadow-[0.5px_0.5px_1px_rgba(0,0,0,80)]",children:[(0,n.jsx)(l.default,{src:C.creator_avatar||"",alt:C.creator_handle||"",className:"rounded-full hover:scale-105",width:24,height:24}),C.creator_handle]})})})]})})}},5265:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(15346),l=r(74859),o=r(76808);let s=e=>{let{feed:t,setFeed:r,hasFetched:s,setHasFetched:a,searchQuery:i,setSearchQuery:u,storeUrlParams:c=!0,fetchFn:d,deckId:m,fetchOnLoad:h=!0,pageSize:p=50,ignoreWindowScroll:f=!1,onFetchOnLoad:v}=e,{initialQuery:b,initialInterval:C,initialSortBy:w}=(0,o.x)(),[g,y]=(0,n.useState)(0),[x,j]=(0,n.useState)(!0),[P,O]=(0,n.useState)(!1),[k,S]=(0,n.useState)(C),[_,N]=(0,n.useState)(w),M=(0,n.useCallback)(async(e,t)=>{let n=await d(e,t);return r(t=>n.length>0&&Number(e.start)>0?[...t,...n]:n),O(!1),a(!0),j(n.length===p),n},[d,p,r,a]),E=(0,n.useMemo)(()=>(0,l.k)(M,1e3),[M]),I=(0,n.useCallback)(async(e,t,r)=>{var n,l,o,s,u;O(!0),a(!1);let c={search:null!==(n=e.search)&&void 0!==n?n:i,start:null!==(l=e.start)&&void 0!==l?l:g,limit:null!==(o=e.limit)&&void 0!==o?o:p,interval:null!==(s=e.interval)&&void 0!==s?s:k,sort_by:null!==(u=e.sort_by)&&void 0!==u?u:_,...m?{deck_id:m}:{}};return r?M(c,t):E(c,t)},[E,m,M,p,k,i,_,a,g]),D=(0,n.useCallback)(e=>{if(!s||!x||P)return;let t=null!=e?e:g+p;y(t),I({start:t})},[s,x,P,g,p,I]),F=(0,n.useCallback)(async()=>{let e=window.innerHeight;document.body.offsetHeight-window.scrollY<3*e&&D()},[D]),A=(0,n.useCallback)((e,t,r)=>{let n=new URL(window.location.href);e.length>0?n.searchParams.set("query",e):n.searchParams.delete("query"),t?n.searchParams.set("interval",t):n.searchParams.delete("interval"),r?n.searchParams.set("sort_by",r):n.searchParams.delete("sort_by"),window.history.pushState({},"",n.toString())},[]),R=(0,n.useCallback)(async(e,t,r)=>{null==u||u(e),c&&A(e,t,r),y(0),j(!0),I({search:e,start:0,limit:p,interval:t,sort_by:r})},[I,p,u,c,A]),z=(0,n.useCallback)(e=>{r([]),S(e),R(null!=i?i:"",e,_)},[R,i,_,r]),T=(0,n.useCallback)(e=>{r([]),N(e),R("",k,e)},[R,k,r]);return(0,n.useEffect)(()=>{if(!f)return window.addEventListener("scroll",F),()=>window.removeEventListener("scroll",F)},[F,f]),(0,n.useEffect)(()=>{let e=new AbortController;if(!s&&!(t.length>0)&&h&&!P)return I({search:b,start:0,limit:p,interval:C,sort_by:w},e.signal,!0).then(v),()=>{!e.signal.aborted&&P&&e.abort()}},[t.length,I,h,s,b,C,P,v,p,w]),(0,n.useEffect)(()=>(b&&(null==u||u(b)),C&&S(C),w&&N(w),()=>{r([]),null==u||u(""),a(!1)}),[C,b,w,r,a,S,u,N]),{feed:t,setFeed:r,setHasMore:j,onSearch:R,searchInterval:k,onSelectInterval:z,searchSortBy:_,onSelectSortBy:T,isFetching:P,hasMore:x,setIsFetching:O,setHasFetched:a,onReachedEnd:D}}},76808:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});var n=r(16189),l=r(41973);let o=()=>{var e,t,r;let o=(0,n.useSearchParams)();return{initialQuery:null!==(e=o.get("query"))&&void 0!==e?e:"",initialInterval:null!==(t=o.get("interval"))&&void 0!==t?t:l.u.Week,initialSortBy:null!==(r=o.get("sort_by"))&&void 0!==r?r:l.a.Hot}}},77623:function(e,t,r){"use strict";r.d(t,{T:function(){return o}});var n=r(16189),l=r(93276);let o=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),r=(0,n.useSearchParams)(),o=e=>{let n=encodeURIComponent(e.replace("meme:",""));if(["/home","/trending"].includes(t))return"".concat(t,"/").concat(n);{let e=new URLSearchParams(r.toString());return e.set("memeId",n),(0,l.wS)(t,e)}};return{openMemeModal:t=>{let r=o(t);e.push(r,{scroll:!1})},getMemeModalPath:o}}},95478:function(e,t,r){"use strict";r.d(t,{u:function(){return l}});var n=r(16189);let l=e=>{var t;let{key:r,index:l,params:o}=e,s=(0,n.usePathname)(),a=null!==(t=s&&s.split("/")[l||2])&&void 0!==t?t:"",i=o[r]||a;return{[r]:decodeURIComponent(i)}}},82896:function(e,t,r){"use strict";var n=r(15346);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class a extends n.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,n=t.default||2;for(let l in t){let o=parseInt(l);o>0&&e<=o&&o<r&&(r=o,n=t[l])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=n.Children.toArray(this.props.children);for(let n=0;n<r.length;n++){let l=n%e;t[l]||(t[l]=[]),t[l].push(r[n])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,o=this.itemsInColumns(),a="".concat(100/o.length,"%"),i=r;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));let u=s(s(s({},e),t),{},{style:s(s({},t.style),{},{width:a}),className:i});return o.map((e,t)=>n.createElement("div",l({},u,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:o,columnAttrs:s,column:a,className:i}=e,u=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),c=i;return"string"!=typeof i&&(this.logDeprecated('The property "className" requires a string'),void 0===i&&(c="my-masonry-grid")),n.createElement("div",l({},u,{className:c}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}a.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},t.Z=a},96622:function(e,t,r){"use strict";r.r(t),r.d(t,{MemeModalProvider:function(){return c},useMemeModal:function(){return d}});var n=r(57348),l=r(16189),o=r(15346),s=r(13214),a=r(77623),i=r(93276);let u=(0,o.createContext)({}),c=e=>{var t;let{children:r}=e,o=(0,l.useRouter)(),c=(0,l.usePathname)(),d=(0,l.useSearchParams)(),m=decodeURIComponent(null!==(t=d.get("memeId"))&&void 0!==t?t:""),h=new URLSearchParams(d.toString()),{openMemeModal:p}=(0,a.T)(),f=()=>{h.delete("memeId");let e=(0,i.wS)(c,h);o.push(e,{scroll:!1})};return(0,n.jsxs)(u.Provider,{value:{onOpenMeme:p,onCloseMeme:f},children:[r,m&&(0,n.jsx)(s.k,{memeId:m,onClose:f})]})},d=()=>{let e=(0,o.useContext)(u);if(void 0===e)throw Error("useFeed must be used within MemeModalProvider");return e}}},function(e){e.O(0,[7398,2221,4175,454,2872,9154,3881,7686,1133,6440,312,4822,6378,9581,5878,412,3214,937,7114,1744],function(){return e(e.s=69854)}),_N_E=e.O()}]);