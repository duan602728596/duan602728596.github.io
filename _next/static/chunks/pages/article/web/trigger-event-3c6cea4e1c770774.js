(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2665],{10993:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(67294),a=n(9008),o=n.n(a),i=n(48726),l=n(34065),s=n(94184),c=n.n(s),u=n(53124),d=n(83062);let p=e=>e?"function"==typeof e?e():e:null;var m=n(33603),h=n(43763),v=n(50438),f=n(8796),x=n(67968),g=n(45503),b=n(14747),j=n(77786);let _=e=>{let{componentCls:t,popoverBg:n,popoverColor:r,width:a,fontWeightStrong:o,popoverPadding:i,boxShadowSecondary:l,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:u,marginXS:d,colorBgElevated:p}=e;return[{[t]:Object.assign(Object.assign({},(0,b.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":p,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:n,backgroundClip:"padding-box",borderRadius:c,boxShadow:l,padding:i},[`${t}-title`]:{minWidth:a,marginBottom:d,color:s,fontWeight:o},[`${t}-inner-content`]:{color:r}})},(0,j.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},w=e=>{let{componentCls:t}=e;return{[t]:f.i.map(n=>{let r=e[`${n}-6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":r,[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{background:"transparent"}}}})}},y=e=>{let{componentCls:t,lineWidth:n,lineType:r,colorSplit:a,paddingSM:o,controlHeight:i,fontSize:l,lineHeight:s,padding:c}=e,u=i-Math.round(l*s);return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${u/2}px ${c}px ${u/2-n}px`,borderBottom:`${n}px ${r} ${a}`},[`${t}-inner-content`]:{padding:`${o}px ${c}px`}}}};var N=(0,x.Z)("Popover",e=>{let{colorBgElevated:t,colorText:n,wireframe:r}=e,a=(0,g.TS)(e,{popoverBg:t,popoverColor:n,popoverPadding:12});return[_(a),w(a),r&&y(a),(0,v._y)(a,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let $=(e,t,n)=>{if(t||n)return r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${e}-title`},p(t)),r.createElement("div",{className:`${e}-inner-content`},p(n)))};function E(e){let{hashId:t,prefixCls:n,className:a,style:o,placement:i="top",title:l,content:s,children:u}=e;return r.createElement("div",{className:c()(t,n,`${n}-pure`,`${n}-placement-${i}`,a),style:o},r.createElement(h.G,Object.assign({},e,{className:t,prefixCls:n}),u||$(n,l,s)))}var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let O=e=>{let{title:t,content:n,prefixCls:a}=e;return t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${a}-title`},p(t)),r.createElement("div",{className:`${a}-inner-content`},p(n))):null},Z=r.forwardRef((e,t)=>{var n,a;let{prefixCls:o,title:i,content:l,overlayClassName:s,placement:p="top",trigger:h="hover",mouseEnterDelay:v=.1,mouseLeaveDelay:f=.1,overlayStyle:x={},arrowPointAtCenter:g,arrow:b}=e,j=C(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","arrowPointAtCenter","arrow"]),{getPrefixCls:_}=r.useContext(u.E_),w=_("popover",o),[y,k]=N(w),$=_(),E=c()(s,k),Z=null!==(a=null!==(n="boolean"!=typeof b&&(null==b?void 0:b.arrowPointAtCenter))&&void 0!==n?n:g)&&void 0!==a&&a;return y(r.createElement(d.Z,Object.assign({placement:p,arrow:null!=b?b:{arrowPointAtCenter:Z},trigger:h,mouseEnterDelay:v,mouseLeaveDelay:f,overlayStyle:x},j,{prefixCls:w,overlayClassName:E,ref:t,overlay:r.createElement(O,{prefixCls:w,title:i,content:l}),transitionName:(0,m.mL)($,"zoom-big",j.transitionName),"data-popover-inject":!0})))});Z._InternalPanelDoNotUseOrYouWillBeFired=function(e){let{prefixCls:t}=e,n=k(e,["prefixCls"]),{getPrefixCls:a}=r.useContext(u.E_),o=a("popover",t),[i,l]=N(o);return i(r.createElement(E,Object.assign({},n,{prefixCls:o,hashId:l})))};var P=n(18662),S=n(85893),L=function(e){var t=(0,r.useRef)(null);return(0,S.jsxs)("div",{className:"mb-[16px]",children:[(0,S.jsx)(Z,{content:"这是一个气泡卡片。",title:"气泡卡片",trigger:"hover",children:(0,S.jsx)(P.ZP,{className:"mb-[8px]",ref:t,type:"link",children:"鼠标移动到上面，会显示一个气泡卡片。"})}),(0,S.jsx)(P.ZP,{className:"mb-[8px]",onClick:function(e){t.current.dispatchEvent(new MouseEvent("mouseover",{bubbles:!0}))},children:"点击触发hover事件"})]})},T=n(67552),I=n.n(T),A=n(11151);function R(e){var t=I()({pre:"pre",code:"code"},(0,A.ah)(),e.components);return(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:"language-javascript",children:"element.dispatchEvent(new Event('mouseover', { bubbles: true }));\n"})})}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=I()({},(0,A.ah)(),e.components).wrapper;return t?(0,S.jsx)(t,I()({},e,{children:(0,S.jsx)(R,e)})):R(e)},D=i.Z.Title,z=i.Z.Paragraph,F=function(e){return(0,S.jsxs)(l.Z,{children:[(0,S.jsx)(D,{children:"在浏览器中触发事件"}),(0,S.jsx)(z,{children:"可以使用Event在浏览器中触发hover等各种类型的事件。"}),(0,S.jsx)(B,{}),(0,S.jsx)(D,{level:2,children:"代码演示"}),(0,S.jsx)(L,{})]})};function W(e){return(0,S.jsxs)(r.Fragment,{children:[(0,S.jsxs)(o(),{children:[(0,S.jsx)("title",{children:"在浏览器中触发事件"}),(0,S.jsx)("meta",{name:"keywords",content:"前端, javascript, event"}),(0,S.jsx)("meta",{name:"description",content:"实现call和apply方法"})]}),(0,S.jsx)(F,{})]})}},38914:function(e,t,n){"use strict";var r=n(19623),a=n(73935),o=n(11163),i=n(1472),l=n(18662),s=n(75162),c=n(37653),u=n(76467),d=n(35919),p=n.n(d),m=n(85893),h=i.Z.BackTop;t.Z=function(e){var t=(0,o.useRouter)();return[(0,m.jsxs)("div",{className:p().main,children:[e.goBack?(0,m.jsx)("div",{className:"mb-[16px] text-right",children:(0,m.jsxs)(l.ZP,{onClick:function(e){t.push("/")},children:[(0,m.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,m.jsx)(u.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,a.createPortal)((0,m.jsx)(h,{type:"primary",icon:(0,m.jsx)(s.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},43699:function(e,t,n){"use strict";n(74916);var r=n(88946),a=n.n(r),o=n(81290),i=n.n(o),l=n(41664),s=n.n(l),c=n(97183),u=n(26713),d=n(83062),p=n(67337),m=n(48739),h=n.n(m),v=n(90010),f=n(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],g=["github.io","vercel.app"],b=a()(x).call(x,function(e,t){return(0,f.jsx)("li",{className:h().navListItem,children:(0,f.jsx)(s(),{href:e.href,children:e.title})},e.href)});t.Z=function(e){return(0,f.jsx)(c.Z.Header,{className:h().antdHeader,children:(0,f.jsxs)("div",{className:h().header,children:[(0,f.jsx)("nav",{className:h().headerLeft,children:(0,f.jsx)("ul",{className:h().navList,children:b})}),(0,f.jsx)("div",{className:h().headerRight,children:(0,f.jsxs)(u.Z,{size:16,children:[(0,f.jsx)(d.Z,{title:"切换网站地址",children:(0,f.jsx)("a",{className:h().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var t=window.location,n=t.pathname,r=t.hostname,a=/github\.io/.test(r);window.location.href=new(i())(n,"https://duan602728596.".concat(g[a?1:0],"/"))},children:(0,f.jsx)(p.Z,{className:h().switchAddressIcon})})}),(0,f.jsx)("a",{className:h().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,f.jsx)(v.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},90010:function(e,t,n){"use strict";var r=n(85893);t.Z=function(e){var t=e.className,n=e.imageClassName,a=e.avifSrc,o=e.webpSrc,i=e.src,l=e.alt;return(0,r.jsxs)("picture",{className:t,children:[a&&(0,r.jsx)("source",{srcSet:a,type:"image/avif"}),o&&(0,r.jsx)("source",{srcSet:o,type:"image/webp"}),(0,r.jsx)("img",{className:n,src:i,alt:l})]})}},34065:function(e,t,n){"use strict";var r=n(67294),a=n(43699),o=n(38914),i=n(85893);t.Z=function(e){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(o.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},47461:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/trigger-event",function(){return n(10993)}])},35919:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},48739:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=47461)}),_N_E=e.O()}]);