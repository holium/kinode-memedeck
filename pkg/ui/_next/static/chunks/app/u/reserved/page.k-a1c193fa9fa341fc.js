(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{74870:function(e,t,r){Promise.resolve().then(r.bind(r,85722))},85722:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(57348),l=r(15346),s=r(24645),a=r(8485),i=r(52428),o=r(5265),c=r(95478),u=r(71402),d=r(35878);function m(e){var t;let{params:r}=e,{handle:m}=(0,c.u)({params:r,key:"handle"}),{profile:A,userMemes:h,setUserMemes:g,isSignupModalOpen:p,setIsSignupModalOpen:f}=(0,u.useProfile)(),[b,v]=(0,l.useState)(null!==(t=h[m])&&void 0!==t?t:[]),[w,x]=(0,l.useState)(!1),{isFetching:C}=(0,o.M)({feed:b,setFeed:v,hasFetched:w,setHasFetched:x,fetchFn:(e,t)=>{let{start:r,limit:n}=e;return d.P.getMemesByHandle(m,{start:r,limit:n},t)},pageSize:20});return(0,l.useEffect)(()=>{0!==b.length&&g(e=>({...e,[m]:b}))},[b,m,g]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.o,{memes:b,hasFetched:w,hasSearched:!1,isFetching:C,renderItem:(e,t)=>(0,n.jsx)(s.Y,{meme:e,onClick:A?void 0:()=>f(!0)},"".concat(t,"-").concat(e.id))}),p&&(0,n.jsx)(i.c,{isOpen:p,onClose:()=>f(!1)})]})}},8485:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(57348),l=r(4930),s=r(82896);let a={default:3,1100:3,700:2,500:1},i=e=>{let{memes:t,isFetching:r,hasFetched:i,hasSearched:o,noResultsMessage:c="No memes",className:u="overflow-hidden pl-3 pt-3",breakpoints:d=a,renderItem:m}=e;return(0,n.jsxs)("div",{className:u,children:[!r&&0===t.length&&(i||o)?(0,n.jsx)("div",{className:"text-white-400/75",children:c}):null,r&&0===t.length&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})}),(0,n.jsx)(s.Z,{breakpointCols:d,className:"my-masonry-grid min-w-full max-w-full",columnClassName:"my-masonry-grid_column",children:t.map(m)}),r&&t.length>0&&(0,n.jsx)("div",{className:"flex w-full justify-center p-3",children:(0,n.jsx)(l.c,{})})]})}},52428:function(e,t,r){"use strict";r.d(t,{c:function(){return A}});var n=r(57348),l=r(67425),s=r(45155),a=r(94787),i=r(35878),o=r(62568),c=r(15667);let u=e=>{let{title:t,children:r,isOpen:l,glow:a=!0,z:i="z-40",hideOnCloseButton:o=!1,onClose:u}=e;return l?(0,n.jsx)("div",{className:"bg-white-100 fixed inset-0 flex size-full max-h-full min-h-0 items-center justify-center overflow-y-auto overflow-x-hidden p-4 ".concat(i),onClick:u,children:(0,n.jsxs)("div",{className:"".concat(a?"glow":""," bg-black-400 relative flex w-full max-w-md flex-col items-center gap-6 rounded-lg px-6 pb-8 pt-6 shadow-lg"),onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("header",{className:"relative flex w-full items-center justify-between",children:[(0,n.jsx)("h2",{className:"text-xl font-bold",children:t}),u&&!o&&(0,n.jsx)("button",{onClick:u,className:"absolute right-0 translate-x-1/4 p-2",children:(0,n.jsx)(s.default,{src:c.Z,alt:"close",className:"w-3"})})]}),(0,n.jsx)("div",{children:r})]})}):null},d=[{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/1.8823d877.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAzklEQVR42mPQF9DS4NXgZ5bTVvVV1vRnYOBW41TVF9Bm0OXTchc3mGuac8J75rmkFXsz50RKWBoCJWTZVHI03HcYlmwzqdrn1n4qfnqnZbQ5txaDLr+WtZBeolJAvEFSjmtpTWhFqJyFHo8mg4GQriqnrJWUbbxJZp5XeWF4tSyjrL6gNoMWp5y5qKWjvJe3YVyKR0mQdaQGg6y+kA6Du352pHl5lElOsFV0SlBBsH28GoMMSCLZryfbrzPTu7kgpqUooSsnvNVBz12DQQ4Aeio0BOyoKu8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},color:"#2E102A"},{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/2.185f5c03.png",height:1198,width:1162,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mNwiEywCgovzczfOKtvYV97dkY9g1ONqmctg3tSYkxsWKCl7Zym8q0zOqfWVYm51ih61DIEZ5a7hacGmVtH2Ntvas5tiYrR8ayRcq9lMAioZ7AsdNXTs1c3PdRdvLO5msGmSsWzhkHJo0reu8HNMro9NuTYhIqV1fkMLhUqXg0MCu61Mh4NGrbJOT6eDZEhiU72dg4+Xr6ZDM6xJTy6fgxikoY6Zml2tgaaxppqRs6edgyuMZ4KxsoMoopaZq6uLoGaino6lkYWvjYAC7g+Dfv8P9kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},color:"#21487D"},{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/3.43776601.png",height:880,width:880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AE1OTiciHykjGBcNBQAAAAAAAF5mbpGjuwA5NSg1LiMTAABMSDqOi3SDgGsJAAA+REwACgAABwAARUAwvbqb2te0z8yrjYpzAAAAAHNwW1xYS4OBbtXTrtTRrqKhiJKQe7SykwDY1a/Qzautq5DV063RzarJxqbHxKPT0KoAb2tWt7SU1tKq0c6nzcqnzMemwLqXY2JOABoPDQAAAJaQfM7Hq7y2lsW+qG1nWiklKwB/dWSqopfQx8HVy8PMwrbXzcbRyMCon5YdSl2c8L4tdAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},color:"#D0CCA9"},{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/4.a25addea.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKnG0avG0bDJ0rbO1bnQ1bLK0LDIz7DIzwC9zcvAzszH0s+YpKKOnJu/y8XH0szE0MsAzM/E1NXJqqyiNhIAfV9Ls6qew7aszsq/AMzHwc3Jx8O3sOe+mfTKptG5qbSals/GxgC3tcazpa63sL7yzKz+1KbSurGqmKK7tcMAlpOsjoORhXqM3Lib37udtqSpmpKfpJmeAGpdZUZDQ1huTfPNpragjQABKqGJgbipowA6AABEZUhDkG1vg2d+h2kATCG3mISikoczn3nJIi6wxQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},color:"#BDB9C3"},{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/5.622e0a3d.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APvi2OfQxmplWSkyKTA3LmtlW+zTyf7k2wD649ernJEAAAAiLCQABgoAAAC4ppz95tsA8tzRfHVqAAAACgAAgWpVbWBIdGxm8tvQAPPe1Ih/d1o3B5RnQcetjbamioZ2Z+vSygD549rLubGAYTeyfDzy4cPc0rbGraD33dMA79rS9d7Xm4h8mFgW26qFwaWF4svC9d3SAPfj2smzqzMZEGU1HcCkgsCaf9KrofDe1ACzn5lEMC9wUCx6TS2gh2prQzF3AADEpI9uLGl6mUkPuwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},color:"#AF7A43"},{src:{src:"/memedeck:memedeck:meme-deck.os/_next/static/media/6.b62b0cfc.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AIuZgJKgnWiGpViHsXeYtZirvaOkmbeogwBZiLpGebt6g4KQh1KWjV2Ml4yIqsmBorkAOnK2d4Sax5pP27R+za6Ar5x1gpaqjKvCAFiPuYmYk72pdK6XcMCvi6KUdV57ko6zyABpm7mPoLGnontscladnJSSmKBblLdvpsoAmqisw7OkwLWRvbKnv7G+kKfBfp64kqi6AJCepLqvj7++s627yru7t3iUoa+tqsLEywCRn6GfsKtutdG0wM/WxbB+mqV4oceVsc4HHXVkV3+NuQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},color:"#7197BD"}],m=e=>{let{index:t,avatar:r}=e;return(0,n.jsx)(s.default,{src:r.src,draggable:!1,priority:!0,quality:50,style:{background:r.color},alt:"avatar ".concat(t),className:"size-9 rounded-full border-2 border-white-400 ".concat(t>0?"-ml-1":""),width:38,height:38})},A=e=>{let{isOpen:t,onClose:r}=e;return(0,n.jsx)(u,{z:"z-50",isOpen:t,hideOnCloseButton:!0,onClose:r,children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"mb-6 text-center text-3xl font-bold",children:o.K7}),(0,n.jsx)("p",{className:"text-center text-lg text-white-400/75",children:o.vk}),(0,n.jsx)("div",{className:"relative my-6 flex items-center justify-center select-none",children:d.map((e,t)=>(0,n.jsx)(m,{index:t,avatar:e},t))}),(0,n.jsxs)(l.A,{className:"my-6 flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-1 text-sm",onClick:()=>{let e=i.P.xGetRedirectUrl();window.location.href=e},children:[(0,n.jsx)("p",{className:"text-lg",children:"Login with"}),(0,n.jsx)(s.default,{src:a.Z,alt:"x",className:"w-5"})]})]})})}},24645:function(e,t,r){"use strict";r.d(t,{Y:function(){return u}});var n=r(57348),l=r(45155),s=r(15346),a=r(18491),i=r(81254),o=r(96622),c=r(69467);let u=e=>{var t,r,u,d,m,A,h,g,p,f;let{meme:b,isSelected:v,showCreator:w=!1,onClick:x}=e,{onOpenMeme:C}=(0,o.useMemeModal)(),[y,k]=(0,s.useState)((0,c.kl)(b));return(0,n.jsx)("article",{className:"relative w-full cursor-pointer select-none overflow-hidden rounded-lg border-2 ".concat(v?"border-blue-500":"border-transparent"),onClick:()=>x?x():C(b.id),children:(0,n.jsxs)("div",{className:"group flex w-full flex-col",children:["generated"===b.source?(0,n.jsx)(i.g,{type:b.source,src:b.url,alt:b.id,canvasWidth:null!==(u=b.width)&&void 0!==u?u:1024,canvasHeight:null!==(d=b.height)&&void 0!==d?d:1024,imageWidth:null!==(m=b.width)&&void 0!==m?m:1024,imageHeight:null!==(A=b.height)&&void 0!==A?A:1024,topText:null!==(h=null===(t=b.text_overlay)||void 0===t?void 0:t.top_text)&&void 0!==h?h:null,bottomText:null!==(g=null===(r=b.text_overlay)||void 0===r?void 0:r.bottom_text)&&void 0!==g?g:null,centerText:null,className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105"}):(0,n.jsx)(l.default,{className:"z-0 size-full rounded-lg bg-white-400/5 transition-transform group-hover:scale-105",src:b.url,alt:b.id,width:null!==(p=b.width)&&void 0!==p?p:1024,height:null!==(f=b.height)&&void 0!==f?f:1024}),y&&(0,n.jsx)(a.T,{src:b.url,onClickShow:()=>k(!1)}),w&&(0,n.jsx)("div",{className:"absolute inset-0 z-0 flex select-none items-end px-1.5 py-1 opacity-0 transition-opacity hover:opacity-100",children:(0,n.jsx)("div",{className:"flex flex-1 items-center gap-2",children:(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 truncate p-1 text-sm font-semibold drop-shadow-[0.5px_0.5px_1px_rgba(0,0,0,80)]",children:[(0,n.jsx)(l.default,{src:b.creator_avatar||"",alt:b.creator_handle||"",className:"rounded-full hover:scale-105",width:24,height:24}),b.creator_handle]})})})]})})}},5265:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(15346),l=r(74859),s=r(76808);let a=e=>{let{feed:t,setFeed:r,hasFetched:a,setHasFetched:i,searchQuery:o,setSearchQuery:c,fetchFn:u,deckId:d,fetchOnLoad:m=!0,pageSize:A=50,ignoreWindowScroll:h=!1,onFetchOnLoad:g}=e,{initialQuery:p,initialInterval:f,initialSortBy:b}=(0,s.x)(),[v,w]=(0,n.useState)(0),[x,C]=(0,n.useState)(!0),[y,k]=(0,n.useState)(!1),[j,S]=(0,n.useState)(f),[O,N]=(0,n.useState)(b),z=(0,n.useCallback)(async(e,t)=>{let n=await u(e,t);return r(t=>n.length>0&&Number(e.start)>0?[...t,...n]:n),k(!1),i(!0),C(n.length===A),n},[u,A,r,i]),q=(0,n.useMemo)(()=>(0,l.k)(z,1e3),[z]),D=(0,n.useCallback)(async(e,t)=>{var r,n,l,s,a;return k(!0),i(!1),q({search:null!==(r=e.search)&&void 0!==r?r:o,start:null!==(n=e.start)&&void 0!==n?n:v,limit:null!==(l=e.limit)&&void 0!==l?l:A,interval:null!==(s=e.interval)&&void 0!==s?s:j,sort_by:null!==(a=e.sort_by)&&void 0!==a?a:O,...d?{deck_id:d}:{}},t)},[q,d,A,j,o,O,i,v]),P=(0,n.useCallback)(e=>{if(!a||!x||y)return;let t=null!=e?e:v+A;w(t),D({start:t})},[a,x,y,v,A,D]),R=(0,n.useCallback)(async()=>{let e=window.innerHeight;document.body.offsetHeight-window.scrollY<3*e&&P()},[P]),E=(0,n.useCallback)((e,t,r)=>{let n=new URL(window.location.href);e.length>0?n.searchParams.set("query",e):n.searchParams.delete("query"),t?n.searchParams.set("interval",t):n.searchParams.delete("interval"),r?n.searchParams.set("sort_by",r):n.searchParams.delete("sort_by"),window.history.pushState({},"",n.toString())},[]),I=(0,n.useCallback)(async(e,t,r)=>{null==c||c(e),c&&E(e,t,r),w(0),C(!0),D({search:e,start:0,limit:A,interval:t,sort_by:r})},[D,A,c,E]),B=(0,n.useCallback)(e=>{r([]),S(e),I("",e,O)},[I,O,r]),M=(0,n.useCallback)(e=>{r([]),N(e),I("",j,e)},[I,j,r]);return(0,n.useEffect)(()=>{if(!h)return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[R,h]),(0,n.useEffect)(()=>{let e=new AbortController;if(!a&&!(t.length>0)&&m&&!y)return D({search:p,start:0,limit:A,interval:f,sort_by:b},e.signal).then(g),()=>{!e.signal.aborted&&y&&e.abort()}},[t.length,D,m,a,p,f,y,g,A,b]),(0,n.useEffect)(()=>(p&&(null==c||c(p)),f&&S(f),b&&N(b),()=>{r([]),null==c||c(""),i(!1)}),[f,p,b,r,i,S,c,N]),{feed:t,setFeed:r,setHasMore:C,onSearch:I,searchInterval:j,onSelectInterval:B,searchSortBy:O,onSelectSortBy:M,isFetching:y,hasMore:x,setIsFetching:k,setHasFetched:i,onReachedEnd:P}}},76808:function(e,t,r){"use strict";r.d(t,{x:function(){return s}});var n=r(16189),l=r(41973);let s=()=>{var e,t,r;let s=(0,n.useSearchParams)();return{initialQuery:null!==(e=s.get("query"))&&void 0!==e?e:"",initialInterval:null!==(t=s.get("interval"))&&void 0!==t?t:l.u.Week,initialSortBy:null!==(r=s.get("sort_by"))&&void 0!==r?r:l.a.Hot}}},77623:function(e,t,r){"use strict";r.d(t,{T:function(){return s}});var n=r(16189),l=r(93276);let s=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),r=(0,n.useSearchParams)(),s=e=>{let n=encodeURIComponent(e.replace("meme:",""));if(["/home","/trending"].includes(t))return"".concat(t,"/").concat(n);{let e=new URLSearchParams(r.toString());return e.set("memeId",n),(0,l.wS)(t,e)}};return{openMemeModal:t=>{let r=s(t);e.push(r,{scroll:!1})},getMemeModalPath:s}}},95478:function(e,t,r){"use strict";r.d(t,{u:function(){return l}});var n=r(16189);let l=e=>{var t;let{key:r,index:l,params:s}=e,a=(0,n.usePathname)(),i=null!==(t=a&&a.split("/")[l||2])&&void 0!==t?t:"",o=s[r]||i;return{[r]:o}}},82896:function(e,t,r){"use strict";var n=r(15346);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class i extends n.Component{componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let r=1/0,n=t.default||2;for(let l in t){let s=parseInt(l);s>0&&e<=s&&s<r&&(r=s,n=t[l])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),r=n.Children.toArray(this.props.children);for(let n=0;n<r.length;n++){let l=n%e;t[l]||(t[l]=[]),t[l].push(r[n])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:r}=this.props,s=this.itemsInColumns(),i="".concat(100/s.length,"%"),o=r;o&&"string"!=typeof o&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===o&&(o="my-masonry-grid_column"));let c=a(a(a({},e),t),{},{style:a(a({},t.style),{},{width:i}),className:o});return s.map((e,t)=>n.createElement("div",l({},c,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:r,columnClassName:s,columnAttrs:a,column:i,className:o}=e,c=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),u=o;return"string"!=typeof o&&(this.logDeprecated('The property "className" requires a string'),void 0===o&&(u="my-masonry-grid")),n.createElement("div",l({},c,{className:u}),this.renderColumns())}constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}}i.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},t.Z=i},96622:function(e,t,r){"use strict";r.r(t),r.d(t,{MemeModalProvider:function(){return u},useMemeModal:function(){return d}});var n=r(57348),l=r(16189),s=r(15346),a=r(13214),i=r(77623),o=r(93276);let c=(0,s.createContext)({}),u=e=>{var t;let{children:r}=e,s=(0,l.useRouter)(),u=(0,l.usePathname)(),d=(0,l.useSearchParams)();(0,l.useParams)();let m=0===u.search(/\/home\/[0-9a-zA-Z]{5,}_[0-9a-zA-Z_]{10,}/)?u.replace(/^\/home\//,"").split("/")[0].split("?")[0]:decodeURIComponent(null!==(t=d.get("memeId"))&&void 0!==t?t:""),A=new URLSearchParams(d.toString()),{openMemeModal:h}=(0,i.T)(),g=()=>{A.delete("memeId");let e=0===A.toString().length?"/".concat(u.split("/")[1]):(0,o.wS)(u,A);s.push(e,{scroll:!1})};return(0,n.jsxs)(c.Provider,{value:{onOpenMeme:h,onCloseMeme:g},children:[r,m&&(0,n.jsx)(a.k,{memeId:m,onClose:g})]})},d=()=>{let e=(0,s.useContext)(c);if(void 0===e)throw Error("useFeed must be used within MemeModalProvider");return e}},62568:function(e,t,r){"use strict";r.d(t,{K7:function(){return s},jG:function(){return l},vk:function(){return a}});var n=r(54167);let l="MemeDeck",s="Meme With Frens",a="Create & discover memes with AI.";"".concat(l," – ").concat(s),new URL(n.j7?"http://localhost:8080":"https://memedeck.xyz")}},function(e){e.O(0,[7398,2221,4175,454,2872,9154,3881,7686,1133,6440,312,4822,6378,9581,5878,5073,3214,937,7114,1744],function(){return e(e.s=74870)}),_N_E=e.O()}]);