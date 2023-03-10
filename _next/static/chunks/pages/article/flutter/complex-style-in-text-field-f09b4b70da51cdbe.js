(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4909],{61740:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var i=t(67294),r=t(9008),a=t.n(r),s=t(48726),l=t(22410),o=t(30654),c=t(67552),d=t.n(c),x=t(85893),h=t(11151);function u(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\n/* 保证输入框tag高亮的控制器 */\nclass CodeHighlightingController extends TextEditingController {\n  /// 代码高亮\n  /// @param { String } text: 文字\n  List<TextSpan> codeHighlighting(BuildContext context, String text) {\n    List<TextSpan> list = [];\n    List<int> tagIndex = [];\n    int textLength = text.length;\n\n    // 获取\"#\"的index\n    for (int i = 0; i < textLength; i++) {\n      if (text[i] == '#') {\n        tagIndex.add(tagIndex.length % 2 == 0 ? i : (i + 1));\n      }\n    }\n\n    // 奇数时删除数组最后一位，保证区间的完整\n    if (tagIndex.length % 2 != 0) {\n      tagIndex.removeLast();\n    }\n\n    if (tagIndex.length == 0) {\n      // 没有tag，不需要处理\n      list.add(TextSpan(text: text, style: TextStyle(color: Colors.black)));\n    } else {\n      // 处理tag第一位\n      if (tagIndex[0] != 0) {\n        list.add(TextSpan(\n          text: text.substring(0, tagIndex[0]),\n          style: TextStyle(color: Colors.black)\n        ));\n      }\n\n      for (int i = 0; i < tagIndex.length; i++) {\n        int startIndex = tagIndex[i];\n        int endIndex = i == (tagIndex.length - 1) ? textLength : tagIndex[i + 1];\n\n        if (startIndex != endIndex) {\n          bool isLight = i % 2 == 0;\n          String tagText = text.substring(startIndex, endIndex);\n\n          if (tagText != '') {\n            String componentText = text.substring(startIndex, endIndex);\n\n            if (isLight) {\n              list.add(TextSpan(\n                text: componentText,\n                style: TextStyle(color: Colors.blue)\n              ));\n            } else {\n              list.add(TextSpan(\n                text: componentText,\n                style: TextStyle(color: Colors.black)\n              ));\n            }\n          }\n        }\n      }\n    }\n\n    return list;\n  }\n\n  @override\n  TextSpan buildTextSpan({\n    required BuildContext context,\n    required bool withComposing,\n    TextStyle? style\n  }) {\n    return TextSpan(children: codeHighlighting(context, text));\n  }\n}\n"})})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components).wrapper;return n?(0,x.jsx)(n,d()({},e,{children:(0,x.jsx)(u,e)})):u(e)};function p(e){var n=d()({pre:"pre",code:"code"},(0,h.ah)(),e.components);return(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport './code_highlighting_controller.dart';\n\nfinal CodeHighlightingController _controller = CodeHighlightingController();\n\nclass Form extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return TextField(\n      controller: _controller,\n      autofocus: true,\n      minLines: 5,\n      maxLines: null,\n      keyboardType: TextInputType.multiline,\n      textInputAction: TextInputAction.newline,\n      decoration: InputDecoration.collapsed(hintText: '请输入...'),\n    );\n  }\n}\n"})})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=d()({},(0,h.ah)(),e.components).wrapper;return n?(0,x.jsx)(n,d()({},e,{children:(0,x.jsx)(p,e)})):p(e)},f=s.Z.Title,j=s.Z.Paragraph,v=s.Z.Text,_=function(){return(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(f,{children:"在TextField中实现复杂的样式"}),(0,x.jsx)(j,{children:"在Flutter开发中，如果想要用TextField实现复杂的样式，比如："}),(0,x.jsx)(o.Z,{className:"block m-[16px]",imageClassName:"block my-0 mx-auto",avifSrc:"/images/complex-style-in-text-field/tangshi.avif",webpSrc:"/images/complex-style-in-text-field/tangshi.webp",src:"/images/complex-style-in-text-field/tangshi.png",alt:"Flutter开发的App的截图"}),(0,x.jsxs)(j,{children:["两个",(0,x.jsx)(v,{strong:!0,children:"#"}),"之间被识别为tag，高亮为蓝色。"]}),(0,x.jsxs)(j,{children:["为了实现这样的效果，我们需要扩展",(0,x.jsx)(v,{strong:!0,children:"TextEditingController"}),"："]}),(0,x.jsx)(g,{}),(0,x.jsx)(j,{children:"之后用它来创建TextField的controller："}),(0,x.jsx)(m,{})]})};function T(e){return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsxs)(a(),{children:[(0,x.jsx)("title",{children:"在TextField中实现复杂的样式"}),(0,x.jsx)("meta",{name:"keywords",content:"前端, Flutter, Dart"}),(0,x.jsx)("meta",{name:"description",content:"在TextField中实现复杂的样式"})]}),(0,x.jsx)(_,{})]})}},54892:function(e,n,t){"use strict";var i=t(19623),r=t(73935),a=t(11163),s=t(1472),l=t(18662),o=t(75162),c=t(37653),d=t(76467),x=t(3744),h=t.n(x),u=t(85893),g=s.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,u.jsxs)("div",{className:h().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(l.ZP,{onClick:function(e){n.push("/")},children:[(0,u.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,u.jsx)(d.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,i.Z)(document))==="object"?(0,r.createPortal)((0,u.jsx)(g,{type:"primary",icon:(0,u.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,n,t){"use strict";t(74916);var i=t(88946),r=t.n(i),a=t(81290),s=t.n(a),l=t(41664),o=t.n(l),c=t(97183),d=t(26713),x=t(83062),h=t(67337),u=t(62139),g=t.n(u),p=t(30654),m=t(85893),f=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],j=["github.io","vercel.app"],v=r()(f).call(f,function(e,n){return(0,m.jsx)("li",{className:g().navListItem,children:(0,m.jsx)(o(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,m.jsx)(c.Z.Header,{className:g().antdHeader,children:(0,m.jsxs)("div",{className:g().header,children:[(0,m.jsx)("nav",{className:g().headerLeft,children:(0,m.jsx)("ul",{className:g().navList,children:v})}),(0,m.jsx)("div",{className:g().headerRight,children:(0,m.jsxs)(d.Z,{size:16,children:[(0,m.jsx)(x.Z,{title:"切换网站地址",children:(0,m.jsx)("a",{className:g().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,i=n.hostname,r=/github\.io/.test(i);window.location.href=new(s())(t,"https://duan602728596.".concat(j[r?1:0],"/"))},children:(0,m.jsx)(h.Z,{className:g().switchAddressIcon})})}),(0,m.jsx)("a",{className:g().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,n,t){"use strict";var i=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,r=e.avifSrc,a=e.webpSrc,s=e.src,l=e.alt;return(0,i.jsxs)("picture",{className:n,children:[r&&(0,i.jsx)("source",{srcSet:r,type:"image/avif"}),a&&(0,i.jsx)("source",{srcSet:a,type:"image/webp"}),(0,i.jsx)("img",{className:t,src:s,alt:l})]})}},22410:function(e,n,t){"use strict";var i=t(67294),r=t(34341),a=t(54892),s=t(85893);n.Z=function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},46649:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/flutter/complex-style-in-text-field",function(){return t(61740)}])},3744:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=46649)}),_N_E=e.O()}]);