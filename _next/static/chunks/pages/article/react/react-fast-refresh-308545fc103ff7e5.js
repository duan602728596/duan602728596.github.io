(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5319],{4601:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/react/react-fast-refresh",function(){return r(17788)}])},17788:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var s=r(85893),c=r(67294),t=r(9008),o=r.n(t),a=r(66252),i=r(57307),l=r(26219),d=r(41577),u=r(11151);function h(e){let n={code:"code",pre:"pre",...(0,u.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// global\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && !window.$RefreshInstall$\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n  \n  ReactRefresh.injectIntoGlobalHook(window);\n  window.$RefreshReg$ = () => {};\n  window.$RefreshSig$ = () => (type) => type;\n  window.$RefreshTime$ = null;\n  window.$RefreshInstall$ = true;\n}\n"})})}function f(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function p(e){let n={code:"code",pre:"pre",...(0,u.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"/* 代码头部添加 */\nlet __$prevRefreshReg$__;\nlet __$prevRefreshSig$__;\n\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  __$prevRefreshReg$__ = window.$RefreshReg$;\n  __$prevRefreshSig$__ = window.$RefreshSig$;\n\n  const ReactRefresh = require('react-refresh/runtime');\n       \n  window.$RefreshReg$ = (type, id) => {\n    const fullId = module.id + ' ' + id;\n                \n    ReactRefresh.register(type, fullId);\n  }\n\n  window.$RefreshSig$ = ReactRefresh.createSignatureFunctionForTransform;\n}\n\n// ====================\n// Your Code\n// ====================\n\n/* 代码尾部添加 */\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n\n  window.$RefreshReg$ = __$prevRefreshReg$__;\n  window.$RefreshSig$ = __$prevRefreshSig$__;\n  module.hot.accept();\n\n  if (window.$RefreshTime$ === null) {\n    window.$RefreshTime$ = setTimeout(() => {\n      window.$RefreshTime$ = null;\n      ReactRefresh.performReactRefresh();\n    }, 30);\n  }\n}\n"})})}function m(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function x(e){let n={code:"code",pre:"pre",...(0,u.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function ReactRefreshLoader(source, sourcemap) {\n  const callback = this.async();\n  let sourceData = source;\n\n  if (source.includes('= $RefreshSig$()')) {\n    sourceData = `${ ReactRefreshPrev }\\n\\n${ source }\\n\\n${ ReactRefreshEnd }`;\n  }\n\n  callback(null, sourceData, sourcemap);\n}\n\nmodule.exports = ReactRefreshLoader;\n"})})}function R(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}function j(e){let n={code:"code",pre:"pre",...(0,u.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /^.*\\.jsx?$/i,\n        use: [\n          {\n            loader: 'string-replace-loader',\n            options: {\n              search: /^(\\s|.)*$/,\n              replace(match) {\n                if (match.includes('= $RefreshSig$()')) {\n                  return `${ ReactRefreshPrev }\\n\\n${ match }\\n\\n${ ReactRefreshEnd }`;\n                }\n\n                return match;\n              }\n            }\n          },\n          {\n            loader: 'babel-loader',\n            options: {\n              presets: [\n                ['@babel/preset-react', {\n                  runtime: 'automatic',\n                  development: true\n                }]\n              ],\n              plugins: ['react-refresh/babel'],\n              exclude: /node_modules/\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n"})})}function $(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}let{Title:w,Paragraph:_,Text:g}=a.default;var b=function(e){return(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(w,{children:"如何使用React Fast Refresh"}),(0,s.jsxs)(_,{children:[(0,s.jsx)(g,{className:"inline-block",code:!0,children:"react-refresh"}),"是react官方实现的热替换方案，用于替换其他的方案，如",(0,s.jsx)(g,{className:"inline-block",code:!0,children:"react-hot-loader"}),"等。"]}),(0,s.jsx)(w,{level:2,children:"在项目中使用react-refresh（webpack）"}),(0,s.jsxs)(_,{children:["在babel配置中，需要添加babel插件",(0,s.jsx)(g,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"。"]}),(0,s.jsx)(_,{children:"添加全局代码。"}),(0,s.jsx)(f,{}),(0,s.jsx)(_,{children:"在组件代码的头和尾添加代码。"}),(0,s.jsx)(m,{}),(0,s.jsxs)(_,{children:["这段代码必须在被",(0,s.jsx)(g,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"编译后的代码之前，否则不生效。"]}),(0,s.jsx)(_,{children:"所以在webpack中，可以通过开发loader，来添加这段代码。"}),(0,s.jsx)(R,{}),(0,s.jsxs)(_,{children:["也可以通过",(0,s.jsx)(g,{className:"inline-block",code:!0,children:"string-replace-loader"}),"来注入这段代码。"]}),(0,s.jsx)($,{}),(0,s.jsx)(i.Z,{type:"info",message:[(0,s.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,s.jsxs)("div",{className:"py-[8px]",children:["Fast Refresh：",(0,s.jsx)(d.Z,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"})]},"fast-refresh")]})]})};function v(e){return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"如何使用React Fast Refresh"}),(0,s.jsx)("meta",{name:"keywords",content:"前端, React, react-refresh, hot loader"}),(0,s.jsx)("meta",{name:"description",content:"如何使用React Fast Refresh"})]}),(0,s.jsx)(b,{})]})}},94914:function(e,n,r){"use strict";var s=r(85893),c=r(73935),t=r(39332),o=r(29155),a=r(73991),i=r(70612),l=r(30448),d=r(76467),u=r(1294),h=r.n(u);let{BackTop:f}=o.default;n.Z=function(e){let n=(0,t.useRouter)();return[(0,s.jsxs)("div",{className:h().main,children:[e.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,s.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,s.jsx)(d.default,{children:"object"==typeof document?(0,c.createPortal)((0,s.jsx)(f,{type:"primary",icon:(0,s.jsx)(i.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(e,n,r){"use strict";var s=r(85893),c=r(66252),t=r(94914);n.Z=function(e){return(0,s.jsx)(t.Z,{goToTop:!0,goBack:!0,children:(0,s.jsx)(c.default,{children:e.children})})}},1294:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[3991,5361,7307,2888,9774,179],function(){return e(e.s=4601)}),_N_E=e.O()}]);