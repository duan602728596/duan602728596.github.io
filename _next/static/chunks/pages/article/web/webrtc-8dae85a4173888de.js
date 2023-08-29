(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2306],{38925:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var o=t(76278),r=t(41322),a=t(84481),i=t(26702),s=t(1558),c=t(94184),l=t.n(c),d=t(82225),u=t(64217),m=t(67294),h=t(96159),p=t(53124),f=t(14747),g=t(67968),b=t(45503);let v=(e,n,t,o,r)=>({backgroundColor:e,border:`${o.lineWidth}px ${o.lineType} ${n}`,[`${r}-icon`]:{color:t}}),x=e=>{let{componentCls:n,motionDurationSlow:t,marginXS:o,marginSM:r,fontSize:a,fontSizeLG:i,lineHeight:s,borderRadiusLG:c,motionEaseInOutCirc:l,alertIconSizeLG:d,colorText:u,paddingContentVerticalSM:m,alertPaddingHorizontal:h,paddingMD:p,paddingContentHorizontalLG:g,colorTextHeading:b}=e;return{[n]:Object.assign(Object.assign({},(0,f.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${h}px`,wordWrap:"break-word",borderRadius:c,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:o,lineHeight:0},"&-description":{display:"none",fontSize:a,lineHeight:s},"&-message":{color:u},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:g,paddingBlock:p,[`${n}-icon`]:{marginInlineEnd:r,fontSize:d,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:o,color:b,fontSize:i},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},y=e=>{let{componentCls:n,colorSuccess:t,colorSuccessBorder:o,colorSuccessBg:r,colorWarning:a,colorWarningBorder:i,colorWarningBg:s,colorError:c,colorErrorBorder:l,colorErrorBg:d,colorInfo:u,colorInfoBorder:m,colorInfoBg:h}=e;return{[n]:{"&-success":v(r,o,t,e,n),"&-info":v(h,m,u,e,n),"&-warning":v(s,i,a,e,n),"&-error":Object.assign(Object.assign({},v(d,l,c,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},C=e=>{let{componentCls:n,iconCls:t,motionDurationMid:o,marginXS:r,fontSizeIcon:a,colorIcon:i,colorIconHover:s}=e;return{[n]:{"&-action":{marginInlineStart:r},[`${n}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:i,transition:`color ${o}`,"&:hover":{color:s}}},"&-close-text":{color:i,transition:`color ${o}`,"&:hover":{color:s}}}}},j=e=>[x(e),y(e),C(e)];var w=(0,g.Z)("Alert",e=>{let{fontSizeHeading3:n}=e,t=(0,b.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[j(t)]}),_=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};let T={success:o.Z,info:s.Z,error:r.Z,warning:i.Z},N=e=>{let{icon:n,prefixCls:t,type:o}=e,r=T[o]||null;return n?(0,h.wm)(n,m.createElement("span",{className:`${t}-icon`},n),()=>({className:l()(`${t}-icon`,{[n.props.className]:n.props.className})})):m.createElement(r,{className:`${t}-icon`})},k=e=>{let{isClosable:n,prefixCls:t,closeIcon:o,handleClose:r}=e,i=!0===o||void 0===o?m.createElement(a.Z,null):o;return n?m.createElement("button",{type:"button",onClick:r,className:`${t}-close-icon`,tabIndex:0},i):null};var S=e=>{let{description:n,prefixCls:t,message:o,banner:r,className:a,rootClassName:i,style:s,onMouseEnter:c,onMouseLeave:h,onClick:f,afterClose:g,showIcon:b,closable:v,closeText:x,closeIcon:y,action:C}=e,j=_(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[T,S]=m.useState(!1),$=m.useRef(null),{getPrefixCls:E,direction:Z,alert:R}=m.useContext(p.E_),P=E("alert",t),[I,L]=w(P),z=n=>{var t;S(!0),null===(t=e.onClose)||void 0===t||t.call(e,n)},W=m.useMemo(()=>void 0!==e.type?e.type:r?"warning":"info",[e.type,r]),O=m.useMemo(()=>!!x||("boolean"==typeof v?v:!1!==y&&null!=y),[x,y,v]),M=!!r&&void 0===b||b,A=l()(P,`${P}-${W}`,{[`${P}-with-description`]:!!n,[`${P}-no-icon`]:!M,[`${P}-banner`]:!!r,[`${P}-rtl`]:"rtl"===Z},null==R?void 0:R.className,a,i,L),D=(0,u.Z)(j,{aria:!0,data:!0});return I(m.createElement(d.ZP,{visible:!T,motionName:`${P}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:g},t=>{let{className:r,style:a}=t;return m.createElement("div",Object.assign({ref:$,"data-show":!T,className:l()(A,r),style:Object.assign(Object.assign(Object.assign({},null==R?void 0:R.style),s),a),onMouseEnter:c,onMouseLeave:h,onClick:f,role:"alert"},D),M?m.createElement(N,{description:n,icon:e.icon,prefixCls:P,type:W}):null,m.createElement("div",{className:`${P}-content`},o?m.createElement("div",{className:`${P}-message`},o):null,n?m.createElement("div",{className:`${P}-description`},n):null),C?m.createElement("div",{className:`${P}-action`},C):null,m.createElement(k,{isClosable:O,prefixCls:P,closeIcon:x||y,handleClose:z}))}))},$=t(15671),E=t(43144),Z=t(32531),R=t(73568);let P=function(e){(0,Z.Z)(t,e);var n=(0,R.Z)(t);function t(){var e;return(0,$.Z)(this,t),e=n.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,E.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){let{message:e,description:n,children:t}=this.props,{error:o,info:r}=this.state,a=r&&r.componentStack?r.componentStack:null,i=void 0===e?(o||"").toString():e;return o?m.createElement(S,{type:"error",message:i,description:m.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},void 0===n?a:n)}):t}}]),t}(m.Component);S.ErrorBoundary=P;var I=S},76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},i=t(93771),s=r.forwardRef(function(e,n){return r.createElement(i.Z,(0,o.Z)({},e,{ref:n,icon:a}))})},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},i=t(93771),s=r.forwardRef(function(e,n){return r.createElement(i.Z,(0,o.Z)({},e,{ref:n,icon:a}))})},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},i=t(93771),s=r.forwardRef(function(e,n){return r.createElement(i.Z,(0,o.Z)({},e,{ref:n,icon:a}))})},37750:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var o=t(67294),r=t(9008),a=t.n(r),i=t(48726),s=t(38925),c=t(89702),l=t.n(c),d=t(22410),u=t(85893),m=i.Z.Title,h=i.Z.Paragraph,p=i.Z.Text,f=function(e){return(0,u.jsxs)(d.Z,{children:[(0,u.jsx)(m,{children:"浏览器中使用WebRTC进行通信"}),(0,u.jsx)(h,{children:"在浏览器中，可以通过WebRTC进行点对点的连接，实现视频流或音频流或者其他任意数据的传输，而无需通过服务器。 两个设备之间建立WebRTC连接需要一个信令服务器，来实现双方通过网络进行连接。"}),(0,u.jsx)(m,{level:2,children:"WebRTC相关的协议"}),(0,u.jsxs)(h,{children:["访问",(0,u.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols",target:"_blank",rel:"noopener noreferrer",children:"《WebRTC协议介绍(MDN)》"}),"阅读WebRTC API构建的协议。"]}),(0,u.jsx)(m,{level:2,children:"WebRTC的创建流程"}),(0,u.jsxs)(h,{children:["通过",(0,u.jsx)(p,{className:"inline-block",code:!0,children:"RTCPeerConnection"}),"创建实例后， 按下面这个流程图展示一个完成的连接过程和所用的API。"]}),(0,u.jsx)("div",{className:l().iframeBox,children:(0,u.jsx)("iframe",{className:l().iframe,src:"https://www.yuque.com/bbkkbkk/github/oss89z?view=doc_embed&from=duan602728596",name:"webrtc-flow-chart",title:"webrtc流程图",referrerPolicy:"no-referrer"})}),(0,u.jsx)(m,{level:2,children:"代码实现"}),(0,u.jsxs)(h,{children:["基于WebRTC的简易的聊天室。用WebRTC实现的屏幕共享和摄像头传输。",(0,u.jsx)("br",{}),"项目地址：",(0,u.jsx)("a",{href:"https://github.com/duan602728596/webrtc-demo",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/duan602728596/webrtc-demo"})]}),(0,u.jsx)(s.Z,{type:"info",message:[(0,u.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,u.jsxs)("div",{className:"py-[8px]",children:["WebRTC_API：",(0,u.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API"})]},"WebRTC_API"),(0,u.jsxs)("div",{className:"py-[8px]",children:["STUN+TURN servers list：",(0,u.jsx)("a",{href:"https://gist.github.com/yetithefoot/7592580",target:"_blank",rel:"noopener noreferrer",children:"https://gist.github.com/yetithefoot/7592580"})]},"STUN+TURN-servers-list"),(0,u.jsxs)("div",{className:"py-[8px]",children:["WebRTC stun / turn server list：",(0,u.jsx)("a",{href:"https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b",target:"_blank",rel:"noopener noreferrer",children:"https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b"})]},"WebRTC-stun-turn-servers-list")]})]})};function g(e){return(0,u.jsxs)(o.Fragment,{children:[(0,u.jsxs)(a(),{children:[(0,u.jsx)("title",{children:"在浏览器中使用WebRTC进行通信"}),(0,u.jsx)("meta",{name:"keywords",content:"前端, javascript, RTC, WebRTC"}),(0,u.jsx)("meta",{name:"description",content:"WebRTC的知识，在浏览器中使用WebRTC进行通信。"})]}),(0,u.jsx)(f,{})]})}},54892:function(e,n,t){"use strict";var o=t(19623),r=t(73935),a=t(11163),i=t(35846),s=t(97029),c=t(75162),l=t(37653),d=t(76467),u=t(3744),m=t.n(u),h=t(85893),p=i.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,h.jsxs)("div",{className:m().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(s.ZP,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,h.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,o.Z)(document))==="object"?(0,r.createPortal)((0,h.jsx)(p,{type:"primary",icon:(0,h.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,n,t){"use strict";t(74916);var o=t(88946),r=t.n(o),a=t(81290),i=t.n(a),s=t(41664),c=t.n(s),l=t(97183),d=t(42075),u=t(83062),m=t(67337),h=t(62139),p=t.n(h),f=t(30654),g=t(85893),b=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],x=r()(b).call(b,function(e,n){return(0,g.jsx)("li",{className:p().navListItem,children:(0,g.jsx)(c(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,g.jsx)(l.Z.Header,{className:p().antdHeader,children:(0,g.jsxs)("div",{className:p().header,children:[(0,g.jsx)("nav",{className:p().headerLeft,children:(0,g.jsx)("ul",{className:p().navList,children:x})}),(0,g.jsx)("div",{className:p().headerRight,children:(0,g.jsxs)(d.Z,{size:16,children:[(0,g.jsx)(u.Z,{title:"切换网站地址",children:(0,g.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,o=n.hostname,r=/github\.io/.test(o);window.location.href=new(i())(t,"https://duan602728596.".concat(v[r?1:0],"/"))},children:(0,g.jsx)(m.Z,{className:p().switchAddressIcon})})}),(0,g.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,n,t){"use strict";var o=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,a=e.webpSrc,i=e.src,s=e.alt;return(0,o.jsxs)("picture",{className:n,children:[r&&(0,o.jsx)("source",{srcSet:r,type:"image/avif"}),a&&(0,o.jsx)("source",{srcSet:a,type:"image/webp"}),(0,o.jsx)("img",{className:t,src:i,alt:s})]})}},22410:function(e,n,t){"use strict";var o=t(67294),r=t(34341),a=t(54892),i=t(85893);n.Z=function(e){return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},1503:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/webrtc",function(){return t(37750)}])},3744:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},89702:function(e){e.exports={iframeBox:"webRTC_iframeBox__zc3Js",iframe:"webRTC_iframe__zcRsL"}},64217:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function a(e,n){return 0===e.indexOf(n)}function i(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var i={};return Object.keys(e).forEach(function(t){(n.aria&&("role"===t||a(t,"aria-"))||n.data&&a(t,"data-")||n.attr&&r.includes(t))&&(i[t]=e[t])}),i}}},function(e){e.O(0,[3576,7467,9166,9774,2888,179],function(){return e(e.s=1503)}),_N_E=e.O()}]);