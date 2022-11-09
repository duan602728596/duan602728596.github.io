(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4921],{5467:function(e,n,t){"use strict";function o(e){return Object.keys(e).reduce(function(n,t){return(t.startsWith("data-")||t.startsWith("aria-")||"role"===t)&&!t.startsWith("data-__")&&(n[t]=e[t]),n},{})}t.d(n,{Z:function(){return o}})},99138:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var o=t(87462),a=t(97685),r=t(4942),c=t(89739),i=t(4340),s=t(97937),l=t(21640),d=t(78860),u=t(94184),m=t.n(u),p=t(62874),f=t(67294),h=t(53124),g=t(5467),v=t(96159),Z=t(15671),b=t(43144),x=t(32531),_=t(73568),S=function(e){(0,x.Z)(t,e);var n=(0,_.Z)(t);function t(){var e;return(0,Z.Z)(this,t),e=n.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,b.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,t=e.description,o=e.children,a=this.state,r=a.error,c=a.info,i=c&&c.componentStack?c.componentStack:null,s=void 0===n?(r||"").toString():n;return r?f.createElement(O,{type:"error",message:s,description:f.createElement("pre",null,void 0===t?i:t)}):o}}]),t}(f.Component),w=t(67968),y=t(45503),N=t(14747),j=function(e,n,t,o,a){return(0,r.Z)({backgroundColor:e,border:"".concat(o.lineWidth,"px ").concat(o.lineType," ").concat(n)},"".concat(a,"-icon"),{color:t})},C=function(e){var n,t,a,c=e.componentCls,i=e.motionDurationSlow,s=e.marginXS,l=e.marginSM,d=e.fontSize,u=e.fontSizeLG,m=e.lineHeight,p=e.borderRadiusLG,f=e.motionEaseInOutCirc,h=e.alertIconSizeLG,g=e.colorText,v=e.paddingContentVerticalSM,Z=e.alertPaddingHorizontal,b=e.paddingMD,x=e.paddingContentHorizontalLG;return a={},(0,r.Z)(a,c,(0,o.Z)((0,o.Z)({},(0,N.Wf)(e)),(n={position:"relative",display:"flex",alignItems:"center",padding:"".concat(v,"px ").concat(Z,"px"),wordWrap:"break-word",borderRadius:p,"&&-rtl":{direction:"rtl"}},(0,r.Z)(n,"".concat(c,"-content"),{flex:1,minWidth:0}),(0,r.Z)(n,"".concat(c,"-icon"),{marginInlineEnd:s,lineHeight:0}),(0,r.Z)(n,"&-description",{display:"none",fontSize:d,lineHeight:m}),(0,r.Z)(n,"&-message",{color:g}),(0,r.Z)(n,"&&-motion-leave",{overflow:"hidden",opacity:1,transition:"max-height ".concat(i," ").concat(f,", opacity ").concat(i," ").concat(f,",\n        padding-top ").concat(i," ").concat(f,", padding-bottom ").concat(i," ").concat(f,",\n        margin-bottom ").concat(i," ").concat(f)}),(0,r.Z)(n,"&&-motion-leave-active",{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),n))),(0,r.Z)(a,"".concat(c,"-with-description"),(t={alignItems:"flex-start",paddingInline:x,paddingBlock:b},(0,r.Z)(t,"".concat(c,"-icon"),{marginInlineEnd:l,fontSize:h,lineHeight:0}),(0,r.Z)(t,"".concat(c,"-message"),{display:"block",marginBottom:s,color:g,fontSize:u}),(0,r.Z)(t,"".concat(c,"-description"),{display:"block"}),t)),(0,r.Z)(a,"".concat(c,"-banner"),{marginBottom:0,border:"0 !important",borderRadius:0}),a},k=function(e){var n=e.componentCls,t=e.colorSuccess,a=e.colorSuccessBorder,c=e.colorSuccessBg,i=e.colorWarning,s=e.colorWarningBorder,l=e.colorWarningBg,d=e.colorError,u=e.colorErrorBorder,m=e.colorErrorBg,p=e.colorInfo,f=e.colorInfoBorder,h=e.colorInfoBg;return(0,r.Z)({},n,{"&-success":j(c,a,t,e,n),"&-info":j(h,f,p,e,n),"&-warning":j(l,s,i,e,n),"&-error":(0,o.Z)((0,o.Z)({},j(m,u,d,e,n)),(0,r.Z)({},"".concat(n,"-description > pre"),{margin:0,padding:0}))})},I=function(e){var n,t=e.componentCls,o=e.iconCls,a=e.motionDurationFast,c=e.marginXS,i=e.fontSizeIcon,s=e.colorIcon,l=e.colorIconHover;return(0,r.Z)({},t,(n={},(0,r.Z)(n,"&-action",{marginInlineStart:c}),(0,r.Z)(n,"".concat(t,"-close-icon"),(0,r.Z)({marginInlineStart:c,padding:0,overflow:"hidden",fontSize:i,lineHeight:"".concat(i,"px"),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},"".concat(o,"-close"),{color:s,transition:"color ".concat(a),"&:hover":{color:l}})),(0,r.Z)(n,"&-close-text",{color:s,transition:"color ".concat(a),"&:hover":{color:l}}),n))},E=(0,w.Z)("Alert",function(e){var n,t=e.fontSizeHeading3;return[[C(n=(0,y.TS)(e,{alertIconSizeLG:t,alertPaddingHorizontal:12})),k(n),I(n)]]}),L=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>n.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},T={success:c.Z,info:d.Z,error:i.Z,warning:l.Z},B=function(e){var n=e.icon,t=e.prefixCls,o=T[e.type]||null;return n?(0,v.wm)(n,f.createElement("span",{className:"".concat(t,"-icon")},n),function(){return{className:m()("".concat(t,"-icon"),(0,r.Z)({},n.props.className,n.props.className))}}):f.createElement(o,{className:"".concat(t,"-icon")})},H=function(e){var n=e.isClosable,t=e.closeText,o=e.prefixCls,a=e.closeIcon,r=e.handleClose;return n?f.createElement("button",{type:"button",onClick:r,className:"".concat(o,"-close-icon"),tabIndex:0},t?f.createElement("span",{className:"".concat(o,"-close-text")},t):a):null},z=function(e){var n,t,c=e.description,i=e.prefixCls,l=e.message,d=e.banner,u=e.className,v=e.style,Z=e.onMouseEnter,b=e.onMouseLeave,x=e.onClick,_=e.afterClose,S=e.showIcon,w=e.closable,y=e.closeText,N=e.closeIcon,j=void 0===N?f.createElement(s.Z,null):N,C=e.action,k=L(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),I=f.useState(!1),T=(0,a.Z)(I,2),z=T[0],O=T[1],R=f.useRef(),A=f.useContext(h.E_),W=A.getPrefixCls,M=A.direction,P=W("alert",i),D=E(P),G=(0,a.Z)(D,2),F=G[0],X=G[1],K=function(e){var n;O(!0),null===(n=k.onClose)||void 0===n||n.call(k,e)},Q=!!y||w,V=void 0!==(n=k.type)?n:d?"warning":"info",q=!!d&&void 0===S||S,U=m()(P,"".concat(P,"-").concat(V),(t={},(0,r.Z)(t,"".concat(P,"-with-description"),!!c),(0,r.Z)(t,"".concat(P,"-no-icon"),!q),(0,r.Z)(t,"".concat(P,"-banner"),!!d),(0,r.Z)(t,"".concat(P,"-rtl"),"rtl"===M),t),void 0===u?"":u,X),Y=(0,g.Z)(k);return F(f.createElement(p.Z,{visible:!z,motionName:"".concat(P,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:_},function(e){var n=e.className,t=e.style;return f.createElement("div",(0,o.Z)({ref:R,"data-show":!z,className:m()(U,n),style:(0,o.Z)((0,o.Z)({},v),t),onMouseEnter:Z,onMouseLeave:b,onClick:x,role:"alert"},Y),q?f.createElement(B,{description:c,icon:k.icon,prefixCls:P,type:V}):null,f.createElement("div",{className:"".concat(P,"-content")},l?f.createElement("div",{className:"".concat(P,"-message")},l):null,c?f.createElement("div",{className:"".concat(P,"-description")},c):null),C?f.createElement("div",{className:"".concat(P,"-action")},C):null,f.createElement(H,{isClosable:!!Q,closeText:y,prefixCls:P,closeIcon:j,handleClose:K}))}))};z.ErrorBoundary=S;var O=z},38914:function(e,n,t){"use strict";var o=t(19623),a=t(73935),r=t(11163),c=t(6592),i=t(97960),s=t(75162),l=t(6171),d=t(76467),u=t(35919),m=t.n(u),p=t(85893),f=c.Z.BackTop;n.Z=function(e){var n=(0,r.useRouter)();return[(0,p.jsxs)("div",{className:m().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(i.Z,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,o.Z)(document))==="object"?(0,a.createPortal)((0,p.jsx)(f,{type:"primary",icon:(0,p.jsx)(s.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(e,n,t){"use strict";t(74916);var o=t(88946),a=t.n(o),r=t(81290),c=t.n(r),i=t(41664),s=t.n(i),l=t(97183),d=t(26713),u=t(83062),m=t(67337),p=t(48739),f=t.n(p),h=t(90010),g=t(85893),v=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],Z=["github.io","vercel.app"],b=a()(v).call(v,function(e,n){return(0,g.jsx)("li",{className:f().navListItem,children:(0,g.jsx)(s(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,g.jsx)(l.Z.Header,{className:f().antdHeader,children:(0,g.jsxs)("div",{className:f().header,children:[(0,g.jsx)("nav",{className:f().headerLeft,children:(0,g.jsx)("ul",{className:f().navList,children:b})}),(0,g.jsx)("div",{className:f().headerRight,children:(0,g.jsxs)(d.Z,{size:16,children:[(0,g.jsx)(u.Z,{title:"切换网站地址",children:(0,g.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,o=n.hostname,a=/github\.io/.test(o);window.location.href=new(c())(t,"https://duan602728596.".concat(Z[a?1:0],"/"))},children:(0,g.jsx)(m.Z,{className:f().switchAddressIcon})})}),(0,g.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(h.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(e,n,t){"use strict";var o=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,a=e.avifSrc,r=e.webpSrc,c=e.src,i=e.alt;return(0,o.jsxs)("picture",{className:n,children:[a&&(0,o.jsx)("source",{srcSet:a,type:"image/avif"}),r&&(0,o.jsx)("source",{srcSet:r,type:"image/webp"}),(0,o.jsx)("img",{className:t,src:c,alt:i})]})}},34065:function(e,n,t){"use strict";var o=t(67294),a=t(43699),r=t(38914),c=t(85893);n.Z=function(e){return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(r.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},35919:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}}]);