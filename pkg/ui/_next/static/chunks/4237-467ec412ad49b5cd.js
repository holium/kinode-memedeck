(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4237],{81199:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&a.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(i(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(l-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y},default:function(){return v}});let r=n(67251),o=n(83111),i=n(91104),l=r._(n(32512)),a=o._(n(63137)),s=n(97431),c=n(81199),u=n(20329),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},b=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:a="afterInteractive",onError:s,stylesheets:u}=e,b=n||t;if(b&&f.has(b))return;if(d.has(t)){f.add(b),d.get(t).then(r,s);return}let m=()=>{o&&o(),f.add(b)},y=document.createElement("script"),g=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",m()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",m()):t&&(y.src=t,d.set(t,g)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===a&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",a),u&&h(u),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>b(e))}):b(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:m,scripts:y,getIsSsr:g,appDir:v,nonce:w}=(0,a.useContext)(s.HeadManagerContext),_=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;_.current||(o&&e&&f.has(e)&&o(),_.current=!0)},[o,t,n]);let x=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!x.current&&("afterInteractive"===c?b(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>b(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>b(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),m(y)):g&&g()?f.add(t||n):g&&!g()&&b(e)),v){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},58764:function(e){e.exports={style:{fontFamily:"'__Inter_dd7bb9', '__Inter_Fallback_dd7bb9'",fontStyle:"normal"},className:"__className_dd7bb9",variable:"__variable_dd7bb9"}},63798:function(e){e.exports={style:{fontFamily:"'__Mulish_12ae3e', '__Mulish_Fallback_12ae3e'",fontStyle:"normal"},className:"__className_12ae3e",variable:"__variable_12ae3e"}},45688:function(e){e.exports={style:{fontFamily:"'__impactFont_36e324', '__impactFont_Fallback_36e324'"},className:"__className_36e324",variable:"__variable_36e324"}},73147:function(e,t,n){"use strict";n.d(t,{Cb:function(){return V}});var r,o=n(63137);let i=/^[a-z0-9]+(-[a-z0-9]+)*$/,l=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){let e=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:e};return t&&!a(i)?null:i}let i=o[0],l=i.split("-");if(l.length>1){let e={provider:r,prefix:l.shift(),name:l.join("-")};return t&&!a(e)?null:e}if(n&&""===r){let e={provider:r,prefix:"",name:i};return t&&!a(e,n)?null:e}return null},a=(e,t)=>!!e&&!!((""===e.provider||e.provider.match(i))&&(t&&""===e.prefix||e.prefix.match(i))&&e.name.match(i)),s=Object.freeze({left:0,top:0,width:16,height:16}),c=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),u=Object.freeze({...Object.freeze({...s,...c}),body:"",hidden:!1});function d(e,t){let n=function(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}(e,t);for(let r in u)r in c?r in e&&!(r in n)&&(n[r]=c[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function f(e,t){let n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let r=function(e,t){let n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);return Object.keys(n).concat(Object.keys(r)).forEach(function e(t){if(n[t])return o[t]=[];if(!(t in o)){o[t]=null;let n=r[t]&&r[t].parent,i=n&&e(n);i&&(o[t]=[n].concat(i))}return o[t]}),o}(e);for(let o in r){let i=r[o];i&&(t(o,function(e,t,n){let r=e.icons,o=e.aliases||Object.create(null),i={};function l(e){i=d(r[e]||o[e],i)}return l(t),n.forEach(l),d(e,i)}(e,o,i)),n.push(o))}return n}let p={provider:"",aliases:{},not_found:{},...s};function h(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function b(e){if("object"!=typeof e||null===e||"string"!=typeof e.prefix||!e.icons||"object"!=typeof e.icons||!h(e,p))return null;let t=e.icons;for(let e in t){let n=t[e];if(!e.match(i)||"string"!=typeof n.body||!h(n,u))return null}let n=e.aliases||Object.create(null);for(let e in n){let r=n[e],o=r.parent;if(!e.match(i)||"string"!=typeof o||!t[o]&&!n[o]||!h(r,u))return null}return e}let m=Object.create(null);function y(e,t){let n=m[e]||(m[e]=Object.create(null));return n[t]||(n[t]={provider:e,prefix:t,icons:Object.create(null),missing:new Set})}function g(e,t){return b(t)?f(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}let v=!1,w=Object.freeze({...Object.freeze({width:null,height:null}),...c}),_=/(-?[0-9.]*[0-9]+[0-9.]*)/g,x=/^-?[0-9.]*[0-9]+[0-9.]*$/g;Date.now().toString(16),(16777216*Math.random()|0).toString(16);let j=Object.create(null);function k(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}let C=Object.create(null),S=["https://api.simplesvg.com","https://api.unisvg.com"],E=[];for(;S.length>0;)1===S.length?E.push(S.shift()):Math.random()>.5?E.push(S.shift()):E.push(S.pop());C[""]=k({resources:["https://api.iconify.design"].concat(E)});let M=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();var I={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};let O="iconify2",A="iconify",N=A+"-count",L=A+"-version";function F(e,t){try{return e.getItem(t)}catch(e){}}function P(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function T(e,t){try{e.removeItem(t)}catch(e){}}function z(e,t){return P(e,N,t.toString())}function q(e){return parseInt(F(e,N))||0}let B={local:!0,session:!0},G={local:new Set,session:new Set},H=!1,R=window,J={...w,inline:!1},D={backgroundColor:"currentColor"},U={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},W={WebkitMask:D,mask:D,background:{backgroundColor:"transparent"}};for(let e in W){let t=W[e];for(let n in U)t[e+n]=U[n]}function V(e){!function(e,t){switch(e){case"local":case"session":B[e]=t;break;case"all":for(let e in B)B[e]=t}}(e,!0)}if("boolean"==typeof(r=!0)&&(v=r),j[""]={prepare:(e,t,n)=>{let r=[],o=function(e,t){let n;let r=C[e];if(!r)return 0;if(r.maxURL){let e=0;r.resources.forEach(t=>{e=Math.max(e,t.length)}),n=r.maxURL-e-r.path.length-(t+".json?icons=").length}else n=0;return n}(e,t),i="icons",l={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach((n,s)=>{(a+=n.length+1)>=o&&s>0&&(r.push(l),l={type:i,provider:e,prefix:t,icons:[]},a=n.length),l.icons.push(n)}),r.push(l),r},send:(e,t,n)=>{if(!M){n("abort",424);return}let r=function(e){if("string"==typeof e){let t=C[e];if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{let e=t.prefix,n=t.icons.join(",");r+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{let e=t.uri;r+="/"===e.slice(0,1)?e.slice(1):e;break}default:n("abort",400);return}let o=503;M(e+r).then(e=>{let t=e.status;if(200!==t){setTimeout(()=>{n(404===t?"abort":"next",t)});return}return o=501,e.json()}).then(e=>{if("object"!=typeof e||null===e){setTimeout(()=>{404===e?n("abort",e):n("next",o)});return}setTimeout(()=>{n("success",e)})}).catch(()=>{n("next",o)})}},"undefined"!=typeof document){!function(){if(!H)for(let e in H=!0,B)!function(e,t){let n=function(e){let t=e+"Storage";try{if(R&&R[t]&&"number"==typeof R[t].length)return R[t]}catch(e){}B[e]=!1}(e);if(!n)return;let r=F(n,L);if(r!==O){if(r){let e=q(n);for(let t=0;t<e;t++)T(n,A+t.toString())}P(n,L,O),z(n,0);return}let o=Math.floor(Date.now()/36e5)-168,i=e=>{let r=A+e.toString(),i=F(n,r);if("string"==typeof i){try{let n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>o&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}T(n,r)}},l=q(n);for(let t=l-1;t>=0;t--)i(t)||(t===l-1?z(n,--l):G[e].add(t))}(e,e=>{let t=e.data,n=y(e.provider,t.prefix);if(!g(n,t).length)return!1;let r=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,r):r,!0})}();let e=window;if(void 0!==e.IconifyPreload){let t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach(e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),v&&!t&&!e.prefix){let t=!1;return b(e)&&(e.prefix="",f(e,(e,n)=>{n&&function(e,t){let n=l(e,!0,v);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(y(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)})),t}let n=e.prefix;return!!a({provider:t,prefix:n,name:"a"})&&!!g(y(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}})}if(void 0!==e.IconifyProviders){let t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){let n="IconifyProviders["+e+"] is invalid.";try{let r=t[e];if("object"!=typeof r||!r||void 0===r.resources)continue;!function(e,t){let n=k(t);return null!==n&&(C[e]=n,!0)}(e,r)&&console.error(n)}catch(e){console.error(n)}}}}o.Component},67511:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var r=n(91104),o=()=>(0,r.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,r.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]})},5606:function(e,t,n){"use strict";n.d(t,{F:function(){return h}});var r=n(97915),o=n(4292),i=n(69901),l=n(93371),a=n(39276),s=n(88402),c=n(3511),u=n(73687),d=n(63137),f=n(63831),p=n(77785);function h(){var e,t,n,h,b;let m=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},y=(0,r.C)(),g=!!y,{as:v,ref:w,src:_,name:x,icon:j,classNames:k,fallback:C,alt:S=x||"avatar",imgRef:E,color:M=null!=(e=null==y?void 0:y.color)?e:"default",radius:I=null!=(t=null==y?void 0:y.radius)?t:"full",size:O=null!=(n=null==y?void 0:y.size)?n:"md",isBordered:A=null!=(h=null==y?void 0:y.isBordered)&&h,isDisabled:N=null!=(b=null==y?void 0:y.isDisabled)&&b,isFocusable:L=!1,getInitials:F=a.e,ignoreFallback:P=!1,showFallback:T=!1,ImgComponent:z="img",imgProps:q,className:B,onError:G,...H}=m,R=v||"span",J=(0,l.gy)(w),D=(0,l.gy)(E),{isFocusVisible:U,isFocused:W,focusProps:V}=(0,u.Fx)(),{isHovered:Z,hoverProps:$}=(0,p.XI)({isDisabled:N}),X="loaded"===(0,f.d)({src:_,onError:G,ignoreFallback:P}),K=(!_||!X)&&T,Q=(0,d.useMemo)(()=>{var e;return(0,o.r)({color:M,radius:I,size:O,isBordered:A,isDisabled:N,isInGroup:g,isInGridGroup:null!=(e=null==y?void 0:y.isGrid)&&e})},[M,I,O,A,N,g,null==y?void 0:y.isGrid]),Y=(0,s.W)(null==k?void 0:k.base,B),ee=(0,d.useMemo)(()=>L||"button"===v,[L,v]),et=(0,d.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:J,tabIndex:ee?0:-1,"data-hover":(0,c.PB)(Z),"data-focus":(0,c.PB)(W),"data-focus-visible":(0,c.PB)(U),className:Q.base({class:(0,s.W)(Y,null==e?void 0:e.className)}),...(0,i.dG)(H,$,ee?V:{})}},[ee,Q,Y,V,H]),en=(0,d.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:D,src:_,"data-loaded":(0,c.PB)(X),className:Q.img({class:null==k?void 0:k.img}),...(0,i.dG)(q,e)}},[Q,X,q,_,D]);return{Component:R,ImgComponent:z,src:_,alt:S,icon:j,name:x,imgRef:D,slots:Q,classNames:k,fallback:C,isImgLoaded:X,showFallback:K,ignoreFallback:P,getInitials:F,getAvatarProps:et,getImageProps:en}}},97915:function(e,t,n){"use strict";n.d(t,{C:function(){return o},k:function(){return r}});var[r,o]=(0,n(36711).k)({name:"AvatarGroupContext",strict:!1})},45268:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(67511),o=n(5606),i=n(63137),l=n(63471),a=n(91104),s=(0,l.Gp)((e,t)=>{let{Component:n,ImgComponent:l,src:s,icon:c=(0,a.jsx)(r.f,{}),alt:u,classNames:d,slots:f,name:p,showFallback:h,fallback:b,getInitials:m,getAvatarProps:y,getImageProps:g}=(0,o.F)({...e,ref:t}),v=(0,i.useMemo)(()=>!h&&s?null:b?(0,a.jsx)("div",{"aria-label":u,className:f.fallback({class:null==d?void 0:d.fallback}),role:"img",children:b}):p?(0,a.jsx)("span",{"aria-label":u,className:f.name({class:null==d?void 0:d.name}),role:"img",children:m(p)}):(0,a.jsx)("span",{"aria-label":u,className:f.icon({class:null==d?void 0:d.icon}),role:"img",children:c}),[h,s,b,p,d]);return(0,a.jsxs)(n,{...y(),children:[s&&(0,a.jsx)(l,{...g(),alt:u}),v]})});s.displayName="NextUI.Avatar";var c=s},35618:function(e,t,n){"use strict";n.d(t,{w:function(){return a}});var r=n(84787),o=n(69901),i=n(37175),l=n(91104),a=e=>{let{children:t,locale:n="en-US",navigate:a,...s}=e,c=t;return a&&(c=(0,l.jsx)(o.pG,{navigate:a,children:c})),(0,l.jsx)(r.bd,{locale:n,children:(0,l.jsx)(i.N3,{...s,children:c})})}},4292:function(e,t,n){"use strict";n.d(t,{r:function(){return l},z:function(){return a}});var r=n(57978),o=n(18903),i=n(98293),l=(0,o.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...i.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...i.z6,"flex","items-center","justify-center"],name:[...i.z6,"font-normal","text-center","text-inherit"],icon:[...i.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:r.J.solid.default},primary:{base:r.J.solid.primary},secondary:{base:r.J.solid.secondary},success:{base:r.J.solid.success},warning:{base:r.J.solid.warning},danger:{base:r.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]}),a=(0,o.tv)({base:"flex items-center justify-center h-auto w-max-content",variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}})},63831:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(63137),o=n(9328);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{loading:t,src:n,srcSet:i,onLoad:l,onError:a,crossOrigin:s,sizes:c,ignoreFallback:u}=e,[d,f]=(0,r.useState)("pending");(0,r.useEffect)(()=>{f(n?"loading":"pending")},[n]);let p=(0,r.useRef)(),h=(0,r.useCallback)(()=>{if(!n)return;b();let e=new Image;e.src=n,s&&(e.crossOrigin=s),i&&(e.srcset=i),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{b(),f("loaded"),null==l||l(e)},e.onerror=e=>{b(),f("failed"),null==a||a(e)},p.current=e},[n,s,i,c,l,a,t]),b=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,o.G)(()=>{if(!u)return"loading"===d&&h(),()=>{b()}},[d,h,u]),u?"loaded":d}},32770:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return s},track:function(){return a}});var r=n(63137),o=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function i(){return window.vam||"production"}function l(){return"development"===i()}function a(e,t){var n,r;if(!t){null==(n=window.va)||n.call(window,"event",{name:e});return}try{let n=function(e,t){if(!e)return;let n=e,r=[];for(let[o,i]of Object.entries(e))"object"==typeof i&&null!==i&&(t.strip?n=function(e,t){let{[e]:n,...r}=t;return r}(o,n):r.push(o));if(r.length>0&&!t.strip)throw Error("The following properties are not valid: ".concat(r.join(", "),". Only strings, numbers, booleans, and null are allowed."));return n}(t,{strip:"production"===i()});null==(r=window.va)||r.call(window,"event",{name:e,data:n})}catch(e){e instanceof Error&&l()&&console.error(e)}}function s(e){return(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam="production";return}window.vam=e})(t.mode),o(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.2.2",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},l()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}}}]);