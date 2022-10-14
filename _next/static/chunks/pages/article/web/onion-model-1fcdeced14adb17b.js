(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{24052:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var t=s(67294),a=s(9008),i=s.n(a),r=s(76315),c=s(9991),o=s(26618),l=s(67552),d=s.n(l),h=s(85893),u=s(11151);function p(n){var e=d()({pre:"pre",code:"code"},(0,u.ah)(),n.components);return(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-javascript",children:"class App {\n  constructor() {\n    this.tasks = []; // \u6267\u884c\u7684\u65b9\u6cd5\u961f\u5217\n  }\n\n  // \u5c06\u65b9\u6cd5\u6dfb\u52a0\u5230\u961f\u5217\n  use(...taskFunc) {\n    this.tasks.push(...taskFunc);\n  }\n\n  // \u6700\u4e2d\u5fc3\u6267\u884c\u7684\u51fd\u6570\n  do(ctx) {\n    console.log('do');\n  }\n\n  // \u521b\u5efa\u6d0b\u8471\u6a21\u578b\n  dispatch(ctx, i) {\n    if (i === this.tasks.length) {\n      return () => this.do(ctx);\n    } else {\n      return () => this.tasks[i](ctx, this.dispatch(ctx, i + 1));\n    }\n  }\n\n  // \u6267\u884c\u65b9\u6cd5\n  run(ctx) {\n    return this.dispatch(Object.assign({}, ctx), 0)();\n  }\n}\n"})})}var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=d()({},(0,u.ah)(),n.components),s=e.wrapper;return s?(0,h.jsx)(s,d()({},n,{children:(0,h.jsx)(p,n)})):p(n)};function m(n){var e=d()({pre:"pre",code:"code"},(0,u.ah)(),n.components);return(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-javascript",children:"const app = new App();\n\napp.use(async function(ctx, next) {\n  console.log(0);\n  await next();\n  console.log(2);\n});\n\napp.use(async function(ctx, next) {\n  console.log(1);\n  await next();\n});\n\napp.run();\n"})})}var j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=d()({},(0,u.ah)(),n.components),s=e.wrapper;return s?(0,h.jsx)(s,d()({},n,{children:(0,h.jsx)(m,n)})):m(n)},f=r.Z.Title,v=r.Z.Paragraph;var g=function(n){return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(f,{children:"\u6d0b\u8471\u6a21\u578b\u7684\u7b80\u5355\u5b9e\u73b0"}),(0,h.jsx)(v,{children:"\u7528\u4e00\u6bb5\u7b80\u5355\u7684\u4ee3\u7801\uff0c\u5b9e\u73b0\u6d0b\u8471\u6a21\u578b\u3002"}),(0,h.jsx)(x,{}),(0,h.jsx)(v,{children:"\u6267\u884c\u4ee3\u7801\uff0c"}),(0,h.jsx)(j,{}),(0,h.jsx)(v,{children:"\u4f1a\u6253\u5370\u51fa\u5982\u4e0b\u7ed3\u679c\u3002"}),(0,h.jsx)(o.Z,{children:"0\n1\ndo\n2"})]})};function _(n){return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsxs)(i(),{children:[(0,h.jsx)("title",{children:"\u6d0b\u8471\u6a21\u578b\u7684\u7b80\u5355\u5b9e\u73b0"}),(0,h.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, js, javascript"}),(0,h.jsx)("meta",{name:"description",content:"\u6d0b\u8471\u6a21\u578b\u7684\u7b80\u5355\u5b9e\u73b0"})]}),(0,h.jsx)(g,{})]})}},39748:function(n,e,s){"use strict";var t=s(19623),a=s(73935),i=s(11163),r=s(14137),c=s(39128),o=s(6171),l=s(76467),d=s(97680),h=s.n(d),u=s(85893);e.Z=function(n){var e=(0,i.useRouter)();return[(0,u.jsxs)("div",{className:h().main,children:[n.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(c.Z,{onClick:function(n){e.push("/")},children:[(0,u.jsx)(o.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===n||void 0===n?void 0:n.children]},"main"),(0,u.jsx)(l.default,{children:null!==n&&void 0!==n&&n.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,t.Z)(document))?(0,a.createPortal)((0,u.jsx)(r.Z.BackTop,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,u.jsx)("div",{className:h().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(n,e,s){"use strict";s(74916);var t=s(88946),a=s.n(t),i=s(81290),r=s.n(i),c=s(41664),o=s.n(c),l=s(97183),d=s(46216),h=s(83062),u=s(67337),p=s(56392),x=s.n(p),m=s(2013),j=s(85893),f=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],v=["github.io","vercel.app"],g=a()(f).call(f,(function(n,e){return(0,j.jsx)("li",{className:x().navListItem,children:(0,j.jsx)(o(),{href:n.href,children:n.title})},n.href)}));e.Z=function(n){return(0,j.jsx)(l.Z.Header,{className:x().antdHeader,children:(0,j.jsxs)("div",{className:x().header,children:[(0,j.jsx)("nav",{className:x().headerLeft,children:(0,j.jsx)("ul",{className:x().navList,children:g})}),(0,j.jsx)("div",{className:x().headerRight,children:(0,j.jsxs)(d.Z,{className:"mt-[-6px]",size:16,children:[(0,j.jsx)(h.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,j.jsx)("a",{className:x().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(n){var e=window.location,s=e.pathname,t=e.hostname,a=/github\.io/.test(t);window.location.href=new(r())(s,"https://duan602728596.".concat(v[a?1:0],"/"))},children:(0,j.jsx)(u.Z,{className:x().switchAddressIcon})})}),(0,j.jsx)("a",{className:x().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,j.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(n,e,s){"use strict";var t=s(85893);e.Z=function(n){var e=n.className,s=n.imageClassName,a=n.avifSrc,i=n.webpSrc,r=n.src,c=n.alt;return(0,t.jsxs)("picture",{className:e,children:[a&&(0,t.jsx)("source",{srcSet:a,type:"image/avif"}),i&&(0,t.jsx)("source",{srcSet:i,type:"image/webp"}),(0,t.jsx)("img",{className:s,src:r,alt:c})]})}},9991:function(n,e,s){"use strict";var t=s(67294),a=s(32307),i=s(39748),r=s(85893);e.Z=function(n){return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(i.Z,{goToTop:!0,goBack:!0,children:n.children})]})}},180:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/onion-model",function(){return s(24052)}])},97680:function(n){n.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(n){n.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(n){n.O(0,[9128,1091,1327,9774,2888,179],(function(){return e=180,n(n.s=e);var e}));var e=n.O();_N_E=e}]);