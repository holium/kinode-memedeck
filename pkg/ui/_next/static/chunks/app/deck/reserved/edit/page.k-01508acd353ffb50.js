(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3314],{23245:function(e,t,s){Promise.resolve().then(s.bind(s,75319)),Promise.resolve().then(s.bind(s,47306)),Promise.resolve().then(s.bind(s,13108)),Promise.resolve().then(s.bind(s,72148))},19783:function(e,t,s){"use strict";s.d(t,{U:function(){return g}});var l=s(57348),i=s(53350),n=s(92378),a=s(6526),r=s(950),c=s(4930),o=s(67425),d=s(12465),u=s(15346),m=s(69467),h=s(39543),f=s(38857);let x=async e=>new Promise((t,s)=>{let l=new Image,i=new FileReader;i.onload=()=>{l.src=i.result},l.onload=()=>{let s=(0,h.vO)(l.width,l.height),{paneWidth:i,paneHeight:n}=(0,h.rf)(m.WV.One,s),a=document.createElement("canvas");a.width=i,a.height=n;let r=a.getContext("2d");if(!r)return;let c=l.width,o=l.height;(0,f.h)({ctx:r,image:l,targetWidth:i,targetHeight:n,imageWidth:c,imageHeight:o}),t({base64:a.toDataURL(e.type),aspectRatio:s,targetWidth:i,targetHeight:n})},i.onerror=e=>{s(e)},i.readAsDataURL(e)});var p=s(99957),v=s(81727);let g=e=>{let{initialSrc:t,imageRef:s,bgColor:m="bg-black-300",onParseImage:h,onClickDeleteMeme:f}=e,[g,j]=(0,u.useState)(t),[b,w]=(0,u.useState)(!1),[y,k]=(0,u.useState)(!1),N=(0,u.useCallback)(async e=>{if(e){if((0,d.sy)(),e.length>10){(0,d.yv)("Please upload 10 files or less",{variant:"error"});return}for(let t=0;t<e.length;t++)if(e[t].size>33554432){(0,d.yv)("Please upload files 32MB or less",{variant:"error"});return}w(!0);try{if(0===e.length)return;let t=e[0],{base64:s,aspectRatio:l,targetWidth:i,targetHeight:n}=await x(t),a=s.split(",")[1],r=Uint8Array.from(atob(a),e=>e.charCodeAt(0));await h(r,i,n,l),j(s)}catch(e){console.error("Error uploading files",e),(0,d.yv)("Error uploading files",{variant:"error"})}finally{w(!1)}}},[h]),C=(0,u.useCallback)(async()=>{k(!0);try{await f(),j(null)}catch(e){console.error("Error deleting meme",e)}finally{k(!1)}},[f]);return(0,l.jsxs)(n.w,{radius:"md",shadow:"none",className:(0,p.cn)(m,"border-1 border-transparent transition-all",g?"":"hover:border-orange-400"),children:[(0,l.jsx)("div",{className:"relative size-full max-h-full max-w-full aspect-square flex items-center justify-center ".concat(g?"":"cursor-pointer"),children:g?(0,l.jsx)(a.J,{ref:s,alt:"Image input",classNames:{wrapper:"size-full min-w-full min-h-full",img:"size-full object-cover rounded-none"},src:g}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.JO,{className:"size-8",icon:"hugeicons:image-upload-01"}),(0,l.jsx)("input",{type:"file",multiple:!1,accept:v.RL,className:"absolute inset-0 size-full cursor-pointer opacity-0",onChange:e=>N(e.target.files)})]})}),(0,l.jsxs)(r.i,{className:"gap-4 justify-end min-h-10 overflow-hidden absolute w-full z-10 -top-2.5 -right-2.5",children:[b?(0,l.jsx)(c.c,{size:"sm",color:"warning"}):null,g&&!b?(0,l.jsx)(o.A,{size:"sm",variant:"flat",radius:"full",className:"backdrop-blur-sm bg-red-900/70",isIconOnly:!0,color:"danger",isLoading:y,onClick:C,children:(0,l.jsx)(i.JO,{className:"size-5 !text-red-400",icon:"ic:baseline-close"})}):null]})]})}},13343:function(e,t,s){"use strict";s.d(t,{E:function(){return a}});var l=s(57348),i=s(81015),n=s(54167);let a=e=>{let{children:t,...s}=e;return n.BB||n.cm?(0,l.jsx)(i.e,{...s,children:t}):(0,l.jsx)(l.Fragment,{children:t})}},15800:function(e,t,s){"use strict";s.d(t,{W:function(){return a},y:function(){return r}});var l=s(57348),i=s(45155),n=s(13343);let a=e=>{let{avatarSrc:t,badgeSrc:s,screenName:a,userHandle:r,p:c="px-4 py-2"}=e;return(0,l.jsxs)("div",{className:"flex items-center gap-3 text-sm select-none ".concat(c),children:[(0,l.jsx)("div",{className:"bg-black-400 size-8 rounded-full",children:(0,l.jsx)(i.default,{className:"rounded-full",src:t,alt:r,width:40,height:40})}),(0,l.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center gap-2 truncate",children:[(0,l.jsx)("div",{className:"max-w-48 truncate text-md font-semibold leading-tight",children:a}),s&&(0,l.jsx)(n.E,{content:"Kinode user",children:(0,l.jsx)(i.default,{src:s,alt:r,className:"rounded-sm",width:14,height:14})})]}),(0,l.jsxs)("div",{className:"text-white-400/50 text-sm",children:["@",r]})]})]})},r=()=>(0,l.jsxs)("div",{className:"flex items-center gap-3 text-sm select-none px-4 py-2 w-full",children:[(0,l.jsx)("div",{className:"bg-white-400/10 size-8 rounded-full"}),(0,l.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,l.jsx)("div",{className:"bg-white-400/10 w-24 h-[18px] rounded-md"}),(0,l.jsx)("div",{className:"bg-white-400/5 w-20 h-[20px] rounded-md"})]})]})},53786:function(e,t,s){"use strict";s.d(t,{h:function(){return w}});var l=s(57348),i=s(92378),n=s(53350),a=s(4930),r=s(51934),c=s(88036),o=s(15346),d=s(15800),u=s(72148),m=s(35878);let h=(0,s(74859).k)(m.P.searchUser,1e3),f=()=>{let{admins:e,onClickAddAdmin:t}=(0,u.useEditDeck)(),[s,i]=(0,o.useState)(""),[m,f]=(0,o.useState)(!1),[x,p]=(0,o.useState)([]),v=(0,o.useCallback)(e=>{if(i(e),f(!0),e.length<1){p([]);return}h({search:e,start:0,limit:5}).then(e=>{e&&p(e)}).finally(()=>{f(!1)})},[]);return(0,l.jsx)("div",{className:"flex gap-3 p-3 justify-between",children:(0,l.jsxs)("div",{className:"flex gap-2 items-center flex-1",children:[(0,l.jsx)("div",{className:"flex items-center justify-center size-8 bg-white-400/10 rounded-full",children:m?(0,l.jsx)(a.c,{size:"sm"}):(0,l.jsx)(n.JO,{icon:"tabler:plus",className:" size-4"})}),(0,l.jsx)(r.d,{items:x,placeholder:"Add admin",size:"sm",fullWidth:!0,classNames:{base:"flex-1 max-w-full"},value:s,onValueChange:v,onSelectionChange:e=>{let s=x.find(t=>t.id===e);s&&(t({id:s.id,name:s.screen_name,screen_name:s.twitter_handle,profile_image_url_https:s.profile_image_url,badge_image_url:s.badge_image_url}),i(""),p(t=>t.filter(t=>t.id!==e)))},children:t=>(0,l.jsx)(c.R,{value:t.id,isDisabled:e.some(e=>e.id===t.id),children:(0,l.jsx)(d.W,{avatarSrc:t.profile_image_url,screenName:t.screen_name,userHandle:t.twitter_handle,badgeSrc:t.badge_image_url,p:"p-0"},t.id)},t.id)})]})})};var x=s(22094),p=s(54611),v=s(67425),g=s(22596),j=s(58484);let b=e=>{let{admin:t}=e,{fetchedDeck:s,isAddingAdmin:i,isRemovingAdmin:a,onClickRemoveAdmin:r}=(0,u.useEditDeck)(),c=(0,o.useMemo)(()=>(null==s?void 0:s.by.id.replace("user:",""))===t.id.replace("user:",""),[t.id,s]);return(0,l.jsxs)("div",{className:"flex gap-3 p-3 items-center justify-between border-b border-white-400/10",children:[(0,l.jsx)(d.W,{avatarSrc:t.profile_image_url_https,badgeSrc:t.badge_image_url,screenName:t.name,userHandle:t.screen_name,p:"p-0"}),(0,l.jsx)("div",{className:"size-8 flex items-center justify-center",children:c?(0,l.jsx)("span",{className:"text-[10px] text-white-400/50",children:"Creator"}):(0,l.jsxs)(x.F,{children:[(0,l.jsx)(p.S,{children:(0,l.jsx)(v.A,{isIconOnly:!0,size:"sm",variant:"light",isLoading:i===t.id||a===t.id,children:(0,l.jsx)(n.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,l.jsx)(g.a,{children:(0,l.jsx)(j.W,{color:"danger",startContent:(0,l.jsx)(n.JO,{className:"size-5",icon:"tabler:trash"}),onClick:()=>r(t),children:"Remove admin"},"remove")})]})})]})},w=e=>{let{bg:t="bg-black-300"}=e,{admins:s}=(0,u.useEditDeck)();return(0,l.jsx)(i.w,{className:t,shadow:"none",children:(0,l.jsxs)("div",{className:"flex flex-col",children:[s.map(e=>(0,l.jsx)(b,{admin:e},e.id)),(0,l.jsx)(f,{})]})})}},89765:function(e,t,s){"use strict";s.d(t,{Z:function(){return i},g:function(){return g}});var l,i,n=s(57348),a=s(53350),r=s(22094),c=s(54611),o=s(4930),d=s(67425),u=s(22596),m=s(58484),h=s(16189),f=s(12465),x=s(15346),p=s(64720),v=s(35878);(l=i||(i={})).Edit="edit",l.Delete="delete";let g=e=>{let{deckId:t,size:s="sm",variant:l="light",itemsToRender:i=["edit","delete"],isLoading:g,isDisabled:j,onEdit:b,onDelete:w}=e,y=(0,h.useRouter)(),[k,N]=(0,x.useState)(!1),{setMyDecks:C}=(0,p.useSidebar)(),z=(0,x.useCallback)(()=>{y.push("/deck/".concat(t,"/edit")),null==b||b()},[y,t,b]),S=(0,x.useCallback)(async e=>{e.stopPropagation(),e.preventDefault();try{N(!0),await v.P.deleteDeck(t),C(e=>e.filter(e=>e.id!==t)),null==w||w()}catch(e){console.error("Failed to delete deck",e),(0,f.yv)("Failed to delete deck",{variant:"error"})}finally{N(!1)}},[t,w,C]),_=(0,x.useMemo)(()=>[{key:"edit",label:"Edit",color:"default",startContent:(0,n.jsx)(a.JO,{className:"size-5",icon:"mdi:edit"}),onClick:z},{key:"delete",label:"Delete",color:"danger",startContent:(0,n.jsx)(a.JO,{className:"size-5",icon:"tabler:trash"}),onClick:S}],[z,S]);return(0,n.jsxs)(r.F,{classNames:{content:"min-w-0 w-auto"},children:[(0,n.jsx)(c.S,{children:k||g?(0,n.jsx)("div",{className:"flex items-center justify-center size-8",children:(0,n.jsx)(o.c,{size:"sm"})}):(0,n.jsx)(d.A,{isIconOnly:!0,size:s,variant:l,isDisabled:j,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,n.jsx)(a.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,n.jsx)(u.a,{children:_.filter(e=>i.includes(e.key)).map(e=>(0,n.jsx)(m.W,{color:e.color,startContent:e.startContent,onClick:e.onClick,children:e.label},e.key))})]})}},75319:function(e,t,s){"use strict";s.r(t),s.d(t,{EditDeckForm:function(){return z}});var l=s(57348),i=s(4930),n=s(46766),a=s(15346),r=s(53786);let c=e=>{let{title:t,description:s}=e;return(0,l.jsxs)("header",{className:"flex flex-col gap-1",children:[(0,l.jsx)("h2",{className:"text-xl",children:t}),(0,l.jsx)("p",{className:"text-white-400/50 text-sm",children:s})]})};var o=s(10385),d=s(14251),u=s(53350),m=s(92378),h=s(22094),f=s(54611),x=s(67425),p=s(22596),v=s(58484),g=s(45155),j=s(72148),b=s(56386);let w=()=>{let{links:e,onClickAddLink:t,isRemovingLink:s,onClickRemoveLink:i}=(0,j.useEditDeck)(),[r,c]=(0,a.useState)(""),o=!r||!(0,b.jv)(r)||e.length>=5;return(0,l.jsxs)(m.w,{className:"flex flex-col overflow-hidden",children:[e.map(e=>(0,l.jsxs)("div",{className:"w-full h-[57px] p-3 flex items-center border-b border-b-white-400/10",children:[(0,l.jsx)("div",{className:"flex items-center justify-center size-8 min-w-8 min-h-8",children:(0,l.jsx)(g.default,{alt:"Link icon",src:(0,b.zN)(e),className:"size-5 text-white-400/75"})}),(0,l.jsx)("span",{className:"flex-1 px-1.5 truncate text-sm",children:e}),(0,l.jsxs)(h.F,{children:[(0,l.jsx)(f.S,{children:(0,l.jsx)(x.A,{isIconOnly:!0,size:"sm",variant:"light",isLoading:s===e,children:(0,l.jsx)(u.JO,{className:"size-5",icon:"tabler:dots"})})}),(0,l.jsx)(p.a,{children:(0,l.jsx)(v.W,{color:"danger",startContent:(0,l.jsx)(u.JO,{className:"size-5",icon:"tabler:trash"}),onClick:()=>i(e),children:"Remove link"},"remove")})]})]},e)),(0,l.jsx)(n.Y,{size:"lg",radius:"none",classNames:{inputWrapper:"h-[57px]"},placeholder:"Paste full link",value:r,isDisabled:e.length>=5,onValueChange:c,startContent:(0,l.jsx)("div",{className:"flex items-center justify-center size-8 min-w-8 min-h-8",children:(0,l.jsx)(g.default,{alt:"Link icon",src:(0,b.zN)(r),className:"size-5 text-white-400/75"})}),endContent:(0,l.jsx)(x.A,{size:"sm",color:"primary",variant:"solid",isDisabled:o,onClick:async()=>{t(r),c("")},children:"Add"}),onKeyPress:async e=>{"Enter"!==e.key||o||(t(r),c(""))}})]})};var y=s(86628),k=s(98832),N=s(87140),C=s(71046);let z=()=>{var e;let{isFetching:t,fetchedDeck:s,autoPost:u,onChangeAutoPost:m,matchingRules:h,onChangeMatchingRules:f}=(0,j.useEditDeck)(),{config:x}=(0,N.useDiffusionConfig)(),p=(0,a.useMemo)(()=>{var e;let t=null==h?void 0:null===(e=h.characters)||void 0===e?void 0:e[0];return null==x?void 0:x.characters.find(e=>e.id===t)},[null==x?void 0:x.characters,null==h?void 0:h.characters]),v=(0,a.useMemo)(()=>{var e;let t=null==h?void 0:null===(e=h.styles)||void 0===e?void 0:e[0];return null==x?void 0:x.aesthetics.find(e=>e.id===t)},[null==x?void 0:x.aesthetics,null==h?void 0:h.styles]);return t?(0,l.jsx)("div",{className:"flex justify-center p-4",children:(0,l.jsx)(i.c,{})}):s?(0,l.jsxs)("form",{className:"flex flex-col p-4 pb-20 gap-6",children:[(0,l.jsx)(o.G,{}),(0,l.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,l.jsx)(c,{title:"Links",description:"Feature up to 5 social media links or websites"}),(0,l.jsx)(w,{})]}),(0,l.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,l.jsx)(c,{title:"Admins",description:"Manage admins for your deck"}),(0,l.jsx)(r.h,{})]}),(0,l.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,l.jsx)(c,{title:"Rules",description:"Manage rules for posting"}),(0,l.jsx)(d.F,{title:"Auto-post",description:"Any new generation that meets your constraints will be posted to your deck.",value:u,onValueChange:m})]}),(0,l.jsxs)("section",{className:"flex flex-col gap-2",style:{opacity:u?1:.5,pointerEvents:u?"auto":"none",cursor:u?"auto":"not-allowed",userSelect:u?"auto":"none"},children:[(0,l.jsx)(c,{title:"Auto-post constraints",description:"Configure what type of generations should auto-post to your page"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 max-w-sm",children:[(0,l.jsx)(y.d,{selectedAesthetic:v,onSelect:e=>{f({styles:e?[e.id]:null})},hideDescription:!0}),(0,l.jsx)(k.z,{selectedCharacter:p,selectedStyler:C.fP,onSelect:e=>{f({characters:e?[e.id]:null})}}),(0,l.jsx)(n.Y,{label:"Keywords",placeholder:"happy",isClearable:!0,value:null!==(e=null==h?void 0:h.keywords)&&void 0!==e?e:"",onValueChange:e=>{f({keywords:e})}})]})]})]}):(0,l.jsx)("div",{className:"flex p-4",children:(0,l.jsx)("h1",{children:"Deck not found"})})}},47306:function(e,t,s){"use strict";s.r(t),s.d(t,{EditDeckHeader:function(){return m}});var l=s(57348),i=s(53350),n=s(21202),a=s(67425),r=s(16189),c=s(15346),o=s(89765),d=s(59602),u=s(72148);let m=()=>{let e=(0,r.useRouter)(),t=(0,r.usePathname)(),s=(0,c.useMemo)(()=>t.slice(0,-5),[t]),{fetchedDeck:m,hasUnsavedChanges:h,isSaving:f}=(0,u.useEditDeck)(),x=(0,c.useCallback)(()=>{e.push(s)},[s,e]),p=(0,c.useCallback)(()=>{e.push(s)},[s,e]);return(0,l.jsxs)("div",{className:"sticky top-0 w-full bg-black-0 z-20",children:[f&&(0,l.jsx)(n.W,{className:"absolute w-full",size:"sm",isIndeterminate:!0,"aria-label":"Loading..."}),(0,l.jsx)(d.y,{title:"Edit Deck",subtitle:(0,l.jsxs)("div",{className:"hidden md:flex gap-1 items-center truncate",children:[(0,l.jsx)(i.JO,{icon:"ic:outline-info",opacity:.5}),(0,l.jsx)("p",{className:"text-sm text-white-400/60 truncate",children:"Think of a deck like a 4chan board around a certain theme or character"})]}),border:"border-b border-white-400/10",onGoBack:x,endContent:(0,l.jsxs)("div",{className:"flex gap-2 mr-3 items-center",children:[(0,l.jsx)("div",{className:"size-8 flex items-center justify-center",children:m&&(0,l.jsx)(o.g,{deckId:m.id,itemsToRender:[o.Z.Delete],isDisabled:f,onDelete:()=>e.push("/trending")})}),(0,l.jsx)(a.A,{size:"sm",variant:"solid",color:"primary",isDisabled:h,onClick:p,children:"Done"})]})})]})}},10385:function(e,t,s){"use strict";s.d(t,{G:function(){return o}});var l=s(57348),i=s(4930),n=s(46766),a=s(37734),r=s(19783),c=s(72148);let o=e=>{let{inputsBgColor:t="bg-black-300"}=e,{isFetching:s,name:o,onChangeName:d,description:u,onChangeDescription:m,coverPhoto:h,onUploadImage:f}=(0,c.useEditDeck)();return s?(0,l.jsx)("div",{className:"w-full p-3 flex items-center justify-center",children:(0,l.jsx)(i.c,{})}):(0,l.jsxs)("section",{className:"flex gap-3",children:[(0,l.jsx)("div",{className:"size-[128px] sm:size-[168px]",children:(0,l.jsx)(r.U,{imageRef:void 0,bgColor:t,initialSrc:h,onParseImage:async e=>{f(e)},onClickDeleteMeme:async()=>{f(null)}})}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 flex-1",children:[(0,l.jsx)(n.Y,{isRequired:0===o.length,label:"Deck Name",fullWidth:!0,classNames:{inputWrapper:t},value:o,onValueChange:d}),(0,l.jsx)(a.Y,{isRequired:0===u.length,label:"Description",fullWidth:!0,classNames:{inputWrapper:t},value:u,onValueChange:m})]})]})}},14251:function(e,t,s){"use strict";s.d(t,{F:function(){return r}});var l=s(57348),i=s(92378),n=s(98833),a=s(99957);let r=e=>{let{title:t,description:s,value:r,onValueChange:c,bg:o="bg-black-300",children:d}=e;return(0,l.jsxs)(i.w,{className:(0,a.cn)("flex flex-col gap-3 p-3 min-h-0 overflow-y-auto",o),shadow:"none",children:[(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h4",{className:"text-base font-semibold",children:t}),(0,l.jsx)("p",{className:"text-white-400/50 text-sm",children:s})]}),(0,l.jsx)(n.i,{color:"primary",classNames:{thumb:"bg-white-400",label:"text-white-400/75"},isSelected:r,onValueChange:c})]}),d]})}},59602:function(e,t,s){"use strict";s.d(t,{y:function(){return r}});var l=s(57348),i=s(37824),n=s(13582),a={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/arrow.left.37648ed6.svg",height:46,width:57,blurWidth:0,blurHeight:0};let r=e=>{let{title:t,subtitle:s,border:r="border-b border-transparent",isLoading:c=!1,endContent:o,onGoBack:d}=e,{goBack:u}=(0,n.useAppHistory)();return(0,l.jsxs)("div",{className:"flex h-16 w-full items-center ".concat(r),children:[(0,l.jsx)(i.O,{src:a,alt:"Back",onClick:null!=d?d:u}),c?(0,l.jsx)("h1",{className:"h-6 w-24 animate-pulse rounded bg-gray-200"}):(0,l.jsxs)("div",{className:"flex flex-col flex-1 truncate",children:[(0,l.jsx)("h1",{className:"flex-1 text-left text-lg font-bold truncate",children:t}),s]}),o]})}},37824:function(e,t,s){"use strict";s.d(t,{O:function(){return n}});var l=s(57348),i=s(45155);let n=e=>{let{src:t,alt:s,id:n,margin:a="m-2",w:r="w-3.5",onClick:c}=e;return(0,l.jsx)("button",{id:n,className:"flex size-9 items-center justify-center rounded-full hover:bg-black-100 ".concat(a),onClick:c,children:(0,l.jsx)(i.default,{priority:!0,src:t,alt:s,className:"opacity-85 ".concat(r)})})}},86628:function(e,t,s){"use strict";s.d(t,{d:function(){return d}});var l=s(57348),i=s(53350),n=s(51934),a=s(67425),r=s(88036),c=s(15346),o=s(87140);let d=e=>{var t;let{selectedAesthetic:s,onSelect:d,hideDescription:u=!1,isMobile:m=!1}=e,{config:h}=(0,o.useDiffusionConfig)(),[f,x]=(0,c.useState)("None selected"),p=(0,c.useCallback)(e=>{if(e||d(null),!h)return;let t=h.aesthetics.find(t=>t.id===e);d(null!=t?t:null)},[h,d]);return h?(0,l.jsx)(n.d,{"aria-label":"aesthetic selector",label:"Style",placeholder:f,description:u?null:null!==(t=null==s?void 0:s.description)&&void 0!==t?t:"Applies a style to the prompt",selectedKey:s?s.id:null,size:"md",onFocus:e=>{m&&e.preventDefault()},onOpenChange:e=>{e?x("Type to filter"):x("None selected")},className:"z-0",isClearable:!1,endContent:s&&(0,l.jsx)(a.A,{size:"sm",isIconOnly:!0,variant:"flat",onClick:()=>d(null),children:(0,l.jsx)(i.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}),onSelectionChange:p,children:h.aesthetics.map(e=>(0,l.jsx)(r.R,{"aria-label":e.name,className:"flex flex-column justify-center gap-2",children:(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{children:e.name}),(0,l.jsx)("span",{className:"text-xs text-gray-500",children:e.description})]})},e.id))}):null}},98832:function(e,t,s){"use strict";s.d(t,{z:function(){return f}});var l=s(57348),i=s(53350),n=s(1718),a=s(67425),r=s(5070),c=s(88036),o=s(15346),d=s(87140);let u=e=>"base"===e?0:1,m=e=>{switch(e){case 0:return"Meme Characters";case 1:return"Crypto Friends";default:return"Other"}},h=e=>{let t=-1,s=[];for(let l of e)l.section!==t&&(s.push({id:Math.random().toString(),section:l.section,isDivider:!0}),t=l.section),s.push(l);return s},f=e=>{let{selectedCharacter:t,selectedStyler:s,onSelect:f,showClearButton:x=!0}=e,{config:p}=(0,d.useDiffusionConfig)(),[v,g]=(0,o.useState)(!1),j=(0,o.useMemo)(()=>{var e;return null!==(e=null==p?void 0:p.characters)&&void 0!==e?e:[]},[null==p?void 0:p.characters]),b=(0,o.useMemo)(()=>null==t?void 0:t.id,[t]),w=(0,o.useMemo)(()=>h(j.sort((e,t)=>"normal"===e.id?1:"normal"===t.id?-1:0).map(e=>{var t;return{...e,avatar:null!==(t=e.thumbnail)&&void 0!==t?t:"",section:u(e.grouping),isSelected:b===e.id,isDivider:!1}}).sort((e,t)=>e.section-t.section)),[j,b]),y=(0,o.useCallback)(e=>{let t=j.find(t=>t.id===e);t&&f(t)},[j,f]),k=(0,o.useMemo)(()=>w.filter(e=>0===e.section).length,[w]),N=(0,o.useMemo)(()=>w.filter(e=>1===e.section).length,[w]);return(0,l.jsx)(n.g,{items:w,isOpen:v,onOpenChange:g,placeholder:"Select a character","aria-label":"Character",classNames:{trigger:"h-[80px]",popoverContent:"bg-[#0F0F0F] border-1 border-black-100",listbox:"h-fit selector-list-box",listboxWrapper:"min-h-[400px]"},selectedKeys:[b].filter(Boolean),onChange:e=>y(e.target.value),endContent:b&&x&&(0,l.jsx)(a.A,{size:"sm",isIconOnly:!0,variant:"flat",onClick:()=>f(null),children:(0,l.jsx)(i.JO,{icon:"material-symbols-light:close",className:"size-4 text-white-400"})}),renderValue:e=>e.map(e=>{var t,s,i,n;return(null===(t=e.data)||void 0===t?void 0:t.isDivider)?null:(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(r.h,{alt:(null===(s=e.data)||void 0===s?void 0:s.id)+"-avatar",className:"shrink-0 mr-2",radius:"md",size:"lg",src:null===(i=e.data)||void 0===i?void 0:i.avatar}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{className:"text-tiny text-default-600",children:"Character"}),(0,l.jsx)("h3",{className:"text-xl font-semibold",children:null===(n=e.data)||void 0===n?void 0:n.name})]})]},e.key)}),children:e=>e.isDivider?(0,l.jsx)(c.R,{hideSelectedIcon:!0,isReadOnly:!0,"aria-disabled":!0,className:"col-span-full",classNames:{base:"bg-transparent hover:!bg-transparent cursor-default"},children:(0,l.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,l.jsxs)("h3",{className:"uppercase text-xs tracking-wide font-medium text-white-400/50 select-none",children:[m(e.section)," "]}),(0,l.jsx)("div",{className:"text-xs font-normal text-white-400/70 bg-white-400/10 rounded-full px-1 py-0.5 min-w-[20px] text-center",children:0===e.section?k:N}),(0,l.jsx)("hr",{className:"flex-1 opacity-10"},"divider-".concat(Math.random()))]})},null==e?void 0:e.id):(0,l.jsx)(c.R,{"aria-label":null==e?void 0:e.name,color:e.isSelected?"primary":"default",variant:"solid","data-hover":!0,hideSelectedIcon:!0,classNames:{base:"flex-1 flex flex-col gap-0 ".concat(e.isSelected?"bg-primary-400":""),wrapper:"flex flex-col"},children:(0,l.jsxs)("div",{className:"flex flex-col gap-2 items-center",children:[(0,l.jsx)(r.h,{alt:(null==e?void 0:e.id)+"-avatar",radius:"md",size:"lg",src:null==e?void 0:e.avatar}),(0,l.jsx)("div",{className:"flex items-center gap-1",children:(0,l.jsx)("span",{className:"text-sm font-medium",children:null==e?void 0:e.name})})]})},null==e?void 0:e.id)})}},83815:function(e,t,s){"use strict";s.d(t,{d:function(){return a}});var l=s(16189),i=s(15346),n=s(77623);let a=e=>{let{key:t,index:s,params:a}=e,r=(0,l.usePathname)(),c=(0,i.useMemo)(()=>{let e=n.P.some(e=>r.startsWith(e));if("memeId"===t&&!e)return a[t]||"";{var l;let e=null!==(l=r&&r.split("/")[s||2])&&void 0!==l?l:"";return a[t]||e}},[s,t,a,r]);return{[t]:decodeURIComponent(c)}}},13582:function(e,t,s){"use strict";s.r(t),s.d(t,{AppHistoryProvider:function(){return c},useAppHistory:function(){return o}});var l=s(57348),i=s(16189),n=s(12465),a=s(15346);let r=(0,a.createContext)({}),c=e=>{let{children:t}=e,s=(0,i.usePathname)(),c=(0,i.useRouter)(),[o,d]=(0,a.useState)([]),u=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",t=arguments.length>1?arguments[1]:void 0,s=e;o.length>1&&(s=o[o.length-2],void 0!==t&&s.includes(t)&&(s=e)),"string"!=typeof s&&(s="/home"),c.push(s,{scroll:!1})},[o,c]);return(0,a.useEffect)(()=>{d(e=>e[e.length-1]!==s?[...e,s]:e)},[s]),(0,l.jsxs)(r.Provider,{value:{goBack:u},children:[t,(0,l.jsx)(n.wT,{dense:!0,maxSnack:3})]})},o=()=>{let e=(0,a.useContext)(r);if(void 0===e)throw Error("useFeed must be used within AppHistoryProvider");return e}},87140:function(e,t,s){"use strict";s.r(t),s.d(t,{DiffusionConfigProvider:function(){return r},useDiffusionConfig:function(){return c}});var l=s(57348),i=s(15346),n=s(55771);let a=(0,i.createContext)(void 0),r=e=>{let{children:t}=e,[s,r]=(0,i.useState)(!0),[c,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{r(!0),n.p.getConfig().then(o).finally(()=>r(!1))},[]),(0,l.jsx)(a.Provider,{value:{config:c,isFetchingConfig:s},children:t})},c=()=>{let e=(0,i.useContext)(a);if(void 0===e)throw Error("useDiffusionConfig must be used within DiffusionConfigProvider");return e}},72148:function(e,t,s){"use strict";s.r(t),s.d(t,{EditDeckProvider:function(){return m},useEditDeck:function(){return h}});var l=s(57348),i=s(12465),n=s(15346),a=s(83815),r=s(64720),c=s(35878),o=s(74859),d=s(41973);let u=(0,n.createContext)(void 0),m=e=>{var t;let{params:s,children:m}=e,{deckId:h}=(0,a.d)({params:s,key:"deckId"}),f=(0,n.useMemo)(()=>h.replace("deck:",""),[h]),[x,p]=(0,n.useState)(!0),[v,g]=(0,n.useState)(null),[j,b]=(0,n.useState)(""),[w,y]=(0,n.useState)(""),[k,N]=(0,n.useState)(null),[C,z]=(0,n.useState)([]),[S,_]=(0,n.useState)(null),[D,P]=(0,n.useState)(null!==(t=null==v?void 0:v.admins)&&void 0!==t?t:[]),[E,A]=(0,n.useState)(null),[O,W]=(0,n.useState)(null),[R,F]=(0,n.useState)(!1),[M,B]=(0,n.useState)(!1),[V,I]=(0,n.useState)(null),{queueUpdate:H,isSaving:J,hasUnsavedChanges:L}=function(e){let[t,s]=(0,n.useState)(!1),[l,i]=(0,n.useState)(!1),a=(0,n.useRef)({}),{setMyDecks:d}=(0,r.useSidebar)(),u=(0,n.useCallback)((0,o.k)(async(e,t)=>{i(!0);let s=null,l=null;try{var n;let s=await c.P.updateDeck(e,t);l=null!==(n=null==s?void 0:s.cover_photo)&&void 0!==n?n:""}finally{i(!1),d(i=>{var n,a,r;if(!i)return i;let c=i.find(t=>t.id===e);return s=null!==(a=null!==(n=t.title)&&void 0!==n?n:null==c?void 0:c.title)&&void 0!==a?a:"",l=null!==(r=null!=l?l:null==c?void 0:c.cover_photo)&&void 0!==r?r:"",[{id:e,title:s,cover_photo:l,is_admin:!0},...i.filter(t=>t.id!==e)]})}},500),[]);return{queueUpdate:(0,n.useCallback)(t=>{a.current={...a.current,...t},s(!0),u(e,a.current).finally(()=>{a.current={},s(!1)})},[e,u]),isSaving:l,hasUnsavedChanges:t}}(f),U=(0,n.useCallback)(async e=>{var t,s;let l=await c.P.getDeck(e,{interval:d.u.AllTime});l&&(g(l),b(l.title),y(null!==(t=l.description)&&void 0!==t?t:""),N(l.cover_photo),z(null!==(s=l.external_links)&&void 0!==s?s:[]),P(l.admins),F(l.require_approval),B(l.auto_post),I(l.matching_rules))},[]),q=(0,n.useCallback)(e=>{b(e),H({title:e})},[H]),T=(0,n.useCallback)(e=>{y(e),H({description:e})},[H]),Z=(0,n.useCallback)(e=>{N(e?URL.createObjectURL(new Blob([e])):null),H({cover_photo:e?Array.from(e):null})},[H]),G=(0,n.useCallback)(e=>{let t=[...C,e];z(t),H({external_links:t})},[C,H]),K=(0,n.useCallback)(e=>{let t=C.filter(t=>t!==e);_(e),H({external_links:t}),z(t),_(null)},[C,H]),Y=(0,n.useCallback)(e=>{try{A(e.id),P(t=>[...t,e]),H({add_admin:e.id})}catch(t){console.error("Failed to add admin",t),(0,i.yv)("Failed to add admin",{variant:"error"}),P(t=>t.filter(t=>t.id!==e.id))}finally{A(null)}},[H]),$=(0,n.useCallback)(e=>{try{W(e.id),H({remove_admin:e.id}),P(t=>t.filter(t=>t.id!==e.id))}catch(e){console.error("Failed to remove admin",e),(0,i.yv)("Failed to remove admin",{variant:"error"})}finally{W(null)}},[H]),Q=(0,n.useCallback)(e=>{F(e),H({require_approval:e})},[H]),X=(0,n.useCallback)(e=>{B(e),H({auto_post:e})},[H]),ee=(0,n.useCallback)(e=>{I(t=>{var s,l,i;let n={characters:void 0!==e.characters?e.characters:null!==(s=null==t?void 0:t.characters)&&void 0!==s?s:null,styles:void 0!==e.styles?e.styles:null!==(l=null==t?void 0:t.styles)&&void 0!==l?l:null,keywords:void 0!==e.keywords?e.keywords:null!==(i=null==t?void 0:t.keywords)&&void 0!==i?i:null};return H({matching_rules:n}),n})},[H]);return(0,n.useEffect)(()=>{p(!0),U(f).finally(()=>p(!1))},[U,f]),(0,l.jsx)(u.Provider,{value:{isFetching:x,fetchedDeck:v,name:j,onChangeName:q,description:w,onChangeDescription:T,coverPhoto:k,onUploadImage:Z,links:C,onClickAddLink:G,isRemovingLink:S,onClickRemoveLink:K,admins:D,isAddingAdmin:E,onClickAddAdmin:Y,isRemovingAdmin:O,onClickRemoveAdmin:$,adminApproval:R,onChangeAdminApproval:Q,autoPost:M,onChangeAutoPost:X,matchingRules:V,onChangeMatchingRules:ee,isSaving:J,hasUnsavedChanges:L},children:m})},h=()=>{let e=(0,n.useContext)(u);if(void 0===e)throw Error("useEditDeck must be used within EditDeckProvider");return e}},71046:function(e,t,s){"use strict";s.d(t,{CJ:function(){return a},M5:function(){return c},U1:function(){return r},ZA:function(){return o},fP:function(){return n},nv:function(){return d}});var l=s(66353),i=s(99349);let n={name:"Photorealistic",id:"photorealistic",images:null,thumbnail:"",grouping:"style"},a={id:"",src:"",prevSrc:"",width:1024,height:1024,posPrompt:"",negPrompt:"",isExpandedPrompt:!1,seed:(0,i.q)(),seedType:"random",topText:"",bottomText:"",guidanceScale:2.7,selectedAspectRatio:l.tB.Square,selectedAesthetic:null,selectedCharacter:{name:"Apu Apustaja",id:"apu_apustaja",images:null,thumbnail:"https://memedeckblob.blob.core.windows.net/ai-characters/classic-thumbnails/apu-apustaja.png",grouping:"base"},selectedStyler:n,progress:0,isGenerating:!1,isRandomizing:!1},r={faceImage:"",baseImage:"",baseWidth:void 0,baseHeight:void 0,swappedImage:"",strength:1},c={text:""},o=[{idx:0,id:"0",type:"generated",image:{...a},text:{...c},faceswap:{...r}},{idx:1,id:"1",type:"generated",image:{...a},text:{...c},faceswap:{...r}},{idx:2,id:"2",type:"generated",image:{...a},text:{...c},faceswap:{...r}},{idx:3,id:"3",type:"generated",image:{...a},text:{...c},faceswap:{...r}}],d=(e,t)=>{switch(t.action){case"reset":return e.map(e=>e.idx!==t.idx?e:{...e,image:{...e.image,...a},text:{...e.text,...c},faceswap:{...e.faceswap,...r}});case"blank-slate":return[...o];case"update-panel":return e.map(e=>{var s,l;return e.idx!==t.idx?e:{...e,id:null!==(s=t.id)&&void 0!==s?s:e.id,type:null!==(l=t.type)&&void 0!==l?l:e.type,image:{...e.image,...t.image},text:{...e.text,...t.text},faceswap:{...e.faceswap,...t.faceswap}}});case"delete":return e.filter(e=>e.idx!==t.idx);default:return console.error("Unknown action type"),e}}},55771:function(e,t,s){"use strict";s.d(t,{p:function(){return a},s:function(){return i}});var l=s(54167);let i=()=>l.cm?"wss://staging-generation-api.memedeck.xyz/v1/ws":l.BB||l.j7?"wss://studio.api.memedeck.xyz/v1/ws":"ws://127.0.0.1:8079/v1/ws";class n{async getConfig(){return fetch("".concat(n.BASE_URL,"/studio/config")).then(e=>e.json())}async getRandomPrompt(){return fetch("".concat(n.BASE_URL,"/studio/random-prompt")).then(e=>e.json())}}n.BASE_URL=l.cm?"https://staging-generation-api.memedeck.xyz/v1":l.BB||l.j7?"https://studio.api.memedeck.xyz/v1":"http://127.0.0.1:8079/v1";let a=new n},69467:function(e,t,s){"use strict";var l,i;s.d(t,{FU:function(){return n},WV:function(){return l},kl:function(){return a}});let n=["generated","composed"];function a(e){return!!e.tags&&e.tags.some(e=>"nsfw"===e.name)}(i=l||(l={})).One="one",i.TwoVertical="two-vertical",i.TwoHorizontal="two-horizontal",i.Four="four-square"},66353:function(e,t,s){"use strict";var l,i;function n(e){return"library"===e?"generated":e}function a(e){switch(e){case"composed":case"upload":return"generated";default:return e}}s.d(t,{JY:function(){return n},fJ:function(){return a},tB:function(){return l}}),(i=l||(l={})).Square="square",i.Landscape="landscape",i.Portrait="portrait"},39543:function(e,t,s){"use strict";s.d(t,{GJ:function(){return r},rf:function(){return a},vO:function(){return c}});var l=s(69467),i=s(66353);let n={[i.tB.Square]:[1152,1152],[i.tB.Landscape]:[1152,896],[i.tB.Portrait]:[896,1152]};function a(e,t){let s=0,i=0;if(e===l.WV.One){let e=n[t];s=e[0],i=e[1]}else if(e===l.WV.TwoVertical)s=1152,i=896;else if(e===l.WV.TwoHorizontal)s=896,i=1152;else if(e===l.WV.Four)s=1152,i=1152;else throw Error("Unsupported panel layout");return{paneWidth:s,paneHeight:i}}function r(e,t){let s=0,i=0;if(e===l.WV.One&&t)s=t.paneWidth,i=t.paneHeight;else if(e===l.WV.TwoVertical)s=1152,i=1792;else if(e===l.WV.TwoHorizontal)s=1792,i=1152;else if(e===l.WV.Four)s=2304,i=2304;else throw Error("Unsupported panel layout");return{canvasWidth:s,canvasHeight:i}}function c(e,t){return 10>Math.abs(e-t)?i.tB.Square:e>t?i.tB.Landscape:i.tB.Portrait}},38857:function(e,t,s){"use strict";async function l(e){let{ctx:t,image:s,targetWidth:l,targetHeight:i,imageWidth:n,imageHeight:a,anchorX:r=0,anchorY:c=0}=e;return new Promise(e=>{let o=Math.max(l/n,i/a),d=n*o,u=a*o;t.save(),t.beginPath(),t.rect(r,c,l,i),t.clip(),t.drawImage(s,r+(l-d)/2,c+(i-u)/2,d,u),t.restore(),e()})}s.d(t,{h:function(){return l}})},56386:function(e,t,s){"use strict";s.d(t,{xM:function(){return u},zN:function(){return d},jv:function(){return h}});var l={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/dexscreener.10175de8.svg",height:16,width:14,blurWidth:0,blurHeight:0},i={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/link.92f1c818.svg",height:16,width:16,blurWidth:0,blurHeight:0},n={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/telegram.43cbd001.svg",height:16,width:16,blurWidth:0,blurHeight:0},a={src:"/memedeck:memedeck:meme-deck.os/_next/static/media/x.9521bae5.svg",height:16,width:16,blurWidth:0,blurHeight:0};let r=e=>e.includes("twitter.com")||e.includes("t.co")||e.includes("x.com"),c=e=>e.includes("telegram.org")||e.includes("t.me"),o=e=>e.includes("dexscreener.com");function d(e){return r(e)?a:c(e)?n:o(e)?l:i}function u(e){return r(e)?"@".concat(e.split("/")[3]):e.replace(/(https?:\/\/)?(www\.)?/,"")}let m=/^https?:\/\/([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;function h(e){return m.test(e)}},99349:function(e,t,s){"use strict";function l(){return Math.floor(1e12*Math.random())}s.d(t,{q:function(){return l}})}},function(e){e.O(0,[7398,7425,4175,3159,8797,2079,6002,7686,1639,6440,9028,4822,1718,5952,9394,3520,1202,874,5878,8852,3108,937,7114,1744],function(){return e(e.s=23245)}),_N_E=e.O()}]);