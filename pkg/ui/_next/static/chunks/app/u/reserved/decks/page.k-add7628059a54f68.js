(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3804],{23437:function(e,n,t){Promise.resolve().then(t.bind(t,24596))},24596:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t(59547),u=t(27492),i=t(71112),c=t(30912),f=t(1463),l=t(82168),r=t(50995),o=t(15076);function a(e){let{params:n}=e,{handle:t}=(0,i.u)({params:n,key:"handle"}),{userDecks:a,setUserDecks:d}=(0,o.useProfile)(),[k,h]=(0,c.useState)(!0),x=(0,c.useCallback)(()=>{f.P.getProfileByHandle(t).then(e=>{f.P.getDecks(e.id,!1,void 0).then(e=>d({...a,[t]:e})).finally(()=>h(!1))})},[t,d,a]);return((0,c.useEffect)(()=>{x()},[x]),k)?(0,s.jsxs)(r.L,{children:[(0,s.jsx)(l.i,{}),(0,s.jsx)(l.i,{}),(0,s.jsx)(l.i,{})]}):(0,s.jsx)(u.E,{decks:a[t]||[],emptyText:"No decks yet",fetchDecks:x})}}},function(e){e.O(0,[1775,1904,9886,4116,3421,7930,3957,1744],function(){return e(e.s=23437)}),_N_E=e.O()}]);