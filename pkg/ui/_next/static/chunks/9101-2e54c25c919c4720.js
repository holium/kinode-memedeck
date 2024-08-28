"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9101],{50352:function(t,i,e){e.d(i,{Q:function(){return o}});var a=e(82581),n=e(53578),r=e(65733),l=e(72257);function o(t,i,e){let{validationBehavior:o,focus:d}=t;(0,r.b)(()=>{if("native"===o&&(null==e?void 0:e.current)){var t;let a,n=i.realtimeValidation.isInvalid?i.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";e.current.setCustomValidity(n),e.current.hasAttribute("title")||(e.current.title=""),i.realtimeValidation.isInvalid||i.updateValidation({isInvalid:!(t=e.current).validity.valid,validationDetails:{badInput:(a=t.validity).badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid},validationErrors:t.validationMessage?[t.validationMessage]:[]})}});let u=(0,l.i)(()=>{i.resetValidation()}),s=(0,l.i)(t=>{var a,r;i.displayValidation.isInvalid||i.commitValidation();let l=null==e?void 0:null===(a=e.current)||void 0===a?void 0:a.form;!t.defaultPrevented&&e&&l&&function(t){for(let i=0;i<t.elements.length;i++){let e=t.elements[i];if(!e.validity.valid)return e}return null}(l)===e.current&&(d?d():null===(r=e.current)||void 0===r||r.focus(),(0,n._w)("keyboard")),t.preventDefault()}),v=(0,l.i)(()=>{i.commitValidation()});(0,a.useEffect)(()=>{let t=null==e?void 0:e.current;if(!t)return;let i=t.form;return t.addEventListener("invalid",s),t.addEventListener("change",v),null==i||i.addEventListener("reset",u),()=>{t.removeEventListener("invalid",s),t.removeEventListener("change",v),null==i||i.removeEventListener("reset",u)}},[e,s,v,u,o])}},3251:function(t,i,e){e.d(i,{U:function(){return l}});var a=e(41585),n=e(74528),r=e(31473);function l(t){let{description:i,errorMessage:e,isInvalid:l,validationState:o}=t,{labelProps:d,fieldProps:u}=(0,a.N)(t),s=(0,n.mp)([!!i,!!e,l,o]),v=(0,n.mp)([!!i,!!e,l,o]);return{labelProps:d,fieldProps:u=(0,r.d)(u,{"aria-describedby":[s,v,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:s},errorMessageProps:{id:v}}}},41585:function(t,i,e){e.d(i,{N:function(){return r}});var a=e(74528),n=e(83108);function r(t){let{id:i,label:e,"aria-labelledby":r,"aria-label":l,labelElementType:o="label"}=t;i=(0,a.Me)(i);let d=(0,a.Me)(),u={};return e?(r=r?`${d} ${r}`:d,u={id:d,htmlFor:"label"===o?i:void 0}):r||l||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:u,fieldProps:(0,n.b)({id:i,"aria-label":l,"aria-labelledby":r})}}},17732:function(t,i,e){e.d(i,{y:function(){return r}});var a=e(72257),n=e(82581);function r(t,i,e){let r=(0,n.useRef)(i),l=(0,a.i)(()=>{e&&e(r.current)});(0,n.useEffect)(()=>{var i;let e=null==t?void 0:null===(i=t.current)||void 0===i?void 0:i.form;return null==e||e.addEventListener("reset",l),()=>{null==e||e.removeEventListener("reset",l)}},[t,l])}},44628:function(t,i,e){e.d(i,{PS:function(){return l},Q3:function(){return u},W0:function(){return f},tL:function(){return d},zl:function(){return n}});var a=e(82581);let n={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},r={...n,customError:!0,valid:!1},l={isInvalid:!1,validationDetails:n,validationErrors:[]},o=(0,a.createContext)({}),d="__formValidationState"+Date.now();function u(t){if(t[d]){let{realtimeValidation:i,displayValidation:e,updateValidation:a,resetValidation:n,commitValidation:r}=t[d];return{realtimeValidation:i,displayValidation:e,updateValidation:a,resetValidation:n,commitValidation:r}}return function(t){let{isInvalid:i,validationState:e,name:n,value:d,builtinValidation:u,validate:f,validationBehavior:m="aria"}=t;e&&(i||(i="invalid"===e));let p=void 0!==i?{isInvalid:i,validationErrors:[],validationDetails:r}:null,b=(0,a.useMemo)(()=>v(function(t,i){if("function"==typeof t){let e=t(i);if(e&&"boolean"!=typeof e)return s(e)}return[]}(f,d)),[f,d]);(null==u?void 0:u.validationDetails.valid)&&(u=null);let y=(0,a.useContext)(o),E=(0,a.useMemo)(()=>n?Array.isArray(n)?n.flatMap(t=>s(y[t])):s(y[n]):[],[y,n]),[V,h]=(0,a.useState)(y),[g,M]=(0,a.useState)(!1);y!==V&&(h(y),M(!1));let I=(0,a.useMemo)(()=>v(g?[]:E),[g,E]),w=(0,a.useRef)(l),[L,S]=(0,a.useState)(l),D=(0,a.useRef)(l),[P,_]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!P)return;_(!1);let t=b||u||w.current;c(t,D.current)||(D.current=t,S(t))}),{realtimeValidation:p||I||b||u||l,displayValidation:"native"===m?p||I||L:p||I||b||u||L,updateValidation(t){"aria"!==m||c(L,t)?w.current=t:S(t)},resetValidation(){c(l,D.current)||(D.current=l,S(l)),"native"===m&&_(!1),M(!0)},commitValidation(){"native"===m&&_(!0),M(!0)}}}(t)}function s(t){return t?Array.isArray(t)?t:[t]:[]}function v(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:r}:null}function c(t,i){return t===i||t&&i&&t.isInvalid===i.isInvalid&&t.validationErrors.length===i.validationErrors.length&&t.validationErrors.every((t,e)=>t===i.validationErrors[e])&&Object.entries(t.validationDetails).every(([t,e])=>i.validationDetails[t]===e)}function f(...t){let i=new Set,e=!1,a={...n};for(let n of t){for(let t of n.validationErrors)i.add(t);for(let t in e||(e=n.isInvalid),a)a[t]||(a[t]=n.validationDetails[t])}return a.valid=!e,{isInvalid:e,validationErrors:[...i],validationDetails:a}}}}]);