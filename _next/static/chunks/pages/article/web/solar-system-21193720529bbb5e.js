(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5933],{52845:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var s=t(67294),r=t(9008),a=t.n(r),i=t(33938);t(752),t(60228),t(73964),t(21694),t(76265);var o=t(30222),c=t.n(o),u=t(92381),l=t.n(u),m=t(35820),p=t.n(m),d=t(76315),h=t(18610),f=t(94184),g=t.n(f),x=t(36083),v=t.n(x),j=t(55147),_=function(e,n){if(!document.getElementById(n))return new(p())(function(t,s){var r=document.createElement("script");r.addEventListener("load",function e(){t(),r.removeEventListener("load",e),r=null}),r.id=n,r.src=e,r.dataset.loadType="manual",document.head.appendChild(r)})},y=t(85893),b=d.Z.Title,w=d.Z.Paragraph;function k(){return z.apply(this,arguments)}function z(){return(z=(0,i.Z)(c().mark(function e(){var n,t,s,r,a;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Go,e.next=3,WebAssembly.instantiateStreaming(fetch("/scripts/solar-system.wasm"),n.importObject);case 3:t=e.sent,n.run(t.instance),s=l().__SOLAR_SYSTEM__,a={sun:{material:"/images/solar-system/taiyang.jpg"},planets:r=[{name:"mercury",map:"/images/solar-system/shuixing.jpg",r:1,position:{x:0,y:0,z:70}},{name:"venus",map:"/images/solar-system/jinxing.jpg",r:2,position:{x:0,y:0,z:84}},{name:"earth",map:"/images/solar-system/diqiu.jpg",r:4,position:{x:0,y:0,z:110}},{name:"mars",map:"/images/solar-system/huoxing.jpg",r:5,position:{x:0,y:0,z:140}},{name:"jupiter",map:"/images/solar-system/muxing.jpg",r:17,position:{x:0,y:0,z:220}},{name:"saturn",map:"/images/solar-system/tuxing.jpg",r:11,position:{x:0,y:0,z:280}},{name:"uranus",map:"/images/solar-system/tianwangxing.jpg",r:9,position:{x:0,y:0,z:350}},{name:"neptune",map:"/images/solar-system/haiwangxing.jpg",r:6,position:{x:0,y:0,z:400}}],rings:[{name:"saturnRing",father:"saturn",map:"/images/solar-system/tuxing_huan.jpg",r:{min:14,max:22},rotation:{x:.5,y:0,z:0}},{name:"uranusRing",father:"uranus",map:"/images/solar-system/tianwangxing_huan.jpg",r:{min:10,max:12},rotation:{x:0,y:0,z:.3}}],rotations:[{name:"sun",rot:.01,rev:0,deg:0,l:0},{name:"mercury",rot:.1,rev:.1,deg:0,l:r[0].position.z},{name:"venus",rot:.05,rev:.07,deg:0,l:r[1].position.z},{name:"earth",rot:.05,rev:.03,deg:0,l:r[2].position.z},{name:"mars",rot:.03,rev:.01,deg:0,l:r[3].position.z},{name:"jupiter",rot:.003,rev:.002,deg:0,l:r[4].position.z},{name:"saturn",rot:.01,rev:9e-4,deg:0,l:r[5].position.z},{name:"saturnRing",rot:.01,rev:9e-4,deg:0,l:r[5].position.z},{name:"uranus",rot:.005,rev:5e-4,deg:0,l:r[6].position.z},{name:"uranusRing",rot:.005,rev:5e-4,deg:0,l:r[6].position.z},{name:"neptune",rot:.003,rev:3e-4,deg:0,l:r[7].position.z}],bg:["/images/solar-system/bg0.jpg","/images/solar-system/bg1.jpg"]},s.SolarSystem(THREE,"solar",a);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}l().__SOLAR_SYSTEM__={};var Z=function(e){var n=(0,s.useRef)(null);function t(){return(t=(0,i.Z)(c().mark(function e(t){var s;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=n.current).requestFullscreen){e.next=6;break}return e.next=4,s.requestFullscreen();case 4:case 9:case 14:e.next=19;break;case 6:if(!s.webkitRequestFullscreen){e.next=11;break}return e.next=9,s.webkitRequestFullscreen();case 11:if(!s.mozRequestFullscreen){e.next=16;break}return e.next=14,s.mozRequestFullscreen();case 16:if(!s.msRequestFullscreen){e.next=19;break}return e.next=19,s.msRequestFullscreen();case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function r(){return(r=(0,i.Z)(c().mark(function e(){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().all([_("/scripts/tinygo_wasm_exec.min.js","tinygo_wasm_exec"),_("/scripts/three.min.js","three")]);case 2:return e.next=4,_("/scripts/OrbitControls.js","three-orbitControls");case 4:k();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return(0,s.useEffect)(function(){"undefined"==typeof Go&&"undefined"==typeof THREE?function(){return r.apply(this,arguments)}():k()},[]),(0,y.jsxs)(j.Z,{children:[(0,y.jsx)(b,{children:"基于Three.js + wasm开发的太阳系动画"}),(0,y.jsxs)(w,{children:["太阳系动画。基于Three.js和wasm开发。",(0,y.jsx)("a",{href:"https://github.com/duan602728596/duan602728596.github.io/tree/dev/solar-system",target:"_blank",rel:"noopener noreferrer",children:"（代码）"})]}),(0,y.jsx)("div",{className:"mb-[16px] text-right",children:(0,y.jsx)(h.ZP,{type:"primary",onClick:function(e){return t.apply(this,arguments)},children:"全屏运行"})}),(0,y.jsx)("div",{ref:n,className:g()("h-[400px]",v().canvasBox),id:"solar"})]})};function N(e){return(0,y.jsxs)(s.Fragment,{children:[(0,y.jsxs)(a(),{children:[(0,y.jsx)("title",{children:"基于Three.js + wasm开发的太阳系动画"}),(0,y.jsx)("meta",{name:"keywords",content:"前端, js, javascript, typescript, three.js, wasm"}),(0,y.jsx)("meta",{name:"description",content:"基于Three.js + wasm开发的太阳系动画"})]}),(0,y.jsx)(Z,{})]})}},39243:function(e,n,t){"use strict";var s=t(19623),r=t(73935),a=t(11163),i=t(81860),o=t(18610),c=t(75162),u=t(6171),l=t(76467),m=t(63791),p=t.n(m),d=t(85893),h=i.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,d.jsxs)("div",{className:p().main,children:[e.goBack?(0,d.jsx)("div",{className:"mb-[16px] text-right",children:(0,d.jsxs)(o.ZP,{onClick:function(e){n.push("/")},children:[(0,d.jsx)(u.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,d.jsx)(l.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,s.Z)(document))==="object"?(0,r.createPortal)((0,d.jsx)(h,{type:"primary",icon:(0,d.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,t){"use strict";t(64043);var s=t(88946),r=t.n(s),a=t(81290),i=t.n(a),o=t(41664),c=t.n(o),u=t(21612),l=t(78957),m=t(83062),p=t(67337),d=t(32958),h=t.n(d),f=t(96808),g=t(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],j=r()(x).call(x,function(e,n){return(0,g.jsx)("li",{className:h().navListItem,children:(0,g.jsx)(c(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,g.jsx)(u.Z.Header,{className:h().antdHeader,children:(0,g.jsxs)("div",{className:h().header,children:[(0,g.jsx)("nav",{className:h().headerLeft,children:(0,g.jsx)("ul",{className:h().navList,children:j})}),(0,g.jsx)("div",{className:h().headerRight,children:(0,g.jsxs)(l.Z,{size:16,children:[(0,g.jsx)(m.Z,{title:"切换网站地址",children:(0,g.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,s=n.hostname,r=/github\.io/.test(s);window.location.href=new(i())(t,"https://duan602728596.".concat(v[r?1:0],"/"))},children:(0,g.jsx)(p.Z,{className:h().switchAddressIcon})})}),(0,g.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,t){"use strict";var s=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,a=e.webpSrc,i=e.src,o=e.alt;return(0,s.jsxs)("picture",{className:n,children:[r&&(0,s.jsx)("source",{srcSet:r,type:"image/avif"}),a&&(0,s.jsx)("source",{srcSet:a,type:"image/webp"}),(0,s.jsx)("img",{className:t,src:i,alt:o})]})}},55147:function(e,n,t){"use strict";var s=t(67294),r=t(31725),a=t(39243),i=t(85893);n.Z=function(e){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},99086:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/solar-system",function(){return t(52845)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},36083:function(e){e.exports={canvasBox:"solarSystem_canvasBox__dZoSl"}},92381:function(e,n,t){e.exports=t(13)},97305:function(e,n,t){"use strict";var s=t(59331);e.exports=s},27154:function(e,n,t){"use strict";t(45887),e.exports=t(5685)},13:function(e,n,t){"use strict";e.exports=t(30934)},30934:function(e,n,t){"use strict";t(26729);var s=t(97305);e.exports=s},45887:function(e,n,t){"use strict";var s=t(74715),r=t(5685);s({global:!0,forced:r.globalThis!==r},{globalThis:r})},26729:function(e,n,t){"use strict";t(45887)},59331:function(e,n,t){"use strict";var s=t(27154);e.exports=s},33938:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(890);function r(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){t(e);return}c.done?n(u):s.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new s(function(s,a){var i=e.apply(n,t);function o(e){r(i,s,a,o,c,"next",e)}function c(e){r(i,s,a,o,c,"throw",e)}o(void 0)})}}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=99086)}),_N_E=e.O()}]);