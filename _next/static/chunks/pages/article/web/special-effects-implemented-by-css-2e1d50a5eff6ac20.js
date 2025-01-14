(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8310],{8655:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/special-effects-implemented-by-css",function(){return a(46241)}])},46241:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return y}});var r=a(85893),t=a(67294),c=a(9008),l=a.n(c),o=a(66252),i=a(26219),s=a(39743),h=a.n(s),d=a(11151);function p(e){let n={code:"code",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- css -->\n<style>\n.search {\n  --search-input-width: 200px;  /* 搜索框的宽度 */\n  --search-input-height: 45px;  /* 搜索框的高度 */\n  --search-label-padding: 18px; /* 按钮相对于搜索框的扩展 */\n\n  /* 按钮的宽度 */\n  --search-label-width: calc(var(--search-input-height) + var(--search-label-padding));\n  --search-icon-width: 24px;    /* 图标的宽度 */\n  --search-icon-thickness: 2px; /* 图标的粗细 */\n  --search-animate-time: .4s;   /* 动画时间 */\n}\n\n.search {\n  display: inline-block;\n  position: relative;\n  width: var(--search-input-width);\n}\n\n.search-text {\n  position: relative;\n  right: 0;\n  padding: 0 calc(var(--search-label-width) / 2 + 10px) 0 10px;\n  width: var(--search-input-width);\n  height: var(--search-input-height);\n  border: none;\n  border-top-left-radius: calc(var(--search-input-height) / 2);\n  border-bottom-left-radius: calc(var(--search-input-height) / 2);\n  outline: 1px solid #d9d9d9;\n  transition: right var(--search-animate-time),\n              width var(--search-animate-time),\n              outline-color var(--search-animate-time);\n}\n\n.search-text:focus, .search-text:hover {\n  outline-color: #40a9ff;\n}\n\n.search-text::-webkit-input-placeholder {\n  color: #8d8d8d;\n}\n\n.search-label {\n  position: absolute;\n  right: calc(var(--search-label-width) / -2);\n  top: calc(var(--search-label-padding) / -2);\n  display: inline-block;\n  width: var(--search-label-width);\n  height: var(--search-label-width);\n  border-radius: var(--search-label-width);\n  background-color: #ffa300;\n  cursor: pointer;\n  transition: right var(--search-animate-time),\n              background-color var(--search-animate-time);\n  transform: rotate(225deg);\n}\n\n.search-label:before, .search-label:after {\n  content: \'\';\n  position: absolute;\n  box-sizing: border-box;\n  display: block;\n  border-radius: var(--search-icon-width);\n  box-shadow: 0 0 0 var(--search-icon-thickness) #fff inset;\n}\n\n.search-label:before {\n  left: calc(var(--search-label-width) / 2 - 2px);\n  top: calc((var(--search-label-width) - 24px) / 2);\n  width: calc(var(--search-icon-thickness) * 2);\n  height: var(--search-icon-width);\n  transition: width var(--search-animate-time);\n}\n\n.search-label:after {\n  top: calc(var(--search-label-width) / 2 - 2px);\n  left: calc((var(--search-label-width) - 24px) / 2);\n  width: var(--search-icon-width);\n  height: calc(var(--search-icon-thickness) * 2);\n  transition: left var(--search-animate-time);\n}\n\n.search-checkbox {\n  display: none;\n}\n\n.search-checkbox:checked ~ .search-text {\n  right: calc(var(--search-label-width) / 2 - var(--search-input-width) / 2 - 1px);\n  width: 0\n}\n\n.search-checkbox:checked ~ .search-label {\n  right: calc((var(--search-input-width) - var(--search-label-width)) / 2);\n  background-color: #1890ff;\n}\n\n.search-checkbox:checked ~ .search-label:before {\n  width: var(--search-icon-width);\n}\n\n.search-checkbox:checked ~ .search-label:after {\n  left: calc((var(--search-label-width) - var(--search-icon-width) * 2) / 2);\n}\n</style>\n\n<!-- html -->\n<div class="search">\n  <input class="search-checkbox" id="search-checkbox" type="checkbox">\n  <input class="search-text" type="text" placeholder="搜索">\n  <label class="search-label" for="search-checkbox"></label>\n</div>\n'})})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}let{Title:u}=o.default;var f=function(e){let n=(0,t.useId)().replace(/:/g,""),a=`${n}-checkbox`;return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(u,{level:2,children:"可伸缩的搜索框"}),(0,r.jsx)("div",{className:"p-[16px]",children:(0,r.jsxs)("div",{className:h().search,children:[(0,r.jsx)("input",{className:h().searchCheckbox,id:a,type:"checkbox"}),(0,r.jsx)("input",{className:h().searchText,type:"text",placeholder:"搜索"}),(0,r.jsx)("label",{className:h().searchLabel,htmlFor:a,tabIndex:0})]})}),(0,r.jsx)(x,{})]})},m=a(97451),b=a.n(m);function v(e){let n={code:"code",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- css -->\n<style>\n.form-placeholder {\n  --form-placeholder-animate-time: .3s; /* 动画时间 */\n}\n\n.form-placeholder {\n  position: relative;\n  display: inline-block;\n}\n\n.form-placeholder-input-text {\n  padding: 20px 10px;\n  width: 250px;\n  height: 30px;\n  border: 1px solid #ddd;\n  outline: none;\n  transition: border-color var(--form-placeholder-animate-time);\n}\n\n.form-placeholder-input-text:placeholder-shown::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-placeholder-input-text:focus, .form-placeholder-input-text:hover {\n  border-color: #40a9ff;\n}\n\n.form-placeholder-label {\n  position: absolute;\n  left: 6px;\n  top: 11px;\n  padding: 0 5px;\n  color: #a4a4a4;\n  pointer-events: none;\n  transition: top var(--form-placeholder-animate-time),\n              font-size var(--form-placeholder-animate-time),\n              color var(--form-placeholder-animate-time);\n}\n\n.form-placeholder-input-text, .form-placeholder-label {\n  font-size: 14px;\n}\n\n.form-placeholder-input-text:focus + .form-placeholder-label,\n.form-placeholder-input-text:not(:placeholder-shown) + .form-placeholder-label {\n  top: -8px;\n  font-size: 12px;\n  color: #40a9ff;\n  background-color: #fff;\n}\n</style>\n\n<!-- html -->\n<div class="form-placeholder">\n  <input class="form-placeholder-input-text" id="input-text" type="text" placeholder="输入框">\n  <label class="form-placeholder-label" for="input-text">输入框</label>\n</div>\n'})})}function w(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}let{Title:g}=o.default;var j=function(e){let n=(0,t.useId)().replace(/:/g,""),a=`${n}-input-text`;return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(g,{level:2,children:"表单占位符"}),(0,r.jsx)("div",{className:"p-[16px]",children:(0,r.jsxs)("div",{className:b().formPlaceholder,children:[(0,r.jsx)("input",{className:b().formPlaceholderInputText,id:a,type:"text",placeholder:"输入框"}),(0,r.jsx)("label",{className:b().formPlaceholderLabel,htmlFor:a,children:"输入框"})]})}),(0,r.jsx)(w,{})]})};let{Title:k}=o.default;var _=function(e){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(k,{children:"使用CSS动画实现各种特效"}),(0,r.jsx)(f,{}),(0,r.jsx)(j,{})]})};function y(e){return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"使用css动画实现各种特效"}),(0,r.jsx)("meta",{name:"keywords",content:"前端, CSS"}),(0,r.jsx)("meta",{name:"description",content:"CSS, CSS特效, 搜索框伸缩"})]}),(0,r.jsx)(_,{})]})}},94914:function(e,n,a){"use strict";var r=a(85893),t=a(73935),c=a(39332),l=a(29155),o=a(86338),i=a(70612),s=a(30448),h=a(76467),d=a(1294),p=a.n(d);let{BackTop:x}=l.default;n.Z=function(e){let n=(0,c.useRouter)();return[(0,r.jsxs)("div",{className:p().main,children:[e.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(o.ZP,{onClick:function(e){n.push("/")},children:[(0,r.jsx)(s.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,r.jsx)(h.default,{children:"object"==typeof document?(0,t.createPortal)((0,r.jsx)(x,{type:"primary",icon:(0,r.jsx)(i.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(e,n,a){"use strict";var r=a(85893),t=a(66252),c=a(94914);n.Z=function(e){return(0,r.jsx)(c.Z,{goToTop:!0,goBack:!0,children:(0,r.jsx)(t.default,{children:e.children})})}},1294:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},97451:function(e){e.exports={formPlaceholder:"formPlaceholder_formPlaceholder__nbsSQ",formPlaceholderInputText:"formPlaceholder_formPlaceholderInputText__qrIoH",formPlaceholderLabel:"formPlaceholder_formPlaceholderLabel__kAFWD"}},39743:function(e){e.exports={search:"searchBoxExpansion_search__9nHr1",searchText:"searchBoxExpansion_searchText__Ccnbj",searchLabel:"searchBoxExpansion_searchLabel__wMYHV",searchCheckbox:"searchBoxExpansion_searchCheckbox__FM0s7"}}},function(e){e.O(0,[6338,5361,2888,9774,179],function(){return e(e.s=8655)}),_N_E=e.O()}]);