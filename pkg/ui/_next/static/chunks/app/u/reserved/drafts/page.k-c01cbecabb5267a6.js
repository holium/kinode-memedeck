(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5441],{67131:function(e,t,n){Promise.resolve().then(n.bind(n,65893))},65893:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(59547),u=n(27492),i=n(30912),c=n(1463),f=n(82168),r=n(50995),l=n(15076),o=n(71112);function a(e){let{params:t}=e,{handle:n}=(0,o.u)({params:t,key:"handle"}),{userDrafts:a,setUserDrafts:d}=(0,l.useProfile)(),[h,k]=(0,i.useState)(!0),x=(0,i.useCallback)(()=>{c.P.getProfileByHandle(n).then(e=>{c.P.getDecks(e.id,!0,void 0).then(e=>d({...a,[n]:e})).finally(()=>k(!1))})},[n,d,a]);return((0,i.useEffect)(()=>{x()},[x]),h)?(0,s.jsxs)(r.L,{children:[(0,s.jsx)(f.i,{}),(0,s.jsx)(f.i,{}),(0,s.jsx)(f.i,{})]}):(0,s.jsx)(u.E,{decks:a[n]||[],emptyText:"No drafts yet",fetchDecks:x})}}},function(e){e.O(0,[1775,1904,9886,4116,3421,7930,3957,1744],function(){return e(e.s=67131)}),_N_E=e.O()}]);