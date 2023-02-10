(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7618],{45155:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m}});var s=a(67294),i=a(9008),r=a.n(i),t=a(34065),c=a(67552),l=a.n(c),o=a(85893),d=a(11151);function h(e){var n=l()({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"将Win11的右键菜单还原到Win10的样式"}),"\n",(0,o.jsx)(n.p,{children:"管理员运行如下命令："}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Win11还原到Win10"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'reg.exe add "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /f /ve\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"恢复到Win11"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'reg.exe delete "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /va /f\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"运行后重新启动资源管理器"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"taskkill /f /im explorer.exe & start explorer.exe\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l()({},(0,d.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,l()({},e,{children:(0,o.jsx)(h,e)})):h(e)},x=function(e){return(0,o.jsx)(t.Z,{children:(0,o.jsx)(u,{})})};function m(e){return(0,o.jsxs)(s.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:"将Win11的右键菜单还原到Win10的样式"}),(0,o.jsx)("meta",{name:"keywords",content:"Win11, Win10, 右键菜单"}),(0,o.jsx)("meta",{name:"description",content:"将Win11的右键菜单还原到Win10"})]}),(0,o.jsx)(x,{})]})}},38914:function(e,n,a){"use strict";var s=a(19623),i=a(73935),r=a(11163),t=a(1472),c=a(18662),l=a(75162),o=a(37653),d=a(76467),h=a(35919),u=a.n(h),x=a(85893),m=t.Z.BackTop;n.Z=function(e){var n=(0,r.useRouter)();return[(0,x.jsxs)("div",{className:u().main,children:[e.goBack?(0,x.jsx)("div",{className:"mb-[16px] text-right",children:(0,x.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,x.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,x.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,s.Z)(document))==="object"?(0,i.createPortal)((0,x.jsx)(m,{type:"primary",icon:(0,x.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(e,n,a){"use strict";a(74916);var s=a(88946),i=a.n(s),r=a(81290),t=a.n(r),c=a(41664),l=a.n(c),o=a(97183),d=a(26713),h=a(83062),u=a(67337),x=a(48739),m=a.n(x),f=a(90010),j=a(85893),p=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],_=["github.io","vercel.app"],v=i()(p).call(p,function(e,n){return(0,j.jsx)("li",{className:m().navListItem,children:(0,j.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,j.jsx)(o.Z.Header,{className:m().antdHeader,children:(0,j.jsxs)("div",{className:m().header,children:[(0,j.jsx)("nav",{className:m().headerLeft,children:(0,j.jsx)("ul",{className:m().navList,children:v})}),(0,j.jsx)("div",{className:m().headerRight,children:(0,j.jsxs)(d.Z,{size:16,children:[(0,j.jsx)(h.Z,{title:"切换网站地址",children:(0,j.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,a=n.pathname,s=n.hostname,i=/github\.io/.test(s);window.location.href=new(t())(a,"https://duan602728596.".concat(_[i?1:0],"/"))},children:(0,j.jsx)(u.Z,{className:m().switchAddressIcon})})}),(0,j.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,j.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(e,n,a){"use strict";var s=a(85893);n.Z=function(e){var n=e.className,a=e.imageClassName,i=e.avifSrc,r=e.webpSrc,t=e.src,c=e.alt;return(0,s.jsxs)("picture",{className:n,children:[i&&(0,s.jsx)("source",{srcSet:i,type:"image/avif"}),r&&(0,s.jsx)("source",{srcSet:r,type:"image/webp"}),(0,s.jsx)("img",{className:a,src:t,alt:c})]})}},34065:function(e,n,a){"use strict";var s=a(67294),i=a(43699),r=a(38914),t=a(85893);n.Z=function(e){return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsx)(r.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},889:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/operating-system/win11-right-click-menu-restore-to-win10",function(){return a(45155)}])},35919:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=889)}),_N_E=e.O()}]);