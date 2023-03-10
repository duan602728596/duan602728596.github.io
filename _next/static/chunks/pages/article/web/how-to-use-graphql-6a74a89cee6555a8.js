(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4880],{16858:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var a=r(67294),s=r(9008),o=r.n(s),t=r(48726),l=r(22410),c=r(67552),i=r.n(c),h=r(85893),d=r(11151);function p(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql, buildSchema } from 'graphql';\n\nconst schema = buildSchema(/* GraphQL */ `\n  type Query {\n    hello: String\n  }\n`);\nconst root = { hello: () => 'Hello world!' };\n\nconst response = await graphql({\n  schema,\n  source: /* GraphQL */ `\n    {\n      hello\n    }\n  `,\n  rootValue: root\n});\n\nconsole.log(response);\n"})})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(p,e)})):p(e)};function m(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-graphql",children:"#import './human.graphql'\n\ntype Query {\n    hello: String\n    human(age: Int): Human\n}\n"})})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(m,e)})):m(e)};function j(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-graphql",children:"type Human {\n    name: String\n    age: Int\n}\n"})})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(j,e)})):j(e)};function v(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { URL } from 'node:url';\nimport { loadSchema } from '@graphql-tools/load';\nimport { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';\n\nexport async function getSchema(file, importMetaUrl) {\n  const urlResult = decodeURIComponent(new URL(file, importMetaUrl).pathname);\n\n  return loadSchema(urlResult, {\n    loaders: [new GraphQLFileLoader()]\n  });\n}\n"})})}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(v,e)})):v(e)};function _(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql } from 'graphql';\nimport { addResolversToSchema } from '@graphql-tools/schema'\nimport { getSchema } from './utils.js';\n\nconst resolvers = {\n  Query: {\n    hello(obj, args, context, info) {\n      return '你好';\n    },\n    human(obj, args, context, info) {\n      return {\n        name: '小明',\n        age: args.age + obj.$add()\n      };\n    }\n  }\n};\nconst schema = await getSchema('./query.graphql', import.meta.url);\nconst schemaWithResolvers = addResolversToSchema({ schema, resolvers });\n\nconst response = await graphql({\n  schema: schemaWithResolvers,\n  source: /* GraphQL */ `\n    {\n      hello\n      human(age: 56) {\n        name\n        age\n      }\n    }\n  `,\n  rootValue: {\n    $add() {\n      return 32;\n    }\n  }\n});\n\nconsole.log(response.data);\n"})})}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(_,e)})):_(e)};function b(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"export default {\n  mode: 'development',\n  module: {\n    rules: [\n      {\n        test: /^.*\\.(gql|graphql)$/,\n        loader: '@graphql-tools/webpack-loader',\n        options: {\n          importHelpers: true\n        }\n      }\n    ]\n  }\n};\n"})})}var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(b,e)})):b(e)};function N(e){var n=i()({pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-javascript",children:"import { graphql, buildASTSchema } from 'graphql';\nimport query from './query.graphql';\n\nconst root = {\n  hello() {\n    return '你好';\n  },\n  human() {\n    return {\n      name: '小明',\n      age: 14\n    };\n  }\n}\n\ngraphql({\n  schema: buildASTSchema(query),\n  source: /* GraphQL */ `\n    {\n        hello\n        human {\n            name\n            age\n        }\n    }\n  `,\n  rootValue: root\n}).then((response) => {\n  console.log(response);\n});\n"})})}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()({},(0,d.ah)(),e.components).wrapper;return n?(0,h.jsx)(n,i()({},e,{children:(0,h.jsx)(N,e)})):N(e)},S=t.Z.Title,k=t.Z.Paragraph,Z=function(e){return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(S,{children:"如何使用GraphQL"}),(0,h.jsx)(S,{level:2,children:"快速开始"}),(0,h.jsx)(k,{children:"通过下面的代码，我们可以快速使用GraphQL实现查询。"}),(0,h.jsx)(u,{}),(0,h.jsx)(S,{level:2,children:"使用graphql-tools"}),(0,h.jsx)(k,{children:"我们可以使用graphql-tools来使用GraphQL。"}),(0,h.jsx)(k,{children:"首先我们先创建两个GraphQL文件。"}),(0,h.jsx)(S,{level:3,children:"query.graphql"}),(0,h.jsx)(g,{}),(0,h.jsx)(S,{level:3,children:"human.graphql"}),(0,h.jsx)(x,{}),(0,h.jsx)(k,{children:"创建一个方法，用于加载GraphQL文件。"}),(0,h.jsx)(f,{}),(0,h.jsx)(k,{children:"实现查询。"}),(0,h.jsx)(w,{}),(0,h.jsx)(S,{level:2,children:"webpack配置"}),(0,h.jsx)(k,{children:"如果要通过webpack来配置使用，首先要配置loader。"}),(0,h.jsx)(q,{}),(0,h.jsx)(k,{children:"然后在项目中使用。"}),(0,h.jsx)(L,{})]})};function y(e){return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(o(),{children:(0,h.jsx)("title",{children:"如何使用GraphQL"})}),(0,h.jsx)(Z,{})]})}},54892:function(e,n,r){"use strict";var a=r(19623),s=r(73935),o=r(11163),t=r(1472),l=r(18662),c=r(75162),i=r(37653),h=r(76467),d=r(3744),p=r.n(d),u=r(85893),m=t.Z.BackTop;n.Z=function(e){var n=(0,o.useRouter)();return[(0,u.jsxs)("div",{className:p().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(l.ZP,{onClick:function(e){n.push("/")},children:[(0,u.jsx)(i.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,u.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,a.Z)(document))==="object"?(0,s.createPortal)((0,u.jsx)(m,{type:"primary",icon:(0,u.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},34341:function(e,n,r){"use strict";r(74916);var a=r(88946),s=r.n(a),o=r(81290),t=r.n(o),l=r(41664),c=r.n(l),i=r(97183),h=r(26713),d=r(83062),p=r(67337),u=r(62139),m=r.n(u),g=r(30654),j=r(85893),x=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],v=["github.io","vercel.app"],f=s()(x).call(x,function(e,n){return(0,j.jsx)("li",{className:m().navListItem,children:(0,j.jsx)(c(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,j.jsx)(i.Z.Header,{className:m().antdHeader,children:(0,j.jsxs)("div",{className:m().header,children:[(0,j.jsx)("nav",{className:m().headerLeft,children:(0,j.jsx)("ul",{className:m().navList,children:f})}),(0,j.jsx)("div",{className:m().headerRight,children:(0,j.jsxs)(h.Z,{size:16,children:[(0,j.jsx)(d.Z,{title:"切换网站地址",children:(0,j.jsx)("a",{className:m().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,r=n.pathname,a=n.hostname,s=/github\.io/.test(a);window.location.href=new(t())(r,"https://duan602728596.".concat(v[s?1:0],"/"))},children:(0,j.jsx)(p.Z,{className:m().switchAddressIcon})})}),(0,j.jsx)("a",{className:m().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,j.jsx)(g.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},30654:function(e,n,r){"use strict";var a=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,s=e.avifSrc,o=e.webpSrc,t=e.src,l=e.alt;return(0,a.jsxs)("picture",{className:n,children:[s&&(0,a.jsx)("source",{srcSet:s,type:"image/avif"}),o&&(0,a.jsx)("source",{srcSet:o,type:"image/webp"}),(0,a.jsx)("img",{className:r,src:t,alt:l})]})}},22410:function(e,n,r){"use strict";var a=r(67294),s=r(34341),o=r(54892),t=r(85893);n.Z=function(e){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(s.Z,{}),(0,t.jsx)(o.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},23641:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/web/how-to-use-graphql",function(){return r(16858)}])},3744:function(e){e.exports={main:"main_main__ovwFV",goToTop:"main_goToTop__Soij4"}},62139:function(e){e.exports={antdHeader:"nav_antdHeader__pc6AA",header:"nav_header__K7RoR",headerLeft:"nav_headerLeft__D5kPR",headerRight:"nav_headerRight__plZ1z",navList:"nav_navList__iDQNr",navListItem:"nav_navListItem__UblqT",switchAddress:"nav_switchAddress__vhjXS",githubLink:"nav_githubLink__1sY1n",switchAddressIcon:"nav_switchAddressIcon__e5KfQ"}}},function(e){e.O(0,[5876,4796,4940,9774,2888,179],function(){return e(e.s=23641)}),_N_E=e.O()}]);