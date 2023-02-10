(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3366],{5467:function(e,n,t){"use strict";function r(e){return Object.keys(e).reduce((n,t)=>((t.startsWith("data-")||t.startsWith("aria-")||"role"===t)&&!t.startsWith("data-__")&&(n[t]=e[t]),n),{})}t.d(n,{Z:function(){return r}})},99138:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r=t(76278),a=t(41322),s=t(84481),o=t(26702),i=t(1558),c=t(94184),l=t.n(c),d=t(62874),m=t(67294),u=t(53124),p=t(5467),h=t(96159),v=t(15671),f=t(43144),g=t(32531),x=t(73568);let b=function(e){(0,g.Z)(t,e);var n=(0,x.Z)(t);function t(){var e;return(0,v.Z)(this,t),e=n.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,f.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){let{message:e,description:n,children:t}=this.props,{error:r,info:a}=this.state,s=a&&a.componentStack?a.componentStack:null,o=void 0===e?(r||"").toString():e;return r?m.createElement(L,{type:"error",message:o,description:m.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},void 0===n?s:n)}):t}}]),t}(m.Component);var j=t(67968),w=t(45503),k=t(14747);let N=(e,n,t,r,a)=>({backgroundColor:e,border:`${r.lineWidth}px ${r.lineType} ${n}`,[`${a}-icon`]:{color:t}}),_=e=>{let{componentCls:n,motionDurationSlow:t,marginXS:r,marginSM:a,fontSize:s,fontSizeLG:o,lineHeight:i,borderRadiusLG:c,motionEaseInOutCirc:l,alertIconSizeLG:d,colorText:m,paddingContentVerticalSM:u,alertPaddingHorizontal:p,paddingMD:h,paddingContentHorizontalLG:v}=e;return{[n]:Object.assign(Object.assign({},(0,k.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${u}px ${p}px`,wordWrap:"break-word",borderRadius:c,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:r,lineHeight:0},"&-description":{display:"none",fontSize:s,lineHeight:i},"&-message":{color:m},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:v,paddingBlock:h,[`${n}-icon`]:{marginInlineEnd:a,fontSize:d,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:r,color:m,fontSize:o},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},S=e=>{let{componentCls:n,colorSuccess:t,colorSuccessBorder:r,colorSuccessBg:a,colorWarning:s,colorWarningBorder:o,colorWarningBg:i,colorError:c,colorErrorBorder:l,colorErrorBg:d,colorInfo:m,colorInfoBorder:u,colorInfoBg:p}=e;return{[n]:{"&-success":N(a,r,t,e,n),"&-info":N(p,u,m,e,n),"&-warning":N(i,o,s,e,n),"&-error":Object.assign(Object.assign({},N(d,l,c,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},y=e=>{let{componentCls:n,iconCls:t,motionDurationMid:r,marginXS:a,fontSizeIcon:s,colorIcon:o,colorIconHover:i}=e;return{[n]:{"&-action":{marginInlineStart:a},[`${n}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:s,lineHeight:`${s}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:o,transition:`color ${r}`,"&:hover":{color:i}}},"&-close-text":{color:o,transition:`color ${r}`,"&:hover":{color:i}}}}},$=e=>[_(e),S(e),y(e)];var Z=(0,j.Z)("Alert",e=>{let{fontSizeHeading3:n}=e,t=(0,w.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[$(t)]}),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let C={success:r.Z,info:i.Z,error:a.Z,warning:o.Z},I=e=>{let{icon:n,prefixCls:t,type:r}=e,a=C[r]||null;return n?(0,h.wm)(n,m.createElement("span",{className:`${t}-icon`},n),()=>({className:l()(`${t}-icon`,{[n.props.className]:n.props.className})})):m.createElement(a,{className:`${t}-icon`})},T=e=>{let{isClosable:n,closeText:t,prefixCls:r,closeIcon:a,handleClose:s}=e;return n?m.createElement("button",{type:"button",onClick:s,className:`${r}-close-icon`,tabIndex:0},t?m.createElement("span",{className:`${r}-close-text`},t):a):null},z=e=>{var{description:n,prefixCls:t,message:r,banner:a,className:o,rootClassName:i,style:c,onMouseEnter:h,onMouseLeave:v,onClick:f,afterClose:g,showIcon:x,closable:b,closeText:j,closeIcon:w=m.createElement(s.Z,null),action:k}=e,N=E(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);let[_,S]=m.useState(!1),y=m.useRef(),{getPrefixCls:$,direction:C}=m.useContext(u.E_),z=$("alert",t),[L,O]=Z(z),A=e=>{var n;S(!0),null===(n=N.onClose)||void 0===n||n.call(N,e)},B=!!j||b,P=(()=>{let{type:e}=N;return void 0!==e?e:a?"warning":"info"})(),R=!!a&&void 0===x||x,H=l()(z,`${z}-${P}`,{[`${z}-with-description`]:!!n,[`${z}-no-icon`]:!R,[`${z}-banner`]:!!a,[`${z}-rtl`]:"rtl"===C},o,i,O),W=(0,p.Z)(N);return L(m.createElement(d.Z,{visible:!_,motionName:`${z}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:g},e=>{let{className:t,style:a}=e;return m.createElement("div",Object.assign({ref:y,"data-show":!_,className:l()(H,t),style:Object.assign(Object.assign({},c),a),onMouseEnter:h,onMouseLeave:v,onClick:f,role:"alert"},W),R?m.createElement(I,{description:n,icon:N.icon,prefixCls:z,type:P}):null,m.createElement("div",{className:`${z}-content`},r?m.createElement("div",{className:`${z}-message`},r):null,n?m.createElement("div",{className:`${z}-description`},n):null),k?m.createElement("div",{className:`${z}-action`},k):null,m.createElement(T,{isClosable:!!B,closeText:j,prefixCls:z,closeIcon:w,handleClose:A}))}))};z.ErrorBoundary=b;var L=z},76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),a=t(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},o=t(93771),i=function(e,n){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};i.displayName="CheckCircleFilled";var c=a.forwardRef(i)},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),a=t(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},o=t(93771),i=function(e,n){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};i.displayName="ExclamationCircleFilled";var c=a.forwardRef(i)},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),a=t(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},o=t(93771),i=function(e,n){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};i.displayName="InfoCircleFilled";var c=a.forwardRef(i)},86705:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(67294),a=t(9008),s=t.n(a),o=t(34065),i=t(67552),c=t.n(i),l=t(85893),d=t(11151),m=t(48726),u=t(99138);function p(e){var n=c()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"import http from 'node:http';\nimport { PassThrough } from 'node:stream';\nimport Koa from 'koa';\nimport serve from 'koa-static';\n\nconst app = new Koa();\n\napp.use(serve('lib', { maxage: 0 }));\n\nlet stream;\n\nsetInterval(() => {\n  if (stream) {\n    stream.write(`event: message\ndata: ${ JSON.stringify({ date: new Date().toString() }) }\\n\\n`);\n  }\n}, 1500);\n\napp.use(async function(ctx, next) {\n  if (ctx.url === '/ssg') {\n    ctx.request.socket.setTimeout(0);\n    ctx.req.socket.setNoDelay(true);\n    ctx.req.socket.setKeepAlive(true);\n\n    ctx.set({\n      'Content-Type': 'text/event-stream; charset=utf-8',\n      'Cache-Control': 'no-cache, no-transform',\n      'X-Accel-Buffering': 'no',\n      Connection: 'keep-alive'\n    });\n\n    stream = new PassThrough();\n    ctx.status = 200;\n    ctx.body = stream;\n  }\n});\n\nhttp.createServer(app.callback()).listen(5050);\n"})})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=c()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,c()({},e,{children:(0,l.jsx)(p,e)})):p(e)};function v(e){var n=c()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const evtSource = new EventSource('/ssg');\n\nevtSource.addEventListener('open', function(event) {\n  console.log('open');\n});\n\nevtSource.addEventListener('message', function(event) {\n  console.log('message: ', event.data);\n});\n"})})}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=c()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,c()({},e,{children:(0,l.jsx)(v,e)})):v(e)},g=m.Z.Text;function x(e){var n=c()({h1:"h1",p:"p",h2:"h2",div:"div",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"使用Server-sent events，和浏览器单向通信"}),"\n",(0,l.jsx)(n.p,{children:"一个网页获取新的数据通常需要发送一个请求到服务器，也就是向服务器请求的页面。 使用Server-sent events，\n服务器可以在任何时刻向我们的Web页面推送数据。webpack-hot-middleware就是使用Server-sent events来发送热替换消息。"}),"\n",(0,l.jsx)(h,{}),"\n",(0,l.jsxs)(n.p,{children:["在浏览器中，通过\n",(0,l.jsx)(g,{className:"inline-block",code:!0,children:"EventSource"}),"\n来创建一个连接，并监听事件。"]}),"\n",(0,l.jsx)(f,{}),"\n",(0,l.jsx)(u.Z,{type:"info",message:[(0,l.jsx)(n.h2,{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:["Server-sent events：",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events"})]},"server-sent-events"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:["Server Sent Events (SSE) Streams with Node and Koa：",(0,l.jsx)(n.a,{href:"https://medium.com/trabe/server-sent-events-sse-streams-with-node-and-koa-d9330677f0bf",target:"_blank",rel:"noopener noreferrer",children:"https://medium.com/trabe/server-sent-events-sse-streams-with-node-and-koa-d9330677f0bf"})]},"server-sent-events-sse-streams-with-node-and-koa"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:["webpack-hot-middleware：",(0,l.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-hot-middleware",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/webpack-contrib/webpack-hot-middleware"})]},"webpack-hot-middleware")]})]})}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=c()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,c()({},e,{children:(0,l.jsx)(x,e)})):x(e)},j=function(e){return(0,l.jsx)(o.Z,{children:(0,l.jsx)(b,{})})};function w(e){return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:"使用Server-sent events技术，与浏览器单向通信"}),(0,l.jsx)("meta",{name:"keywords",content:"Server-sent events"}),(0,l.jsx)("meta",{name:"description",content:"使用Server-sent events，与浏览器单向通信"})]}),(0,l.jsx)(j,{})]})}},38914:function(e,n,t){"use strict";var r=t(19623),a=t(73935),s=t(11163),o=t(1472),i=t(18662),c=t(75162),l=t(37653),d=t(76467),m=t(35919),u=t.n(m),p=t(85893),h=o.Z.BackTop;n.Z=function(e){var n=(0,s.useRouter)();return[(0,p.jsxs)("div",{className:u().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,a.createPortal)((0,p.jsx)(h,{type:"primary",icon:(0,p.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(e,n,t){"use strict";t(74916);var r=t(88946),a=t.n(r),s=t(81290),o=t.n(s),i=t(41664),c=t.n(i),l=t(97183),d=t(26713),m=t(83062),u=t(67337),p=t(48739),h=t.n(p),v=t(90010),f=t(85893),g=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],x=["github.io","vercel.app"],b=a()(g).call(g,function(e,n){return(0,f.jsx)("li",{className:h().navListItem,children:(0,f.jsx)(c(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,f.jsx)(l.Z.Header,{className:h().antdHeader,children:(0,f.jsxs)("div",{className:h().header,children:[(0,f.jsx)("nav",{className:h().headerLeft,children:(0,f.jsx)("ul",{className:h().navList,children:b})}),(0,f.jsx)("div",{className:h().headerRight,children:(0,f.jsxs)(d.Z,{size:16,children:[(0,f.jsx)(m.Z,{title:"切换网站地址",children:(0,f.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,a=/github\.io/.test(r);window.location.href=new(o())(t,"https://duan602728596.".concat(x[a?1:0],"/"))},children:(0,f.jsx)(u.Z,{className:h().switchAddressIcon})})}),(0,f.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,f.jsx)(v.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,a=e.avifSrc,s=e.webpSrc,o=e.src,i=e.alt;return(0,r.jsxs)("picture",{className:n,children:[a&&(0,r.jsx)("source",{srcSet:a,type:"image/avif"}),s&&(0,r.jsx)("source",{srcSet:s,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:o,alt:i})]})}},34065:function(e,n,t){"use strict";var r=t(67294),a=t(43699),s=t(38914),o=t(85893);n.Z=function(e){return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)(s.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},2068:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/http/server-sent-events",function(){return t(86705)}])},35919:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=2068)}),_N_E=e.O()}]);