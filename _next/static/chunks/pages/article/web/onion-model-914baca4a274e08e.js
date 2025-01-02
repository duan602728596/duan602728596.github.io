(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{180:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/onion-model",function(){return t(18927)}])},18927:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var s=t(85893),c=t(67294),r=t(9008),o=t.n(r),i=t(66252),a=t(26219),l=t(78364),u=t(11151);function d(n){let e={code:"code",pre:"pre",...(0,u.a)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"class App {\n  constructor() {\n    this.tasks = []; // 执行的方法队列\n  }\n\n  // 将方法添加到队列\n  use(...taskFunc) {\n    this.tasks.push(...taskFunc);\n  }\n\n  // 最中心执行的函数\n  do(ctx) {\n    console.log('do');\n  }\n\n  // 创建洋葱模型\n  dispatch(ctx, i) {\n    if (i === this.tasks.length) {\n      return () => this.do(ctx);\n    } else {\n      return () => this.tasks[i](ctx, this.dispatch(ctx, i + 1));\n    }\n  }\n\n  // 执行方法\n  run(ctx) {\n    return this.dispatch(Object.assign({}, ctx), 0)();\n  }\n}\n"})})}function p(n={}){let{wrapper:e}={...(0,u.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}function x(n){let e={code:"code",pre:"pre",...(0,u.a)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const app = new App();\n\napp.use(async function(ctx, next) {\n  console.log(0);\n  await next();\n  console.log(2);\n});\n\napp.use(async function(ctx, next) {\n  console.log(1);\n  await next();\n});\n\napp.run();\n"})})}function h(n={}){let{wrapper:e}={...(0,u.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}let{Title:j,Paragraph:f}=i.default;var m=function(n){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(j,{children:"洋葱模型的简单实现"}),(0,s.jsx)(f,{children:"用一段简单的代码，实现洋葱模型。"}),(0,s.jsx)(p,{}),(0,s.jsx)(f,{children:"执行代码，"}),(0,s.jsx)(h,{}),(0,s.jsx)(f,{children:"会打印出如下结果。"}),(0,s.jsx)(l.Z,{children:"0\n1\ndo\n2"})]})};function g(n){return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"洋葱模型的简单实现"}),(0,s.jsx)("meta",{name:"keywords",content:"前端, js, javascript"}),(0,s.jsx)("meta",{name:"description",content:"洋葱模型的简单实现"})]}),(0,s.jsx)(m,{})]})}},94914:function(n,e,t){"use strict";var s=t(85893),c=t(73935),r=t(39332),o=t(29155),i=t(21652),a=t(70612),l=t(30448),u=t(76467),d=t(1294),p=t.n(d);let{BackTop:x}=o.default;e.Z=function(n){let e=(0,r.useRouter)();return[(0,s.jsxs)("div",{className:p().main,children:[n.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(i.ZP,{onClick:function(n){e.push("/")},children:[(0,s.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,n?.children]},"main"),n?.goToTop?(0,s.jsx)(u.default,{children:"object"==typeof document?(0,c.createPortal)((0,s.jsx)(x,{type:"primary",icon:(0,s.jsx)(a.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(n,e,t){"use strict";var s=t(85893),c=t(66252),r=t(94914);e.Z=function(n){return(0,s.jsx)(r.Z,{goToTop:!0,goBack:!0,children:(0,s.jsx)(c.default,{children:n.children})})}},1294:function(n){n.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(n){n.O(0,[1652,5361,2888,9774,179],function(){return n(n.s=180)}),_N_E=n.O()}]);