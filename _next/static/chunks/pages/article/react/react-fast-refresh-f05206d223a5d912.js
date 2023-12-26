(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5319],{54366:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return K}});var s=r(67294),t=r(9008),a=r.n(t),c=r(76315),i=r(38925),l=r(55147),o=r(19668),u=r(62079),d=r.n(u),h=r(52020),f=r.n(h),p=r(73324),m=r.n(p),x=r(88546),j=r.n(x),v=r(99595),_=r.n(v),g=r(66775),b=r.n(g),R=r(2201),w=r.n(R),$=r(57445),N=r.n($),k=r(44845),Z=r(85893),y=r(11151);function T(e,n){var r=d()(e);if(f()){var s=f()(e);n&&(s=m()(s).call(s,function(n){return j()(e,n).enumerable})),r.push.apply(r,s)}return r}function S(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?_()(r=T(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):b()?w()(e,b()(t)):_()(s=T(Object(t))).call(s,function(n){N()(e,n,j()(t,n))})}return e}function L(e){var n=S(S({code:"code",pre:"pre"},(0,y.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"// global\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && !window.$RefreshInstall$\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n  \n  ReactRefresh.injectIntoGlobalHook(window);\n  window.$RefreshReg$ = () => {};\n  window.$RefreshSig$ = () => (type) => type;\n  window.$RefreshTime$ = null;\n  window.$RefreshInstall$ = true;\n}\n"})})}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=S(S({},(0,y.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,S(S({},e),{},{children:(0,Z.jsx)(L,S({},e))})):L(e)}function E(e,n){var r=d()(e);if(f()){var s=f()(e);n&&(s=m()(s).call(s,function(n){return j()(e,n).enumerable})),r.push.apply(r,s)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?_()(r=E(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):b()?w()(e,b()(t)):_()(s=E(Object(t))).call(s,function(n){N()(e,n,j()(t,n))})}return e}function P(e){var n=O(O({code:"code",pre:"pre"},(0,y.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"/* 代码头部添加 */\nlet __$prevRefreshReg$__;\nlet __$prevRefreshSig$__;\n\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  __$prevRefreshReg$__ = window.$RefreshReg$;\n  __$prevRefreshSig$__ = window.$RefreshSig$;\n\n  const ReactRefresh = require('react-refresh/runtime');\n       \n  window.$RefreshReg$ = (type, id) => {\n    const fullId = module.id + ' ' + id;\n                \n    ReactRefresh.register(type, fullId);\n  }\n\n  window.$RefreshSig$ = ReactRefresh.createSignatureFunctionForTransform;\n}\n\n// ====================\n// Your Code\n// ====================\n\n/* 代码尾部添加 */\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n\n  window.$RefreshReg$ = __$prevRefreshReg$__;\n  window.$RefreshSig$ = __$prevRefreshSig$__;\n  module.hot.accept();\n\n  if (window.$RefreshTime$ === null) {\n    window.$RefreshTime$ = setTimeout(() => {\n      window.$RefreshTime$ = null;\n      ReactRefresh.performReactRefresh();\n    }, 30);\n  }\n}\n"})})}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=O(O({},(0,y.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,O(O({},e),{},{children:(0,Z.jsx)(P,O({},e))})):P(e)}function D(e,n){var r=d()(e);if(f()){var s=f()(e);n&&(s=m()(s).call(s,function(n){return j()(e,n).enumerable})),r.push.apply(r,s)}return r}function F(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?_()(r=D(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):b()?w()(e,b()(t)):_()(s=D(Object(t))).call(s,function(n){N()(e,n,j()(t,n))})}return e}function A(e){var n=F(F({code:"code",pre:"pre"},(0,y.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"function ReactRefreshLoader(source, sourcemap) {\n  const callback = this.async();\n  let sourceData = source;\n\n  if (source.includes('= $RefreshSig$()')) {\n    sourceData = `${ ReactRefreshPrev }\\n\\n${ source }\\n\\n${ ReactRefreshEnd }`;\n  }\n\n  callback(null, sourceData, sourcemap);\n}\n\nmodule.exports = ReactRefreshLoader;\n"})})}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=F(F({},(0,y.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,F(F({},e),{},{children:(0,Z.jsx)(A,F({},e))})):A(e)}function q(e,n){var r=d()(e);if(f()){var s=f()(e);n&&(s=m()(s).call(s,function(n){return j()(e,n).enumerable})),r.push.apply(r,s)}return r}function z(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?_()(r=q(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):b()?w()(e,b()(t)):_()(s=q(Object(t))).call(s,function(n){N()(e,n,j()(t,n))})}return e}function B(e){var n=z(z({code:"code",pre:"pre"},(0,y.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /^.*\\.jsx?$/i,\n        use: [\n          {\n            loader: 'string-replace-loader',\n            options: {\n              search: /^(\\s|.)*$/,\n              replace(match) {\n                if (match.includes('= $RefreshSig$()')) {\n                  return `${ ReactRefreshPrev }\\n\\n${ match }\\n\\n${ ReactRefreshEnd }`;\n                }\n\n                return match;\n              }\n            }\n          },\n          {\n            loader: 'babel-loader',\n            options: {\n              presets: [\n                ['@babel/preset-react', {\n                  runtime: 'automatic',\n                  development: true\n                }]\n              ],\n              plugins: ['react-refresh/babel'],\n              exclude: /node_modules/\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n"})})}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=z(z({},(0,y.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,z(z({},e),{},{children:(0,Z.jsx)(B,z({},e))})):B(e)}var X=c.Z.Title,G=c.Z.Paragraph,Y=c.Z.Text,J=function(e){return(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(X,{children:"如何使用React Fast Refresh"}),(0,Z.jsxs)(G,{children:[(0,Z.jsx)(Y,{className:"inline-block",code:!0,children:"react-refresh"}),"是react官方实现的热替换方案，用于替换其他的方案，如",(0,Z.jsx)(Y,{className:"inline-block",code:!0,children:"react-hot-loader"}),"等。"]}),(0,Z.jsx)(X,{level:2,children:"在项目中使用react-refresh（webpack）"}),(0,Z.jsxs)(G,{children:["在babel配置中，需要添加babel插件",(0,Z.jsx)(Y,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"。"]}),(0,Z.jsx)(G,{children:"添加全局代码。"}),(0,Z.jsx)(I,{}),(0,Z.jsx)(G,{children:"在组件代码的头和尾添加代码。"}),(0,Z.jsx)(C,{}),(0,Z.jsxs)(G,{children:["这段代码必须在被",(0,Z.jsx)(Y,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"编译后的代码之前，否则不生效。"]}),(0,Z.jsx)(G,{children:"所以在webpack中，可以通过开发loader，来添加这段代码。"}),(0,Z.jsx)(H,{}),(0,Z.jsxs)(G,{children:["也可以通过",(0,Z.jsx)(Y,{className:"inline-block",code:!0,children:"string-replace-loader"}),"来注入这段代码。"]}),(0,Z.jsx)(V,{}),(0,Z.jsx)(i.Z,{type:"info",message:[(0,Z.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,Z.jsxs)("div",{className:"py-[8px]",children:["Fast Refresh：",(0,Z.jsx)(o.Z,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"})]},"fast-refresh")]})]})};function K(e){return(0,Z.jsxs)(s.Fragment,{children:[(0,Z.jsxs)(a(),{children:[(0,Z.jsx)("title",{children:"如何使用React Fast Refresh"}),(0,Z.jsx)("meta",{name:"keywords",content:"前端, React, react-refresh, hot loader"}),(0,Z.jsx)("meta",{name:"description",content:"如何使用React Fast Refresh"})]}),(0,Z.jsx)(J,{})]})}},19668:function(e,n,r){"use strict";var s=r(85893);n.Z=function(e){var n=e.href,r=e.className,t=e.children;return(0,s.jsx)("a",{className:r,href:n,target:"_blank",rel:"noopener noreferrer",children:t})}},39243:function(e,n,r){"use strict";var s=r(19623),t=r(73935),a=r(11163),c=r(81860),i=r(18610),l=r(75162),o=r(6171),u=r(76467),d=r(63791),h=r.n(d),f=r(85893),p=c.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,f.jsxs)("div",{className:h().main,children:[e.goBack?(0,f.jsx)("div",{className:"mb-[16px] text-right",children:(0,f.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,f.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,f.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,s.Z)(document))==="object"?(0,t.createPortal)((0,f.jsx)(p,{type:"primary",icon:(0,f.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,r){"use strict";r(64043);var s=r(88946),t=r.n(s),a=r(81290),c=r.n(a),i=r(41664),l=r.n(i),o=r(21612),u=r(78957),d=r(83062),h=r(67337),f=r(32958),p=r.n(f),m=r(96808),x=r(19668),j=r(85893),v=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],_=["github.io","vercel.app"],g=t()(v).call(v,function(e,n){return(0,j.jsx)("li",{className:p().navListItem,children:(0,j.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,j.jsx)(o.Z.Header,{className:p().antdHeader,children:(0,j.jsxs)("div",{className:p().header,children:[(0,j.jsx)("nav",{className:p().headerLeft,children:(0,j.jsx)("ul",{className:p().navList,children:g})}),(0,j.jsx)("div",{className:p().headerRight,children:(0,j.jsxs)(u.Z,{size:16,children:[(0,j.jsx)(d.Z,{title:"切换网站地址",children:(0,j.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,r=n.pathname,s=n.hostname,t=/github\.io/.test(s);window.location.href=new(c())(r,"https://duan602728596.".concat(_[t?1:0],"/"))},children:(0,j.jsx)(h.Z,{className:p().switchAddressIcon})})}),(0,j.jsx)(x.Z,{className:p().githubLink,href:"https://github.com/duan602728596",children:(0,j.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,r){"use strict";var s=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,t=e.avifSrc,a=e.webpSrc,c=e.src,i=e.alt;return(0,s.jsxs)("picture",{className:n,children:[t&&(0,s.jsx)("source",{srcSet:t,type:"image/avif"}),a&&(0,s.jsx)("source",{srcSet:a,type:"image/webp"}),(0,s.jsx)("img",{className:r,src:c,alt:i})]})}},55147:function(e,n,r){"use strict";var s=r(67294),t=r(31725),a=r(39243),c=r(85893);n.Z=function(e){return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(t.Z,{}),(0,c.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},4601:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/react/react-fast-refresh",function(){return r(54366)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,8925,9774,2888,179],function(){return e(e.s=4601)}),_N_E=e.O()}]);