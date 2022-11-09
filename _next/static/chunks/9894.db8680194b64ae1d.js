(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9894],{89894:function(e,t,n){"use strict";var a=n(24835);n(41539);var l=n(17907),r=l(n(33119)),u=l(n(92664)),d=l(n(84827)),o=l(n(85299)),i=l(n(55536)),f=l(n(57445)),c=l(n(8571));(0,f.default)(t,"__esModule",{value:!0}),t.default=void 0;var s=n(92648).Z,p=s(n(67294)),h=s(n(16505)),v={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var g={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}},y=function(e){(0,d.default)(l,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!a||a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=(0,i.default)(l);if(t){var r=(0,i.default)(this).constructor;e=a(n,arguments,r)}else e=n.apply(this,arguments);return(0,o.default)(this,e)});function l(){return(0,r.default)(this,l),n.apply(this,arguments)}return(0,u.default)(l,[{key:"render",value:function(){var e,t=this.props,n=t.statusCode,a=t.withDarkMode,l=this.props.title||v[n]||"An unexpected error has occurred";return p.default.createElement("div",{style:g.error},p.default.createElement(h.default,null,p.default.createElement("title",null,n?(0,c.default)(e="".concat(n,": ")).call(e,l):"Application error: a client-side exception has occurred")),p.default.createElement("div",null,p.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(void 0===a||a?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),n?p.default.createElement("h1",{className:"next-error-h1",style:g.h1},n):null,p.default.createElement("div",{style:g.desc},p.default.createElement("h2",{style:g.h2},this.props.title||n?l:p.default.createElement(p.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),l}(p.default.Component);y.displayName="ErrorPage",y.getInitialProps=m,y.origGetInitialProps=m,t.default=y},17285:function(e,t,n){"use strict";(0,n(17907)(n(57445)).default)(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=(0,n(92648).Z)(n(67294)).default.createContext({});t.AmpStateContext=a},80354:function(e,t,n){"use strict";(0,n(17907)(n(57445)).default)(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,a=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==a&&a}},16505:function(e,t,n){"use strict";var a=n(17907),l=a(n(20474));n(41539),n(88674);var r=a(n(57445)),u=a(n(8571)),d=a(n(53706)),o=a(n(23513)),i=a(n(51791)),f=a(n(35704)),c=a(n(88946)),s=a(n(86526)),p=a(n(73324)),h=a(n(27525)),v=a(n(45181)),m=a(n(67552));(0,r.default)(t,"__esModule",{value:!0}),t.defaultHead=C,t.default=void 0;var g=n(6495).Z,y=n(92648).Z,_=(0,n(91598).Z)(n(67294)),x=y(n(70148)),b=n(17285),k=n(60523),E=n(80354);function C(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[_.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(_.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function M(e,t){if("string"==typeof t||"number"==typeof t)return e;if(t.type===_.default.Fragment){var n;return(0,u.default)(e).call(e,(0,d.default)(n=_.default.Children.toArray(t.props.children)).call(n,function(e,t){return"string"==typeof t||"number"==typeof t?e:(0,u.default)(e).call(e,t)},[]))}return(0,u.default)(e).call(e,t)}n(92783);var A=["name","httpEquiv","charSet","itemProp"];function w(e,t){var n,a,l,r,m,y,x,b,k,E,w=t.inAmpMode;return(0,c.default)(m=(0,s.default)(y=(0,p.default)(x=(0,u.default)(b=(0,s.default)(k=(0,d.default)(e).call(e,M,[])).call(k)).call(b,(0,s.default)(E=C(w)).call(E))).call(x,(n=new o.default,a=new o.default,l=new o.default,r={},function(e){var t=!0,u=!1;if(e.key&&"number"!=typeof e.key&&(0,i.default)(d=e.key).call(d,"$")>0){u=!0;var d,c,s,p=(0,f.default)(c=e.key).call(c,(0,i.default)(s=e.key).call(s,"$")+1);n.has(p)?t=!1:n.add(p)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var h=0,v=A.length;h<v;h++){var m=A[h];if(e.props.hasOwnProperty(m)){if("charSet"===m)l.has(m)?t=!1:l.add(m);else{var g=e.props[m],y=r[m]||new o.default;("name"!==m||!u)&&y.has(g)?t=!1:(y.add(g),r[m]=y)}}}}return t}))).call(y)).call(m,function(e,t){var n,a=e.key||t;if(!w&&"link"===e.type&&e.props.href&&(0,h.default)(n=["https://fonts.googleapis.com/css","https://use.typekit.net/"]).call(n,function(t){var n;return(0,v.default)(n=e.props.href).call(n,t)})){var l=g({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,_.default.cloneElement(e,l)}return _.default.cloneElement(e,{key:a})})}var S=function(e){var t=e.children,n=_.useContext(b.AmpStateContext),a=_.useContext(k.HeadManagerContext);return _.default.createElement(x.default,{reduceComponentsToState:w,headManager:a,inAmpMode:E.isInAmpMode(n)},t)};t.default=S,("function"==typeof t.default||"object"===(0,l.default)(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&((0,r.default)(t.default,"__esModule",{value:!0}),(0,m.default)(t.default,t),e.exports=t.default)},70148:function(e,t,n){"use strict";var a=n(17907);n(41539),n(88674);var l=a(n(57445)),r=a(n(73324)),u=a(n(10349));(0,l.default)(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,a=e.reduceComponentsToState;function l(){if(n&&n.mountedInstances){var t,l=d.Children.toArray((0,r.default)(t=(0,u.default)(n.mountedInstances)).call(t,Boolean));n.updateHead(a(l,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),l()),i(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(function(){return n&&(n._pendingUpdate=l),function(){n&&(n._pendingUpdate=l)}}),f(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var d=(0,n(91598).Z)(n(67294)),o=!1,i=d.useLayoutEffect,f=o?function(){}:d.useEffect},92783:function(e,t,n){"use strict";var a=n(17907),l=a(n(57445));a(n(23513)),(0,l.default)(t,"__esModule",{value:!0}),t.warnOnce=void 0;var r=function(e){};t.warnOnce=r}}]);