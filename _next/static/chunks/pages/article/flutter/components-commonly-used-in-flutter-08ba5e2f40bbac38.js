(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1512],{43255:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/flutter/components-commonly-used-in-flutter",function(){return t(16078)}])},16078:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eY}});var r=t(85893),l=t(67294),i=t(9008),o=t.n(i),a=t(1918),s=t(90578),c=t(74902),d=t(93967),u=t.n(d),h=t(56790);let p=e=>"object"==typeof e&&null!=e&&1===e.nodeType,x=(e,n)=>(!n||"hidden"!==e)&&"visible"!==e&&"clip"!==e,m=(e,n)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let t=getComputedStyle(e,null);return x(t.overflowY,n)||x(t.overflowX,n)||(e=>{let n=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!n&&(n.clientHeight<e.scrollHeight||n.clientWidth<e.scrollWidth)})(e)}return!1},f=(e,n,t,r,l,i,o,a)=>i<e&&o>n||i>e&&o<n?0:i<=e&&a<=t||o>=n&&a>=t?i-e-r:o>n&&a<t||i<e&&a>t?o-n+l:0,g=e=>{let n=e.parentElement;return null==n?e.getRootNode().host||null:n},j=(e,n)=>{var t,r,l,i;if("undefined"==typeof document)return[];let{scrollMode:o,block:a,inline:s,boundary:c,skipOverflowHiddenElements:d}=n,u="function"==typeof c?c:e=>e!==c;if(!p(e))throw TypeError("Invalid target");let h=document.scrollingElement||document.documentElement,x=[],j=e;for(;p(j)&&u(j);){if((j=g(j))===h){x.push(j);break}null!=j&&j===document.body&&m(j)&&!m(document.documentElement)||null!=j&&m(j,d)&&x.push(j)}let v=null!=(r=null==(t=window.visualViewport)?void 0:t.width)?r:innerWidth,b=null!=(i=null==(l=window.visualViewport)?void 0:l.height)?i:innerHeight,{scrollX:w,scrollY:k}=window,{height:y,width:I,top:S,right:C,bottom:B,left:E}=e.getBoundingClientRect(),{top:F,right:W,bottom:N,left:T}=(e=>{let n=window.getComputedStyle(e);return{top:parseFloat(n.scrollMarginTop)||0,right:parseFloat(n.scrollMarginRight)||0,bottom:parseFloat(n.scrollMarginBottom)||0,left:parseFloat(n.scrollMarginLeft)||0}})(e),R="start"===a||"nearest"===a?S-F:"end"===a?B+N:S+y/2-F+N,_="center"===s?E+I/2-T+W:"end"===s?C+W:E-T,$=[];for(let e=0;e<x.length;e++){let n=x[e],{height:t,width:r,top:l,right:i,bottom:c,left:d}=n.getBoundingClientRect();if("if-needed"===o&&S>=0&&E>=0&&B<=b&&C<=v&&S>=l&&B<=c&&E>=d&&C<=i)break;let u=getComputedStyle(n),p=parseInt(u.borderLeftWidth,10),m=parseInt(u.borderTopWidth,10),g=parseInt(u.borderRightWidth,10),j=parseInt(u.borderBottomWidth,10),F=0,W=0,N="offsetWidth"in n?n.offsetWidth-n.clientWidth-p-g:0,T="offsetHeight"in n?n.offsetHeight-n.clientHeight-m-j:0,P="offsetWidth"in n?0===n.offsetWidth?0:r/n.offsetWidth:0,A="offsetHeight"in n?0===n.offsetHeight?0:t/n.offsetHeight:0;if(h===n)F="start"===a?R:"end"===a?R-b:"nearest"===a?f(k,k+b,b,m,j,k+R,k+R+y,y):R-b/2,W="start"===s?_:"center"===s?_-v/2:"end"===s?_-v:f(w,w+v,v,p,g,w+_,w+_+I,I),F=Math.max(0,F+k),W=Math.max(0,W+w);else{F="start"===a?R-l-m:"end"===a?R-c+j+T:"nearest"===a?f(l,c,t,m,j+T,R,R+y,y):R-(l+t/2)+T/2,W="start"===s?_-d-p:"center"===s?_-(d+r/2)+N/2:"end"===s?_-i+g+N:f(d,i,r,p,g+N,_,_+I,I);let{scrollLeft:e,scrollTop:o}=n;F=0===A?0:Math.max(0,Math.min(o+F/A,n.scrollHeight-t/A+T)),W=0===P?0:Math.max(0,Math.min(e+W/P,n.scrollWidth-r/P+N)),R+=o-F,_+=e-W}$.push({el:n,top:F,left:W})}return $},v=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};var b=t(4547),w=t(1956),k=t(9220),y=t(98423),I=t(14030),S=t(93565),C=t(76129),B=(0,C.I$)("Affix",e=>{let{componentCls:n}=e;return{[n]:{position:"fixed",zIndex:e.zIndexPopup}}},e=>({zIndexPopup:e.zIndexBase+10}));function E(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function F(e,n,t){if(void 0!==t&&Math.round(n.top)>Math.round(e.top)-t)return t+n.top}function W(e,n,t){if(void 0!==t&&Math.round(n.bottom)<Math.round(e.bottom)+t)return t+(window.innerHeight-n.bottom)}let N=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function T(){return window}let R=l.forwardRef((e,n)=>{var t;let{style:r,offsetTop:i,offsetBottom:o,prefixCls:a,className:s,rootClassName:c,children:d,target:h,onChange:p}=e,{getPrefixCls:x,getTargetContainer:m}=l.useContext(S.E_),f=x("affix",a),[g,j]=l.useState(!1),[v,b]=l.useState(),[w,C]=l.useState(),R=l.useRef(0),_=l.useRef(null),$=l.useRef(),P=l.useRef(null),A=l.useRef(null),L=l.useRef(null),M=null!==(t=null!=h?h:m)&&void 0!==t?t:T,D=void 0===o&&void 0===i?0:i,O=()=>{if(1!==R.current||!A.current||!P.current||!M)return;let e=M();if(e){let n={status:0},t=E(P.current);if(0===t.top&&0===t.left&&0===t.width&&0===t.height)return;let r=E(e),l=F(t,r,D),i=W(t,r,o);void 0!==l?(n.affixStyle={position:"fixed",top:l,width:t.width,height:t.height},n.placeholderStyle={width:t.width,height:t.height}):void 0!==i&&(n.affixStyle={position:"fixed",bottom:i,width:t.width,height:t.height},n.placeholderStyle={width:t.width,height:t.height}),n.lastAffix=!!n.affixStyle,g!==n.lastAffix&&(null==p||p(n.lastAffix)),R.current=n.status,b(n.affixStyle),C(n.placeholderStyle),j(n.lastAffix)}},z=()=>{R.current=1,O()},H=(0,I.Z)(()=>{z()}),Z=(0,I.Z)(()=>{if(M&&v){let e=M();if(e&&P.current){let n=E(e),t=E(P.current),r=F(t,n,D),l=W(t,n,o);if(void 0!==r&&v.top===r||void 0!==l&&v.bottom===l)return}}z()}),V=()=>{let e=null==M?void 0:M();e&&(N.forEach(n=>{var t;$.current&&(null===(t=_.current)||void 0===t||t.removeEventListener(n,$.current)),null==e||e.addEventListener(n,Z)}),_.current=e,$.current=Z)},G=()=>{L.current&&(clearTimeout(L.current),L.current=null);let e=null==M?void 0:M();N.forEach(n=>{var t;null==e||e.removeEventListener(n,Z),$.current&&(null===(t=_.current)||void 0===t||t.removeEventListener(n,$.current))}),H.cancel(),Z.cancel()};l.useImperativeHandle(n,()=>({updatePosition:H})),l.useEffect(()=>(L.current=setTimeout(V),()=>G()),[]),l.useEffect(()=>{V()},[h,v]),l.useEffect(()=>{H()},[h,i,o]);let[X,q,J]=B(f),Y=u()(c,q,f,J),K=u()({[Y]:v}),U=(0,y.Z)(e,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return X(l.createElement(k.Z,{onResize:H},l.createElement("div",Object.assign({style:r,className:s,ref:P},U),v&&l.createElement("div",{style:w,"aria-hidden":"true"}),l.createElement("div",{className:K,ref:A,style:v},l.createElement(k.Z,{onResize:H},d)))))});var _=t(36076);let $=l.createContext(void 0);var P=e=>{let{href:n,title:t,prefixCls:r,children:i,className:o,target:a,replace:s}=e,{registerLink:c,unregisterLink:d,scrollTo:h,onClick:p,activeLink:x,direction:m}=l.useContext($)||{};l.useEffect(()=>(null==c||c(n),()=>{null==d||d(n)}),[n]);let{getPrefixCls:f}=l.useContext(S.E_),g=f("anchor",r),j=x===n,v=u()(`${g}-link`,o,{[`${g}-link-active`]:j}),b=u()(`${g}-link-title`,{[`${g}-link-title-active`]:j});return l.createElement("div",{className:v},l.createElement("a",{className:b,href:n,title:"string"==typeof t?t:"",target:a,onClick:e=>{null==p||p(e,{title:t,href:n}),null==h||h(n),s&&(e.preventDefault(),window.location.replace(n))}},t),"horizontal"!==m?i:null)},A=t(11568),L=t(5710),M=t(83262);let D=e=>{let{componentCls:n,holderOffsetBlock:t,motionDurationSlow:r,lineWidthBold:l,colorPrimary:i,lineType:o,colorSplit:a,calc:s}=e;return{[`${n}-wrapper`]:{marginBlockStart:s(t).mul(-1).equal(),paddingBlockStart:t,[n]:Object.assign(Object.assign({},(0,L.Wf)(e)),{position:"relative",paddingInlineStart:l,[`${n}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${(0,A.bf)(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},L.vS),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${n}-link-title`]:{color:e.colorPrimary},[`${n}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${n}-wrapper-horizontal)`]:{[n]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${(0,A.bf)(l)} ${o} ${a}`,content:'" "'},[`${n}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${r} ease-in-out`,width:l,backgroundColor:i,[`&${n}-ink-visible`]:{display:"inline-block"}}}},[`${n}-fixed ${n}-ink ${n}-ink`]:{display:"none"}}}},O=e=>{let{componentCls:n,motionDurationSlow:t,lineWidthBold:r,colorPrimary:l}=e;return{[`${n}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${(0,A.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[n]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${n}-link:first-of-type`]:{paddingInline:0},[`${n}-ink`]:{position:"absolute",bottom:0,transition:`left ${t} ease-in-out, width ${t} ease-in-out`,height:r,backgroundColor:l}}}}};var z=(0,C.I$)("Anchor",e=>{let{fontSize:n,fontSizeLG:t,paddingXXS:r,calc:l}=e,i=(0,M.IX)(e,{holderOffsetBlock:r,anchorPaddingBlockSecondary:l(r).div(2).equal(),anchorTitleBlock:l(n).div(14).mul(3).equal(),anchorBallSize:l(t).div(2).equal()});return[D(i),O(i)]},e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding}));function H(){return window}function Z(e,n){if(!e.getClientRects().length)return 0;let t=e.getBoundingClientRect();return t.width||t.height?n===window?t.top-e.ownerDocument.documentElement.clientTop:t.top-n.getBoundingClientRect().top:t.top}let V=/#([\S ]+)$/,G=e=>{var n;let{rootClassName:t,prefixCls:r,className:i,style:o,offsetTop:a,affix:s=!0,showInkInFixed:d=!1,children:p,items:x,direction:m="vertical",bounds:f,targetOffset:g,onClick:k,onChange:y,getContainer:I,getCurrentAnchor:C,replace:B}=e,[E,F]=l.useState([]),[W,N]=l.useState(null),T=l.useRef(W),A=l.useRef(null),L=l.useRef(null),M=l.useRef(!1),{direction:D,anchor:O,getTargetContainer:G,getPrefixCls:X}=l.useContext(S.E_),q=X("anchor",r),J=(0,_.Z)(q),[Y,K,U]=z(q,J),Q=null!==(n=null!=I?I:G)&&void 0!==n?n:H,ee=JSON.stringify(E),en=(0,h.zX)(e=>{E.includes(e)||F(n=>[].concat((0,c.Z)(n),[e]))}),et=(0,h.zX)(e=>{E.includes(e)&&F(n=>n.filter(n=>n!==e))}),er=()=>{var e;let n=null===(e=A.current)||void 0===e?void 0:e.querySelector(`.${q}-link-title-active`);if(n&&L.current){let{style:e}=L.current,t="horizontal"===m;e.top=t?"":`${n.offsetTop+n.clientHeight/2}px`,e.height=t?"":`${n.clientHeight}px`,e.left=t?`${n.offsetLeft}px`:"",e.width=t?`${n.clientWidth}px`:"",t&&function(e,n){if(!e.isConnected||!(e=>{let n=e;for(;n&&n.parentNode;){if(n.parentNode===document)return!0;n=n.parentNode instanceof ShadowRoot?n.parentNode.host:n.parentNode}return!1})(e))return;let t=(e=>{let n=window.getComputedStyle(e);return{top:parseFloat(n.scrollMarginTop)||0,right:parseFloat(n.scrollMarginRight)||0,bottom:parseFloat(n.scrollMarginBottom)||0,left:parseFloat(n.scrollMarginLeft)||0}})(e);if("object"==typeof n&&"function"==typeof n.behavior)return n.behavior(j(e,n));let r="boolean"==typeof n||null==n?void 0:n.behavior;for(let{el:l,top:i,left:o}of j(e,v(n))){let e=i-t.top+t.bottom,n=o-t.left+t.right;l.scroll({top:e,left:n,behavior:r})}}(n,{scrollMode:"if-needed",block:"nearest"})}},el=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[],l=Q();return(e.forEach(e=>{let i=V.exec(null==e?void 0:e.toString());if(!i)return;let o=document.getElementById(i[1]);if(o){let i=Z(o,l);i<=n+t&&r.push({link:e,top:i})}}),r.length)?r.reduce((e,n)=>n.top>e.top?n:e).link:""},ei=(0,h.zX)(e=>{if(T.current===e)return;let n="function"==typeof C?C(e):e;N(n),T.current=n,null==y||y(e)}),eo=l.useCallback(()=>{M.current||ei(el(E,void 0!==g?g:a||0,f))},[ee,g,a]),ea=l.useCallback(e=>{ei(e);let n=V.exec(e);if(!n)return;let t=document.getElementById(n[1]);if(!t)return;let r=Q(),l=(0,b.Z)(r)+Z(t,r);l-=void 0!==g?g:a||0,M.current=!0,(0,w.Z)(l,{getContainer:Q,callback(){M.current=!1}})},[g,a]),es=u()(K,U,J,t,`${q}-wrapper`,{[`${q}-wrapper-horizontal`]:"horizontal"===m,[`${q}-rtl`]:"rtl"===D},i,null==O?void 0:O.className),ec=u()(q,{[`${q}-fixed`]:!s&&!d}),ed=u()(`${q}-ink`,{[`${q}-ink-visible`]:W}),eu=Object.assign(Object.assign({maxHeight:a?`calc(100vh - ${a}px)`:"100vh"},null==O?void 0:O.style),o),eh=e=>Array.isArray(e)?e.map(e=>l.createElement(P,Object.assign({replace:B},e,{key:e.key}),"vertical"===m&&eh(e.children))):null,ep=l.createElement("div",{ref:A,className:es,style:eu},l.createElement("div",{className:ec},l.createElement("span",{className:ed,ref:L}),"items"in e?eh(x):p));l.useEffect(()=>{let e=Q();return eo(),null==e||e.addEventListener("scroll",eo),()=>{null==e||e.removeEventListener("scroll",eo)}},[ee]),l.useEffect(()=>{"function"==typeof C&&ei(C(T.current||""))},[C]),l.useEffect(()=>{er()},[m,C,ee,W]);let ex=l.useMemo(()=>({registerLink:en,unregisterLink:et,scrollTo:ea,activeLink:W,onClick:k,direction:m}),[W,k,ea,m]);return Y(l.createElement($.Provider,{value:ex},s?l.createElement(R,Object.assign({offsetTop:a,target:Q},s&&"object"==typeof s?s:void 0),ep):ep))};G.Link=P;var X=t(76467),q=t(12424),J=t(74553),Y=t(7094),K=t(11151);function U(e){let n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"MaterialApp"}),"\n",(0,r.jsx)(n.p,{children:"它是应用程序的入口。"}),"\n",(0,r.jsx)(n.h4,{children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"{ ThemeData } theme: 默认视觉属性，例如颜色字体和形状。"}),"\n",(0,r.jsx)(n.li,{children:"initialRoute: 初始化路由。"}),"\n",(0,r.jsx)(n.li,{children:"onGenerateRoute: 路由生成器。建议路由使用beamer。"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport 'package:beamer/beamer.dart';\n\nclass Routes {\n  static String home = '/';\n\n  static final routerDelegate = BeamerDelegate(\n    locationBuilder: SimpleLocationBuilder(\n      routes: {\n        home: (BuildContext context, BeamState state) => Home()\n      }\n    )\n  );\n}\n\nclass MaterialAppExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp.router(\n      theme: ThemeData(primaryColor: Colors.white), // 修改主体颜色\n      routeInformationParser: BeamerParser(),\n      routerDelegate: Routes.routerDelegate\n    );\n  }\n}\n"})})]})}function Q(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(U,{...e})}):U(e)}function ee(e){let n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Scaffold"}),"\n",(0,r.jsx)(n.p,{children:"基本的视觉布局结构。此类提供用于显示抽屉和底部工作表的API。"}),"\n",(0,r.jsx)(n.h4,{children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"{ AppBar } appBar: 顶部"}),"\n",(0,r.jsx)(n.li,{children:"body"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass Scaffold extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        elevation: 0, // 去除阴影\n        backgroundColor: Colors.white, // 修改主体颜色\n        shape: Border(bottom: BorderSide(color: Color(0x000000), width: 1)), // 下边框\n        title: Text('标题', style: TextStyle(color: Colors.black)),\n        actions: <Widget>[SendButton(buttonText: '按钮')],\n        leading: IconButton(\n          icon: Icon(Icons.arrow_back_ios, color: Colors.black),\n          onPressed: () {}\n        )\n      ),\n      body: Component()\n    );\n  }\n}\n"})})]})}function en(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ee,{...e})}):ee(e)}function et(e){let n={h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"AppBar"}),"\n",(0,r.jsx)(n.p,{children:"应用栏目。"}),"\n",(0,r.jsx)(n.h4,{children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"elevation: 阴影。"}),"\n",(0,r.jsx)(n.li,{children:"backgroundColor: 背景颜色。"}),"\n",(0,r.jsx)(n.li,{children:"shape: 下边框。"}),"\n",(0,r.jsx)(n.li,{children:"title: 导航标题。"}),"\n",(0,r.jsx)(n.li,{children:"actions: 右侧小组件。"}),"\n",(0,r.jsx)(n.li,{children:"leading: 左侧导航配置。"}),"\n"]})]})}function er(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(et,{...e})}):et(e)}function el(e){let n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Container"}),"\n",(0,r.jsx)(n.p,{children:"一个方便的小部件，结合了常见的绘画、定位和大小调整小部件。"}),"\n",(0,r.jsx)(n.h4,{children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"width: 宽"}),"\n",(0,r.jsx)(n.li,{children:"height: 高"}),"\n",(0,r.jsx)(n.li,{children:"padding"}),"\n",(0,r.jsx)(n.li,{children:"{ BoxDecoration } decoration"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass ContainerExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      decoration: BoxDecoration(\n        border: Border(\n          bottom: BorderSide(\n            width: 1.0,\n            color: Color.fromRGBO(238, 238, 238, 1)\n          )\n        )\n      ),\n      padding: EdgeInsets.only(top: 12.0, bottom: 12.0),\n      child: Component()\n    );\n  }\n}\n"})})]})}function ei(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(el,{...e})}):el(e)}function eo(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Column"}),"\n",(0,r.jsx)(n.p,{children:"在垂直阵列中显示其子项的小部件。"})]})}function ea(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eo,{...e})}):eo(e)}function es(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Row"}),"\n",(0,r.jsx)(n.p,{children:"在水平阵列中显示其子项的小部件。"})]})}function ec(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(es,{...e})}):es(e)}function ed(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Expanded"}),"\n",(0,r.jsx)(n.p,{children:"扩展 Row、Column 或 Flex 的子级以便子级填充可用空间的小部件。"})]})}function eu(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ed,{...e})}):ed(e)}function eh(e){let n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"GridView"}),"\n",(0,r.jsx)(n.p,{children:"网格组件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass GridViewExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return GridView(\n      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(\n        crossAxisCount: 3,    //横轴三个子widget\n        childAspectRatio: 1.0 //宽高比为1时，子widget\n      ),\n      children:<Widget>[\n        Icon(Icons.ac_unit),\n        Icon(Icons.airport_shuttle),\n        Icon(Icons.all_inclusive),\n        Icon(Icons.beach_access),\n        Icon(Icons.cake),\n        Icon(Icons.free_breakfast)\n      ]\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"{ bool } shrinkWrap: 该属性表示是否根据子组件的总长度来设置ListView的长度，默认值为false 。\n默认情况下，ListView的会在滚动方向尽可能多的占用空间。\n当ListView在一个无边界(滚动方向上)的容器中时，shrinkWrap必须为true。"}),"\n",(0,r.jsx)(n.li,{children:"physics: NeverScrollableScrollPhysics()。禁止滑动。"}),"\n",(0,r.jsx)(n.li,{children:"controller: ScrollController(keepScrollOffset: false)。禁止回弹效果。"}),"\n"]})]})}function ep(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eh,{...e})}):eh(e)}function ex(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"ListView"}),"\n",(0,r.jsx)(n.p,{children:"列表组件，可以允许滚动。"})]})}function em(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ex,{...e})}):ex(e)}function ef(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Stack"}),"\n",(0,r.jsx)(n.p,{children:"重叠布局，允许子组件堆叠。"})]})}function eg(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ef,{...e})}):ef(e)}function ej(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Positioned"}),"\n",(0,r.jsx)(n.p,{children:"配合Stack实现绝对定位。"})]})}function ev(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ej,{...e})}):ej(e)}function eb(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"SizedBox"}),"\n",(0,r.jsx)(n.p,{children:"一般用来限制子控件的大小。"})]})}function ew(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eb,{...e})}):eb(e)}function ek(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Center"}),"\n",(0,r.jsx)(n.p,{children:"将其子项置于自身中心的小部件。"})]})}function ey(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ek,{...e})}):ek(e)}function eI(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Align"}),"\n",(0,r.jsx)(n.p,{children:"对齐组件。"})]})}function eS(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eI,{...e})}):eI(e)}function eC(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Padding"}),"\n",(0,r.jsx)(n.p,{children:"内边距组件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass PaddingExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Padding(\n      padding: EdgeInsets.only(top: 5.0, right: 10.0, bottom: 5.0, left: 10.0),\n      child: Text('Padding')\n    );\n  }\n}\n"})})]})}function eB(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eC,{...e})}):eC(e)}function eE(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"ClipRRect"}),"\n",(0,r.jsx)(n.p,{children:"圆角形状。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass ClipRRectExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ClipRRect(\n      borderRadius: BorderRadius.circular(5.0),\n      child: Component()\n    );\n  }\n}\n"})})]})}function eF(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eE,{...e})}):eE(e)}function eW(e){let n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"ElevatedButton"}),"\n",(0,r.jsx)(n.p,{children:"按钮组件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass ElevatedButtonExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      style: ButtonStyle(\n        backgroundColor: MaterialStateProperty.all(Color.fromRGBO(245, 67, 67, 1)), // 颜色\n        shape: MaterialStateProperty.all( // 带有圆角的矩形边框\n          RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0))\n        ),\n        side: MaterialStateProperty.all(BorderSide(color: Colors.purple, width: 3))\n      ),\n      child: Padding(\n        child: Text('按钮')\n      ),\n      onPressed: () {}\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{children:"ElevatedButton.icon"}),"\n",(0,r.jsx)(n.p,{children:"带图标的按钮组件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass ElevatedButtonIconExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton.icon(\n      icon: Icon(Icons.g_mobiledata),\n      label: Text('按钮'),\n      onPressed: () {},\n    );\n  }\n}\n"})})]})}function eN(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eW,{...e})}):eW(e)}function eT(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"IconButton"}),"\n",(0,r.jsx)(n.p,{children:"图标按钮。"})]})}function eR(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eT,{...e})}):eT(e)}function e_(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"TextField"}),"\n",(0,r.jsx)(n.p,{children:"表单input输入组件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nfinal TextEditingController controller = TextEditingController();\nfinal FocusNode focusNode = FocusNode();\n\nclass TextFieldExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return TextField(\n      controller: controller,\n      focusNode: focusNode,\n      autofocus: true,\n      minLines: 5,\n      maxLines: 10,\n      keyboardType: TextInputType.multiline,\n      textInputAction: TextInputAction.newline,\n      decoration: InputDecoration.collapsed(hintText: '请输入文字'),\n      onChanged: (String value) {}\n    );\n  }\n}\n"})})]})}function e$(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(e_,{...e})}):e_(e)}function eP(e){let n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Image"}),"\n",(0,r.jsx)(n.p,{children:"图片展示组件。"}),"\n",(0,r.jsx)(n.h4,{children:"AssetImage"}),"\n",(0,r.jsx)(n.p,{children:"响应式加载图片。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Image img = Image(image: AssetImage('statics/images/1.png'));\n"})}),"\n",(0,r.jsx)(n.h4,{children:"NetworkImage"}),"\n",(0,r.jsx)(n.p,{children:"加载网络图片。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Image img = Image(\n  image: NetworkImage('https://example.com/1.png'),\n  fit: BoxFit.cover // 设置图片的背景展示\n);\n"})}),"\n",(0,r.jsx)(n.h4,{children:"Image.file"}),"\n",(0,r.jsx)(n.p,{children:"加载本地图片。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Image image = Image.file(File(imagePath));\n"})}),"\n",(0,r.jsx)(n.h4,{children:"Image.memory"}),"\n",(0,r.jsx)(n.p,{children:"根据Uint8List渲染图片。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Uint8List img = getImage();\nImage image = Image.memory(img, fit: BoxFit.cover);\n"})})]})}function eA(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eP,{...e})}):eP(e)}function eL(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"GestureDetector"}),"\n",(0,r.jsx)(n.p,{children:"手势检测的部件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\n/// 取消input的焦点\nclass GestureDetectorExample extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return GestureDetector(\n      behavior: HitTestBehavior.translucent,\n      onTap: () {\n        // 触摸收起键盘\n        FocusScope.of(context).requestFocus(FocusNode());\n      },\n      child: Text('')\n    );\n  }\n}\n"})})]})}function eM(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eL,{...e})}):eL(e)}function eD(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"showDialog"}),"\n",(0,r.jsx)(n.p,{children:"展示弹出框。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\n/// 弹出框\n/// @param { BuildContext } context\n/// @param { String } message: 文本\nvoid alert(BuildContext context, String message) {\n  showDialog(\n    context: context,\n    barrierColor: Color.fromRGBO(0, 0, 0, 0),\n    builder: (c) {\n      return AlertDialog(\n        backgroundColor: Color.fromRGBO(33, 34, 35, 0.9),\n        elevation: 0,\n        content: Text(\n          message,\n          style: TextStyle(color: Colors.white),\n          textAlign: TextAlign.center\n        )\n      );\n    }\n  );\n}\n"})})]})}function eO(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eD,{...e})}):eD(e)}function ez(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"InheritedWidget"}),"\n",(0,r.jsx)(n.p,{children:"状态管理。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"class InheritedWidgetProvider extends StatefulWidget {\n  @override\n  _InheritedWidgetProvider createState() => _InheritedWidgetProvider();\n}\n\nclass _InheritedWidgetProvider extends State<InheritedWidgetProvider> {\n  String value = '';\n\n  @override\n  Widget build(BuildContext context) {\n    return InheritedWidgetExample(value: value);\n  }\n}\n\nclass InheritedWidgetExample extends InheritedWidget {\n  String value;\n\n  InheritedWidgetExample({\n    Key? key,\n    required Widget child,\n    required String this.value\n  }): super(key: key, child: child);\n\n  static InheritedWidgetExample of(BuildContext context) {\n    final FormValueContext? ctx\n      = context.dependOnInheritedWidgetOfExactType<FormValueContext>();\n\n    return ctx!;\n  }\n\n  @override\n  bool updateShouldNotify(FormValueContext oldWidget) {\n    return oldWidget.value != value;\n  }\n}\n"})})]})}function eH(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(ez,{...e})}):ez(e)}function eZ(e){let n={a:"a",h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"Notification"}),"\n",(0,r.jsxs)(n.p,{children:["跨组件通信。网站参考：",(0,r.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/110120429",children:"https://zhuanlan.zhihu.com/p/110120429"}),"。"]})]})}function eV(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eZ,{...e})}):eZ(e)}function eG(e){let n={h3:"h3",p:"p",...(0,K.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{children:"RawKeyboardListener"}),"\n",(0,r.jsx)(n.p,{children:"监听键盘事件。"})]})}function eX(e={}){let{wrapper:n}={...(0,K.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(eG,{...e})}):eG(e)}let{Title:eq}=a.default;var eJ=function(e){return(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(eq,{children:"Flutter常用的组件"}),(0,r.jsx)(eq,{id:"application",level:2,children:"应用程序组件"}),(0,r.jsx)(Q,{}),(0,r.jsx)(en,{}),(0,r.jsx)(er,{}),(0,r.jsx)(eq,{id:"box-model-layout",level:2,children:"盒模型布局组件"}),(0,r.jsx)(ei,{}),(0,r.jsx)(ea,{}),(0,r.jsx)(ec,{}),(0,r.jsx)(eu,{}),(0,r.jsx)(ep,{}),(0,r.jsx)(em,{}),(0,r.jsx)(eg,{}),(0,r.jsx)(ev,{}),(0,r.jsx)(ew,{}),(0,r.jsx)(eq,{id:"style",level:2,children:"样式组件"}),(0,r.jsx)(ey,{}),(0,r.jsx)(eS,{}),(0,r.jsx)(eB,{}),(0,r.jsx)(eF,{}),(0,r.jsx)(eq,{id:"functional",level:2,children:"功能组件"}),(0,r.jsx)(eN,{}),(0,r.jsx)(eR,{}),(0,r.jsx)(e$,{}),(0,r.jsx)(eA,{}),(0,r.jsx)(eq,{id:"tools",level:2,children:"工具组件"}),(0,r.jsx)(eM,{}),(0,r.jsx)(eO,{}),(0,r.jsx)(eH,{}),(0,r.jsx)(eV,{}),(0,r.jsx)(eX,{}),(0,r.jsx)(s.Z,{type:"info",message:[(0,r.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,r.jsxs)("div",{className:"py-[8px]",children:["Flutter实战：",(0,r.jsx)(J.Z,{href:"https://book.flutterchina.club/",children:"https://book.flutterchina.club/"})]},"flutter-in-action"),(0,r.jsxs)("div",{className:"py-[8px]",children:["Flutter富文本编辑器：",(0,r.jsx)(J.Z,{href:"https://pub.dev/packages/rich_code_editor",children:"https://pub.dev/packages/rich_code_editor"})]},"rich_code_editor"),(0,r.jsxs)("div",{className:"py-[8px]",children:["Flutter自定义块样式输入框：",(0,r.jsx)(J.Z,{href:"https://github.com/JiangJuHong/FlutterTextSpanField",children:"https://github.com/JiangJuHong/FlutterTextSpanField"})]},"FlutterTextSpanField")]}),(0,Y.Z)()?null:(0,r.jsx)(X.default,{children:(0,r.jsxs)(G,{className:"fixed top-[64px] right-[20px]",targetOffset:70,children:[(0,r.jsx)(G.Link,{href:"#application",title:"应用程序组件"}),(0,r.jsx)(G.Link,{href:"#box-model-layout",title:"盒模型布局组件"}),(0,r.jsx)(G.Link,{href:"#style",title:"样式组件"}),(0,r.jsx)(G.Link,{href:"#functional",title:"功能组件"}),(0,r.jsx)(G.Link,{href:"#tools",title:"工具组件"})]})})]})};function eY(e){return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Flutter常用的组件"}),(0,r.jsx)("meta",{name:"keywords",content:"Flutter, Dart"}),(0,r.jsx)("meta",{name:"description",content:"Flutter常用的组件"})]}),(0,r.jsx)(eJ,{})]})}},11035:function(e,n,t){"use strict";var r=t(85893),l=t(73935),i=t(39332),o=t(57140),a=t(44594),s=t(84669),c=t(85486),d=t(76467),u=t(45212),h=t.n(u);let{BackTop:p}=o.default;n.Z=function(e){let n=(0,i.useRouter)();return[(0,r.jsxs)("div",{className:h().main,children:[e.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,r.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,r.jsx)(d.default,{children:"object"==typeof document?(0,l.createPortal)((0,r.jsx)(p,{type:"primary",icon:(0,r.jsx)(s.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},12424:function(e,n,t){"use strict";var r=t(85893),l=t(11035);n.Z=function(e){return(0,r.jsx)(l.Z,{goToTop:!0,goBack:!0,children:e.children})}},7094:function(e,n){"use strict";n.Z=function(){{let e=window.navigator.userAgent;return/iphone|ipad|ipod|ios|android/i.test(e)}}},45212:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[4594,2409,578,2888,9774,179],function(){return e(e.s=43255)}),_N_E=e.O()}]);