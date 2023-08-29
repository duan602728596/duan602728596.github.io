(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{38925:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var a=t(76278),o=t(41322),r=t(84481),s=t(26702),c=t(1558),i=t(94184),l=t.n(i),d=t(82225),u=t(64217),p=t(67294),m=t(96159),f=t(53124),h=t(14747),g=t(67968),v=t(45503);let y=(e,n,t,a,o)=>({backgroundColor:e,border:`${a.lineWidth}px ${a.lineType} ${n}`,[`${o}-icon`]:{color:t}}),x=e=>{let{componentCls:n,motionDurationSlow:t,marginXS:a,marginSM:o,fontSize:r,fontSizeLG:s,lineHeight:c,borderRadiusLG:i,motionEaseInOutCirc:l,alertIconSizeLG:d,colorText:u,paddingContentVerticalSM:p,alertPaddingHorizontal:m,paddingMD:f,paddingContentHorizontalLG:g,colorTextHeading:v}=e;return{[n]:Object.assign(Object.assign({},(0,h.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${p}px ${m}px`,wordWrap:"break-word",borderRadius:i,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:a,lineHeight:0},"&-description":{display:"none",fontSize:r,lineHeight:c},"&-message":{color:u},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:g,paddingBlock:f,[`${n}-icon`]:{marginInlineEnd:o,fontSize:d,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:a,color:v,fontSize:s},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},b=e=>{let{componentCls:n,colorSuccess:t,colorSuccessBorder:a,colorSuccessBg:o,colorWarning:r,colorWarningBorder:s,colorWarningBg:c,colorError:i,colorErrorBorder:l,colorErrorBg:d,colorInfo:u,colorInfoBorder:p,colorInfoBg:m}=e;return{[n]:{"&-success":y(o,a,t,e,n),"&-info":y(m,p,u,e,n),"&-warning":y(c,s,r,e,n),"&-error":Object.assign(Object.assign({},y(d,l,i,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},k=e=>{let{componentCls:n,iconCls:t,motionDurationMid:a,marginXS:o,fontSizeIcon:r,colorIcon:s,colorIconHover:c}=e;return{[n]:{"&-action":{marginInlineStart:o},[`${n}-close-icon`]:{marginInlineStart:o,padding:0,overflow:"hidden",fontSize:r,lineHeight:`${r}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:s,transition:`color ${a}`,"&:hover":{color:c}}},"&-close-text":{color:s,transition:`color ${a}`,"&:hover":{color:c}}}}},w=e=>[x(e),b(e),k(e)];var j=(0,g.Z)("Alert",e=>{let{fontSizeHeading3:n}=e,t=(0,v.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[w(t)]}),S=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t};let C={success:a.Z,info:c.Z,error:o.Z,warning:s.Z},E=e=>{let{icon:n,prefixCls:t,type:a}=e,o=C[a]||null;return n?(0,m.wm)(n,p.createElement("span",{className:`${t}-icon`},n),()=>({className:l()(`${t}-icon`,{[n.props.className]:n.props.className})})):p.createElement(o,{className:`${t}-icon`})},$=e=>{let{isClosable:n,prefixCls:t,closeIcon:a,handleClose:o}=e,s=!0===a||void 0===a?p.createElement(r.Z,null):a;return n?p.createElement("button",{type:"button",onClick:o,className:`${t}-close-icon`,tabIndex:0},s):null};var _=e=>{let{description:n,prefixCls:t,message:a,banner:o,className:r,rootClassName:s,style:c,onMouseEnter:i,onMouseLeave:m,onClick:h,afterClose:g,showIcon:v,closable:y,closeText:x,closeIcon:b,action:k}=e,w=S(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[C,_]=p.useState(!1),N=p.useRef(null),{getPrefixCls:L,direction:Z,alert:D}=p.useContext(f.E_),T=L("alert",t),[I,W]=j(T),F=n=>{var t;_(!0),null===(t=e.onClose)||void 0===t||t.call(e,n)},P=p.useMemo(()=>void 0!==e.type?e.type:o?"warning":"info",[e.type,o]),O=p.useMemo(()=>!!x||("boolean"==typeof y?y:!1!==b&&null!=b),[x,b,y]),M=!!o&&void 0===v||v,B=l()(T,`${T}-${P}`,{[`${T}-with-description`]:!!n,[`${T}-no-icon`]:!M,[`${T}-banner`]:!!o,[`${T}-rtl`]:"rtl"===Z},null==D?void 0:D.className,r,s,W),A=(0,u.Z)(w,{aria:!0,data:!0});return I(p.createElement(d.ZP,{visible:!C,motionName:`${T}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:g},t=>{let{className:o,style:r}=t;return p.createElement("div",Object.assign({ref:N,"data-show":!C,className:l()(B,o),style:Object.assign(Object.assign(Object.assign({},null==D?void 0:D.style),c),r),onMouseEnter:i,onMouseLeave:m,onClick:h,role:"alert"},A),M?p.createElement(E,{description:n,icon:e.icon,prefixCls:T,type:P}):null,p.createElement("div",{className:`${T}-content`},a?p.createElement("div",{className:`${T}-message`},a):null,n?p.createElement("div",{className:`${T}-description`},n):null),k?p.createElement("div",{className:`${T}-action`},k):null,p.createElement($,{isClosable:O,prefixCls:T,closeIcon:x||b,handleClose:F}))}))},N=t(15671),L=t(43144),Z=t(32531),D=t(73568);let T=function(e){(0,Z.Z)(t,e);var n=(0,D.Z)(t);function t(){var e;return(0,N.Z)(this,t),e=n.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,L.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){let{message:e,description:n,children:t}=this.props,{error:a,info:o}=this.state,r=o&&o.componentStack?o.componentStack:null,s=void 0===e?(a||"").toString():e;return a?p.createElement(_,{type:"error",message:s,description:p.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},void 0===n?r:n)}):t}}]),t}(p.Component);_.ErrorBoundary=T;var I=_},76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(87462),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},s=t(93771),c=o.forwardRef(function(e,n){return o.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:r}))})},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(87462),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},s=t(93771),c=o.forwardRef(function(e,n){return o.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:r}))})},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(87462),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},s=t(93771),c=o.forwardRef(function(e,n){return o.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:r}))})},50148:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(67294),o=t(9008),r=t.n(o),s=t(22410),c=t(67552),i=t.n(c),l=t(85893),d=t(11151),u=t(38925);function p(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"import { createHash } from 'node:crypto';\n\n/* 对Sec-Websocket-Key进行加密，作为Sec-Websocket-Accept的值 */\nexport function encryptSocketKey(key) {\n  const WEBSOCKET_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';\n  const sha1Hash = createHash('sha1');\n\n  sha1Hash.update(`${ key }${ WEBSOCKET_GUID }`);\n\n  return sha1Hash.digest('base64');\n}\n\n/* 处理接收到的数据 */\nexport function decodeWsFrame(data) {\n  let start = 0;\n  const frame = {\n    isFinal: (data[start] & 0x80) === 0x80,\n    opcode: data[start++] & 0xF,\n    masked: (data[start] & 0x80) === 0x80,\n    payloadLen: data[start++] & 0x7F,\n    maskingKey: '',\n    payloadData: null\n  };\n\n  if (frame.payloadLen === 126) {\n    frame.payloadLen = (data[start++] << 8) + data[start++];\n  } else if (frame.payloadLen === 127) {\n    frame.payloadLen = 0;\n\n    for (let i = 7; i >= 0; i--) {\n      frame.payloadLen += (data[start++] << (i * 8));\n    }\n  }\n\n  if (frame.payloadLen) {\n    if (frame.masked) {\n      const maskingKey = [data[start++], data[start++], data[start++], data[start++]];\n\n      frame.maskingKey = maskingKey;\n      frame.payloadData = data\n        .subarray(start, start + frame.payloadLen)\n        .map((byte, index) => byte ^ maskingKey[index % 4]);\n    } else {\n      frame.payloadData = data.slice(start, start + frame.payloadLen);\n    }\n  }\n\n  return frame;\n}\n\n/* 处理发送的数据 */\nexport function encodeWsFrame(data) {\n  const isFinal = data.isFinal !== undefined ? data.isFinal : true,\n    opcode = data.opcode !== undefined ? data.opcode : 1,\n    payloadData = data.payloadData ? Buffer.from(data.payloadData) : null,\n    payloadLen = payloadData ? payloadData.length : 0;\n  const frame = [];\n\n  if (isFinal) {\n    frame.push((1 << 7) + opcode);\n  } else {\n    frame.push(opcode);\n  }\n\n  if (payloadLen < 126) {\n    frame.push(payloadLen);\n  } else if (payloadLen < 65536) {\n    frame.push(126, payloadLen >> 8, payloadLen & 0xFF);\n  } else {\n    frame.push(127);\n\n    for (let i = 7; i >= 0; i--) {\n      frame.push((payloadLen & (0xFF << (i * 8))) >> (i * 8));\n    }\n  }\n\n  return payloadData\n    ? Buffer.concat([Buffer.from(frame), payloadData])\n    : Buffer.from(frame);\n}\n\nexport function rStr(len: number): string {\n  const str: string = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';\n  let result: string = '';\n\n  for (let i: number = 0; i < len; i++) {\n    const rIndex: number = Math.floor(Math.random() * str.length);\n\n    result += str[rIndex];\n  }\n\n  return result;\n}\n"})})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,i()({},e,{children:(0,l.jsx)(p,e)})):p(e)};function f(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"import net from 'node:net';\nimport { encodeWsFrame, decodeWsFrame, encryptSocketKey } from './utils.js';\n\n/* 建立请求 */\nfunction createConnect(socket) {\n  return new Promise((resolve, reject) => {\n    socket.once('data', function(buffer) {\n      const data = buffer.toString();\n      const headers = data.split('\\r\\n')\n        .splice(1)\n        .filter((o) => o !== '')\n        .reduce((result, header, index) => {\n          const [key, value] = header.split(': ');\n\n          result[key.toLowerCase()] = value;\n\n          return result;\n        }, {});\n\n      // 判断是否为websocket并检查版本\n      if (!(\n        headers.upgrade === 'websocket'\n        && headers['sec-websocket-version'] === '13'\n      )) {\n        socket.end();\n        resolve(false);\n\n        return;\n      }\n\n      const responseHeader = `HTTP/1.1 101 Switching Protocols\\r\nUpgrade: websocket\\r\nConnection: Upgrade\\r\nSec-Websocket-Accept: ${ encryptSocketKey(headers['sec-websocket-key']) }\\r\\n\\r\\n`\n\n      socket.write(responseHeader);\n      resolve(true);\n    });\n  });\n}\n\nconst server = net.createServer(async function(socket) {\n  const createResult = await createConnect(socket);\n\n  if (!createResult) return;\n\n  socket.on('data', function(buffer) {\n    const data = decodeWsFrame(buffer);\n    const { opcode, payloadData } = data;\n\n    if (opcode === 8) {\n      socket.end();\n    } else {\n      socket.write(encodeWsFrame({\n        opcode: 1,\n        payloadData: `接收：${ payloadData.toString() }`\n      }));\n    }\n  });\n});\n\nserver.listen(5059);\n"})})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,i()({},e,{children:(0,l.jsx)(f,e)})):f(e)};function g(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"import net from 'node:net';\nimport { setInterval } from 'node:timers';\nimport { encryptSocketKey, encodeWsFrame, decodeWsFrame, rStr } from './utils.js';\n\nconst client = new net.Socket();\n\n/* 建立请求 */\nfunction createConnect(client, uuid) {\n  return new Promise((resolve, reject) => {\n    client.once('data', function(buffer) {\n      const data = buffer.toString();\n      const headers = data.split('\\r\\n')\n        .splice(1)\n        .filter((o) => o !== '')\n        .reduce((result, header, index) => {\n          const [key, value] = header.split(': ');\n\n          result[key.toLowerCase()] = value;\n\n          return result;\n        }, {});\n\n      // 判断是否为websocket并检查版本\n      if (!(\n        headers.upgrade === 'websocket'\n        && headers['sec-websocket-accept'] === encryptSocketKey(uuid)\n      )) {\n        client.end();\n        resolve(false);\n\n        return;\n      }\n\n      resolve(true);\n    });\n  });\n}\n\nclient.connect(5059, '127.0.0.1', async function() {\n  const uuid = btoa(rStr(16));\n\n  client.write(`GET /index.html HTTP/1.1\\r\nConnection: Upgrade\\r\nUpgrade: websocket\\r\nSec-WebSocket-Key: ${ uuid }\\r\nSec-WebSocket-Version: 13\\r\\n\\r\\n`);\n\n  const createResult = await createConnect(client, uuid);\n\n  if (!createResult) return;\n\n  let i = 0;\n\n  client.on('data', function(buffer) {\n    const data = decodeWsFrame(buffer);\n\n    console.log(data.payloadData.toString());\n  });\n\n  setInterval(() => {\n    console.log(`发送：${ i }`);\n    client.write(encodeWsFrame({\n      opcode: 1,\n      payloadData: `${ i++ }`\n    }));\n  }, 3_000);\n});\n"})})}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,i()({},e,{children:(0,l.jsx)(g,e)})):g(e)};function y(e){var n=i()({h1:"h1",p:"p",h2:"h2",div:"div",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Nodejs原生实现WebSocket服务"}),"\n",(0,l.jsx)(n.p,{children:"这段Demo展示了如何使用Nodejs原生实现WebSocket服务。"}),"\n",(0,l.jsx)(n.p,{children:"加密和data处理的算法。"}),"\n",(0,l.jsx)(m,{}),"\n",(0,l.jsx)(n.p,{children:"服务端的实现。"}),"\n",(0,l.jsx)(h,{}),"\n",(0,l.jsx)(n.p,{children:"客户端的实现。"}),"\n",(0,l.jsx)(v,{}),"\n",(0,l.jsx)(u.Z,{type:"info",message:[(0,l.jsx)(n.h2,{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:["The WebSocket Protocol:",(0,l.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6455",target:"_blank",rel:"noopener noreferrer",children:"https://tools.ietf.org/html/rfc6455"})]},"rfc6455"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:["nodejs net sockets + websocket without socket.io:",(0,l.jsx)(n.a,{href:"https://stackoverflow.com/questions/32808988/nodejs-net-sockets-websocket-without-socket-io",target:"_blank",rel:"noopener noreferrer",children:"https://stackoverflow.com/questions/32808988/nodejs-net-sockets-websocket-without-socket-io"})]},"rfc6455"),(0,l.jsxs)(n.div,{className:"py-[8px]",children:['What does "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" means in WebSocket Protocol:',(0,l.jsx)(n.a,{href:"https://stackoverflow.com/questions/13456017/what-does-258eafa5-e914-47da-95ca-c5ab0dc85b11-means-in-websocket-protocol",target:"_blank",rel:"noopener noreferrer",children:"https://stackoverflow.com/questions/13456017/what-does-258eafa5-e914-47da-95ca-c5ab0dc85b11-means-in-websocket-protocol"})]},"stackoverflow")]})]})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,i()({},e,{children:(0,l.jsx)(y,e)})):y(e)},b=function(e){return(0,l.jsx)(s.Z,{children:(0,l.jsx)(x,{})})};function k(e){return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Nodejs原生实现WebSocket服务"}),(0,l.jsx)("meta",{name:"keywords",content:"websocket,nodejs"}),(0,l.jsx)("meta",{name:"description",content:"Nodejs原生实现WebSocket服务"})]}),(0,l.jsx)(b,{})]})}},54892:function(e,n,t){"use strict";var a=t(19623),o=t(73935),r=t(11163),s=t(35846),c=t(97029),i=t(75162),l=t(37653),d=t(76467),u=t(3744),p=t.n(u),m=t(85893),f=s.Z.BackTop;n.Z=function(e){var n=(0,r.useRouter)();return[(0,m.jsxs)("div",{className:p().main,children:[e.goBack?(0,m.jsx)("div",{className:"mb-[16px] text-right",children:(0,m.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,m.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,m.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,a.Z)(document))==="object"?(0,o.createPortal)((0,m.jsx)(f,{type:"primary",icon:(0,m.jsx)(i.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,n,t){"use strict";t(74916);var a=t(88946),o=t.n(a),r=t(81290),s=t.n(r),c=t(41664),i=t.n(c),l=t(97183),d=t(42075),u=t(83062),p=t(67337),m=t(62139),f=t.n(m),h=t(30654),g=t(85893),v=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],y=["github.io","vercel.app"],x=o()(v).call(v,function(e,n){return(0,g.jsx)("li",{className:f().navListItem,children:(0,g.jsx)(i(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,g.jsx)(l.Z.Header,{className:f().antdHeader,children:(0,g.jsxs)("div",{className:f().header,children:[(0,g.jsx)("nav",{className:f().headerLeft,children:(0,g.jsx)("ul",{className:f().navList,children:x})}),(0,g.jsx)("div",{className:f().headerRight,children:(0,g.jsxs)(d.Z,{size:16,children:[(0,g.jsx)(u.Z,{title:"切换网站地址",children:(0,g.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,a=n.hostname,o=/github\.io/.test(a);window.location.href=new(s())(t,"https://duan602728596.".concat(y[o?1:0],"/"))},children:(0,g.jsx)(p.Z,{className:f().switchAddressIcon})})}),(0,g.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(h.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,n,t){"use strict";var a=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,o=e.avifSrc,r=e.webpSrc,s=e.src,c=e.alt;return(0,a.jsxs)("picture",{className:n,children:[o&&(0,a.jsx)("source",{srcSet:o,type:"image/avif"}),r&&(0,a.jsx)("source",{srcSet:r,type:"image/webp"}),(0,a.jsx)("img",{className:t,src:s,alt:c})]})}},22410:function(e,n,t){"use strict";var a=t(67294),o=t(34341),r=t(54892),s=t(85893);n.Z=function(e){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(r.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},93624:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/http/node-native-websocket",function(){return t(50148)}])},3744:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},64217:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(1413),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function r(e,n){return 0===e.indexOf(n)}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,a.Z)({},t);var s={};return Object.keys(e).forEach(function(t){(n.aria&&("role"===t||r(t,"aria-"))||n.data&&r(t,"data-")||n.attr&&o.includes(t))&&(s[t]=e[t])}),s}}},function(e){e.O(0,[3576,7467,9166,9774,2888,179],function(){return e(e.s=93624)}),_N_E=e.O()}]);