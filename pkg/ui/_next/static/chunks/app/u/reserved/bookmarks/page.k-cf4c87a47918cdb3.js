(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{19753:function(e,n,t){Promise.resolve().then(t.bind(t,30292))},30292:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t(59547),u=t(27492),c=t(30912),i=t(1463),f=t(82168),r=t(50995),l=t(71112),o=t(56582);function a(e){let{params:n}=e,{handle:t}=(0,l.u)({params:n,key:"handle"}),{userBookmarks:a,setUserBookmarks:k}=(0,o.O)(),[h,d]=(0,c.useState)(!0),x=(0,c.useCallback)(()=>{i.P.getProfileByHandle(t).then(e=>{i.P.getDecks(e.id,!1,!0).then(e=>k(t,e)).finally(()=>d(!1))})},[t,k,d]);return((0,c.useEffect)(()=>{x()},[x]),h)?(0,s.jsxs)(r.L,{children:[(0,s.jsx)(f.i,{}),(0,s.jsx)(f.i,{}),(0,s.jsx)(f.i,{})]}):(0,s.jsx)(u.E,{decks:a[t]||[],fetchDecks:x,emptyText:"No bookmarks yet"})}}},function(e){e.O(0,[290,703,886,714,421,930,957,744],function(){return e(e.s=19753)}),_N_E=e.O()}]);