(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5319],{89739:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(1413),o=r(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=r(42135),i=function(e,n){return o.createElement(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:c}))};i.displayName="CheckCircleFilled";var s=o.forwardRef(i)},21640:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(1413),o=r(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},a=r(42135),i=function(e,n){return o.createElement(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:c}))};i.displayName="ExclamationCircleFilled";var s=o.forwardRef(i)},78860:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(1413),o=r(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=r(42135),i=function(e,n){return o.createElement(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:c}))};i.displayName="InfoCircleFilled";var s=o.forwardRef(i)},5467:function(e,n,r){"use strict";function t(e){return Object.keys(e).reduce((function(n,r){return!r.startsWith("data-")&&!r.startsWith("aria-")&&"role"!==r||r.startsWith("data-__")||(n[r]=e[r]),n}),{})}r.d(n,{Z:function(){return t}})},99138:function(e,n,r){"use strict";r.d(n,{Z:function(){return H}});var t=r(87462),o=r(97685),c=r(4942),a=r(89739),i=r(4340),s=r(97937),l=r(21640),d=r(78860),u=r(94184),h=r.n(u),f=r(62874),m=r(67294),p=r(53124),g=r(5467),v=r(96159),x=r(15671),b=r(43144),w=r(32531),j=r(73568),Z=function(e){(0,w.Z)(r,e);var n=(0,j.Z)(r);function r(){var e;return(0,x.Z)(this,r),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,b.Z)(r,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,r=e.description,t=e.children,o=this.state,c=o.error,a=o.info,i=a&&a.componentStack?a.componentStack:null,s="undefined"===typeof n?(c||"").toString():n,l="undefined"===typeof r?i:r;return c?m.createElement(H,{type:"error",message:s,description:m.createElement("pre",null,l)}):t}}]),r}(m.Component),R=r(67968),_=r(45503),N=r(14747),y=function(e,n,r,t,o){return(0,c.Z)({backgroundColor:e,border:"".concat(t.controlLineWidth,"px ").concat(t.controlLineType," ").concat(n)},"".concat(o,"-icon"),{color:r})},S=function(e){var n,r,o,a=e.componentCls,i=e.motionDurationSlow,s=e.marginXS,l=e.marginSM,d=e.fontSize,u=e.fontSizeLG,h=e.lineHeight,f=e.radiusLG,m=e.motionEaseInOutCirc,p=e.alertIconSizeLG,g=e.colorText,v=e.paddingSM,x=e.paddingXS,b=e.paddingTmp,w=e.paddingLG;return o={},(0,c.Z)(o,a,(0,t.Z)((0,t.Z)({},(0,N.Wf)(e)),(n={position:"relative",display:"flex",alignItems:"center",padding:"".concat(x,"px ").concat(v,"px"),wordWrap:"break-word",borderRadius:f,"&&-rtl":{direction:"rtl"}},(0,c.Z)(n,"".concat(a,"-content"),{flex:1,minWidth:0}),(0,c.Z)(n,"".concat(a,"-icon"),{marginInlineEnd:s,lineHeight:0}),(0,c.Z)(n,"&-description",{display:"none",fontSize:d,lineHeight:h}),(0,c.Z)(n,"&-message",{color:g}),(0,c.Z)(n,"&&-motion-leave",{overflow:"hidden",opacity:1,transition:"max-height ".concat(i," ").concat(m,", opacity ").concat(i," ").concat(m,",\n        padding-top ").concat(i," ").concat(m,", padding-bottom ").concat(i," ").concat(m,",\n        margin-bottom ").concat(i," ").concat(m)}),(0,c.Z)(n,"&&-motion-leave-active",{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),n))),(0,c.Z)(o,"".concat(a,"-with-description"),(r={alignItems:"flex-start",paddingInline:w,paddingBlock:b},(0,c.Z)(r,"".concat(a,"-icon"),{marginInlineEnd:l,fontSize:p,lineHeight:0}),(0,c.Z)(r,"".concat(a,"-message"),{display:"block",marginBottom:s,color:g,fontSize:u}),(0,c.Z)(r,"".concat(a,"-description"),{display:"block"}),r)),(0,c.Z)(o,"".concat(a,"-banner"),{marginBottom:0,border:"0 !important",borderRadius:0}),o},$=function(e){var n=e.componentCls,r=e.colorSuccess,o=e.colorSuccessBorder,a=e.colorSuccessBg,i=e.colorWarning,s=e.colorWarningBorder,l=e.colorWarningBg,d=e.colorError,u=e.colorErrorBorder,h=e.colorErrorBg,f=e.colorInfo,m=e.colorInfoBorder,p=e.colorInfoBg;return(0,c.Z)({},n,{"&-success":y(a,o,r,e,n),"&-info":y(p,m,f,e,n),"&-warning":y(l,s,i,e,n),"&-error":(0,t.Z)((0,t.Z)({},y(h,u,d,e,n)),(0,c.Z)({},"".concat(n,"-description > pre"),{margin:0,padding:0}))})},k=function(e){var n,r=e.componentCls,t=e.iconCls,o=e.motionDurationFast,a=e.marginXS,i=e.fontSizeIcon,s=e.colorIcon,l=e.colorIconHover;return(0,c.Z)({},r,(n={},(0,c.Z)(n,"&-action",{marginInlineStart:a}),(0,c.Z)(n,"".concat(r,"-close-icon"),(0,c.Z)({marginInlineStart:a,padding:0,overflow:"hidden",fontSize:i,lineHeight:"".concat(i,"px"),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},"".concat(t,"-close"),{color:s,transition:"color ".concat(o),"&:hover":{color:l}})),(0,c.Z)(n,"&-close-text",{color:s,transition:"color ".concat(o),"&:hover":{color:l}}),n))},E=function(e){return[S(e),$(e),k(e)]},C=(0,R.Z)("Alert",(function(e){var n=e.fontSizeHeading3,r=(0,_.TS)(e,{alertIconSizeLG:n});return[E(r)]})),I=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r},T={success:a.Z,info:d.Z,error:i.Z,warning:l.Z},L=function(e){var n=e.icon,r=e.prefixCls,t=e.type,o=T[t]||null;return n?(0,v.wm)(n,m.createElement("span",{className:"".concat(r,"-icon")},n),(function(){return{className:h()("".concat(r,"-icon"),(0,c.Z)({},n.props.className,n.props.className))}})):m.createElement(o,{className:"".concat(r,"-icon")})},z=function(e){var n=e.isClosable,r=e.closeText,t=e.prefixCls,o=e.closeIcon,c=e.handleClose;return n?m.createElement("button",{type:"button",onClick:c,className:"".concat(t,"-close-icon"),tabIndex:0},r?m.createElement("span",{className:"".concat(t,"-close-text")},r):o):null},B=function(e){var n,r=e.description,a=e.prefixCls,i=e.message,l=e.banner,d=e.className,u=void 0===d?"":d,v=e.style,x=e.onMouseEnter,b=e.onMouseLeave,w=e.onClick,j=e.afterClose,Z=e.showIcon,R=e.closable,_=e.closeText,N=e.closeIcon,y=void 0===N?m.createElement(s.Z,null):N,S=e.action,$=I(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),k=m.useState(!1),E=(0,o.Z)(k,2),T=E[0],B=E[1],H=m.useRef(),O=m.useContext(p.E_),F=O.getPrefixCls,P=O.direction,D=F("alert",a),M=C(D),A=(0,o.Z)(M,2),W=A[0],G=A[1],V=function(e){var n;B(!0),null===(n=$.onClose)||void 0===n||n.call($,e)},X=!!_||R,q=function(){var e=$.type;return void 0!==e?e:l?"warning":"info"}(),K=!(!l||void 0!==Z)||Z,Q=h()(D,"".concat(D,"-").concat(q),(n={},(0,c.Z)(n,"".concat(D,"-with-description"),!!r),(0,c.Z)(n,"".concat(D,"-no-icon"),!K),(0,c.Z)(n,"".concat(D,"-banner"),!!l),(0,c.Z)(n,"".concat(D,"-rtl"),"rtl"===P),n),u,G),U=(0,g.Z)($);return W(m.createElement(f.Z,{visible:!T,motionName:"".concat(D,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:j},(function(e){var n=e.className,o=e.style;return m.createElement("div",(0,t.Z)({ref:H,"data-show":!T,className:h()(Q,n),style:(0,t.Z)((0,t.Z)({},v),o),onMouseEnter:x,onMouseLeave:b,onClick:w,role:"alert"},U),K?m.createElement(L,{description:r,icon:$.icon,prefixCls:D,type:q}):null,m.createElement("div",{className:"".concat(D,"-content")},i?m.createElement("div",{className:"".concat(D,"-message")},i):null,r?m.createElement("div",{className:"".concat(D,"-description")},r):null),S?m.createElement("div",{className:"".concat(D,"-action")},S):null,m.createElement(z,{isClosable:!!X,closeText:_,prefixCls:D,closeIcon:y,handleClose:V}))})))};B.ErrorBoundary=Z;var H=B},81856:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return N}});var t=r(67294),o=r(9008),c=r.n(o),a=r(76315),i=r(99138),s=r(9991),l=r(67552),d=r.n(l),u=r(85893),h=r(11151);function f(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"// global\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && !window.$RefreshInstall$\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n  \n  ReactRefresh.injectIntoGlobalHook(window);\n  window.$RefreshReg$ = () => {};\n  window.$RefreshSig$ = () => (type) => type;\n  window.$RefreshTime$ = null;\n  window.$RefreshInstall$ = true;\n}\n"})})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components),r=n.wrapper;return r?(0,u.jsx)(r,d()({},e,{children:(0,u.jsx)(f,e)})):f(e)};function p(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"/* \u4ee3\u7801\u5934\u90e8\u6dfb\u52a0 */\nlet __$prevRefreshReg$__;\nlet __$prevRefreshSig$__;\n\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  __$prevRefreshReg$__ = window.$RefreshReg$;\n  __$prevRefreshSig$__ = window.$RefreshSig$;\n\n  const ReactRefresh = require('react-refresh/runtime');\n       \n  window.$RefreshReg$ = (type, id) => {\n    const fullId = module.id + ' ' + id;\n                \n    ReactRefresh.register(type, fullId);\n  }\n\n  window.$RefreshSig$ = ReactRefresh.createSignatureFunctionForTransform;\n}\n\n// ====================\n// Your Code\n// ====================\n\n/* \u4ee3\u7801\u5c3e\u90e8\u6dfb\u52a0 */\nif (\n  process.env.NODE_ENV !== 'production'\n  && typeof window !== 'undefined'\n  && module.hot\n) {\n  const ReactRefresh = require('react-refresh/runtime');\n\n  window.$RefreshReg$ = __$prevRefreshReg$__;\n  window.$RefreshSig$ = __$prevRefreshSig$__;\n  module.hot.accept();\n\n  if (window.$RefreshTime$ === null) {\n    window.$RefreshTime$ = setTimeout(() => {\n      window.$RefreshTime$ = null;\n      ReactRefresh.performReactRefresh();\n    }, 30);\n  }\n}\n"})})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components),r=n.wrapper;return r?(0,u.jsx)(r,d()({},e,{children:(0,u.jsx)(p,e)})):p(e)};function v(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"function ReactRefreshLoader(source, sourcemap) {\n  const callback = this.async();\n  let sourceData = source;\n\n  if (source.includes('= $RefreshSig$()')) {\n    sourceData = `${ ReactRefreshPrev }\\n\\n${ source }\\n\\n${ ReactRefreshEnd }`;\n  }\n\n  callback(null, sourceData, sourcemap);\n}\n\nmodule.exports = ReactRefreshLoader;\n"})})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components),r=n.wrapper;return r?(0,u.jsx)(r,d()({},e,{children:(0,u.jsx)(v,e)})):v(e)};function b(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /^.*\\.jsx?$/i,\n        use: [\n          {\n            loader: 'string-replace-loader',\n            options: {\n              search: /^(\\s|.)*$/,\n              replace(match) {\n                if (match.includes('= $RefreshSig$()')) {\n                  return `${ ReactRefreshPrev }\\n\\n${ match }\\n\\n${ ReactRefreshEnd }`;\n                }\n\n                return match;\n              }\n            }\n          },\n          {\n            loader: 'babel-loader',\n            options: {\n              presets: [\n                ['@babel/preset-react', {\n                  runtime: 'automatic',\n                  development: true\n                }]\n              ],\n              plugins: ['react-refresh/babel'],\n              exclude: /node_modules/\n            }\n          }\n        ]\n      }\n    ]\n  }\n};\n"})})}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components),r=n.wrapper;return r?(0,u.jsx)(r,d()({},e,{children:(0,u.jsx)(b,e)})):b(e)},j=a.Z.Title,Z=a.Z.Paragraph,R=a.Z.Text;var _=function(e){return(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(j,{children:"\u5982\u4f55\u4f7f\u7528React Fast Refresh"}),(0,u.jsxs)(Z,{children:[(0,u.jsx)(R,{className:"inline-block",code:!0,children:"react-refresh"}),"\u662freact\u5b98\u65b9\u5b9e\u73b0\u7684\u70ed\u66ff\u6362\u65b9\u6848\uff0c\u7528\u4e8e\u66ff\u6362\u5176\u4ed6\u7684\u65b9\u6848\uff0c\u5982",(0,u.jsx)(R,{className:"inline-block",code:!0,children:"react-hot-loader"}),"\u7b49\u3002"]}),(0,u.jsx)(j,{level:2,children:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528react-refresh\uff08webpack\uff09"}),(0,u.jsxs)(Z,{children:["\u5728babel\u914d\u7f6e\u4e2d\uff0c\u9700\u8981\u6dfb\u52a0babel\u63d2\u4ef6",(0,u.jsx)(R,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"\u3002"]}),(0,u.jsx)(Z,{children:"\u6dfb\u52a0\u5168\u5c40\u4ee3\u7801\u3002"}),(0,u.jsx)(m,{}),(0,u.jsx)(Z,{children:"\u5728\u7ec4\u4ef6\u4ee3\u7801\u7684\u5934\u548c\u5c3e\u6dfb\u52a0\u4ee3\u7801\u3002"}),(0,u.jsx)(g,{}),(0,u.jsxs)(Z,{children:["\u8fd9\u6bb5\u4ee3\u7801\u5fc5\u987b\u5728\u88ab",(0,u.jsx)(R,{className:"inline-block",code:!0,children:"react-refresh/babel"}),"\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e4b\u524d\uff0c\u5426\u5219\u4e0d\u751f\u6548\u3002"]}),(0,u.jsx)(Z,{children:"\u6240\u4ee5\u5728webpack\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1loader\uff0c\u6765\u6dfb\u52a0\u8fd9\u6bb5\u4ee3\u7801\u3002"}),(0,u.jsx)(x,{}),(0,u.jsxs)(Z,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,u.jsx)(R,{className:"inline-block",code:!0,children:"string-replace-loader"}),"\u6765\u6ce8\u5165\u8fd9\u6bb5\u4ee3\u7801\u3002"]}),(0,u.jsx)(w,{}),(0,u.jsx)(i.Z,{type:"info",message:[(0,u.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"\u53c2\u8003\u5730\u5740\uff1a"},"cankaodizhi"),(0,u.jsxs)("div",{className:"py-[8px]",children:["Fast Refresh\uff1a",(0,u.jsx)("a",{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"})]},"fast-refresh")]})]})};function N(e){return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(c(),{children:[(0,u.jsx)("title",{children:"\u5982\u4f55\u4f7f\u7528React Fast Refresh"}),(0,u.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, React, react-refresh, hot loader"}),(0,u.jsx)("meta",{name:"description",content:"\u5982\u4f55\u4f7f\u7528React Fast Refresh"})]}),(0,u.jsx)(_,{})]})}},39748:function(e,n,r){"use strict";var t=r(19623),o=r(73935),c=r(11163),a=r(14137),i=r(39128),s=r(6171),l=r(76467),d=r(97680),u=r.n(d),h=r(85893);n.Z=function(e){var n=(0,c.useRouter)();return[(0,h.jsxs)("div",{className:u().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(i.Z,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(s.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,h.jsx)(l.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,t.Z)(document))?(0,o.createPortal)((0,h.jsx)(a.Z.BackTop,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,h.jsx)("div",{className:u().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,r){"use strict";r(74916);var t=r(88946),o=r.n(t),c=r(81290),a=r.n(c),i=r(41664),s=r.n(i),l=r(97183),d=r(46216),u=r(83062),h=r(67337),f=r(56392),m=r.n(f),p=r(2013),g=r(85893),v=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],x=["github.io","vercel.app"],b=o()(v).call(v,(function(e,n){return(0,g.jsx)("li",{className:m().navListItem,children:(0,g.jsx)(s(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,g.jsx)(l.Z.Header,{className:m().antdHeader,children:(0,g.jsxs)("div",{className:m().header,children:[(0,g.jsx)("nav",{className:m().headerLeft,children:(0,g.jsx)("ul",{className:m().navList,children:b})}),(0,g.jsx)("div",{className:m().headerRight,children:(0,g.jsxs)(d.Z,{className:"mt-[-6px]",size:16,children:[(0,g.jsx)(u.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,g.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,r=n.pathname,t=n.hostname,o=/github\.io/.test(t);window.location.href=new(a())(r,"https://duan602728596.".concat(x[o?1:0],"/"))},children:(0,g.jsx)(h.Z,{className:m().switchAddressIcon})})}),(0,g.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,r){"use strict";var t=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,o=e.avifSrc,c=e.webpSrc,a=e.src,i=e.alt;return(0,t.jsxs)("picture",{className:n,children:[o&&(0,t.jsx)("source",{srcSet:o,type:"image/avif"}),c&&(0,t.jsx)("source",{srcSet:c,type:"image/webp"}),(0,t.jsx)("img",{className:r,src:a,alt:i})]})}},9991:function(e,n,r){"use strict";var t=r(67294),o=r(32307),c=r(39748),a=r(85893);n.Z=function(e){return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(c.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},4601:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/react/react-fast-refresh",function(){return r(81856)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[9128,1091,1327,9774,2888,179],(function(){return n=4601,e(e.s=n);var n}));var n=e.O();_N_E=n}]);