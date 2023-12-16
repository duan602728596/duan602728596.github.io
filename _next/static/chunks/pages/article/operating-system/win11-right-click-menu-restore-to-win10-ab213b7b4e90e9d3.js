(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7618],{52594:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return y}});var r=a(67294),s=a(9008),i=a.n(s),t=a(55147),c=a(62079),l=a.n(c),o=a(52020),d=a.n(o),u=a(73324),h=a.n(u),x=a(88546),f=a.n(x),m=a(99595),j=a.n(m),p=a(66775),v=a.n(p),_=a(2201),g=a.n(_),b=a(57445),w=a.n(b),N=a(44845),k=a(85893),Z=a(11151);function L(e,n){var a=l()(e);if(d()){var r=d()(e);n&&(r=h()(r).call(r,function(n){return f()(e,n).enumerable})),a.push.apply(a,r)}return a}function S(e){for(var n=1;n<arguments.length;n++){var a,r,s=null!=arguments[n]?arguments[n]:{};n%2?j()(a=L(Object(s),!0)).call(a,function(n){(0,N.Z)(e,n,s[n])}):v()?g()(e,v()(s)):j()(r=L(Object(s))).call(r,function(n){w()(e,n,f()(s,n))})}return e}function C(e){var n=S(S({code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul"},(0,Z.a)()),e.components);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(n.h1,{children:"将Win11的右键菜单还原到Win10的样式"}),"\n",(0,k.jsx)(n.p,{children:"管理员运行如下命令："}),"\n",(0,k.jsxs)(n.ul,{children:["\n",(0,k.jsx)(n.li,{children:"Win11还原到Win10"}),"\n"]}),"\n",(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-bash",children:'reg.exe add "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /f /ve\n'})}),"\n",(0,k.jsxs)(n.ul,{children:["\n",(0,k.jsx)(n.li,{children:"恢复到Win11"}),"\n"]}),"\n",(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-bash",children:'reg.exe delete "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /va /f\n'})}),"\n",(0,k.jsxs)(n.ul,{children:["\n",(0,k.jsx)(n.li,{children:"运行后重新启动资源管理器"}),"\n"]}),"\n",(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:"language-bash",children:"taskkill /f /im explorer.exe & start explorer.exe\n"})})]})}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=S(S({},(0,Z.a)()),e.components).wrapper;return n?(0,k.jsx)(n,S(S({},e),{},{children:(0,k.jsx)(C,S({},e))})):C(e)}var T=function(e){return(0,k.jsx)(t.Z,{children:(0,k.jsx)(I,{})})};function y(e){return(0,k.jsxs)(r.Fragment,{children:[(0,k.jsxs)(i(),{children:[(0,k.jsx)("title",{children:"将Win11的右键菜单还原到Win10的样式"}),(0,k.jsx)("meta",{name:"keywords",content:"Win11, Win10, 右键菜单"}),(0,k.jsx)("meta",{name:"description",content:"将Win11的右键菜单还原到Win10"})]}),(0,k.jsx)(T,{})]})}},39243:function(e,n,a){"use strict";var r=a(19623),s=a(73935),i=a(11163),t=a(81860),c=a(18610),l=a(75162),o=a(6171),d=a(76467),u=a(63791),h=a.n(u),x=a(85893),f=t.Z.BackTop;n.Z=function(e){var n=(0,i.useRouter)();return[(0,x.jsxs)("div",{className:h().main,children:[e.goBack?(0,x.jsx)("div",{className:"mb-[16px] text-right",children:(0,x.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,x.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,x.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,s.createPortal)((0,x.jsx)(f,{type:"primary",icon:(0,x.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,a){"use strict";a(64043);var r=a(88946),s=a.n(r),i=a(81290),t=a.n(i),c=a(41664),l=a.n(c),o=a(21612),d=a(78957),u=a(83062),h=a(67337),x=a(32958),f=a.n(x),m=a(96808),j=a(85893),p=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],_=s()(p).call(p,function(e,n){return(0,j.jsx)("li",{className:f().navListItem,children:(0,j.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,j.jsx)(o.Z.Header,{className:f().antdHeader,children:(0,j.jsxs)("div",{className:f().header,children:[(0,j.jsx)("nav",{className:f().headerLeft,children:(0,j.jsx)("ul",{className:f().navList,children:_})}),(0,j.jsx)("div",{className:f().headerRight,children:(0,j.jsxs)(d.Z,{size:16,children:[(0,j.jsx)(u.Z,{title:"切换网站地址",children:(0,j.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,a=n.pathname,r=n.hostname,s=/github\.io/.test(r);window.location.href=new(t())(a,"https://duan602728596.".concat(v[s?1:0],"/"))},children:(0,j.jsx)(h.Z,{className:f().switchAddressIcon})})}),(0,j.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,j.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,a){"use strict";var r=a(85893);n.Z=function(e){var n=e.className,a=e.imageClassName,s=e.avifSrc,i=e.webpSrc,t=e.src,c=e.alt;return(0,r.jsxs)("picture",{className:n,children:[s&&(0,r.jsx)("source",{srcSet:s,type:"image/avif"}),i&&(0,r.jsx)("source",{srcSet:i,type:"image/webp"}),(0,r.jsx)("img",{className:a,src:t,alt:c})]})}},55147:function(e,n,a){"use strict";var r=a(67294),s=a(31725),i=a(39243),t=a(85893);n.Z=function(e){return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(s.Z,{}),(0,t.jsx)(i.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},889:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/operating-system/win11-right-click-menu-restore-to-win10",function(){return a(52594)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=889)}),_N_E=e.O()}]);