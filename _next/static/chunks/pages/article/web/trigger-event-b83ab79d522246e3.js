(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2665],{47461:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/trigger-event",function(){return n(30291)}])},30291:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(85893),o=n(67294),l=n(9008),a=n.n(l),i=n(76315),s=n(30673),c=n(93967),p=n.n(c);let u=e=>e?"function"==typeof e?e():e:null;var d=n(33603),m=n(53124),x=n(83062),f=n(92419),g=n(14747),b=n(50438),v=n(97414),h=n(8796),j=n(91945),y=n(45503),w=n(79511);let O=e=>{let{componentCls:t,popoverColor:n,titleMinWidth:r,fontWeightStrong:o,innerPadding:l,boxShadowSecondary:a,colorTextHeading:i,borderRadiusLG:s,zIndexPopup:c,titleMarginBottom:p,colorBgElevated:u,popoverBg:d,titleBorderBottom:m,innerContentPadding:x,titlePadding:f}=e;return[{[t]:Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":u,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:s,boxShadow:a,padding:l},[`${t}-title`]:{minWidth:r,marginBottom:p,color:i,fontWeight:o,borderBottom:m,padding:f},[`${t}-inner-content`]:{color:n,padding:x}})},(0,v.ZP)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},E=e=>{let{componentCls:t}=e;return{[t]:h.i.map(n=>{let r=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":r,[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{background:"transparent"}}}})}};var $=(0,j.I$)("Popover",e=>{let{colorBgElevated:t,colorText:n}=e,r=(0,y.TS)(e,{popoverBg:t,popoverColor:n});return[O(r),E(r),(0,b._y)(r,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:n,fontHeight:r,padding:o,wireframe:l,zIndexPopupBase:a,borderRadiusLG:i,marginXS:s,lineType:c,colorSplit:p,paddingSM:u}=e,d=n-r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:a+30},(0,w.w)(e)),(0,v.wZ)({contentRadius:i,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:s,titlePadding:l?`${d/2}px ${o}px ${d/2-t}px`:0,titleBorderBottom:l?`${t}px ${c} ${p}`:"none",innerContentPadding:l?`${u}px ${o}px`:0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let _=(e,t,n)=>t||n?o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${e}-title`},u(t)),o.createElement("div",{className:`${e}-inner-content`},u(n))):null,k=e=>{let{hashId:t,prefixCls:n,className:r,style:l,placement:a="top",title:i,content:s,children:c}=e;return o.createElement("div",{className:p()(t,n,`${n}-pure`,`${n}-placement-${a}`,r),style:l},o.createElement("div",{className:`${n}-arrow`}),o.createElement(f.G,Object.assign({},e,{className:t,prefixCls:n}),c||_(n,i,s)))};var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let P=e=>{let{title:t,content:n,prefixCls:r}=e;return o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${r}-title`},u(t)),o.createElement("div",{className:`${r}-inner-content`},u(n)))},T=o.forwardRef((e,t)=>{let{prefixCls:n,title:r,content:l,overlayClassName:a,placement:i="top",trigger:s="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:u=.1,overlayStyle:f={}}=e,g=C(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:b}=o.useContext(m.E_),v=b("popover",n),[h,j,y]=$(v),w=b(),O=p()(a,j,y);return h(o.createElement(x.Z,Object.assign({placement:i,trigger:s,mouseEnterDelay:c,mouseLeaveDelay:u,overlayStyle:f},g,{prefixCls:v,overlayClassName:O,ref:t,overlay:r||l?o.createElement(P,{prefixCls:v,title:r,content:l}):null,transitionName:(0,d.m)(w,"zoom-big",g.transitionName),"data-popover-inject":!0})))});T._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,className:n}=e,r=N(e,["prefixCls","className"]),{getPrefixCls:l}=o.useContext(m.E_),a=l("popover",t),[i,s,c]=$(a);return i(o.createElement(k,Object.assign({},r,{prefixCls:a,hashId:s,className:p()(n,c)})))};var Z=n(10932),S=function(e){let t=(0,o.useRef)(null);return(0,r.jsxs)("div",{className:"mb-[16px]",children:[(0,r.jsx)(T,{content:"这是一个气泡卡片。",title:"气泡卡片",trigger:"hover",children:(0,r.jsx)(Z.ZP,{className:"mb-[8px]",ref:t,type:"link",children:"鼠标移动到上面，会显示一个气泡卡片。"})}),(0,r.jsx)(Z.ZP,{className:"mb-[8px]",onClick:function(e){t.current.dispatchEvent(new MouseEvent("mouseover",{bubbles:!0}))},children:"点击触发hover事件"})]})},B=n(11151);function W(e){let t={code:"code",pre:"pre",...(0,B.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"element.dispatchEvent(new Event('mouseover', { bubbles: true }));\n"})})}function I(e={}){let{wrapper:t}={...(0,B.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(W,{...e})}):W(e)}let{Title:R,Paragraph:z}=i.default;var D=function(e){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(R,{children:"在浏览器中触发事件"}),(0,r.jsx)(z,{children:"可以使用Event在浏览器中触发hover等各种类型的事件。"}),(0,r.jsx)(I,{}),(0,r.jsx)(R,{level:2,children:"代码演示"}),(0,r.jsx)(S,{})]})};function M(e){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"在浏览器中触发事件"}),(0,r.jsx)("meta",{name:"keywords",content:"前端, javascript, event"}),(0,r.jsx)("meta",{name:"description",content:"实现call和apply方法"})]}),(0,r.jsx)(D,{})]})}},99388:function(e,t,n){"use strict";var r=n(85893),o=n(73935),l=n(45697),a=n.n(l),i=n(39332),s=n(81860),c=n(10932),p=n(75162),u=n(6171),d=n(76467),m=n(63791),x=n.n(m);let{BackTop:f}=s.default;function g(e){let t=(0,i.useRouter)();return[(0,r.jsxs)("div",{className:x().main,children:[e.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(c.ZP,{onClick:function(e){t.push("/")},children:[(0,r.jsx)(u.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,r.jsx)(d.default,{children:"object"==typeof document?(0,o.createPortal)((0,r.jsx)(f,{type:"primary",icon:(0,r.jsx)(p.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}g.propTypes={children:a().node,goToTop:a().bool,goBack:a().bool},t.Z=g},30673:function(e,t,n){"use strict";var r=n(85893),o=n(45697),l=n.n(o),a=n(99388);function i(e){return(0,r.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})}i.propTypes={children:l().node},t.Z=i},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[932,416,2888,9774,179],function(){return e(e.s=47461)}),_N_E=e.O()}]);