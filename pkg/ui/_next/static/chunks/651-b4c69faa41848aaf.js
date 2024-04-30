"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{79232:function(e,t,l){l.d(t,{e:function(){return n},x:function(){return i}});var n=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),i=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];let n=" ";for(let e of t)if("string"==typeof e&&e.length>0){n=e;break}return n}},38609:function(e,t,l){l.d(t,{G:function(){return i}});var n=l(30912),i=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:n.useEffect},15563:function(e,t,l){let n;l.d(t,{bd:function(){return I},Xe:function(){return P},L0:function(){return A},bU:function(){return M},qb:function(){return D},Ux:function(){return T}});var i=l(30912),r=l(13749);let o=Symbol.for("react-aria.i18n.locale"),s=Symbol.for("react-aria.i18n.strings");class c{getStringForLocale(e,t){let l=this.getStringsForLocale(t)[e];if(!l)throw Error("Could not find intl message ".concat(e," in ").concat(t," locale"));return l}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US";if(t[e])return t[e];let n=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[n])return t[n];for(let e in t)if(e.startsWith(n+"-"))return t[e];return t[l]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){let t=window[o];if(void 0===n){let e=window[s];if(!e)return null;for(let l in n={},e)n[l]=new c({[t]:e[l]},t)}let l=null==n?void 0:n[e];if(!l)throw Error('Strings for package "'.concat(e,'" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.'));return l}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}let a=new Map,u=new Map;class d{format(e,t){let l=this.strings.getStringForLocale(e,this.locale);return"function"==typeof l?l(t,this):l}plural(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"cardinal",n=t["="+e];if(n)return"function"==typeof n?n():n;let i=this.locale+":"+l,r=a.get(i);return r||(r=new Intl.PluralRules(this.locale,{type:l}),a.set(i,r)),"function"==typeof(n=t[r.select(e)]||t.other)?n():n}number(e){let t=u.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),u.set(this.locale,t)),t.format(e)}select(e,t){let l=e[t]||e.other;return"function"==typeof l?l():l}constructor(e,t){this.locale=e,this.strings=t}}let h=new Map,f=!1;try{f="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(e){}let y=!1;try{y="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(e){}let g={degree:{narrow:{default:"\xb0","ja-JP":" 度","zh-TW":"度","sl-SI":" \xb0"}}};class p{format(e){let t="";if(t=f||null==this.options.signDisplay?this.numberFormatter.format(e):function(e,t,l){if("auto"===t)return e.format(l);{if("never"===t)return e.format(Math.abs(l));let n=!1;if("always"===t?n=l>0||Object.is(l,0):"exceptZero"===t&&(Object.is(l,-0)||Object.is(l,0)?l=Math.abs(l):n=l>0),!n)return e.format(l);{let t=e.format(-l),n=e.format(l),i=t.replace(n,"").replace(/\u200e|\u061C/,"");return 1!=[...i].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),t.replace(n,"!!!").replace(i,"+").replace("!!!",n)}}}(this.numberFormatter,this.options.signDisplay,e),"unit"===this.options.style&&!y){var l;let{unit:e,unitDisplay:n="short",locale:i}=this.resolvedOptions();if(!e)return t;let r=null===(l=g[e])||void 0===l?void 0:l[n];t+=r[i]||r.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(e,t);if(t<e)throw RangeError("End date must be >= start date");return"".concat(this.format(e)," – ").concat(this.format(t))}formatRangeToParts(e,t){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw RangeError("End date must be >= start date");let l=this.numberFormatter.formatToParts(e),n=this.numberFormatter.formatToParts(t);return[...l.map(e=>({...e,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...n.map(e=>({...e,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return f||null==this.options.signDisplay||(e={...e,signDisplay:this.options.signDisplay}),y||"unit"!==this.options.style||(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,t={}){this.numberFormatter=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{numberingSystem:l}=t;if(l&&e.includes("-nu-")&&(e.includes("-u-")||(e+="-u-"),e+="-nu-".concat(l)),"unit"===t.style&&!y){var n;let{unit:e,unitDisplay:l="short"}=t;if(!e)throw Error('unit option must be provided with style: "unit"');if(!(null===(n=g[e])||void 0===n?void 0:n[l]))throw Error("Unsupported unit ".concat(e," with unitDisplay = ").concat(l));t={...t,style:"decimal"}}let i=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(h.has(i))return h.get(i);let r=new Intl.NumberFormat(e,t);return h.set(i,r),r}(e,t),this.options=t}}let m=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),K=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function v(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),l="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(l)return"rtl"===l.direction;if(t.script)return m.has(t.script)}let t=e.split("-")[0];return K.has(t)}let S=Symbol.for("react-aria.i18n.locale");function b(){let e=window[S]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:v(e)?"rtl":"ltr"}}let w=b(),k=new Set;function F(){for(let e of(w=b(),k))e(w)}function C(){let e=(0,r.Av)(),[t,l]=(0,i.useState)(w);return((0,i.useEffect)(()=>(0===k.size&&window.addEventListener("languagechange",F),k.add(l),()=>{k.delete(l),0===k.size&&window.removeEventListener("languagechange",F)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let x=i.createContext(null);function I(e){let{locale:t,children:l}=e,n=C(),r=t?{locale:t,direction:v(t)?"rtl":"ltr"}:n;return i.createElement(x.Provider,{value:r},l)}function M(){let e=C();return(0,i.useContext)(x)||e}let N=new WeakMap;function D(e,t){let l,{locale:n}=M(),r=t&&c.getGlobalDictionaryForPackage(t)||((l=N.get(e))||(l=new c(e),N.set(e,l)),l);return(0,i.useMemo)(()=>new d(n,r),[n,r])}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{locale:t}=M();return(0,i.useMemo)(()=>new p(t,e),[t,e])}let E=new Map;function P(e){let{locale:t}=M(),l=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(E.has(l))return E.get(l);let n=new Intl.Collator(t,e);return E.set(l,n),n}function A(e){let t=P({usage:"search",...e}),l=(0,i.useCallback)((e,l)=>0===l.length||(e=e.normalize("NFC"),l=l.normalize("NFC"),0===t.compare(e.slice(0,l.length),l)),[t]),n=(0,i.useCallback)((e,l)=>0===l.length||(e=e.normalize("NFC"),l=l.normalize("NFC"),0===t.compare(e.slice(-l.length),l)),[t]),r=(0,i.useCallback)((e,l)=>{if(0===l.length)return!0;e=e.normalize("NFC");let n=0,i=(l=l.normalize("NFC")).length;for(;n+i<=e.length;n++){let r=e.slice(n,n+i);if(0===t.compare(l,r))return!0}return!1},[t]);return(0,i.useMemo)(()=>({startsWith:l,endsWith:n,contains:r}),[l,n,r])}},60868:function(e,t,l){l.d(t,{Cs:function(){return f},_t:function(){return m},dp:function(){return p},gq:function(){return h},ip:function(){return d}});var n=l(48822),i=l(30912),r=l(88830),o=l(22161),s=l(75652),c=l(15563);function a(e){return(0,o.ad)()?e.altKey:e.ctrlKey}function u(e){return(0,o.V5)()?e.metaKey:e.ctrlKey}function d(e){let{keyboardDelegate:t,selectionManager:l,onTypeSelect:n}=e,r=(0,i.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var i;let o=1!==(i=e.key).length&&/^[A-Z]/i.test(i)?"":i;if(!o||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==o||!(r.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),r.search+=o;let s=t.getKeyForSearch(r.search,l.focusedKey);null==s&&(s=t.getKeyForSearch(r.search)),null!=s&&(l.setFocusedKey(s),n&&n(s)),clearTimeout(r.timeout),r.timeout=setTimeout(()=>{r.search=""},1e3)}:null}}}function h(e){let t,{selectionManager:l,keyboardDelegate:h,ref:f,autoFocus:y=!1,shouldFocusWrap:g=!1,disallowEmptySelection:p=!1,disallowSelectAll:m=!1,selectOnFocus:K="replace"===l.selectionBehavior,disallowTypeAhead:v=!1,shouldUseVirtualFocus:S,allowsTabNavigation:b=!1,isVirtualized:w,scrollRef:k=f,linkBehavior:F="action"}=e,{direction:C}=(0,c.bU)(),x=(0,o.tv)(),I=(0,i.useRef)({top:0,left:0});(0,o.zX)(k,"scroll",w?null:()=>{I.current={top:k.current.scrollTop,left:k.current.scrollLeft}});let M=(0,i.useRef)(y);(0,i.useEffect)(()=>{if(M.current){let e=null;"first"===y&&(e=h.getFirstKey()),"last"===y&&(e=h.getLastKey());let t=l.selectedKeys;if(t.size){for(let n of t)if(l.canSelectItem(n)){e=n;break}}l.setFocused(!0),l.setFocusedKey(e),null!=e||S||(0,r.ex)(f.current)}},[]);let N=(0,i.useRef)(l.focusedKey);(0,i.useEffect)(()=>{let e=(0,s.Jz)();if(l.isFocused&&null!=l.focusedKey&&(null==k?void 0:k.current)){let t=k.current.querySelector('[data-key="'.concat(CSS.escape(l.focusedKey.toString()),'"]'));t&&("keyboard"===e||M.current)&&(w||(0,o.zT)(k.current,t),"virtual"!==e&&(0,o.Gt)(t,{containingElement:f.current}))}l.isFocused&&null==l.focusedKey&&null!=N.current&&(0,r.ex)(f.current),N.current=l.focusedKey,M.current=!1},[w,k,l.focusedKey,l.isFocused,f]);let D={onKeyDown:e=>{var t,i,s,c,d,y,v,S;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!f.current.contains(e.target))return;let w=(t,i)=>{if(null!=t){if(l.isLink(t)&&"selection"===F&&K&&!a(e)){(0,n.flushSync)(()=>{l.setFocusedKey(t,i)});let r=k.current.querySelector('[data-key="'.concat(CSS.escape(t.toString()),'"]'));x.open(r,e);return}l.setFocusedKey(t,i),l.isLink(t)&&"override"===F||(e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):K&&!a(e)&&l.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(h.getKeyBelow){e.preventDefault();let n=null!=l.focusedKey?h.getKeyBelow(l.focusedKey):null===(t=h.getFirstKey)||void 0===t?void 0:t.call(h);null==n&&g&&(n=null===(i=h.getFirstKey)||void 0===i?void 0:i.call(h,l.focusedKey)),w(n)}break;case"ArrowUp":if(h.getKeyAbove){e.preventDefault();let t=null!=l.focusedKey?h.getKeyAbove(l.focusedKey):null===(s=h.getLastKey)||void 0===s?void 0:s.call(h);null==t&&g&&(t=null===(c=h.getLastKey)||void 0===c?void 0:c.call(h,l.focusedKey)),w(t)}break;case"ArrowLeft":if(h.getKeyLeftOf){e.preventDefault();let t=h.getKeyLeftOf(l.focusedKey);null==t&&g&&(t="rtl"===C?null===(d=h.getFirstKey)||void 0===d?void 0:d.call(h,l.focusedKey):null===(y=h.getLastKey)||void 0===y?void 0:y.call(h,l.focusedKey)),w(t,"rtl"===C?"first":"last")}break;case"ArrowRight":if(h.getKeyRightOf){e.preventDefault();let t=h.getKeyRightOf(l.focusedKey);null==t&&g&&(t="rtl"===C?null===(v=h.getLastKey)||void 0===v?void 0:v.call(h,l.focusedKey):null===(S=h.getFirstKey)||void 0===S?void 0:S.call(h,l.focusedKey)),w(t,"rtl"===C?"last":"first")}break;case"Home":if(h.getFirstKey){e.preventDefault();let t=h.getFirstKey(l.focusedKey,u(e));l.setFocusedKey(t),u(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):K&&l.replaceSelection(t)}break;case"End":if(h.getLastKey){e.preventDefault();let t=h.getLastKey(l.focusedKey,u(e));l.setFocusedKey(t),u(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):K&&l.replaceSelection(t)}break;case"PageDown":h.getKeyPageBelow&&(e.preventDefault(),w(h.getKeyPageBelow(l.focusedKey)));break;case"PageUp":h.getKeyPageAbove&&(e.preventDefault(),w(h.getKeyPageAbove(l.focusedKey)));break;case"a":u(e)&&"multiple"===l.selectionMode&&!0!==m&&(e.preventDefault(),l.selectAll());break;case"Escape":e.preventDefault(),p||l.clearSelection();break;case"Tab":if(!b){if(e.shiftKey)f.current.focus();else{let e,t,l=(0,r.QL)(f.current,{tabbable:!0});do(t=l.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,o.Ao)(e)}}}},onFocus:e=>{if(l.isFocused){e.currentTarget.contains(e.target)||l.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(l.setFocused(!0),null==l.focusedKey){var t,n,i;let r=e.relatedTarget;null!=(i=r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?null!==(t=l.lastSelectedKey)&&void 0!==t?t:h.getLastKey():null!==(n=l.firstSelectedKey)&&void 0!==n?n:h.getFirstKey())&&(l.setFocusedKey(i),K&&l.replaceSelection(i))}else w||(k.current.scrollTop=I.current.top,k.current.scrollLeft=I.current.left);if(!w&&null!=l.focusedKey){let e=k.current.querySelector('[data-key="'.concat(CSS.escape(l.focusedKey.toString()),'"]'));e&&(e.contains(document.activeElement)||(0,o.Ao)(e),"keyboard"===(0,s.Jz)()&&(0,o.Gt)(e,{containingElement:f.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l.setFocused(!1)},onMouseDown(e){k.current===e.target&&e.preventDefault()}},{typeSelectProps:T}=d({keyboardDelegate:h,selectionManager:l});return v||(D=(0,o.dG)(T,D)),S||(t=null==l.focusedKey?0:-1),{collectionProps:{...D,tabIndex:t}}}function f(e){let{selectionManager:t,key:l,ref:n,shouldSelectOnPressUp:c,shouldUseVirtualFocus:d,focus:h,isDisabled:f,onAction:p,allowsDifferentPressOrigin:m,linkBehavior:K="action"}=e,v=(0,o.tv)(),S=e=>{if("keyboard"===e.pointerType&&a(e))t.toggleSelection(l);else{if("none"===t.selectionMode)return;if(t.isLink(l)){if("selection"===K){v.open(n.current,e),t.setSelectedKeys(t.selectedKeys);return}if("override"===K||"none"===K)return}"single"===t.selectionMode?t.isSelected(l)&&!t.disallowEmptySelection?t.toggleSelection(l):t.replaceSelection(l):e&&e.shiftKey?t.extendSelection(l):"toggle"===t.selectionBehavior||e&&(u(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(l):t.replaceSelection(l)}};(0,i.useEffect)(()=>{l===t.focusedKey&&t.isFocused&&!d&&(h?h():document.activeElement!==n.current&&(0,r.ex)(n.current))},[n,l,t.focusedKey,t.childFocusStrategy,t.isFocused,d]),f=f||t.isDisabled(l);let b={};d||f?f&&(b.onMouseDown=e=>{e.preventDefault()}):b={tabIndex:l===t.focusedKey?0:-1,onFocus(e){e.target===n.current&&t.setFocusedKey(l)}};let w=t.isLink(l)&&"override"===K,k=t.isLink(l)&&"selection"!==K&&"none"!==K,F=!f&&t.canSelectItem(l)&&!w,C=(p||k)&&!f,x=C&&("replace"===t.selectionBehavior?!F:!F||t.isEmpty),I=C&&F&&"replace"===t.selectionBehavior,M=x||I,N=(0,i.useRef)(null),D=M&&F,T=(0,i.useRef)(!1),E=(0,i.useRef)(!1),P=e=>{p&&p(),k&&v.open(n.current,e)},A={};c?(A.onPressStart=e=>{N.current=e.pointerType,T.current=D,"keyboard"===e.pointerType&&(!M||g())&&S(e)},m?(A.onPressUp=x?null:e=>{"keyboard"!==e.pointerType&&F&&S(e)},A.onPress=x?P:null):A.onPress=e=>{x||I&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||y())&&P(e):"keyboard"!==e.pointerType&&F&&S(e)}):(A.onPressStart=e=>{N.current=e.pointerType,T.current=D,E.current=x,F&&("mouse"===e.pointerType&&!x||"keyboard"===e.pointerType&&(!C||g()))&&S(e)},A.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&M&&y()||"mouse"===e.pointerType&&E.current)&&(M?P(e):F&&S(e))}),b["data-key"]=l,A.preventFocusOnPress=d;let{pressProps:L,isPressed:R}=(0,s.r7)(A),B=I?e=>{"mouse"===N.current&&(e.stopPropagation(),e.preventDefault(),P(e))}:void 0,{longPressProps:z}=(0,s.TA)({isDisabled:!D,onLongPress(e){"touch"===e.pointerType&&(S(e),t.setSelectionBehavior("toggle"))}}),O=t.isLink(l)?e=>{o.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,o.dG)(b,F||x?L:{},D?z:{},{onDoubleClick:B,onDragStartCapture:e=>{"touch"===N.current&&T.current&&e.preventDefault()},onClick:O}),isPressed:R,isSelected:t.isSelected(l),isFocused:t.isFocused&&t.focusedKey===l,isDisabled:f,allowsSelection:F,hasAction:M}}function y(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function g(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}class p{getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,l){let n=this.getItem(e);if(!n)return null;let i=n.getBoundingClientRect();do e=t(e),n=this.getItem(e);while(n&&l(i,n.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){let t=this.collection.getItem(e);if((null==t?void 0:t.type)==="item"&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return this.ref.current.querySelector('[data-key="'.concat(CSS.escape(e.toString()),'"]'))}getKeyPageAbove(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,o.a9)(t))return this.getFirstKey();let n=t.getBoundingClientRect(),i=l.getBoundingClientRect();if("horizontal"===this.orientation){let r=n.x-t.scrollLeft,o=Math.max(0,i.x-r+i.width-n.width);for(;l&&i.x-r>o;)i=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let r=n.y-t.scrollTop,o=Math.max(0,i.y-r+i.height-n.height);for(;l&&i.y-r>o;)i=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,o.a9)(t))return this.getLastKey();let n=t.getBoundingClientRect(),i=l.getBoundingClientRect();if("horizontal"===this.orientation){let r=n.x-t.scrollLeft,o=Math.min(t.scrollWidth,i.x-r-i.width+n.width);for(;l&&i.x-r<o;)i=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let r=n.y-t.scrollTop,o=Math.min(t.scrollHeight,i.y-r-i.height+n.height);for(;l&&i.y-r<o;)i=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,n=t||this.getFirstKey();for(;null!=n;){let t=l.getItem(n),i=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(i,e))return n;n=this.getKeyBelow(n)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}function m(e){let{selectionManager:t,collection:l,disabledKeys:n,ref:r,keyboardDelegate:o}=e,s=(0,c.Xe)({usage:"search",sensitivity:"base"}),a=t.disabledBehavior,u=(0,i.useMemo)(()=>o||new p(l,"selection"===a?new Set:n,r,s),[o,l,n,r,s,a]),{collectionProps:d}=h({...e,ref:r,selectionManager:t,keyboardDelegate:u});return{listProps:d}}},23919:function(e,t,l){l.d(t,{$0:function(){return s},Em:function(){return y},Kx:function(){return d},_P:function(){return h},ck:function(){return r},eg:function(){return p},is:function(){return v},l8:function(){return f},s:function(){return g}});var n=l(30912);function i(e){return null}i.getCollectionNode=function*(e,t){let{childItems:l,title:i,children:r}=e,o=e.title||e.children,s=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&n.Children.count(e.children)>0),*childNodes(){if(l)for(let e of l)yield{type:"item",value:e};else if(i){let e=[];n.Children.forEach(r,t=>{e.push({type:"item",element:t})}),yield*e}}}};let r=i;function o(e){return null}o.getCollectionNode=function*(e){let{children:t,title:l,items:i}=e;yield{type:"section",props:e,hasChildNodes:!0,rendered:l,"aria-label":e["aria-label"],*childNodes(){if("function"==typeof t){if(!i)throw Error("props.children was a function but props.items is missing");for(let e of i)yield{type:"item",value:e,renderer:t}}else{let e=[];n.Children.forEach(t,t=>{e.push({type:"item",element:t})}),yield*e}}}};let s=o;class c{build(e,t){return this.context=t,a(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let l of e.items)yield*this.getFullNode({value:l},{renderer:t})}else{let e=[];n.Children.forEach(t,t=>{e.push(t)});let l=0;for(let t of e)for(let e of this.getFullNode({element:t,index:l},{}))l++,yield e}}getKey(e,t,l,n){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return"".concat(n).concat(t.key);let i=t.value;if(null!=i){var r;let e=null!==(r=i.key)&&void 0!==r?r:i.id;if(null==e)throw Error("No key found for item");return e}return n?"".concat(n,".").concat(t.index):"$.".concat(t.index)}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,i){let r=e.element;if(!r&&e.value&&t&&t.renderer){let l=this.cache.get(e.value);if(l&&(!l.shouldInvalidate||!l.shouldInvalidate(this.context))){l.index=e.index,l.parentKey=i?i.key:null,yield l;return}r=t.renderer(e.value)}if(n.isValidElement(r)){let n=r.type;if("function"!=typeof n&&"function"!=typeof n.getCollectionNode){let e="function"==typeof r.type?r.type.name:r.type;throw Error("Unknown element <".concat(e,"> in collection."))}let o=n.getCollectionNode(r.props,this.context),s=e.index,c=o.next();for(;!c.done&&c.value;){let n=c.value;e.index=s;let a=n.key;a||(a=n.element?null:this.getKey(r,e,t,l));let d=[...this.getFullNode({...n,key:a,index:s,wrapper:function(e,t){return e&&t?l=>e(t(l)):e||t||void 0}(e.wrapper,n.wrapper)},this.getChildState(t,n),l?"".concat(l).concat(r.key):r.key,i)];for(let t of d){if(t.value=n.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error("Unsupported type <".concat(u(t.type),"> in <").concat(u(i.type),">. Only <").concat(u(e.type),"> is supported."));s++,yield t}c=o.next(d)}return}if(null==e.key)return;let o=this,s={type:e.type,props:e.props,key:e.key,parentKey:i?i.key:null,value:e.value,level:i?i.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:a(function*(){if(!e.hasChildNodes)return;let l=0;for(let n of e.childNodes())for(let e of(null!=n.key&&(n.key="".concat(s.key).concat(n.key)),n.index=l,o.getFullNode(n,o.getChildState(t,n),s.key,s)))l++,yield e})};yield s}constructor(){this.cache=new WeakMap}}function a(e){let t=[],l=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let n of(l||(l=e()),l))t.push(n),yield n}}}function u(e){return e[0].toUpperCase()+e.slice(1)}function d(e,t,l){let i=(0,n.useMemo)(()=>new c,[]),{children:r,items:o,collection:s}=e;return(0,n.useMemo)(()=>s||t(i.build({children:r,items:o},l)),[i,r,o,s,l,t])}function h(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function f(e){return y(e,0)}function y(e,t){if(t<0)return;let l=0;for(let n of e){if(l===t)return n;l++}}function g(e){let t;for(let l of e)t=l;return t}function p(e,t,l){if(t.parentKey===l.parentKey)return t.index-l.index;let n=[...m(e,t),t],i=[...m(e,l),l],r=n.slice(0,i.length).findIndex((e,t)=>e!==i[t]);return -1!==r?(t=n[r],l=i[r],t.index-l.index):n.findIndex(e=>e===l)>=0?1:(i.findIndex(e=>e===t),-1)}function m(e,t){let l=[];for(;(null==t?void 0:t.parentKey)!=null;)l.unshift(t=e.getItem(t.parentKey));return l}let K=new WeakMap;function v(e){let t=K.get(e);if(null!=t)return t;t=0;let l=n=>{for(let i of n)"section"===i.type?l(h(i,e)):t++};return l(e),K.set(e,t),t}},33168:function(e,t,l){l.d(t,{Z:function(){return a},q:function(){return s}});var n=l(63271),i=l(30912),r=l(23919);class o extends Set{constructor(e,t,l){super(e),e instanceof o?(this.anchorKey=t||e.anchorKey,this.currentKey=l||e.currentKey):(this.anchorKey=t,this.currentKey=l)}}function s(e){let{selectionMode:t="none",disallowEmptySelection:l,allowDuplicateSelectionEvents:r,selectionBehavior:s="toggle",disabledBehavior:a="all"}=e,u=(0,i.useRef)(!1),[,d]=(0,i.useState)(!1),h=(0,i.useRef)(null),f=(0,i.useRef)(null),[,y]=(0,i.useState)(null),g=(0,i.useMemo)(()=>c(e.selectedKeys),[e.selectedKeys]),p=(0,i.useMemo)(()=>c(e.defaultSelectedKeys,new o),[e.defaultSelectedKeys]),[m,K]=(0,n.zk)(g,p,e.onSelectionChange),v=(0,i.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[S,b]=(0,i.useState)(s);"replace"===s&&"toggle"===S&&"object"==typeof m&&0===m.size&&b("replace");let w=(0,i.useRef)(s);return(0,i.useEffect)(()=>{s!==w.current&&(b(s),w.current=s)},[s]),{selectionMode:t,disallowEmptySelection:l,selectionBehavior:S,setSelectionBehavior:b,get isFocused(){return u.current},setFocused(e){u.current=e,d(e)},get focusedKey(){return h.current},get childFocusStrategy(){return f.current},setFocusedKey(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";h.current=e,f.current=t,y(e)},selectedKeys:m,setSelectedKeys(e){(r||!function(e,t){if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;return!0}(e,m))&&K(e)},disabledKeys:v,disabledBehavior:a}}function c(e,t){return e?"all"===e?"all":new o(e):t}class a{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&0>(0,r.eg)(this.collection,l,e))&&(e=l)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&(0,r.eg)(this.collection,l,e)>0)&&(e=l)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new o([e],e,e);else{let l=this.state.selectedKeys,n=l.anchorKey||e;for(let i of(t=new o(l,n,e),this.getKeyRange(n,l.currentKey||e)))t.delete(i);for(let l of this.getKeyRange(e,n))this.canSelectItem(l)&&t.add(l)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let l=this.collection.getItem(e),n=this.collection.getItem(t);return l&&n?0>=(0,r.eg)(this.collection,l,n)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],n=e;for(;n;){let e=this.collection.getItem(n);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&l.push(n),n===t)return l;n=this.collection.getKeyAfter(n)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new o("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new o([e],e,e):new o;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new o;for(let l of e)if(null!=(l=this.getKey(l))&&(t.add(l),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l;){if(this.canSelectItem(l)){let n=this.collection.getItem(l);"item"===n.type&&e.push(l),n.hasChildNodes&&(this.allowsCellSelection||"item"!==n.type)&&t((0,r.l8)((0,r._P)(n,this.collection)).key)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new o)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let t=this.collection.getItem(e);return!!t&&("cell"!==t.type||!!this.allowsCellSelection)}isDisabled(e){return this.state.disabledKeys.has(e)&&"all"===this.state.disabledBehavior}isLink(e){var t,l;return!!(null===(l=this.collection.getItem(e))||void 0===l?void 0:null===(t=l.props)||void 0===t?void 0:t.href)}constructor(e,t,l){var n;this.collection=e,this.state=t,this.allowsCellSelection=null!==(n=null==l?void 0:l.allowsCellSelection)&&void 0!==n&&n,this._isSelectAll=null}}},63271:function(e,t,l){l.d(t,{N4:function(){return o},uZ:function(){return r},zk:function(){return i}});var n=l(30912);function i(e,t,l){let[i,r]=(0,n.useState)(e||t),o=(0,n.useRef)(void 0!==e),s=void 0!==e;(0,n.useEffect)(()=>{let e=o.current;e!==s&&console.warn("WARN: A component changed from ".concat(e?"controlled":"uncontrolled"," to ").concat(s?"controlled":"uncontrolled",".")),o.current=s},[s]);let c=s?e:i,a=(0,n.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];let o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];l&&!Object.is(c,e)&&l(e,...n),s||(c=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),r(function(t){for(var l=arguments.length,i=Array(l>1?l-1:0),r=1;r<l;r++)i[r-1]=arguments[r];let a=e(s?c:t,...i);return(o(a,...n),s)?t:a})):(s||r(e),o(e,...n))},[s,c,l]);return[c,a]}function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.min(Math.max(e,t),l)}function o(e,t,l,n){t=Number(t),l=Number(l);let i=(e-(isNaN(t)?0:t))%n,r=2*Math.abs(i)>=n?e+Math.sign(i)*(n-Math.abs(i)):e-i;isNaN(t)?!isNaN(l)&&r>l&&(r=Math.floor(l/n)*n):r<t?r=t:!isNaN(l)&&r>l&&(r=t+Math.floor((l-t)/n)*n);let o=n.toString(),s=o.indexOf("."),c=s>=0?o.length-s:0;if(c>0){let e=Math.pow(10,c);r=Math.round(r*e)/e}return r}}}]);