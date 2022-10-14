(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{91736:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(67294),s=t(9008),a=t.n(s),i=t(76315),l=t(9991),c=t(67552),u=t.n(c),o=t(85893),h=t(11151);function d(e){var n=u()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// \u94fe\u8868\u7684\u8282\u70b9\nclass Node {\n  constructor(key, value, next = null) {\n    this.key = key;\n    this.value = value;\n    this.next = next;\n  }\n}\n\n// HashMap\nclass HashMap {\n  constructor(size = 16) {\n    this.size = 0;\n    this.table = [];\n\n    for (let i = 0; i < size; i++) {\n      this.table[i] = [null, 0];\n    }\n  }\n\n  hashConversion(key) {\n    let keyCode = 0;\n\n    for(const item of key) {\n      keyCode += item.charCodeAt(0)\n    }\n\n    return keyCode % this.table.length;\n  }\n\n  set(key, value) {\n    const index = this.hashConversion(key);\n    const indexValue = this.table[index][0];\n\n    if (indexValue === null) {\n      this.table[index][0] = new Node(key, value);\n      this.table[index][1] += 1;\n      this.size += 1;\n\n      return;\n    }\n\n    let currentBefore = null;\n    let current = indexValue;\n\n    while (current) {\n      if (current.key === key) {\n        current.value = value;\n        break;\n      } else {\n        currentBefore = current;\n        current = current.next;\n      }\n    }\n\n    if (current === null) {\n      currentBefore.next = new Node(key, value);\n      this.table[index][1] += 1;\n      this.size += 1;\n    }\n  }\n\n  get(key) {\n    let result = null;\n    const index = this.hashConversion(key);\n    const indexValue = this.table[index][0];\n\n    if (indexValue === null) {\n      return result;\n    }\n\n    let current = indexValue;\n\n    while (current) {\n      if (current.key === key) {\n        result = current.value;\n        break;\n      }\n    }\n\n    return result;\n  }\n\n  remove(key) {\n    const index = this.hashConversion(key);\n    const indexValue = this.table[index][0];\n\n    if (indexValue === null) {\n      return;\n    }\n\n    let currentBefore = null;\n    let current = indexValue;\n\n    while (current) {\n      if (current.key === key) {\n        if (currentBefore === null) {\n          this.table[index][0] = current.next;\n        } else {\n          currentBefore.next = current.next;\n        }\n\n        this.table[index][1] -= 1;\n        this.size -= 1;\n        break;\n      } else {\n        currentBefore = current;\n        current = current.next;\n      }\n    }\n  }\n}\n"})})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=u()({},(0,h.ah)(),e.components),t=n.wrapper;return t?(0,o.jsx)(t,u()({},e,{children:(0,o.jsx)(d,e)})):d(e)},f=i.Z.Title,v=i.Z.Paragraph;var m=function(e){return(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(f,{children:"\u6570\u636e\u7ed3\u6784\u4e4bHashMap"}),(0,o.jsx)(v,{children:"HashMap\u7684\u7ed3\u6784\uff0c\u662f\u6570\u7ec4+\u94fe\u8868+\u7ea2\u9ed1\u6811\u7684\u7ed3\u6784\u3002\u5f53\u94fe\u8868\u957f\u5ea6\u5927\u4e8e8\u65f6\uff0c\u8f6c\u4e3a\u7ea2\u9ed1\u6811\u7ed3\u6784\u3002HashMap\u662f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u3002"}),(0,o.jsx)(f,{level:2,children:"\u6a21\u62df\u5b9e\u73b0\u4e00\u4e2aHashMap"}),(0,o.jsx)(v,{children:"\u5728\u6211\u9762\u8bd5\u5fae\u8f6f\u65f6\uff0c\u6709\u4e00\u9053\u9898\u76ee\u662f\u7528JavaScript\u6a21\u62df\u5b9e\u73b0\u4e00\u4e2aHashMap\u3002\u5f53\u65f6\u4e0d\u4e86\u89e3HashMap\u662f\u4ec0\u4e48\u3002 \u6240\u4ee5\u73b0\u5728\u91cd\u65b0\u6a21\u62df\u5b9e\u73b0HashMap\uff0c\u6ca1\u6709\u7ea2\u9ed1\u6811\u7684\u7ed3\u6784\uff0c\u4e5f\u6ca1\u6709\u7ebf\u7a0b\u5b89\u5168\u7684\u4fdd\u8bc1\u3002\u5b58\u7cb9\u662f\u4e3a\u4e86\u5b66\u4e60\u3002"}),(0,o.jsx)(x,{})]})};function p(e){return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"\u6570\u636e\u7ed3\u6784\u4e4bHashMap"}),(0,o.jsx)("meta",{name:"keywords",content:"\u7b97\u6cd5, HashMap"}),(0,o.jsx)("meta",{name:"description",content:"\u6570\u636e\u7ed3\u6784\u4e4bHashMap"})]}),(0,o.jsx)(m,{})]})}},39748:function(e,n,t){"use strict";var r=t(19623),s=t(73935),a=t(11163),i=t(14137),l=t(39128),c=t(6171),u=t(76467),o=t(97680),h=t.n(o),d=t(85893);n.Z=function(e){var n=(0,a.useRouter)();return[(0,d.jsxs)("div",{className:h().main,children:[e.goBack?(0,d.jsx)("div",{className:"mb-[16px] text-right",children:(0,d.jsxs)(l.Z,{onClick:function(e){n.push("/")},children:[(0,d.jsx)(c.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,d.jsx)(u.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,r.Z)(document))?(0,s.createPortal)((0,d.jsx)(i.Z.BackTop,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,d.jsx)("div",{className:h().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(74916);var r=t(88946),s=t.n(r),a=t(81290),i=t.n(a),l=t(41664),c=t.n(l),u=t(97183),o=t(46216),h=t(83062),d=t(67337),x=t(56392),f=t.n(x),v=t(2013),m=t(85893),p=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],j=["github.io","vercel.app"],_=s()(p).call(p,(function(e,n){return(0,m.jsx)("li",{className:f().navListItem,children:(0,m.jsx)(c(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,m.jsx)(u.Z.Header,{className:f().antdHeader,children:(0,m.jsxs)("div",{className:f().header,children:[(0,m.jsx)("nav",{className:f().headerLeft,children:(0,m.jsx)("ul",{className:f().navList,children:_})}),(0,m.jsx)("div",{className:f().headerRight,children:(0,m.jsxs)(o.Z,{className:"mt-[-6px]",size:16,children:[(0,m.jsx)(h.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,m.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,s=/github\.io/.test(r);window.location.href=new(i())(t,"https://duan602728596.".concat(j[s?1:0],"/"))},children:(0,m.jsx)(d.Z,{className:f().switchAddressIcon})})}),(0,m.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(v.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,s=e.avifSrc,a=e.webpSrc,i=e.src,l=e.alt;return(0,r.jsxs)("picture",{className:n,children:[s&&(0,r.jsx)("source",{srcSet:s,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:i,alt:l})]})}},9991:function(e,n,t){"use strict";var r=t(67294),s=t(32307),a=t(39748),i=t(85893);n.Z=function(e){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},81019:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/algorithms-and-data-structures/hashmap",function(){return t(91736)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[9128,1091,1327,9774,2888,179],(function(){return n=81019,e(e.s=n);var n}));var n=e.O();_N_E=n}]);