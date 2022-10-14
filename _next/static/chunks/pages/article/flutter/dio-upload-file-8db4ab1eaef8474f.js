(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8196],{20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var a=t(4942),r=t(87462),i=t(97685),s=t(97937),c=t(94184),o=t.n(c),l=t(98423),d=t(67294),u=t(53124),h=t(98787),f=t(68349),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},m=function(e){var n,t=e.prefixCls,i=e.className,s=e.checked,c=e.onChange,l=e.onClick,h=p(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,d.useContext(u.E_).getPrefixCls)("tag",t),m=o()(f,(n={},(0,a.Z)(n,"".concat(f,"-checkable"),!0),(0,a.Z)(n,"".concat(f,"-checkable-checked"),s),n),i);return d.createElement("span",(0,r.Z)({},h,{className:m,onClick:function(e){null===c||void 0===c||c(!s),null===l||void 0===l||l(e)}}))},x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},v=new RegExp("^(".concat(h.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(h.E.join("|"),")$")),b=function(e,n){var t,c=e.prefixCls,h=e.className,p=e.style,m=e.children,b=e.icon,j=e.color,_=e.onClose,w=e.closeIcon,N=e.closable,y=void 0!==N&&N,Z=x(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=d.useContext(u.E_),C=k.getPrefixCls,O=k.direction,E=d.useState(!0),P=(0,i.Z)(E,2),T=P[0],S=P[1];d.useEffect((function(){"visible"in Z&&S(Z.visible)}),[Z.visible]);var L=function(){return!!j&&(v.test(j)||g.test(j))},F=(0,r.Z)({backgroundColor:j&&!L()?j:void 0},p),I=L(),R=C("tag",c),A=o()(R,(t={},(0,a.Z)(t,"".concat(R,"-").concat(j),I),(0,a.Z)(t,"".concat(R,"-has-color"),j&&!I),(0,a.Z)(t,"".concat(R,"-hidden"),!T),(0,a.Z)(t,"".concat(R,"-rtl"),"rtl"===O),t),h),U=function(e){e.stopPropagation(),null===_||void 0===_||_(e),e.defaultPrevented||"visible"in Z||S(!1)},D="onClick"in Z||m&&"a"===m.type,B=(0,l.Z)(Z,["visible"]),H=b||null,Q=H?d.createElement(d.Fragment,null,H,d.createElement("span",null,m)):m,z=d.createElement("span",(0,r.Z)({},B,{ref:n,className:A,style:F}),Q,y?w?d.createElement("span",{className:"".concat(R,"-close-icon"),onClick:U},w):d.createElement(s.Z,{className:"".concat(R,"-close-icon"),onClick:U}):null);return D?d.createElement(f.Z,null,z):z},j=d.forwardRef(b);j.CheckableTag=m;var _=j},22776:function(e,n,t){"use strict";t(24675)},49600:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var a=t(67294),r=t(9008),i=t.n(r),s=(t(22776),t(20550)),c=(t(71214),t(63534)),o=t(67965),l=t.n(o),d=t(9991),u=t(67552),h=t.n(u),f=t(85893),p=t(11151);function m(e){var n=h()({pre:"pre",code:"code"},(0,p.ah)(),e.components);return(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-dart",children:"import 'dart:io';\nimport 'dart:typed_data';\nimport 'package:dio/dio.dart';\n\nFuture<Response<dynamic>> requestUploadFile(filePath) async {\n  Dio dio = Dio();\n  File file = File(filePath);\n  Uint8List bytes = await file.readAsBytes();\n  Stream<List<int>> stream = MultipartFile.fromBytes(bytes).finalize();\n\n  Response<dynamic> response = await dio.put(\n    'https://xxxxxx.com/upload',\n    data: stream,\n    options: Options(\n      contentType: mimeType,\n      headers: {\n        'content-length': (await file.length()).toString()\n      }\n    )\n  );\n\n  return response;\n}\n"})})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=h()({},(0,p.ah)(),e.components),t=n.wrapper;return t?(0,f.jsx)(t,h()({},e,{children:(0,f.jsx)(m,e)})):m(e)},v=c.Z.Title,g=c.Z.Paragraph;var b=function(){return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(v,{children:"\u4f7f\u7528dio\u4e0a\u4f20\u6587\u4ef6"}),(0,f.jsxs)(g,{children:["\u5728Flutter\u5f00\u53d1\u4e2d\uff0c\u4f7f\u7528",(0,f.jsx)("a",{href:"https://github.com/flutterchina/dio",target:"_blank",rel:"noopener noreferrer",children:"dio"}),"\u5b9e\u73b0\u4e0a\u4f20\u6587\u4ef6\u7684\u529f\u80fd\uff1a"]}),(0,f.jsx)(x,{}),(0,f.jsxs)(g,{children:["\u7531\u4e8edio\u4f1a\u5c06\u8bf7\u6c42\u8f6c\u6362\u6210",(0,f.jsx)(s.Z,{className:l().tag,children:"String"}),"\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u5c06",(0,f.jsx)(s.Z,{className:l().tag,children:"Uint8List"}),"\u7c7b\u578b\u8f6c\u6362\u6210",(0,f.jsx)(s.Z,{className:l().tag,children:"Stream<List<int>>"}),"\u7c7b\u578b\u3002\u5177\u4f53\u8bf7\u53c2\u8003dio\u7684",(0,f.jsx)("a",{href:"https://github.com/flutterchina/dio/issues/485#issuecomment-552845924",target:"_blank",rel:"noopener noreferrer",children:"issues"}),"\uff0c\u8fd9\u5757\u7b97\u662f\u4e00\u4e2a\u5c0f\u5751\u5427\u3002"]})]})};function j(e){return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsxs)(i(),{children:[(0,f.jsx)("title",{children:"\u4f7f\u7528dio\u4e0a\u4f20\u6587\u4ef6"}),(0,f.jsx)("meta",{name:"keywords",content:"\u524d\u7aef, Flutter, Dart, dio"}),(0,f.jsx)("meta",{name:"description",content:"\u4f7f\u7528dio\u4e0a\u4f20\u6587\u4ef6"})]}),(0,f.jsx)(b,{})]})}},39748:function(e,n,t){"use strict";t(54633);var a=t(72806),r=(t(56091),t(53308)),i=t(19623),s=t(73935),c=t(11163),o=t(6171),l=t(76467),d=t(97680),u=t.n(d),h=t(85893);n.Z=function(e){var n=(0,c.useRouter)();return[(0,h.jsxs)("div",{className:u().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(a.Z,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(o.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,h.jsx)(l.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,i.Z)(document))?(0,s.createPortal)((0,h.jsx)(r.Z,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,h.jsx)("div",{className:u().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(86230);var a=t(97183),r=(t(2042),t(26713)),i=(t(20559),t(84908)),s=(t(74916),t(88946)),c=t.n(s),o=t(81290),l=t.n(o),d=t(41664),u=t.n(d),h=t(67337),f=t(56392),p=t.n(f),m=t(2013),x=t(85893),v=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],g=["github.io","vercel.app"],b=c()(v).call(v,(function(e,n){return(0,x.jsx)("li",{className:p().navListItem,children:(0,x.jsx)(u(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,x.jsx)(a.Z.Header,{className:p().antdHeader,children:(0,x.jsxs)("div",{className:p().header,children:[(0,x.jsx)("nav",{className:p().headerLeft,children:(0,x.jsx)("ul",{className:p().navList,children:b})}),(0,x.jsx)("div",{className:p().headerRight,children:(0,x.jsxs)(r.Z,{size:16,children:[(0,x.jsx)(i.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,x.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,t=n.pathname,a=n.hostname,r=/github\.io/.test(a);window.location.href=new(l())(t,"https://duan602728596.".concat(g[r?1:0],"/"))},children:(0,x.jsx)(h.Z,{className:p().switchAddressIcon})})}),(0,x.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var a=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,i=e.webpSrc,s=e.src,c=e.alt;return(0,a.jsxs)("picture",{className:n,children:[r&&(0,a.jsx)("source",{srcSet:r,type:"image/avif"}),i&&(0,a.jsx)("source",{srcSet:i,type:"image/webp"}),(0,a.jsx)("img",{className:t,src:s,alt:c})]})}},9991:function(e,n,t){"use strict";var a=t(67294),r=t(32307),i=t(39748),s=t(85893);n.Z=function(e){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(i.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},17158:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/flutter/dio-upload-file",function(){return t(49600)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}},67965:function(e){e.exports={tag:"dioUploadFile_tag__QQ95N"}}},function(e){e.O(0,[2806,542,7161,9774,2888,179],(function(){return n=17158,e(e.s=n);var n}));var n=e.O();_N_E=n}]);