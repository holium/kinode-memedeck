(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2583],{92644:function(e,n,t){Promise.resolve().then(t.bind(t,88643))},88643:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(7590),i=t(62179),s=t(83506),a=t(47758),o=t(4288),l=t(55695),d=t(58563),c=t(3333);function u(){var e;let{search:n,searchDebounced:t,onSearch:u}=(0,d.U)(),{data:h}=(0,c.iS)(),{isFetching:v,currentData:f}=(0,l.T)({search:t,user_handle:null==h?void 0:h.handle,is_saved:!0});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.E,{border:"border-b border-transparent",placeholder:"Search your library",value:n,onSearch:u}),(0,r.jsx)(s.g,{}),(0,r.jsx)(a.o,{items:null!==(e=null==f?void 0:f.memes)&&void 0!==e?e:[],hasFetched:!!f,hasSearched:t.length>0,isFetching:v,renderItem:(e,n)=>(0,r.jsx)(i.Y,{item:e,showCreator:!0},"".concat(n,"-").concat(e.id))})]})}},55695:function(e,n,t){"use strict";t.d(n,{T:function(){return s}});var r=t(82581),i=t(3333);let s=e=>{let{search:n,...t}=e,[s,a]=(0,r.useState)(1),o=(0,i.t$)({...t,search:n,start:50*(s-1),limit:50}),l=(0,r.useCallback)(()=>{o.isFetching||o.isLoading||o.isError||a(e=>{var n,t;let r=!o.data||0===o.data.memes.length,i=(null!==(t=null===(n=o.data)||void 0===n?void 0:n.memes)&&void 0!==t?t:[]).length<50*e;return r||i?e:e+1})},[o.data,o.isError,o.isFetching,o.isLoading]),d=(0,r.useCallback)(async()=>{let e=window.innerHeight;document.body.offsetHeight-window.scrollY<3*e&&l()},[l]);return(0,r.useEffect)(()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}),[d]),o}}},function(e){e.O(0,[2138,244,116,7482,8236,9447,417,7847,2305,9101,774,4494,9738,7273,3495,3333,3585,7952,3998,7814,1744],function(){return e(e.s=92644)}),_N_E=e.O()}]);