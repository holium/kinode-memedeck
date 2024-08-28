"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6244],{38599:function(e,n,t){t.d(n,{Z:function(){return J}});var r,o,a,i,c,u,l,s=function(){return(s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function d(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}"function"==typeof SuppressedError&&SuppressedError;var f=t(82581),p="right-scroll-bar-position",v="width-before-scroll-bar";function h(e,n){return"function"==typeof e?e(n):e&&(e.current=n),e}var m="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,g=new WeakMap,y=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),i=[],c=!1,u={read:function(){if(c)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var n=a(e,c);return i.push(n),function(){i=i.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(c=!0;i.length;){var n=i;i=[],n.forEach(e)}i={push:function(n){return e(n)},filter:function(){return i}}},assignMedium:function(e){c=!0;var n=[];if(i.length){var t=i;i=[],t.forEach(e),n=i}var r=function(){var t=n;n=[],t.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){n.push(e),o()},filter:function(e){return n=n.filter(e),i}}}}).options=s({async:!0,ssr:!1},o),u),b=function(){},w=f.forwardRef(function(e,n){var t,r,o,a,i=f.useRef(null),c=f.useState({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:b}),u=c[0],l=c[1],p=e.forwardProps,v=e.children,w=e.className,E=e.removeScrollBar,x=e.enabled,C=e.shards,S=e.sideCar,j=e.noIsolation,k=e.inert,M=e.allowPinchZoom,N=e.as,R=e.gapMode,P=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),L=(t=[i,n],r=function(e){return t.forEach(function(n){return h(n,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,m(function(){var e=g.get(a);if(e){var n=new Set(e),r=new Set(t),o=a.current;n.forEach(function(e){r.has(e)||h(e,null)}),r.forEach(function(e){n.has(e)||h(e,o)})}g.set(a,t)},[t]),a),O=s(s({},P),u);return f.createElement(f.Fragment,null,x&&f.createElement(S,{sideCar:y,removeScrollBar:E,shards:C,noIsolation:j,inert:k,setCallbacks:l,allowPinchZoom:!!M,lockRef:i,gapMode:R}),p?f.cloneElement(f.Children.only(v),s(s({},O),{ref:L})):f.createElement(void 0===N?"div":N,s({},O,{className:w,ref:L}),v))});w.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},w.classNames={fullWidth:v,zeroRight:p};var E=function(e){var n=e.sideCar,t=d(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,s({},t))};E.isSideCarExport=!0;var x=function(){var e=0,n=null;return{add:function(o){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=r||t.nc;return n&&e.setAttribute("nonce",n),e}())){var a,i;(a=n).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},C=function(){var e=x();return function(n,t){f.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},S=function(){var e=C();return function(n){return e(n.styles,n.dynamic),null}},j={left:0,top:0,right:0,gap:0},k=function(e){return parseInt(e||"",10)||0},M=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[k(t),k(r),k(o)]},N=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return j;var n=M(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},R=S(),P="data-scroll-locked",L=function(e,n,t,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(P,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(p," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(P,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},O=function(){var e=parseInt(document.body.getAttribute(P)||"0",10);return isFinite(e)?e:0},T=function(){f.useEffect(function(){return document.body.setAttribute(P,(O()+1).toString()),function(){var e=O()-1;e<=0?document.body.removeAttribute(P):document.body.setAttribute(P,e.toString())}},[])},A=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;T();var a=f.useMemo(function(){return N(o)},[o]);return f.createElement(R,{styles:L(a,!n,o,t?"":"!important")})},I=!1;if("undefined"!=typeof window)try{var B=Object.defineProperty({},"passive",{get:function(){return I=!0,!0}});window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch(e){I=!1}var X=!!I&&{passive:!1},W=function(e,n){if(!(e instanceof Element))return!1;var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},Y=function(e,n){var t=n.ownerDocument,r=n;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),H(e,r)){var o=Z(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==t.body);return!1},H=function(e,n){return"v"===e?W(n,"overflowY"):W(n,"overflowX")},Z=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},D=function(e,n,t,r,o){var a,i=(a=window.getComputedStyle(n).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,u=t.target,l=n.contains(u),s=!1,d=c>0,f=0,p=0;do{var v=Z(e,u),h=v[0],m=v[1]-v[2]-i*h;(h||m)&&H(e,u)&&(f+=m,p+=h),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(n.contains(u)||n===u));return d&&(o&&1>Math.abs(f)||!o&&c>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-c>p)&&(s=!0),s},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},F=function(e){return[e.deltaX,e.deltaY]},_=function(e){return e&&"current"in e?e.current:e},G=0,z=[],V=(l=function(e){var n=f.useRef([]),t=f.useRef([0,0]),r=f.useRef(),o=f.useState(G++)[0],a=f.useState(S)[0],i=f.useRef(e);f.useEffect(function(){i.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=(function(e,n,t){if(t||2==arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))})([e.lockRef.current],(e.shards||[]).map(_),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=f.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=U(e),c=t.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],s=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=Y(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=Y(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return D(p,n,e,"h"===p?u:l,!0)},[]),u=f.useCallback(function(e){if(z.length&&z[z.length-1]===a){var t="deltaY"in e?F(e):U(e),r=n.current.filter(function(n){var r;return n.name===e.type&&(n.target===e.target||e.target===n.shadowParent)&&(r=n.delta)[0]===t[0]&&r[1]===t[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(_).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,t,r,o){var a={name:e,delta:t,target:r,should:o,shadowParent:function(e){for(var n=null;null!==e;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}(r)};n.current.push(a),setTimeout(function(){n.current=n.current.filter(function(e){return e!==a})},1)},[]),s=f.useCallback(function(e){t.current=U(e),r.current=void 0},[]),d=f.useCallback(function(n){l(n.type,F(n),n.target,c(n,e.lockRef.current))},[]),p=f.useCallback(function(n){l(n.type,U(n),n.target,c(n,e.lockRef.current))},[]);f.useEffect(function(){return z.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",u,X),document.addEventListener("touchmove",u,X),document.addEventListener("touchstart",s,X),function(){z=z.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,X),document.removeEventListener("touchmove",u,X),document.removeEventListener("touchstart",s,X)}},[]);var v=e.removeScrollBar,h=e.inert;return f.createElement(f.Fragment,null,h?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(A,{gapMode:e.gapMode}):null)},y.useMedium(l),E),q=f.forwardRef(function(e,n){return f.createElement(w,s({},e,{ref:n,sideCar:V}))});q.classNames=w.classNames;var J=q},5441:function(e,n,t){t.d(n,{b:function(){return f}});var r=t(71503),o=t(82581),a=t(38197),i=t(14483),c=t(26461),u=t(70244),l=t(31473),s=t(7590),d=(0,a.Gp)((e,n)=>{let{triggerRef:t,getTriggerProps:a}=(0,r.l)(),{children:d,...f}=e,p=(0,o.useMemo)(()=>"string"==typeof d?(0,s.jsx)("p",{children:d}):o.Children.only(d),[d]),{onPress:v,isDisabled:h,...m}=(0,o.useMemo)(()=>a((0,l.d)(f,p.props),p.ref),[a,p.props,f,p.ref]),[,g]=(0,i.N)(d,u.A),{buttonProps:y}=(0,c.j)({onPress:v,isDisabled:h},t),b=(0,o.useMemo)(()=>(null==g?void 0:g[0])!==void 0,[g]);return(0,o.cloneElement)(p,(0,l.d)(m,b?{onPress:v,isDisabled:h}:y))});d.displayName="NextUI.PopoverTrigger";var f=d},71503:function(e,n,t){t.d(n,{H:function(){return r},l:function(){return o}});var[r,o]=(0,t(26454).k)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"})},85658:function(e,n,t){t.d(n,{j:function(){return d}});var r=t(71503),o=t(65414),a=t(82581),i=t(38197),c=t(67875),u=t(10015),l=t(7590),s=(0,i.Gp)((e,n)=>{let{children:t,...i}=e,s=(0,o.S)({...i,ref:n}),[d,f]=a.Children.toArray(t),p=(0,l.jsx)(c.aV,{portalContainer:s.portalContainer,children:f});return(0,l.jsxs)(r.H,{value:s,children:[d,s.disableAnimation&&s.isOpen?p:(0,l.jsx)(u.M,{children:s.isOpen?p:null})]})});s.displayName="NextUI.Popover";var d=s},77354:function(e,n,t){t.d(n,{g:function(){return m}});var r=t(71503),o=t(82581),a=t(38197),i=t(89244),c=t(60876),u=t(8812),l=t(38150),s=t(34657),d=t(38599),f=t(81554),p=t(12405),v=t(7590),h=(0,a.Gp)((e,n)=>{let{as:t,children:a,className:h,...m}=e,{Component:g,isOpen:y,placement:b,backdrop:w,motionProps:E,disableAnimation:x,shouldBlockScroll:C,getPopoverProps:S,getDialogProps:j,getBackdropProps:k,getContentProps:M,isNonModal:N,onClose:R}=(0,r.l)(),P=(0,o.useRef)(null),{dialogProps:L,titleProps:O}=(0,p.R)({},P),T=j({ref:P,...L,...m}),A=(0,v.jsxs)(v.Fragment,{children:[!N&&(0,v.jsx)(i.U,{onDismiss:R}),(0,v.jsx)(t||g||"div",{...T,children:(0,v.jsx)("div",{...M({className:h}),children:"function"==typeof a?a(O):a})}),(0,v.jsx)(i.U,{onDismiss:R})]}),I=(0,o.useMemo)(()=>"transparent"===w?null:x?(0,v.jsx)("div",{...k()}):(0,v.jsx)(u.X,{features:l.H,children:(0,v.jsx)(s.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:c.y7.fade,...k()})}),[w,x,k]),B=(0,v.jsx)(d.Z,{enabled:C&&y,removeScrollBar:!1,children:x?A:(0,v.jsx)(u.X,{features:l.H,children:(0,v.jsx)(s.m.div,{animate:"enter",exit:"exit",initial:"initial",style:{...(0,f.VS)("center"===b?"top":b)},variants:c.y7.scaleSpringOpacity,...E,children:A})})});return(0,v.jsxs)("div",{...S(),children:[I,B]})});h.displayName="NextUI.PopoverContent";var m=h}}]);