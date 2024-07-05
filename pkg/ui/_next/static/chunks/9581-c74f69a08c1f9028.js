"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9581],{85432:function(e,a,s){s.d(a,{d:function(){return k}});var t=s(2523),n=s(97308),o=s(15346),r=s(36737),l=s(54344),i=s(496),d=s(51902),c=s(54163),u=s(3755),p=s(66189);class b extends u.Hg{add(e){let a;i.G.has(e)?(this.transforms.add(e),a="transform"):e.startsWith("origin")||(0,l.f)(e)||"willChange"===e||(a=(0,p.D)(e)),a&&((0,d.y4)(this.members,a),this.update())}remove(e){i.G.has(e)?(this.transforms.delete(e),this.transforms.size||(0,d.cl)(this.members,"transform")):(0,d.cl)(this.members,(0,p.D)(e)),this.update()}update(){this.set(this.members.length?this.members.join(", "):"auto")}constructor(){super(...arguments),this.members=[],this.transforms=new Set}}var v=s(97234),f=s(33444),h=s(56286),m=s(68887),g=s(68817),y=s(57348),x=(0,n.Gp)((e,a)=>{let{Component:s,HeadingComponent:n,classNames:l,slots:i,indicator:d,children:u,title:p,subtitle:x,startContent:w,isOpen:C,isDisabled:j,hideIndicator:J,keepContentMounted:k,disableAnimation:B,motionProps:P,getBaseProps:N,getHeadingProps:D,getButtonProps:I,getTitleProps:M,getSubtitleProps:E,getContentProps:S,getIndicatorProps:A}=(0,t.Z)({...e,ref:a}),z=(0,c.h)(()=>new b("auto")),K=(0,o.useMemo)(()=>"function"==typeof d?d({indicator:(0,y.jsx)(r.D,{}),isOpen:C,isDisabled:j}):d||null,[d,C,j])||(0,y.jsx)(r.D,{}),F=(0,o.useMemo)(()=>B?(0,y.jsx)("div",{...S(),children:u}):k?(0,y.jsx)(v.X,{features:f.H,children:(0,y.jsx)(h.m.section,{animate:C?"enter":"exit",exit:"exit",initial:"exit",style:{overflowY:"hidden",willChange:z},variants:g.y7.collapse,...P,children:(0,y.jsx)("div",{...S(),children:u})},"accordion-content")}):(0,y.jsx)(m.M,{initial:!1,children:C&&(0,y.jsx)(v.X,{features:f.H,children:(0,y.jsx)(h.m.section,{animate:"enter",exit:"exit",initial:"exit",style:{overflowY:"hidden",willChange:z},variants:g.y7.collapse,...P,children:(0,y.jsx)("div",{...S(),children:u})},"accordion-content")})}),[C,B,k,u,P]);return(0,y.jsxs)(s,{...N(),children:[(0,y.jsx)(n,{...D(),children:(0,y.jsxs)("button",{...I(),children:[w&&(0,y.jsx)("div",{className:i.startContent({class:null==l?void 0:l.startContent}),children:w}),(0,y.jsxs)("div",{className:i.titleWrapper({class:null==l?void 0:l.titleWrapper}),children:[p&&(0,y.jsx)("span",{...M(),children:p}),x&&(0,y.jsx)("span",{...E(),children:x})]}),!J&&K&&(0,y.jsx)("span",{...A(),children:K})]})}),F]})});x.displayName="NextUI.AccordionItem";var w=s(27357),C=s(35489),j=s(44217),J=(0,n.Gp)((e,a)=>{let{Component:s,values:t,state:n,isSplitted:r,showDivider:l,getBaseProps:i,disableAnimation:d,handleFocusChanged:c,itemClasses:u}=(0,w.A)({...e,ref:a}),p=(0,o.useCallback)((e,a)=>c(e,a),[c]),b=(0,o.useMemo)(()=>[...n.collection].map((e,a)=>{let s={...u,...e.props.classNames||{}};return(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(x,{item:e,onFocusChange:p,...t,...e.props,classNames:s}),!e.props.hidden&&!r&&l&&a<n.collection.size-1&&(0,y.jsx)(j.j,{})]},e.key)}),[t,u,p,r,l,n.collection]);return(0,y.jsx)(s,{...i(),children:d?b:(0,y.jsx)(C.S,{children:b})})});J.displayName="NextUI.Accordion";var k=J},2523:function(e,a,s){s.d(a,{Z:function(){return y}});var t=s(82451),n=s(93467),o=s(47596),r=s(89086),l=s(89707),i=s(76554),d=s(59485),c=s(83250),u=s(15346),p=s(31702),b=s(57815),v=s(99278),f=s(92313),h=s(91477),m=s(29325),g=s(11478);function y(e){var a,s;let y=(0,t.w)(),{ref:x,as:w,item:C,onFocusChange:j}=e,{state:J,className:k,indicator:B,children:P,title:N,subtitle:D,startContent:I,motionProps:M,focusedKey:E,isCompact:S=!1,classNames:A={},isDisabled:z=!1,hideIndicator:K=!1,disableAnimation:F=null!=(a=null==y?void 0:y.disableAnimation)&&a,keepContentMounted:W=!1,disableIndicatorAnimation:G=!1,HeadingComponent:V=w||"h2",onPress:O,onPressStart:U,onPressEnd:T,onPressChange:X,onPressUp:H,onClick:L,...R}=e,_=w||"div",Z="string"==typeof _,Y=(0,d.gy)(x),$=J.disabledKeys.has(C.key)||z,q=J.selectionManager.isSelected(C.key),{buttonProps:Q,regionProps:ee}=function(e,a,s){let{item:t,isDisabled:n}=e,o=t.key,r=a.selectionManager,l=(0,u.useId)(),i=(0,u.useId)(),d=a.disabledKeys.has(t.key)||n;(0,u.useEffect)(()=>{o===a.focusedKey&&document.activeElement!==s.current&&s.current&&(0,p.e)(s.current)},[s,o,a.focusedKey]);let c=(0,u.useCallback)(e=>{r.canSelectItem(o)&&(r.select(o,e),a.toggleKey(o))},[o,r]),m=(0,u.useCallback)(e=>{"replace"===r.selectionBehavior&&r.extendSelection(e),r.setFocusedKey(e)},[r]),{buttonProps:g}=function(e,a){let s,{elementType:t="button",isDisabled:n,onPress:o,onPressStart:r,onPressEnd:l,onPressUp:i,onPressChange:d,preventFocusOnPress:c,allowFocusWhenDisabled:u,onClick:p,href:m,target:g,rel:y,type:x="button"}=e;s="button"===t?{type:x,disabled:n}:{role:"button",tabIndex:n?void 0:0,href:"a"===t&&n?void 0:m,target:"a"===t?g:void 0,type:"input"===t?x:void 0,disabled:"input"===t?n:void 0,"aria-disabled":n&&"input"!==t?n:void 0,rel:"a"===t?y:void 0};let{pressProps:w,isPressed:C}=(0,h.r)({onPressStart:r,onPressEnd:l,onPressChange:d,onPress:o,onPressUp:i,isDisabled:n,preventFocusOnPress:c,ref:a}),{focusableProps:j}=(0,f.k)(e,a);u&&(j.tabIndex=n?-1:j.tabIndex);let J=(0,b.d)(j,w,(0,v.z)(e,{labelable:!0}));return{isPressed:C,buttonProps:(0,b.d)(s,J,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{p&&(p(e),console.warn("onClick is deprecated, please use onPress"))}})}}({id:l,elementType:"button",isDisabled:d,onKeyDown:(0,u.useCallback)(e=>{let s={ArrowDown:()=>{let e=a.collection.getKeyAfter(o);if(e&&a.disabledKeys.has(e)){let s=a.collection.getKeyAfter(e);s&&m(s)}else e&&m(e)},ArrowUp:()=>{let e=a.collection.getKeyBefore(o);if(e&&a.disabledKeys.has(e)){let s=a.collection.getKeyBefore(e);s&&m(s)}else e&&m(e)},Home:()=>{let e=a.collection.getFirstKey();e&&m(e)},End:()=>{let e=a.collection.getLastKey();e&&m(e)}}[e.key];s&&(e.preventDefault(),r.canSelectItem(o)&&s(e))},[o,r]),onPress:c},s),y=a.selectionManager.isSelected(t.key);return{buttonProps:{...g,"aria-expanded":y,"aria-controls":y?i:void 0},regionProps:{id:i,role:"region","aria-labelledby":l}}}({item:C,isDisabled:$},{...J,focusedKey:E},Y),{onFocus:ea,onBlur:es,...et}=Q,{isFocused:en,isFocusVisible:eo,focusProps:er}=(0,n.F)({autoFocus:null==(s=C.props)?void 0:s.autoFocus}),{isHovered:el,hoverProps:ei}=(0,g.X)({isDisabled:$}),{pressProps:ed,isPressed:ec}=(0,h.r)({ref:Y,isDisabled:$,onPress:O,onPressStart:U,onPressEnd:T,onPressChange:X,onPressUp:H}),eu=(0,u.useCallback)(()=>{null==j||j(!0,C.key)},[]),ep=(0,u.useCallback)(()=>{null==j||j(!1,C.key)},[]),eb=(0,u.useMemo)(()=>({...A}),[(0,r.Xx)(A)]),ev=(0,u.useMemo)(()=>(0,o.t)({isCompact:S,isDisabled:$,hideIndicator:K,disableAnimation:F,disableIndicatorAnimation:G}),[S,$,K,F,G]),ef=(0,l.W)(null==eb?void 0:eb.base,k),eh=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.base({class:ef}),...(0,b.d)((0,c.z)(R,{enabled:Z}),e)}},[ef,Z,R,ev,C.props,q,$]),em=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.content({class:null==eb?void 0:eb.content}),...(0,b.d)(ee,e)}},[ev,eb,ee,q,$,null==eb?void 0:eb.content]),eg=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"aria-hidden":(0,i.PB)(!0),"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.indicator({class:null==eb?void 0:eb.indicator}),...e}},[ev,null==eb?void 0:eb.indicator,q,$,null==eb?void 0:eb.indicator]),ey=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.heading({class:null==eb?void 0:eb.heading}),...e}},[ev,null==eb?void 0:eb.heading,q,$,null==eb?void 0:eb.heading]),ex=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.title({class:null==eb?void 0:eb.title}),...e}},[ev,null==eb?void 0:eb.title,q,$,null==eb?void 0:eb.title]),ew=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-open":(0,i.PB)(q),"data-disabled":(0,i.PB)($),className:ev.subtitle({class:null==eb?void 0:eb.subtitle}),...e}},[ev,eb,q,$,null==eb?void 0:eb.subtitle]);return{Component:_,HeadingComponent:V,item:C,slots:ev,classNames:eb,domRef:Y,indicator:B,children:P,title:N,subtitle:D,startContent:I,isOpen:q,isDisabled:$,hideIndicator:K,keepContentMounted:W,disableAnimation:F,motionProps:M,getBaseProps:eh,getHeadingProps:ey,getButtonProps:function(){var e,a;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:Y,"data-open":(0,i.PB)(q),"data-focus":(0,i.PB)(en),"data-focus-visible":(0,i.PB)(eo),"data-disabled":(0,i.PB)($),"data-hover":(0,i.PB)(el),"data-pressed":(0,i.PB)(ec),className:ev.trigger({class:null==eb?void 0:eb.trigger}),onFocus:(0,r.v0)(eu,ea,er.onFocus,R.onFocus,null==(e=C.props)?void 0:e.onFocus),onBlur:(0,r.v0)(ep,es,er.onBlur,R.onBlur,null==(a=C.props)?void 0:a.onBlur),...(0,b.d)(et,ei,ed,s,{onClick:(0,m.t)(ed.onClick,L)})}},getContentProps:em,getIndicatorProps:eg,getTitleProps:ex,getSubtitleProps:ew}}},13398:function(e,a,s){s.d(a,{G:function(){return t}});var t=s(36340).c},27357:function(e,a,s){s.d(a,{A:function(){return u}});var t=s(82451),n=s(83250),o=s(15346),r=s(75490),l=s(57815),i=s(47596),d=s(59485),c=s(29632);function u(e){var a;let s=(0,t.w)(),{ref:u,as:p,className:b,items:v,variant:f,motionProps:h,expandedKeys:m,disabledKeys:g,selectedKeys:y,children:x,defaultExpandedKeys:w,selectionMode:C="single",selectionBehavior:j="toggle",keepContentMounted:J=!1,disallowEmptySelection:k,defaultSelectedKeys:B,onExpandedChange:P,onSelectionChange:N,dividerProps:D={},isCompact:I=!1,isDisabled:M=!1,showDivider:E=!0,hideIndicator:S=!1,disableAnimation:A=null!=(a=null==s?void 0:s.disableAnimation)&&a,disableIndicatorAnimation:z=!1,itemClasses:K,...F}=e,[W,G]=(0,o.useState)(null),V=p||"div",O="string"==typeof V,U=(0,d.gy)(u),T=(0,o.useMemo)(()=>(0,i.T)({variant:f,className:b}),[f,b]),X={children:(0,o.useMemo)(()=>{let e=[];return o.Children.map(x,a=>{var s;if(o.isValidElement(a)&&"string"!=typeof(null==(s=a.props)?void 0:s.children)){let s=o.cloneElement(a,{hasChildItems:!1});e.push(s)}else e.push(a)}),e},[x]),items:v},H={expandedKeys:m,defaultExpandedKeys:w,onExpandedChange:P},L={disabledKeys:g,selectedKeys:y,selectionMode:C,selectionBehavior:j,disallowEmptySelection:k,defaultSelectedKeys:null!=B?B:w,onSelectionChange:N,...X,...H},R=(0,r.D)(L);R.selectionManager.setFocusedKey=e=>{G(e)};let{accordionProps:_}=function(e,a,s){let{listProps:t}=(0,c._)({...e,...a,allowsTabNavigation:!0,disallowSelectAll:!0,ref:s});return delete t.onKeyDownCapture,{accordionProps:{...t,tabIndex:void 0}}}({...X,...H},R,U);return{Component:V,values:(0,o.useMemo)(()=>({state:R,focusedKey:W,motionProps:h,isCompact:I,isDisabled:M,hideIndicator:S,disableAnimation:A,keepContentMounted:J,disableIndicatorAnimation:z}),[W,I,M,S,y,A,J,null==R?void 0:R.expandedKeys.values,z,R.expandedKeys.size,R.disabledKeys.size,h]),state:R,focusedKey:W,getBaseProps:(0,o.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:U,className:T,"data-orientation":"vertical",...(0,l.d)(_,(0,n.z)(F,{enabled:O}),e)}},[]),isSplitted:"splitted"===f,classNames:T,showDivider:E,dividerProps:D,disableAnimation:A,handleFocusChanged:(0,o.useCallback)((e,a)=>{e&&G(a)},[]),itemClasses:K}}},26151:function(e,a,s){s.d(a,{g:function(){return i}});var t=s(32449),n=s(21497),o=s(97308),r=s(57348),l=(0,o.Gp)((e,a)=>{let{Component:s,domRef:o,context:l,children:i,classNames:d,getButtonGroupProps:c}=(0,t.i)({...e,ref:a});return(0,r.jsx)(n.D,{value:l,children:(0,r.jsx)(s,{ref:o,className:d,...c(),children:i})})});l.displayName="NextUI.ButtonGroup";var i=l},32449:function(e,a,s){s.d(a,{i:function(){return d}});var t=s(82814),n=s(82451),o=s(97308),r=s(59485),l=s(15346),i=s(89086);function d(e){var a,s;let d=(0,n.w)(),[c,u]=(0,o.oe)(e,t.D.variantKeys),{ref:p,as:b,children:v,color:f="default",size:h="md",variant:m="solid",radius:g,isDisabled:y=!1,isIconOnly:x=!1,disableRipple:w=null!=(a=null==d?void 0:d.disableRipple)&&a,disableAnimation:C=null!=(s=null==d?void 0:d.disableAnimation)&&s,className:j,...J}=c,k=(0,r.gy)(p),B=(0,l.useMemo)(()=>(0,t.D)({...u,className:j}),[(0,i.Xx)(u),j]);return{Component:b||"div",children:v,domRef:k,context:(0,l.useMemo)(()=>({size:h,color:f,variant:m,radius:g,isIconOnly:x,isDisabled:y,disableAnimation:C,disableRipple:w,fullWidth:!!(null==e?void 0:e.fullWidth)}),[h,f,m,g,y,x,C,w,null==e?void 0:e.fullWidth]),classNames:B,getButtonGroupProps:(0,l.useCallback)(()=>({role:"group",...J}),[J])}}},71583:function(e,a,s){s.d(a,{G:function(){return d}});var t=s(93720),n=s(97308),o=s(59485),r=s(89707),l=s(57348),i=(0,n.Gp)((e,a)=>{var s;let{as:n,className:i,children:d,...c}=e,u=(0,o.gy)(a),{slots:p,classNames:b}=(0,t.R)(),v=(0,r.W)(null==b?void 0:b.body,i);return(0,l.jsx)(n||"div",{ref:u,className:null==(s=p.body)?void 0:s.call(p,{class:v}),...c,children:d})});i.displayName="NextUI.CardBody";var d=i},41223:function(e,a,s){s.d(a,{u:function(){return d}});var t=s(93720),n=s(97308),o=s(59485),r=s(89707),l=s(57348),i=(0,n.Gp)((e,a)=>{var s;let{as:n,className:i,children:d,...c}=e,u=(0,o.gy)(a),{slots:p,classNames:b}=(0,t.R)(),v=(0,r.W)(null==b?void 0:b.header,i);return(0,l.jsx)(n||"div",{ref:u,className:null==(s=p.header)?void 0:s.call(p,{class:v}),...c,children:d})});i.displayName="NextUI.CardHeader";var d=i},83140:function(e,a,s){s.d(a,{v:function(){return f}});var t=s(97308),n=s(57815),o=s(91477),r=s(93467),l=s(4975),i=s(97040),d=s(52963),c=(0,i.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...d.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:l.J.solid.default}},{variant:"solid",color:"primary",class:{base:l.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:l.J.solid.secondary}},{variant:"solid",color:"success",class:{base:l.J.solid.success}},{variant:"solid",color:"warning",class:{base:l.J.solid.warning}},{variant:"solid",color:"danger",class:{base:l.J.solid.danger}},{variant:"shadow",color:"default",class:{base:l.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:l.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:l.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:l.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:l.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:l.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:l.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:l.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:l.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:l.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:l.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:l.J.bordered.danger}},{variant:"flat",color:"default",class:{base:l.J.flat.default}},{variant:"flat",color:"primary",class:{base:l.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:l.J.flat.secondary}},{variant:"flat",color:"success",class:{base:l.J.flat.success}},{variant:"flat",color:"warning",class:{base:l.J.flat.warning}},{variant:"flat",color:"danger",class:{base:l.J.flat.danger}},{variant:"faded",color:"default",class:{base:l.J.faded.default}},{variant:"faded",color:"primary",class:{base:l.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:l.J.faded.secondary}},{variant:"faded",color:"success",class:{base:l.J.faded.success}},{variant:"faded",color:"warning",class:{base:l.J.faded.warning}},{variant:"faded",color:"danger",class:{base:l.J.faded.danger}},{variant:"light",color:"default",class:{base:l.J.light.default}},{variant:"light",color:"primary",class:{base:l.J.light.primary}},{variant:"light",color:"secondary",class:{base:l.J.light.secondary}},{variant:"light",color:"success",class:{base:l.J.light.success}},{variant:"light",color:"warning",class:{base:l.J.light.warning}},{variant:"light",color:"danger",class:{base:l.J.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),u=s(59485),p=s(89707),b=s(89086),v=s(15346);function f(e){let[a,s]=(0,t.oe)(e,c.variantKeys),{ref:l,as:i,children:d,avatar:f,startContent:h,endContent:m,onClose:g,classNames:y,className:x,...w}=a,C=(0,u.gy)(l),j=(0,p.W)(null==y?void 0:y.base,x),J=!!g,k="dot"===e.variant,{focusProps:B,isFocusVisible:P}=(0,r.F)(),N=(0,v.useMemo)(()=>"string"==typeof d&&(null==d?void 0:d.length)===1,[d]),D=(0,v.useMemo)(()=>!!f||!!h,[f,h]),I=(0,v.useMemo)(()=>!!m||J,[m,J]),M=(0,v.useMemo)(()=>c({...s,hasStartContent:D,hasEndContent:I,isOneChar:N,isCloseable:J,isCloseButtonFocusVisible:P}),[(0,b.Xx)(s),P,D,I,N,J]),{pressProps:E}=(0,o.r)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:g}),S=e=>(0,v.isValidElement)(e)?(0,v.cloneElement)(e,{className:(0,p.W)("max-h-[80%]",e.props.className)}):null;return{Component:i||"div",children:d,slots:M,classNames:y,isDot:k,isCloseable:J,startContent:((0,v.isValidElement)(f)?(0,v.cloneElement)(f,{className:M.avatar({class:null==y?void 0:y.avatar})}):null)||S(h),endContent:S(m),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:M.closeButton({class:null==y?void 0:y.closeButton}),...(0,n.d)(E,B)}),getChipProps:()=>({ref:C,className:M.base({class:j}),...w})}}},52053:function(e,a,s){s.d(a,{z:function(){return d}});var t=s(83140),n=s(34311),o=s(97308),r=s(15346),l=s(57348),i=(0,o.Gp)((e,a)=>{let{Component:s,children:o,slots:i,classNames:d,isDot:c,isCloseable:u,startContent:p,endContent:b,getCloseButtonProps:v,getChipProps:f}=(0,t.v)({...e,ref:a}),h=(0,r.useMemo)(()=>c&&!p?(0,l.jsx)("span",{className:i.dot({class:null==d?void 0:d.dot})}):p,[i,p,c]),m=(0,r.useMemo)(()=>u?(0,l.jsx)("span",{...v(),children:b||(0,l.jsx)(n.f,{})}):b,[b,u,v]);return(0,l.jsxs)(s,{...f(),children:[h,(0,l.jsx)("span",{className:i.content({class:null==d?void 0:d.content}),children:o}),m]})});i.displayName="NextUI.Chip";var d=i},36737:function(e,a,s){s.d(a,{D:function(){return n}});var t=s(57348),n=e=>(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,t.jsx)("path",{d:"M15.5 19l-7-7 7-7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})})},30422:function(e,a,s){s.d(a,{Z:function(){return b}});var t=s(31709),n=s(15346),o=s(97308),r=s(81015),l=s(57348),i=e=>(0,l.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,l.jsx)("path",{d:"M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"}),(0,l.jsx)("path",{d:"M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"}),(0,l.jsx)("path",{d:"M16 12.9C16 9.4 14.6 8 11.1 8"})]}),d=e=>(0,l.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,l.jsx)("polyline",{points:"20 6 9 17 4 12"})}),c=s(67425),u=s(89086),p=(0,o.Gp)((e,a)=>{let{Component:s,domRef:o,preRef:p,children:b,slots:v,classNames:f,copied:h,copyIcon:m=(0,l.jsx)(i,{}),checkIcon:g=(0,l.jsx)(d,{}),symbolBefore:y,disableCopy:x,disableTooltip:w,hideSymbol:C,hideCopyButton:j,tooltipProps:J,isMultiLine:k,onCopy:B,getSnippetProps:P,getCopyButtonProps:N}=(0,t.c)({...e,ref:a}),D=(0,n.useCallback)(e=>{let{children:a}=e;return(0,l.jsx)(r.e,{...J,isDisabled:h||J.isDisabled,children:a})},[(0,u.Xx)(J)]),I=(0,n.useMemo)(()=>{if(j)return null;let e=g&&(0,n.cloneElement)(g,{className:v.checkIcon()}),a=m&&(0,n.cloneElement)(m,{className:v.copyIcon()}),s=(0,l.jsxs)(c.A,{...N(),children:[e,a]});return w?s:(0,l.jsx)(D,{children:s})},[v,null==f?void 0:f.copyButton,h,g,m,B,D,x,w,j]),M=(0,n.useMemo)(()=>k&&b&&Array.isArray(b)?(0,l.jsx)("div",{className:v.content({class:null==f?void 0:f.content}),children:b.map((e,a)=>(0,l.jsxs)("pre",{className:v.pre({class:null==f?void 0:f.pre}),children:[!C&&(0,l.jsx)("span",{className:v.symbol({class:null==f?void 0:f.symbol}),children:y}),e]},"".concat(a,"-").concat(e)))}):(0,l.jsxs)("pre",{ref:p,className:v.pre({class:null==f?void 0:f.pre}),children:[!C&&(0,l.jsx)("span",{className:v.symbol({class:null==f?void 0:f.symbol}),children:y}),b]}),[b,C,k,y,null==f?void 0:f.pre,v]);return(0,l.jsxs)(s,{ref:o,...P(),children:[M,I]})});p.displayName="NextUI.Snippet";var b=p},31709:function(e,a,s){s.d(a,{c:function(){return v}});var t=s(4975),n=(0,s(97040).tv)({slots:{base:"inline-flex items-center justify-between h-fit rounded-large gap-2",pre:"bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",content:"flex flex-col",symbol:"select-none",copyButton:["group","relative","z-10","text-large","text-inherit","data-[hover=true]:bg-transparent"],copyIcon:["absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50"],checkIcon:["absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100"]},variants:{variant:{flat:"",solid:"",bordered:"border-medium bg-transparent",shadow:""},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{base:"px-1.5 py-0.5 text-tiny rounded-small"},md:{base:"px-3 py-1.5 text-small rounded-medium"},lg:{base:"px-4 py-2 text-medium rounded-large"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},fullWidth:{true:{base:"w-full"}},disableAnimation:{true:{},false:{copyIcon:"transition-transform-opacity",checkIcon:"transition-transform-opacity"}}},defaultVariants:{color:"default",variant:"flat",size:"md",fullWidth:!1},compoundVariants:[{variant:["solid","shadow"],color:"default",class:{copyButton:"data-[focus-visible]:outline-default-foreground"}},{variant:["solid","shadow"],color:"primary",class:{copyButton:"data-[focus-visible]:outline-primary-foreground"}},{variant:["solid","shadow"],color:"secondary",class:{copyButton:"data-[focus-visible]:outline-secondary-foreground"}},{variant:["solid","shadow"],color:"success",class:{copyButton:"data-[focus-visible]:outline-success-foreground"}},{variant:["solid","shadow"],color:"warning",class:{copyButton:"data-[focus-visible]:outline-warning-foreground"}},{variant:["solid","shadow"],color:"danger",class:{copyButton:"data-[focus-visible]:outline-danger-foreground"}},{variant:"flat",color:"default",class:{base:t.J.flat.default}},{variant:"flat",color:"primary",class:{base:t.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:t.J.flat.secondary}},{variant:"flat",color:"success",class:{base:t.J.flat.success}},{variant:"flat",color:"warning",class:{base:t.J.flat.warning}},{variant:"flat",color:"danger",class:{base:t.J.flat.danger}},{variant:"solid",color:"default",class:{base:t.J.solid.default}},{variant:"solid",color:"primary",class:{base:t.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:t.J.solid.secondary}},{variant:"solid",color:"success",class:{base:t.J.solid.success}},{variant:"solid",color:"warning",class:{base:t.J.solid.warning}},{variant:"solid",color:"danger",class:{base:t.J.solid.danger}},{variant:"shadow",color:"default",class:{base:t.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:t.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:t.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:t.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:t.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:t.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:t.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:t.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:t.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:t.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:t.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:t.J.bordered.danger}}]}),o=s(82451),r=s(97308),l=s(59485),i=s(83250),d=s(89086),c=s(89707),u=s(76554),p=s(15346),b=s(93467);function v(e){var a,s,t,v;let f=(0,o.w)(),[h,m]=(0,r.oe)(e,n.variantKeys),{ref:g,as:y,children:x,symbol:w="$",classNames:C,timeout:j,copyIcon:J,checkIcon:k,codeString:B,disableCopy:P=!1,disableTooltip:N=!1,hideCopyButton:D=!1,autoFocus:I=!1,hideSymbol:M=!1,onCopy:E,tooltipProps:S={},copyButtonProps:A={},className:z,...K}=h,F=y||"div",W="string"==typeof F,G=null!=(s=null!=(a=null==e?void 0:e.disableAnimation)?a:null==f?void 0:f.disableAnimation)&&s,V={offset:15,delay:1e3,content:"Copy to clipboard",color:null!=(v=null==e?void 0:e.color)?v:null==(t=n.defaultVariants)?void 0:t.color,isDisabled:h.disableCopy,...S},O=(0,l.gy)(g),U=(0,p.useRef)(null),{copy:T,copied:X}=function(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[a,s]=(0,p.useState)(null),[t,n]=(0,p.useState)(!1),[o,r]=(0,p.useState)(null),l=()=>{o&&clearTimeout(o)},i=a=>{l(),r(setTimeout(()=>n(!1),e)),n(a)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>i(!0)).catch(e=>s(e)):s(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{n(!1),s(null),l()},error:a,copied:t}}({timeout:j}),H=x&&Array.isArray(x),{isFocusVisible:L,isFocused:R,focusProps:_}=(0,b.F)({autoFocus:I}),Z=(0,p.useMemo)(()=>n({...m,disableAnimation:G}),[(0,d.Xx)(m),G]),Y=(0,p.useMemo)(()=>{if(!w||"string"!=typeof w)return w;let e=w.trim();return e?"".concat(e," "):""},[w]),$=(0,c.W)(null==C?void 0:C.base,z),q=(0,p.useCallback)(()=>({className:Z.base({class:$}),...(0,i.z)(K,{enabled:W})}),[Z,$,H,K]),Q=(0,p.useCallback)(()=>{var e;if(P)return;let a="";"string"==typeof x?a=x:Array.isArray(x)&&x.forEach(e=>{var s,t;let n="string"==typeof e?e:null==(t=null==(s=null==e?void 0:e.props)?void 0:s.children)?void 0:t.toString();n&&(a+=n+"\n")});let s=B||a||(null==(e=U.current)?void 0:e.textContent)||"";T(s),null==E||E(s)},[T,B,P,E,x]),ee={"aria-label":"string"==typeof V.content?V.content:"Copy to clipboard",size:"sm",variant:"light",isDisabled:P,onPress:Q,isIconOnly:!0,...A},ea=(0,p.useCallback)(()=>({...ee,"data-copied":(0,u.PB)(X),className:Z.copyButton({class:(0,c.W)(null==C?void 0:C.copyButton)})}),[Z,L,R,P,null==C?void 0:C.copyButton,ee,_]);return{Component:F,as:y,domRef:O,preRef:U,children:x,slots:Z,classNames:C,copied:X,onCopy:Q,copyIcon:J,checkIcon:k,symbolBefore:Y,isMultiLine:H,isFocusVisible:L,hideCopyButton:D,disableCopy:P,disableTooltip:N,hideSymbol:M,tooltipProps:V,getSnippetProps:q,getCopyButtonProps:ea}}},47596:function(e,a,s){s.d(a,{T:function(){return o},t:function(){return r}});var t=s(97040),n=s(52963),o=(0,t.tv)({base:"px-2",variants:{variant:{light:"",shadow:"px-4 shadow-medium rounded-medium bg-content1",bordered:"px-4 border-medium border-divider rounded-medium",splitted:"group is-splitted flex flex-col gap-2"},fullWidth:{true:"w-full"}},defaultVariants:{variant:"light",fullWidth:!0}}),r=(0,t.tv)({slots:{base:["group-[.is-splitted]:px-4","group-[.is-splitted]:bg-content1","group-[.is-splitted]:shadow-medium","group-[.is-splitted]:rounded-medium"],heading:"",trigger:["flex py-4 w-full h-full gap-3 outline-none items-center tap-highlight-transparent",...n.Dh],startContent:"flex-shrink-0",indicator:"text-default-400",titleWrapper:"flex-1 flex flex-col text-start",title:"text-foreground text-large",subtitle:"text-small text-foreground-500 font-normal",content:"py-2"},variants:{isCompact:{true:{trigger:"py-2",title:"text-medium",subtitle:"text-small",indicator:"text-medium",content:"py-1"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},hideIndicator:{true:{indicator:"hidden"}},disableAnimation:{true:{content:"hidden data-[open=true]:block"},false:{indicator:"transition-transform",trigger:"transition-opacity"}},disableIndicatorAnimation:{true:{indicator:"transition-none"},false:{indicator:"rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"}}},defaultVariants:{size:"md",radius:"lg",isDisabled:!1,hideIndicator:!1,disableIndicatorAnimation:!1}})},87840:function(e,a,s){s.d(a,{E:function(){return u}});var t=s(672),n=s(44291),o=s(12048),r=s(91376),l=s(10696),i=s(74941),d=s(96081);let c={...r.s,...o.E,...l.o,...d.b},u=(0,t.D)((e,a)=>(0,n.w)(e,a,c,i.b))}}]);