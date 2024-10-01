"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6018],{57591:function(e,t,r){r.d(t,{n:function(){return I}});var a=r(9710),l=r(88377),n=r(6213),s=r(98223),o=r(76140),i=r(78706),d=r(17008),u=r(59297),c=r(35609),b=r(52119),g=r(62284),p=(0,a.Gp)((e,t)=>{var r,a;let{as:p,tabKey:f,destroyInactiveTabPanel:h,state:m,className:v,slots:y,classNames:x,...w}=e,K=(0,l.gy)(t),{tabPanelProps:N}=function(e,t,r){var a;let l=!function(e,t){let r,[a,l]=(0,u.useState)(!1);return(0,c.b)(()=>{if((null==e?void 0:e.current)&&!r){let t=()=>{e.current&&l(!!(0,d.QL)(e.current,{tabbable:!0}).nextNode())};t();let r=new MutationObserver(t);return r.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{r.disconnect()}}}),!r&&a}(r)?0:void 0,n=(0,o.O)(t,null!==(a=e.id)&&void 0!==a?a:null==t?void 0:t.selectedKey,"tabpanel"),b=(0,i.b)({...e,id:n,"aria-labelledby":(0,o.O)(t,null==t?void 0:t.selectedKey,"tab")});return{tabPanelProps:(0,s.d)(b,{tabIndex:l,role:"tabpanel","aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]})}}({...e,id:String(f)},m,K),{focusProps:C,isFocused:k,isFocusVisible:D}=(0,b.F)(),L=m.selectedItem,P=m.collection.getItem(f).props.children,W=(0,n.W)(null==x?void 0:x.panel,v,null==(r=null==L?void 0:L.props)?void 0:r.className),A=f===(null==L?void 0:L.key);return P&&(A||!h)?(0,g.jsx)(p||"div",{ref:K,"data-focus":k,"data-focus-visible":D,"data-inert":A?void 0:"true",inert:A?void 0:"true",...A&&(0,s.d)(N,C,w),className:null==(a=y.panel)?void 0:a.call(y,{class:W}),"data-slot":"panel",children:P}):null});p.displayName="NextUI.TabPanel";var f=r(2680),h=r(98720),m=r(69606),v=r(44346),y=r(99097),x=r(59349),w=r(42176),K=r(28704),N=r(82918),C=r(33779),k=r(62815);let D={...r(59773).H,...C.o,...k.b};var L=r(94118),P=r(8828),W=(0,a.Gp)((e,t)=>{var r;let{className:a,as:i,item:d,state:u,classNames:c,isDisabled:p,listRef:C,slots:k,motionProps:W,disableAnimation:A,disableCursorAnimation:M,shouldSelectOnPressUp:S,onClick:I,...j}=e,{key:B}=d,F=(0,l.gy)(t),O=i||(e.href?"a":"button"),{tabProps:H,isSelected:E,isDisabled:R,isPressed:_}=function(e,t,r){let{key:a,isDisabled:l,shouldSelectOnPressUp:n}=e,{selectionManager:i,selectedKey:d}=t,u=a===d,c=l||t.isDisabled||t.selectionManager.isDisabled(a),{itemProps:b,isPressed:g}=(0,w.C)({selectionManager:i,key:a,ref:r,isDisabled:c,shouldSelectOnPressUp:n,linkBehavior:"selection"}),p=(0,o.O)(t,a,"tab"),f=(0,o.O)(t,a,"tabpanel"),{tabIndex:h}=b,m=t.collection.getItem(a),v=(0,y.z)(null==m?void 0:m.props,{labelable:!0});delete v.id;let K=(0,x.eY)(null==m?void 0:m.props);return{tabProps:(0,s.d)(v,K,b,{id:p,"aria-selected":u,"aria-disabled":c||void 0,"aria-controls":u?f:void 0,tabIndex:c?void 0:h,role:"tab"}),isSelected:u,isDisabled:c,isPressed:g}}({key:B,isDisabled:p,shouldSelectOnPressUp:S},u,F);null==e.children&&delete H["aria-controls"];let z=p||R,{focusProps:T,isFocused:V,isFocusVisible:U}=(0,b.F)(),{hoverProps:J,isHovered:X}=(0,K.X)({isDisabled:z}),Y=(0,n.W)(null==c?void 0:c.tab,a),[,G]=(0,P.t)({rerender:!0});return(0,g.jsxs)(O,{ref:F,"data-disabled":(0,h.PB)(R),"data-focus":(0,h.PB)(V),"data-focus-visible":(0,h.PB)(U),"data-hover":(0,h.PB)(X),"data-hover-unselected":(0,h.PB)((X||_)&&!E),"data-pressed":(0,h.PB)(_),"data-selected":(0,h.PB)(E),"data-slot":"tab",...(0,s.d)(H,z?{}:{...T,...J},(0,f.z)(j,{enabled:"string"==typeof O,omitPropNames:new Set(["title"])}),{onClick:()=>{(0,m.t)(I,H.onClick),(null==F?void 0:F.current)&&(null==C?void 0:C.current)&&(0,v.Z)(F.current,{scrollMode:"if-needed",behavior:"smooth",block:"end",inline:"end",boundary:null==C?void 0:C.current})}}),className:null==(r=k.tab)?void 0:r.call(k,{class:Y}),title:null==j?void 0:j.titleValue,type:"button"===O?"button":void 0,children:[E&&!A&&!M&&G?(0,g.jsx)(N.X,{features:D,children:(0,g.jsx)(L.m.span,{className:k.cursor({class:null==c?void 0:c.cursor}),"data-slot":"cursor",layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.5},...W})}):null,(0,g.jsx)("div",{className:k.tabContent({class:null==c?void 0:c.tabContent}),"data-slot":"tabContent",children:d.rendered})]})});W.displayName="NextUI.Tab";var A=r(67602),M=r(89261);function S(e,t){let{Component:r,values:a,state:l,destroyInactiveTabPanel:n,getBaseProps:s,getTabListProps:o,getWrapperProps:i}=(0,A.Y)({...e,ref:t}),d=(0,u.useId)(),c=!e.disableAnimation&&!e.disableCursorAnimation,b={state:l,listRef:a.listRef,slots:a.slots,classNames:a.classNames,isDisabled:a.isDisabled,motionProps:a.motionProps,disableAnimation:a.disableAnimation,shouldSelectOnPressUp:a.shouldSelectOnPressUp,disableCursorAnimation:a.disableCursorAnimation},f=[...l.collection].map(e=>(0,g.jsx)(W,{item:e,...b,...e.props},e.key)),h=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{...s(),children:(0,g.jsx)(r,{...o(),children:c?(0,g.jsx)(M.S,{id:d,children:f}):f})}),[...l.collection].map(e=>(0,g.jsx)(p,{classNames:a.classNames,destroyInactiveTabPanel:n,slots:a.slots,state:a.state,tabKey:e.key},e.key))]});return"placement"in e||"isVertical"in e?(0,g.jsx)("div",{...i(),children:h}):h}var I=(0,a.Gp)(S);S.displayName="NextUI.Tabs"},67602:function(e,t,r){r.d(t,{Y:function(){return N}});var a=r(12499),l=r(9710),n=r(40272),s=r(63179),o=r(33659),i=(0,s.tv)({slots:{base:"inline-flex",tabList:["flex","p-1","h-fit","gap-2","items-center","flex-nowrap","overflow-x-scroll","scrollbar-hide","bg-default-100"],tab:["z-0","w-full","px-3","py-1","flex","group","relative","justify-center","items-center","outline-none","cursor-pointer","transition-opacity","tap-highlight-transparent","data-[disabled=true]:cursor-not-allowed","data-[disabled=true]:opacity-30","data-[hover-unselected=true]:opacity-disabled",...o.Dh],tabContent:["relative","z-10","text-inherit","whitespace-nowrap","transition-colors","text-default-500","group-data-[selected=true]:text-foreground"],cursor:["absolute","z-0","bg-white"],panel:["py-3","px-1","outline-none","data-[inert=true]:hidden",...o.Dh],wrapper:[]},variants:{variant:{solid:{cursor:"inset-0"},light:{tabList:"bg-transparent dark:bg-transparent",cursor:"inset-0"},underlined:{tabList:"bg-transparent dark:bg-transparent",cursor:"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"},bordered:{tabList:"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",cursor:"inset-0"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{tabList:"rounded-medium",tab:"h-7 text-tiny rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"h-8 text-small rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"h-9 text-medium rounded-medium",cursor:"rounded-medium"}},radius:{none:{tabList:"rounded-none",tab:"rounded-none",cursor:"rounded-none"},sm:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"rounded-medium",cursor:"rounded-medium"},full:{tabList:"rounded-full",tab:"rounded-full",cursor:"rounded-full"}},fullWidth:{true:{base:"w-full",tabList:"w-full"}},isDisabled:{true:{tabList:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{tab:"transition-none",tabContent:"transition-none"}},placement:{top:{},start:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex"},end:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex flex-row-reverse"},bottom:{wrapper:"flex flex-col-reverse"}}},defaultVariants:{color:"default",variant:"solid",size:"md",fullWidth:!1,isDisabled:!1},compoundVariants:[{variant:["solid","bordered","light"],color:"default",class:{cursor:["bg-background","dark:bg-default","shadow-small"],tabContent:"group-data-[selected=true]:text-default-foreground"}},{variant:["solid","bordered","light"],color:"primary",class:{cursor:n.J.solid.primary,tabContent:"group-data-[selected=true]:text-primary-foreground"}},{variant:["solid","bordered","light"],color:"secondary",class:{cursor:n.J.solid.secondary,tabContent:"group-data-[selected=true]:text-secondary-foreground"}},{variant:["solid","bordered","light"],color:"success",class:{cursor:n.J.solid.success,tabContent:"group-data-[selected=true]:text-success-foreground"}},{variant:["solid","bordered","light"],color:"warning",class:{cursor:n.J.solid.warning,tabContent:"group-data-[selected=true]:text-warning-foreground"}},{variant:["solid","bordered","light"],color:"danger",class:{cursor:n.J.solid.danger,tabContent:"group-data-[selected=true]:text-danger-foreground"}},{variant:"underlined",color:"default",class:{cursor:"bg-foreground",tabContent:"group-data-[selected=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{cursor:"bg-primary",tabContent:"group-data-[selected=true]:text-primary"}},{variant:"underlined",color:"secondary",class:{cursor:"bg-secondary",tabContent:"group-data-[selected=true]:text-secondary"}},{variant:"underlined",color:"success",class:{cursor:"bg-success",tabContent:"group-data-[selected=true]:text-success"}},{variant:"underlined",color:"warning",class:{cursor:"bg-warning",tabContent:"group-data-[selected=true]:text-warning"}},{variant:"underlined",color:"danger",class:{cursor:"bg-danger",tabContent:"group-data-[selected=true]:text-danger"}},{disableAnimation:!0,variant:"underlined",class:{tab:["after:content-['']","after:absolute","after:bottom-0","after:h-[2px]","after:w-[80%]","after:opacity-0","after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","data-[selected=true]:after:opacity-100"]}},{disableAnimation:!0,color:"default",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"}},{disableAnimation:!0,color:"primary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"}},{disableAnimation:!0,color:"secondary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"}},{disableAnimation:!0,color:"success",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"}},{disableAnimation:!0,color:"warning",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"}},{disableAnimation:!0,color:"danger",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"}},{disableAnimation:!0,color:"default",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-foreground"}},{disableAnimation:!0,color:"primary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-primary"}},{disableAnimation:!0,color:"secondary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-secondary"}},{disableAnimation:!0,color:"success",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-success"}},{disableAnimation:!0,color:"warning",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-warning"}},{disableAnimation:!0,color:"danger",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-danger"}}],compoundSlots:[{variant:"underlined",slots:["tab","tabList","cursor"],class:["rounded-none"]}]}),d=r(88377),u=r(32094),c=r(6213),b=r(2680),g=r(59297),p=r(28900);function f(e,t){let r=null;if(e){for(r=e.getFirstKey();t.has(r)&&r!==e.getLastKey();)r=e.getKeyAfter(r);t.has(r)&&r===e.getLastKey()&&(r=e.getFirstKey())}return r}var h=r(76140);class m{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}isDisabled(e){var t,r;return this.disabledKeys.has(e)||!!(null===(r=this.collection.getItem(e))||void 0===r?void 0:null===(t=r.props)||void 0===t?void 0:t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return null!=e&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return null!=e&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do null==(e=this.collection.getKeyAfter(e))&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do null==(e=this.collection.getKeyBefore(e))&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,t,r,a=new Set){this.collection=e,this.flipDirection="rtl"===t&&"horizontal"===r,this.disabledKeys=a}}var v=r(88449),y=r(78706),x=r(98223),w=r(46380),K=r(54114);function N(e){var t,r,n;let s=(0,a.w)(),[o,N]=(0,l.oe)(e,i.variantKeys),{ref:C,as:k,className:D,classNames:L,children:P,disableCursorAnimation:W,motionProps:A,isVertical:M=!1,shouldSelectOnPressUp:S=!0,destroyInactiveTabPanel:I=!0,...j}=o,B=k||"div",F="string"==typeof B,O=(0,d.gy)(C),H=null!=(r=null!=(t=null==e?void 0:e.disableAnimation)?t:null==s?void 0:s.disableAnimation)&&r,E=function(e){var t;let r=(0,p.B)({...e,suppressTextValueWarning:!0,defaultSelectedKey:null!==(t=e.defaultSelectedKey)&&void 0!==t?t:f(e.collection,e.disabledKeys?new Set(e.disabledKeys):new Set)}),{selectionManager:a,collection:l,selectedKey:n}=r,s=(0,g.useRef)(n);return(0,g.useEffect)(()=>{let e=n;(a.isEmpty||!l.getItem(e))&&null!=(e=f(l,r.disabledKeys))&&a.setSelectedKeys([e]),(null==e||null!=a.focusedKey)&&(a.isFocused||e===s.current)||a.setFocusedKey(e),s.current=e}),{...r,isDisabled:e.isDisabled||!1}}({children:P,...j}),{tabListProps:R}=function(e,t,r){let{orientation:a="horizontal",keyboardActivation:l="automatic"}=e,{collection:n,selectionManager:s,disabledKeys:o}=t,{direction:i}=(0,w.j)(),d=(0,g.useMemo)(()=>new m(n,i,a,o),[n,o,a,i]),{collectionProps:u}=(0,K.g)({ref:r,selectionManager:s,keyboardDelegate:d,selectOnFocus:"automatic"===l,disallowEmptySelection:!0,scrollRef:r,linkBehavior:"selection"}),c=(0,v.Me)();(0,h.p).set(t,c);let b=(0,y.b)({...e,id:c});return{tabListProps:{...(0,x.d)(u,b),role:"tablist","aria-orientation":a,tabIndex:void 0}}}(j,E,O),_=(0,g.useMemo)(()=>i({...N,className:D,disableAnimation:H,...M?{placement:"start"}:{}}),[(0,u.Xx)(N),D,H,M]),z=(0,c.W)(null==L?void 0:L.base,D),T=(0,g.useMemo)(()=>({state:E,slots:_,classNames:L,motionProps:A,disableAnimation:H,listRef:O,shouldSelectOnPressUp:S,disableCursorAnimation:W,isDisabled:null==e?void 0:e.isDisabled}),[E,_,O,A,H,W,S,null==e?void 0:e.isDisabled,L]),V=(0,g.useCallback)(e=>({"data-slot":"base",className:_.base({class:(0,c.W)(z,null==e?void 0:e.className)}),...(0,x.d)((0,b.z)(j,{enabled:F}),e)}),[z,j,_]),U=null!=(n=N.placement)?n:M?"start":"top",J=(0,g.useCallback)(e=>({"data-slot":"tabWrapper",className:_.wrapper({class:(0,c.W)(null==L?void 0:L.wrapper,null==e?void 0:e.className)}),"data-placement":U,"data-vertical":M||"start"===U||"end"===U?"vertical":"horizontal"}),[L,_,U,M]),X=(0,g.useCallback)(e=>({ref:O,"data-slot":"tabList",className:_.tabList({class:(0,c.W)(null==L?void 0:L.tabList,null==e?void 0:e.className)}),...(0,x.d)(R,e)}),[O,R,L,_]);return{Component:B,domRef:O,state:E,values:T,destroyInactiveTabPanel:I,getBaseProps:V,getTabListProps:X,getWrapperProps:J}}},66224:function(e,t,r){r.d(t,{r:function(){return a}});var a=r(8345).c},76140:function(e,t,r){r.d(t,{O:function(){return l},p:function(){return a}});let a=new WeakMap;function l(e,t,r){"string"==typeof t&&(t=t.replace(/\s+/g,""));let l=a.get(e);return`${l}-${r}-${t}`}},44346:function(e,t,r){r.d(t,{Z:function(){return u}});let a=e=>"object"==typeof e&&null!=e&&1===e.nodeType,l=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,n=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return l(r.overflowY,t)||l(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},s=(e,t,r,a,l,n,s,o)=>n<e&&s>t||n>e&&s<t?0:n<=e&&o<=r||s>=t&&o>=r?n-e-a:s>t&&o<r||n<e&&o>r?s-t+l:0,o=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},i=(e,t)=>{var r,l,i,d;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:b,boundary:g,skipOverflowHiddenElements:p}=t,f="function"==typeof g?g:e=>e!==g;if(!a(e))throw TypeError("Invalid target");let h=document.scrollingElement||document.documentElement,m=[],v=e;for(;a(v)&&f(v);){if((v=o(v))===h){m.push(v);break}null!=v&&v===document.body&&n(v)&&!n(document.documentElement)||null!=v&&n(v,p)&&m.push(v)}let y=null!=(l=null==(r=window.visualViewport)?void 0:r.width)?l:innerWidth,x=null!=(d=null==(i=window.visualViewport)?void 0:i.height)?d:innerHeight,{scrollX:w,scrollY:K}=window,{height:N,width:C,top:k,right:D,bottom:L,left:P}=e.getBoundingClientRect(),{top:W,right:A,bottom:M,left:S}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),I="start"===c||"nearest"===c?k-W:"end"===c?L+M:k+N/2-W+M,j="center"===b?P+C/2-S+A:"end"===b?D+A:P-S,B=[];for(let e=0;e<m.length;e++){let t=m[e],{height:r,width:a,top:l,right:n,bottom:o,left:i}=t.getBoundingClientRect();if("if-needed"===u&&k>=0&&P>=0&&L<=x&&D<=y&&k>=l&&L<=o&&P>=i&&D<=n)break;let d=getComputedStyle(t),g=parseInt(d.borderLeftWidth,10),p=parseInt(d.borderTopWidth,10),f=parseInt(d.borderRightWidth,10),v=parseInt(d.borderBottomWidth,10),W=0,A=0,M="offsetWidth"in t?t.offsetWidth-t.clientWidth-g-f:0,S="offsetHeight"in t?t.offsetHeight-t.clientHeight-p-v:0,F="offsetWidth"in t?0===t.offsetWidth?0:a/t.offsetWidth:0,O="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(h===t)W="start"===c?I:"end"===c?I-x:"nearest"===c?s(K,K+x,x,p,v,K+I,K+I+N,N):I-x/2,A="start"===b?j:"center"===b?j-y/2:"end"===b?j-y:s(w,w+y,y,g,f,w+j,w+j+C,C),W=Math.max(0,W+K),A=Math.max(0,A+w);else{W="start"===c?I-l-p:"end"===c?I-o+v+S:"nearest"===c?s(l,o,r,p,v+S,I,I+N,N):I-(l+r/2)+S/2,A="start"===b?j-i-g:"center"===b?j-(i+a/2)+M/2:"end"===b?j-n+f+M:s(i,n,a,g,f+M,j,j+C,C);let{scrollLeft:e,scrollTop:d}=t;W=0===O?0:Math.max(0,Math.min(d+W/O,t.scrollHeight-r/O+S)),A=0===F?0:Math.max(0,Math.min(e+A/F,t.scrollWidth-a/F+M)),I+=d-W,j+=e-A}B.push({el:t,top:W,left:A})}return B},d=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function u(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(i(e,t));let r="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:a,top:l,left:n}of i(e,d(t)))a.scroll({top:l,left:n,behavior:r})}}}]);