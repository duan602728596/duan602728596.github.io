(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8310],{5138:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return M}});var r=a(67294),t=a(9008),c=a.n(t),l=a(76315),i=a(55147);a(64043),a(57267),a(61514);var s=a(36734),o=a.n(s),h=a(62079),d=a.n(h),p=a(52020),u=a.n(p),x=a(73324),f=a.n(x),m=a(88546),b=a.n(m),v=a(99595),g=a.n(v),w=a(66775),_=a.n(w),j=a(2201),k=a.n(j),N=a(57445),y=a.n(N),Z=a(44845),T=a(85893),L=a(11151);function P(e,n){var a=d()(e);if(u()){var r=u()(e);n&&(r=f()(r).call(r,function(n){return b()(e,n).enumerable})),a.push.apply(a,r)}return a}function S(e){for(var n=1;n<arguments.length;n++){var a,r,t=null!=arguments[n]?arguments[n]:{};n%2?g()(a=P(Object(t),!0)).call(a,function(n){(0,Z.Z)(e,n,t[n])}):_()?k()(e,_()(t)):g()(r=P(Object(t))).call(r,function(n){y()(e,n,b()(t,n))})}return e}function I(e){var n=S(S({code:"code",pre:"pre"},(0,L.a)()),e.components);return(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:"language-html",children:'<!-- css -->\n<style>\n.search {\n  --search-input-width: 200px;  /* 搜索框的宽度 */\n  --search-input-height: 45px;  /* 搜索框的高度 */\n  --search-label-padding: 18px; /* 按钮相对于搜索框的扩展 */\n\n  /* 按钮的宽度 */\n  --search-label-width: calc(var(--search-input-height) + var(--search-label-padding));\n  --search-icon-width: 24px;    /* 图标的宽度 */\n  --search-icon-thickness: 2px; /* 图标的粗细 */\n  --search-animate-time: .4s;   /* 动画时间 */\n}\n\n.search {\n  display: inline-block;\n  position: relative;\n  width: var(--search-input-width);\n}\n\n.search-text {\n  position: relative;\n  right: 0;\n  padding: 0 calc(var(--search-label-width) / 2 + 10px) 0 10px;\n  width: var(--search-input-width);\n  height: var(--search-input-height);\n  border: none;\n  border-top-left-radius: calc(var(--search-input-height) / 2);\n  border-bottom-left-radius: calc(var(--search-input-height) / 2);\n  outline: 1px solid #d9d9d9;\n  transition: right var(--search-animate-time),\n              width var(--search-animate-time),\n              outline-color var(--search-animate-time);\n}\n\n.search-text:focus, .search-text:hover {\n  outline-color: #40a9ff;\n}\n\n.search-text::-webkit-input-placeholder {\n  color: #8d8d8d;\n}\n\n.search-label {\n  position: absolute;\n  right: calc(var(--search-label-width) / -2);\n  top: calc(var(--search-label-padding) / -2);\n  display: inline-block;\n  width: var(--search-label-width);\n  height: var(--search-label-width);\n  border-radius: var(--search-label-width);\n  background-color: #ffa300;\n  cursor: pointer;\n  transition: right var(--search-animate-time),\n              background-color var(--search-animate-time);\n  transform: rotate(225deg);\n}\n\n.search-label:before, .search-label:after {\n  content: \'\';\n  position: absolute;\n  box-sizing: border-box;\n  display: block;\n  border-radius: var(--search-icon-width);\n  box-shadow: 0 0 0 var(--search-icon-thickness) #fff inset;\n}\n\n.search-label:before {\n  left: calc(var(--search-label-width) / 2 - 2px);\n  top: calc((var(--search-label-width) - 24px) / 2);\n  width: calc(var(--search-icon-thickness) * 2);\n  height: var(--search-icon-width);\n  transition: width var(--search-animate-time);\n}\n\n.search-label:after {\n  top: calc(var(--search-label-width) / 2 - 2px);\n  left: calc((var(--search-label-width) - 24px) / 2);\n  width: var(--search-icon-width);\n  height: calc(var(--search-icon-thickness) * 2);\n  transition: left var(--search-animate-time);\n}\n\n.search-checkbox {\n  display: none;\n}\n\n.search-checkbox:checked ~ .search-text {\n  right: calc(var(--search-label-width) / 2 - var(--search-input-width) / 2 - 1px);\n  width: 0\n}\n\n.search-checkbox:checked ~ .search-label {\n  right: calc((var(--search-input-width) - var(--search-label-width)) / 2);\n  background-color: #1890ff;\n}\n\n.search-checkbox:checked ~ .search-label:before {\n  width: var(--search-icon-width);\n}\n\n.search-checkbox:checked ~ .search-label:after {\n  left: calc((var(--search-label-width) - var(--search-icon-width) * 2) / 2);\n}\n</style>\n\n<!-- html -->\n<div class="search">\n  <input class="search-checkbox" id="search-checkbox" type="checkbox">\n  <input class="search-text" type="text" placeholder="搜索">\n  <label class="search-label" for="search-checkbox"></label>\n</div>\n'})})}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=S(S({},(0,L.a)()),e.components).wrapper;return n?(0,T.jsx)(n,S(S({},e),{},{children:(0,T.jsx)(I,S({},e))})):I(e)}var E=l.Z.Title,z=function(e){var n=(0,r.useId)().replace(/:/g,""),a="".concat(n,"-checkbox");return(0,T.jsxs)(r.Fragment,{children:[(0,T.jsx)(E,{level:2,children:"可伸缩的搜索框"}),(0,T.jsx)("div",{className:"p-[16px]",children:(0,T.jsxs)("div",{className:o().search,children:[(0,T.jsx)("input",{className:o().searchCheckbox,id:a,type:"checkbox"}),(0,T.jsx)("input",{className:o().searchText,type:"text",placeholder:"搜索"}),(0,T.jsx)("label",{className:o().searchLabel,htmlFor:a,tabIndex:0})]})}),(0,T.jsx)(C,{})]})},A=a(87695),B=a.n(A);function F(e,n){var a=d()(e);if(u()){var r=u()(e);n&&(r=f()(r).call(r,function(n){return b()(e,n).enumerable})),a.push.apply(a,r)}return a}function H(e){for(var n=1;n<arguments.length;n++){var a,r,t=null!=arguments[n]?arguments[n]:{};n%2?g()(a=F(Object(t),!0)).call(a,function(n){(0,Z.Z)(e,n,t[n])}):_()?k()(e,_()(t)):g()(r=F(Object(t))).call(r,function(n){y()(e,n,b()(t,n))})}return e}function O(e){var n=H(H({code:"code",pre:"pre"},(0,L.a)()),e.components);return(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:"language-html",children:'<!-- css -->\n<style>\n.form-placeholder {\n  --form-placeholder-animate-time: .3s; /* 动画时间 */\n}\n\n.form-placeholder {\n  position: relative;\n  display: inline-block;\n}\n\n.form-placeholder-input-text {\n  padding: 20px 10px;\n  width: 250px;\n  height: 30px;\n  border: 1px solid #ddd;\n  outline: none;\n  transition: border-color var(--form-placeholder-animate-time);\n}\n\n.form-placeholder-input-text:placeholder-shown::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-placeholder-input-text:focus, .form-placeholder-input-text:hover {\n  border-color: #40a9ff;\n}\n\n.form-placeholder-label {\n  position: absolute;\n  left: 6px;\n  top: 11px;\n  padding: 0 5px;\n  color: #a4a4a4;\n  pointer-events: none;\n  transition: top var(--form-placeholder-animate-time),\n              font-size var(--form-placeholder-animate-time),\n              color var(--form-placeholder-animate-time);\n}\n\n.form-placeholder-input-text, .form-placeholder-label {\n  font-size: 14px;\n}\n\n.form-placeholder-input-text:focus + .form-placeholder-label,\n.form-placeholder-input-text:not(:placeholder-shown) + .form-placeholder-label {\n  top: -8px;\n  font-size: 12px;\n  color: #40a9ff;\n  background-color: #fff;\n}\n</style>\n\n<!-- html -->\n<div class="form-placeholder">\n  <input class="form-placeholder-input-text" id="input-text" type="text" placeholder="输入框">\n  <label class="form-placeholder-label" for="input-text">输入框</label>\n</div>\n'})})}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=H(H({},(0,L.a)()),e.components).wrapper;return n?(0,T.jsx)(n,H(H({},e),{},{children:(0,T.jsx)(O,H({},e))})):O(e)}var X=l.Z.Title,q=function(e){var n=(0,r.useId)().replace(/:/g,""),a="".concat(n,"-input-text");return(0,T.jsxs)(r.Fragment,{children:[(0,T.jsx)(X,{level:2,children:"表单占位符"}),(0,T.jsx)("div",{className:"p-[16px]",children:(0,T.jsxs)("div",{className:B().formPlaceholder,children:[(0,T.jsx)("input",{className:B().formPlaceholderInputText,id:a,type:"text",placeholder:"输入框"}),(0,T.jsx)("label",{className:B().formPlaceholderLabel,htmlFor:a,children:"输入框"})]})}),(0,T.jsx)(R,{})]})},D=l.Z.Title,G=function(e){return(0,T.jsxs)(i.Z,{children:[(0,T.jsx)(D,{children:"使用CSS动画实现各种特效"}),(0,T.jsx)(z,{}),(0,T.jsx)(q,{})]})};function M(e){return(0,T.jsxs)(r.Fragment,{children:[(0,T.jsxs)(c(),{children:[(0,T.jsx)("title",{children:"使用css动画实现各种特效"}),(0,T.jsx)("meta",{name:"keywords",content:"前端, CSS"}),(0,T.jsx)("meta",{name:"description",content:"CSS, CSS特效, 搜索框伸缩"})]}),(0,T.jsx)(G,{})]})}},39243:function(e,n,a){"use strict";var r=a(19623),t=a(73935),c=a(11163),l=a(81860),i=a(18610),s=a(75162),o=a(6171),h=a(76467),d=a(63791),p=a.n(d),u=a(85893),x=l.Z.BackTop;n.Z=function(e){var n=(0,c.useRouter)();return[(0,u.jsxs)("div",{className:p().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,u.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,u.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,t.createPortal)((0,u.jsx)(x,{type:"primary",icon:(0,u.jsx)(s.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,a){"use strict";a(64043);var r=a(88946),t=a.n(r),c=a(81290),l=a.n(c),i=a(41664),s=a.n(i),o=a(21612),h=a(78957),d=a(83062),p=a(67337),u=a(32958),x=a.n(u),f=a(96808),m=a(85893),b=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],g=t()(b).call(b,function(e,n){return(0,m.jsx)("li",{className:x().navListItem,children:(0,m.jsx)(s(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,m.jsx)(o.Z.Header,{className:x().antdHeader,children:(0,m.jsxs)("div",{className:x().header,children:[(0,m.jsx)("nav",{className:x().headerLeft,children:(0,m.jsx)("ul",{className:x().navList,children:g})}),(0,m.jsx)("div",{className:x().headerRight,children:(0,m.jsxs)(h.Z,{size:16,children:[(0,m.jsx)(d.Z,{title:"切换网站地址",children:(0,m.jsx)("a",{className:x().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,a=n.pathname,r=n.hostname,t=/github\.io/.test(r);window.location.href=new(l())(a,"https://duan602728596.".concat(v[t?1:0],"/"))},children:(0,m.jsx)(p.Z,{className:x().switchAddressIcon})})}),(0,m.jsx)("a",{className:x().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,a){"use strict";var r=a(85893);n.Z=function(e){var n=e.className,a=e.imageClassName,t=e.avifSrc,c=e.webpSrc,l=e.src,i=e.alt;return(0,r.jsxs)("picture",{className:n,children:[t&&(0,r.jsx)("source",{srcSet:t,type:"image/avif"}),c&&(0,r.jsx)("source",{srcSet:c,type:"image/webp"}),(0,r.jsx)("img",{className:a,src:l,alt:i})]})}},55147:function(e,n,a){"use strict";var r=a(67294),t=a(31725),c=a(39243),l=a(85893);n.Z=function(e){return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(t.Z,{}),(0,l.jsx)(c.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},8655:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/special-effects-implemented-by-css",function(){return a(5138)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},87695:function(e){e.exports={formPlaceholder:"formPlaceholder_formPlaceholder__nbsSQ",formPlaceholderInputText:"formPlaceholder_formPlaceholderInputText__qrIoH",formPlaceholderLabel:"formPlaceholder_formPlaceholderLabel__kAFWD"}},36734:function(e){e.exports={search:"searchBoxExpansion_search__9nHr1",searchText:"searchBoxExpansion_searchText__Ccnbj",searchLabel:"searchBoxExpansion_searchLabel__wMYHV",searchCheckbox:"searchBoxExpansion_searchCheckbox__FM0s7"}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=8655)}),_N_E=e.O()}]);