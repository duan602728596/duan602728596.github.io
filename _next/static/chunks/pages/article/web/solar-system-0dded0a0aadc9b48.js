(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5933],{99086:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/solar-system",function(){return n(20)}])},20:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return v}});var t=n(85893),a=n(67294),i=n(9008),r=n.n(i),o=n(76315),l=n(10932),c=n(93967),m=n.n(c),u=n(36083),d=n.n(u),p=n(30673),h=n(39182),g=function(e,s){if(!document.getElementById(s))return new Promise((n,t)=>{let a=document.createElement("script");a.addEventListener("load",function e(){n(),a.removeEventListener("load",e),a=null}),a.id=s,a.src=e,a.dataset.loadType="manual",document.head.appendChild(a)})};let{Title:x,Paragraph:f}=o.default;async function j(){let e=new Go,s=await WebAssembly.instantiateStreaming(fetch("/scripts/solar-system.wasm"),e.importObject);e.run(s.instance);let{__SOLAR_SYSTEM__:n}=globalThis,t=[{name:"mercury",map:"/images/solar-system/shuixing.jpg",r:1,position:{x:0,y:0,z:70}},{name:"venus",map:"/images/solar-system/jinxing.jpg",r:2,position:{x:0,y:0,z:84}},{name:"earth",map:"/images/solar-system/diqiu.jpg",r:4,position:{x:0,y:0,z:110}},{name:"mars",map:"/images/solar-system/huoxing.jpg",r:5,position:{x:0,y:0,z:140}},{name:"jupiter",map:"/images/solar-system/muxing.jpg",r:17,position:{x:0,y:0,z:220}},{name:"saturn",map:"/images/solar-system/tuxing.jpg",r:11,position:{x:0,y:0,z:280}},{name:"uranus",map:"/images/solar-system/tianwangxing.jpg",r:9,position:{x:0,y:0,z:350}},{name:"neptune",map:"/images/solar-system/haiwangxing.jpg",r:6,position:{x:0,y:0,z:400}}],a={sun:{material:"/images/solar-system/taiyang.jpg"},planets:t,rings:[{name:"saturnRing",father:"saturn",map:"/images/solar-system/tuxing_huan.jpg",r:{min:14,max:22},rotation:{x:.5,y:0,z:0}},{name:"uranusRing",father:"uranus",map:"/images/solar-system/tianwangxing_huan.jpg",r:{min:10,max:12},rotation:{x:0,y:0,z:.3}}],rotations:[{name:"sun",rot:.01,rev:0,deg:0,l:0},{name:"mercury",rot:.1,rev:.1,deg:0,l:t[0].position.z},{name:"venus",rot:.05,rev:.07,deg:0,l:t[1].position.z},{name:"earth",rot:.05,rev:.03,deg:0,l:t[2].position.z},{name:"mars",rot:.03,rev:.01,deg:0,l:t[3].position.z},{name:"jupiter",rot:.003,rev:.002,deg:0,l:t[4].position.z},{name:"saturn",rot:.01,rev:9e-4,deg:0,l:t[5].position.z},{name:"saturnRing",rot:.01,rev:9e-4,deg:0,l:t[5].position.z},{name:"uranus",rot:.005,rev:5e-4,deg:0,l:t[6].position.z},{name:"uranusRing",rot:.005,rev:5e-4,deg:0,l:t[6].position.z},{name:"neptune",rot:.003,rev:3e-4,deg:0,l:t[7].position.z}],bg:["/images/solar-system/bg0.jpg","/images/solar-system/bg1.jpg"]};n.SolarSystem(THREE,"solar",a)}globalThis.__SOLAR_SYSTEM__={};var _=function(e){let s=(0,a.useRef)(null);async function n(e){let n=s.current;n.requestFullscreen?await n.requestFullscreen():n.webkitRequestFullscreen?await n.webkitRequestFullscreen():n.mozRequestFullscreen?await n.mozRequestFullscreen():n.msRequestFullscreen&&await n.msRequestFullscreen()}async function i(){await Promise.all([g("/scripts/tinygo_wasm_exec.min.js","tinygo_wasm_exec"),g("/scripts/three.min.js","three")]),await g("/scripts/OrbitControls.js","three-orbitControls"),j()}return(0,a.useEffect)(function(){"undefined"==typeof Go&&"undefined"==typeof THREE?i():j()},[]),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(x,{children:"基于Three.js + wasm开发的太阳系动画"}),(0,t.jsxs)(f,{children:["太阳系动画。基于Three.js和wasm开发。",(0,t.jsx)(h.Z,{href:"https://github.com/duan602728596/duan602728596.github.io/tree/dev/solar-system",children:"（代码）"})]}),(0,t.jsx)("div",{className:"mb-[16px] text-right",children:(0,t.jsx)(l.ZP,{type:"primary",onClick:n,children:"全屏运行"})}),(0,t.jsx)("div",{ref:s,className:m()("h-[400px]",d().canvasBox),id:"solar"})]})};function v(e){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"基于Three.js + wasm开发的太阳系动画"}),(0,t.jsx)("meta",{name:"keywords",content:"前端, js, javascript, typescript, three.js, wasm"}),(0,t.jsx)("meta",{name:"description",content:"基于Three.js + wasm开发的太阳系动画"})]}),(0,t.jsx)(_,{})]})}},39182:function(e,s,n){"use strict";var t=n(85893),a=n(45697),i=n.n(a);function r(e){let{href:s,className:n,children:a}=e;return(0,t.jsx)("a",{className:n,href:s,target:"_blank",rel:"noopener noreferrer",children:a})}r.propTypes={href:i().string.isRequired,className:i().string,children:i().node.isRequired},s.Z=r},99388:function(e,s,n){"use strict";var t=n(85893),a=n(73935),i=n(45697),r=n.n(i),o=n(11163),l=n(81860),c=n(10932),m=n(75162),u=n(6171),d=n(76467),p=n(63791),h=n.n(p);let{BackTop:g}=l.default;function x(e){let s=(0,o.useRouter)();return[(0,t.jsxs)("div",{className:h().main,children:[e.goBack?(0,t.jsx)("div",{className:"mb-[16px] text-right",children:(0,t.jsxs)(c.ZP,{onClick:function(e){s.push("/")},children:[(0,t.jsx)(u.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,t.jsx)(d.default,{children:(null==e?void 0:e.goToTop)&&"object"==typeof document?(0,a.createPortal)((0,t.jsx)(g,{type:"primary",icon:(0,t.jsx)(m.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}x.propTypes={children:r().node,goToTop:r().bool,goBack:r().bool},s.Z=x},43221:function(e,s,n){"use strict";var t=n(85893),a=n(41664),i=n.n(a),r=n(21612),o=n(78957),l=n(83062),c=n(67337),m=n(32958),u=n.n(m),d=n(90791),p=n(39182);let h=["github.io","vercel.app"],g=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}].map((e,s)=>(0,t.jsx)("li",{className:u().navListItem,children:(0,t.jsx)(i(),{href:e.href,children:e.title})},e.href));s.Z=function(e){return(0,t.jsx)(r.Z.Header,{className:u().antdHeader,children:(0,t.jsxs)("div",{className:u().header,children:[(0,t.jsx)("nav",{className:u().headerLeft,children:(0,t.jsx)("ul",{className:u().navList,children:g})}),(0,t.jsx)("div",{className:u().headerRight,children:(0,t.jsxs)(o.Z,{size:16,children:[(0,t.jsx)(l.Z,{title:"切换网站地址",children:(0,t.jsx)("a",{className:u().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){let{pathname:s,hostname:n}=window.location,t=/github\.io/.test(n);window.location.href=new URL(s,"https://duan602728596.".concat(h[t?1:0],"/"))},children:(0,t.jsx)(c.Z,{className:u().switchAddressIcon})})}),(0,t.jsx)(p.Z,{className:u().githubLink,href:"https://github.com/duan602728596",children:(0,t.jsx)(d.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90791:function(e,s,n){"use strict";var t=n(85893),a=n(45697),i=n.n(a);function r(e){let{className:s,imageClassName:n,avifSrc:a,webpSrc:i,src:r,alt:o}=e;return(0,t.jsxs)("picture",{className:s,children:[a&&(0,t.jsx)("source",{srcSet:a,type:"image/avif"}),i&&(0,t.jsx)("source",{srcSet:i,type:"image/webp"}),(0,t.jsx)("img",{className:n,src:r,alt:o})]})}r.propTypes={className:i().string,imageClassName:i().string,avifSrc:i().string,webpSrc:i().string,src:i().string},s.Z=r},30673:function(e,s,n){"use strict";var t=n(85893),a=n(67294),i=n(45697),r=n.n(i),o=n(43221),l=n(99388);function c(e){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(o.Z,{}),(0,t.jsx)(l.Z,{goToTop:!0,goBack:!0,children:e.children})]})}c.propTypes={children:r().node},s.Z=c},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},36083:function(e){e.exports={canvasBox:"solarSystem_canvasBox__dZoSl"}}},function(e){e.O(0,[932,1447,4530,2888,9774,179],function(){return e(e.s=99086)}),_N_E=e.O()}]);