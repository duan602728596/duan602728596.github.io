(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4796],{26554:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"}},67337:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1413),a=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"}}]},name:"interaction",theme:"outlined"},l=r(89099),i=function(e,t){return a.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o}))};i.displayName="InteractionOutlined";var u=a.forwardRef(i)},37193:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return u}});var a=r(67294),o=r(98924);let l=()=>(0,o.Z)()&&window.document.documentElement,i=()=>{if(!l())return!1;if(void 0!==n)return n;let e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n};var u=()=>{let[e,t]=a.useState(!1);return a.useEffect(()=>{t(i())},[]),e}},10130:function(e,t,r){"use strict";let n;r.d(t,{D:function(){return y},Z:function(){return C}});var a=r(1413),o=r(67294),l={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},i=r(93771),u=o.forwardRef(function(e,t){return o.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))}),c=r(97454),s=r(68843),f=r(94184),d=r.n(f),p=r(98423),v=r(53124);let g=e=>!isNaN(parseFloat(e))&&isFinite(e);var m=r(84321),h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let b={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},y=o.createContext({}),x=(n=0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return`${e}${n+=1}`}),E=o.forwardRef((e,t)=>{var{prefixCls:r,className:n,trigger:a,children:l,defaultCollapsed:i=!1,theme:f="dark",style:E={},collapsible:C=!1,reverseArrow:w=!1,width:O=200,collapsedWidth:$=80,zeroWidthTriggerStyle:S,breakpoint:_,onCollapse:N,onBreakpoint:k}=e,R=h(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);let{siderHook:Z}=(0,o.useContext)(m.Gs),[j,I]=(0,o.useState)("collapsed"in R?R.collapsed:i),[M,z]=(0,o.useState)(!1);(0,o.useEffect)(()=>{"collapsed"in R&&I(R.collapsed)},[R.collapsed]);let T=(e,t)=>{"collapsed"in R||I(e),null==N||N(e,t)},A=(0,o.useRef)();A.current=e=>{z(e.matches),null==k||k(e.matches),j!==e.matches&&T(e.matches,"responsive")},(0,o.useEffect)(()=>{let e;function t(e){return A.current(e)}if("undefined"!=typeof window){let{matchMedia:r}=window;if(r&&_&&_ in b){e=r(`(max-width: ${b[_]})`);try{e.addEventListener("change",t)}catch(r){e.addListener(t)}t(e)}}return()=>{try{null==e||e.removeEventListener("change",t)}catch(r){null==e||e.removeListener(t)}}},[_]),(0,o.useEffect)(()=>{let e=x("ant-sider-");return Z.addSider(e),()=>Z.removeSider(e)},[]);let H=()=>{T(!j,"clickTrigger")},{getPrefixCls:P}=(0,o.useContext)(v.E_),L=o.useMemo(()=>({siderCollapsed:j}),[j]);return o.createElement(y.Provider,{value:L},(()=>{let e=P("layout-sider",r),i=(0,p.Z)(R,["collapsed"]),v=j?$:O,m=g(v)?`${v}px`:String(v),h=0===parseFloat(String($||0))?o.createElement("span",{onClick:H,className:d()(`${e}-zero-width-trigger`,`${e}-zero-width-trigger-${w?"right":"left"}`),style:S},a||o.createElement(u,null)):null,b={expanded:w?o.createElement(s.Z,null):o.createElement(c.Z,null),collapsed:w?o.createElement(c.Z,null):o.createElement(s.Z,null)},y=b[j?"collapsed":"expanded"],x=null!==a?h||o.createElement("div",{className:`${e}-trigger`,onClick:H,style:{width:m}},a||y):null,_=Object.assign(Object.assign({},E),{flex:`0 0 ${m}`,maxWidth:m,minWidth:m,width:m}),N=d()(e,`${e}-${f}`,{[`${e}-collapsed`]:!!j,[`${e}-has-trigger`]:C&&null!==a&&!h,[`${e}-below`]:!!M,[`${e}-zero-width`]:0===parseFloat(m)},n);return o.createElement("aside",Object.assign({className:N},i,{style:_,ref:t}),o.createElement("div",{className:`${e}-children`},l),C||M&&h?x:null)})())});var C=E},97183:function(e,t,r){"use strict";var n=r(84321),a=r(10130);let o=n.ZP;o.Header=n.h4,o.Footer=n.$_,o.Content=n.VY,o.Sider=a.Z,t.Z=o},84321:function(e,t,r){"use strict";r.d(t,{VY:function(){return C},$_:function(){return E},h4:function(){return x},Gs:function(){return g},ZP:function(){return w}});var n=r(74902),a=r(94184),o=r.n(a),l=r(98423),i=r(67294),u=r(53124),c=r(67968),s=r(45503);let f=e=>{let{componentCls:t,colorBgContainer:r,colorBgBody:n,colorText:a}=e;return{[`${t}-sider-light`]:{background:r,[`${t}-sider-trigger`]:{color:a,background:r},[`${t}-sider-zero-width-trigger`]:{color:a,background:r,border:`1px solid ${n}`,borderInlineStart:0}}}},d=e=>{let{antCls:t,componentCls:r,colorText:n,colorTextLightSolid:a,colorBgHeader:o,colorBgBody:l,colorBgTrigger:i,layoutHeaderHeight:u,layoutHeaderPaddingInline:c,layoutHeaderColor:s,layoutFooterPadding:d,layoutTriggerHeight:p,layoutZeroTriggerSize:v,motionDurationMid:g,motionDurationSlow:m,fontSize:h,borderRadius:b}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:l,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},[`${r}-sider`]:{position:"relative",minWidth:0,background:o,transition:`all ${g}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${t}-menu${t}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:p},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:p,color:a,lineHeight:`${p}px`,textAlign:"center",background:i,cursor:"pointer",transition:`all ${g}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:u,insetInlineEnd:-v,zIndex:1,width:v,height:v,color:a,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:o,borderStartStartRadius:0,borderStartEndRadius:b,borderEndEndRadius:b,borderEndStartRadius:0,cursor:"pointer",transition:`background ${m} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${m}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-v,borderStartStartRadius:b,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:b}}}}},f(e)),{"&-rtl":{direction:"rtl"}}),[`${r}-header`]:{height:u,paddingInline:c,color:s,lineHeight:`${u}px`,background:o,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:d,color:n,fontSize:h,background:l},[`${r}-content`]:{flex:"auto",minHeight:0}}};var p=(0,c.Z)("Layout",e=>{let{colorText:t,controlHeightSM:r,controlHeight:n,controlHeightLG:a,marginXXS:o}=e,l=1.25*a,i=(0,s.TS)(e,{layoutHeaderHeight:2*n,layoutHeaderPaddingInline:l,layoutHeaderColor:t,layoutFooterPadding:`${r}px ${l}px`,layoutTriggerHeight:a+2*o,layoutZeroTriggerSize:a});return[d(i)]},e=>{let{colorBgLayout:t}=e;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140"}}),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let g=i.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function m(e){let{suffixCls:t,tagName:r,displayName:n}=e;return e=>{let n=i.forwardRef((n,a)=>i.createElement(e,Object.assign({ref:a,suffixCls:t,tagName:r},n)));return n}}let h=i.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:n,className:a,tagName:l}=e,c=v(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:s}=i.useContext(u.E_),f=s("layout",r),[d,g]=p(f),m=n?`${f}-${n}`:f;return d(i.createElement(l,Object.assign({className:o()(r||m,a,g),ref:t},c)))}),b=i.forwardRef((e,t)=>{let{direction:r}=i.useContext(u.E_),[a,c]=i.useState([]),{prefixCls:s,className:f,rootClassName:d,children:m,hasSider:h,tagName:b}=e,y=v(e,["prefixCls","className","rootClassName","children","hasSider","tagName"]),x=(0,l.Z)(y,["suffixCls"]),{getPrefixCls:E}=i.useContext(u.E_),C=E("layout",s),[w,O]=p(C),$=o()(C,{[`${C}-has-sider`]:"boolean"==typeof h?h:a.length>0,[`${C}-rtl`]:"rtl"===r},f,d,O),S=i.useMemo(()=>({siderHook:{addSider:e=>{c(t=>[].concat((0,n.Z)(t),[e]))},removeSider:e=>{c(t=>t.filter(t=>t!==e))}}}),[]);return w(i.createElement(g.Provider,{value:S},i.createElement(b,Object.assign({ref:t,className:$},x),m)))}),y=m({tagName:"section",displayName:"Layout"})(b),x=m({suffixCls:"header",tagName:"header",displayName:"Header"})(h),E=m({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(h),C=m({suffixCls:"content",tagName:"main",displayName:"Content"})(h);var w=y},26713:function(e,t,r){"use strict";r.d(t,{u:function(){return p},Z:function(){return h}});var n=r(94184),a=r.n(n),o=r(50344),l=r(67294),i=r(37193),u=r(53124),c=r(4173);function s(e){let{className:t,direction:r,index:n,marginDirection:a,children:o,split:i,wrap:u}=e,{horizontalSize:c,verticalSize:s,latestIndex:f,supportFlexGap:d}=l.useContext(p),v={};return(!d&&("vertical"===r?n<f&&(v={marginBottom:c/(i?2:1)}):v=Object.assign(Object.assign({},n<f&&{[a]:c/(i?2:1)}),u&&{paddingBottom:s})),null==o)?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:v},o),n<f&&i&&l.createElement("span",{className:`${t}-split`,style:v},i))}var f=r(51916),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let p=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24},g=l.forwardRef((e,t)=>{let{getPrefixCls:r,space:n,direction:c}=l.useContext(u.E_),{size:g=(null==n?void 0:n.size)||"small",align:m,className:h,rootClassName:b,children:y,direction:x="horizontal",prefixCls:E,split:C,style:w,wrap:O=!1}=e,$=d(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),S=(0,i.Z)(),[_,N]=l.useMemo(()=>(Array.isArray(g)?g:[g,g]).map(e=>"string"==typeof e?v[e]:e||0),[g]),k=(0,o.Z)(y,{keepEmpty:!0}),R=void 0===m&&"horizontal"===x?"center":m,Z=r("space",E),[j,I]=(0,f.Z)(Z),M=a()(Z,I,`${Z}-${x}`,{[`${Z}-rtl`]:"rtl"===c,[`${Z}-align-${R}`]:R},h,b),z=`${Z}-item`,T="rtl"===c?"marginLeft":"marginRight",A=0,H=k.map((e,t)=>{null!=e&&(A=t);let r=e&&e.key||`${z}-${t}`;return l.createElement(s,{className:z,key:r,direction:x,index:t,marginDirection:T,split:C,wrap:O},e)}),P=l.useMemo(()=>({horizontalSize:_,verticalSize:N,latestIndex:A,supportFlexGap:S}),[_,N,A,S]);if(0===k.length)return null;let L={};return O&&(L.flexWrap="wrap",S||(L.marginBottom=-N)),S&&(L.columnGap=_,L.rowGap=N),j(l.createElement("div",Object.assign({ref:t,className:M,style:Object.assign(Object.assign({},L),w)},$),l.createElement(p.Provider,{value:P},H)))}),m=g;m.Compact=c.ZP;var h=m},97454:function(e,t,r){"use strict";var n=r(1413),a=r(67294),o=r(26554),l=r(93771);t.Z=a.forwardRef(function(e,t){return a.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o.Z}))})},68843:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1413),a=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},l=r(93771),i=a.forwardRef(function(e,t){return a.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o}))})},78212:function(e,t,r){var n=r(96064);e.exports=n},39641:function(e,t,r){var n=r(61577);e.exports=n},60009:function(e,t,r){r(44929);var n=r(35703);e.exports=n("Array").findIndex},17671:function(e,t,r){r(80833);var n=r(35703);e.exports=n("Array").find},7147:function(e,t,r){var n=r(7046),a=r(60009),o=Array.prototype;e.exports=function(e){var t=e.findIndex;return e===o||n(o,e)&&t===o.findIndex?a:t}},32236:function(e,t,r){var n=r(7046),a=r(17671),o=Array.prototype;e.exports=function(e){var t=e.find;return e===o||n(o,e)&&t===o.find?a:t}},57478:function(e,t,r){e.exports=r(46660)},2636:function(e,t,r){e.exports=r(82535)},46660:function(e,t,r){var n=r(78212);e.exports=n},82535:function(e,t,r){var n=r(39641);e.exports=n},44929:function(e,t,r){"use strict";var n=r(76887),a=r(3610).findIndex,o=r(18479),l="findIndex",i=!0;l in[]&&[,][l](function(){i=!1}),n({target:"Array",proto:!0,forced:i},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},80833:function(e,t,r){"use strict";var n=r(76887),a=r(3610).find,o=r(18479),l="find",i=!0;l in[]&&[,][l](function(){i=!1}),n({target:"Array",proto:!0,forced:i},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},96064:function(e,t,r){var n=r(7147);e.exports=n},61577:function(e,t,r){var n=r(32236);e.exports=n},62038:function(e,t,r){"use strict";var n,a,o=r(17907),l=o(r(20474)),i=o(r(57445)),u=o(r(67552));(0,i.default)(t,"__esModule",{value:!0}),function(e,t){for(var r in t)(0,i.default)(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return a},ACTION_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return s},ACTION_RESTORE:function(){return f},ACTION_SERVER_PATCH:function(){return d},ACTION_PREFETCH:function(){return p},ACTION_FAST_REFRESH:function(){return v},ACTION_SERVER_ACTION:function(){return g}});var c="refresh",s="navigate",f="restore",d="server-patch",p="prefetch",v="fast-refresh",g="server-action";(n=a||(a={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"===(0,l.default)(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&((0,i.default)(t.default,"__esModule",{value:!0}),(0,u.default)(t.default,t),e.exports=t.default)},48693:function(e,t,r){"use strict";var n=r(17907),a=n(r(20474)),o=n(r(57445)),l=n(r(67552));function i(e,t,r,n){return!1}(0,o.default)(t,"__esModule",{value:!0}),(0,o.default)(t,"getDomainLocale",{enumerable:!0,get:function(){return i}}),("function"==typeof t.default||"object"===(0,a.default)(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&((0,o.default)(t.default,"__esModule",{value:!0}),(0,l.default)(t.default,t),e.exports=t.default)},16512:function(e,t,r){"use strict";var n=r(62079),a=r(52020),o=r(73324),l=r(88546),i=r(99595),u=r(66775),c=r(2201),s=r(57445),f=r(17907);r(74916),r(15306);var d=f(r(61125)),p=f(r(67375)),v=f(r(20474)),g=f(r(88436)),m=f(r(57445)),h=f(r(23513)),b=f(r(35820));f(r(62079)),f(r(99595)),f(r(27525)),f(r(45181)),f(r(61539));var y=f(r(67552)),x=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function E(e,t){var r=n(e);if(a){var i=a(e);t&&(i=o(i).call(i,function(t){return l(e,t).enumerable})),r.push.apply(r,i)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r,n,a=null!=arguments[t]?arguments[t]:{};t%2?i(r=E(Object(a),!0)).call(r,function(t){(0,d.default)(e,t,a[t])}):u?c(e,u(a)):i(n=E(Object(a))).call(n,function(t){s(e,t,l(a,t))})}return e}(0,m.default)(t,"__esModule",{value:!0}),(0,m.default)(t,"default",{enumerable:!0,get:function(){return H}});var w=r(38754)._(r(67294)),O=r(65509),$=r(54514),S=r(44130),_=r(10146),N=r(84318),k=r(96514),R=r(18681),Z=r(66675),j=r(48693),I=r(26085),M=r(62038),z=new h.default;function T(e,t,r,n,a,o){if(o||(0,$.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(z.has(l))return;z.add(l)}var i=o?e.prefetch(t,a):e.prefetch(t,r,n);b.default.resolve(i).catch(function(e){})}}function A(e){return"string"==typeof e?e:(0,S.formatUrl)(e)}var H=w.default.forwardRef(function(e,t){var r,n,a=e.href,o=e.as,l=e.children,i=e.prefetch,u=void 0===i?null:i,c=e.passHref,s=e.replace,f=e.shallow,d=e.scroll,m=e.locale,h=e.onClick,b=e.onMouseEnter,y=e.onTouchStart,E=e.legacyBehavior,S=void 0!==E&&E,z=(0,g.default)(e,x);r=l,S&&("string"==typeof r||"number"==typeof r)&&(r=w.default.createElement("a",null,r));var H=!1!==u,P=null===u?M.PrefetchKind.AUTO:M.PrefetchKind.FULL,L=w.default.useContext(k.RouterContext),B=w.default.useContext(R.AppRouterContext),F=null!=L?L:B,V=!L,D=w.default.useMemo(function(){if(!L){var e=A(a);return{href:e,as:o?A(o):e}}var t=(0,O.resolveHref)(L,a,!0),r=(0,p.default)(t,2),n=r[0],l=r[1];return{href:n,as:o?(0,O.resolveHref)(L,o):l||n}},[L,a,o]),U=D.href,G=D.as,K=w.default.useRef(U),W=w.default.useRef(G);S&&(n=w.default.Children.only(r));var Y=S?n&&"object"===(0,v.default)(n)&&n.ref:t,q=(0,Z.useIntersection)({rootMargin:"200px"}),X=(0,p.default)(q,3),J=X[0],Q=X[1],ee=X[2],et=w.default.useCallback(function(e){(W.current!==G||K.current!==U)&&(ee(),W.current=G,K.current=U),J(e),Y&&("function"==typeof Y?Y(e):"object"===(0,v.default)(Y)&&(Y.current=e))},[G,Y,U,ee,J]);w.default.useEffect(function(){F&&Q&&H&&T(F,U,G,{locale:m},{kind:P},V)},[G,U,Q,m,H,null==L?void 0:L.locale,F,V,P]);var er={ref:et,onClick:function(e){S||"function"!=typeof h||h(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),F&&!e.defaultPrevented&&function(e,t,r,n,a,o,l,i,u,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(s=e.currentTarget.getAttribute("target"))||"_self"===s)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(!e.nativeEvent||2!==e.nativeEvent.which)&&(u||(0,$.isLocalURL)(r))){e.preventDefault();var s,f=function(){"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!c})};u?w.default.startTransition(f):f()}}(e,F,U,G,s,f,d,m,V,H)},onMouseEnter:function(e){S||"function"!=typeof b||b(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),F&&(H||!V)&&T(F,U,G,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:P},V)},onTouchStart:function(e){S||"function"!=typeof y||y(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),F&&(H||!V)&&T(F,U,G,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:P},V)}};if((0,_.isAbsoluteUrl)(G))er.href=G;else if(!S||c||"a"===n.type&&!("href"in n.props)){var en=void 0!==m?m:null==L?void 0:L.locale,ea=(null==L?void 0:L.isLocaleDomain)&&(0,j.getDomainLocale)(G,en,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);er.href=ea||(0,I.addBasePath)((0,N.addLocale)(G,en,null==L?void 0:L.defaultLocale))}return S?w.default.cloneElement(n,er):w.default.createElement("a",C(C({},z),er),r)});("function"==typeof t.default||"object"===(0,v.default)(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&((0,m.default)(t.default,"__esModule",{value:!0}),(0,y.default)(t.default,t),e.exports=t.default)},66675:function(e,t,r){"use strict";var n=r(17907),a=n(r(20474)),o=n(r(67375)),l=n(r(57445)),i=n(r(54847)),u=n(r(86981)),c=n(r(99595)),s=n(r(13464)),f=n(r(90143)),d=n(r(67552));(0,l.default)(t,"__esModule",{value:!0}),(0,l.default)(t,"useIntersection",{enumerable:!0,get:function(){return b}});var p=r(67294),v=r(86682),g="function"==typeof IntersectionObserver,m=new i.default,h=[];function b(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!g,a=(0,p.useState)(!1),l=(0,o.default)(a,2),d=l[0],b=l[1],y=(0,p.useRef)(null),x=(0,p.useCallback)(function(e){y.current=e},[]);return(0,p.useEffect)(function(){if(g){if(!n&&!d){var e,a,o,l,p=y.current;if(p&&p.tagName)return a=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=(0,u.default)(h).call(h,function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=m.get(n)))return t;var a=new i.default;return t={id:r,observer:new IntersectionObserver(function(e){(0,c.default)(e).call(e,function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},h.push(r),m.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(l=e.elements).set(p,function(e){return e&&b(e)}),o.observe(p),function(){if(l.delete(p),o.unobserve(p),0===l.size){o.disconnect(),m.delete(a);var e=(0,s.default)(h).call(h,function(e){return e.root===a.root&&e.margin===a.margin});e>-1&&(0,f.default)(h).call(h,e,1)}}}}else if(!d){var x=(0,v.requestIdleCallback)(function(){return b(!0)});return function(){return(0,v.cancelIdleCallback)(x)}}},[n,r,t,d,y.current]),[x,d,(0,p.useCallback)(function(){b(!1)},[])]}("function"==typeof t.default||"object"===(0,a.default)(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&((0,l.default)(t.default,"__esModule",{value:!0}),(0,d.default)(t.default,t),e.exports=t.default)},41664:function(e,t,r){e.exports=r(16512)},13464:function(e,t,r){e.exports=r(57478)},86981:function(e,t,r){e.exports=r(2636)}}]);