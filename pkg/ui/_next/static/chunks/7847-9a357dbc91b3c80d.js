"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7847],{66881:function(e,t,r){let a;r.d(t,{J:function(){return n}});let u=Symbol.for("react-aria.i18n.locale"),s=Symbol.for("react-aria.i18n.strings");class n{getStringForLocale(e,t){let r=this.getStringsForLocale(t)[e];if(!r)throw Error(`Could not find intl message ${e} in ${t} locale`);return r}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,r="en-US"){if(t[e])return t[e];let a=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[a])return t[a];for(let e in t)if(e.startsWith(a+"-"))return t[e];return t[r]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[u];if(void 0===a){let e=window[s];if(!e)return null;for(let r in a={},e)a[r]=new n({[t]:e[r]},t)}let r=null==a?void 0:a[e];if(!r)throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return r}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,e])=>e)),this.defaultLocale=t}}},64733:function(e,t,r){r.d(t,{E:function(){return s}});let a=new Map,u=new Map;class s{format(e,t){let r=this.strings.getStringForLocale(e,this.locale);return"function"==typeof r?r(t,this):r}plural(e,t,r="cardinal"){let u=t["="+e];if(u)return"function"==typeof u?u():u;let s=this.locale+":"+r,n=a.get(s);return n||(n=new Intl.PluralRules(this.locale,{type:r}),a.set(s,n)),"function"==typeof(u=t[n.select(e)]||t.other)?u():u}number(e){let t=u.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),u.set(this.locale,t)),t.format(e)}select(e,t){let r=e[t]||e.other;return"function"==typeof r?r():r}constructor(e,t){this.locale=e,this.strings=t}}},45281:function(e,t,r){r.d(t,{J:function(){return a}});var a=(e,t,r)=>{let a=null==t?void 0:t.current;if(!a||!a.contains(e)){let e=document.querySelectorAll("body > span[data-focus-scope-start]"),t=[];if(e.forEach(e=>{t.push(e.nextElementSibling)}),1===t.length)return r.close(),!1}return!a||!a.contains(e)}},65414:function(e,t,r){r.d(t,{S:function(){return D}});var a=r(82581),u=r(39725),s=r(73857),n=r(45281),o=r(81554),l=new WeakMap,i=[],d=r(31473),c=r(20984),f=r(45899),g=r(67084),p=r(97811),b=r(34716),v=r(57350),h=r(1116),m=r(38197),y=r(10688),x=r(22597),E=r(2739),P=r(46855),w=r(37630);function D(e){var t,r,D;let A=(0,h.w)(),[C,k]=(0,m.oe)(e,y.v.variantKeys),{as:B,ref:S,children:T,state:F,triggerRef:M,scrollRef:L,defaultOpen:N,onOpenChange:R,isOpen:O,isNonModal:I=!0,shouldFlip:j=!0,containerPadding:K=12,shouldBlockScroll:z=!1,isDismissable:_=!0,shouldCloseOnBlur:W,portalContainer:U,updatePositionDeps:G,dialogProps:H,placement:J="top",triggerType:q="dialog",showArrow:V=!1,offset:Z=7,crossOffset:$=0,boundaryElement:Y,isKeyboardDismissDisabled:X,shouldCloseOnInteractOutside:Q,motionProps:ee,className:et,classNames:er,onClose:ea,...eu}=C,es=(0,f.gy)(S),en=(0,a.useRef)(null),eo=(0,a.useRef)(!1),el=M||en,ei=null!=(r=null!=(t=e.disableAnimation)?t:null==A?void 0:A.disableAnimation)&&r,ed=(0,g.d)({isOpen:O,defaultOpen:N,onOpenChange:e=>{null==R||R(e),e||null==ea||ea()}}),ec=F||ed,{popoverProps:ef,underlayProps:eg,placement:ep}=function(e,t){let{triggerRef:r,popoverRef:f,showArrow:g,offset:p=7,crossOffset:b=0,scrollRef:v,shouldFlip:h,boundaryElement:m,isDismissable:y=!0,shouldCloseOnBlur:x=!0,placement:E="top",containerPadding:P,shouldCloseOnInteractOutside:w,isNonModal:D,isKeyboardDismissDisabled:A,updatePositionDeps:C=[],...k}=e,B=null==D||D,{overlayProps:S,underlayProps:T}=(0,u.I)({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:x,isDismissable:y,isKeyboardDismissDisabled:A,shouldCloseOnInteractOutside:w||(e=>(0,n.J)(e,r,t))},f),{overlayProps:F,arrowProps:M,placement:L,updatePosition:N}=(0,s.t)({...k,shouldFlip:h,crossOffset:b,targetRef:r,overlayRef:f,isOpen:t.isOpen,scrollRef:v,boundaryElement:m,containerPadding:P,placement:(0,o.Yx)(E),offset:g?p+3:p,onClose:()=>{}});return(0,c.G)(()=>{C.length&&N()},C),(0,a.useEffect)(()=>{if(t.isOpen&&!B&&f.current)return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r=new Set(e),a=new Set,u=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(t);let t=e=>{let t=e.parentElement;if(r.has(e)||a.has(t)&&"row"!==t.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of r)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},u=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),n=t(e);if(n===NodeFilter.FILTER_ACCEPT&&s(e),n!==NodeFilter.FILTER_REJECT){let e=u.nextNode();for(;null!=e;)s(e),e=u.nextNode()}},s=e=>{var t;let r=null!=(t=l.get(e))?t:0;("true"!==e.getAttribute("aria-hidden")||0!==r)&&(0===r&&e.setAttribute("aria-hidden","true"),a.add(e),l.set(e,r+1))};i.length&&i[i.length-1].disconnect(),u(t);let n=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...r,...a].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(r.delete(e),a.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?r.add(e):e instanceof Element&&u(e)}});n.observe(t,{childList:!0,subtree:!0});let o={observe(){n.observe(t,{childList:!0,subtree:!0})},disconnect(){n.disconnect()}};return i.push(o),()=>{for(let e of(n.disconnect(),a)){let t=l.get(e);null!=t&&(1===t?(e.removeAttribute("aria-hidden"),l.delete(e)):l.set(e,t-1))}o===i[i.length-1]?(i.pop(),i.length&&i[i.length-1].observe()):i.splice(i.indexOf(o),1)}}([f.current])},[B,t.isOpen,f]),{popoverProps:(0,d.d)(S,F),arrowProps:M,underlayProps:T,placement:L}}({triggerRef:el,isNonModal:I,popoverRef:es,placement:J,offset:Z,scrollRef:L,isDismissable:_,shouldCloseOnBlur:W,boundaryElement:Y,crossOffset:$,shouldFlip:j,containerPadding:K,updatePositionDeps:G,isKeyboardDismissDisabled:X,shouldCloseOnInteractOutside:Q},ec),{triggerProps:eb}=(0,b.I)({type:q},ec,el),{isFocusVisible:ev,isFocused:eh,focusProps:em}=(0,p.F)(),ey=(0,a.useMemo)(()=>(0,y.v)({...k}),[(0,E.Xx)(k)]),ex=(0,P.W)(null==er?void 0:er.base,et),eE=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"content","data-open":(0,w.PB)(ec.isOpen),"data-arrow":(0,w.PB)(V),"data-placement":(0,o.sK)(ep,J),className:ey.content({class:(0,P.W)(null==er?void 0:er.content,e.className)})}},[ey,ec.isOpen,V,ep,J,er]),eP=(0,a.useMemo)(()=>(0,o.Yv)(ep,J)&&ep||J,[ep,J]),ew=(0,a.useCallback)(t=>{var r;let a;return"touch"===t.pointerType&&((null==e?void 0:e.backdrop)==="blur"||(null==e?void 0:e.backdrop)==="opaque")?a=setTimeout(()=>{eo.current=!0},100):eo.current=!0,null==(r=eb.onPress)||r.call(eb,t),()=>{clearTimeout(a)}},[null==eb?void 0:eb.onPress]),eD=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{isDisabled:r,...a}=e;return{"data-slot":"trigger","aria-haspopup":"dialog",...(0,d.d)(eb,a),onPress:ew,isDisabled:r,className:ey.trigger({class:(0,P.W)(null==er?void 0:er.trigger,e.className),isTriggerDisabled:r}),ref:(0,x.l)(t,el)}},[ec,eb,ew,el]),eA=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"backdrop",className:ey.backdrop({class:null==er?void 0:er.backdrop}),onClick:e=>{if(!eo.current){e.preventDefault();return}ec.close(),eo.current=!1},...eg,...e}},[ey,ec.isOpen,er,eg]);return(0,a.useEffect)(()=>{if(ec.isOpen&&(null==es?void 0:es.current))return(0,v.R)([null==es?void 0:es.current])},[ec.isOpen,es]),{state:ec,Component:B||"div",children:T,classNames:er,showArrow:V,triggerRef:el,placement:eP,isNonModal:I,popoverRef:es,portalContainer:U,isOpen:ec.isOpen,onClose:ec.close,disableAnimation:ei,shouldBlockScroll:z,backdrop:null!=(D=e.backdrop)?D:"transparent",motionProps:ee,getBackdropProps:eA,getPopoverProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:es,...(0,d.d)(ef,eu,e),style:(0,d.d)(ef.style,eu.style,e.style)}},getTriggerProps:eD,getDialogProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"base","data-open":(0,w.PB)(ec.isOpen),"data-focus":(0,w.PB)(eh),"data-arrow":(0,w.PB)(V),"data-focus-visible":(0,w.PB)(ev),"data-placement":(0,o.sK)(ep,J),...(0,d.d)(em,H,e),className:ey.base({class:(0,P.W)(ex)}),style:{outline:"none"}}},getContentProps:eE}}},49604:function(e,t,r){r.d(t,{D9:function(){return n},Dk:function(){return o},GI:function(){return s}});var a=r(42871),u=r(7493),s=(0,a.tv)({slots:{base:"w-full relative flex flex-col gap-1 p-1",list:"w-full flex flex-col gap-0.5 outline-none",emptyContent:["h-10","px-2","py-1.5","w-full","h-full","text-foreground-400","text-start"]}}),n=(0,a.tv)({slots:{base:["flex","group","gap-2","items-center","justify-between","relative","px-2","py-1.5","w-full","h-full","box-border","rounded-small","subpixel-antialiased","outline-none","cursor-pointer","tap-highlight-transparent",...u.Dh,"data-[focus-visible=true]:dark:ring-offset-background-content1"],wrapper:"w-full flex flex-col items-start justify-center",title:"flex-1 text-small font-normal truncate",description:["w-full","text-tiny","text-foreground-500","group-hover:text-current"],selectedIcon:["text-inherit","w-3","h-3","flex-shrink-0"],shortcut:["px-1","py-0.5","rounded","font-sans","text-foreground-500","text-tiny","border-small","border-default-300","group-hover:border-current"]},variants:{variant:{solid:{base:""},bordered:{base:"border-medium border-transparent bg-transparent"},light:{base:"bg-transparent"},faded:{base:["border-small border-transparent hover:border-default data-[hover=true]:bg-default-100","data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100"]},flat:{base:""},shadow:{base:"data-[hover=true]:shadow-lg"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},showDivider:{true:{base:["mb-1.5","after:content-['']","after:absolute","after:-bottom-1","after:left-0","after:right-0","after:h-divider","after:bg-divider"]},false:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{},false:{base:"data-[hover=true]:transition-colors"}}},defaultVariants:{variant:"solid",color:"default",showDivider:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:["data-[hover=true]:bg-default","data-[hover=true]:text-default-foreground","data-[selectable=true]:focus:bg-default","data-[selectable=true]:focus:text-default-foreground"]}},{variant:"solid",color:"primary",class:{base:["data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground","data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground"]}},{variant:"solid",color:"secondary",class:{base:["data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground","data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground"]}},{variant:"solid",color:"success",class:{base:["data-[hover=true]:bg-success data-[hover=true]:text-success-foreground","data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground"]}},{variant:"solid",color:"warning",class:{base:["data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground","data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground"]}},{variant:"solid",color:"danger",class:{base:["data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground","data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground"]}},{variant:"shadow",color:"default",class:{base:["data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground","data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground"]}},{variant:"shadow",color:"primary",class:{base:["data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground","data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground"]}},{variant:"shadow",color:"secondary",class:{base:["data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground","data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground"]}},{variant:"shadow",color:"success",class:{base:["data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground","data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground"]}},{variant:"shadow",color:"warning",class:{base:["data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground","data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground"]}},{variant:"shadow",color:"danger",class:{base:["data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground","data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground"]}},{variant:"bordered",color:"default",class:{base:["data-[hover=true]:border-default","data-[selectable=true]:focus:border-default"]}},{variant:"bordered",color:"primary",class:{base:["data-[hover=true]:border-primary data-[hover=true]:text-primary","data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary"]}},{variant:"bordered",color:"secondary",class:{base:["data-[hover=true]:border-secondary data-[hover=true]:text-secondary","data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary"]}},{variant:"bordered",color:"success",class:{base:["data-[hover=true]:border-success data-[hover=true]:text-success","data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success"]}},{variant:"bordered",color:"warning",class:{base:["data-[hover=true]:border-warning data-[hover=true]:text-warning","data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning"]}},{variant:"bordered",color:"danger",class:{base:["data-[hover=true]:border-danger data-[hover=true]:text-danger","data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger"]}},{variant:"flat",color:"default",class:{base:["data-[hover=true]:bg-default/40","data-[hover=true]:text-default-foreground","data-[selectable=true]:focus:bg-default/40","data-[selectable=true]:focus:text-default-foreground"]}},{variant:"flat",color:"primary",class:{base:["data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary","data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary"]}},{variant:"flat",color:"secondary",class:{base:["data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary","data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary"]}},{variant:"flat",color:"success",class:{base:["data-[hover=true]:bg-success/20 data-[hover=true]:text-success","data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success"]}},{variant:"flat",color:"warning",class:{base:["data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning","data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning"]}},{variant:"flat",color:"danger",class:{base:["data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger","data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger"]}},{variant:"faded",color:"default",class:{base:["data-[hover=true]:text-default-foreground","data-[selectable=true]:focus:text-default-foreground"]}},{variant:"faded",color:"primary",class:{base:["data-[hover=true]:text-primary","data-[selectable=true]:focus:text-primary"]}},{variant:"faded",color:"secondary",class:{base:["data-[hover=true]:text-secondary","data-[selectable=true]:focus:text-secondary"]}},{variant:"faded",color:"success",class:{base:["data-[hover=true]:text-success","data-[selectable=true]:focus:text-success"]}},{variant:"faded",color:"warning",class:{base:["data-[hover=true]:text-warning","data-[selectable=true]:focus:text-warning"]}},{variant:"faded",color:"danger",class:{base:["data-[hover=true]:text-danger","data-[selectable=true]:focus:text-danger"]}},{variant:"light",color:"default",class:{base:["data-[hover=true]:text-default-500","data-[selectable=true]:focus:text-default-500"]}},{variant:"light",color:"primary",class:{base:["data-[hover=true]:text-primary","data-[selectable=true]:focus:text-primary"]}},{variant:"light",color:"secondary",class:{base:["data-[hover=true]:text-secondary","data-[selectable=true]:focus:text-secondary"]}},{variant:"light",color:"success",class:{base:["data-[hover=true]:text-success","data-[selectable=true]:focus:text-success"]}},{variant:"light",color:"warning",class:{base:["data-[hover=true]:text-warning","data-[selectable=true]:focus:text-warning"]}},{variant:"light",color:"danger",class:{base:["data-[hover=true]:text-danger","data-[selectable=true]:focus:text-danger"]}}]}),o=(0,a.tv)({slots:{base:"relative mb-2",heading:"pl-1 text-tiny text-foreground-500",group:"data-[has-title=true]:pt-1",divider:"mt-2"}})},82565:function(e,t,r){r.d(t,{d:function(){return u}});var a=r(68063);function u(){return!(0,a.Av)()&&"undefined"!=typeof window&&window.screen.width<=700}},12405:function(e,t,r){r.d(t,{R:function(){return l}});var a=r(74528),u=r(66725),s=r(34476),n=r(82581),o=r(67875);function l(e,t){let{role:r="dialog"}=e,l=(0,a.mp)();l=e["aria-label"]?void 0:l;let i=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){(0,s.e)(t.current);let e=setTimeout(()=>{document.activeElement===t.current&&(i.current=!0,t.current&&(t.current.blur(),(0,s.e)(t.current)),i.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),(0,o.Bq)(),{dialogProps:{...(0,u.z)(e,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||l,onBlur:e=>{i.current&&e.stopPropagation()}},titleProps:{id:l}}}},33866:function(e,t,r){r.d(t,{K:function(){return l},q:function(){return i}});var a=r(86616),u=r(66881),s=r(64733),n=r(82581);let o=new WeakMap;function l(e,t){let r;return t&&(0,u.J).getGlobalDictionaryForPackage(t)||((r=o.get(e))||(r=new u.J(e),o.set(e,r)),r)}function i(e,t){let{locale:r}=(0,a.j)(),u=l(e,t);return(0,n.useMemo)(()=>new s.E(r,u),[r,u])}},38321:function(e,t,r){r.d(t,{T:function(){return l}});var a=r(13150),u=r(32419),s=r(11263),n=r(31473),o=r(82581);function l(e){let{isDisabled:t,onLongPressStart:r,onLongPressEnd:l,onLongPress:i,threshold:d=500,accessibilityDescription:c}=e,f=(0,o.useRef)(),{addGlobalListener:g,removeGlobalListener:p}=(0,u.x)(),{pressProps:b}=(0,a.r)({isDisabled:t,onPressStart(e){if(e.continuePropagation(),("mouse"===e.pointerType||"touch"===e.pointerType)&&(r&&r({...e,type:"longpressstart"}),f.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),i&&i({...e,type:"longpress"}),f.current=void 0},d),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};g(e.target,"contextmenu",t,{once:!0}),g(window,"pointerup",()=>{setTimeout(()=>{p(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){f.current&&clearTimeout(f.current),l&&("mouse"===e.pointerType||"touch"===e.pointerType)&&l({...e,type:"longpressend"})}}),v=(0,s.P)(i&&!t?c:void 0);return{longPressProps:(0,n.d)(b,v)}}},73630:function(e,t,r){r.d(t,{u:function(){return l}});var a={};a={"ar-AE":{longPressMessage:`\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`},"bg-BG":{longPressMessage:`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`},"cs-CZ":{longPressMessage:`Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`},"da-DK":{longPressMessage:`Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`},"de-DE":{longPressMessage:`Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`},"el-GR":{longPressMessage:`\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`},"en-US":{longPressMessage:"Long press or press Alt + ArrowDown to open menu"},"es-ES":{longPressMessage:`Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`},"et-EE":{longPressMessage:`Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`},"fi-FI":{longPressMessage:`Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`},"fr-FR":{longPressMessage:`Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`},"he-IL":{longPressMessage:`\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`},"hr-HR":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"},"hu-HU":{longPressMessage:`Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`},"it-IT":{longPressMessage:`Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`},"ja-JP":{longPressMessage:`\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`},"ko-KR":{longPressMessage:`\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`},"lt-LT":{longPressMessage:`Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`},"lv-LV":{longPressMessage:`Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`},"nb-NO":{longPressMessage:`Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`},"nl-NL":{longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"},"pl-PL":{longPressMessage:`Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`},"pt-BR":{longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"},"pt-PT":{longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"},"ro-RO":{longPressMessage:`Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`},"ru-RU":{longPressMessage:`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`},"sk-SK":{longPressMessage:`Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`},"sl-SI":{longPressMessage:`Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`},"sr-SP":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"},"sv-SE":{longPressMessage:`H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`},"tr-TR":{longPressMessage:`Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`},"uk-UA":{longPressMessage:`\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`},"zh-CN":{longPressMessage:`\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`},"zh-TW":{longPressMessage:`\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`}};var u=r(74528),s=r(33866),n=r(38321),o=r(34716);function l(e,t,r){var l;let{type:i="menu",isDisabled:d,trigger:c="press"}=e,f=(0,u.Me)(),{triggerProps:g,overlayProps:p}=(0,o.I)({type:i},t,r),b=(0,s.q)((l=a)&&l.__esModule?l.default:l,"@react-aria/menu"),{longPressProps:v}=(0,n.T)({isDisabled:d||"longPress"!==c,accessibilityDescription:b.format("longPressMessage"),onLongPressStart(){t.close()},onLongPress(){t.open("first")}});return delete g.onPress,{menuTriggerProps:{...g,..."press"===c?{onPressStart(e){"touch"===e.pointerType||"keyboard"===e.pointerType||d||t.open("virtual"===e.pointerType?"first":null)},onPress(e){"touch"!==e.pointerType||d||t.toggle()}}:v,id:f,onKeyDown:e=>{if(!d&&("longPress"!==c||e.altKey)&&r&&r.current)switch(e.key){case"Enter":case" ":if("longPress"===c)return;case"ArrowDown":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),t.toggle("first");break;case"ArrowUp":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),t.toggle("last");break;default:"continuePropagation"in e&&e.continuePropagation()}}},menuProps:{...p,"aria-labelledby":f,autoFocus:t.focusStrategy||!0,onClose:t.close}}}},89244:function(e,t,r){r.d(t,{U:function(){return l}});var a={};a={"ar-AE":{dismiss:`\u{62A}\u{62C}\u{627}\u{647}\u{644}`},"bg-BG":{dismiss:`\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`\u{9589}\u{3058}\u{308B}`},"ko-KR":{dismiss:`\u{BB34}\u{C2DC}`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Ner\u{101}d\u{12B}t`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`},"sk-SK":{dismiss:`Zru\u{161}i\u{165}`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`},"zh-CN":{dismiss:`\u{53D6}\u{6D88}`},"zh-TW":{dismiss:`\u{95DC}\u{9589}`}};var u=r(82581),s=r(83108),n=r(33866),o=r(38981);function l(e){var t;let{onDismiss:r,...l}=e,i=(0,n.q)((t=a)&&t.__esModule?t.default:t,"@react-aria/overlays"),d=(0,s.b)(l,i.format("dismiss"));return u.createElement(o.T,null,u.createElement("button",{...d,tabIndex:-1,onClick:()=>{r&&r()},style:{width:1,height:1}}))}},67875:function(e,t,r){r.d(t,{aV:function(){return f},Bq:function(){return g}});var a=r(82581);let u=(0,a.createContext)({});var s=r(47803);function n({children:e}){let t=(0,a.useMemo)(()=>({register:()=>{}}),[]);return a.createElement(s.O.Provider,{value:t},e)}var o=r(24220),l=r(35425),i=r(68063),d=r(65733);let c=a.createContext(null);function f(e){var t;let r=(0,i.Av)(),{portalContainer:s=r?null:document.body,isExiting:d}=e,[f,g]=(0,a.useState)(!1),p=(0,a.useMemo)(()=>({contain:f,setContain:g}),[f,g]),{getContainer:b}=null!==(t=(0,a.useContext)(u))&&void 0!==t?t:{};if(!e.portalContainer&&b&&(s=b()),!s)return null;let v=e.children;return e.disableFocusManagement||(v=a.createElement(o.MT,{restoreFocus:!0,contain:f&&!d},v)),v=a.createElement(c.Provider,{value:p},a.createElement(n,null,v)),l.createPortal(v,s)}function g(){let e=(0,a.useContext)(c),t=null==e?void 0:e.setContain;(0,d.b)(()=>{null==t||t(!0)},[t])}},57350:function(e,t,r){r.d(t,{R:function(){return s}});let a=new WeakMap,u=[];function s(e,t=document.body){let r=new Set(e),s=new Set,n=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(t);let t=e=>{if(r.has(e)||s.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of r)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),u=t(e);if(u===NodeFilter.FILTER_ACCEPT&&o(e),u!==NodeFilter.FILTER_REJECT){let e=a.nextNode();for(;null!=e;)o(e),e=a.nextNode()}},o=e=>{var t;let r=null!==(t=a.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==r)&&(0===r&&e.setAttribute("aria-hidden","true"),s.add(e),a.set(e,r+1))};u.length&&u[u.length-1].disconnect(),n(t);let l=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...r,...s].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(r.delete(e),s.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?r.add(e):e instanceof Element&&n(e)}});l.observe(t,{childList:!0,subtree:!0});let i={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return u.push(i),()=>{for(let e of(l.disconnect(),s)){let t=a.get(e);1===t?(e.removeAttribute("aria-hidden"),a.delete(e)):a.set(e,t-1)}i===u[u.length-1]?(u.pop(),u.length&&u[u.length-1].observe()):u.splice(u.indexOf(i),1)}}},34716:function(e,t,r){r.d(t,{I:function(){return n}});var a=r(50064),u=r(82581),s=r(74528);function n(e,t,r){let n,{type:o}=e,{isOpen:l}=t;(0,u.useEffect)(()=>{r&&r.current&&(0,a.v).set(r.current,t.close)}),"menu"===o?n=!0:"listbox"===o&&(n="listbox");let i=(0,s.Me)();return{triggerProps:{"aria-haspopup":n,"aria-expanded":l,"aria-controls":l?i:null,onPress:t.toggle},overlayProps:{id:i}}}},61323:function(e,t,r){r.d(t,{C:function(){return d}});var a=r(54804),u=r(34476),s=r(92847),n=r(31473),o=r(13150),l=r(38321),i=r(82581);function d(e){let{selectionManager:t,key:r,ref:d,shouldSelectOnPressUp:g,shouldUseVirtualFocus:p,focus:b,isDisabled:v,onAction:h,allowsDifferentPressOrigin:m,linkBehavior:y="action"}=e,x=(0,s.tv)(),E=e=>{if("keyboard"===e.pointerType&&(0,a.F)(e))t.toggleSelection(r);else{if("none"===t.selectionMode)return;if(t.isLink(r)){if("selection"===y){let a=t.getItemProps(r);x.open(d.current,e,a.href,a.routerOptions),t.setSelectedKeys(t.selectedKeys);return}if("override"===y||"none"===y)return}"single"===t.selectionMode?t.isSelected(r)&&!t.disallowEmptySelection?t.toggleSelection(r):t.replaceSelection(r):e&&e.shiftKey?t.extendSelection(r):"toggle"===t.selectionBehavior||e&&((0,a.y)(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(r):t.replaceSelection(r)}};(0,i.useEffect)(()=>{r===t.focusedKey&&t.isFocused&&!p&&(b?b():document.activeElement!==d.current&&(0,u.e)(d.current))},[d,r,t.focusedKey,t.childFocusStrategy,t.isFocused,p]),v=v||t.isDisabled(r);let P={};p||v?v&&(P.onMouseDown=e=>{e.preventDefault()}):P={tabIndex:r===t.focusedKey?0:-1,onFocus(e){e.target===d.current&&t.setFocusedKey(r)}};let w=t.isLink(r)&&"override"===y,D=t.isLink(r)&&"selection"!==y&&"none"!==y,A=!v&&t.canSelectItem(r)&&!w,C=(h||D)&&!v,k=C&&("replace"===t.selectionBehavior?!A:!A||t.isEmpty),B=C&&A&&"replace"===t.selectionBehavior,S=k||B,T=(0,i.useRef)(null),F=S&&A,M=(0,i.useRef)(!1),L=(0,i.useRef)(!1),N=e=>{if(h&&h(),D){let a=t.getItemProps(r);x.open(d.current,e,a.href,a.routerOptions)}},R={};g?(R.onPressStart=e=>{T.current=e.pointerType,M.current=F,"keyboard"===e.pointerType&&(!S||f())&&E(e)},m?(R.onPressUp=k?null:e=>{"keyboard"!==e.pointerType&&A&&E(e)},R.onPress=k?N:null):R.onPress=e=>{k||B&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||c())&&N(e):"keyboard"!==e.pointerType&&A&&E(e)}):(R.onPressStart=e=>{T.current=e.pointerType,M.current=F,L.current=k,A&&("mouse"===e.pointerType&&!k||"keyboard"===e.pointerType&&(!C||f()))&&E(e)},R.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&S&&c()||"mouse"===e.pointerType&&L.current)&&(S?N(e):A&&E(e))}),P["data-key"]=r,R.preventFocusOnPress=p;let{pressProps:O,isPressed:I}=(0,o.r)(R),j=B?e=>{"mouse"===T.current&&(e.stopPropagation(),e.preventDefault(),N(e))}:void 0,{longPressProps:K}=(0,l.T)({isDisabled:!F,onLongPress(e){"touch"===e.pointerType&&(E(e),t.setSelectionBehavior("toggle"))}}),z=t.isLink(r)?e=>{s.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,n.d)(P,A||k?O:{},F?K:{},{onDoubleClick:j,onDragStartCapture:e=>{"touch"===T.current&&M.current&&e.preventDefault()},onClick:z}),isPressed:I,isSelected:t.isSelected(r),isFocused:t.isFocused&&t.focusedKey===r,isDisabled:v,allowsSelection:A,hasAction:S}}function c(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function f(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}},22597:function(e,t,r){r.d(t,{l:function(){return a}});function a(...e){return 1===e.length?e[0]:t=>{for(let r of e)"function"==typeof r?r(t):null!=r&&(r.current=t)}}},11263:function(e,t,r){r.d(t,{P:function(){return o}});var a=r(65733),u=r(82581);let s=0,n=new Map;function o(e){let[t,r]=(0,u.useState)();return(0,a.b)(()=>{if(!e)return;let t=n.get(e);if(t)r(t.element.id);else{let a=`react-aria-description-${s++}`;r(a);let u=document.createElement("div");u.id=a,u.style.display="none",u.textContent=e,document.body.appendChild(u),t={refCount:0,element:u},n.set(e,t)}return t.refCount++,()=>{t&&0==--t.refCount&&(t.element.remove(),n.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}},38981:function(e,t,r){r.d(t,{S:function(){return o},T:function(){return l}});var a=r(31473),u=r(82581),s=r(9467);let n={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function o(e={}){let{style:t,isFocusable:r}=e,[a,o]=(0,u.useState)(!1),{focusWithinProps:l}=(0,s.L)({isDisabled:!r,onFocusWithinChange:e=>o(e)}),i=(0,u.useMemo)(()=>a?t:t?{...n,...t}:n,[a]);return{visuallyHiddenProps:{...l,style:i}}}function l(e){let{children:t,elementType:r="div",isFocusable:s,style:n,...l}=e,{visuallyHiddenProps:i}=o(e);return u.createElement(r,(0,a.d)(l,i),t)}},39698:function(e,t,r){r.d(t,{i:function(){return s}});var a=r(7682);let u=new WeakMap;function s(e){let t=u.get(e);if(null!=t)return t;t=0;let r=u=>{for(let s of u)"section"===s.type?r((0,a._P)(s,e)):t++};return r(e),u.set(e,t),t}},96090:function(e,t,r){r.d(t,{W:function(){return s}});var a=r(67084),u=r(82581);function s(e){let t=(0,a.d)(e),[r,s]=(0,u.useState)(null),[n,o]=(0,u.useState)([]),l=()=>{o([]),t.close()};return{focusStrategy:r,...t,open(e=null){s(e),t.open()},toggle(e=null){s(e),t.toggle()},close(){l()},expandedKeysStack:n,openSubmenu:(e,t)=>{o(r=>t>r.length?r:[...r.slice(0,t),e])},closeSubmenu:(e,t)=>{o(r=>r[t]===e?r.slice(0,t):r)}}}}}]);