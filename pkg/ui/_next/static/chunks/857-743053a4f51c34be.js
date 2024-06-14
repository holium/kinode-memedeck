"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{67511:function(e,r,a){a.d(r,{f:function(){return l}});var n=a(91104),l=()=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,n.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]})},5606:function(e,r,a){a.d(r,{F:function(){return b}});var n=a(97915),l=a(4292),s=a(69901),t=a(93371),o=a(39276),i=a(88402),d=a(3511),u=a(73687),c=a(63137),m=a(63831),f=a(77785);function b(){var e,r,a,b,g;let p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=(0,n.C)(),h=!!v,{as:w,ref:x,src:y,name:k,icon:C,classNames:j,fallback:N,alt:z=k||"avatar",imgRef:I,color:B=null!=(e=null==v?void 0:v.color)?e:"default",radius:G=null!=(r=null==v?void 0:v.radius)?r:"full",size:W=null!=(a=null==v?void 0:v.size)?a:"md",isBordered:P=null!=(b=null==v?void 0:v.isBordered)&&b,isDisabled:M=null!=(g=null==v?void 0:v.isDisabled)&&g,isFocusable:F=!1,getInitials:J=o.e,ignoreFallback:_=!1,showFallback:Z=!1,ImgComponent:A="img",imgProps:D,className:E,onError:S,...U}=p,V=w||"span",O=(0,t.gy)(x),R=(0,t.gy)(I),{isFocusVisible:K,isFocused:L,focusProps:X}=(0,u.Fx)(),{isHovered:q,hoverProps:H}=(0,f.XI)({isDisabled:M}),Q="loaded"===(0,m.d)({src:y,onError:S,ignoreFallback:_}),T=(!y||!Q)&&Z,Y=(0,c.useMemo)(()=>{var e;return(0,l.r)({color:B,radius:G,size:W,isBordered:P,isDisabled:M,isInGroup:h,isInGridGroup:null!=(e=null==v?void 0:v.isGrid)&&e})},[B,G,W,P,M,h,null==v?void 0:v.isGrid]),$=(0,i.W)(null==j?void 0:j.base,E),ee=(0,c.useMemo)(()=>F||"button"===w,[F,w]),er=(0,c.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:O,tabIndex:ee?0:-1,"data-hover":(0,d.PB)(q),"data-focus":(0,d.PB)(L),"data-focus-visible":(0,d.PB)(K),className:Y.base({class:(0,i.W)($,null==e?void 0:e.className)}),...(0,s.dG)(U,H,ee?X:{})}},[ee,Y,$,X,U]),ea=(0,c.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:R,src:y,"data-loaded":(0,d.PB)(Q),className:Y.img({class:null==j?void 0:j.img}),...(0,s.dG)(D,e)}},[Y,Q,D,y,R]);return{Component:V,ImgComponent:A,src:y,alt:z,icon:C,name:k,imgRef:R,slots:Y,classNames:j,fallback:N,isImgLoaded:Q,showFallback:T,ignoreFallback:_,getInitials:J,getAvatarProps:er,getImageProps:ea}}},97915:function(e,r,a){a.d(r,{C:function(){return l},k:function(){return n}});var[n,l]=(0,a(36711).k)({name:"AvatarGroupContext",strict:!1})},45268:function(e,r,a){a.d(r,{h:function(){return d}});var n=a(67511),l=a(5606),s=a(63137),t=a(63471),o=a(91104),i=(0,t.Gp)((e,r)=>{let{Component:a,ImgComponent:t,src:i,icon:d=(0,o.jsx)(n.f,{}),alt:u,classNames:c,slots:m,name:f,showFallback:b,fallback:g,getInitials:p,getAvatarProps:v,getImageProps:h}=(0,l.F)({...e,ref:r}),w=(0,s.useMemo)(()=>!b&&i?null:g?(0,o.jsx)("div",{"aria-label":u,className:m.fallback({class:null==c?void 0:c.fallback}),role:"img",children:g}):f?(0,o.jsx)("span",{"aria-label":u,className:m.name({class:null==c?void 0:c.name}),role:"img",children:p(f)}):(0,o.jsx)("span",{"aria-label":u,className:m.icon({class:null==c?void 0:c.icon}),role:"img",children:d}),[b,i,g,f,c]);return(0,o.jsxs)(a,{...v(),children:[i&&(0,o.jsx)(t,{...h(),alt:u}),w]})});i.displayName="NextUI.Avatar";var d=i},83298:function(e,r,a){a.d(r,{d:function(){return u}});var n=a(63137),l=a(63471),s=(0,a(18903).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),t=a(93371),o=a(88402),i=a(3511),d=a(63831);function u(e){let[r,a]=(0,l.oe)(e,s.variantKeys),{ref:u,as:c,src:m,className:f,classNames:b,loading:g,isBlurred:p,fallbackSrc:v,isLoading:h,disableSkeleton:w=!!v,removeWrapper:x=!1,onError:y,onLoad:k,srcSet:C,sizes:j,crossOrigin:N,...z}=r,I=(0,d.d)({src:m,loading:g,onError:y,onLoad:k,ignoreFallback:!1,srcSet:C,sizes:j,crossOrigin:N}),B="loaded"===I&&!h,G="loading"===I||h,W=e.isZoomed,P=(0,t.gy)(u),{w:M}=(0,n.useMemo)(()=>({w:r.width?"number"==typeof r.width?"".concat(r.width,"px"):r.width:"fit-content"}),[null==r?void 0:r.width]),F=(!m||!B)&&!!v,J=G&&!w,_=(0,n.useMemo)(()=>s({...a,showSkeleton:J}),[...Object.values(a),J]),Z=(0,o.W)(f,null==b?void 0:b.img),A=(0,n.useCallback)(()=>{let e=F?{backgroundImage:"url(".concat(v,")")}:{};return{className:_.wrapper({class:null==b?void 0:b.wrapper}),style:{...e,maxWidth:M}}},[_,F,v,null==b?void 0:b.wrapper]),D=(0,n.useCallback)(()=>({src:m,"aria-hidden":(0,i.PB)(!0),className:_.blurredImg({class:null==b?void 0:b.blurredImg})}),[_,m,null==b?void 0:b.blurredImg]);return{Component:c||"img",domRef:P,slots:_,classNames:b,isBlurred:p,disableSkeleton:w,fallbackSrc:v,removeWrapper:x,isZoomed:W,isLoading:G,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,o.W)(Z,null==e?void 0:e.className);return{src:m,ref:P,"data-loaded":(0,i.PB)(B),className:_.img({class:r}),loading:g,srcSet:C,sizes:j,crossOrigin:N,...z}},getWrapperProps:A,getBlurredImgProps:D}}},1490:function(e,r,a){a.d(r,{J:function(){return i}});var n=a(83298),l=a(63137),s=a(63471),t=a(91104),o=(0,s.Gp)((e,r)=>{let{Component:a,domRef:s,slots:o,classNames:i,isBlurred:d,isZoomed:u,fallbackSrc:c,removeWrapper:m,disableSkeleton:f,getImgProps:b,getWrapperProps:g,getBlurredImgProps:p}=(0,n.d)({...e,ref:r}),v=(0,t.jsx)(a,{ref:s,...b()});if(m)return v;let h=(0,t.jsx)("div",{className:o.zoomedWrapper({class:null==i?void 0:i.zoomedWrapper}),children:v});return d?(0,t.jsxs)("div",{...g(),children:[u?h:v,(0,l.cloneElement)(v,p())]}):u||!f||c?(0,t.jsxs)("div",{...g(),children:[" ",u?h:v]}):v});o.displayName="NextUI.Image";var i=o},4292:function(e,r,a){a.d(r,{r:function(){return t},z:function(){return o}});var n=a(57978),l=a(18903),s=a(98293),t=(0,l.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...s.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...s.z6,"flex","items-center","justify-center"],name:[...s.z6,"font-normal","text-center","text-inherit"],icon:[...s.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:n.J.solid.default},primary:{base:n.J.solid.primary},secondary:{base:n.J.solid.secondary},success:{base:n.J.solid.success},warning:{base:n.J.solid.warning},danger:{base:n.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]}),o=(0,l.tv)({base:"flex items-center justify-center h-auto w-max-content",variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}})},63831:function(e,r,a){a.d(r,{d:function(){return s}});var n=a(63137),l=a(9328);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{loading:r,src:a,srcSet:s,onLoad:t,onError:o,crossOrigin:i,sizes:d,ignoreFallback:u}=e,[c,m]=(0,n.useState)("pending");(0,n.useEffect)(()=>{m(a?"loading":"pending")},[a]);let f=(0,n.useRef)(),b=(0,n.useCallback)(()=>{if(!a)return;g();let e=new Image;e.src=a,i&&(e.crossOrigin=i),s&&(e.srcset=s),d&&(e.sizes=d),r&&(e.loading=r),e.onload=e=>{g(),m("loaded"),null==t||t(e)},e.onerror=e=>{g(),m("failed"),null==o||o(e)},f.current=e},[a,i,s,d,t,o,r]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,l.G)(()=>{if(!u)return"loading"===c&&b(),()=>{g()}},[c,b,u]),u?"loaded":c}},49141:function(e,r,a){a.d(r,{z:function(){return i}});var n=a(23387),l=a(63471),s=a(45268),t=a(91104),o=(0,l.Gp)((e,r)=>{let{Component:a,name:l,slots:o,classNames:i,description:d,avatarProps:u,getUserProps:c}=(0,n.a)({...e,ref:r});return(0,t.jsxs)(a,{...c(),children:[(0,t.jsx)(s.h,{...u}),(0,t.jsxs)("div",{className:o.wrapper({class:null==i?void 0:i.wrapper}),children:[(0,t.jsx)("span",{className:o.name({class:null==i?void 0:i.name}),children:l}),(0,t.jsx)("span",{className:o.description({class:null==i?void 0:i.description}),children:d})]})]})});o.displayName="NextUI.User";var i=o},23387:function(e,r,a){a.d(r,{a:function(){return f}});var n=a(63137),l=a(73687),s=a(18903),t=a(98293),o=(0,s.tv)({slots:{base:["inline-flex items-center justify-center gap-2 rounded-small outline-none",...t.Dh],wrapper:"inline-flex flex-col items-start",name:"text-small text-inherit",description:"text-tiny text-foreground-400"}}),i=a(88402),d=a(3511),u=a(9434),c=a(93371),m=a(69901);function f(e){let{as:r,ref:a,name:s,description:t,className:f,classNames:b,isFocusable:g=!1,avatarProps:p={},...v}=e,h={isFocusable:!1,name:"string"==typeof s?s:void 0,...p},w=r||"div",x="string"==typeof w,y=(0,c.gy)(a),{isFocusVisible:k,isFocused:C,focusProps:j}=(0,l.Fx)({}),N=(0,n.useMemo)(()=>g||"button"===r,[g,r]),z=(0,n.useMemo)(()=>o(),[]),I=(0,i.W)(null==b?void 0:b.base,f),B=(0,n.useCallback)(()=>({ref:y,tabIndex:N?0:-1,"data-focus-visible":(0,d.PB)(k),"data-focus":(0,d.PB)(C),className:z.base({class:I}),...(0,m.dG)((0,u.z)(v,{enabled:x}),N?j:{})}),[N,z,I,j,v]);return{Component:w,className:f,slots:z,name:s,description:t,classNames:b,baseStyles:I,avatarProps:h,getUserProps:B}}}}]);