(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{47818:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return x}});var t=s(67294),i=s(9008),r=s.n(i),a=s(76315),c=s(55147),l=s(1218),d=s(85893),h=a.Z.Title,o=a.Z.Paragraph,u=function(e){return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(h,{children:"hTTP缓存策略"}),(0,d.jsxs)(o,{children:["HTTP缓存分为",(0,d.jsx)("b",{children:"强缓存"}),"和",(0,d.jsx)("b",{children:"协商缓存"}),"。"]}),(0,d.jsx)(h,{level:2,children:"强缓存"}),(0,d.jsx)(h,{level:3,children:"Expires"}),(0,d.jsx)(o,{children:"在响应头中包含Expires，Expires的值为日期/时间，即在此时候之后，响应过期。"}),(0,d.jsx)(l.Z,{type:"text",children:"Expires: Tue Jan 04 2022 16:01:42 GMT+0800"}),(0,d.jsx)(h,{level:3,children:"Cache-Control"}),(0,d.jsx)(o,{children:"在响应头中包含Cache-Control，通过指定指令来实现缓存机制。"}),(0,d.jsx)(l.Z,{type:"text",children:"Cache-Control: max-age=300"}),(0,d.jsx)(h,{level:2,children:"协商缓存"}),(0,d.jsxs)(o,{children:["协商缓存通过可以通过",(0,d.jsx)("b",{children:"Last-Modified / If-Modified-Since"}),"和",(0,d.jsx)("b",{children:"Etag / If-None-Match"}),"控制， 根据是否相应",(0,d.jsx)("b",{children:"304 Not Modified"}),"来判断是否需要使用本地缓存文件。"]})]})};function x(e){return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)(r(),{children:[(0,d.jsx)("title",{children:"HTTP缓存策略"}),(0,d.jsx)("meta",{name:"keywords",content:"HTTP"}),(0,d.jsx)("meta",{name:"description",content:"HTTP缓存策略"})]}),(0,d.jsx)(u,{})]})}},39243:function(e,n,s){"use strict";var t=s(19623),i=s(73935),r=s(11163),a=s(81860),c=s(18610),l=s(75162),d=s(6171),h=s(76467),o=s(63791),u=s.n(o),x=s(85893),f=a.Z.BackTop;n.Z=function(e){var n=(0,r.useRouter)();return[(0,x.jsxs)("div",{className:u().main,children:[e.goBack?(0,x.jsx)("div",{className:"mb-[16px] text-right",children:(0,x.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,x.jsx)(d.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,x.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,t.Z)(document))==="object"?(0,i.createPortal)((0,x.jsx)(f,{type:"primary",icon:(0,x.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,s){"use strict";s(64043);var t=s(88946),i=s.n(t),r=s(81290),a=s.n(r),c=s(41664),l=s.n(c),d=s(21612),h=s(78957),o=s(83062),u=s(67337),x=s(32958),f=s.n(x),j=s(96808),m=s(85893),_=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],p=["github.io","vercel.app"],v=i()(_).call(_,function(e,n){return(0,m.jsx)("li",{className:f().navListItem,children:(0,m.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,m.jsx)(d.Z.Header,{className:f().antdHeader,children:(0,m.jsxs)("div",{className:f().header,children:[(0,m.jsx)("nav",{className:f().headerLeft,children:(0,m.jsx)("ul",{className:f().navList,children:v})}),(0,m.jsx)("div",{className:f().headerRight,children:(0,m.jsxs)(h.Z,{size:16,children:[(0,m.jsx)(o.Z,{title:"切换网站地址",children:(0,m.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,s=n.pathname,t=n.hostname,i=/github\.io/.test(t);window.location.href=new(a())(s,"https://duan602728596.".concat(p[i?1:0],"/"))},children:(0,m.jsx)(u.Z,{className:f().switchAddressIcon})})}),(0,m.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(j.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,s){"use strict";var t=s(85893);n.Z=function(e){var n=e.className,s=e.imageClassName,i=e.avifSrc,r=e.webpSrc,a=e.src,c=e.alt;return(0,t.jsxs)("picture",{className:n,children:[i&&(0,t.jsx)("source",{srcSet:i,type:"image/avif"}),r&&(0,t.jsx)("source",{srcSet:r,type:"image/webp"}),(0,t.jsx)("img",{className:s,src:a,alt:c})]})}},55147:function(e,n,s){"use strict";var t=s(67294),i=s(31725),r=s(39243),a=s(85893);n.Z=function(e){return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(r.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},26432:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/http/http-cache",function(){return s(47818)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=26432)}),_N_E=e.O()}]);