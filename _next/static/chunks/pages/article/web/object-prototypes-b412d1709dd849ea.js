(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5289],{95241:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(67294),o=t(9008),a=t.n(o),s=t(76315),c=t(38925),i=t(55147),l=t(62079),h=t.n(l),u=t(52020),d=t.n(u),p=t(73324),f=t.n(p),m=t(88546),_=t.n(m),j=t(99595),v=t.n(j),x=t(66775),b=t.n(x),g=t(2201),N=t.n(g),w=t(57445),k=t.n(w),y=t(44845),Z=t(85893),O=t(11151);function P(e,n){var t=h()(e);if(d()){var r=d()(e);n&&(r=f()(r).call(r,function(n){return _()(e,n).enumerable})),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t,r,o=null!=arguments[n]?arguments[n]:{};n%2?v()(t=P(Object(o),!0)).call(t,function(n){(0,y.Z)(e,n,o[n])}):b()?N()(e,b()(o)):v()(r=P(Object(o))).call(r,function(n){k()(e,n,_()(o,n))})}return e}function T(e){var n=L(L({code:"code",pre:"pre"},(0,O.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"function Person(name) {\n  this.name = name;\n\n  this.setName = function(newName) {\n    this.name = newName;\n  };\n}\n\nPerson.prototype.getName = function() {\n  return this.name;\n};\n\nconsole.log(Person.prototype);\n/**\n * 输出 { getName: ƒ, constructor: ƒ }\n */\n\nconsole.log(Person.__proto__);\n/**\n * 输出 { [native code] }\n */\n\nconst person = new Person('Tom');\n\nconsole.log(person);\n/**\n * 输出 Person { name: 'Tom', setName: ƒ }\n */\n\nconsole.log(person.__proto__);\n/**\n * 输出 Person { getName: ƒ, constructor: ƒ }\n */\n"})})}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=L(L({},(0,O.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,L(L({},e),{},{children:(0,Z.jsx)(T,L({},e))})):T(e)}function S(e,n){var t=h()(e);if(d()){var r=d()(e);n&&(r=f()(r).call(r,function(n){return _()(e,n).enumerable})),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t,r,o=null!=arguments[n]?arguments[n]:{};n%2?v()(t=S(Object(o),!0)).call(t,function(n){(0,y.Z)(e,n,o[n])}):b()?N()(e,b()(o)):v()(r=S(Object(o))).call(r,function(n){k()(e,n,_()(o,n))})}return e}function I(e){var n=C(C({code:"code",pre:"pre"},(0,O.a)()),e.components);return(0,Z.jsx)(n.pre,{children:(0,Z.jsx)(n.code,{className:"language-javascript",children:"function Man(name) {\n  Person.call(this, name);\n\n  this.isMale = true;\n}\n\nconst man = new Man('LiLei');\n\nconsole.log(man);\n/**\n * Man { name: 'LiLei', isMale: true, setName: ƒ }\n */\n\nconsole.log(man.getName?.());\n/**\n * undefined\n */\n\nconsole.log(man.__proto__);\n/**\n * { constructor: ƒ }\n */\n"})})}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=C(C({},(0,O.a)()),e.components).wrapper;return n?(0,Z.jsx)(n,C(C({},e),{},{children:(0,Z.jsx)(I,C({},e))})):I(e)}var R=s.Z.Title,A=s.Z.Paragraph,J=function(e){return(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(R,{children:"【前端基础】JavaScript对象原型"}),(0,Z.jsx)(A,{children:(0,Z.jsx)("blockquote",{children:"每个实例对象都有一个私有属性__proto__，该属性指向它的构造函数的原型对象prototype。 该原型对象的__proto__也可以指向其他构造函数的prototype。"})}),(0,Z.jsx)(z,{}),(0,Z.jsx)(G,{}),(0,Z.jsx)(A,{children:"一个对象的__proto__指向它的构造函数的prototype。"}),(0,Z.jsx)(A,{children:"Function.prototype.__proto__.constructor会指向Object。"}),(0,Z.jsx)(A,{children:"最新的标准推荐使用Object.getPrototypeOf获取__proto__。"}),(0,Z.jsx)(c.Z,{type:"info",message:[(0,Z.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,Z.jsxs)("div",{className:"py-[8px]",children:[(0,Z.jsx)("a",{href:"https://febook.hzfe.org/awesome-interview/book2/js-inherite",target:"_blank",rel:"noopener noreferrer",children:"https://febook.hzfe.org/awesome-interview/book2/js-inherite"}),","]},"febook"),(0,Z.jsx)("div",{className:"py-[8px]",children:(0,Z.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"})},"object-proto"),(0,Z.jsx)("div",{className:"py-[8px]",children:(0,Z.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf"})},"object-getPrototypeOf")]})]})};function E(e){return(0,Z.jsxs)(r.Fragment,{children:[(0,Z.jsx)(a(),{children:(0,Z.jsx)("title",{children:"JavaScript对象原型"})}),(0,Z.jsx)(J,{})]})}},39243:function(e,n,t){"use strict";var r=t(19623),o=t(73935),a=t(11163),s=t(81860),c=t(18610),i=t(75162),l=t(6171),h=t(76467),u=t(63791),d=t.n(u),p=t(85893),f=s.Z.BackTop;n.Z=function(e){var n=(0,a.useRouter)();return[(0,p.jsxs)("div",{className:d().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(c.ZP,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(l.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,p.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,r.Z)(document))==="object"?(0,o.createPortal)((0,p.jsx)(f,{type:"primary",icon:(0,p.jsx)(i.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,t){"use strict";t(64043);var r=t(88946),o=t.n(r),a=t(81290),s=t.n(a),c=t(41664),i=t.n(c),l=t(21612),h=t(78957),u=t(83062),d=t(67337),p=t(32958),f=t.n(p),m=t(96808),_=t(85893),j=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],x=o()(j).call(j,function(e,n){return(0,_.jsx)("li",{className:f().navListItem,children:(0,_.jsx)(i(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,_.jsx)(l.Z.Header,{className:f().antdHeader,children:(0,_.jsxs)("div",{className:f().header,children:[(0,_.jsx)("nav",{className:f().headerLeft,children:(0,_.jsx)("ul",{className:f().navList,children:x})}),(0,_.jsx)("div",{className:f().headerRight,children:(0,_.jsxs)(h.Z,{size:16,children:[(0,_.jsx)(u.Z,{title:"切换网站地址",children:(0,_.jsx)("a",{className:f().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,t=n.pathname,r=n.hostname,o=/github\.io/.test(r);window.location.href=new(s())(t,"https://duan602728596.".concat(v[o?1:0],"/"))},children:(0,_.jsx)(d.Z,{className:f().switchAddressIcon})})}),(0,_.jsx)("a",{className:f().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,_.jsx)(m.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.className,t=e.imageClassName,o=e.avifSrc,a=e.webpSrc,s=e.src,c=e.alt;return(0,r.jsxs)("picture",{className:n,children:[o&&(0,r.jsx)("source",{srcSet:o,type:"image/avif"}),a&&(0,r.jsx)("source",{srcSet:a,type:"image/webp"}),(0,r.jsx)("img",{className:t,src:s,alt:c})]})}},55147:function(e,n,t){"use strict";var r=t(67294),o=t(31725),a=t(39243),s=t(85893);n.Z=function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(a.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},89394:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/object-prototypes",function(){return t(95241)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,8925,9774,2888,179],function(){return e(e.s=89394)}),_N_E=e.O()}]);