(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5933],{5023:function(e,n,t){var s=t(72369);e.exports=s},91031:function(e,n,t){t(52595),e.exports=t(21899)},30888:function(e,n,t){e.exports=t(51403)},51403:function(e,n,t){t(9668);var s=t(5023);e.exports=s},52595:function(e,n,t){var s=t(76887),r=t(21899);s({global:!0,forced:r.globalThis!==r},{globalThis:r})},9668:function(e,n,t){t(52595)},72369:function(e,n,t){var s=t(91031);e.exports=s},46441:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var s=t(67294),r=t(9008),a=t.n(r),i=(t(54633),t(72806)),o=t(33938),c=(t(71214),t(63534)),u=(t(66992),t(41539),t(88674),t(78783),t(33948),t(30222)),l=t.n(u),m=t(92381),d=t.n(m),p=t(35820),h=t.n(p),f=t(94184),g=t.n(f),x=t(29062),v=t.n(x),j=t(9991);var _=function(e,n){if(!document.getElementById(n))return new(h())((function(t,s){var r=document.createElement("script");r.addEventListener("load",(function e(){t(),r.removeEventListener("load",e),r=null})),r.id=n,r.src=e,r.dataset.loadType="manual",document.head.appendChild(r)}))},y=t(85893),b=c.Z.Title,w=c.Z.Paragraph;function k(){return N.apply(this,arguments)}function N(){return(N=(0,o.Z)(l().mark((function e(){var n,t,s,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Go,e.next=3,WebAssembly.instantiateStreaming(fetch("/scripts/solar-system.wasm"),n.importObject);case 3:t=e.sent,n.run(t.instance),s=d().__SOLAR_SYSTEM__,a={sun:{material:"/images/solar-system/taiyang.jpg"},planets:r=[{name:"mercury",map:"/images/solar-system/shuixing.jpg",r:1,position:{x:0,y:0,z:70}},{name:"venus",map:"/images/solar-system/jinxing.jpg",r:2,position:{x:0,y:0,z:84}},{name:"earth",map:"/images/solar-system/diqiu.jpg",r:4,position:{x:0,y:0,z:110}},{name:"mars",map:"/images/solar-system/huoxing.jpg",r:5,position:{x:0,y:0,z:140}},{name:"jupiter",map:"/images/solar-system/muxing.jpg",r:17,position:{x:0,y:0,z:220}},{name:"saturn",map:"/images/solar-system/tuxing.jpg",r:11,position:{x:0,y:0,z:280}},{name:"uranus",map:"/images/solar-system/tianwangxing.jpg",r:9,position:{x:0,y:0,z:350}},{name:"neptune",map:"/images/solar-system/haiwangxing.jpg",r:6,position:{x:0,y:0,z:400}}],rings:[{name:"saturnRing",father:"saturn",map:"/images/solar-system/tuxing_huan.jpg",r:{min:14,max:22},rotation:{x:.5,y:0,z:0}},{name:"uranusRing",father:"uranus",map:"/images/solar-system/tianwangxing_huan.jpg",r:{min:10,max:12},rotation:{x:0,y:0,z:.3}}],rotations:[{name:"sun",rot:.01,rev:0,deg:0,l:0},{name:"mercury",rot:.1,rev:.1,deg:0,l:r[0].position.z},{name:"venus",rot:.05,rev:.07,deg:0,l:r[1].position.z},{name:"earth",rot:.05,rev:.03,deg:0,l:r[2].position.z},{name:"mars",rot:.03,rev:.01,deg:0,l:r[3].position.z},{name:"jupiter",rot:.003,rev:.002,deg:0,l:r[4].position.z},{name:"saturn",rot:.01,rev:9e-4,deg:0,l:r[5].position.z},{name:"saturnRing",rot:.01,rev:9e-4,deg:0,l:r[5].position.z},{name:"uranus",rot:.005,rev:5e-4,deg:0,l:r[6].position.z},{name:"uranusRing",rot:.005,rev:5e-4,deg:0,l:r[6].position.z},{name:"neptune",rot:.003,rev:3e-4,deg:0,l:r[7].position.z}],bg:["/images/solar-system/bg0.jpg","/images/solar-system/bg1.jpg"]},s.SolarSystem(THREE,"solar",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d().__SOLAR_SYSTEM__={};var T=function(e){var n=(0,s.useRef)(null);function t(){return(t=(0,o.Z)(l().mark((function e(t){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=n.current).requestFullscreen){e.next=6;break}return e.next=4,s.requestFullscreen();case 4:case 9:case 14:e.next=19;break;case 6:if(!s.webkitRequestFullscreen){e.next=11;break}return e.next=9,s.webkitRequestFullscreen();case 11:if(!s.mozRequestFullscreen){e.next=16;break}return e.next=14,s.mozRequestFullscreen();case 16:if(!s.msRequestFullscreen){e.next=19;break}return e.next=19,s.msRequestFullscreen();case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().all([_("/scripts/tinygo_wasm_exec.min.js","tinygo_wasm_exec"),_("/scripts/three.min.js","three")]);case 2:return e.next=4,_("/scripts/OrbitControls.js","three-orbitControls");case 4:k();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){"undefined"===typeof Go&&"undefined"===typeof THREE?function(){r.apply(this,arguments)}():k()}),[]),(0,y.jsxs)(j.Z,{children:[(0,y.jsx)(b,{children:"\u57fa\u4e8eThree.js + wasm\u5f00\u53d1\u7684\u592a\u9633\u7cfb\u52a8\u753b"}),(0,y.jsxs)(w,{children:["\u592a\u9633\u7cfb\u52a8\u753b\u3002\u57fa\u4e8eThree.js\u548cwasm\u5f00\u53d1\u3002",(0,y.jsx)("a",{href:"https://github.com/duan602728596/duan602728596.github.io/tree/dev/solar-system",target:"_blank",rel:"noopener noreferrer",children:"\uff08\u4ee3\u7801\uff09"})]}),(0,y.jsx)("div",{className:"mb-[16px] text-right",children:(0,y.jsx)(i.Z,{type:"primary",onClick:function(e){return t.apply(this,arguments)},children:"\u5168\u5c4f\u8fd0\u884c"})}),(0,y.jsx)("div",{ref:n,className:g()("h-[400px]",v().canvasBox),id:"solar"})]})};function z(e){return(0,y.jsxs)(s.Fragment,{children:[(0,y.jsxs)(a(),{children:[(0,y.jsx)("title",{children:"\u57fa\u4e8eThree.js + wasm\u5f00\u53d1\u7684\u592a\u9633\u7cfb\u52a8\u753b"}),(0,y.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, js, javascript, typescript, three.js, wasm"}),(0,y.jsx)("meta",{name:"description",content:"\u57fa\u4e8eThree.js + wasm\u5f00\u53d1\u7684\u592a\u9633\u7cfb\u52a8\u753b"})]}),(0,y.jsx)(T,{})]})}},39748:function(e,n,t){"use strict";t(54633);var s=t(72806),r=(t(56091),t(53308)),a=t(19623),i=t(73935),o=t(11163),c=t(6171),u=t(76467),l=t(97680),m=t.n(l),d=t(85893);n.Z=function(e){var n=(0,o.useRouter)();return[(0,d.jsxs)("div",{className:m().main,children:[e.goBack?(0,d.jsx)("div",{className:"mb-[16px] text-right",children:(0,d.jsxs)(s.Z,{onClick:function(e){n.push("/")},children:[(0,d.jsx)(c.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,d.jsx)(u.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,a.Z)(document))?(0,i.createPortal)((0,d.jsx)(r.Z,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,d.jsx)("div",{className:m().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(86230);var s=t(97183),r=(t(2042),t(26713)),a=(t(20559),t(84908)),i=(t(74916),t(88946)),o=t.n(i),c=t(81290),u=t.n(c),l=t(41664),m=t.n(l),d=t(67337),p=t(56392),h=t.n(p),f=t(2013),g=t(85893),x=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],v=["github.io","vercel.app"],j=o()(x).call(x,(function(e,n){return(0,g.jsx)("li",{className:h().navListItem,children:(0,g.jsx)(m(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,g.jsx)(s.Z.Header,{className:h().antdHeader,children:(0,g.jsxs)("div",{className:h().header,children:[(0,g.jsx)("nav",{className:h().headerLeft,children:(0,g.jsx)("ul",{className:h().navList,children:j})}),(0,g.jsx)("div",{className:h().headerRight,children:(0,g.jsxs)(r.Z,{size:16,children:[(0,g.jsx)(a.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,g.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,t=n.pathname,s=n.hostname,r=/github\.io/.test(s);window.location.href=new(u())(t,"https://duan602728596.".concat(v[r?1:0],"/"))},children:(0,g.jsx)(d.Z,{className:h().switchAddressIcon})})}),(0,g.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var s=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,a=e.webpSrc,i=e.src,o=e.alt;return(0,s.jsxs)("picture",{className:n,children:[r&&(0,s.jsx)("source",{srcSet:r,type:"image/avif"}),a&&(0,s.jsx)("source",{srcSet:a,type:"image/webp"}),(0,s.jsx)("img",{className:t,src:i,alt:o})]})}},9991:function(e,n,t){"use strict";var s=t(67294),r=t(32307),a=t(39748),i=t(85893);n.Z=function(e){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},99086:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/solar-system",function(){return t(46441)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}},29062:function(e){e.exports={canvasBox:"solarSystem_canvasBox__2jI7k"}},92381:function(e,n,t){e.exports=t(30888)},33938:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(35820);function r(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(l){return void t(l)}c.done?n(u):s.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new s((function(s,a){var i=e.apply(n,t);function o(e){r(i,s,a,o,c,"next",e)}function c(e){r(i,s,a,o,c,"throw",e)}o(void 0)}))}}}},function(e){e.O(0,[2806,542,7161,9774,2888,179],(function(){return n=99086,e(e.s=n);var n}));var n=e.O();_N_E=n}]);