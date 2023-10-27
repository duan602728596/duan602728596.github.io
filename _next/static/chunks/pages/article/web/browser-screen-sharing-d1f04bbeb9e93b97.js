(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4602],{29666:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return BrowserScreenSharingPage}});var t=n(67294),a=n(9008),i=n.n(a),c=n(48726),s=n(38925),o=n(86471),l=n(33938),d=n(30222),h=n.n(d),p=n(99595),u=n.n(p),g=n(81290),v=n.n(g),S=n(10154),x=n(28415),_=n(78957),f=n(18610),j=n(15200),m=n.n(j),y=n(85893),ScreenSharingTest_ScreenSharingTest=function(e){var r=(0,t.useRef)(null);function stopScreenSharing(){var e;if(null!=r&&null!==(e=r.current)&&void 0!==e&&e.srcObject){var n=r.current.srcObject.getTracks();u()(n).call(n,function(e){return e.stop()}),r.current.srcObject=null}}function _handleStartScreenSharingClick(){return(_handleStartScreenSharingClick=(0,l.Z)(h().mark(function _callee(e){var n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1});case 3:(n=e.sent).addEventListener("inactive",function(){stopScreenSharing()}),"srcObject"in r.current?(r.current.srcObject=n,r.current.play()):r.current.src=v().createObjectURL(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),S.ZP.error("屏幕共享失败！");case 12:case"end":return e.stop()}},_callee,null,[[0,8]])}))).apply(this,arguments)}return(0,t.useLayoutEffect)(function(){return function(){stopScreenSharing()}},[]),(0,y.jsx)(x.Z,{title:"屏幕共享",extra:(0,y.jsxs)(_.Z,{children:[(0,y.jsx)(f.ZP,{type:"primary",onClick:function(e){return _handleStartScreenSharingClick.apply(this,arguments)},children:"开始屏幕共享"}),(0,y.jsx)(f.ZP,{type:"primary",danger:!0,onClick:function(e){stopScreenSharing()},children:"结束屏幕共享"})]}),children:(0,y.jsx)("video",{ref:r,className:m().video})})},b=n(67552),w=n.n(b),P=n(11151);function _createMdxContent(e){var r=w()({pre:"pre",code:"code"},(0,P.ah)(),e.components);return(0,y.jsx)(r.pre,{children:(0,y.jsx)(r.code,{className:"language-javascript",children:"async function screenSharing() {\n  const video = document.querySelector('video');\n  const stream = await navigator.mediaDevices.getDisplayMedia({\n    video: { cursor: 'always' },\n    audio: false\n  });\n\n  video.srcObject = stream;\n  video.play();\n}\n"})})}var screenSharing=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=w()({},(0,P.ah)(),e.components).wrapper;return r?(0,y.jsx)(r,w()({},e,{children:(0,y.jsx)(_createMdxContent,e)})):_createMdxContent(e)},C=c.Z.Title,M=c.Z.Paragraph,k=c.Z.Text,BrowserScreenSharing_BrowserScreenSharing=function(e){return(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(C,{children:"浏览器中实现屏幕共享功能"}),(0,y.jsxs)(M,{children:["在面试中，会出现一个经常用到的功能，就是在浏览器中实现屏幕共享。该功能使用了",(0,y.jsx)(k,{code:!0,children:"navigator.mediaDevices.getDisplayMedia"}),"API。"]}),(0,y.jsx)(C,{level:2,children:"基本代码"}),(0,y.jsxs)(M,{children:["使用",(0,y.jsx)(k,{code:!0,children:"navigator.mediaDevices.getDisplayMedia"}),"录制，并放到video中。"]}),(0,y.jsx)(screenSharing,{}),(0,y.jsx)(C,{level:2,children:"实现效果：屏幕共享并放到video中"}),(0,y.jsx)("div",{className:"mb-[16px]",children:(0,y.jsx)(ScreenSharingTest_ScreenSharingTest,{})}),(0,y.jsx)(s.Z,{type:"info",message:[(0,y.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,y.jsxs)("div",{className:"py-[8px]",children:["使用屏幕捕获API：",(0,y.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture"})]},"using-screencapture"),(0,y.jsxs)("div",{className:"py-[8px]",children:["MediaDevices.getDisplayMedia()：",(0,y.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"})]},"getDisplayMedia"),(0,y.jsxs)("div",{className:"py-[8px]",children:["MediaStream：",(0,y.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStream",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStream"})]},"MediaStream"),(0,y.jsxs)("div",{className:"py-[8px]",children:["信令与视频通话：",(0,y.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling"})]},"Signaling-and-video-calling")]})]})};function BrowserScreenSharingPage(e){return(0,y.jsxs)(t.Fragment,{children:[(0,y.jsxs)(i(),{children:[(0,y.jsx)("title",{children:"浏览器中实现屏幕共享功能"}),(0,y.jsx)("meta",{name:"keywords",content:"前端, javascript"}),(0,y.jsx)("meta",{name:"description",content:"浏览器中实现屏幕共享功能"})]}),(0,y.jsx)(BrowserScreenSharing_BrowserScreenSharing,{})]})}},88096:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/browser-screen-sharing",function(){return n(29666)}])},15200:function(e){e.exports={video:"screenSharingTest_video__pRDa2"}},33938:function(e,r,n){"use strict";n.d(r,{Z:function(){return _asyncToGenerator}});var t=n(890);function asyncGeneratorStep(e,r,n,a,i,c,s){try{var o=e[c](s),l=o.value}catch(e){n(e);return}o.done?r(l):t.resolve(l).then(a,i)}function _asyncToGenerator(e){return function(){var r=this,n=arguments;return new t(function(t,a){var i=e.apply(r,n);function _next(e){asyncGeneratorStep(i,t,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,t,a,_next,_throw,"throw",e)}_next(void 0)})}}}},function(e){e.O(0,[4322,1447,9166,3791,971,8415,154,2072,9774,2888,179],function(){return e(e.s=88096)}),_N_E=e.O()}]);