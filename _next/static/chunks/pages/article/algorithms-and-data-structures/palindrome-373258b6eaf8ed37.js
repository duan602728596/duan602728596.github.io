(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6047],{68795:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(87462),l=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i=t(42135),s=l.forwardRef(function(e,n){return l.createElement(i.Z,(0,r.Z)({},e,{ref:n,icon:a}))})},68863:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(67294),l=t(94184),a=t.n(l),i=t(53124),s=t(52706),o=t(47673),c=t(82586),u=t(87462),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},f=t(42135),p=r.forwardRef(function(e,n){return r.createElement(f.Z,(0,u.Z)({},e,{ref:n,icon:d}))}),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},h=r.forwardRef(function(e,n){return r.createElement(f.Z,(0,u.Z)({},e,{ref:n,icon:m}))}),v=t(98423),x=t(42550),b=t(72922),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>n.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};let j=e=>e?r.createElement(h,null):r.createElement(p,null),y={click:"onClick",hover:"onMouseOver"},Z=r.forwardRef((e,n)=>{let{visibilityToggle:t=!0}=e,l="object"==typeof t&&void 0!==t.visible,[s,o]=(0,r.useState)(()=>!!l&&t.visible),u=(0,r.useRef)(null);r.useEffect(()=>{l&&o(t.visible)},[l,t]);let d=(0,b.Z)(u),f=()=>{let{disabled:n}=e;n||(s&&d(),o(e=>{var n;let r=!e;return"object"==typeof t&&(null===(n=t.onVisibleChange)||void 0===n||n.call(t,r)),r}))},{className:p,prefixCls:m,inputPrefixCls:h,size:Z}=e,_=g(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:w}=r.useContext(i.E_),C=w("input",h),k=w("input-password",m),I=t&&(n=>{let{action:t="click",iconRender:l=j}=e,a=y[t]||"",i=l(s),o={[a]:f,className:`${n}-icon`,key:"passwordIcon",onMouseDown:e=>{e.preventDefault()},onMouseUp:e=>{e.preventDefault()}};return r.cloneElement(r.isValidElement(i)?i:r.createElement("span",null,i),o)})(k),N=a()(k,p,{[`${k}-${Z}`]:!!Z}),O=Object.assign(Object.assign({},(0,v.Z)(_,["suffix","iconRender","visibilityToggle"])),{type:s?"text":"password",className:N,prefixCls:C,suffix:I});return Z&&(O.size=Z),r.createElement(c.Z,Object.assign({ref:(0,x.sQ)(n,u)},O))});var _=t(68795),w=t(96159),C=t(18610),k=t(98675),I=t(4173),N=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>n.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};let O=r.forwardRef((e,n)=>{let t;let{prefixCls:l,inputPrefixCls:s,className:o,size:u,suffix:d,enterButton:f=!1,addonAfter:p,loading:m,disabled:h,onSearch:v,onChange:b,onCompositionStart:g,onCompositionEnd:j}=e,y=N(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:Z,direction:O}=r.useContext(i.E_),E=r.useRef(!1),L=Z("input-search",l),P=Z("input",s),{compactSize:S}=(0,I.ri)(L,O),z=(0,k.Z)(e=>{var n;return null!==(n=null!=u?u:S)&&void 0!==n?n:e}),T=r.useRef(null),M=e=>{var n;document.activeElement===(null===(n=T.current)||void 0===n?void 0:n.input)&&e.preventDefault()},A=e=>{var n,t;v&&v(null===(t=null===(n=T.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e,{source:"input"})},B="boolean"==typeof f?r.createElement(_.Z,null):null,R=`${L}-button`,$=f||{},D=$.type&&!0===$.type.__ANT_BUTTON;t=D||"button"===$.type?(0,w.Tm)($,Object.assign({onMouseDown:M,onClick:e=>{var n,t;null===(t=null===(n=null==$?void 0:$.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),A(e)},key:"enterButton"},D?{className:R,size:z}:{})):r.createElement(C.ZP,{className:R,type:f?"primary":void 0,size:z,disabled:h,key:"enterButton",onMouseDown:M,onClick:A,loading:m,icon:B},f),p&&(t=[t,(0,w.Tm)(p,{key:"addonAfter"})]);let q=a()(L,{[`${L}-rtl`]:"rtl"===O,[`${L}-${z}`]:!!z,[`${L}-with-button`]:!!f},o);return r.createElement(c.Z,Object.assign({ref:(0,x.sQ)(T,n),onPressEnter:e=>{E.current||m||A(e)}},y,{size:z,onCompositionStart:e=>{E.current=!0,null==g||g(e)},onCompositionEnd:e=>{E.current=!1,null==j||j(e)},prefixCls:P,addonAfter:t,suffix:d,onChange:e=>{e&&e.target&&"click"===e.type&&v&&v(e.target.value,e,{source:"clear"}),b&&b(e)},className:q,disabled:h}))});var E=t(22913);let L=c.Z;L.Group=e=>{let{getPrefixCls:n,direction:t}=(0,r.useContext)(i.E_),{prefixCls:l,className:c}=e,u=n("input-group",l),d=n("input"),[f,p]=(0,o.ZP)(d),m=a()(u,{[`${u}-lg`]:"large"===e.size,[`${u}-sm`]:"small"===e.size,[`${u}-compact`]:e.compact,[`${u}-rtl`]:"rtl"===t},p,c),h=(0,r.useContext)(s.aM),v=(0,r.useMemo)(()=>Object.assign(Object.assign({},h),{isFormItemInput:!1}),[h]);return f(r.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(s.aM.Provider,{value:v},e.children)))},L.Search=O,L.TextArea=E.Z,L.Password=Z;var P=L},40222:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(67294),l=t(9008),a=t.n(l),i=t(76315),s=t(55147),o=t(8333);t(30024),t(60228),t(12826);var c=t(88946),u=t.n(c),d=t(35704),f=t.n(d),p=t(68863),m=t(18610),h=t(85893),v=i.Z.Title,x=function(e){var n=(0,r.useState)(""),t=(0,o.Z)(n,2),l=t[0],a=t[1],i=(0,r.useState)([]),s=(0,o.Z)(i,2),c=s[0],d=s[1];return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(v,{level:2,children:"代码演示"}),(0,h.jsxs)("div",{className:"mb-[8px] flex",children:[(0,h.jsx)("div",{className:"grow",children:(0,h.jsx)(p.Z,{className:"w-full",value:l,placeholder:"请输入字符串",onChange:function(e){a(e.target.value)}})}),(0,h.jsx)("div",{className:"shrink-0",children:(0,h.jsxs)(m.ZP.Group,{children:[(0,h.jsx)(m.ZP,{onClick:function(e){var n=function(e){var n=[],t=e.length;if(t<3)return n;for(var r=1;r<t-1;r++){for(var l=null,a=null,i=r-1,s=r+1;i>=0&&s<t;i--,s++)if(e[i]===e[s])l=i,a=s;else break;null!==l&&null!==a&&n.push([l,a]),l=null,a=null;for(var o=r,c=r+1;o>=0&&c<t;o--,c++)if(e[o]===e[c])l=o,a=c;else break;null!==l&&null!==a&&n.push([l,a])}return n}(l);d(u()(n).call(n,function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return f()(l).call(l,t,r+1)}))},children:"获取回文字符串"}),(0,h.jsx)(m.ZP,{onClick:function(e){a(""),d([])},children:"重置"})]})})]}),(0,h.jsx)(v,{level:3,children:"输出结果："}),c.length<=0?(0,h.jsx)("p",{children:"无结果"}):(0,h.jsx)("ul",{children:u()(c).call(c,function(e,n){return(0,h.jsx)("li",{children:e},n.toString())})})]})},b=t(62079),g=t.n(b),j=t(52020),y=t.n(j),Z=t(73324),_=t.n(Z),w=t(88546),C=t.n(w),k=t(99595),I=t.n(k),N=t(66775),O=t.n(N),E=t(2201),L=t.n(E),P=t(57445),S=t.n(P),z=t(44845),T=t(11151);function M(e,n){var t=g()(e);if(y()){var r=y()(e);n&&(r=_()(r).call(r,function(n){return C()(e,n).enumerable})),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t,r,l=null!=arguments[n]?arguments[n]:{};n%2?I()(t=M(Object(l),!0)).call(t,function(n){(0,z.Z)(e,n,l[n])}):O()?L()(e,O()(l)):I()(r=M(Object(l))).call(r,function(n){S()(e,n,C()(l,n))})}return e}function B(e){var n=A(A({code:"code",pre:"pre"},(0,T.a)()),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-typescript",children:"function palindrome(str: string): Array<[number, number]> {\n  const palindromeIndex: Array<[number, number]> = [];\n  const strLength: number = str.length;\n\n  if (strLength < 3) {\n    return palindromeIndex;\n  }\n\n  for (let i: number = 1; i < strLength - 1; i++) {\n    // 奇数\n    let startIndex: number | null = null,\n      endIndex: number | null = null;\n\n    for (let k: number = i - 1, m: number = i + 1; k >= 0 && m < strLength; k--, m++) {\n      if (str[k] === str[m]) {\n        [startIndex, endIndex] = [k, m];\n      } else {\n        break;\n      }\n    }\n\n    if (startIndex !== null && endIndex !== null) {\n      palindromeIndex.push([startIndex, endIndex]);\n    }\n\n    // 偶数\n    [startIndex, endIndex] = [null, null];\n\n    for (let p: number = i, t: number = i + 1; p >= 0 && t < strLength; p--, t++) {\n      if (str[p] === str[t]) {\n        [startIndex, endIndex] = [p, t];\n      } else {\n        break;\n      }\n    }\n\n    if (startIndex !== null && endIndex !== null) {\n      palindromeIndex.push([startIndex, endIndex]);\n    }\n  }\n\n  return palindromeIndex;\n}\n"})})}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=A(A({},(0,T.a)()),e.components).wrapper;return n?(0,h.jsx)(n,A(A({},e),{},{children:(0,h.jsx)(B,A({},e))})):B(e)}var $=i.Z.Title,D=i.Z.Paragraph,q=function(e){return(0,h.jsxs)(s.Z,{children:[(0,h.jsx)($,{children:"实现一个回文算法"}),(0,h.jsx)(D,{children:"总结了一下自己实现的回文算法。"}),(0,h.jsx)(R,{}),(0,h.jsx)(x,{})]})};function F(e){return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)(a(),{children:[(0,h.jsx)("title",{children:"实现一个回文算法"}),(0,h.jsx)("meta",{name:"keywords",content:"算法, 回文算法"}),(0,h.jsx)("meta",{name:"description",content:"实现一个回文算法"})]}),(0,h.jsx)(q,{})]})}},39243:function(e,n,t){"use strict";var r=t(19623),l=t(73935),a=t(11163),i=t(81860),s=t(18610),o=t(75162),c=t(6171),u=t(76467),d=t(63791),f=t.n(d),p=t(85893),m=i.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,p.jsxs)("div",{className:f().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(s.ZP,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,l.createPortal)((0,p.jsx)(m,{type:"primary",icon:(0,p.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,t){"use strict";t(64043);var r=t(88946),l=t.n(r),a=t(81290),i=t.n(a),s=t(41664),o=t.n(s),c=t(21612),u=t(78957),d=t(83062),f=t(67337),p=t(32958),m=t.n(p),h=t(96808),v=t(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],b=["github.io","vercel.app"],g=l()(x).call(x,function(e,n){return(0,v.jsx)("li",{className:m().navListItem,children:(0,v.jsx)(o(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,v.jsx)(c.Z.Header,{className:m().antdHeader,children:(0,v.jsxs)("div",{className:m().header,children:[(0,v.jsx)("nav",{className:m().headerLeft,children:(0,v.jsx)("ul",{className:m().navList,children:g})}),(0,v.jsx)("div",{className:m().headerRight,children:(0,v.jsxs)(u.Z,{size:16,children:[(0,v.jsx)(d.Z,{title:"切换网站地址",children:(0,v.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,l=/github\.io/.test(r);window.location.href=new(i())(t,"https://duan602728596.".concat(b[l?1:0],"/"))},children:(0,v.jsx)(f.Z,{className:m().switchAddressIcon})})}),(0,v.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(h.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,l=e.avifSrc,a=e.webpSrc,i=e.src,s=e.alt;return(0,r.jsxs)("picture",{className:n,children:[l&&(0,r.jsx)("source",{srcSet:l,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:i,alt:s})]})}},55147:function(e,n,t){"use strict";var r=t(67294),l=t(31725),a=t(39243),i=t(85893);n.Z=function(e){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},6567:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/algorithms-and-data-structures/palindrome",function(){return t(40222)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},84406:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},8333:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(86416),l=t(1768),a=t(6919),i=t(79788),s=t(71518);function o(e,n){return function(e){if(r(e))return e}(e)||function(e,n){var t=null==e?null:void 0!==l&&a(e)||e["@@iterator"];if(null!=t){var r,s,o,c,u=[],d=!0,f=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;d=!1}else for(;!(d=(r=o.call(t)).done)&&(i(u).call(u,r.value),u.length!==n);d=!0);}catch(e){f=!0,s=e}finally{try{if(!d&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(f)throw s}}return u}}(e,n)||(0,s.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71518:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(58189),l=t(36961),a=t(84406);function i(e,n){if(e){if("string"==typeof e)return(0,a.Z)(e,n);var t,i=r(t=Object.prototype.toString.call(e)).call(t,8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return l(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return(0,a.Z)(e,n)}}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=6567)}),_N_E=e.O()}]);