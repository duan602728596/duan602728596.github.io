(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6047],{42561:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(94184),l=t.n(r),a=t(67294),s=t(53124),i=t(65223),o=t(47673);let c=e=>{let{getPrefixCls:n,direction:t}=(0,a.useContext)(s.E_),{prefixCls:r,className:c=""}=e,u=n("input-group",r),d=n("input"),[f,p]=(0,o.ZP)(d),h=l()(u,{[`${u}-lg`]:"large"===e.size,[`${u}-sm`]:"small"===e.size,[`${u}-compact`]:e.compact,[`${u}-rtl`]:"rtl"===t},p,c),m=(0,a.useContext)(i.aM),v=(0,a.useMemo)(()=>Object.assign(Object.assign({},m),{isFormItemInput:!1}),[m]);return f(a.createElement("span",{className:h,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},a.createElement(i.aM.Provider,{value:v},e.children)))};var u=t(82586),d=t(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},p=t(93771),h=a.forwardRef(function(e,n){return a.createElement(p.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:n,icon:f}))}),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},v=a.forwardRef(function(e,n){return a.createElement(p.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:n,icon:m}))}),x=t(98423),b=t(42550),g=t(72922),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>n.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};let y=e=>e?a.createElement(v,null):a.createElement(h,null),Z={click:"onClick",hover:"onMouseOver"},_=a.forwardRef((e,n)=>{let{visibilityToggle:t=!0}=e,r="object"==typeof t&&void 0!==t.visible,[i,o]=(0,a.useState)(()=>!!r&&t.visible),c=(0,a.useRef)(null);a.useEffect(()=>{r&&o(t.visible)},[r,t]);let d=(0,g.Z)(c),f=()=>{let{disabled:n}=e;n||(i&&d(),o(e=>{var n;let r=!e;return"object"==typeof t&&(null===(n=t.onVisibleChange)||void 0===n||n.call(t,r)),r}))},{className:p,prefixCls:h,inputPrefixCls:m,size:v}=e,_=j(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:w}=a.useContext(s.E_),C=w("input",m),k=w("input-password",h),N=t&&(n=>{let{action:t="click",iconRender:r=y}=e,l=Z[t]||"",s=r(i),o={[l]:f,className:`${n}-icon`,key:"passwordIcon",onMouseDown:e=>{e.preventDefault()},onMouseUp:e=>{e.preventDefault()}};return a.cloneElement(a.isValidElement(s)?s:a.createElement("span",null,s),o)})(k),I=l()(k,p,{[`${k}-${v}`]:!!v}),O=Object.assign(Object.assign({},(0,x.Z)(_,["suffix","iconRender","visibilityToggle"])),{type:i?"text":"password",className:I,prefixCls:C,suffix:N});return v&&(O.size=v),a.createElement(u.Z,Object.assign({ref:(0,b.sQ)(n,c)},O))});var w=t(13805),C=t(96159),k=t(97029),N=t(98675),I=t(4173),O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>n.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};let E=a.forwardRef((e,n)=>{let t;let{prefixCls:r,inputPrefixCls:i,className:o,size:c,suffix:d,enterButton:f=!1,addonAfter:p,loading:h,disabled:m,onSearch:v,onChange:x,onCompositionStart:g,onCompositionEnd:j}=e,y=O(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:Z,direction:_}=a.useContext(s.E_),E=a.useRef(!1),L=Z("input-search",r),S=Z("input",i),{compactSize:P}=(0,I.ri)(L,_),T=(0,N.Z)(e=>{var n;return null!==(n=null!=P?P:c)&&void 0!==n?n:e}),z=a.useRef(null),A=e=>{e&&e.target&&"click"===e.type&&v&&v(e.target.value,e),x&&x(e)},M=e=>{var n;document.activeElement===(null===(n=z.current)||void 0===n?void 0:n.input)&&e.preventDefault()},R=e=>{var n,t;v&&v(null===(t=null===(n=z.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},$=e=>{E.current||h||R(e)},B="boolean"==typeof f?a.createElement(w.Z,null):null,D=`${L}-button`,F=f||{},Q=F.type&&!0===F.type.__ANT_BUTTON;t=Q||"button"===F.type?(0,C.Tm)(F,Object.assign({onMouseDown:M,onClick:e=>{var n,t;null===(t=null===(n=null==F?void 0:F.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),R(e)},key:"enterButton"},Q?{className:D,size:T}:{})):a.createElement(k.ZP,{className:D,type:f?"primary":void 0,size:T,disabled:m,key:"enterButton",onMouseDown:M,onClick:R,loading:h,icon:B},f),p&&(t=[t,(0,C.Tm)(p,{key:"addonAfter"})]);let q=l()(L,{[`${L}-rtl`]:"rtl"===_,[`${L}-${T}`]:!!T,[`${L}-with-button`]:!!f},o),H=e=>{E.current=!0,null==g||g(e)},U=e=>{E.current=!1,null==j||j(e)};return a.createElement(u.Z,Object.assign({ref:(0,b.sQ)(z,n),onPressEnter:$},y,{size:T,onCompositionStart:H,onCompositionEnd:U,prefixCls:S,addonAfter:t,suffix:d,onChange:A,className:q,disabled:m}))});var L=t(22913);let S=u.Z;S.Group=c,S.Search=E,S.TextArea=L.Z,S.Password=_;var P=S},13805:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(1413),l=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},s=t(93771),i=l.forwardRef(function(e,n){return l.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))})},92836:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(67294),l=t(9008),a=t.n(l),s=t(48726),i=t(22410),o=t(8333);t(83710),t(41539),t(39714);var c=t(88946),u=t.n(c),d=t(35704),f=t.n(d),p=t(42561),h=t(97029),m=t(85893),v=s.Z.Title,x=function(e){var n=(0,r.useState)(""),t=(0,o.Z)(n,2),l=t[0],a=t[1],s=(0,r.useState)([]),i=(0,o.Z)(s,2),c=i[0],d=i[1];return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(v,{level:2,children:"代码演示"}),(0,m.jsxs)("div",{className:"mb-[8px] flex",children:[(0,m.jsx)("div",{className:"grow",children:(0,m.jsx)(p.Z,{className:"w-full",value:l,placeholder:"请输入字符串",onChange:function(e){a(e.target.value)}})}),(0,m.jsx)("div",{className:"shrink-0",children:(0,m.jsxs)(h.ZP.Group,{children:[(0,m.jsx)(h.ZP,{onClick:function(e){var n=function(e){var n=[],t=e.length;if(t<3)return n;for(var r=1;r<t-1;r++){for(var l=null,a=null,s=r-1,i=r+1;s>=0&&i<t;s--,i++)if(e[s]===e[i])l=s,a=i;else break;null!==l&&null!==a&&n.push([l,a]),l=null,a=null;for(var o=r,c=r+1;o>=0&&c<t;o--,c++)if(e[o]===e[c])l=o,a=c;else break;null!==l&&null!==a&&n.push([l,a])}return n}(l);d(u()(n).call(n,function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return f()(l).call(l,t,r+1)}))},children:"获取回文字符串"}),(0,m.jsx)(h.ZP,{onClick:function(e){a(""),d([])},children:"重置"})]})})]}),(0,m.jsx)(v,{level:3,children:"输出结果："}),c.length<=0?(0,m.jsx)("p",{children:"无结果"}):(0,m.jsx)("ul",{children:u()(c).call(c,function(e,n){return(0,m.jsx)("li",{children:e},n.toString())})})]})},b=t(67552),g=t.n(b),j=t(11151);function y(e){var n=g()({pre:"pre",code:"code"},(0,j.ah)(),e.components);return(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-typescript",children:"function palindrome(str: string): Array<[number, number]> {\n  const palindromeIndex: Array<[number, number]> = [];\n  const strLength: number = str.length;\n\n  if (strLength < 3) {\n    return palindromeIndex;\n  }\n\n  for (let i: number = 1; i < strLength - 1; i++) {\n    // 奇数\n    let startIndex: number | null = null,\n      endIndex: number | null = null;\n\n    for (let k: number = i - 1, m: number = i + 1; k >= 0 && m < strLength; k--, m++) {\n      if (str[k] === str[m]) {\n        [startIndex, endIndex] = [k, m];\n      } else {\n        break;\n      }\n    }\n\n    if (startIndex !== null && endIndex !== null) {\n      palindromeIndex.push([startIndex, endIndex]);\n    }\n\n    // 偶数\n    [startIndex, endIndex] = [null, null];\n\n    for (let p: number = i, t: number = i + 1; p >= 0 && t < strLength; p--, t++) {\n      if (str[p] === str[t]) {\n        [startIndex, endIndex] = [p, t];\n      } else {\n        break;\n      }\n    }\n\n    if (startIndex !== null && endIndex !== null) {\n      palindromeIndex.push([startIndex, endIndex]);\n    }\n  }\n\n  return palindromeIndex;\n}\n"})})}var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=g()({},(0,j.ah)(),e.components).wrapper;return n?(0,m.jsx)(n,g()({},e,{children:(0,m.jsx)(y,e)})):y(e)},_=s.Z.Title,w=s.Z.Paragraph,C=function(e){return(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(_,{children:"实现一个回文算法"}),(0,m.jsx)(w,{children:"总结了一下自己实现的回文算法。"}),(0,m.jsx)(Z,{}),(0,m.jsx)(x,{})]})};function k(e){return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsxs)(a(),{children:[(0,m.jsx)("title",{children:"实现一个回文算法"}),(0,m.jsx)("meta",{name:"keywords",content:"算法, 回文算法"}),(0,m.jsx)("meta",{name:"description",content:"实现一个回文算法"})]}),(0,m.jsx)(C,{})]})}},54892:function(e,n,t){"use strict";var r=t(19623),l=t(73935),a=t(11163),s=t(51341),i=t(97029),o=t(75162),c=t(37653),u=t(76467),d=t(3744),f=t.n(d),p=t(85893),h=s.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,p.jsxs)("div",{className:f().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,l.createPortal)((0,p.jsx)(h,{type:"primary",icon:(0,p.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,n,t){"use strict";t(74916);var r=t(88946),l=t.n(r),a=t(81290),s=t.n(a),i=t(41664),o=t.n(i),c=t(97183),u=t(26713),d=t(83062),f=t(67337),p=t(62139),h=t.n(p),m=t(30654),v=t(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],b=["github.io","vercel.app"],g=l()(x).call(x,function(e,n){return(0,v.jsx)("li",{className:h().navListItem,children:(0,v.jsx)(o(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,v.jsx)(c.Z.Header,{className:h().antdHeader,children:(0,v.jsxs)("div",{className:h().header,children:[(0,v.jsx)("nav",{className:h().headerLeft,children:(0,v.jsx)("ul",{className:h().navList,children:g})}),(0,v.jsx)("div",{className:h().headerRight,children:(0,v.jsxs)(u.Z,{size:16,children:[(0,v.jsx)(d.Z,{title:"切换网站地址",children:(0,v.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,l=/github\.io/.test(r);window.location.href=new(s())(t,"https://duan602728596.".concat(b[l?1:0],"/"))},children:(0,v.jsx)(f.Z,{className:h().switchAddressIcon})})}),(0,v.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,l=e.avifSrc,a=e.webpSrc,s=e.src,i=e.alt;return(0,r.jsxs)("picture",{className:n,children:[l&&(0,r.jsx)("source",{srcSet:l,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:s,alt:i})]})}},22410:function(e,n,t){"use strict";var r=t(67294),l=t(34341),a=t(54892),s=t(85893);n.Z=function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},6567:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/algorithms-and-data-structures/palindrome",function(){return t(92836)}])},3744:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}},84406:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},8333:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(98235),l=t(52472),a=t(19389),s=t(71518);function i(e,n){return function(e){if(r(e))return e}(e)||function(e,n){var t=null==e?null:void 0!==l&&a(e)||e["@@iterator"];if(null!=t){var r,s,i,o,c=[],u=!0,d=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);u=!0);}catch(e){d=!0,s=e}finally{try{if(!u&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(d)throw s}}return c}}(e,n)||(0,s.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71518:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(35704),l=t(10349),a=t(84406);function s(e,n){if(e){if("string"==typeof e)return(0,a.Z)(e,n);var t,s=r(t=Object.prototype.toString.call(e)).call(t,8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return l(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return(0,a.Z)(e,n)}}}},function(e){e.O(0,[3576,4796,9425,9774,2888,179],function(){return e(e.s=6567)}),_N_E=e.O()}]);