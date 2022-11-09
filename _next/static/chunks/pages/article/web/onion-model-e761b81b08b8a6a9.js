(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{42399:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var t=s(67294),a=s(9008),i=s.n(a),r=s(76315),c=s(34065),o=s(7244),l=s(67552),d=s.n(l),h=s(85893),u=s(11151);function p(n){var e=d()({pre:"pre",code:"code"},(0,u.ah)(),n.components);return(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-javascript",children:"class App {\n  constructor() {\n    this.tasks = []; // 执行的方法队列\n  }\n\n  // 将方法添加到队列\n  use(...taskFunc) {\n    this.tasks.push(...taskFunc);\n  }\n\n  // 最中心执行的函数\n  do(ctx) {\n    console.log('do');\n  }\n\n  // 创建洋葱模型\n  dispatch(ctx, i) {\n    if (i === this.tasks.length) {\n      return () => this.do(ctx);\n    } else {\n      return () => this.tasks[i](ctx, this.dispatch(ctx, i + 1));\n    }\n  }\n\n  // 执行方法\n  run(ctx) {\n    return this.dispatch(Object.assign({}, ctx), 0)();\n  }\n}\n"})})}var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=d()({},(0,u.ah)(),n.components).wrapper;return e?(0,h.jsx)(e,d()({},n,{children:(0,h.jsx)(p,n)})):p(n)};function j(n){var e=d()({pre:"pre",code:"code"},(0,u.ah)(),n.components);return(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-javascript",children:"const app = new App();\n\napp.use(async function(ctx, next) {\n  console.log(0);\n  await next();\n  console.log(2);\n});\n\napp.use(async function(ctx, next) {\n  console.log(1);\n  await next();\n});\n\napp.run();\n"})})}var f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=d()({},(0,u.ah)(),n.components).wrapper;return e?(0,h.jsx)(e,d()({},n,{children:(0,h.jsx)(j,n)})):j(n)},m=r.Z.Title,v=r.Z.Paragraph,_=function(n){return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(m,{children:"洋葱模型的简单实现"}),(0,h.jsx)(v,{children:"用一段简单的代码，实现洋葱模型。"}),(0,h.jsx)(x,{}),(0,h.jsx)(v,{children:"执行代码，"}),(0,h.jsx)(f,{}),(0,h.jsx)(v,{children:"会打印出如下结果。"}),(0,h.jsx)(o.Z,{children:"0\n1\ndo\n2"})]})};function g(n){return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsxs)(i(),{children:[(0,h.jsx)("title",{children:"洋葱模型的简单实现"}),(0,h.jsx)("meta",{name:"keywords",content:"前端, js, javascript"}),(0,h.jsx)("meta",{name:"description",content:"洋葱模型的简单实现"})]}),(0,h.jsx)(_,{})]})}},38914:function(n,e,s){"use strict";var t=s(19623),a=s(73935),i=s(11163),r=s(6592),c=s(97960),o=s(75162),l=s(6171),d=s(76467),h=s(35919),u=s.n(h),p=s(85893),x=r.Z.BackTop;e.Z=function(n){var e=(0,i.useRouter)();return[(0,p.jsxs)("div",{className:u().main,children:[n.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(c.Z,{onClick:function(n){e.push("/")},children:[(0,p.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==n?void 0:n.children]},"main"),(0,p.jsx)(d.default,{children:null!=n&&n.goToTop&&("undefined"==typeof document?"undefined":(0,t.Z)(document))==="object"?(0,a.createPortal)((0,p.jsx)(x,{type:"primary",icon:(0,p.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(n,e,s){"use strict";s(74916);var t=s(88946),a=s.n(t),i=s(81290),r=s.n(i),c=s(41664),o=s.n(c),l=s(97183),d=s(26713),h=s(83062),u=s(67337),p=s(48739),x=s.n(p),j=s(90010),f=s(85893),m=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],_=a()(m).call(m,function(n,e){return(0,f.jsx)("li",{className:x().navListItem,children:(0,f.jsx)(o(),{href:n.href,children:n.title})},n.href)});e.Z=function(n){return(0,f.jsx)(l.Z.Header,{className:x().antdHeader,children:(0,f.jsxs)("div",{className:x().header,children:[(0,f.jsx)("nav",{className:x().headerLeft,children:(0,f.jsx)("ul",{className:x().navList,children:_})}),(0,f.jsx)("div",{className:x().headerRight,children:(0,f.jsxs)(d.Z,{size:16,children:[(0,f.jsx)(h.Z,{title:"切换网站地址",children:(0,f.jsx)("a",{className:x().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(n){var e=window.location,s=e.pathname,t=e.hostname,a=/github\.io/.test(t);window.location.href=new(r())(s,"https://duan602728596.".concat(v[a?1:0],"/"))},children:(0,f.jsx)(u.Z,{className:x().switchAddressIcon})})}),(0,f.jsx)("a",{className:x().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,f.jsx)(j.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(n,e,s){"use strict";var t=s(85893);e.Z=function(n){var e=n.className,s=n.imageClassName,a=n.avifSrc,i=n.webpSrc,r=n.src,c=n.alt;return(0,t.jsxs)("picture",{className:e,children:[a&&(0,t.jsx)("source",{srcSet:a,type:"image/avif"}),i&&(0,t.jsx)("source",{srcSet:i,type:"image/webp"}),(0,t.jsx)("img",{className:s,src:r,alt:c})]})}},34065:function(n,e,s){"use strict";var t=s(67294),a=s(43699),i=s(38914),r=s(85893);e.Z=function(n){return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(i.Z,{goToTop:!0,goBack:!0,children:n.children})]})}},180:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/onion-model",function(){return s(42399)}])},35919:function(n){n.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(n){n.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(n){n.O(0,[7960,4796,7646,9774,2888,179],function(){return n(n.s=180)}),_N_E=n.O()}]);