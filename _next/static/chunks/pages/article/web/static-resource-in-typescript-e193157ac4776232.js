(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8940],{39686:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/static-resource-in-typescript",function(){return t(113)}])},113:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var s=t(85893),r=t(67294),i=t(9008),c=t.n(i),l=t(76315),a=t(30673),o=t(11151);function d(e){let n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// TS2307: Cannot find module './index.css'\nimport './index.css';\n"})})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e){let n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"declare module '*.css' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n"})})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function m(e){let n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"declare module '*.css' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.sass' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.scss' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.less' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.styl' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.png' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.jpg' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.jpeg' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.gif' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.webp' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.svg' {\n  import type { FunctionComponent } from 'react';\n\n  const url: string;\n\n  // 如果使用@svgr/webpack加载svg，还会导出ReactComponent组件\n  export const ReactComponent: FunctionComponent;\n\n  export default url;\n}\n\ndeclare module '*.vue' {\n  import { defineComponent } from 'vue';\n\n  export default ReturnType<typeof defineComponent>;\n}\n"})})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}let{Title:x,Paragraph:g}=l.default;var j=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(x,{children:"如何在TypeScript内引入静态资源"}),(0,s.jsx)(g,{children:"在ts文件中，如果引入了静态资源模块（比如css、图片等），会报错，提示找不到模块。"}),(0,s.jsx)(u,{}),(0,s.jsx)(g,{children:"可以使用全局类型声明写法，来声明类型。"}),(0,s.jsx)(h,{}),(0,s.jsx)(x,{level:2,children:"一份可用的完整配置"}),(0,s.jsx)(f,{})]})};function _(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"如何在TypeScript内引入静态资源"}),(0,s.jsx)("meta",{name:"keywords",content:"typescript, webpack"}),(0,s.jsx)("meta",{name:"description",content:"如何在typescript内引入静态资源"})]}),(0,s.jsx)(j,{})]})}},39182:function(e,n,t){"use strict";var s=t(85893),r=t(45697),i=t.n(r);function c(e){let{href:n,className:t,children:r}=e;return(0,s.jsx)("a",{className:t,href:n,target:"_blank",rel:"noopener noreferrer",children:r})}c.propTypes={href:i().string.isRequired,className:i().string,children:i().node.isRequired},n.Z=c},99388:function(e,n,t){"use strict";var s=t(85893),r=t(73935),i=t(45697),c=t.n(i),l=t(11163),a=t(81860),o=t(10932),d=t(75162),u=t(6171),p=t(76467),h=t(63791),m=t.n(h);let{BackTop:f}=a.default;function x(e){let n=(0,l.useRouter)();return[(0,s.jsxs)("div",{className:m().main,children:[e.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(o.ZP,{onClick:function(e){n.push("/")},children:[(0,s.jsx)(u.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,s.jsx)(p.default,{children:(null==e?void 0:e.goToTop)&&"object"==typeof document?(0,r.createPortal)((0,s.jsx)(f,{type:"primary",icon:(0,s.jsx)(d.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}x.propTypes={children:c().node,goToTop:c().bool,goBack:c().bool},n.Z=x},43221:function(e,n,t){"use strict";var s=t(85893),r=t(41664),i=t.n(r),c=t(21612),l=t(78957),a=t(83062),o=t(67337),d=t(32958),u=t.n(d),p=t(90791),h=t(39182);let m=["github.io","vercel.app"],f=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}].map((e,n)=>(0,s.jsx)("li",{className:u().navListItem,children:(0,s.jsx)(i(),{href:e.href,children:e.title})},e.href));n.Z=function(e){return(0,s.jsx)(c.Z.Header,{className:u().antdHeader,children:(0,s.jsxs)("div",{className:u().header,children:[(0,s.jsx)("nav",{className:u().headerLeft,children:(0,s.jsx)("ul",{className:u().navList,children:f})}),(0,s.jsx)("div",{className:u().headerRight,children:(0,s.jsxs)(l.Z,{size:16,children:[(0,s.jsx)(a.Z,{title:"切换网站地址",children:(0,s.jsx)("a",{className:u().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){let{pathname:n,hostname:t}=window.location,s=/github\.io/.test(t);window.location.href=new URL(n,"https://duan602728596.".concat(m[s?1:0],"/"))},children:(0,s.jsx)(o.Z,{className:u().switchAddressIcon})})}),(0,s.jsx)(h.Z,{className:u().githubLink,href:"https://github.com/duan602728596",children:(0,s.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90791:function(e,n,t){"use strict";var s=t(85893),r=t(45697),i=t.n(r);function c(e){let{className:n,imageClassName:t,avifSrc:r,webpSrc:i,src:c,alt:l}=e;return(0,s.jsxs)("picture",{className:n,children:[r&&(0,s.jsx)("source",{srcSet:r,type:"image/avif"}),i&&(0,s.jsx)("source",{srcSet:i,type:"image/webp"}),(0,s.jsx)("img",{className:t,src:c,alt:l})]})}c.propTypes={className:i().string,imageClassName:i().string,avifSrc:i().string,webpSrc:i().string,src:i().string},n.Z=c},30673:function(e,n,t){"use strict";var s=t(85893),r=t(67294),i=t(45697),c=t.n(i),l=t(43221),a=t(99388);function o(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}o.propTypes={children:c().node},n.Z=o},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[932,1447,4530,2888,9774,179],function(){return e(e.s=39686)}),_N_E=e.O()}]);