(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4880],{38012:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Z}});var a=r(67294),s=r(9008),o=r.n(s),t=r(76315),l=r(9991),c=r(67552),i=r.n(c),h=r(85893),d=r(11151);function p(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql, buildSchema } from 'graphql';\n\nconst schema = buildSchema(/* GraphQL */ `\n  type Query {\n    hello: String\n  }\n`);\nconst root = { hello: () => 'Hello world!' };\n\nconst response = await graphql({\n  schema,\n  source: /* GraphQL */ `\n    {\n      hello\n    }\n  `,\n  rootValue: root\n});\n\nconsole.log(response);\n"})})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(p,e)})):p(e)};function m(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-graphql",children:"#import './human.graphql'\n\ntype Query {\n    hello: String\n    human(age: Int): Human\n}\n"})})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(m,e)})):m(e)};function j(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-graphql",children:"type Human {\n    name: String\n    age: Int\n}\n"})})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(j,e)})):j(e)};function v(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { URL } from 'node:url';\nimport { loadSchema } from '@graphql-tools/load';\nimport { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';\n\nexport async function getSchema(file, importMetaUrl) {\n  const urlResult = decodeURIComponent(new URL(file, importMetaUrl).pathname);\n\n  return loadSchema(urlResult, {\n    loaders: [new GraphQLFileLoader()]\n  });\n}\n"})})}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(v,e)})):v(e)};function _(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql } from 'graphql';\nimport { addResolversToSchema } from '@graphql-tools/schema'\nimport { getSchema } from './utils.js';\n\nconst resolvers = {\n  Query: {\n    hello(obj, args, context, info) {\n      return '\u4f60\u597d';\n    },\n    human(obj, args, context, info) {\n      return {\n        name: '\u5c0f\u660e',\n        age: args.age + obj.$add()\n      };\n    }\n  }\n};\nconst schema = await getSchema('./query.graphql', import.meta.url);\nconst schemaWithResolvers = addResolversToSchema({ schema, resolvers });\n\nconst response = await graphql({\n  schema: schemaWithResolvers,\n  source: /* GraphQL */ `\n    {\n      hello\n      human(age: 56) {\n        name\n        age\n      }\n    }\n  `,\n  rootValue: {\n    $add() {\n      return 32;\n    }\n  }\n});\n\nconsole.log(response.data);\n"})})}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(_,e)})):_(e)};function b(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"export default {\n  mode: 'development',\n  module: {\n    rules: [\n      {\n        test: /^.*\\.(gql|graphql)$/,\n        loader: '@graphql-tools/webpack-loader',\n        options: {\n          importHelpers: true\n        }\n      }\n    ]\n  }\n};\n"})})}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(b,e)})):b(e)};function q(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql, buildASTSchema } from 'graphql';\nimport query from './query.graphql';\n\nconst root = {\n  hello() {\n    return '\u4f60\u597d';\n  },\n  human() {\n    return {\n      name: '\u5c0f\u660e',\n      age: 14\n    };\n  }\n}\n\ngraphql({\n  schema: buildASTSchema(query),\n  source: /* GraphQL */ `\n    {\n        hello\n        human {\n            name\n            age\n        }\n    }\n  `,\n  rootValue: root\n}).then((response) => {\n  console.log(response);\n});\n"})})}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components),r=n.wrapper;return r?(0,h.jsx)(r,i()({},e,{children:(0,h.jsx)(q,e)})):q(e)},S=t.Z.Title,k=t.Z.Paragraph;var T=function(e){return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(S,{children:"\u5982\u4f55\u4f7f\u7528GraphQL"}),(0,h.jsx)(S,{level:2,children:"\u5feb\u901f\u5f00\u59cb"}),(0,h.jsx)(k,{children:"\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u4f7f\u7528GraphQL\u5b9e\u73b0\u67e5\u8be2\u3002"}),(0,h.jsx)(u,{}),(0,h.jsx)(S,{level:2,children:"\u4f7f\u7528graphql-tools"}),(0,h.jsx)(k,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528graphql-tools\u6765\u4f7f\u7528GraphQL\u3002"}),(0,h.jsx)(k,{children:"\u9996\u5148\u6211\u4eec\u5148\u521b\u5efa\u4e24\u4e2aGraphQL\u6587\u4ef6\u3002"}),(0,h.jsx)(S,{level:3,children:"query.graphql"}),(0,h.jsx)(g,{}),(0,h.jsx)(S,{level:3,children:"human.graphql"}),(0,h.jsx)(x,{}),(0,h.jsx)(k,{children:"\u521b\u5efa\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u52a0\u8f7dGraphQL\u6587\u4ef6\u3002"}),(0,h.jsx)(f,{}),(0,h.jsx)(k,{children:"\u5b9e\u73b0\u67e5\u8be2\u3002"}),(0,h.jsx)(w,{}),(0,h.jsx)(S,{level:2,children:"webpack\u914d\u7f6e"}),(0,h.jsx)(k,{children:"\u5982\u679c\u8981\u901a\u8fc7webpack\u6765\u914d\u7f6e\u4f7f\u7528\uff0c\u9996\u5148\u8981\u914d\u7f6eloader\u3002"}),(0,h.jsx)(N,{}),(0,h.jsx)(k,{children:"\u7136\u540e\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u3002"}),(0,h.jsx)(L,{})]})};function Z(e){return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(o(),{children:(0,h.jsx)("title",{children:"\u5982\u4f55\u4f7f\u7528GraphQL"})}),(0,h.jsx)(T,{})]})}},39748:function(e,n,r){"use strict";var a=r(19623),s=r(73935),o=r(11163),t=r(14137),l=r(39128),c=r(6171),i=r(76467),h=r(97680),d=r.n(h),p=r(85893);n.Z=function(e){var n=(0,o.useRouter)();return[(0,p.jsxs)("div",{className:d().main,children:[e.goBack?(0,p.jsx)("div",{className:"mb-[16px] text-right",children:(0,p.jsxs)(l.Z,{onClick:function(e){n.push("/")},children:[(0,p.jsx)(c.Z,{className:"mr-[6px]"}),"\u8fd4\u56de"]})}):null,null===e||void 0===e?void 0:e.children]},"main"),(0,p.jsx)(i.default,{children:null!==e&&void 0!==e&&e.goToTop&&"object"===("undefined"===typeof document?"undefined":(0,a.Z)(document))?(0,s.createPortal)((0,p.jsx)(t.Z.BackTop,{title:"\u8fd4\u56de\u9876\u90e8",tabIndex:0,role:"button","aria-label":"\u8fd4\u56de\u9876\u90e8",children:(0,p.jsx)("div",{className:d().goToTop,children:"UP"})}),document.body):null},"backTop")]}},32307:function(e,n,r){"use strict";r(74916);var a=r(88946),s=r.n(a),o=r(81290),t=r.n(o),l=r(41664),c=r.n(l),i=r(97183),h=r(46216),d=r(83062),p=r(67337),u=r(56392),m=r.n(u),g=r(2013),j=r(85893),x=[{href:"/",title:"\u6587\u7ae0"},{href:"/favorites",title:"\u6536\u85cf\u5939"},{href:"/project",title:"\u5f00\u6e90\u9879\u76ee"}],v=["github.io","vercel.app"],f=s()(x).call(x,(function(e,n){return(0,j.jsx)("li",{className:m().navListItem,children:(0,j.jsx)(c(),{href:e.href,children:e.title})},e.href)}));n.Z=function(e){return(0,j.jsx)(i.Z.Header,{className:m().antdHeader,children:(0,j.jsxs)("div",{className:m().header,children:[(0,j.jsx)("nav",{className:m().headerLeft,children:(0,j.jsx)("ul",{className:m().navList,children:f})}),(0,j.jsx)("div",{className:m().headerRight,children:(0,j.jsxs)(h.Z,{className:"mt-[-6px]",size:16,children:[(0,j.jsx)(d.Z,{title:"\u5207\u6362\u7f51\u7ad9\u5730\u5740",children:(0,j.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"\u5207\u6362\u7f51\u7ad9\u5730\u5740",onClick:function(e){var n=window.location,r=n.pathname,a=n.hostname,s=/github\.io/.test(a);window.location.href=new(t())(r,"https://duan602728596.".concat(v[s?1:0],"/"))},children:(0,j.jsx)(p.Z,{className:m().switchAddressIcon})})}),(0,j.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,j.jsx)(g.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},2013:function(e,n,r){"use strict";var a=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,s=e.avifSrc,o=e.webpSrc,t=e.src,l=e.alt;return(0,a.jsxs)("picture",{className:n,children:[s&&(0,a.jsx)("source",{srcSet:s,type:"image/avif"}),o&&(0,a.jsx)("source",{srcSet:o,type:"image/webp"}),(0,a.jsx)("img",{className:r,src:t,alt:l})]})}},9991:function(e,n,r){"use strict";var a=r(67294),s=r(32307),o=r(39748),t=r(85893);n.Z=function(e){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(s.Z,{}),(0,t.jsx)(o.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},23641:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/how-to-use-graphql",function(){return r(38012)}])},97680:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},56392:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[9128,1091,1327,9774,2888,179],(function(){return n=23641,e(e.s=n);var n}));var n=e.O();_N_E=n}]);