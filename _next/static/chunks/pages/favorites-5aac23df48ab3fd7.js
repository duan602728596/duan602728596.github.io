(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1389],{37995:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return i(15784)}])},15784:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var r=i(85893),l=i(67294),a=i(9008),s=i.n(a),n=i(64142);function c(e){return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"收藏夹 - 段昊辰的个人主页"}),(0,r.jsx)("meta",{name:"description",content:"段昊辰的收藏夹"})]}),(0,r.jsx)(n.Z,{type:"favorites"})]})}},39182:function(e,t,i){"use strict";var r=i(85893),l=i(45697),a=i.n(l);function s(e){let{href:t,className:i,children:l}=e;return(0,r.jsx)("a",{className:i,href:t,target:"_blank",rel:"noopener noreferrer",children:l})}s.propTypes={href:a().string.isRequired,className:a().string,children:a().node.isRequired},t.Z=s},99388:function(e,t,i){"use strict";var r=i(85893),l=i(73935),a=i(45697),s=i.n(a),n=i(11163),c=i(81860),o=i(10932),h=i(75162),d=i(6171),p=i(76467),f=i(63791),u=i.n(f);let{BackTop:m}=c.default;function b(e){let t=(0,n.useRouter)();return[(0,r.jsxs)("div",{className:u().main,children:[e.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(o.ZP,{onClick:function(e){t.push("/")},children:[(0,r.jsx)(d.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,r.jsx)(p.default,{children:(null==e?void 0:e.goToTop)&&"object"==typeof document?(0,l.createPortal)((0,r.jsx)(m,{type:"primary",icon:(0,r.jsx)(h.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}b.propTypes={children:s().node,goToTop:s().bool,goBack:s().bool},t.Z=b},43221:function(e,t,i){"use strict";var r=i(85893),l=i(41664),a=i.n(l),s=i(21612),n=i(78957),c=i(83062),o=i(67337),h=i(32958),d=i.n(h),p=i(90791),f=i(39182);let u=["github.io","vercel.app"],m=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}].map((e,t)=>(0,r.jsx)("li",{className:d().navListItem,children:(0,r.jsx)(a(),{href:e.href,children:e.title})},e.href));t.Z=function(e){return(0,r.jsx)(s.Z.Header,{className:d().antdHeader,children:(0,r.jsxs)("div",{className:d().header,children:[(0,r.jsx)("nav",{className:d().headerLeft,children:(0,r.jsx)("ul",{className:d().navList,children:m})}),(0,r.jsx)("div",{className:d().headerRight,children:(0,r.jsxs)(n.Z,{size:16,children:[(0,r.jsx)(c.Z,{title:"切换网站地址",children:(0,r.jsx)("a",{className:d().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){let{pathname:t,hostname:i}=window.location,r=/github\.io/.test(i);window.location.href=new URL(t,"https://duan602728596.".concat(u[r?1:0],"/"))},children:(0,r.jsx)(o.Z,{className:d().switchAddressIcon})})}),(0,r.jsx)(f.Z,{className:d().githubLink,href:"https://github.com/duan602728596",children:(0,r.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90791:function(e,t,i){"use strict";var r=i(85893),l=i(45697),a=i.n(l);function s(e){let{className:t,imageClassName:i,avifSrc:l,webpSrc:a,src:s,alt:n}=e;return(0,r.jsxs)("picture",{className:t,children:[l&&(0,r.jsx)("source",{srcSet:l,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:i,src:s,alt:n})]})}s.propTypes={className:a().string,imageClassName:a().string,avifSrc:a().string,webpSrc:a().string,src:a().string},t.Z=s},64142:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var r=i(85893),l=i(67294),a=i(45697),s=i.n(a),n=i(41664),c=i.n(n),o=i(69618),h=i(79755),d=i.n(h),p=i(39182);function f(e){let{data:t=[]}=e;return(0,r.jsx)(o.Z,{className:d().list,size:"small",dataSource:t,renderItem:function(e){return(0,r.jsx)(o.Z.Item,{className:e.blank?d().blank:void 0,children:e.blank?(0,r.jsx)(p.Z,{className:d().blankLink,href:e.href,children:e.title}):(0,r.jsx)(c(),{className:d().link,href:e.href,children:e.title})},e.href)},bordered:!0})}f.propTypes={data:s().array};var u=i(43221),m=i(99388),b=JSON.parse('{"a":[{"title":"前端技术","children":[{"href":"/article/web/queue-in-js","title":"用JS实现多个任务并行执行的队列"},{"href":"/article/web/js-copy","title":"JavaScript实现复制功能"},{"href":"/article/web/dom-to-image","title":"用JavaScript将DOM绘制成图片"},{"href":"/article/web/solar-system","title":"基于Three.js + wasm开发的太阳系动画"},{"href":"/article/web/static-resource-in-typescript","title":"如何在typescript内引入静态资源"},{"href":"/article/web/linear-gradient-animate","title":"使用SVG，让渐变的背景也能动起来"},{"href":"/article/web/onion-model","title":"洋葱模型的简单实现"},{"href":"/article/web/how-to-create-async-function","title":"如何通过类似\\"new Function\\"创建异步函数"},{"href":"/article/web/number-is-timestamp","title":"判断一串数字是有效的时间戳"},{"href":"/article/web/css-img-centered","title":"使用css让图片自适应居中"},{"href":"/article/web/object-prototypes","title":"【JavaScript基础】对象原型"},{"href":"/article/web/browser-event-loop","title":"【JavaScript基础】浏览器事件循环"},{"href":"/article/web/how-to-use-graphql","title":"如何使用GraphQL"},{"href":"/article/web/implement-call-and-apply","title":"实现call和apply方法"},{"href":"/article/web/browser-screen-sharing","title":"浏览器中实现屏幕共享功能"},{"href":"/article/web/file-system-access-api","title":"使用File System Access API访问文件"},{"href":"/article/web/trigger-event","title":"在浏览器中触发事件"},{"href":"/article/web/webrtc","title":"浏览器中使用WebRTC进行通信"},{"href":"/article/web/mix-image","title":"使用CSS的clip-path属性实现图片探照灯效果"},{"href":"/article/web/special-effects-implemented-by-css","title":"使用CSS动画实现各种特效"}]},{"title":"React","children":[{"href":"/article/react/multiple-versions-of-react","title":"如何使用多版本的React"},{"href":"/article/react/react18-get-data-with-suspense","title":"在React18中，配合Suspense来获取数据"},{"href":"/article/react/useSyncExternalStore-component-communication","title":"使用useSyncExternalStore实现组件通信"},{"href":"/article/react/react-fast-refresh","title":"如何使用React Fast Refresh"}]},{"title":"Flutter","children":[{"href":"/article/flutter/complex-style-in-text-field","title":"在TextField中实现复杂的样式"},{"href":"/article/flutter/dio-upload-file","title":"使用dio上传文件"},{"href":"/article/flutter/get-image-size","title":"在Flutter的开发中，如何获取图片的尺寸"},{"href":"/article/flutter/components-commonly-used-in-flutter","title":"Flutter常用的组件"}]},{"title":"HTTP","children":[{"href":"/article/http/http-cache","title":"HTTP缓存策略"},{"href":"/article/http/server-sent-events","title":"使用Server-sent events技术，与浏览器单向通信"},{"href":"/article/http/node-native-websocket","title":"Nodejs原生实现WebSocket服务"}]},{"title":"算法和数据结构","children":[{"href":"/article/algorithms-and-data-structures/palindrome","title":"实现一个回文算法"},{"href":"/article/algorithms-and-data-structures/hashmap","title":"数据结构之HashMap"}]},{"title":"Git","children":[{"href":"/article/git/git-common-commands","title":"Git的一些常用命令"}]},{"title":"操作系统","children":[{"href":"/article/operating-system/win11-right-click-menu-restore-to-win10","title":"将Win11的右键菜单还原到Win10的样式"}]},{"title":"视频技术","children":[{"href":"/article/media/par-dar-sar-of-video","title":"视频参数PAR、DAR、SAR的区别"},{"href":"/article/media/ffmpeg-command","title":"FFmpeg常用的命令"},{"href":"/article/media/extract-accompaniment-using-spleeter","title":"使用Spleeter提取伴奏"}]}]}'),w=JSON.parse('{"a":[{"title":"前端技术","children":[{"href":"https://blog.bitsrc.io/10-useful-web-apis-for-2020-8e43905cbdc5","title":"2020年10个有用的Web API (10-useful-web-apis-for-2020)"},{"href":"https://juejin.cn/post/7033615049721806879","title":"怎样判断面试者是否有扎实的前端基础？"},{"href":"https://css-speedrun.netlify.app/","title":"CSS测验"},{"href":"https://www.w3cschool.cn/jdgasx/","title":"前后端分离的思考与实践"},{"href":"https://zhuanlan.zhihu.com/p/483199541","title":"2022年的CSS"},{"href":"https://q.shanyue.tech/","title":"互联网大厂面试每日一题"},{"href":"https://blog.inkdrop.app/how-to-make-your-electron-app-launch-1000ms-faster-32ce1e0bb52c","title":"How to make your Electron app launch 1,000ms faster"},{"href":"https://css-loaders.com/","title":"CSS loaders - The Biggest Collection of Loading Animations"},{"href":"https://developer.chrome.com/blog/css-wrapped-2023?hl=zh-cn#live-demo-scroll-timeline","title":"CSS 封装：2023 年！"}]},{"title":"Web3.0","children":[{"href":"https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek","title":"Web3 DApp 最佳编程实践指南"}]},{"title":"工具网站","children":[{"href":"https://fonts.google.com/icons","title":"谷歌图标搜索"},{"href":"https://copilot.github.com/","title":"Github Copilot"},{"href":"https://carbon.now.sh/","title":"Carbon"}]},{"title":"算法和数据结构","children":[{"href":"https://jelly.jd.com/article/60c88cad22bc900171d19fbd","title":"实现SLIC算法生成像素画"}]},{"title":"操作系统","children":[{"href":"https://pawelurbanek.com/macos-free-disk-space","title":"如何释放 MacBook 的磁盘空间 (macos-free-disk-space)"},{"href":"https://gowa.club/macOS/macOS的networksetup命令来管理网络.html","title":"macOS的networksetup命令来管理网络"},{"href":"https://windowsreport.com/powershell-run-scripts-disabled/","title":"FIX: PowerShell Running scripts is disabled on this system"}]},{"title":"云服务","children":[{"href":"https://fauna.com/","title":"fauna - 作为云API交付的分布式文档关系数据库"},{"href":"https://imgur.com/","title":"Imgur"},{"href":"https://www.loginradius.com/","title":"LoginRadius - No-code Customer IAM Platform"},{"href":"https://auth0.com/","title":"Auth0 - Auth0是一个易于实现、适应性强的认证和授权平台"},{"href":"https://xirsys.com/","title":"Xirsys - TURN Server Cloud"},{"href":"https://pusher.com/","title":"Pusher"},{"href":"https://www.photopea.com/","title":"Photopea | Online Photo Editor"},{"href":"https://logomakerr.ai/","title":"Logomakerr - Create a new logo with AI"},{"href":"https://www.worldtimebuddy.com/","title":"World time buddy"}]}]}');let g={articles:b.a,favorites:w.a.map(e=>Object.assign(e,{children:e.children.map(e=>Object.assign(e,{blank:!0}))}))};function x(e){let{type:t="articles"}=e;return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)(u.Z,{}),(0,r.jsx)(m.Z,{goToTop:!0,children:g[t].map((e,t)=>[(0,r.jsx)("h1",{className:"text-[18px]",children:e.title},"".concat(e.title,"-title")),(0,r.jsx)(f,{data:e.children},"".concat(e.title,"-article"))])})]})}x.propTypes={type:s().string};var _=x},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}},79755:function(e){e.exports={blank:"articleLinks_blank__iau2E",blankLink:"articleLinks_blankLink__PKSom",link:"articleLinks_link__tZVud",list:"articleLinks_list__5P8eB"}}},function(e){e.O(0,[932,1447,4530,3791,9036,9618,2888,9774,179],function(){return e(e.s=37995)}),_N_E=e.O()}]);