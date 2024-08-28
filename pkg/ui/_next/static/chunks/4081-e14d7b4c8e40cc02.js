"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4081],{14081:function(e,t,n){let i;n.d(t,{Cb:function(){return ev}});var r,o=n(82581);let l=/^[a-z0-9]+(-[a-z0-9]+)*$/,a=(e,t,n,i="")=>{let r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){let e=r.pop(),n=r.pop(),o={provider:r.length>0?r[0]:i,prefix:n,name:e};return t&&!s(o)?null:o}let o=r[0],l=o.split("-");if(l.length>1){let e={provider:i,prefix:l.shift(),name:l.join("-")};return t&&!s(e)?null:e}if(n&&""===i){let e={provider:i,prefix:"",name:o};return t&&!s(e,n)?null:e}return null},s=(e,t)=>!!e&&!!((""===e.provider||e.provider.match(l))&&(t&&""===e.prefix||e.prefix.match(l))&&e.name.match(l)),c=Object.freeze({left:0,top:0,width:16,height:16}),f=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),u=Object.freeze({...c,...f}),d=Object.freeze({...u,body:"",hidden:!1});function p(e,t){let n=function(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}(e,t);for(let i in d)i in f?i in e&&!(i in n)&&(n[i]=f[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function h(e,t){let n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let i=function(e,t){let n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(i)).forEach(function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;let n=i[t]&&i[t].parent,o=n&&e(n);o&&(r[t]=[n].concat(o))}return r[t]}),r}(e);for(let r in i){let o=i[r];o&&(t(r,function(e,t,n){let i=e.icons,r=e.aliases||Object.create(null),o={};function l(e){o=p(i[e]||r[e],o)}return l(t),n.forEach(l),p(e,o)}(e,r,o)),n.push(r))}return n}let g={provider:"",aliases:{},not_found:{},...c};function m(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function b(e){if("object"!=typeof e||null===e||"string"!=typeof e.prefix||!e.icons||"object"!=typeof e.icons||!m(e,g))return null;let t=e.icons;for(let e in t){let n=t[e];if(!e.match(l)||"string"!=typeof n.body||!m(n,d))return null}let n=e.aliases||Object.create(null);for(let e in n){let i=n[e],r=i.parent;if(!e.match(l)||"string"!=typeof r||!t[r]&&!n[r]||!m(i,d))return null}return e}let y=Object.create(null);function v(e,t){let n=y[e]||(y[e]=Object.create(null));return n[t]||(n[t]={provider:e,prefix:t,icons:Object.create(null),missing:new Set})}function x(e,t){return b(t)?h(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}let w=!1;function k(e){return"boolean"==typeof e&&(w=e),w}let j=Object.freeze({width:null,height:null}),_=Object.freeze({...j,...f}),S=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function O(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;let i=e.split(S);if(null===i||!i.length)return e;let r=[],o=i.shift(),l=E.test(o);for(;;){if(l){let e=parseFloat(o);isNaN(e)?r.push(o):r.push(Math.ceil(e*t*n)/n)}else r.push(o);if(void 0===(o=i.shift()))return r.join("");l=!l}}let M=e=>"unset"===e||"undefined"===e||"none"===e,C=/\sid="(\S+)"/g,I="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),L=0,F=Object.create(null);function T(e){return F[e]||F[""]}function D(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}let N=Object.create(null),z=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;z.length>0;)1===z.length?R.push(z.shift()):Math.random()>.5?R.push(z.shift()):R.push(z.pop());N[""]=D({resources:["https://api.iconify.design"].concat(R)});let A=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();function P(e,t){e.forEach(e=>{let n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter(e=>e.id!==t))})}let U=0;var $={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function H(e){let t={...$,...e},n=[];function i(){n=n.filter(e=>"pending"===e().status)}return{query:function(e,r,o){let l=function(e,t,n,i){let r,o;let l=e.resources.length,a=e.random?Math.floor(Math.random()*l):e.index;if(e.random){let t=e.resources.slice(0);for(r=[];t.length>1;){let e=Math.floor(Math.random()*t.length);r.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}r=r.concat(t)}else r=e.resources.slice(a).concat(e.resources.slice(0,a));let s=Date.now(),c="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===c&&(c="aborted"),h(),d.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),d=[]}function m(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function b(){c="failed",p.forEach(e=>{e(void 0,o)})}function y(){d.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),d=[]}return"function"==typeof i&&p.push(i),setTimeout(function i(){if("pending"!==c)return;h();let l=r.shift();if(void 0===l){if(d.length){u=setTimeout(()=>{h(),"pending"===c&&(y(),b())},e.timeout);return}b();return}let a={status:"pending",resource:l,callback:(t,n)=>{!function(t,n,l){let a="success"!==n;switch(d=d.filter(e=>e!==t),c){case"pending":break;case"failed":if(a||!e.dataAfterTimeout)return;break;default:return}if("abort"===n){o=l,b();return}if(a){o=l,d.length||(r.length?i():b());return}if(h(),y(),!e.random){let n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}c="completed",p.forEach(e=>{e(l)})}(a,t,n)}};d.push(a),f++,u=setTimeout(i,e.rotate),n(l,t,a.callback)}),function(){return{startTime:s,payload:t,status:c,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}(t,e,r,(e,t)=>{i(),o&&o(e,t)});return n.push(l),l},find:function(e){return n.find(t=>e(t))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:i}}let q=Object.create(null),Q="iconify2",J="iconify",W=J+"-count",B=J+"-version";function X(e,t){try{return e.getItem(t)}catch(e){}}function G(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function K(e,t){try{e.removeItem(t)}catch(e){}}function V(e,t){return G(e,W,t.toString())}function Y(e){return parseInt(X(e,W))||0}let Z={local:!0,session:!0},ee={local:new Set,session:new Set},et=!1,en="undefined"==typeof window?{}:window;function ei(e){let t=e+"Storage";try{if(en&&en[t]&&"number"==typeof en[t].length)return en[t]}catch(e){}Z[e]=!1}function er(e,t){let n=ei(e);if(!n)return;let i=X(n,B);if(i!==Q){if(i){let e=Y(n);for(let t=0;t<e;t++)K(n,J+t.toString())}G(n,B,Q),V(n,0);return}let r=Math.floor(Date.now()/36e5)-168,o=e=>{let i=J+e.toString(),o=X(n,i);if("string"==typeof o){try{let n=JSON.parse(o);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}K(n,i)}},l=Y(n);for(let t=l-1;t>=0;t--)o(t)||(t===l-1?V(n,--l):ee[e].add(t))}function eo(){if(!et)for(let e in et=!0,Z)er(e,e=>{let t=e.data,n=v(e.provider,t.prefix);if(!x(n,t).length)return!1;let i=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,i):i,!0})}function el(){}let ea=(e,t)=>{let n,i;let r=function(e){let t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name));let i={provider:"",prefix:"",name:""};return e.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;let r=e.provider,o=e.prefix,l=e.name,a=n[r]||(n[r]=Object.create(null)),s=a[o]||(a[o]=v(r,o));(l in s.icons?t.loaded:""===o||s.missing.has(l)?t.missing:t.pending).push({provider:r,prefix:o,name:l})}),t}(function(e,t=!0,n=!1){let i=[];return e.forEach(e=>{let r="string"==typeof e?a(e,t,n):e;r&&i.push(r)}),i}(e,!0,k()));if(!r.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(r.loaded,r.missing,r.pending,el)}),()=>{e=!1}}let o=Object.create(null),l=[];return r.pending.forEach(e=>{let{provider:t,prefix:r}=e;if(r===i&&t===n)return;n=t,i=r,l.push(v(t,r));let a=o[t]||(o[t]=Object.create(null));a[r]||(a[r]=[])}),r.pending.forEach(e=>{let{provider:t,prefix:n,name:i}=e,r=v(t,n),l=r.pendingIcons||(r.pendingIcons=new Set);l.has(i)||(l.add(i),o[t][n].push(i))}),l.forEach(e=>{let{provider:t,prefix:n}=e;if(o[t][n].length){var i;i=o[t][n],e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(i).sort():e.iconsToLoad=i,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{let t;e.iconsQueueFlag=!1;let{provider:n,prefix:i}=e,r=e.iconsToLoad;delete e.iconsToLoad,r&&(t=T(n))&&t.prepare(n,i,r).forEach(t=>{!function(e,t,n){let i,r;if("string"==typeof e){let t=T(e);if(!t)return n(void 0,424);r=t.send;let o=function(e){if(!q[e]){let t=N[e];if(!t)return;let n=H(t);q[e]={config:t,redundancy:n}}return q[e]}(e);o&&(i=o.redundancy)}else{let t=D(e);if(t){i=H(t);let n=T(e.resources?e.resources[0]:"");n&&(r=n.send)}}i&&r?i.query(t,r,n)().abort:n(void 0,424)}(n,t,n=>{if("object"!=typeof n)t.icons.forEach(t=>{e.missing.add(t)});else try{let t=x(e,n);if(!t.length)return;let i=e.pendingIcons;i&&t.forEach(e=>{i.delete(e)}),function(e,t){function n(n){let i,r;if(!Z[n]||!(i=ei(n)))return;let o=ee[n];if(o.size)o.delete(r=Array.from(o).shift());else if(r=Y(i),!V(i,r+1))return;let l={cached:Math.floor(Date.now()/36e5),provider:e.provider,data:t};return G(i,J+r.toString(),JSON.stringify(l))}et||eo(),(!t.lastModified||function(e,t){let n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(let n in Z)er(n,n=>{let i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}(e,t.lastModified))&&Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}(e,n)}catch(e){console.error(e)}e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1,i=e.provider,r=e.prefix;t.forEach(t=>{let o=t.icons,l=o.pending.length;o.pending=o.pending.filter(t=>{if(t.prefix!==r)return!0;let l=t.name;if(e.icons[l])o.loaded.push({provider:i,prefix:r,name:l});else{if(!e.missing.has(l))return n=!0,!0;o.missing.push({provider:i,prefix:r,name:l})}return!1}),o.pending.length!==l&&(n||P([e],t.id),t.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),t.abort))})}))}))})})}))}}),t?function(e,t,n){let i=U++,r=P.bind(null,n,i);if(!t.pending.length)return r;let o={id:i,icons:t,callback:e,abort:r};return n.forEach(e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)}),r}(t,r,l):el},es=/[\s,]+/,ec={..._,inline:!1},ef={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},eu={display:"inline-block"},ed={backgroundColor:"currentColor"},ep={backgroundColor:"transparent"},eh={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},eg={WebkitMask:ed,mask:ed,background:ep};for(let e in eg){let t=eg[e];for(let n in eh)t[e+n]=eh[n]}let em={...ec,inline:!0};function eb(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}let ey=(e,t,n,r)=>{let l=n?em:ec,a=function(e,t){let n={...e};for(let e in t){let i=t[e],r=typeof i;e in j?(null===i||i&&("string"===r||"number"===r))&&(n[e]=i):r===typeof n[e]&&(n[e]="rotate"===e?i%4:i)}return n}(l,t),s=t.mode||"svg",c={},f=t.style||{},d={..."svg"===s?ef:{},ref:r};for(let e in t){let n=t[e];if(void 0!==n)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":a[e]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&function(e,t){t.split(es).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}})}(a,n);break;case"color":c.color=n;break;case"rotate":"string"==typeof n?a[e]=function(e,t=0){let n=e.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(""===n){let t=parseInt(e);return isNaN(t)?0:i(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t)%1==0?i(r):0}}return t}(n):"number"==typeof n&&(a[e]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete d["aria-hidden"];break;default:void 0===l[e]&&(d[e]=n)}}let p=function(e,t){let n,i;let r={...u,...e},o={..._,...t},l={left:r.left,top:r.top,width:r.width,height:r.height},a=r.body;[r,o].forEach(e=>{let t;let n=[],i=e.hFlip,r=e.vFlip,o=e.rotate;switch(i?r?o+=2:(n.push("translate("+(l.width+l.left).toString()+" "+(0-l.top).toString()+")"),n.push("scale(-1 1)"),l.top=l.left=0):r&&(n.push("translate("+(0-l.left).toString()+" "+(l.height+l.top).toString()+")"),n.push("scale(1 -1)"),l.top=l.left=0),o<0&&(o-=4*Math.floor(o/4)),o%=4){case 1:n.unshift("rotate(90 "+(t=l.height/2+l.top).toString()+" "+t.toString()+")");break;case 2:n.unshift("rotate(180 "+(l.width/2+l.left).toString()+" "+(l.height/2+l.top).toString()+")");break;case 3:n.unshift("rotate(-90 "+(t=l.width/2+l.left).toString()+" "+t.toString()+")")}o%2==1&&(l.left!==l.top&&(t=l.left,l.left=l.top,l.top=t),l.width!==l.height&&(t=l.width,l.width=l.height,l.height=t)),n.length&&(a='<g transform="'+n.join(" ")+'">'+a+"</g>")});let s=o.width,c=o.height,f=l.width,d=l.height;null===s?n=O(i=null===c?"1em":"auto"===c?d:c,f/d):(n="auto"===s?f:s,i=null===c?O(n,d/f):"auto"===c?d:c);let p={},h=(e,t)=>{M(t)||(p[e]=t.toString())};return h("width",n),h("height",i),p.viewBox=l.left.toString()+" "+l.top.toString()+" "+f.toString()+" "+d.toString(),{attributes:p,body:a}}(e,a),h=p.attributes;if(a.inline&&(c.verticalAlign="-0.125em"),"svg"===s){var g;d.style={...c,...f},Object.assign(d,h);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),d.dangerouslySetInnerHTML={__html:(g=function(e,t=I){let n;let i=[];for(;n=C.exec(e);)i.push(n[1]);if(!i.length)return e;let r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return i.forEach(n=>{let i="function"==typeof t?t(n):t+(L++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")}),e=e.replace(RegExp(r,"g"),"")}(p.body,n?()=>n+"ID"+e++:"iconifyReact"),void 0===i&&function(){try{i=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){i=null}}(),i?i.createHTML(g):g)},o.createElement("svg",d)}let{body:m,width:b,height:y}=e,v="mask"===s||"bg"!==s&&-1!==m.indexOf("currentColor"),x=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(m,{...h,width:b+"",height:y+""});return d.style={...c,"--svg":'url("data:image/svg+xml,'+x.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")',width:eb(h.width),height:eb(h.height),...eu,...v?ed:ep,...f},o.createElement("span",d)};function ev(e){!function(e,t){switch(e){case"local":case"session":Z[e]=t;break;case"all":for(let e in Z)Z[e]=t}}(e,!0)}if(k(!0),r={prepare:(e,t,n)=>{let i=[],r=function(e,t){let n;let i=N[e];if(!i)return 0;if(i.maxURL){let e=0;i.resources.forEach(t=>{e=Math.max(e,t.length)}),n=i.maxURL-e-i.path.length-(t+".json?icons=").length}else n=0;return n}(e,t),o="icons",l={type:o,provider:e,prefix:t,icons:[]},a=0;return n.forEach((n,s)=>{(a+=n.length+1)>=r&&s>0&&(i.push(l),l={type:o,provider:e,prefix:t,icons:[]},a=n.length),l.icons.push(n)}),i.push(l),i},send:(e,t,n)=>{if(!A){n("abort",424);return}let i=function(e){if("string"==typeof e){let t=N[e];if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":i+=t.prefix+".json?"+new URLSearchParams({icons:t.icons.join(",")}).toString();break;case"custom":{let e=t.uri;i+="/"===e.slice(0,1)?e.slice(1):e;break}default:n("abort",400);return}let r=503;A(e+i).then(e=>{let t=e.status;if(200!==t){setTimeout(()=>{n(404===t?"abort":"next",t)});return}return r=501,e.json()}).then(e=>{if("object"!=typeof e||null===e){setTimeout(()=>{404===e?n("abort",e):n("next",r)});return}setTimeout(()=>{n("success",e)})}).catch(()=>{n("next",r)})}},F[""]=r,"undefined"!=typeof document&&"undefined"!=typeof window){eo();let e=window;if(void 0!==e.IconifyPreload){let t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach(e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),w&&!t&&!e.prefix){let t=!1;return b(e)&&(e.prefix="",h(e,(e,n)=>{n&&function(e,t){let n=a(e,!0,w);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(v(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)})),t}let n=e.prefix;return!!s({provider:t,prefix:n,name:"a"})&&!!x(v(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}})}if(void 0!==e.IconifyProviders){let t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){let n="IconifyProviders["+e+"] is invalid.";try{let i=t[e];if("object"!=typeof i||!i||void 0===i.resources)continue;!function(e,t){let n=D(t);return null!==n&&(N[e]=n,!0)}(e,i)&&console.error(n)}catch(e){console.error(n)}}}}class ex extends o.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){let t;let n=this.state,i=this.props.icon;if("object"==typeof i&&null!==i&&"string"==typeof i.body){this._icon="",this._abortLoading(),(e||null===n.icon)&&this._setData({data:i});return}if("string"!=typeof i||null===(t=a(i,!1,!0))){this._abortLoading(),this._setData(null);return}let r=function(e){let t="string"==typeof e?a(e,!0,w):e;if(t){let e=v(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}(t);if(!r){this._loading&&this._loading.name===i||(this._abortLoading(),this._icon="",this._setData(null),null!==r&&(this._loading={name:i,abort:ea([t],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||null===n.icon){this._abortLoading(),this._icon=i;let e=["iconify"];""!==t.prefix&&e.push("iconify--"+t.prefix),""!==t.provider&&e.push("iconify--"+t.provider),this._setData({data:r,classes:e}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){let e=this.props,t=this.state.icon;if(null===t)return e.children?e.children:o.createElement("span",{});let n=e;return t.classes&&(n={...e,className:("string"==typeof e.className?e.className+" ":"")+t.classes.join(" ")}),ey({...u,...t.data},n,e._inline,e._ref)}}o.forwardRef(function(e,t){let n={...e,_ref:t,_inline:!1};return o.createElement(ex,n)}),o.forwardRef(function(e,t){let n={...e,_ref:t,_inline:!0};return o.createElement(ex,n)})}}]);