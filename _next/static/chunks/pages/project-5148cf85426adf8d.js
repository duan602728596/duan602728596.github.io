(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{42092:function(t,e,r){var n=r(49974),i=r(1702),o=r(68361),s=r(47908),a=r(26244),c=r(65417),u=i([].push),f=function(t){var e=1==t,r=2==t,i=3==t,f=4==t,l=6==t,d=7==t,h=5==t||l;return function(m,p,v,b){for(var g,x,y=s(m),j=o(y),w=n(p,v),_=a(j),S=0,k=b||c,N=e?k(m,_):r||d?k(m,0):void 0;_>S;S++)if((h||S in j)&&(x=w(g=j[S],S,y),t)){if(e)N[S]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u(N,g)}else switch(t){case 4:return!1;case 7:u(N,g)}}return l?-1:i||f?f:N}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},41589:function(t,e,r){var n=r(51400),i=r(26244),o=r(86135),s=Array,a=Math.max;t.exports=function(t,e,r){for(var c=i(t),u=n(e,c),f=n(void 0===r?c:r,c),l=s(a(f-u,0)),d=0;u<f;u++,d++)o(l,d,t[u]);return l.length=d,l}},77475:function(t,e,r){var n=r(43157),i=r(4411),o=r(70111),s=r(5112)("species"),a=Array;t.exports=function(t){var e;return n(t)&&(i(e=t.constructor)&&(e===a||n(e.prototype))?e=void 0:o(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?a:e}},65417:function(t,e,r){var n=r(77475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},86135:function(t,e,r){"use strict";var n=r(34948),i=r(3070),o=r(79114);t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,o(0,r)):t[s]=r}},43157:function(t,e,r){var n=r(84326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},1156:function(t,e,r){var n=r(84326),i=r(45656),o=r(8006).f,s=r(41589),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return s(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?c(t):o(i(t))}},56532:function(t,e,r){var n=r(46916),i=r(35005),o=r(5112),s=r(98052);t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,a=o("toPrimitive");e&&!e[a]&&s(e,a,function(t){return n(r,this)},{arity:1})}},2015:function(t,e,r){var n=r(36293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},26800:function(t,e,r){var n=r(40857),i=r(92597),o=r(6061),s=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},6061:function(t,e,r){var n=r(5112);e.f=n},38862:function(t,e,r){var n=r(82109),i=r(35005),o=r(22104),s=r(46916),a=r(1702),c=r(47293),u=r(43157),f=r(60614),l=r(70111),d=r(52190),h=r(50206),m=r(36293),p=i("JSON","stringify"),v=a(/./.exec),b=a("".charAt),g=a("".charCodeAt),x=a("".replace),y=a(1..toString),j=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,_=/^[\uDC00-\uDFFF]$/,S=!m||c(function(){var t=i("Symbol")();return"[null]"!=p([t])||"{}"!=p({a:t})||"{}"!=p(Object(t))}),k=c(function(){return'"\udf06\ud834"'!==p("\uDF06\uD834")||'"\udead"'!==p("\uDEAD")}),N=function(t,e){var r=h(arguments),n=e;if(!(!l(e)&&void 0===t||d(t)))return u(e)||(e=function(t,e){if(f(n)&&(e=s(n,this,t,e)),!d(e))return e}),r[1]=e,o(p,null,r)},O=function(t,e,r){var n=b(r,e-1),i=b(r,e+1);return v(w,t)&&!v(_,i)||v(_,t)&&!v(w,n)?"\\u"+y(g(t,0),16):t};p&&n({target:"JSON",stat:!0,arity:3,forced:S||k},{stringify:function(t,e,r){var n=h(arguments),i=o(S?N:p,null,n);return k&&"string"==typeof i?x(i,j,O):i}})},29660:function(t,e,r){var n=r(82109),i=r(36293),o=r(47293),s=r(25181),a=r(47908);n({target:"Object",stat:!0,forced:!i||o(function(){s.f(1)})},{getOwnPropertySymbols:function(t){var e=s.f;return e?e(a(t)):[]}})},4032:function(t,e,r){"use strict";var n=r(82109),i=r(17854),o=r(46916),s=r(1702),a=r(31913),c=r(19781),u=r(36293),f=r(47293),l=r(92597),d=r(47976),h=r(19670),m=r(45656),p=r(34948),v=r(41340),b=r(79114),g=r(70030),x=r(81956),y=r(8006),j=r(1156),w=r(25181),_=r(31236),S=r(3070),k=r(36048),N=r(55296),O=r(98052),Z=r(72309),A=r(6200),F=r(3501),P=r(69711),D=r(5112),I=r(6061),T=r(26800),L=r(56532),q=r(58003),E=r(29909),C=r(42092).forEach,R=A("hidden"),B="Symbol",Q="prototype",H=E.set,$=E.getterFor(B),J=Object[Q],X=i.Symbol,z=X&&X[Q],K=i.TypeError,M=i.QObject,U=_.f,V=S.f,W=j.f,Y=N.f,G=s([].push),tt=Z("symbols"),te=Z("op-symbols"),tr=Z("wks"),tn=!M||!M[Q]||!M[Q].findChild,ti=c&&f(function(){return 7!=g(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=U(J,e);n&&delete J[e],V(t,e,r),n&&t!==J&&V(J,e,n)}:V,to=function(t,e){var r=tt[t]=g(z);return H(r,{type:B,tag:t,description:e}),c||(r.description=e),r},ts=function(t,e,r){t===J&&ts(te,e,r),h(t);var n=p(e);return(h(r),l(tt,n))?(r.enumerable?(l(t,R)&&t[R][n]&&(t[R][n]=!1),r=g(r,{enumerable:b(0,!1)})):(l(t,R)||V(t,R,b(1,{})),t[R][n]=!0),ti(t,n,r)):V(t,n,r)},ta=function(t,e){h(t);var r=m(e),n=x(r).concat(tl(r));return C(n,function(e){(!c||o(tc,r,e))&&ts(t,e,r[e])}),t},tc=function(t){var e=p(t),r=o(Y,this,e);return(!(this===J&&l(tt,e))||!!l(te,e))&&(!(r||!l(this,e)||!l(tt,e)||l(this,R)&&this[R][e])||r)},tu=function(t,e){var r=m(t),n=p(e);if(!(r===J&&l(tt,n))||l(te,n)){var i=U(r,n);return i&&l(tt,n)&&!(l(r,R)&&r[R][n])&&(i.enumerable=!0),i}},tf=function(t){var e=W(m(t)),r=[];return C(e,function(t){l(tt,t)||l(F,t)||G(r,t)}),r},tl=function(t){var e=t===J,r=W(e?te:m(t)),n=[];return C(r,function(t){l(tt,t)&&(!e||l(J,t))&&G(n,tt[t])}),n};u||(O(z=(X=function(){if(d(z,this))throw K("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=P(t),r=function(t){this===J&&o(r,te,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),ti(this,e,b(1,t))};return c&&tn&&ti(J,e,{configurable:!0,set:r}),to(e,t)})[Q],"toString",function(){return $(this).tag}),O(X,"withoutSetter",function(t){return to(P(t),t)}),N.f=tc,S.f=ts,k.f=ta,_.f=tu,y.f=j.f=tf,w.f=tl,I.f=function(t){return to(D(t),t)},c&&(V(z,"description",{configurable:!0,get:function(){return $(this).description}}),a||O(J,"propertyIsEnumerable",tc,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:X}),C(x(tr),function(t){T(t)}),n({target:B,stat:!0,forced:!u},{useSetter:function(){tn=!0},useSimple:function(){tn=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,e){return void 0===e?g(t):ta(g(t),e)},defineProperty:ts,defineProperties:ta,getOwnPropertyDescriptor:tu}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:tf}),L(),q(X,B),F[R]=!0},41817:function(t,e,r){"use strict";var n=r(82109),i=r(19781),o=r(17854),s=r(1702),a=r(92597),c=r(60614),u=r(47976),f=r(41340),l=r(3070).f,d=r(99920),h=o.Symbol,m=h&&h.prototype;if(i&&c(h)&&(!("description"in m)||void 0!==h().description)){var p={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(m,this)?new h(t):void 0===t?h():h(t);return""===t&&(p[e]=!0),e};d(v,h),v.prototype=m,m.constructor=v;var b="Symbol(test)"==String(h("test")),g=s(m.valueOf),x=s(m.toString),y=/^Symbol\((.*)\)[^)]+$/,j=s("".replace),w=s("".slice);l(m,"description",{configurable:!0,get:function(){var t=g(this);if(a(p,t))return"";var e=x(t),r=b?w(e,7,-1):j(e,y,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:v})}},40763:function(t,e,r){var n=r(82109),i=r(35005),o=r(92597),s=r(41340),a=r(72309),c=r(2015),u=a("string-to-symbol-registry"),f=a("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=s(t);if(o(u,e))return u[e];var r=i("Symbol")(e);return u[e]=r,f[r]=e,r}})},82526:function(t,e,r){r(4032),r(40763),r(26620),r(38862),r(29660)},26620:function(t,e,r){var n=r(82109),i=r(92597),o=r(52190),s=r(66330),a=r(72309),c=r(2015),u=a("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!o(t))throw TypeError(s(t)+" is not a symbol");if(i(u,t))return u[t]}})},66186:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=r(67294),i=r(9008),o=r.n(i),s=r(43699),a=r(38914);r(82526),r(41817);var c=r(18999),u=r(85893),f=[{title:"antd-schema-form",href:"https://github.com/duan602728596/antd-schema-form",description:(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("p",{children:"基于Ant Design，可以通过JSON Schema配置生成可交互的表单。"}),(0,u.jsx)("a",{href:"https://duan602728596.github.io/antd-schema-form/#/",target:"_blank",rel:"noopener noreferrer",children:"https://duan602728596.github.io/antd-schema-form/#/"})]})},{title:"gulp-memory-fs",href:"https://github.com/duan602728596/gulp-memory-fs",description:"gulp环境下也可以使用内存文件系统。"},{title:"48tools",href:"https://github.com/duan602728596/48tools",description:"48工具，提供公演、口袋直播录源，公演、口袋录播下载，B站直播抓取，B站视频下载，摩点集资统计，视频截取，视频导出gif，视频合并等功能。"},{title:"qqtools",href:"https://github.com/duan602728596/qqtools",description:(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("p",{children:"QQ群工具，提供48系成员直播监听，48系成员信息监听，微博监听，B站直播监听，群成员自动欢迎等功能。"}),(0,u.jsx)("b",{className:"color-[rgba(0, 0, 0, .85)]",children:"使用手册："}),(0,u.jsx)("a",{href:"https://www.yuque.com/bbkkbkk/qqtools",target:"_blank",rel:"noopener noreferrer",children:"https://www.yuque.com/bbkkbkk/qqtools"})]})},{title:"umi-plugin-redux-toolkit",href:"https://github.com/duan602728596/umi-plugin-redux-toolkit",description:"umi3的插件，使用@reduxjs/toolkit。"}],l=function(t){return(0,u.jsx)(c.ZP,{dataSource:f,renderItem:function(t){var e=(0,u.jsx)("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.title}),r=(0,u.jsx)("div",{className:"text-[#595959]",children:t.description});return(0,u.jsx)(c.ZP.Item,{children:(0,u.jsx)(c.ZP.Item.Meta,{title:e,description:r})})},bordered:!0})},d=function(t){return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(s.Z,{}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(l,{})})]})};function h(t){return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsxs)(o(),{children:[(0,u.jsx)("title",{children:"开源项目 - 段昊辰的个人主页"}),(0,u.jsx)("meta",{name:"description",content:"段昊辰的开源项目"})]}),(0,u.jsx)(d,{})]})}},38914:function(t,e,r){"use strict";var n=r(19623),i=r(73935),o=r(11163),s=r(1472),a=r(18662),c=r(75162),u=r(37653),f=r(76467),l=r(35919),d=r.n(l),h=r(85893),m=s.Z.BackTop;e.Z=function(t){var e=(0,o.useRouter)();return[(0,h.jsxs)("div",{className:d().main,children:[t.goBack?(0,h.jsx)("div",{className:"mb-[16px] text-right",children:(0,h.jsxs)(a.ZP,{onClick:function(t){e.push("/")},children:[(0,h.jsx)(u.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==t?void 0:t.children]},"main"),(0,h.jsx)(f.default,{children:null!=t&&t.goToTop&&("undefined"==typeof document?"undefined":(0,n.Z)(document))==="object"?(0,i.createPortal)((0,h.jsx)(m,{type:"primary",icon:(0,h.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(t,e,r){"use strict";r(74916);var n=r(88946),i=r.n(n),o=r(81290),s=r.n(o),a=r(41664),c=r.n(a),u=r(97183),f=r(26713),l=r(83062),d=r(67337),h=r(48739),m=r.n(h),p=r(90010),v=r(85893),b=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],g=["github.io","vercel.app"],x=i()(b).call(b,function(t,e){return(0,v.jsx)("li",{className:m().navListItem,children:(0,v.jsx)(c(),{href:t.href,children:t.title})},t.href)});e.Z=function(t){return(0,v.jsx)(u.Z.Header,{className:m().antdHeader,children:(0,v.jsxs)("div",{className:m().header,children:[(0,v.jsx)("nav",{className:m().headerLeft,children:(0,v.jsx)("ul",{className:m().navList,children:x})}),(0,v.jsx)("div",{className:m().headerRight,children:(0,v.jsxs)(f.Z,{size:16,children:[(0,v.jsx)(l.Z,{title:"切换网站地址",children:(0,v.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(t){var e=window.location,r=e.pathname,n=e.hostname,i=/github\.io/.test(n);window.location.href=new(s())(r,"https://duan602728596.".concat(g[i?1:0],"/"))},children:(0,v.jsx)(d.Z,{className:m().switchAddressIcon})})}),(0,v.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(p.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(t,e,r){"use strict";var n=r(85893);e.Z=function(t){var e=t.className,r=t.imageClassName,i=t.avifSrc,o=t.webpSrc,s=t.src,a=t.alt;return(0,n.jsxs)("picture",{className:e,children:[i&&(0,n.jsx)("source",{srcSet:i,type:"image/avif"}),o&&(0,n.jsx)("source",{srcSet:o,type:"image/webp"}),(0,n.jsx)("img",{className:r,src:s,alt:a})]})}},13668:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return r(66186)}])},35919:function(t){t.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(t){t.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(t){t.O(0,[5876,4796,4940,104,2269,8999,9774,2888,179],function(){return t(t.s=13668)}),_N_E=t.O()}]);