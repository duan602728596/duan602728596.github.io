(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3073],{37446:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return tn}});var r=t(67294),i=t(9008),s=t.n(i),a=(t(71214),t(63534)),c=t(9991),o=(t(96471),t(24649)),l=(t(54633),t(72806)),d=(t(22776),t(20550)),u=t(41420),h=t(8333),f=t(35820),p=t.n(f),x=t(9938),v=t.n(x),m=t(8571),j=t.n(m),w=t(88946),g=t.n(w),_=(t(41539),t(68309),t(74916),t(35704)),b=t.n(_),k=t(10349),Z=t.n(k),y=t(52472),N=t.n(y),T=t(19389),L=t.n(T),S=t(98235),I=t.n(S),A=t(68420),C=t(27344),F=t(30222),P=t.n(F);function R(n,e){var t="undefined"!==typeof N()&&L()(n)||n["@@iterator"];if(!t){if(I()(n)||(t=function(n,e){var t;if(!n)return;if("string"===typeof n)return E(n,e);var r=b()(t=Object.prototype.toString.call(n)).call(t,8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Z()(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){c=!0,s=n},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw s}}}}function E(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var q=function(){function n(e){(0,A.Z)(this,n),this.workerLen=null!==e&&void 0!==e?e:3,this.list=[],this.worker=new Array(this.workerLen)}return(0,C.Z)(n,[{key:"executionFunc",value:P().mark((function n(e,t){var r,i,s,a,c=arguments;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=this,i=c.length,s=new Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=c[a];return n.next=4,t.call.apply(t,s).then((function(){r.worker[e]=void 0,r.run()}));case 4:case"end":return n.stop()}}),n,this)}))},{key:"addList",value:function(n){var e,t=R(n);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.list.unshift(r)}}catch(i){t.e(i)}finally{t.f()}}},{key:"run",value:function(){for(var n=[],e=0;e<this.workerLen;e++){var t,r=this.list.length;if(!this.worker[e]&&r>0)this.worker[e]=this.executionFunc.apply(this,j()(t=[e]).call(t,(0,u.Z)(this.list[r-1]))),n.push(e),this.list.pop()}for(var i=0,s=n;i<s.length;i++){var a=s[i];this.worker[a].next()}}}]),n}(),H=q,O=t(85893),Q=a.Z.Title,z=a.Z.Paragraph,D=new H;var J=function(n){var e=(0,r.useState)([{id:"1",endTime:3,status:0},{id:"2",endTime:9,status:0},{id:"3",endTime:12,status:0},{id:"4",endTime:5,status:0},{id:"5",endTime:7,status:0},{id:"6",endTime:1,status:0}]),t=(0,h.Z)(e,2),i=t[0],s=t[1],a=(0,r.useState)([]),c=(0,h.Z)(a,2),f=c[0],x=c[1],m=(0,r.useState)(void 0),w=(0,h.Z)(m,2),_=w[0],b=w[1],k=(0,r.useState)(!1),Z=(0,h.Z)(k,2),y=Z[0],N=Z[1];function T(n){return n.status=1,s((function(n){return(0,u.Z)(n)})),new(p())((function(e,t){v()((function(){n.status=2,s((function(n){return(0,u.Z)(n)}));var t=[];x((function(e){var r;return t=j()(r=[]).call(r,(0,u.Z)(e),[n.id])})),6===t.length&&b(void 0),e()}),1e3*n.endTime)}))}var L=[{title:"\u4efb\u52a1ID",dataIndex:"id",width:"33%"},{title:"\u6267\u884c\u65f6\u95f4\uff08s\uff09",dataIndex:"endTime",width:"33%"},{title:"\u6267\u884c\u72b6\u6001",dataIndex:"status",width:"33%",render:function(n,e,t){switch(n){case 0:return(0,O.jsx)(d.Z,{children:"\u672a\u6267\u884c"});case 1:return(0,O.jsx)(d.Z,{color:"#f50",children:"\u6267\u884c\u4e2d"});case 2:return(0,O.jsx)(d.Z,{color:"#87d068",children:"\u6267\u884c\u5b8c\u6bd5"})}}}];return(0,O.jsxs)(r.Fragment,{children:[(0,O.jsx)(Q,{level:2,children:"\u4ee3\u7801\u6f14\u793a"}),(0,O.jsx)(z,{children:"\u5171\u67096\u4e2a\u4efb\u52a1\uff0c\u6bcf\u4e2a\u4efb\u52a1\u8fc7\u4e00\u5b9a\u65f6\u95f4\u540e\u5b8c\u6210\u3002\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\uff0c\u6700\u591a\u67093\u4e2a\u4efb\u52a1\u5728\u6267\u884c\u3002"}),(0,O.jsx)("div",{className:"text-right mb-[16px]",children:y?(0,O.jsx)(l.Z,{type:"primary",danger:!0,disabled:_,onClick:function(n){s(g()(i).call(i,(function(n){return n.status=0,n}))),N(!1),x([])},children:"\u91cd\u7f6e\u4efb\u52a1"}):(0,O.jsx)(l.Z,{type:"primary",onClick:function(n){b(!0),N(!0);var e=g()(i).call(i,(function(n,e){return[T,void 0,n]}));D.addList(e),D.run()},children:"\u5f00\u59cb\u4efb\u52a1"})}),(0,O.jsx)(o.Z,{size:"middle",bordered:!0,columns:L,dataSource:i,rowKey:"id",pagination:!1}),(0,O.jsxs)("p",{className:"py-[16px] px-0",children:[(0,O.jsx)("b",{children:"\u5df2\u5b8c\u6210\u4efb\u52a1\uff1a"}),0===f.length?(0,O.jsx)(d.Z,{children:"\u65e0"}):g()(f).call(f,(function(n,e){return(0,O.jsxs)(d.Z,{color:e%2===0?"magenta":"purple",children:["\u4efb\u52a1",n]},n)}))]})]})},K=t(67552),U=t.n(K),X=t(11151);function B(n){var e=U()({pre:"pre",code:"code"},(0,X.ah)(),n.components);return(0,O.jsx)(e.pre,{children:(0,O.jsx)(e.code,{className:"language-javascript",children:"class Queue {\n  constructor(workerLen) {\n    this.workerLen = workerLen ?? 3;         // \u540c\u65f6\u6267\u884c\u7684\u4efb\u52a1\u6570\n    this.list = [];                          // \u4efb\u52a1\u961f\u5217\n    this.worker = new Array(this.workerLen); // \u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\n  }\n\n  /**\n   * \u6267\u884c\u4e00\u4e2a\u4efb\u52a1\n   * @param { number } index\n   * @param { Function } fn: \u6267\u884c\u7684\u51fd\u6570\n   * @param { Array } args: \u4f20\u9012\u7ed9\u6267\u884c\u51fd\u6570\u7684\u53c2\u6570\n   */\n  *executionFunc(index, fn, ...args) {\n    const _this = this;\n\n    yield fn.call(...args)\n      .then(function() {\n        // \u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u518d\u6b21\u5206\u914d\u4efb\u52a1\u5e76\u6267\u884c\u4efb\u52a1\n        _this.worker[index] = undefined;\n        _this.run();\n      });\n  }\n\n  /**\n   * \u6dfb\u52a0\u5230\u4efb\u52a1\u961f\u5217\n   * @param { Array<any[]> } list: \u4efb\u52a1\u961f\u5217\n   */\n  addList(list) {\n    for (const item of list) {\n      this.list.unshift(item);\n    }\n  }\n\n  // \u5206\u914d\u5e76\u6267\u884c\u4efb\u52a1\n  run() {\n    const runIndex = [];\n\n    for (let i = 0; i < this.workerLen; i++) {\n      const len = this.list.length;\n\n      if (!this.worker[i] && len > 0) {\n        // \u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\n        this.worker[i] = this.executionFunc(i, ...this.list[len - 1]);\n\n        runIndex.push(i);\n\n        // \u4ece\u4efb\u52a1\u961f\u5217\u5185\u5220\u9664\u4efb\u52a1\n        this.list.pop();\n      }\n    }\n\n    // \u6267\u884c\u4efb\u52a1\n    for (const index of runIndex) {\n      this.worker[index].next();\n    }\n  }\n}\n"})})}var M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=U()({},(0,X.ah)(),n.components),t=e.wrapper;return t?(0,O.jsx)(t,U()({},n,{children:(0,O.jsx)(B,n)})):B(n)};function V(n){var e=U()({pre:"pre",code:"code"},(0,X.ah)(),n.components);return(0,O.jsx)(e.pre,{children:(0,O.jsx)(e.code,{className:"language-javascript",children:"// \u5ef6\u8fdf\u6267\u884c\u7684\u51fd\u6570\nfunction sleep(id, time) {\n  console.log('\u5f00\u59cbid', id);\n\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('\u7ed3\u675fid', id);\n      resolve();\n    }, time * 1000);\n  });\n}\n\nconst queue = new Queue();\n\n// \u6dfb\u52a0\u5230\u4efb\u52a1\u961f\u5217\nqueue.addList([\n  [sleep, undefined, '0001', 3],\n  [sleep, undefined, '0002', 5],\n  [sleep, undefined, '0003', 8],\n  [sleep, undefined, '0004', 1],\n  [sleep, undefined, '0005', 12],\n  [sleep, undefined, '0006', 8],\n  [sleep, undefined, '0007', 2],\n  [sleep, undefined, '0008', 10]\n]);\n\n// \u6267\u884c\u4efb\u52a1\nqueue.run();\n"})})}var Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=U()({},(0,X.ah)(),n.components),t=e.wrapper;return t?(0,O.jsx)(t,U()({},n,{children:(0,O.jsx)(V,n)})):V(n)};function $(n){var e=U()({pre:"pre",code:"code"},(0,X.ah)(),n.components);return(0,O.jsx)(e.pre,{children:(0,O.jsx)(e.code,{children:"\u5f00\u59cbid 0001\n\u5f00\u59cbid 0002\n\u5f00\u59cbid 0003\n\u7ed3\u675fid 0001\n\u5f00\u59cbid 0004\n\u7ed3\u675fid 0004\n\u5f00\u59cbid 0005\n\u7ed3\u675fid 0002\n\u5f00\u59cbid 0006\n\u7ed3\u675fid 0003\n\u5f00\u59cbid 0007\n\u7ed3\u675fid 0007\n\u5f00\u59cbid 0008\n\u7ed3\u675fid 0006\n\u7ed3\u675fid 0005\n\u7ed3\u675fid 0008\n"})})}var G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=U()({},(0,X.ah)(),n.components),t=e.wrapper;return t?(0,O.jsx)(t,U()({},n,{children:(0,O.jsx)($,n)})):$(n)},W=a.Z.Title,nn=a.Z.Paragraph;var en=function(n){return(0,O.jsxs)(c.Z,{children:[(0,O.jsx)(W,{children:"\u7528JS\u5b9e\u73b0\u591a\u4e2a\u4efb\u52a1\u5e76\u884c\u6267\u884c\u7684\u961f\u5217"}),(0,O.jsx)(W,{level:2,children:"\u4f7f\u7528\u573a\u666f"}),(0,O.jsx)(nn,{children:"\u4eca\u5929\u5728\u5f00\u53d1\u65f6\uff0c\u78b0\u5230\u4e86\u8fd9\u4e48\u4e00\u4e2a\u9700\u6c42\uff1a\u9700\u8981\u4e0a\u4f20\u591a\u4e2a\u89c6\u9891\u6587\u4ef6\uff1b\u6bcf\u4e2a\u6587\u4ef6\u7684\u4e0a\u4f20\u5728\u65b0\u7ebf\u7a0b\u5185\u6267\u884c\uff1b\u540c\u65f6\u6700\u591a\u6709\u4e09\u4e2a\u4e0a\u4f20\u4efb\u52a1\u5728\u6267\u884c\uff1b \u5f53\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002\u8fd9\u4e2a\u9700\u6c42\u5c31\u662f\u5e76\u884c\u6267\u884c\u961f\u5217\u5185\u7684\u4efb\u52a1\u3002"}),(0,O.jsx)(nn,{children:"\u4e3a\u4e86\u80fd\u591f\u6ee1\u8db3\u8981\u6c42\uff0c\u9700\u8981\u77e5\u9053\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u7684\u4efb\u52a1\u6570\u3001\u4efb\u52a1\u961f\u5217\u3001\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u3002\u5f53\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u9700\u8981\u5206\u914d\u4e0b\u4e00\u4e2a\u6267\u884c\u7684\u4efb\u52a1\u3002"}),(0,O.jsx)(W,{level:2,children:"\u4ee3\u7801\u5b9e\u73b0"}),(0,O.jsx)(nn,{children:"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u7c7b\uff1a"}),(0,O.jsx)(M,{}),(0,O.jsx)(nn,{children:"\u5b9a\u4e49\u4e00\u4e2a\u5ef6\u8fdf\u6267\u884c\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u5e76\u6267\u884c\u4efb\u52a1\uff0c\u6d4b\u8bd5\u4ee3\u7801\u662f\u5426\u6ee1\u8db3\u9700\u6c42\uff1a"}),(0,O.jsx)(Y,{}),(0,O.jsx)(nn,{children:"\u5728\u63a7\u5236\u53f0\u4e0a\u4f1a\u8f93\u51fa\uff1a"}),(0,O.jsx)(G,{}),(0,O.jsx)(nn,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u5f00\u59cb\u65f6\u6267\u884c\u4e86\u4e09\u4e2a\u4efb\u52a1\uff1b\u6bcf\u5f53\u6709\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u5c31\u4f1a\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002\u8fd9\u6837\u5c31\u6ee1\u8db3\u4e86\u5e76\u884c\u6267\u884c\u961f\u5217\u5185\u7684\u4efb\u52a1\u7684\u9700\u6c42\u3002"}),(0,O.jsx)(J,{})]})};function tn(n){return(0,O.jsxs)(r.Fragment,{children:[(0,O.jsxs)(s(),{children:[(0,O.jsx)("title",{children:"\u7528JS\u5b9e\u73b0\u591a\u4e2a\u4efb\u52a1\u5e76\u884c\u6267\u884c\u7684\u961f\u5217"}),(0,O.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, js, javascript, typescript, node"}),(0,O.jsx)("meta",{name:"description",content:"\u7528JS\u5b9e\u73b0\u591a\u4e2a\u4efb\u52a1\u5e76\u884c\u6267\u884c\u7684\u961f\u5217"})]}),(0,O.jsx)(en,{})]})}},39748:function(n,e,t){"use strict";t(54633);var r=t(72806),i=(t(56091),t(53308)),s=t(19623),a=t(73935),c=t(11163),o=t(6171),l=t(76467),d=t(97680),u=t.n(d),h=t(85893);e.Z=function(n){var e=(0,c.useRouter)();return[(0,h.jsxs)("div",{className:u().main,children:[n.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(r.Z,{onClick:function(n){e.push("/")},children:[(0,h.jsx)(o.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===n||void 0===n?void 0:n.children]},"main"),(0,h.jsx)(l.default,{children:null!==n&&void 0!==n&&n.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,s.Z)(document))?(0,a.createPortal)((0,h.jsx)(i.Z,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,h.jsx)("div",{className:u().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(n,e,t){"use strict";t(86230);var r=t(97183),i=(t(2042),t(26713)),s=(t(20559),t(84908)),a=(t(74916),t(88946)),c=t.n(a),o=t(81290),l=t.n(o),d=t(41664),u=t.n(d),h=t(67337),f=t(56392),p=t.n(f),x=t(2013),v=t(85893),m=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],j=["github.io","vercel.app"],w=c()(m).call(m,(function(n,e){return(0,v.jsx)("li",{className:p().navListItem,children:(0,v.jsx)(u(),{href:n.href,children:n.title})},n.href)}));e.Z=function(n){return(0,v.jsx)(r.Z.Header,{className:p().antdHeader,children:(0,v.jsxs)("div",{className:p().header,children:[(0,v.jsx)("nav",{className:p().headerLeft,children:(0,v.jsx)("ul",{className:p().navList,children:w})}),(0,v.jsx)("div",{className:p().headerRight,children:(0,v.jsxs)(i.Z,{size:16,children:[(0,v.jsx)(s.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,v.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(n){var e=window.location,t=e.pathname,r=e.hostname,i=/github\.io/.test(r);window.location.href=new(l())(t,"https://duan602728596.".concat(j[i?1:0],"/"))},children:(0,v.jsx)(h.Z,{className:p().switchAddressIcon})})}),(0,v.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(x.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(n,e,t){"use strict";var r=t(85893);e.Z=function(n){var e=n.className,t=n.imageClassName,i=n.avifSrc,s=n.webpSrc,a=n.src,c=n.alt;return(0,r.jsxs)("picture",{className:e,children:[i&&(0,r.jsx)("source",{srcSet:i,type:"image/avif"}),s&&(0,r.jsx)("source",{srcSet:s,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:a,alt:c})]})}},9991:function(n,e,t){"use strict";var r=t(67294),i=t(32307),s=t(39748),a=t(85893);e.Z=function(n){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(s.Z,{goToTop:!0,goBack:!0,children:n.children})]})}},47727:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/queue-in-js",function(){return t(37446)}])},97680:function(n){n.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(n){n.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(n){n.O(0,[2806,542,7161,2053,4011,2918,8161,9774,2888,179],(function(){return e=47727,n(n.s=e);var e}));var e=n.O();_N_E=e}]);