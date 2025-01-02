(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3505],{76269:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/mix-image",function(){return t(7200)}])},7200:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var i=t(85893),o=t(67294),s=t(9008),r=t.n(s),a=t(66252),c=t(57307),l=t(26219),u=t(41577),d=t(87162),m=t(21652),p=t(93967),h=t.n(p),x=t(2824),g=t.n(x),v=t(78046);let f=[{avifSrc:"/images/mix-image/3.avif",webpSrc:"/images/mix-image/3.webp",src:"/images/mix-image/3.jpg",alt:"吹响吧！上低音号 吉川优子"},{avifSrc:"/images/mix-image/2.avif",webpSrc:"/images/mix-image/2.webp",src:"/images/mix-image/2.jpg",alt:"吹响吧！上低音号 中川夏纪"}];var b=function(e){let n=(0,o.useRef)(null),[t,s]=(0,o.useState)(0),r=(0,o.useCallback)(function(e){if(n.current){let t=n.current.getBoundingClientRect(),[i,o]=[e.clientX-t.left,e.clientY-t.top];n.current.style.setProperty("--x",`${i}px`),n.current.style.setProperty("--y",`${o}px`)}},[]),a=(0,o.useCallback)(function(e){n.current.style.setProperty("--radius","100px"),r(e),document.addEventListener("mousemove",r)},[]);return(0,o.useEffect)(function(){return document.addEventListener("mouseover",a,{once:!0}),function(){document.removeEventListener("mouseover",a),document.removeEventListener("mousemove",r)}},[]),(0,i.jsx)(o.Fragment,{children:(0,i.jsx)(d.Z,{className:g().card,bodyStyle:{textAlign:"center"},extra:(0,i.jsx)(m.ZP,{onClick:function(e){s(e=>0===e?1:0)},children:"切换图片"}),children:(0,i.jsx)("div",{ref:n,className:h()("inline-block",g().container),children:(0,i.jsxs)("div",{className:"relative inline-block max-w-[500px] pointer-events-none",children:[(0,i.jsx)(v.Z,{className:"block w-full",imageClassName:"w-full",...f[t]}),(0,i.jsx)(v.Z,{className:h()("block absolute top-0 left-0 w-full pointer-events-none",g().mix),imageClassName:"w-full",...f[0===t?1:0]})]})})})})},j=t(11151);function _(e){let n={code:"code",pre:"pre",...(0,j.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n    <style>\n      .bottomBg {\n      --topX: 0;\n      --topY: 0;\n      --radius: 0;\n\n      width: 720px;\n      height: 911px;\n      background-image: url('./2.jpg');\n    }\n\n      .upBg {\n      width: 100%;\n      height: 100%;\n      background-image: url('./3.jpg');\n      clip-path: circle(var(--radius) at var(--topX) var(--topY));\n      pointer-events: none;\n    }\n    </style>\n</head>\n<body>\n<div class=\"bottomBg\" id=\"bottomBg\">\n  <div class=\"upBg\"></div>\n</div>\n\n<script>\n  const bottomBg = document.getElementById('bottomBg');\n\n  function handleMouseMove(event) {\n  const bounding = bottomBg.getBoundingClientRect();\n  const [x, y] = [event.clientX - bounding.left, event.clientY - bounding.top];\n\n  bottomBg.style.setProperty('--topX', `${ x }px`);\n  bottomBg.style.setProperty('--topY', `${ y }px`);\n}\n\n  function handleMouseOver(event) {\n  handleMouseMove(event);\n  bottomBg.style.setProperty('--radius', '120px');\n}\n\n  document.addEventListener('mousemove', handleMouseMove);\n  document.addEventListener('mouseover', handleMouseOver, { once: true });\n</script>\n</body>\n</html>\n"})})}function y(e={}){let{wrapper:n}={...(0,j.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}let{Title:w,Paragraph:k}=a.default;var S=function(e){return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(w,{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,i.jsxs)(k,{children:["今天在",(0,i.jsx)(u.Z,{href:"https://voussoir.net/writing/browser_in_the_dark",children:"这个网站"}),"上看到了一篇文章，使用CSS的clip-path属性实现的手电筒的特效，觉得非常赞，于是自己也模仿了一下。"]}),(0,i.jsx)(b,{}),(0,i.jsx)(w,{level:2,children:"代码演示"}),(0,i.jsx)(y,{}),(0,i.jsx)(c.Z,{type:"info",message:[(0,i.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,i.jsxs)("div",{className:"py-[8px]",children:["Browser in the Dark: flashlights with CSS and canvas：",(0,i.jsx)(u.Z,{href:"https://voussoir.net/writing/browser_in_the_dark",children:"https://voussoir.net/writing/browser_in_the_dark"})]},"browser_in_the_dark"),(0,i.jsxs)("div",{className:"py-[8px]",children:["clip-path：",(0,i.jsx)(u.Z,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",children:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path"})]},"clip-path")]})]})};function C(e){return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"使用CSS的clip-path属性实现图片探照灯效果"}),(0,i.jsx)("meta",{name:"keywords",content:"前端, CSS, clip-path"}),(0,i.jsx)("meta",{name:"description",content:"使用CSS的clip-path属性实现图片探照灯效果"})]}),(0,i.jsx)(S,{})]})}},94914:function(e,n,t){"use strict";var i=t(85893),o=t(73935),s=t(39332),r=t(29155),a=t(21652),c=t(70612),l=t(30448),u=t(76467),d=t(1294),m=t.n(d);let{BackTop:p}=r.default;n.Z=function(e){let n=(0,s.useRouter)();return[(0,i.jsxs)("div",{className:m().main,children:[e.goBack?(0,i.jsx)("div",{className:"mb-[16px] text-right",children:(0,i.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,i.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,i.jsx)(u.default,{children:"object"==typeof document?(0,o.createPortal)((0,i.jsx)(p,{type:"primary",icon:(0,i.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(e,n,t){"use strict";var i=t(85893),o=t(66252),s=t(94914);n.Z=function(e){return(0,i.jsx)(s.Z,{goToTop:!0,goBack:!0,children:(0,i.jsx)(o.default,{children:e.children})})}},1294:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},2824:function(e){e.exports={container:"clipPathImageMixDemo_container__4LUU2",mix:"clipPathImageMixDemo_mix__cG8pT",card:"clipPathImageMixDemo_card__KvUjR"}}},function(e){e.O(0,[1652,5361,7307,4853,1991,7162,2888,9774,179],function(){return e(e.s=76269)}),_N_E=e.O()}]);