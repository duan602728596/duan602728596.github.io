(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2218],{68795:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(87462),s=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},a=n(42135),l=s.forwardRef(function(e,t){return s.createElement(a.Z,(0,r.Z)({},e,{ref:t,icon:i}))})},68863:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(67294),s=n(93967),i=n.n(s),a=n(53124),l=n(52706),o=n(47673),c=n(72599),u=n(87462),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},p=n(42135),f=r.forwardRef(function(e,t){return r.createElement(p.Z,(0,u.Z)({},e,{ref:t,icon:d}))}),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},h=r.forwardRef(function(e,t){return r.createElement(p.Z,(0,u.Z)({},e,{ref:t,icon:m}))}),v=n(98423),g=n(42550),x=n(72922),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};let j=e=>e?r.createElement(h,null):r.createElement(f,null),_={click:"onClick",hover:"onMouseOver"},y=r.forwardRef((e,t)=>{let{visibilityToggle:n=!0}=e,s="object"==typeof n&&void 0!==n.visible,[l,o]=(0,r.useState)(()=>!!s&&n.visible),u=(0,r.useRef)(null);r.useEffect(()=>{s&&o(n.visible)},[s,n]);let d=(0,x.Z)(u),p=()=>{let{disabled:t}=e;t||(l&&d(),o(e=>{var t;let r=!e;return"object"==typeof n&&(null===(t=n.onVisibleChange)||void 0===t||t.call(n,r)),r}))},{className:f,prefixCls:m,inputPrefixCls:h,size:y}=e,w=b(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:C}=r.useContext(a.E_),Z=C("input",h),N=C("input-password",m),E=n&&(t=>{let{action:n="click",iconRender:s=j}=e,i=_[n]||"",a=s(l),o={[i]:p,className:`${t}-icon`,key:"passwordIcon",onMouseDown:e=>{e.preventDefault()},onMouseUp:e=>{e.preventDefault()}};return r.cloneElement(r.isValidElement(a)?a:r.createElement("span",null,a),o)})(N),k=i()(N,f,{[`${N}-${y}`]:!!y}),O=Object.assign(Object.assign({},(0,v.Z)(w,["suffix","iconRender","visibilityToggle"])),{type:l?"text":"password",className:k,prefixCls:Z,suffix:E});return y&&(O.size=y),r.createElement(c.Z,Object.assign({ref:(0,g.sQ)(t,u)},O))});var w=n(68795),C=n(96159),Z=n(10932),N=n(98675),E=n(4173),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};let O=r.forwardRef((e,t)=>{let n;let{prefixCls:s,inputPrefixCls:l,className:o,size:u,suffix:d,enterButton:p=!1,addonAfter:f,loading:m,disabled:h,onSearch:v,onChange:x,onCompositionStart:b,onCompositionEnd:j}=e,_=k(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:y,direction:O}=r.useContext(a.E_),T=r.useRef(!1),S=y("input-search",s),P=y("input",l),{compactSize:z}=(0,E.ri)(S,O),L=(0,N.Z)(e=>{var t;return null!==(t=null!=u?u:z)&&void 0!==t?t:e}),I=r.useRef(null),M=e=>{var t;document.activeElement===(null===(t=I.current)||void 0===t?void 0:t.input)&&e.preventDefault()},B=e=>{var t,n;v&&v(null===(n=null===(t=I.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e,{source:"input"})},R="boolean"==typeof p?r.createElement(w.Z,null):null,A=`${S}-button`,$=p||{},D=$.type&&!0===$.type.__ANT_BUTTON;n=D||"button"===$.type?(0,C.Tm)($,Object.assign({onMouseDown:M,onClick:e=>{var t,n;null===(n=null===(t=null==$?void 0:$.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),B(e)},key:"enterButton"},D?{className:A,size:L}:{})):r.createElement(Z.ZP,{className:A,type:p?"primary":void 0,size:L,disabled:h,key:"enterButton",onMouseDown:M,onClick:B,loading:m,icon:R},p),f&&(n=[n,(0,C.Tm)(f,{key:"addonAfter"})]);let q=i()(S,{[`${S}-rtl`]:"rtl"===O,[`${S}-${L}`]:!!L,[`${S}-with-button`]:!!p},o);return r.createElement(c.Z,Object.assign({ref:(0,g.sQ)(I,t),onPressEnter:e=>{T.current||m||B(e)}},_,{size:L,onCompositionStart:e=>{T.current=!0,null==b||b(e)},onCompositionEnd:e=>{T.current=!1,null==j||j(e)},prefixCls:P,addonAfter:n,suffix:d,onChange:e=>{e&&e.target&&"click"===e.type&&v&&v(e.target.value,e,{source:"clear"}),x&&x(e)},className:q,disabled:h}))});var T=n(22913);let S=c.Z;S.Group=e=>{let{getPrefixCls:t,direction:n}=(0,r.useContext)(a.E_),{prefixCls:s,className:c}=e,u=t("input-group",s),d=t("input"),[p,f]=(0,o.ZP)(d),m=i()(u,{[`${u}-lg`]:"large"===e.size,[`${u}-sm`]:"small"===e.size,[`${u}-compact`]:e.compact,[`${u}-rtl`]:"rtl"===n},f,c),h=(0,r.useContext)(l.aM),v=(0,r.useMemo)(()=>Object.assign(Object.assign({},h),{isFormItemInput:!1}),[h]);return p(r.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(l.aM.Provider,{value:v},e.children)))},S.Search=O,S.TextArea=T.Z,S.Password=y;var P=S},70922:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/number-is-timestamp",function(){return n(57696)}])},57696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(85893),s=n(67294),i=n(9008),a=n.n(i),l=n(76315),o=n(30673),c=n(75749),u=n(68863),d=n(10932),p=n(38925),f=n(95131),m=n.n(f);let{Title:h,Paragraph:v}=l.default;var g=function(e){let[t,n]=(0,s.useState)(""),[i,a]=(0,s.useState)(void 0),l=(0,s.useId)().replace(/:/g,"");return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(h,{level:2,children:"代码演示"}),(0,r.jsx)(v,{children:"输入时间戳，判断时间戳是否有效。"}),(0,r.jsxs)("div",{className:m().marginBottom,children:[(0,r.jsx)("label",{htmlFor:"".concat(l,"-time-input"),children:"时间戳："}),(0,r.jsx)(u.Z,{className:m().timeInput,id:"".concat(l,"-time-input"),value:t,onChange:e=>n(e.target.value)}),(0,r.jsx)(d.ZP,{type:"primary",onClick:function(e){if(!(t&&/^[0-9]+$/.test(t)))return;let n=new Date(Number(t)).toString()!==new Date(1).toString();a({result:n,text:"".concat(t).concat(n?"":"不","是有效的时间戳。")})},children:"判断结果"})]}),void 0!==i&&(0,r.jsx)(p.Z,{type:i.result?"success":"error",description:i.text})]})};let{Title:x,Paragraph:b}=l.default;var j=function(e){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(x,{children:"判断一串数字是有效的时间戳"}),(0,r.jsx)(b,{children:"通过换算的时间是否是1970年来判断是否是有效的时间戳。"}),(0,r.jsx)(c.Z,{type:"javascript",children:"new Date(time).toString() !== new Date(1).toString()"}),(0,r.jsx)(g,{})]})};function _(e){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"判断一串数字是有效的时间戳"}),(0,r.jsx)("meta",{name:"keywords",content:"前端, js, javascript"}),(0,r.jsx)("meta",{name:"description",content:"判断一串数字是有效的时间戳"})]}),(0,r.jsx)(j,{})]})}},39182:function(e,t,n){"use strict";var r=n(85893),s=n(45697),i=n.n(s);function a(e){let{href:t,className:n,children:s}=e;return(0,r.jsx)("a",{className:n,href:t,target:"_blank",rel:"noopener noreferrer",children:s})}a.propTypes={href:i().string.isRequired,className:i().string,children:i().node.isRequired},t.Z=a},99388:function(e,t,n){"use strict";var r=n(85893),s=n(73935),i=n(45697),a=n.n(i),l=n(11163),o=n(81860),c=n(10932),u=n(75162),d=n(6171),p=n(76467),f=n(63791),m=n.n(f);let{BackTop:h}=o.default;function v(e){let t=(0,l.useRouter)();return[(0,r.jsxs)("div",{className:m().main,children:[e.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(c.ZP,{onClick:function(e){t.push("/")},children:[(0,r.jsx)(d.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,r.jsx)(p.default,{children:(null==e?void 0:e.goToTop)&&"object"==typeof document?(0,s.createPortal)((0,r.jsx)(h,{type:"primary",icon:(0,r.jsx)(u.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}v.propTypes={children:a().node,goToTop:a().bool,goBack:a().bool},t.Z=v},43221:function(e,t,n){"use strict";var r=n(85893),s=n(41664),i=n.n(s),a=n(21612),l=n(78957),o=n(83062),c=n(67337),u=n(32958),d=n.n(u),p=n(90791),f=n(39182);let m=["github.io","vercel.app"],h=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}].map((e,t)=>(0,r.jsx)("li",{className:d().navListItem,children:(0,r.jsx)(i(),{href:e.href,children:e.title})},e.href));t.Z=function(e){return(0,r.jsx)(a.Z.Header,{className:d().antdHeader,children:(0,r.jsxs)("div",{className:d().header,children:[(0,r.jsx)("nav",{className:d().headerLeft,children:(0,r.jsx)("ul",{className:d().navList,children:h})}),(0,r.jsx)("div",{className:d().headerRight,children:(0,r.jsxs)(l.Z,{size:16,children:[(0,r.jsx)(o.Z,{title:"切换网站地址",children:(0,r.jsx)("a",{className:d().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){let{pathname:t,hostname:n}=window.location,r=/github\.io/.test(n);window.location.href=new URL(t,"https://duan602728596.".concat(m[r?1:0],"/"))},children:(0,r.jsx)(c.Z,{className:d().switchAddressIcon})})}),(0,r.jsx)(f.Z,{className:d().githubLink,href:"https://github.com/duan602728596",children:(0,r.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90791:function(e,t,n){"use strict";var r=n(85893),s=n(45697),i=n.n(s);function a(e){let{className:t,imageClassName:n,avifSrc:s,webpSrc:i,src:a,alt:l}=e;return(0,r.jsxs)("picture",{className:t,children:[s&&(0,r.jsx)("source",{srcSet:s,type:"image/avif"}),i&&(0,r.jsx)("source",{srcSet:i,type:"image/webp"}),(0,r.jsx)("img",{className:n,src:a,alt:l})]})}a.propTypes={className:i().string,imageClassName:i().string,avifSrc:i().string,webpSrc:i().string,src:i().string},t.Z=a},30673:function(e,t,n){"use strict";var r=n(85893),s=n(67294),i=n(45697),a=n.n(i),l=n(43221),o=n(99388);function c(e){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(o.Z,{goToTop:!0,goBack:!0,children:e.children})]})}c.propTypes={children:a().node},t.Z=c},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},95131:function(e){e.exports={timeInput:"demo_timeInput__qxcy6",marginBottom:"demo_marginBottom__pTUql"}}},function(e){e.O(0,[932,1447,4530,8925,2888,9774,179],function(){return e(e.s=70922)}),_N_E=e.O()}]);