(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8747],{76278:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(87462),c=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=n(93771),s=c.forwardRef(function(e,t){return c.createElement(a.Z,(0,r.Z)({},e,{ref:t,icon:i}))})},26702:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(87462),c=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},a=n(93771),s=c.forwardRef(function(e,t){return c.createElement(a.Z,(0,r.Z)({},e,{ref:t,icon:i}))})},1558:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(87462),c=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=n(93771),s=c.forwardRef(function(e,t){return c.createElement(a.Z,(0,r.Z)({},e,{ref:t,icon:i}))})},73807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return FileSystemAccessApiPage}});var r=n(67294),c=n(9008),i=n.n(c),a=n(48726),s=n(38925),l=n(86471),o=n(44845),u=n(33938),d=n(8333),p=n(30222),f=n.n(p),h=n(81290),m=n.n(h);n(34284);var x=n(18610);n(64043),n(22462);var w={"image/png":[".png"],"image/jpeg":[".jpeg",".jpg"],"image/webp":[".webp"],"image/avif":[".avif"]},g={types:[{description:"图片",accept:w}]},v=n(85893),Demo_Demo=function(e){var t=(0,r.useState)(null),n=(0,d.Z)(t,2),c=n[0],i=n[1];function _handleLoadFileClick(){return(_handleLoadFileClick=(0,u.Z)(f().mark(function _callee(e){var t,n,r,c,a,s;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.showOpenFilePicker(g);case 3:return t=e.sent,n=(0,d.Z)(t,1)[0],e.next=8,n.getFile();case 8:return r=e.sent,e.next=11,r.arrayBuffer();case 11:c=e.sent,a=function(e){var t=e.match(/\.[a-zA-Z0-9]+$/);if(!t)return null;switch(t[0]){case".png":case".jpg":case".jpeg":return"image/png";case".webp":return"image/webp";case".avif":return"image/avif"}}(r.name),s=new Blob([c],{type:a}),i({src:m().createObjectURL(s),content:c,mime:a}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}},_callee,null,[[0,17]])}))).apply(this,arguments)}function _handleSaveFileClick(){return(_handleSaveFileClick=(0,u.Z)(f().mark(function _callee2(e){var t,n;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,window.showSaveFilePicker({types:[{description:"图片",accept:(0,o.Z)({},c.mime,w[c.mime])}]});case 5:return t=e.sent,e.next=8,t.createWritable();case 8:return n=e.sent,e.next=11,n.write(c.content);case 11:return e.next=13,n.close();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:case"end":return e.stop()}},_callee2,null,[[2,15]])}))).apply(this,arguments)}return[(0,v.jsxs)(x.ZP.Group,{children:[(0,v.jsx)(x.ZP,{onClick:function(e){return _handleLoadFileClick.apply(this,arguments)},children:"加载图片"}),(0,v.jsx)(x.ZP,{onClick:function(e){return _handleSaveFileClick.apply(this,arguments)},children:"保存图片"})]},"button-group"),(0,v.jsx)("div",{className:"my-[16px]",children:null!=c&&c.src?(0,v.jsx)("img",{className:"block max-w-full",src:c.src}):null},"image")]},y=n(67552),_=n.n(y),j=n(11151);function _createMdxContent(e){var t=_()({pre:"pre",code:"code"},(0,j.ah)(),e.components);return(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-javascript",children:"const [fileHandle] = await window.showOpenFilePicker();\nconst file = await fileHandle.getFile();\nconst content = await file.arrayBuffer();\nconst blob = new Blob([content], { type: 'image/png' });\nconst img = document.createElement('img');\n\ndocument.body.appendChild(img);\nimg.src = URL.createObjectURL(blob);\n"})})}var readFile=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=_()({},(0,j.ah)(),e.components).wrapper;return t?(0,v.jsx)(t,_()({},e,{children:(0,v.jsx)(_createMdxContent,e)})):_createMdxContent(e)};function writeFile_createMdxContent(e){var t=_()({pre:"pre",code:"code"},(0,j.ah)(),e.components);return(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-javascript",children:"const handle = await window.showSaveFilePicker({\n  types: [{\n    description: 'Test files',\n    accept: {\n      'image/png': ['.png']\n    }\n  }]\n});\nconst writable = await handle.createWritable();\n\nawait writable.write(content);\nawait writable.close();\n"})})}var writeFile=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=_()({},(0,j.ah)(),e.components).wrapper;return t?(0,v.jsx)(t,_()({},e,{children:(0,v.jsx)(writeFile_createMdxContent,e)})):writeFile_createMdxContent(e)},b=a.Z.Title,A=a.Z.Paragraph,F=a.Z.Text,FileSystemAccessApi_FileSystemAccessApi=function(e){return(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(b,{children:"使用File System Access API访问文件"}),(0,v.jsx)(A,{children:"最新的File System Access API可以访问文件系统，完成文件的读取和保存。"}),(0,v.jsxs)(A,{children:["使用",(0,v.jsx)(F,{code:!0,children:"window.showOpenFilePicker"}),"获取",(0,v.jsx)(F,{code:!0,children:"fileHandle"}),"，完成文件的读取。"]}),(0,v.jsx)(readFile,{}),(0,v.jsxs)(A,{children:["使用",(0,v.jsx)(F,{code:!0,children:"window.showSaveFilePicker"}),"获取",(0,v.jsx)(F,{code:!0,children:"handle"}),"，完成文件的保存。"]}),(0,v.jsx)(writeFile,{}),(0,v.jsx)(A,{children:"这个Demo展示了如何加载图片和保存图片。"}),(0,v.jsx)(Demo_Demo,{}),(0,v.jsx)(s.Z,{type:"info",message:[(0,v.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,v.jsxs)("div",{className:"py-[8px]",children:["Getting Started With the File System Access API：",(0,v.jsx)("a",{href:"https://css-tricks.com/getting-started-with-the-file-system-access-api/",target:"_blank",rel:"noopener noreferrer",children:"https://css-tricks.com/getting-started-with-the-file-system-access-api/"})]},"getting-started-with-the-file-system-access-api"),(0,v.jsxs)("div",{className:"py-[8px]",children:["File_System_Access_API：",(0,v.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API"})]},"file"),(0,v.jsxs)("div",{className:"py-[8px]",children:["FileAPI：",(0,v.jsx)("a",{href:"https://w3c.github.io/FileAPI/",target:"_blank",rel:"noopener noreferrer",children:"https://w3c.github.io/FileAPI/"})]},"fileAPI")]})]})};function FileSystemAccessApiPage(e){return(0,v.jsxs)(r.Fragment,{children:[(0,v.jsxs)(i(),{children:[(0,v.jsx)("title",{children:"使用File System Access API访问文件"}),(0,v.jsx)("meta",{name:"keywords",content:"前端, js, javascript, File System Access API"}),(0,v.jsx)("meta",{name:"description",content:"使用File System Access API访问文件"})]}),(0,v.jsx)(FileSystemAccessApi_FileSystemAccessApi,{})]})}},94034:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/file-system-access-api",function(){return n(73807)}])},84406:function(e,t,n){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return _arrayLikeToArray}})},33938:function(e,t,n){"use strict";n.d(t,{Z:function(){return _asyncToGenerator}});var r=n(890);function asyncGeneratorStep(e,t,n,c,i,a,s){try{var l=e[a](s),o=l.value}catch(e){n(e);return}l.done?t(o):r.resolve(o).then(c,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new r(function(r,c){var i=e.apply(t,n);function _next(e){asyncGeneratorStep(i,r,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,r,c,_next,_throw,"throw",e)}_next(void 0)})}}},8333:function(e,t,n){"use strict";n.d(t,{Z:function(){return _slicedToArray}});var r=n(86416),c=n(1768),i=n(6919),a=n(79788),s=n(71518);function _slicedToArray(e,t){return function(e){if(r(e))return e}(e)||function(e,t){var n=null==e?null:void 0!==c&&i(e)||e["@@iterator"];if(null!=n){var r,s,l,o,u=[],d=!0,p=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(a(u).call(u,r.value),u.length!==t);d=!0);}catch(e){p=!0,s=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(p)throw s}}return u}}(e,t)||(0,s.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71518:function(e,t,n){"use strict";n.d(t,{Z:function(){return _unsupportedIterableToArray}});var r=n(58189),c=n(36961),i=n(84406);function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return(0,i.Z)(e,t);var n,a=r(n=Object.prototype.toString.call(e)).call(n,8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return c(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return(0,i.Z)(e,t)}}}},function(e){e.O(0,[4322,1447,9166,2072,9774,2888,179],function(){return e(e.s=94034)}),_N_E=e.O()}]);