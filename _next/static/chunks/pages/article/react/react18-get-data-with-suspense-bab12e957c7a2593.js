(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5041],{51542:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return H}});var s=r(67294),t=r(9008),a=r.n(t),i=r(76315),c=r(38925),o=r(55147),l=r(62079),u=r.n(l),d=r(52020),p=r.n(d),h=r(73324),f=r.n(h),m=r(88546),x=r.n(m),j=r(99595),v=r.n(j),g=r(66775),_=r.n(g),b=r(2201),w=r.n(b),N=r(57445),S=r.n(N),k=r(44845),T=r(85893),Z=r(11151);function P(e,n){var r=u()(e);if(p()){var s=p()(e);n&&(s=f()(s).call(s,function(n){return x()(e,n).enumerable})),r.push.apply(r,s)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?v()(r=P(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):_()?w()(e,_()(t)):v()(s=P(Object(t))).call(s,function(n){S()(e,n,x()(t,n))})}return e}function L(e){var n=y(y({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:"language-typescript",children:"interface WrapPromise<T> {\n  read(): T | undefined;\n}\n\nenum WrapStatus {\n  Pending = 'pending',\n  Success = 'success',\n  Error = 'error'\n}\n\n/**\n * 加载器\n * @param { () => Promise<T> } promise: 一个返回Promise的函数\n */\nfunction wrapPromise<T = unknown>(promise: () => Promise<T>): WrapPromise<T> {\n  let status: WrapStatus = WrapStatus.Pending;\n  let result: T | Error;\n  let suspender: Promise<void>;\n\n  // 第一次读取read时运行promise\n  function runPromise(): void {\n    suspender ??= promise().then<void, void>(\n      (value: T): void => {\n        status = WrapStatus.Success;\n        result = value;\n      },\n      (err: Error): void => {\n        status = WrapStatus.Error;\n        result = err;\n      }\n    );\n  }\n\n  return {\n    read(): T | undefined {\n      runPromise();\n\n      if (status === WrapStatus.Pending) {\n        throw suspender;\n      } else if (status === WrapStatus.Error) {\n        throw result;\n      } else if (status === WrapStatus.Success) {\n        return result as T;\n      }\n    }\n  };\n}\n"})})}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=y(y({},(0,Z.a)()),e.components).wrapper;return n?(0,T.jsx)(n,y(y({},e),{},{children:(0,T.jsx)(L,y({},e))})):L(e)}function W(e,n){var r=u()(e);if(p()){var s=p()(e);n&&(s=f()(s).call(s,function(n){return x()(e,n).enumerable})),r.push.apply(r,s)}return r}function A(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?v()(r=W(Object(t),!0)).call(r,function(n){(0,k.Z)(e,n,t[n])}):_()?w()(e,_()(t)):v()(s=W(Object(t))).call(s,function(n){S()(e,n,x()(t,n))})}return e}function C(e){var n=A(A({code:"code",pre:"pre"},(0,Z.a)()),e.components);return(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:"language-javascript",children:"import { Suspense } from 'react';\n\nconst g = wrapPromise(getData);\n\nfunction Child(props) {\n  const data = g.read();\n\n  return <div>{ data }</div>;\n}\n\nfunction Demo(props) {\n  return (\n    <Suspense fallback=\"Loading...\">\n      <Child />\n    </Suspense>\n  );\n}\n"})})}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=A(A({},(0,Z.a)()),e.components).wrapper;return n?(0,T.jsx)(n,A(A({},e),{},{children:(0,T.jsx)(C,A({},e))})):C(e)}var R=i.Z.Title,z=i.Z.Paragraph,D=i.Z.Text,O=function(e){return(0,T.jsxs)(o.Z,{children:[(0,T.jsx)(R,{children:"在React18中，配合Suspense来获取数据"}),(0,T.jsxs)(z,{children:["在React18的版本中，",(0,T.jsx)(D,{code:!0,children:"<Suspense>"}),"组件可以用于数据获取。"]}),(0,T.jsx)(z,{children:"首先，要实现一个数据的加载器："}),(0,T.jsx)(E,{}),(0,T.jsx)(z,{children:"然后在组件内调用："}),(0,T.jsx)(I,{}),(0,T.jsx)(c.Z,{type:"info",message:[(0,T.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,T.jsxs)("div",{className:"py-[8px]",children:["React使用Suspense来获取数据的Demo：",(0,T.jsx)("a",{href:"https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js",target:"_blank",rel:"noopener noreferrer",children:"https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js"})]},"react-gradual-upgrade-demo"),(0,T.jsxs)("div",{className:"py-[8px]",children:["React Suspense for Data Fetching官方文档：",(0,T.jsx)("a",{href:"https://reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer",children:"https://reactjs.org/docs/concurrent-mode-suspense.html"})]},"webpack-module-federation")]})]})};function H(e){return(0,T.jsxs)(s.Fragment,{children:[(0,T.jsxs)(a(),{children:[(0,T.jsx)("title",{children:"React18配合Suspense获取数据"}),(0,T.jsx)("meta",{name:"keywords",content:"前端, js, javascript, react"}),(0,T.jsx)("meta",{name:"description",content:"在react18中，配合Suspense来获取数据"})]}),(0,T.jsx)(O,{})]})}},39243:function(e,n,r){"use strict";var s=r(19623),t=r(73935),a=r(11163),i=r(81860),c=r(18610),o=r(75162),l=r(6171),u=r(76467),d=r(63791),p=r.n(d),h=r(85893),f=i.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,h.jsxs)("div",{className:p().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,h.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,s.Z)(document))==="object"?(0,t.createPortal)((0,h.jsx)(f,{type:"primary",icon:(0,h.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,r){"use strict";r(64043);var s=r(88946),t=r.n(s),a=r(81290),i=r.n(a),c=r(41664),o=r.n(c),l=r(21612),u=r(78957),d=r(83062),p=r(67337),h=r(32958),f=r.n(h),m=r(96808),x=r(85893),j=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],g=t()(j).call(j,function(e,n){return(0,x.jsx)("li",{className:f().navListItem,children:(0,x.jsx)(o(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,x.jsx)(l.Z.Header,{className:f().antdHeader,children:(0,x.jsxs)("div",{className:f().header,children:[(0,x.jsx)("nav",{className:f().headerLeft,children:(0,x.jsx)("ul",{className:f().navList,children:g})}),(0,x.jsx)("div",{className:f().headerRight,children:(0,x.jsxs)(u.Z,{size:16,children:[(0,x.jsx)(d.Z,{title:"切换网站地址",children:(0,x.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,r=n.pathname,s=n.hostname,t=/github\.io/.test(s);window.location.href=new(i())(r,"https://duan602728596.".concat(v[t?1:0],"/"))},children:(0,x.jsx)(p.Z,{className:f().switchAddressIcon})})}),(0,x.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,r){"use strict";var s=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,t=e.avifSrc,a=e.webpSrc,i=e.src,c=e.alt;return(0,s.jsxs)("picture",{className:n,children:[t&&(0,s.jsx)("source",{srcSet:t,type:"image/avif"}),a&&(0,s.jsx)("source",{srcSet:a,type:"image/webp"}),(0,s.jsx)("img",{className:r,src:i,alt:c})]})}},55147:function(e,n,r){"use strict";var s=r(67294),t=r(31725),a=r(39243),i=r(85893);n.Z=function(e){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},8912:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/react/react18-get-data-with-suspense",function(){return r(51542)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,8925,9774,2888,179],function(){return e(e.s=8912)}),_N_E=e.O()}]);