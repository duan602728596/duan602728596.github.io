(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3773],{76765:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(67294),a=t(9008),r=t.n(a),i=t(76315),c=t(9991),l=t(67552),o=t.n(l),h=t(85893),d=t(11151);function u(e){var n=o()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"// \u81ea\u5b9a\u4e49call\u7684\u5b9e\u73b0\nFunction.prototype.customCall = function(thisArg, ...args) {\n  const thisObject = Object(thisArg);\n  const symbol = Symbol('func');\n\n  thisObject[symbol] = this;\n\n  const result = thisObject[symbol](...args);\n\n  delete thisObject[symbol];\n\n  return result;\n};\n\n// \u81ea\u5b9a\u4e49apply\u7684\u5b9e\u73b0\nFunction.prototype.customApply = function(thisArg, args = []) {\n  const thisObject = Object(thisArg);\n  const symbol = Symbol('func');\n\n  thisObject[symbol] = this;\n\n  const result = thisObject[symbol](...args);\n\n  delete thisObject[symbol];\n\n  return result;\n};\n"})})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({},(0,d.ah)(),e.components),t=n.wrapper;return t?(0,h.jsx)(t,o()({},e,{children:(0,h.jsx)(u,e)})):u(e)},p=i.Z.Title,j=i.Z.Paragraph;var f=function(e){return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(p,{children:"\u5b9e\u73b0call\u548capply\u65b9\u6cd5"}),(0,h.jsx)(j,{children:"\u4e00\u9053\u7ecf\u5178\u7684\u9762\u8bd5\u9898\uff1a\u5982\u4f55\u5b9e\u73b0call\u548capply\u65b9\u6cd5\u3002\u5b9e\u73b0\u65b9\u6cd5\u5982\u4e0b\uff1a"}),(0,h.jsx)(m,{})]})};function b(e){return(0,h.jsxs)(s.Fragment,{children:[(0,h.jsxs)(r(),{children:[(0,h.jsx)("title",{children:"\u5b9e\u73b0call\u548capply\u65b9\u6cd5"}),(0,h.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, javascript"}),(0,h.jsx)("meta",{name:"description",content:"\u5b9e\u73b0call\u548capply\u65b9\u6cd5"})]}),(0,h.jsx)(f,{})]})}},39748:function(e,n,t){"use strict";var s=t(19623),a=t(73935),r=t(11163),i=t(14137),c=t(39128),l=t(6171),o=t(76467),h=t(97680),d=t.n(h),u=t(85893);n.Z=function(e){var n=(0,r.useRouter)();return[(0,u.jsxs)("div",{className:d().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(c.Z,{onClick:function(e){n.push("/")},children:[(0,u.jsx)(l.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,u.jsx)(o.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,s.Z)(document))?(0,a.createPortal)((0,u.jsx)(i.Z.BackTop,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,u.jsx)("div",{className:d().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(74916);var s=t(88946),a=t.n(s),r=t(81290),i=t.n(r),c=t(41664),l=t.n(c),o=t(97183),h=t(46216),d=t(83062),u=t(67337),m=t(56392),p=t.n(m),j=t(2013),f=t(85893),b=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],v=["github.io","vercel.app"],x=a()(b).call(b,(function(e,n){return(0,f.jsx)("li",{className:p().navListItem,children:(0,f.jsx)(l(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,f.jsx)(o.Z.Header,{className:p().antdHeader,children:(0,f.jsxs)("div",{className:p().header,children:[(0,f.jsx)("nav",{className:p().headerLeft,children:(0,f.jsx)("ul",{className:p().navList,children:x})}),(0,f.jsx)("div",{className:p().headerRight,children:(0,f.jsxs)(h.Z,{className:"mt-[-6px]",size:16,children:[(0,f.jsx)(d.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,f.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,t=n.pathname,s=n.hostname,a=/github\.io/.test(s);window.location.href=new(i())(t,"https://duan602728596.".concat(v[a?1:0],"/"))},children:(0,f.jsx)(u.Z,{className:p().switchAddressIcon})})}),(0,f.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,f.jsx)(j.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var s=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,a=e.avifSrc,r=e.webpSrc,i=e.src,c=e.alt;return(0,s.jsxs)("picture",{className:n,children:[a&&(0,s.jsx)("source",{srcSet:a,type:"image/avif"}),r&&(0,s.jsx)("source",{srcSet:r,type:"image/webp"}),(0,s.jsx)("img",{className:t,src:i,alt:c})]})}},9991:function(e,n,t){"use strict";var s=t(67294),a=t(32307),r=t(39748),i=t(85893);n.Z=function(e){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(r.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},32486:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/implement-call-and-apply",function(){return t(76765)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[9128,1091,1327,9774,2888,179],(function(){return n=32486,e(e.s=n);var n}));var n=e.O();_N_E=n}]);