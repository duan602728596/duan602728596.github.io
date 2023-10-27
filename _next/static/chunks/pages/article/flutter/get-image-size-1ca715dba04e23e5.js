(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6805],{18660:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return GetImageSizePage}});var a=t(67294),r=t(9008),i=t.n(r),s=t(48726),c=t(86471),l=t(67552),o=t.n(l),m=t(85893),d=t(11151);function _createMdxContent(e){var n=o()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-dart",children:"import 'dart:io';\nimport 'dart:async';\nimport 'package:flutter/material.dart';\n\n/// 获取图片的尺寸\nclass ImageSize {\n  final String imagePath;\n  late ImageStream imageStream;\n  late ImageStreamListener listener;\n\n  ImageSize({ required String this.imagePath }) {}\n\n  // 获取尺寸\n  Future<Map<String, int>> getSize() {\n    Completer<Map<String, int>> completer = Completer();\n    late Image image = Image.file(File(imagePath));\n\n    // 监听图片的加载\n    listener = ImageStreamListener(\n      (ImageInfo info, bool synchronousCall) {\n        imageStream.removeListener(listener);\n\n        if (!completer.isCompleted) {\n          completer.complete({\n            'width': info.image.width,\n            'height': info.image.height\n          });\n        }\n      },\n      onError: (dynamic exception, StackTrace? stackTrace) {\n        imageStream.removeListener(listener);\n\n        if (!completer.isCompleted) {\n          completer.completeError(exception, stackTrace);\n        }\n      });\n\n    imageStream = image.image.resolve(ImageConfiguration());\n\n    imageStream.addListener(listener);\n\n    return completer.future;\n  }\n}\n"})})}var imageSize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({},(0,d.ah)(),e.components).wrapper;return n?(0,m.jsx)(n,o()({},e,{children:(0,m.jsx)(_createMdxContent,e)})):_createMdxContent(e)},u=s.Z.Title,h=s.Z.Paragraph,GetImageSize_GetImageSize=function(e){return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(u,{children:"在Flutter的开发中，如何获取图片的尺寸"}),(0,m.jsx)(h,{children:"在Flutter的开发中，可以使用如下的方法获取图片的尺寸："}),(0,m.jsx)(imageSize,{})]})};function GetImageSizePage(e){return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsxs)(i(),{children:[(0,m.jsx)("title",{children:"在Flutter的开发中，如何获取图片的尺寸"}),(0,m.jsx)("meta",{name:"keywords",content:"前端, Flutter, Dart"}),(0,m.jsx)("meta",{name:"description",content:"在Flutter的开发中，如何获取图片的尺寸"})]}),(0,m.jsx)(GetImageSize_GetImageSize,{})]})}},51775:function(e,n,t){"use strict";var a=t(19623),r=t(73935),i=t(11163),s=t(35846),c=t(18610),l=t(75162),o=t(37653),m=t(76467),d=t(96865),u=t.n(d),h=t(85893),g=s.Z.BackTop;n.Z=function(e){var n=(0,i.useRouter)();return[(0,h.jsxs)("div",{className:u().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,h.jsx)(m.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,a.Z)(document))==="object"?(0,r.createPortal)((0,h.jsx)(g,{type:"primary",icon:(0,h.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},5189:function(e,n,t){"use strict";t(64043);var a=t(88946),r=t.n(a),i=t(81290),s=t.n(i),c=t(41664),l=t.n(c),o=t(21612),m=t(78957),d=t(83062),u=t(67337),h=t(10534),g=t.n(h),f=t(43989),p=t(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],_=["github.io","vercel.app"],v=r()(x).call(x,function(e,n){return(0,p.jsx)("li",{className:g().navListItem,children:(0,p.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,p.jsx)(o.Z.Header,{className:g().antdHeader,children:(0,p.jsxs)("div",{className:g().header,children:[(0,p.jsx)("nav",{className:g().headerLeft,children:(0,p.jsx)("ul",{className:g().navList,children:v})}),(0,p.jsx)("div",{className:g().headerRight,children:(0,p.jsxs)(m.Z,{size:16,children:[(0,p.jsx)(d.Z,{title:"切换网站地址",children:(0,p.jsx)("a",{className:g().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,a=n.hostname,r=/github\.io/.test(a);window.location.href=new(s())(t,"https://duan602728596.".concat(_[r?1:0],"/"))},children:(0,p.jsx)(u.Z,{className:g().switchAddressIcon})})}),(0,p.jsx)("a",{className:g().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,p.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},43989:function(e,n,t){"use strict";var a=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,i=e.webpSrc,s=e.src,c=e.alt;return(0,a.jsxs)("picture",{className:n,children:[r&&(0,a.jsx)("source",{srcSet:r,type:"image/avif"}),i&&(0,a.jsx)("source",{srcSet:i,type:"image/webp"}),(0,a.jsx)("img",{className:t,src:s,alt:c})]})}},86471:function(e,n,t){"use strict";var a=t(67294),r=t(5189),i=t(51775),s=t(85893);n.Z=function(e){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(i.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},91547:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/flutter/get-image-size",function(){return t(18660)}])},96865:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},10534:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[4322,1447,9166,9774,2888,179],function(){return e(e.s=91547)}),_N_E=e.O()}]);