(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3995],{69854:function(e,t,r){Promise.resolve().then(r.bind(r,64955))},64955:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(57348),o=r(15346),s=r(8485),l=r(6076),i=r(5265),a=r(83815),u=r(35971),c=r(71402),d=r(64720),m=r(35878);function h(e){var t;let{params:r}=e,{handle:h}=(0,a.d)({params:r,key:"handle"}),{profile:p}=(0,c.useProfile)(),{setIsSignupModalOpen:f}=(0,d.useSidebar)(),{userBookmarks:v,setUserBookmarks:C}=(0,u.useFeed)(),[b,w]=(0,o.useState)(null!==(t=v[h])&&void 0!==t?t:[]),[y,g]=(0,o.useState)(!1),{isFetching:x}=(0,i.M)({feed:b,setFeed:w,hasFetched:y,setHasFetched:g,fetchFn:(e,t)=>{let{start:r,limit:n}=e;return m.P.getSavedMemes({start:r,limit:n,user_handle:h},t)},pageSize:20});return(0,o.useEffect)(()=>{0!==b.length&&C(e=>({...e,[h]:b}))},[b,h,C]),(0,n.jsx)(s.o,{memes:b,hasFetched:y,hasSearched:!1,isFetching:x,renderItem:e=>(0,n.jsx)(l.P,{meme:e,onClick:p?void 0:()=>f(!0)},e.id)})}},8485:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(57348),o=r(4930),s=r(82896);let l={default:3,1100:3,700:2,500:1},i=e=>{let{memes:t,isFetching:r,hasFetched:i,hasSearched:a,noResultsMessage:u="No memes",className:c="overflow-hidden pl-3 pt-3",breakpoints:d=l,renderItem:m}=e;return(0,n.jsxs)("div",{className:c,children:[!r&&0===t.length&&(i||a)?(0,n.jsx)("div",{className:"text-white-400/75",children:u}):null,r&&0===t.length&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(o.c,{})}),(0,n.jsx)(s.Z,{breakpointCols:d,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(m)}),r&&t.length>0&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(o.c,{})})]})}},6076:function(e,t,r){"use strict";r.d(t,{P:function(){return b}});var n=r(57348),o=r(92378),s=r(950),l=r(45155),i=r(15346),a=r(56480),u=r(73421),c=r(71402),d=r(35878),m=r(69467),h=r(99957),p=r(62568),f=r(81727),v=r(2406),C=r(18491);let b=e=>{var t,r,b;let{meme:w,priorityLoadImage:y,onClick:g}=e,{profile:x}=(0,c.useProfile)(),j=(0,i.useMemo)(()=>{var e;return null!==(e=null==x?void 0:x.user.id)&&void 0!==e?e:""},[x]),O=(0,a.u)(j,w.votes),N=(0,i.useMemo)(()=>(0,m.kl)(w),[w]),[P,S]=(0,i.useState)(N),{memeDescription:k,memeCreator:_}=(0,p.VU)(w),{onOpenMeme:D}=(0,u.useMemeModal)(),F=(0,i.useCallback)(()=>{if(g){g();return}D(w.id)},[w.id,g,D]);return(0,i.useEffect)(()=>()=>{S(N)},[N]),(0,n.jsx)("article",{className:"relative w-full cursor-pointer",onClick:F,children:(0,n.jsxs)(o.w,{isFooterBlurred:!0,className:"group overflow-hidden rounded-md",children:[(0,n.jsx)(l.default,{className:"z-0 size-full rounded-md bg-white-400/5 sm:transition-transform sm:group-hover:scale-104",src:w.url,quality:50,priority:y,alt:k,width:null!==(t=w.width)&&void 0!==t?t:200,height:null!==(r=w.height)&&void 0!==r?r:200}),(0,n.jsx)(s.i,{className:(0,h.cn)("justify-between bg-black-400/30 border-1 border-zinc-600/40 overflow-hidden py-2 absolute before:rounded-lg rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-1","transition-opacity opacity-0",O.hasUpvoted||O.hasDownvoted?"sm:opacity-100":"sm:group-hover:opacity-100"),children:(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 w-full",children:[(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate text-sm font-semibold",children:[(0,n.jsx)(l.default,{src:null!==(b=w.creator_avatar)&&void 0!==b?b:w.creator_avatar,alt:_,className:"rounded-full min-w-8",width:32,height:32,quality:50}),(0,n.jsxs)("div",{className:"flex flex-col flex-1 truncate",children:[(0,n.jsx)("span",{className:"truncate",children:w.creator_handle}),w.published_at&&(0,n.jsx)("span",{className:"text-tiny font-normal text-white-400/70",children:(0,f.Po)(w.published_at)})]})]}),(0,n.jsx)(v.I,{memeId:w.id,userId:j,addVoteApi:d.P.createMemeReaction,removeVoteApi:d.P.deleteMemeReaction,onClick:g,initialVotes:w.votes,border:"border-zinc-400/50"})]})}),P&&(0,n.jsx)(C.T,{src:w.url,onClickShow:()=>S(!1)})]})})}},82896:function(e,t,r){"use strict";var n=r(15346);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class i extends n.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,n=t.default||2;for(let o in t){let s=parseInt(o);s>0&&e<=s&&s<r&&(r=s,n=t[o])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=n.Children.toArray(this.props.children);for(let n=0;n<r.length;n++){let o=n%e;t[o]||(t[o]=[]),t[o].push(r[n])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,s=this.itemsInColumns(),i="".concat(100/s.length,"%"),a=r;a&&"string"!=typeof a&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===a&&(a="my-masonry-grid_column"));let u=l(l(l({},e),t),{},{style:l(l({},t.style),{},{width:i}),className:a});return s.map((e,t)=>n.createElement("div",o({},u,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:s,columnAttrs:l,column:i,className:a}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),c=a;return"string"!=typeof a&&(this.logDeprecated('The property "className" requires a string'),void 0===a&&(c="my-masonry-grid")),n.createElement("div",o({},u,{className:c}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}i.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},t.Z=i},64720:function(e,t,r){"use strict";r.r(t),r.d(t,{SidebarProvider:function(){return l},useSidebar:function(){return i}});var n=r(57348),o=r(15346);let s=(0,o.createContext)(void 0),l=e=>{let{children:t}=e,[r,l]=(0,o.useState)([]),[i,a]=(0,o.useState)([]),[u,c]=(0,o.useState)([]),[d,m]=(0,o.useState)(!0),[h,p]=(0,o.useState)([]),[f,v]=(0,o.useState)([]),[C,b]=(0,o.useState)({}),[w,y]=(0,o.useState)(!1),[g,x]=(0,o.useState)(!1);return(0,n.jsx)(s.Provider,{value:{myDecks:h,setMyDecks:p,following:f,setFollowing:v,isFetchingMyDecks:d,setIsFetchingMyDecks:m,newPostCounts:C,setNewPostCounts:b,topDecks:r,setTopDecks:l,topDecksWeekly:i,setTopDecksWeekly:a,recommendedFollows:u,setRecommendedFollows:c,isSignupModalOpen:w,setIsSignupModalOpen:y,isHovering:g,setIsHovering:x},children:t})},i=()=>{let e=(0,o.useContext)(s);if(void 0===e)throw Error("useProfile must be used within SidebarProvider");return e}},950:function(e,t,r){"use strict";r.d(t,{i:function(){return u}});var n=r(93720),o=r(97308),s=r(59485),l=r(89707),i=r(57348),a=(0,o.Gp)((e,t)=>{var r;let{as:o,className:a,children:u,...c}=e,d=(0,s.gy)(t),{slots:m,classNames:h}=(0,n.R)(),p=(0,l.W)(null==h?void 0:h.footer,a);return(0,i.jsx)(o||"div",{ref:d,className:null==(r=m.footer)?void 0:r.call(m,{class:p}),...c,children:u})});a.displayName="NextUI.CardFooter";var u=a}},function(e){e.O(0,[7398,7425,4175,3159,8797,2079,6002,3881,7686,1639,6440,9028,4822,1510,6814,5878,8852,5658,937,7114,1744],function(){return e(e.s=69854)}),_N_E=e.O()}]);