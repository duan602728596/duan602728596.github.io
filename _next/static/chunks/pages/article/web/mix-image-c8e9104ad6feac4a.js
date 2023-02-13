(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3505],{5467:function(e,n,t){"use strict";function r(e){return Object.keys(e).reduce((n,t)=>((t.startsWith("data-")||t.startsWith("aria-")||"role"===t)&&!t.startsWith("data-__")&&(n[t]=e[t]),n),{})}t.d(n,{Z:function(){return r}})},99138:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r=t(76278),i=t(41322),a=t(84481),o=t(26702),s=t(1558),c=t(94184),l=t.n(c),u=t(62874),d=t(67294),m=t(53124),p=t(5467),h=t(96159),f=t(15671),g=t(43144),v=t(32531),x=t(73568);let b=function(e){(0,v.Z)(t,e);var n=(0,x.Z)(t);function t(){var e;return(0,f.Z)(this,t),e=n.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,g.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){let{message:e,description:n,children:t}=this.props,{error:r,info:i}=this.state,a=i&&i.componentStack?i.componentStack:null,o=void 0===e?(r||"").toString():e;return r?d.createElement(L,{type:"error",message:o,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},void 0===n?a:n)}):t}}]),t}(d.Component);var j=t(67968),y=t(45503),_=t(14747);let w=(e,n,t,r,i)=>({backgroundColor:e,border:`${r.lineWidth}px ${r.lineType} ${n}`,[`${i}-icon`]:{color:t}}),Z=e=>{let{componentCls:n,motionDurationSlow:t,marginXS:r,marginSM:i,fontSize:a,fontSizeLG:o,lineHeight:s,borderRadiusLG:c,motionEaseInOutCirc:l,alertIconSizeLG:u,colorText:d,paddingContentVerticalSM:m,alertPaddingHorizontal:p,paddingMD:h,paddingContentHorizontalLG:f}=e;return{[n]:Object.assign(Object.assign({},(0,_.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${p}px`,wordWrap:"break-word",borderRadius:c,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:r,lineHeight:0},"&-description":{display:"none",fontSize:a,lineHeight:s},"&-message":{color:d},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:f,paddingBlock:h,[`${n}-icon`]:{marginInlineEnd:i,fontSize:u,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:r,color:d,fontSize:o},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},N=e=>{let{componentCls:n,colorSuccess:t,colorSuccessBorder:r,colorSuccessBg:i,colorWarning:a,colorWarningBorder:o,colorWarningBg:s,colorError:c,colorErrorBorder:l,colorErrorBg:u,colorInfo:d,colorInfoBorder:m,colorInfoBg:p}=e;return{[n]:{"&-success":w(i,r,t,e,n),"&-info":w(p,m,d,e,n),"&-warning":w(s,o,a,e,n),"&-error":Object.assign(Object.assign({},w(u,l,c,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},S=e=>{let{componentCls:n,iconCls:t,motionDurationMid:r,marginXS:i,fontSizeIcon:a,colorIcon:o,colorIconHover:s}=e;return{[n]:{"&-action":{marginInlineStart:i},[`${n}-close-icon`]:{marginInlineStart:i,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:o,transition:`color ${r}`,"&:hover":{color:s}}},"&-close-text":{color:o,transition:`color ${r}`,"&:hover":{color:s}}}}},k=e=>[Z(e),N(e),S(e)];var $=(0,j.Z)("Alert",e=>{let{fontSizeHeading3:n}=e,t=(0,y.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[k(t)]}),C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>n.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t};let E={success:r.Z,info:s.Z,error:i.Z,warning:o.Z},I=e=>{let{icon:n,prefixCls:t,type:r}=e,i=E[r]||null;return n?(0,h.wm)(n,d.createElement("span",{className:`${t}-icon`},n),()=>({className:l()(`${t}-icon`,{[n.props.className]:n.props.className})})):d.createElement(i,{className:`${t}-icon`})},O=e=>{let{isClosable:n,closeText:t,prefixCls:r,closeIcon:i,handleClose:a}=e;return n?d.createElement("button",{type:"button",onClick:a,className:`${r}-close-icon`,tabIndex:0},t?d.createElement("span",{className:`${r}-close-text`},t):i):null},B=e=>{var{description:n,prefixCls:t,message:r,banner:i,className:o,rootClassName:s,style:c,onMouseEnter:h,onMouseLeave:f,onClick:g,afterClose:v,showIcon:x,closable:b,closeText:j,closeIcon:y=d.createElement(a.Z,null),action:_}=e,w=C(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);let[Z,N]=d.useState(!1),S=d.useRef(),{getPrefixCls:k,direction:E}=d.useContext(m.E_),B=k("alert",t),[L,P]=$(B),T=e=>{var n;N(!0),null===(n=w.onClose)||void 0===n||n.call(w,e)},z=!!j||b,M=(()=>{let{type:e}=w;return void 0!==e?e:i?"warning":"info"})(),R=!!i&&void 0===x||x,A=l()(B,`${B}-${M}`,{[`${B}-with-description`]:!!n,[`${B}-no-icon`]:!R,[`${B}-banner`]:!!i,[`${B}-rtl`]:"rtl"===E},o,s,P),H=(0,p.Z)(w);return L(d.createElement(u.Z,{visible:!Z,motionName:`${B}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:v},e=>{let{className:t,style:i}=e;return d.createElement("div",Object.assign({ref:S,"data-show":!Z,className:l()(A,t),style:Object.assign(Object.assign({},c),i),onMouseEnter:h,onMouseLeave:f,onClick:g,role:"alert"},H),R?d.createElement(I,{description:n,icon:w.icon,prefixCls:B,type:M}):null,d.createElement("div",{className:`${B}-content`},r?d.createElement("div",{className:`${B}-message`},r):null,n?d.createElement("div",{className:`${B}-description`},n):null),_?d.createElement("div",{className:`${B}-action`},_):null,d.createElement(O,{isClosable:!!z,closeText:j,prefixCls:B,closeIcon:y,handleClose:T}))}))};B.ErrorBoundary=b;var L=B},76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},o=t(93771),s=function(e,n){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="CheckCircleFilled";var c=i.forwardRef(s)},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},o=t(93771),s=function(e,n){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="ExclamationCircleFilled";var c=i.forwardRef(s)},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},o=t(93771),s=function(e,n){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="InfoCircleFilled";var c=i.forwardRef(s)},95518:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var r=t(67294),i=t(9008),a=t.n(i),o=t(48726),s=t(99138),c=t(34065),l=t(62079),u=t.n(l),d=t(52020),m=t.n(d),p=t(73324),h=t.n(p),f=t(88546),g=t.n(f),v=t(99595),x=t.n(v),b=t(66775),j=t.n(b),y=t(2201),_=t.n(y),w=t(57445),Z=t.n(w),N=t(44845),S=t(8333),k=t(21492),$=t(18662),C=t(94184),E=t.n(C),I=t(15494),O=t.n(I),B=t(90010),L=t(85893);function P(e,n){var t=u()(e);if(m()){var r=m()(e);n&&(r=h()(r).call(r,function(n){return g()(e,n).enumerable})),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t,r,i=null!=arguments[n]?arguments[n]:{};n%2?x()(t=P(Object(i),!0)).call(t,function(n){(0,N.Z)(e,n,i[n])}):j()?_()(e,j()(i)):x()(r=P(Object(i))).call(r,function(n){Z()(e,n,g()(i,n))})}return e}var z=[{avifSrc:"/images/mix-image/3.avif",webpSrc:"/images/mix-image/3.webp",src:"/images/mix-image/3.jpg",alt:"吹响吧！上低音号 吉川优子"},{avifSrc:"/images/mix-image/2.avif",webpSrc:"/images/mix-image/2.webp",src:"/images/mix-image/2.jpg",alt:"吹响吧！上低音号 中川夏纪"}],M=function(e){var n=(0,r.useRef)(null),t=(0,r.useState)(0),i=(0,S.Z)(t,2),a=i[0],o=i[1],s=(0,r.useCallback)(function(e){if(n.current){var t=n.current.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top;n.current.style.setProperty("--x","".concat(r,"px")),n.current.style.setProperty("--y","".concat(i,"px"))}},[]),c=(0,r.useCallback)(function(e){n.current.style.setProperty("--radius","100px"),s(e),document.addEventListener("mousemove",s)},[]);return(0,r.useEffect)(function(){return document.addEventListener("mouseover",c,{once:!0}),function(){document.removeEventListener("mouseover",c),document.removeEventListener("mousemove",s)}},[]),(0,L.jsx)(r.Fragment,{children:(0,L.jsx)(k.Z,{className:O().card,bodyStyle:{textAlign:"center"},extra:(0,L.jsx)($.ZP,{onClick:function(e){o(function(e){return 0===e?1:0})},children:"切换图片"}),children:(0,L.jsx)("div",{ref:n,className:E()("inline-block",O().container),children:(0,L.jsxs)("div",{className:"relative inline-block max-w-[500px] pointer-events-none",children:[(0,L.jsx)(B.Z,T({className:"block w-full",imageClassName:"w-full"},z[a])),(0,L.jsx)(B.Z,T({className:E()("block absolute top-0 left-0 w-full pointer-events-none",O().mix),imageClassName:"w-full"},z[0===a?1:0]))]})})})})},R=t(67552),A=t.n(R),H=t(11151);function D(e){var n=A()({pre:"pre",code:"code"},(0,H.ah)(),e.components);return(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n    <style>\n      .bottomBg {\n      --topX: 0;\n      --topY: 0;\n      --radius: 0;\n\n      width: 720px;\n      height: 911px;\n      background-image: url('./2.jpg');\n    }\n\n      .upBg {\n      width: 100%;\n      height: 100%;\n      background-image: url('./3.jpg');\n      clip-path: circle(var(--radius) at var(--topX) var(--topY));\n      pointer-events: none;\n    }\n    </style>\n</head>\n<body>\n<div class=\"bottomBg\" id=\"bottomBg\">\n  <div class=\"upBg\"></div>\n</div>\n\n<script>\n  const bottomBg = document.getElementById('bottomBg');\n\n  function handleMouseMove(event) {\n  const bounding = bottomBg.getBoundingClientRect();\n  const [x, y] = [event.clientX - bounding.left, event.clientY - bounding.top];\n\n  bottomBg.style.setProperty('--topX', `${ x }px`);\n  bottomBg.style.setProperty('--topY', `${ y }px`);\n}\n\n  function handleMouseOver(event) {\n  handleMouseMove(event);\n  bottomBg.style.setProperty('--radius', '120px');\n}\n\n  document.addEventListener('mousemove', handleMouseMove);\n  document.addEventListener('mouseover', handleMouseOver, { once: true });\n</script>\n</body>\n</html>\n"})})}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=A()({},(0,H.ah)(),e.components).wrapper;return n?(0,L.jsx)(n,A()({},e,{children:(0,L.jsx)(D,e)})):D(e)},X=o.Z.Title,F=o.Z.Paragraph,Y=function(e){return(0,L.jsxs)(c.Z,{children:[(0,L.jsx)(X,{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,L.jsxs)(F,{children:["今天在",(0,L.jsx)("a",{href:"https://voussoir.net/writing/browser_in_the_dark",target:"_blank",rel:"noopener noreferrer",children:"这个网站"}),"上看到了一篇文章，使用CSS的clip-path属性实现的手电筒的特效，觉得非常赞，于是自己也模仿了一下。"]}),(0,L.jsx)(M,{}),(0,L.jsx)(X,{level:2,children:"代码演示"}),(0,L.jsx)(W,{}),(0,L.jsx)(s.Z,{type:"info",message:[(0,L.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,L.jsxs)("div",{className:"py-[8px]",children:["Browser in the Dark: flashlights with CSS and canvas：",(0,L.jsx)("a",{href:"https://voussoir.net/writing/browser_in_the_dark",target:"_blank",rel:"noopener noreferrer",children:"https://voussoir.net/writing/browser_in_the_dark"})]},"browser_in_the_dark"),(0,L.jsxs)("div",{className:"py-[8px]",children:["clip-path：",(0,L.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path"})]},"clip-path")]})]})};function Q(e){return(0,L.jsxs)(r.Fragment,{children:[(0,L.jsxs)(a(),{children:[(0,L.jsx)("title",{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,L.jsx)("meta",{name:"keywords",content:"前端, CSS, clip-path"}),(0,L.jsx)("meta",{name:"description",content:"使用CSS的clip-path属性实现图片探照灯效果"})]}),(0,L.jsx)(Y,{})]})}},38914:function(e,n,t){"use strict";var r=t(19623),i=t(73935),a=t(11163),o=t(1472),s=t(18662),c=t(75162),l=t(37653),u=t(76467),d=t(35919),m=t.n(d),p=t(85893),h=o.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,p.jsxs)("div",{className:m().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(s.ZP,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,i.createPortal)((0,p.jsx)(h,{type:"primary",icon:(0,p.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(e,n,t){"use strict";t(74916);var r=t(88946),i=t.n(r),a=t(81290),o=t.n(a),s=t(41664),c=t.n(s),l=t(97183),u=t(26713),d=t(83062),m=t(67337),p=t(48739),h=t.n(p),f=t(90010),g=t(85893),v=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],x=["github.io","vercel.app"],b=i()(v).call(v,function(e,n){return(0,g.jsx)("li",{className:h().navListItem,children:(0,g.jsx)(c(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,g.jsx)(l.Z.Header,{className:h().antdHeader,children:(0,g.jsxs)("div",{className:h().header,children:[(0,g.jsx)("nav",{className:h().headerLeft,children:(0,g.jsx)("ul",{className:h().navList,children:b})}),(0,g.jsx)("div",{className:h().headerRight,children:(0,g.jsxs)(u.Z,{size:16,children:[(0,g.jsx)(d.Z,{title:"切换网站地址",children:(0,g.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,i=/github\.io/.test(r);window.location.href=new(o())(t,"https://duan602728596.".concat(x[i?1:0],"/"))},children:(0,g.jsx)(m.Z,{className:h().switchAddressIcon})})}),(0,g.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,i=e.avifSrc,a=e.webpSrc,o=e.src,s=e.alt;return(0,r.jsxs)("picture",{className:n,children:[i&&(0,r.jsx)("source",{srcSet:i,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:o,alt:s})]})}},34065:function(e,n,t){"use strict";var r=t(67294),i=t(43699),a=t(38914),o=t(85893);n.Z=function(e){return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},76269:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/mix-image",function(){return t(95518)}])},35919:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}},15494:function(e){e.exports={container:"clipPathImageMixDemo_container__pCMqQ",mix:"clipPathImageMixDemo_mix__jHIPZ",card:"clipPathImageMixDemo_card__iSfrD"}},84406:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},8333:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(98235),i=t(52472),a=t(19389),o=t(71518);function s(e,n){return function(e){if(r(e))return e}(e)||function(e,n){var t=null==e?null:void 0!==i&&a(e)||e["@@iterator"];if(null!=t){var r,o,s,c,l=[],u=!0,d=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=s.call(t)).done)&&(l.push(r.value),l.length!==n);u=!0);}catch(e){d=!0,o=e}finally{try{if(!u&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(d)throw o}}return l}}(e,n)||(0,o.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71518:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(35704),i=t(10349),a=t(84406);function o(e,n){if(e){if("string"==typeof e)return(0,a.Z)(e,n);var t,o=r(t=Object.prototype.toString.call(e)).call(t,8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return i(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return(0,a.Z)(e,n)}}}},function(e){e.O(0,[5876,4796,4940,104,8746,1492,9774,2888,179],function(){return e(e.s=76269)}),_N_E=e.O()}]);