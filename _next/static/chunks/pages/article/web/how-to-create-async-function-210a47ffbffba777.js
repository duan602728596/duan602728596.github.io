(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1706],{77964:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return F}});var a=t(67294),s=t(9008),r=t.n(s),c=t(76315),i=t(38925),l=t(55147),o=t(62079),u=t.n(o),d=t(52020),h=t.n(d),f=t(73324),m=t.n(f),p=t(88546),x=t.n(p),j=t(99595),v=t.n(j),_=t(66775),g=t.n(_),b=t(2201),w=t.n(b),N=t(57445),y=t.n(N),Z=t(44845),k=t(85893),T=t(11151);function L(n,e){var t=u()(n);if(h()){var a=h()(n);e&&(a=m()(a).call(a,function(e){return x()(n,e).enumerable})),t.push.apply(t,a)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t,a,s=null!=arguments[e]?arguments[e]:{};e%2?v()(t=L(Object(s),!0)).call(t,function(e){(0,Z.Z)(n,e,s[e])}):g()?w()(n,g()(s)):v()(a=L(Object(s))).call(a,function(e){y()(n,e,x()(s,e))})}return n}function I(n){var e=A(A({code:"code",pre:"pre"},(0,T.a)()),n.components);return(0,k.jsx)(e.pre,{children:(0,k.jsx)(e.code,{className:"language-javascript",children:"// 异步函数\nconst { constructor: AsyncFunction } = Object.getPrototypeOf(async function(){});\n\n// 浏览器内运行 await func(12)\n// 返回 12\n// 浏览器内运行 func(12)\n// 返回Promise\nconst func = new AsyncFunction('arg', 'return await arg;');\n"})})}function P(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=A(A({},(0,T.a)()),n.components).wrapper;return e?(0,k.jsx)(e,A(A({},n),{},{children:(0,k.jsx)(I,A({},n))})):I(n)}var S=c.Z.Title,C=function(n){return(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(S,{children:'如何通过类似"new Function"创建异步函数'}),(0,k.jsx)(S,{level:2,children:"代码实现"}),(0,k.jsx)(P,{}),(0,k.jsx)(i.Z,{type:"info",message:[(0,k.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,k.jsx)("div",{className:"py-[8px]",children:(0,k.jsx)("a",{href:"https://davidwalsh.name/async-function-class",target:"_blank",rel:"noopener noreferrer",children:"https://davidwalsh.name/async-function-class"})},"async-function-class")]})]})};function F(n){return(0,k.jsxs)(a.Fragment,{children:[(0,k.jsxs)(r(),{children:[(0,k.jsx)("title",{children:'如何通过类似"new Function"创建异步函数'}),(0,k.jsx)("meta",{name:"keywords",content:"前端, js, javascript"}),(0,k.jsx)("meta",{name:"description",content:'如何通过类似"new Function"创建异步函数'})]}),(0,k.jsx)(C,{})]})}},39243:function(n,e,t){"use strict";var a=t(19623),s=t(73935),r=t(11163),c=t(81860),i=t(18610),l=t(75162),o=t(6171),u=t(76467),d=t(63791),h=t.n(d),f=t(85893),m=c.Z.BackTop;e.Z=function(n){var e=(0,r.useRouter)();return[(0,f.jsxs)("div",{className:h().main,children:[n.goBack?(0,f.jsx)("div",{className:"mb-[16px] text-right",children:(0,f.jsxs)(i.ZP,{onClick:function(n){e.push("/")},children:[(0,f.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==n?void 0:n.children]},"main"),(0,f.jsx)(u.default,{children:null!=n&&n.goToTop&&("undefined"==typeof document?"undefined":(0,a.Z)(document))==="object"?(0,s.createPortal)((0,f.jsx)(m,{type:"primary",icon:(0,f.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(n,e,t){"use strict";t(64043);var a=t(88946),s=t.n(a),r=t(81290),c=t.n(r),i=t(41664),l=t.n(i),o=t(21612),u=t(78957),d=t(83062),h=t(67337),f=t(32958),m=t.n(f),p=t(96808),x=t(85893),j=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],_=s()(j).call(j,function(n,e){return(0,x.jsx)("li",{className:m().navListItem,children:(0,x.jsx)(l(),{href:n.href,children:n.title})},n.href)});e.Z=function(n){return(0,x.jsx)(o.Z.Header,{className:m().antdHeader,children:(0,x.jsxs)("div",{className:m().header,children:[(0,x.jsx)("nav",{className:m().headerLeft,children:(0,x.jsx)("ul",{className:m().navList,children:_})}),(0,x.jsx)("div",{className:m().headerRight,children:(0,x.jsxs)(u.Z,{size:16,children:[(0,x.jsx)(d.Z,{title:"切换网站地址",children:(0,x.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(n){var e=window.location,t=e.pathname,a=e.hostname,s=/github\.io/.test(a);window.location.href=new(c())(t,"https://duan602728596.".concat(v[s?1:0],"/"))},children:(0,x.jsx)(h.Z,{className:m().switchAddressIcon})})}),(0,x.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(n,e,t){"use strict";var a=t(85893);e.Z=function(n){var e=n.className,t=n.imageClassName,s=n.avifSrc,r=n.webpSrc,c=n.src,i=n.alt;return(0,a.jsxs)("picture",{className:e,children:[s&&(0,a.jsx)("source",{srcSet:s,type:"image/avif"}),r&&(0,a.jsx)("source",{srcSet:r,type:"image/webp"}),(0,a.jsx)("img",{className:t,src:c,alt:i})]})}},55147:function(n,e,t){"use strict";var a=t(67294),s=t(31725),r=t(39243),c=t(85893);e.Z=function(n){return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)(r.Z,{goToTop:!0,goBack:!0,children:n.children})]})}},62693:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/how-to-create-async-function",function(){return t(77964)}])},63791:function(n){n.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(n){n.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(n){n.O(0,[8610,1447,4530,8925,9774,2888,179],function(){return n(n.s=62693)}),_N_E=n.O()}]);