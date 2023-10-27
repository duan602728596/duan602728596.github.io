(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3366],{76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(87462),s=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},c=t(93771),o=s.forwardRef(function(e,n){return s.createElement(c.Z,(0,r.Z)({},e,{ref:n,icon:a}))})},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(87462),s=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},c=t(93771),o=s.forwardRef(function(e,n){return s.createElement(c.Z,(0,r.Z)({},e,{ref:n,icon:a}))})},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(87462),s=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},c=t(93771),o=s.forwardRef(function(e,n){return s.createElement(c.Z,(0,r.Z)({},e,{ref:n,icon:a}))})},60067:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ServerSentEventsPage}});var r=t(67294),s=t(9008),a=t.n(s),c=t(86471),o=t(67552),i=t.n(o),v=t(85893),d=t(11151),l=t(48726),h=t(38925);function _createMdxContent(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:"language-javascript",children:"import http from 'node:http';\nimport { PassThrough } from 'node:stream';\nimport Koa from 'koa';\nimport serve from 'koa-static';\n\nconst app = new Koa();\n\napp.use(serve('lib', { maxage: 0 }));\n\nlet stream;\n\nsetInterval(() => {\n  if (stream) {\n    stream.write(`event: message\ndata: ${ JSON.stringify({ date: new Date().toString() }) }\\n\\n`);\n  }\n}, 1500);\n\napp.use(async function(ctx, next) {\n  if (ctx.url === '/ssg') {\n    ctx.request.socket.setTimeout(0);\n    ctx.req.socket.setNoDelay(true);\n    ctx.req.socket.setKeepAlive(true);\n\n    ctx.set({\n      'Content-Type': 'text/event-stream; charset=utf-8',\n      'Cache-Control': 'no-cache, no-transform',\n      'X-Accel-Buffering': 'no',\n      Connection: 'keep-alive'\n    });\n\n    stream = new PassThrough();\n    ctx.status = 200;\n    ctx.body = stream;\n  }\n});\n\nhttp.createServer(app.callback()).listen(5050);\n"})})}var server=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,v.jsx)(n,i()({},e,{children:(0,v.jsx)(_createMdxContent,e)})):_createMdxContent(e)};function eventSource_createMdxContent(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:"language-javascript",children:"const evtSource = new EventSource('/ssg');\n\nevtSource.addEventListener('open', function(event) {\n  console.log('open');\n});\n\nevtSource.addEventListener('message', function(event) {\n  console.log('message: ', event.data);\n});\n"})})}var eventSource=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,v.jsx)(n,i()({},e,{children:(0,v.jsx)(eventSource_createMdxContent,e)})):eventSource_createMdxContent(e)},u=l.Z.Text;function serverSentEvents_createMdxContent(e){var n=i()({h1:"h1",p:"p",h2:"h2",div:"div",a:"a"},(0,d.ah)(),e.components);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n.h1,{children:"使用Server-sent events，和浏览器单向通信"}),"\n",(0,v.jsx)(n.p,{children:"一个网页获取新的数据通常需要发送一个请求到服务器，也就是向服务器请求的页面。 使用Server-sent events，\n服务器可以在任何时刻向我们的Web页面推送数据。webpack-hot-middleware就是使用Server-sent events来发送热替换消息。"}),"\n",(0,v.jsx)(server,{}),"\n",(0,v.jsxs)(n.p,{children:["在浏览器中，通过\n",(0,v.jsx)(u,{className:"inline-block",code:!0,children:"EventSource"}),"\n来创建一个连接，并监听事件。"]}),"\n",(0,v.jsx)(eventSource,{}),"\n",(0,v.jsx)(h.Z,{type:"info",message:[(0,v.jsx)(n.h2,{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,v.jsxs)(n.div,{className:"py-[8px]",children:["Server-sent events：",(0,v.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events"})]},"server-sent-events"),(0,v.jsxs)(n.div,{className:"py-[8px]",children:["Server Sent Events (SSE) Streams with Node and Koa：",(0,v.jsx)(n.a,{href:"https://medium.com/trabe/server-sent-events-sse-streams-with-node-and-koa-d9330677f0bf",target:"_blank",rel:"noopener noreferrer",children:"https://medium.com/trabe/server-sent-events-sse-streams-with-node-and-koa-d9330677f0bf"})]},"server-sent-events-sse-streams-with-node-and-koa"),(0,v.jsxs)(n.div,{className:"py-[8px]",children:["webpack-hot-middleware：",(0,v.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-hot-middleware",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/webpack-contrib/webpack-hot-middleware"})]},"webpack-hot-middleware")]})]})}var serverSentEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,v.jsx)(n,i()({},e,{children:(0,v.jsx)(serverSentEvents_createMdxContent,e)})):serverSentEvents_createMdxContent(e)},ServerSentEvents_ServerSentEvents=function(e){return(0,v.jsx)(c.Z,{children:(0,v.jsx)(serverSentEvents,{})})};function ServerSentEventsPage(e){return(0,v.jsxs)(r.Fragment,{children:[(0,v.jsxs)(a(),{children:[(0,v.jsx)("title",{children:"使用Server-sent events技术，与浏览器单向通信"}),(0,v.jsx)("meta",{name:"keywords",content:"Server-sent events"}),(0,v.jsx)("meta",{name:"description",content:"使用Server-sent events，与浏览器单向通信"})]}),(0,v.jsx)(ServerSentEvents_ServerSentEvents,{})]})}},2068:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/http/server-sent-events",function(){return t(60067)}])}},function(e){e.O(0,[4322,1447,9166,2072,9774,2888,179],function(){return e(e.s=2068)}),_N_E=e.O()}]);