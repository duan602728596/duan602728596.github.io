(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3505],{92351:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var r=t(67294),i=t(9008),a=t.n(i),s=t(76315),c=t(38925),o=t(55147),l=t(62079),u=t.n(l),d=t(52020),h=t.n(d),m=t(73324),p=t.n(m),f=t(88546),v=t.n(f),g=t(99595),x=t.n(g),b=t(66775),j=t.n(b),_=t(2201),w=t.n(_),y=t(57445),N=t.n(y),k=t(44845),Z=t(8333),S=t(70859),C=t(18610),L=t(94184),B=t.n(L),P=t(35431),T=t.n(P),I=t(96808),E=t(85893);function O(e,n){var t=u()(e);if(h()){var r=h()(e);n&&(r=p()(r).call(r,function(n){return v()(e,n).enumerable})),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t,r,i=null!=arguments[n]?arguments[n]:{};n%2?x()(t=O(Object(i),!0)).call(t,function(n){(0,k.Z)(e,n,i[n])}):j()?w()(e,j()(i)):x()(r=O(Object(i))).call(r,function(n){N()(e,n,v()(i,n))})}return e}var A=[{avifSrc:"/images/mix-image/3.avif",webpSrc:"/images/mix-image/3.webp",src:"/images/mix-image/3.jpg",alt:"吹响吧！上低音号 吉川优子"},{avifSrc:"/images/mix-image/2.avif",webpSrc:"/images/mix-image/2.webp",src:"/images/mix-image/2.jpg",alt:"吹响吧！上低音号 中川夏纪"}],z=function(e){var n=(0,r.useRef)(null),t=(0,r.useState)(0),i=(0,Z.Z)(t,2),a=i[0],s=i[1],c=(0,r.useCallback)(function(e){if(n.current){var t=n.current.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top;n.current.style.setProperty("--x","".concat(r,"px")),n.current.style.setProperty("--y","".concat(i,"px"))}},[]),o=(0,r.useCallback)(function(e){n.current.style.setProperty("--radius","100px"),c(e),document.addEventListener("mousemove",c)},[]);return(0,r.useEffect)(function(){return document.addEventListener("mouseover",o,{once:!0}),function(){document.removeEventListener("mouseover",o),document.removeEventListener("mousemove",c)}},[]),(0,E.jsx)(r.Fragment,{children:(0,E.jsx)(S.Z,{className:T().card,bodyStyle:{textAlign:"center"},extra:(0,E.jsx)(C.ZP,{onClick:function(e){s(function(e){return 0===e?1:0})},children:"切换图片"}),children:(0,E.jsx)("div",{ref:n,className:B()("inline-block",T().container),children:(0,E.jsxs)("div",{className:"relative inline-block max-w-[500px] pointer-events-none",children:[(0,E.jsx)(I.Z,M({className:"block w-full",imageClassName:"w-full"},A[a])),(0,E.jsx)(I.Z,M({className:B()("block absolute top-0 left-0 w-full pointer-events-none",T().mix),imageClassName:"w-full"},A[0===a?1:0]))]})})})})},X=t(11151);function R(e,n){var t=u()(e);if(h()){var r=h()(e);n&&(r=p()(r).call(r,function(n){return v()(e,n).enumerable})),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t,r,i=null!=arguments[n]?arguments[n]:{};n%2?x()(t=R(Object(i),!0)).call(t,function(n){(0,k.Z)(e,n,i[n])}):j()?w()(e,j()(i)):x()(r=R(Object(i))).call(r,function(n){N()(e,n,v()(i,n))})}return e}function Y(e){var n=D(D({code:"code",pre:"pre"},(0,X.a)()),e.components);return(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n    <style>\n      .bottomBg {\n      --topX: 0;\n      --topY: 0;\n      --radius: 0;\n\n      width: 720px;\n      height: 911px;\n      background-image: url('./2.jpg');\n    }\n\n      .upBg {\n      width: 100%;\n      height: 100%;\n      background-image: url('./3.jpg');\n      clip-path: circle(var(--radius) at var(--topX) var(--topY));\n      pointer-events: none;\n    }\n    </style>\n</head>\n<body>\n<div class=\"bottomBg\" id=\"bottomBg\">\n  <div class=\"upBg\"></div>\n</div>\n\n<script>\n  const bottomBg = document.getElementById('bottomBg');\n\n  function handleMouseMove(event) {\n  const bounding = bottomBg.getBoundingClientRect();\n  const [x, y] = [event.clientX - bounding.left, event.clientY - bounding.top];\n\n  bottomBg.style.setProperty('--topX', `${ x }px`);\n  bottomBg.style.setProperty('--topY', `${ y }px`);\n}\n\n  function handleMouseOver(event) {\n  handleMouseMove(event);\n  bottomBg.style.setProperty('--radius', '120px');\n}\n\n  document.addEventListener('mousemove', handleMouseMove);\n  document.addEventListener('mouseover', handleMouseOver, { once: true });\n</script>\n</body>\n</html>\n"})})}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=D(D({},(0,X.a)()),e.components).wrapper;return n?(0,E.jsx)(n,D(D({},e),{},{children:(0,E.jsx)(Y,D({},e))})):Y(e)}var U=s.Z.Title,F=s.Z.Paragraph,G=function(e){return(0,E.jsxs)(o.Z,{children:[(0,E.jsx)(U,{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,E.jsxs)(F,{children:["今天在",(0,E.jsx)("a",{href:"https://voussoir.net/writing/browser_in_the_dark",target:"_blank",rel:"noopener noreferrer",children:"这个网站"}),"上看到了一篇文章，使用CSS的clip-path属性实现的手电筒的特效，觉得非常赞，于是自己也模仿了一下。"]}),(0,E.jsx)(z,{}),(0,E.jsx)(U,{level:2,children:"代码演示"}),(0,E.jsx)(H,{}),(0,E.jsx)(c.Z,{type:"info",message:[(0,E.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,E.jsxs)("div",{className:"py-[8px]",children:["Browser in the Dark: flashlights with CSS and canvas：",(0,E.jsx)("a",{href:"https://voussoir.net/writing/browser_in_the_dark",target:"_blank",rel:"noopener noreferrer",children:"https://voussoir.net/writing/browser_in_the_dark"})]},"browser_in_the_dark"),(0,E.jsxs)("div",{className:"py-[8px]",children:["clip-path：",(0,E.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path"})]},"clip-path")]})]})};function $(e){return(0,E.jsxs)(r.Fragment,{children:[(0,E.jsxs)(a(),{children:[(0,E.jsx)("title",{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,E.jsx)("meta",{name:"keywords",content:"前端, CSS, clip-path"}),(0,E.jsx)("meta",{name:"description",content:"使用CSS的clip-path属性实现图片探照灯效果"})]}),(0,E.jsx)(G,{})]})}},39243:function(e,n,t){"use strict";var r=t(19623),i=t(73935),a=t(11163),s=t(81860),c=t(18610),o=t(75162),l=t(6171),u=t(76467),d=t(63791),h=t.n(d),m=t(85893),p=s.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,m.jsxs)("div",{className:h().main,children:[e.goBack?(0,m.jsx)("div",{className:"mb-[16px] text-right",children:(0,m.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,m.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,m.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,i.createPortal)((0,m.jsx)(p,{type:"primary",icon:(0,m.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,t){"use strict";t(64043);var r=t(88946),i=t.n(r),a=t(81290),s=t.n(a),c=t(41664),o=t.n(c),l=t(21612),u=t(78957),d=t(83062),h=t(67337),m=t(32958),p=t.n(m),f=t(96808),v=t(85893),g=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],x=["github.io","vercel.app"],b=i()(g).call(g,function(e,n){return(0,v.jsx)("li",{className:p().navListItem,children:(0,v.jsx)(o(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,v.jsx)(l.Z.Header,{className:p().antdHeader,children:(0,v.jsxs)("div",{className:p().header,children:[(0,v.jsx)("nav",{className:p().headerLeft,children:(0,v.jsx)("ul",{className:p().navList,children:b})}),(0,v.jsx)("div",{className:p().headerRight,children:(0,v.jsxs)(u.Z,{size:16,children:[(0,v.jsx)(d.Z,{title:"切换网站地址",children:(0,v.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,i=/github\.io/.test(r);window.location.href=new(s())(t,"https://duan602728596.".concat(x[i?1:0],"/"))},children:(0,v.jsx)(h.Z,{className:p().switchAddressIcon})})}),(0,v.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,i=e.avifSrc,a=e.webpSrc,s=e.src,c=e.alt;return(0,r.jsxs)("picture",{className:n,children:[i&&(0,r.jsx)("source",{srcSet:i,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:s,alt:c})]})}},55147:function(e,n,t){"use strict";var r=t(67294),i=t(31725),a=t(39243),s=t(85893);n.Z=function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},76269:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/mix-image",function(){return t(92351)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},35431:function(e){e.exports={container:"clipPathImageMixDemo_container__4LUU2",mix:"clipPathImageMixDemo_mix__cG8pT",card:"clipPathImageMixDemo_card__KvUjR"}},84406:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},8333:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(86416),i=t(1768),a=t(6919),s=t(79788),c=t(71518);function o(e,n){return function(e){if(r(e))return e}(e)||function(e,n){var t=null==e?null:void 0!==i&&a(e)||e["@@iterator"];if(null!=t){var r,c,o,l,u=[],d=!0,h=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;d=!1}else for(;!(d=(r=o.call(t)).done)&&(s(u).call(u,r.value),u.length!==n);d=!0);}catch(e){h=!0,c=e}finally{try{if(!d&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(h)throw c}}return u}}(e,n)||(0,c.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71518:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(58189),i=t(36961),a=t(84406);function s(e,n){if(e){if("string"==typeof e)return(0,a.Z)(e,n);var t,s=r(t=Object.prototype.toString.call(e)).call(t,8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return i(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return(0,a.Z)(e,n)}}}},function(e){e.O(0,[8610,1447,4530,8925,3791,8791,859,9774,2888,179],function(){return e(e.s=76269)}),_N_E=e.O()}]);