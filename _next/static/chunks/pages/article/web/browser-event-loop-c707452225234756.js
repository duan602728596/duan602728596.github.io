(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9955],{56887:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/browser-event-loop",function(){return o(13823)}])},13823:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return v}});var s=o(85893),t=o(67294),r=o(9008),i=o.n(r),l=o(76315),c=o(38925),a=o(30673),d=o(75749),h=o(39182),u=o(11151);function x(e){let n={code:"code",pre:"pre",...(0,u.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"console.log(1);\n\nnew Promise((resolve) => {\n  console.log(2);\n  resolve();\n}).then(() => {\n  console.log(3);\n});\n\nsetTimeout(() => {\n  console.log(4);\n}, 0);\n\nnew Promise((resolve) => {\n  console.log(5);\n  resolve();\n}).then(() => {\n  console.log(6);\n});\n"})})}function p(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}let{Title:j,Paragraph:m}=l.default;var f=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(j,{children:"浏览器事件循环"}),(0,s.jsxs)(m,{children:[(0,s.jsx)("blockquote",{children:"浏览器需要事件循环来协调事件、用户操作、脚本执行、渲染、网络请求等。通过事件循环，浏览器可以利用任务队列来管理任务， 让异步事件非阻塞地执行。每个客户端对应的事件循环是相对独立的。"}),(0,s.jsxs)("blockquote",{children:["浏览器事件循环是以浏览器为宿主环境实现的事件调度，操作顺序如下：",(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"执行同步代码。"}),(0,s.jsx)("li",{children:"执行一个宏任务（执行栈中没有就从任务队列中获取）。"}),(0,s.jsx)("li",{children:"执行过程中如果遇到微任务，就将它添加到微任务的任务队列中。"}),(0,s.jsx)("li",{children:"宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）。"}),(0,s.jsx)("li",{children:"当前宏任务执行完毕，开始检查渲染，然后渲染线程接管进行渲染。"}),(0,s.jsx)("li",{children:"渲染完毕后，JavaScript 线程继续接管，开始下一个循环。"})]})]})]}),(0,s.jsx)(m,{children:"这是一个经典的题目："}),(0,s.jsx)(p,{}),(0,s.jsx)(m,{children:"输出："}),(0,s.jsx)(d.Z,{type:"text",children:"1\n2\n5\n3\n6\n4"}),(0,s.jsx)(j,{level:2,children:"setTimeout和setInterval"}),(0,s.jsx)(m,{children:"setTimeout和setInterval的运行机制是，将指定的代码移出本次执行，等到下一轮Event Loop时，再检查是否到了指定时间。 如果到了，就执行对应的代码；如果不到，就等到再下一轮Event Loop时重新判断。 这意味着，setTimeout指定的代码，必须等到本次执行的所有代码都执行完，才会执行。"}),(0,s.jsx)(m,{children:"零延迟（Zero delay）并不是意味着回调会立即执行。在零延迟调用setTimeout时，其并不是过了给定的时间间隔后就马上执行回调函数。 其等待的时间基于队列里正在等待的消息数量。也就是说，setTimeout()只是将事件插入了任务队列，必须等到当前代码（执行栈）执行完， 主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证回调函数一定会在setTimeout()指定的时间执行。"}),(0,s.jsx)(c.Z,{type:"info",message:[(0,s.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,s.jsx)("div",{className:"py-[8px]",children:(0,s.jsx)(h.Z,{href:"https://febook.hzfe.org/awesome-interview/book3/browser-event-loop",children:"https://febook.hzfe.org/awesome-interview/book3/browser-event-loop"})},"febook"),(0,s.jsx)("div",{className:"py-[8px]",children:(0,s.jsx)(h.Z,{href:"https://www.jianshu.com/p/73164966c6fe",children:"https://www.jianshu.com/p/73164966c6fe"})},"jianshu")]})]})};function v(e){return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"浏览器事件循环"}),(0,s.jsx)("meta",{name:"keywords",content:"浏览器事件循环"}),(0,s.jsx)("meta",{name:"description",content:"浏览器事件循环"})]}),(0,s.jsx)(f,{})]})}},99388:function(e,n,o){"use strict";var s=o(85893),t=o(73935),r=o(45697),i=o.n(r),l=o(39332),c=o(81860),a=o(10932),d=o(75162),h=o(6171),u=o(76467),x=o(63791),p=o.n(x);let{BackTop:j}=c.default;function m(e){let n=(0,l.useRouter)();return[(0,s.jsxs)("div",{className:p().main,children:[e.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,s.jsx)(h.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,s.jsx)(u.default,{children:"object"==typeof document?(0,t.createPortal)((0,s.jsx)(j,{type:"primary",icon:(0,s.jsx)(d.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}m.propTypes={children:i().node,goToTop:i().bool,goBack:i().bool},n.Z=m},30673:function(e,n,o){"use strict";var s=o(85893),t=o(45697),r=o.n(t),i=o(99388);function l(e){return(0,s.jsx)(i.Z,{goToTop:!0,goBack:!0,children:e.children})}l.propTypes={children:r().node},n.Z=l},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[932,416,8925,2888,9774,179],function(){return e(e.s=56887)}),_N_E=e.O()}]);