(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1389],{29254:function(e,t,i){"use strict";var r=i(82109),a=i(14230);r({target:"String",proto:!0,forced:i(43429)("link")},{link:function(e){return a(this,"a","href",e)}})},10152:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var r=i(67294),a=i(9008),l=i.n(a),n=i(22421),s=i(85893);function c(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"收藏夹 - 段昊辰的个人主页"}),(0,s.jsx)("meta",{name:"description",content:"段昊辰的收藏夹"})]}),(0,s.jsx)(n.Z,{type:"favorites"})]})}},54892:function(e,t,i){"use strict";var r=i(19623),a=i(73935),l=i(11163),n=i(35846),s=i(97029),c=i(75162),o=i(37653),h=i(76467),d=i(3744),f=i.n(d),u=i(85893),p=n.Z.BackTop;t.Z=function(e){var t=(0,l.useRouter)();return[(0,u.jsxs)("div",{className:f().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(s.ZP,{onClick:function(e){t.push("/")},children:[(0,u.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,u.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,a.createPortal)((0,u.jsx)(p,{type:"primary",icon:(0,u.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,t,i){"use strict";i(74916);var r=i(88946),a=i.n(r),l=i(81290),n=i.n(l),s=i(41664),c=i.n(s),o=i(97183),h=i(42075),d=i(83062),f=i(67337),u=i(62139),p=i.n(u),m=i(30654),b=i(85893),w=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],g=["github.io","vercel.app"],v=a()(w).call(w,function(e,t){return(0,b.jsx)("li",{className:p().navListItem,children:(0,b.jsx)(c(),{href:e.href,children:e.title})},e.href)});t.Z=function(e){return(0,b.jsx)(o.Z.Header,{className:p().antdHeader,children:(0,b.jsxs)("div",{className:p().header,children:[(0,b.jsx)("nav",{className:p().headerLeft,children:(0,b.jsx)("ul",{className:p().navList,children:v})}),(0,b.jsx)("div",{className:p().headerRight,children:(0,b.jsxs)(h.Z,{size:16,children:[(0,b.jsx)(d.Z,{title:"切换网站地址",children:(0,b.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var t=window.location,i=t.pathname,r=t.hostname,a=/github\.io/.test(r);window.location.href=new(n())(i,"https://duan602728596.".concat(g[a?1:0],"/"))},children:(0,b.jsx)(f.Z,{className:p().switchAddressIcon})})}),(0,b.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,b.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,t,i){"use strict";var r=i(85893);t.Z=function(e){var t=e.className,i=e.imageClassName,a=e.avifSrc,l=e.webpSrc,n=e.src,s=e.alt;return(0,r.jsxs)("picture",{className:t,children:[a&&(0,r.jsx)("source",{srcSet:a,type:"image/avif"}),l&&(0,r.jsx)("source",{srcSet:l,type:"image/webp"}),(0,r.jsx)("img",{className:i,src:n,alt:s})]})}},22421:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var r,a=i(88946),l=i.n(a),n=i(67552),s=i.n(n),c=i(67294);i(29254);var o=i(41664),h=i.n(o),d=i(69618),f=i(94690),u=i.n(f),p=i(85893),m=function(e){var t=e.data;return(0,p.jsx)(d.Z,{className:u().list,size:"small",dataSource:void 0===t?[]:t,renderItem:function(e){return(0,p.jsx)(d.Z.Item,{className:e.blank?u().blank:void 0,children:e.blank?(0,p.jsx)("a",{className:u().blankLink,href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.title}):(0,p.jsx)(h(),{className:u().link,href:e.href,children:e.title})},e.href)},bordered:!0})},b=i(34341),w=i(54892),g=JSON.parse('{"a":[{"title":"前端技术","children":[{"href":"/article/web/queue-in-js","title":"用JS实现多个任务并行执行的队列"},{"href":"/article/web/js-copy","title":"JavaScript实现复制功能"},{"href":"/article/web/dom-to-image","title":"用JavaScript将DOM绘制成图片"},{"href":"/article/web/solar-system","title":"基于Three.js + wasm开发的太阳系动画"},{"href":"/article/web/static-resource-in-typescript","title":"如何在typescript内引入静态资源"},{"href":"/article/web/linear-gradient-animate","title":"使用SVG，让渐变的背景也能动起来"},{"href":"/article/web/onion-model","title":"洋葱模型的简单实现"},{"href":"/article/web/how-to-create-async-function","title":"如何通过类似\\"new Function\\"创建异步函数"},{"href":"/article/web/number-is-timestamp","title":"判断一串数字是有效的时间戳"},{"href":"/article/web/css-img-centered","title":"使用css让图片自适应居中"},{"href":"/article/web/object-prototypes","title":"【JavaScript基础】对象原型"},{"href":"/article/web/browser-event-loop","title":"【JavaScript基础】浏览器事件循环"},{"href":"/article/web/how-to-use-graphql","title":"如何使用GraphQL"},{"href":"/article/web/implement-call-and-apply","title":"实现call和apply方法"},{"href":"/article/web/browser-screen-sharing","title":"浏览器中实现屏幕共享功能"},{"href":"/article/web/file-system-access-api","title":"使用File System Access API访问文件"},{"href":"/article/web/trigger-event","title":"在浏览器中触发事件"},{"href":"/article/web/webrtc","title":"浏览器中使用WebRTC进行通信"},{"href":"/article/web/mix-image","title":"使用CSS的clip-path属性实现图片探照灯效果"},{"href":"/article/web/special-effects-implemented-by-css","title":"使用CSS动画实现各种特效"}]},{"title":"React","children":[{"href":"/article/react/multiple-versions-of-react","title":"如何使用多版本的React"},{"href":"/article/react/react18-get-data-with-suspense","title":"在React18中，配合Suspense来获取数据"},{"href":"/article/react/useSyncExternalStore-component-communication","title":"使用useSyncExternalStore实现组件通信"},{"href":"/article/react/react-fast-refresh","title":"如何使用React Fast Refresh"}]},{"title":"Flutter","children":[{"href":"/article/flutter/complex-style-in-text-field","title":"在TextField中实现复杂的样式"},{"href":"/article/flutter/dio-upload-file","title":"使用dio上传文件"},{"href":"/article/flutter/get-image-size","title":"在Flutter的开发中，如何获取图片的尺寸"},{"href":"/article/flutter/components-commonly-used-in-flutter","title":"Flutter常用的组件"}]},{"title":"HTTP","children":[{"href":"/article/http/http-cache","title":"HTTP缓存策略"},{"href":"/article/http/server-sent-events","title":"使用Server-sent events技术，与浏览器单向通信"},{"href":"/article/http/node-native-websocket","title":"Nodejs原生实现WebSocket服务"}]},{"title":"算法和数据结构","children":[{"href":"/article/algorithms-and-data-structures/palindrome","title":"实现一个回文算法"},{"href":"/article/algorithms-and-data-structures/hashmap","title":"数据结构之HashMap"}]},{"title":"Git","children":[{"href":"/article/git/git-common-commands","title":"Git的一些常用命令"}]},{"title":"操作系统","children":[{"href":"/article/operating-system/win11-right-click-menu-restore-to-win10","title":"将Win11的右键菜单还原到Win10的样式"}]},{"title":"视频技术","children":[{"href":"/article/media/par-dar-sar-of-video","title":"视频参数PAR、DAR、SAR的区别"},{"href":"/article/media/ffmpeg-command","title":"FFmpeg常用的命令"}]}]}'),v=JSON.parse('{"a":[{"title":"前端技术","children":[{"href":"https://blog.bitsrc.io/10-useful-web-apis-for-2020-8e43905cbdc5","title":"2020年10个有用的Web API (10-useful-web-apis-for-2020)"},{"href":"https://juejin.cn/post/7033615049721806879","title":"怎样判断面试者是否有扎实的前端基础？"},{"href":"https://css-speedrun.netlify.app/","title":"CSS测验"},{"href":"https://www.w3cschool.cn/jdgasx/","title":"前后端分离的思考与实践"},{"href":"https://zhuanlan.zhihu.com/p/483199541","title":"2022年的CSS"},{"href":"https://q.shanyue.tech/","title":"互联网大厂面试每日一题"},{"href":"https://blog.inkdrop.app/how-to-make-your-electron-app-launch-1000ms-faster-32ce1e0bb52c","title":"How to make your Electron app launch 1,000ms faster"}]},{"title":"Web3.0","children":[{"href":"https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek","title":"Web3 DApp 最佳编程实践指南"}]},{"title":"工具网站","children":[{"href":"https://fonts.google.com/icons","title":"谷歌图标搜索"},{"href":"https://copilot.github.com/","title":"Github Copilot"},{"href":"https://carbon.now.sh/","title":"Carbon"}]},{"title":"算法和数据结构","children":[{"href":"https://jelly.jd.com/article/60c88cad22bc900171d19fbd","title":"实现SLIC算法生成像素画"}]},{"title":"操作系统","children":[{"href":"https://pawelurbanek.com/macos-free-disk-space","title":"如何释放 MacBook 的磁盘空间 (macos-free-disk-space)"},{"href":"https://gowa.club/macOS/macOS的networksetup命令来管理网络.html","title":"macOS的networksetup命令来管理网络"},{"href":"https://windowsreport.com/powershell-run-scripts-disabled/","title":"FIX: PowerShell Running scripts is disabled on this system"}]},{"title":"云服务","children":[{"href":"https://fauna.com/","title":"fauna - 作为云API交付的分布式文档关系数据库"},{"href":"https://imgur.com/","title":"Imgur"},{"href":"https://www.loginradius.com/","title":"LoginRadius - No-code Customer IAM Platform"},{"href":"https://auth0.com/","title":"Auth0 - Auth0是一个易于实现、适应性强的认证和授权平台"},{"href":"https://xirsys.com/","title":"Xirsys - TURN Server Cloud"},{"href":"https://pusher.com/","title":"Pusher"},{"href":"https://www.photopea.com/","title":"Photopea | Online Photo Editor"},{"href":"https://logomakerr.ai/","title":"Logomakerr - Create a new logo with AI"},{"href":"https://www.worldtimebuddy.com/","title":"World time buddy"}]}]}'),x={articles:g.a,favorites:l()(r=v.a).call(r,function(e){var t;return s()(e,{children:l()(t=e.children).call(t,function(e){return s()(e,{blank:!0})})})})},_=function(e){var t,i=e.type;return(0,p.jsxs)(c.Fragment,{children:[(0,p.jsx)(b.Z,{}),(0,p.jsx)(w.Z,{goToTop:!0,children:l()(t=x[void 0===i?"articles":i]).call(t,function(e,t){return[(0,p.jsx)("h1",{className:"text-[18px]",children:e.title},"".concat(e.title,"-title")),(0,p.jsx)(m,{data:e.children},"".concat(e.title,"-article"))]})})]})}},37995:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return i(10152)}])},3744:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},94690:function(e){e.exports={blank:"articleLinks_blank__iau2E",blankLink:"articleLinks_blankLink__PKSom",link:"articleLinks_link__tZVud",list:"articleLinks_list__5P8eB"}}},function(e){e.O(0,[3576,7467,9166,3791,223,9618,9774,2888,179],function(){return e(e.s=37995)}),_N_E=e.O()}]);