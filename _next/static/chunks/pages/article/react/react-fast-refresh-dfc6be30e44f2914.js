(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5319],{54366:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return J}});var t=r(67294),s=r(9008),a=r.n(s),c=r(76315),i=r(38925),l=r(55147),o=r(62079),u=r.n(o),d=r(52020),h=r.n(d),f=r(73324),p=r.n(f),m=r(88546),x=r.n(m),j=r(99595),v=r.n(j),_=r(66775),g=r.n(_),b=r(2201),R=r.n(b),w=r(57445),$=r.n(w),N=r(44845),k=r(85893),Z=r(11151);function y(e,n){var r=u()(e);if(h()){var t=h()(e);n&&(t=p()(t).call(t,function(n){return x()(e,n).enumerable})),r.push.apply(r,t)}return r}function T(e){for(var n=1;n<arguments.length;n++){var r,t,s=null!=arguments[n]?arguments[n]:{};n%2?v()(r=y(Object(s),!0)).call(r,function(n){(0,N.Z)(e,n,s[n])}):g()?R()(e,g()(s)):v()(t=y(Object(s))).call(t,function(n){$()(e,n,x()(s,n))})}return e}function S(e){var n=T(T({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-javascript",children:"// global\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && !window.$RefreshInstall$\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n  \n  ReactRefresh.injectIntoGlobalHook(window);\n  window.$RefreshReg$ = () => {};\n  window.$RefreshSig$ = () => (type) => type;\n  window.$RefreshTime$ = null;\n  window.$RefreshInstall$ = true;\n}\n"})})}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=T(T({},(0,Z.a)()),e.components).wrapper;return n?(0,k.jsx)(n,T(T({},e),{},{children:(0,k.jsx)(S,T({},e))})):S(e)}function I(e,n){var r=u()(e);if(h()){var t=h()(e);n&&(t=p()(t).call(t,function(n){return x()(e,n).enumerable})),r.push.apply(r,t)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r,t,s=null!=arguments[n]?arguments[n]:{};n%2?v()(r=I(Object(s),!0)).call(r,function(n){(0,N.Z)(e,n,s[n])}):g()?R()(e,g()(s)):v()(t=I(Object(s))).call(t,function(n){$()(e,n,x()(s,n))})}return e}function O(e){var n=E(E({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-javascript",children:"/* 代码头部添加 */\nlet __$prevRefreshReg$__;\nlet __$prevRefreshSig$__;\n\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  __$prevRefreshReg$__ = window.$RefreshReg$;\n  __$prevRefreshSig$__ = window.$RefreshSig$;\n\n  const ReactRefresh = require('react-refresh/runtime');\n       \n  window.$RefreshReg$ = (type, id) => {\n    const fullId = module.id + ' ' + id;\n                \n    ReactRefresh.register(type, fullId);\n  }\n\n  window.$RefreshSig$ = ReactRefresh.createSignatureFunctionForTransform;\n}\n\n// ====================\n// Your Code\n// ====================\n\n/* 代码尾部添加 */\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n\n  window.$RefreshReg$ = __$prevRefreshReg$__;\n  window.$RefreshSig$ = __$prevRefreshSig$__;\n  module.hot.accept();\n\n  if (window.$RefreshTime$ === null) {\n    window.$RefreshTime$ = setTimeout(() => {\n      window.$RefreshTime$ = null;\n      ReactRefresh.performReactRefresh();\n    }, 30);\n  }\n}\n"})})}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=E(E({},(0,Z.a)()),e.components).wrapper;return n?(0,k.jsx)(n,E(E({},e),{},{children:(0,k.jsx)(O,E({},e))})):O(e)}function C(e,n){var r=u()(e);if(h()){var t=h()(e);n&&(t=p()(t).call(t,function(n){return x()(e,n).enumerable})),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r,t,s=null!=arguments[n]?arguments[n]:{};n%2?v()(r=C(Object(s),!0)).call(r,function(n){(0,N.Z)(e,n,s[n])}):g()?R()(e,g()(s)):v()(t=C(Object(s))).call(t,function(n){$()(e,n,x()(s,n))})}return e}function F(e){var n=D(D({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-javascript",children:"function ReactRefreshLoader(source, sourcemap) {\n  const callback = this.async();\n  let sourceData = source;\n\n  if (source.includes('= $RefreshSig$()')) {\n    sourceData = `${ ReactRefreshPrev }\\n\\n${ source }\\n\\n${ ReactRefreshEnd }`;\n  }\n\n  callback(null, sourceData, sourcemap);\n}\n\nmodule.exports = ReactRefreshLoader;\n"})})}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=D(D({},(0,Z.a)()),e.components).wrapper;return n?(0,k.jsx)(n,D(D({},e),{},{children:(0,k.jsx)(F,D({},e))})):F(e)}function H(e,n){var r=u()(e);if(h()){var t=h()(e);n&&(t=p()(t).call(t,function(n){return x()(e,n).enumerable})),r.push.apply(r,t)}return r}function q(e){for(var n=1;n<arguments.length;n++){var r,t,s=null!=arguments[n]?arguments[n]:{};n%2?v()(r=H(Object(s),!0)).call(r,function(n){(0,N.Z)(e,n,s[n])}):g()?R()(e,g()(s)):v()(t=H(Object(s))).call(t,function(n){$()(e,n,x()(s,n))})}return e}function z(e){var n=q(q({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /^.*\\.jsx?$/i,\n        use: [\n          {\n            loader: 'string-replace-loader',\n            options: {\n              search: /^(\\s|.)*$/,\n              replace(match) {\n                if (match.includes('= $RefreshSig$()')) {\n                  return `${ ReactRefreshPrev }\\n\\n${ match }\\n\\n${ ReactRefreshEnd }`;\n                }\n\n                return match;\n              }\n            }\n          },\n          {\n            loader: 'babel-loader',\n            options: {\n              presets: [\n                ['@babel/preset-react', {\n                  runtime: 'automatic',\n                  development: true\n                }]\n              ],\n              plugins: ['react-refresh/babel'],\n              exclude: /node_modules/\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n"})})}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=q(q({},(0,Z.a)()),e.components).wrapper;return n?(0,k.jsx)(n,q(q({},e),{},{children:(0,k.jsx)(z,q({},e))})):z(e)}var V=c.Z.Title,X=c.Z.Paragraph,G=c.Z.Text,Y=function(e){return(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(V,{children:"如何使用React Fast Refresh"}),(0,k.jsxs)(X,{children:[(0,k.jsx)(G,{className:"inline-block",code:!0,children:"react-refresh"}),"是react官方实现的热替换方案，用于替换其他的方案，如",(0,k.jsx)(G,{className:"inline-block",code:!0,children:"react-hot-loader"}),"等。"]}),(0,k.jsx)(V,{level:2,children:"在项目中使用react-refresh（webpack）"}),(0,k.jsxs)(X,{children:["在babel配置中，需要添加babel插件",(0,k.jsx)(G,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"。"]}),(0,k.jsx)(X,{children:"添加全局代码。"}),(0,k.jsx)(L,{}),(0,k.jsx)(X,{children:"在组件代码的头和尾添加代码。"}),(0,k.jsx)(P,{}),(0,k.jsxs)(X,{children:["这段代码必须在被",(0,k.jsx)(G,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"编译后的代码之前，否则不生效。"]}),(0,k.jsx)(X,{children:"所以在webpack中，可以通过开发loader，来添加这段代码。"}),(0,k.jsx)(A,{}),(0,k.jsxs)(X,{children:["也可以通过",(0,k.jsx)(G,{className:"inline-block",code:!0,children:"string-replace-loader"}),"来注入这段代码。"]}),(0,k.jsx)(B,{}),(0,k.jsx)(i.Z,{type:"info",message:[(0,k.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,k.jsxs)("div",{className:"py-[8px]",children:["Fast Refresh：",(0,k.jsx)("a",{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"})]},"fast-refresh")]})]})};function J(e){return(0,k.jsxs)(t.Fragment,{children:[(0,k.jsxs)(a(),{children:[(0,k.jsx)("title",{children:"如何使用React Fast Refresh"}),(0,k.jsx)("meta",{name:"keywords",content:"前端, React, react-refresh, hot loader"}),(0,k.jsx)("meta",{name:"description",content:"如何使用React Fast Refresh"})]}),(0,k.jsx)(Y,{})]})}},39243:function(e,n,r){"use strict";var t=r(19623),s=r(73935),a=r(11163),c=r(81860),i=r(18610),l=r(75162),o=r(6171),u=r(76467),d=r(63791),h=r.n(d),f=r(85893),p=c.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,f.jsxs)("div",{className:h().main,children:[e.goBack?(0,f.jsx)("div",{className:"mb-[16px] text-right",children:(0,f.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,f.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,f.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,t.Z)(document))==="object"?(0,s.createPortal)((0,f.jsx)(p,{type:"primary",icon:(0,f.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,r){"use strict";r(64043);var t=r(88946),s=r.n(t),a=r(81290),c=r.n(a),i=r(41664),l=r.n(i),o=r(21612),u=r(78957),d=r(83062),h=r(67337),f=r(32958),p=r.n(f),m=r(96808),x=r(85893),j=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],_=s()(j).call(j,function(e,n){return(0,x.jsx)("li",{className:p().navListItem,children:(0,x.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,x.jsx)(o.Z.Header,{className:p().antdHeader,children:(0,x.jsxs)("div",{className:p().header,children:[(0,x.jsx)("nav",{className:p().headerLeft,children:(0,x.jsx)("ul",{className:p().navList,children:_})}),(0,x.jsx)("div",{className:p().headerRight,children:(0,x.jsxs)(u.Z,{size:16,children:[(0,x.jsx)(d.Z,{title:"切换网站地址",children:(0,x.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,r=n.pathname,t=n.hostname,s=/github\.io/.test(t);window.location.href=new(c())(r,"https://duan602728596.".concat(v[s?1:0],"/"))},children:(0,x.jsx)(h.Z,{className:p().switchAddressIcon})})}),(0,x.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,r){"use strict";var t=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,s=e.avifSrc,a=e.webpSrc,c=e.src,i=e.alt;return(0,t.jsxs)("picture",{className:n,children:[s&&(0,t.jsx)("source",{srcSet:s,type:"image/avif"}),a&&(0,t.jsx)("source",{srcSet:a,type:"image/webp"}),(0,t.jsx)("img",{className:r,src:c,alt:i})]})}},55147:function(e,n,r){"use strict";var t=r(67294),s=r(31725),a=r(39243),c=r(85893);n.Z=function(e){return(0,c.jsxs)(t.Fragment,{children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},4601:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/react/react-fast-refresh",function(){return r(54366)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,8925,9774,2888,179],function(){return e(e.s=4601)}),_N_E=e.O()}]);