(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8940],{48452:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(67294),s=t(9008),a=t.n(s),c=t(48726),i=t(9991),l=t(67552),o=t.n(l),d=t(85893),u=t(11151);function p(e){var n=o()({pre:"pre",code:"code"},(0,u.ah)(),e.components);return(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"// TS2307: Cannot find module './index.css'\nimport './index.css';\n"})})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({},(0,u.ah)(),e.components).wrapper;return n?(0,d.jsx)(n,o()({},e,{children:(0,d.jsx)(p,e)})):p(e)};function m(e){var n=o()({pre:"pre",code:"code"},(0,u.ah)(),e.components);return(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"declare module '*.css' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n"})})}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({},(0,u.ah)(),e.components).wrapper;return n?(0,d.jsx)(n,o()({},e,{children:(0,d.jsx)(m,e)})):m(e)};function x(e){var n=o()({pre:"pre",code:"code"},(0,u.ah)(),e.components);return(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"declare module '*.css' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.sass' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.scss' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.less' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.styl' {\n  const style: { [key: string]: string };\n\n  export default style;\n}\n\ndeclare module '*.png' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.jpg' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.jpeg' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.gif' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.webp' {\n  const url: string;\n\n  export default url;\n}\n\ndeclare module '*.svg' {\n  import type { FunctionComponent } from 'react';\n\n  const url: string;\n\n  // 如果使用@svgr/webpack加载svg，还会导出ReactComponent组件\n  export const ReactComponent: FunctionComponent;\n\n  export default url;\n}\n\ndeclare module '*.vue' {\n  import { defineComponent } from 'vue';\n\n  export default ReturnType<typeof defineComponent>;\n}\n"})})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({},(0,u.ah)(),e.components).wrapper;return n?(0,d.jsx)(n,o()({},e,{children:(0,d.jsx)(x,e)})):x(e)},j=c.Z.Title,v=c.Z.Paragraph,_=function(e){return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j,{children:"如何在TypeScript内引入静态资源"}),(0,d.jsx)(v,{children:"在ts文件中，如果引入了静态资源模块（比如css、图片等），会报错，提示找不到模块。"}),(0,d.jsx)(h,{}),(0,d.jsx)(v,{children:"可以使用全局类型声明写法，来声明类型。"}),(0,d.jsx)(f,{}),(0,d.jsx)(j,{level:2,children:"一份可用的完整配置"}),(0,d.jsx)(g,{})]})};function y(e){return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsxs)(a(),{children:[(0,d.jsx)("title",{children:"如何在TypeScript内引入静态资源"}),(0,d.jsx)("meta",{name:"keywords",content:"typescript, webpack"}),(0,d.jsx)("meta",{name:"description",content:"如何在typescript内引入静态资源"})]}),(0,d.jsx)(_,{})]})}},39748:function(e,n,t){"use strict";var r=t(19623),s=t(73935),a=t(11163),c=t(1472),i=t(18662),l=t(75162),o=t(37653),d=t(76467),u=t(67296),p=t.n(u),h=t(85893),m=c.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,h.jsxs)("div",{className:p().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,h.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,s.createPortal)((0,h.jsx)(m,{type:"primary",icon:(0,h.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(74916);var r=t(88946),s=t.n(r),a=t(81290),c=t.n(a),i=t(41664),l=t.n(i),o=t(97183),d=t(26713),u=t(83062),p=t(67337),h=t(78233),m=t.n(h),f=t(2013),x=t(85893),g=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],j=["github.io","vercel.app"],v=s()(g).call(g,function(e,n){return(0,x.jsx)("li",{className:m().navListItem,children:(0,x.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,x.jsx)(o.Z.Header,{className:m().antdHeader,children:(0,x.jsxs)("div",{className:m().header,children:[(0,x.jsx)("nav",{className:m().headerLeft,children:(0,x.jsx)("ul",{className:m().navList,children:v})}),(0,x.jsx)("div",{className:m().headerRight,children:(0,x.jsxs)(d.Z,{size:16,children:[(0,x.jsx)(u.Z,{title:"切换网站地址",children:(0,x.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,s=/github\.io/.test(r);window.location.href=new(c())(t,"https://duan602728596.".concat(j[s?1:0],"/"))},children:(0,x.jsx)(p.Z,{className:m().switchAddressIcon})})}),(0,x.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,s=e.avifSrc,a=e.webpSrc,c=e.src,i=e.alt;return(0,r.jsxs)("picture",{className:n,children:[s&&(0,r.jsx)("source",{srcSet:s,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:c,alt:i})]})}},9991:function(e,n,t){"use strict";var r=t(67294),s=t(32307),a=t(39748),c=t(85893);n.Z=function(e){return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},39686:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/static-resource-in-typescript",function(){return t(48452)}])},67296:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},78233:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=39686)}),_N_E=e.O()}]);