(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{5467:function(e,n,t){"use strict";function r(e){return Object.keys(e).reduce((function(n,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(n[t]=e[t]),n}),{})}t.d(n,{Z:function(){return r}})},14670:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(87462),a=t(97685),s=t(4942),c=t(89739),i=t(8751),o=t(4340),l=t(18429),d=t(97937),u=t(21640),h=t(11475),p=t(78860),m=t(45605),f=t(94184),x=t.n(f),v=t(62874),g=t(67294),j=t(53124),b=t(5467),_=t(96159),A=t(15671),w=t(43144),N=t(32531),Z=t(73568),R=function(e){(0,N.Z)(t,e);var n=(0,Z.Z)(t);function t(){var e;return(0,A.Z)(this,t),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,w.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,t=e.description,r=e.children,a=this.state,s=a.error,c=a.info,i=c&&c.componentStack?c.componentStack:null,o="undefined"===typeof n?(s||"").toString():n,l="undefined"===typeof t?i:t;return s?g.createElement(T,{type:"error",message:o,description:g.createElement("pre",null,l)}):r}}]),t}(g.Component),k=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},y={success:c.Z,info:p.Z,error:o.Z,warning:u.Z},S={success:i.Z,info:m.Z,error:l.Z,warning:h.Z},E=function(e){var n=e.description,t=e.icon,r=e.prefixCls,a=e.type,c=(n?S:y)[a]||null;return t?(0,_.wm)(t,g.createElement("span",{className:"".concat(r,"-icon")},t),(function(){return{className:x()("".concat(r,"-icon"),(0,s.Z)({},t.props.className,t.props.className))}})):g.createElement(c,{className:"".concat(r,"-icon")})},C=function(e){var n=e.isClosable,t=e.closeText,r=e.prefixCls,a=e.closeIcon,s=e.handleClose;return n?g.createElement("button",{type:"button",onClick:s,className:"".concat(r,"-close-icon"),tabIndex:0},t?g.createElement("span",{className:"".concat(r,"-close-text")},t):a):null},P=function(e){var n,t=e.description,c=e.prefixCls,i=e.message,o=e.banner,l=e.className,u=void 0===l?"":l,h=e.style,p=e.onMouseEnter,m=e.onMouseLeave,f=e.onClick,_=e.afterClose,A=e.showIcon,w=e.closable,N=e.closeText,Z=e.closeIcon,R=void 0===Z?g.createElement(d.Z,null):Z,y=e.action,S=k(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),P=g.useState(!1),T=(0,a.Z)(P,2),L=T[0],D=T[1],I=g.useRef(),F=g.useContext(j.E_),O=F.getPrefixCls,H=F.direction,M=O("alert",c),z=function(e){var n;D(!0),null===(n=S.onClose)||void 0===n||n.call(S,e)},V=!!N||w,q=function(){var e=S.type;return void 0!==e?e:o?"warning":"info"}(),B=!(!o||void 0!==A)||A,W=x()(M,"".concat(M,"-").concat(q),(n={},(0,s.Z)(n,"".concat(M,"-with-description"),!!t),(0,s.Z)(n,"".concat(M,"-no-icon"),!B),(0,s.Z)(n,"".concat(M,"-banner"),!!o),(0,s.Z)(n,"".concat(M,"-rtl"),"rtl"===H),n),u),X=(0,b.Z)(S);return g.createElement(v.Z,{visible:!L,motionName:"".concat(M,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:_},(function(e){var n=e.className,a=e.style;return g.createElement("div",(0,r.Z)({ref:I,"data-show":!L,className:x()(W,n),style:(0,r.Z)((0,r.Z)({},h),a),onMouseEnter:p,onMouseLeave:m,onClick:f,role:"alert"},X),B?g.createElement(E,{description:t,icon:S.icon,prefixCls:M,type:q}):null,g.createElement("div",{className:"".concat(M,"-content")},i?g.createElement("div",{className:"".concat(M,"-message")},i):null,t?g.createElement("div",{className:"".concat(M,"-description")},t):null),y?g.createElement("div",{className:"".concat(M,"-action")},y):null,g.createElement(C,{isClosable:!!V,closeText:N,prefixCls:M,closeIcon:R,handleClose:z}))}))};P.ErrorBoundary=R;var T=P},55733:function(e,n,t){"use strict";t(24675)},90030:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(67294),a=t(9008),s=t.n(a),c=(t(55733),t(14670)),i=(t(71214),t(63534)),o=t(19751),l=t.n(o),d=t(9991),u=t(26618),h=t(85893),p=i.Z.Title,m=i.Z.Paragraph,f=i.Z.Text;var x=function(e){return(0,h.jsxs)(d.Z,{children:[(0,h.jsx)(p,{children:"\u89c6\u9891\u53c2\u6570PAR\u3001DAR\u3001SAR\u7684\u533a\u522b"}),(0,h.jsx)(m,{children:"\u6628\u5929\u63a5\u5230\u7f16\u8f91\u7684\u53cd\u9988\uff0c\u5c3a\u5bf8524\xd7360\u7684\u89c6\u9891\uff0c\u8f6c\u7801\u540e\u7ed9\u5230\u7684\u5c3a\u5bf8\u53d8\u6210\u4e86640x360\u3002 \u6211\u5c06\u89c6\u9891\u4e0b\u8f7d\u4e0b\u6765\u540e\uff0c\u901a\u8fc7FFmpeg\u6765\u83b7\u53d6\u89c6\u9891\u7684\u7f16\u7801\uff0c\u5f97\u5230\u4e86\u5982\u4e0b\u4fe1\u606f\uff1a"}),(0,h.jsx)(u.Z,{type:"text",children:"Stream #0:0(eng): Video: h264 (Main) (avc1 / 0x31637661), yuv420p,\n640x360 [SAR 59:72 DAR 118:81],646 kb/s, 25 fps, 25 tbr, 12800 tbn, 50 tbc (default)"}),(0,h.jsx)(m,{children:"\u6211\u53c8\u5c06A\u7ad9\u7684\u89c6\u9891\u901a\u8fc7FFmpeg\u6765\u83b7\u53d6\u89c6\u9891\u7684\u7f16\u7801\uff0c\u5f97\u5230\u4e86\u5982\u4e0b\u4fe1\u606f\uff1a"}),(0,h.jsx)(u.Z,{type:"text",children:"Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p,\n3840x2160 [SAR 1:1 DAR 16:9], 7555 kb/s, 25 fps, 25 tbr, 90k tbn, 50 tbc (default)"}),(0,h.jsx)(m,{children:"\u5176\u4e2d\u6d89\u53ca\u5230\u4e86PAR\u3001DAR\u3001SAR\u7684\u8ba1\u7b97\uff0c\u7531\u4e8e\u5e73\u65f6\u7684\u89c6\u9891\u91c7\u6837\u7eb5\u6a2a\u6bd4\uff08SAR\uff09\u6bd4\u90fd\u662f1:1\uff0c\u800c\u8fd9\u4e2a\u89c6\u9891\u7684\u91c7\u6837\u7eb5\u6a2a\u6bd4\uff08SAR\uff09\u662f59:72\u3002\u8fd9\u5c31\u5bfc\u81f4\u4e86 \u83b7\u53d6\u7684\u5c3a\u5bf8\u6709\u95ee\u9898\u3002"}),(0,h.jsxs)(m,{children:["FFmpeg\u4e2d\u7684\u89c6\u9891\u53c2\u6570PAR\u3001DAR\u3001SAR\u7684\u89e3\u91ca\uff1a",(0,h.jsxs)("ol",{children:[(0,h.jsx)("li",{children:"PAR - pixel aspect ratio\uff0c\u5355\u4e2a\u50cf\u7d20\u7684\u5bbd\u9ad8\u6bd4\uff0c\u5927\u591a\u6570\u60c5\u51b5\u50cf\u7d20\u5bbd\u9ad8\u6bd4\u4e3a1:1\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u6b63\u65b9\u5f62\u50cf\u7d20\uff0c\u5982\u679c\u4e0d\u662f1:1\uff0c\u5219\u8be5\u50cf\u7d20\u53ef\u4ee5 \u7406\u89e3\u4e3a\u957f\u65b9\u5f62\u50cf\u7d20\u3002\u5e38\u7528\u7684PAR\u6bd4\u7387\u6709(1:1\uff0c10:11, 40:33, 16:11, 12:11)\u3002"}),(0,h.jsx)("li",{children:"DAR - display aspect ratio\uff0c\u663e\u793a\u5bbd\u9ad8\u6bd4\u3002\u5373\u6700\u7ec8\u64ad\u653e\u51fa\u6765\u7684\u753b\u9762\u7684\u5bbd\u4e0e\u9ad8\u4e4b\u6bd4\u3002\u6bd4\u5982\u5e38\u89c1\u768416:9\u548c4:3\u7b49\u3002\u7f29\u653e\u89c6\u9891\u4e5f\u8981\u6309\u8fd9\u4e2a\u6bd4\u4f8b \u6765\uff0c\u5426\u5219\u4f1a\u4f7f\u56fe\u50cf\u770b\u8d77\u6765\u88ab\u538b\u6241\u6216\u8005\u62c9\u957f\u4e86\u4f3c\u7684\u3002"}),(0,h.jsxs)("li",{className:l().keepAll,children:["SAR - Sample aspect ratio\uff0c\u91c7\u6837\u7eb5\u6a2a\u6bd4\uff0c\u8868\u793a\u6a2a\u5411\u7684\u50cf\u7d20\u70b9\u6570\u548c\u7eb5\u5411\u7684\u50cf\u7d20\u70b9\u6570\u7684\u6bd4\u503c\uff0c\u5373\u4e3a\u6211\u4eec\u901a\u5e38\u63d0\u5230\u7684\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u3002\u5c31\u662f\u5bf9\u56fe\u50cf \u91c7\u96c6\u65f6\uff0c\u6a2a\u5411\u91c7\u96c6\u4e0e\u7eb5\u5411\u91c7\u96c6\u6784\u6210\u7684\u70b9\u9635\uff0c\u6a2a\u5411\u70b9\u6570\u4e0e\u7eb5\u5411\u70b9\u6570\u7684\u6bd4\u503c\u3002\u6bd4\u5982VGA\u56fe\u50cf",(0,h.jsx)(f,{className:"inline-block",code:!0,children:"640 / 480 = 4 : 3"}),"\uff0cD-1 PAL\u56fe\u50cf",(0,h.jsx)(f,{className:"inline-block",code:!0,children:"720 / 576 = 5 : 4"}),"\uff0c\u9ad8\u6e05\u89c6\u9891\u7b49\u3002"]})]}),"\u4e09\u8005\u7684\u5173\u7cfb\uff1a",(0,h.jsx)(f,{className:"inline-block",code:!0,children:"PAR x SAR = DAR"}),"\u6216\u8005",(0,h.jsx)(f,{className:"inline-block",code:!0,children:"PAR = DAR / SAR"}),"\u3002"]}),(0,h.jsx)(c.Z,{type:"info",message:[(0,h.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"\u53c2\u8003\u5730\u5740\uff1a"},"cankaodizhi"),(0,h.jsxs)("div",{className:"py-[8px]",children:["\u76f8\u540c\u7684\u95ee\u9898\uff1a",(0,h.jsx)("a",{href:"https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl",target:"_blank",rel:"noopener noreferrer",children:"https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl"})]},"stackoverflow"),(0,h.jsxs)("div",{className:"py-[8px]",children:["FFmpeg\u57fa\u7840\u6982\u5ff5\u4e4bPAR\uff0cDAR\u548cSAR\uff1a",(0,h.jsx)("a",{href:"https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/",target:"_blank",rel:"noopener noreferrer",children:"https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/"})]},"ffmpeg")]})]})};function v(e){return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)(s(),{children:[(0,h.jsx)("title",{children:"\u89c6\u9891\u53c2\u6570PAR\u3001DAR\u3001SAR\u7684\u533a\u522b"}),(0,h.jsx)("meta",{name:"keywords",content:"\u89c6\u9891, \u5a92\u4f53, PAR, DAR, SAR, FFmpeg"}),(0,h.jsx)("meta",{name:"description",content:"\u89c6\u9891\u53c2\u6570PAR\u3001DAR\u3001SAR\u7684\u533a\u522b"})]}),(0,h.jsx)(x,{})]})}},39748:function(e,n,t){"use strict";t(54633);var r=t(72806),a=(t(56091),t(53308)),s=t(19623),c=t(73935),i=t(11163),o=t(6171),l=t(76467),d=t(97680),u=t.n(d),h=t(85893);n.Z=function(e){var n=(0,i.useRouter)();return[(0,h.jsxs)("div",{className:u().main,children:[e.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(r.Z,{onClick:function(e){n.push("/")},children:[(0,h.jsx)(o.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,h.jsx)(l.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,s.Z)(document))?(0,c.createPortal)((0,h.jsx)(a.Z,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,h.jsx)("div",{className:u().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,t){"use strict";t(86230);var r=t(97183),a=(t(2042),t(26713)),s=(t(20559),t(84908)),c=(t(74916),t(88946)),i=t.n(c),o=t(81290),l=t.n(o),d=t(41664),u=t.n(d),h=t(67337),p=t(56392),m=t.n(p),f=t(2013),x=t(85893),v=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],g=["github.io","vercel.app"],j=i()(v).call(v,(function(e,n){return(0,x.jsx)("li",{className:m().navListItem,children:(0,x.jsx)(u(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,x.jsx)(r.Z.Header,{className:m().antdHeader,children:(0,x.jsxs)("div",{className:m().header,children:[(0,x.jsx)("nav",{className:m().headerLeft,children:(0,x.jsx)("ul",{className:m().navList,children:j})}),(0,x.jsx)("div",{className:m().headerRight,children:(0,x.jsxs)(a.Z,{size:16,children:[(0,x.jsx)(s.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,x.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,a=/github\.io/.test(r);window.location.href=new(l())(t,"https://duan602728596.".concat(g[a?1:0],"/"))},children:(0,x.jsx)(h.Z,{className:m().switchAddressIcon})})}),(0,x.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,a=e.avifSrc,s=e.webpSrc,c=e.src,i=e.alt;return(0,r.jsxs)("picture",{className:n,children:[a&&(0,r.jsx)("source",{srcSet:a,type:"image/avif"}),s&&(0,r.jsx)("source",{srcSet:s,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:c,alt:i})]})}},9991:function(e,n,t){"use strict";var r=t(67294),a=t(32307),s=t(39748),c=t(85893);n.Z=function(e){return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(s.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},6408:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/media/par-dar-sar-of-video",function(){return t(90030)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}},19751:function(e){e.exports={keepAll:"parDarSarOfVideo_keepAll__P9xpT"}}},function(e){e.O(0,[2806,542,7161,9774,2888,179],(function(){return n=6408,e(e.s=n);var n}));var n=e.O();_N_E=n}]);