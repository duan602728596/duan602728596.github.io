(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5289],{76278:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=t(93771),s=r.forwardRef(function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:c}))})},26702:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},a=t(93771),s=r.forwardRef(function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:c}))})},1558:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(87462),r=t(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=t(93771),s=r.forwardRef(function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:c}))})},90599:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ObjectPrototypesPage}});var o=t(67294),r=t(9008),c=t.n(r),a=t(48726),s=t(38925),i=t(86471),l=t(67552),p=t.n(l),h=t(85893),d=t(11151);function _createMdxContent(e){var n=p()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"function Person(name) {\n  this.name = name;\n\n  this.setName = function(newName) {\n    this.name = newName;\n  };\n}\n\nPerson.prototype.getName = function() {\n  return this.name;\n};\n\nconsole.log(Person.prototype);\n/**\n * 输出 { getName: ƒ, constructor: ƒ }\n */\n\nconsole.log(Person.__proto__);\n/**\n * 输出 { [native code] }\n */\n\nconst person = new Person('Tom');\n\nconsole.log(person);\n/**\n * 输出 Person { name: 'Tom', setName: ƒ }\n */\n\nconsole.log(person.__proto__);\n/**\n * 输出 Person { getName: ƒ, constructor: ƒ }\n */\n"})})}var person=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=p()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,p()({},e,{children:(0,h.jsx)(_createMdxContent,e)})):_createMdxContent(e)};function man_createMdxContent(e){var n=p()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"function Man(name) {\n  Person.call(this, name);\n\n  this.isMale = true;\n}\n\nconst man = new Man('LiLei');\n\nconsole.log(man);\n/**\n * Man { name: 'LiLei', isMale: true, setName: ƒ }\n */\n\nconsole.log(man.getName?.());\n/**\n * undefined\n */\n\nconsole.log(man.__proto__);\n/**\n * { constructor: ƒ }\n */\n"})})}var man=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=p()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,p()({},e,{children:(0,h.jsx)(man_createMdxContent,e)})):man_createMdxContent(e)},f=a.Z.Title,u=a.Z.Paragraph,ObjectPrototypes_ObjectPrototypes=function(e){return(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(f,{children:"【前端基础】JavaScript对象原型"}),(0,h.jsx)(u,{children:(0,h.jsx)("blockquote",{children:"每个实例对象都有一个私有属性__proto__，该属性指向它的构造函数的原型对象prototype。 该原型对象的__proto__也可以指向其他构造函数的prototype。"})}),(0,h.jsx)(person,{}),(0,h.jsx)(man,{}),(0,h.jsx)(u,{children:"一个对象的__proto__指向它的构造函数的prototype。"}),(0,h.jsx)(u,{children:"Function.prototype.__proto__.constructor会指向Object。"}),(0,h.jsx)(u,{children:"最新的标准推荐使用Object.getPrototypeOf获取__proto__。"}),(0,h.jsx)(s.Z,{type:"info",message:[(0,h.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,h.jsxs)("div",{className:"py-[8px]",children:[(0,h.jsx)("a",{href:"https://febook.hzfe.org/awesome-interview/book2/js-inherite",target:"_blank",rel:"noopener noreferrer",children:"https://febook.hzfe.org/awesome-interview/book2/js-inherite"}),","]},"febook"),(0,h.jsx)("div",{className:"py-[8px]",children:(0,h.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"})},"object-proto"),(0,h.jsx)("div",{className:"py-[8px]",children:(0,h.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf"})},"object-getPrototypeOf")]})]})};function ObjectPrototypesPage(e){return(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(c(),{children:(0,h.jsx)("title",{children:"JavaScript对象原型"})}),(0,h.jsx)(ObjectPrototypes_ObjectPrototypes,{})]})}},89394:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/object-prototypes",function(){return t(90599)}])}},function(e){e.O(0,[4322,1447,9166,2072,9774,2888,179],function(){return e(e.s=89394)}),_N_E=e.O()}]);