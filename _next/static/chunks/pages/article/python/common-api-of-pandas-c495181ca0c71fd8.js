(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9337],{39003:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/python/common-api-of-pandas",function(){return l(92349)}])},92349:function(n,e,l){"use strict";l.r(e),l.d(e,{default:function(){return h}});var d=l(85893),s=l(67294),a=l(9008),c=l.n(a),r=l(26219),i=l(11151);function o(n){let e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{children:"pandas的常用API"}),"\n",(0,d.jsx)(e.p,{children:"pandas的常用操作方法，便于快速查找。"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"加载数据"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df = pd.DataFrame(data)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"重命名列"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df.rename(columns={\n    'a': 'new_a',\n    'b': 'new_b',\n    'c': 'new_c',\n}, inplace = True)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"merge数据"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"merged_df = pd.DataFrame([{ 'id: '1', 'd': 'd_value' }])\ndf = pd.merge(df, merged_df, on=['id'], how='left')\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"合并两个DataFrame"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df1 = pd.DataFrame(data1)\ndf = pd.concat([df, df1], ignore_index=True)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"重新排列列"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df = df[['id', 'a', 'b', 'c', 'd']]\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"添加行"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"  new_row = pd.Series({\n      'id': '32',\n      'a': 'a_value',\n      'b': 'b_value',\n      'c': 'c_value',\n      'd': 'd_value',\n  })\n  df.loc[len(df)] = new_row\n"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"添加列"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df['e'] = ['e1_value', 'e2_value', 'e3_value']\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"用apply添加列"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"def apply_callback(row):\n    \"\"\"为每个列添加新属性\"\"\"\n    row['f'] = row['e'] + row['c']\n    return row\n\ndf = df.apply(apply_callback, axis=1)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"替换值"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df.replace([np.inf, -np.inf], np.nan, inplace=True) # 删除inf\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"删除列"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"df = df.drop(columns=['e', 'c'])\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"删除指定条件的行"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"con = df['a'] == 13\ndf = df.drop(df[con].index, axis=0)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"更新数据"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"con = df['id'] == '14'\ndf.loc[con, 'a'] = 95\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"指定的index插入数据"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"insert_value_index = 2\ninsert_value_index2 = insert_value_index - 1\ninsert_value_df = pd.DataFrame(value, index=[insert_value_index2])\ndf = pd.concat([df.loc[:insert_value_index2], insert_value_df, df.loc[insert_value_index2:]], ignore_index=True)\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"排序"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"# 高 -> 低\nsort1_df = df.sort_values(['a'], ascending=False)\n# 低 -> 高\nsort2_df = df.sort_values(['b'])\n"})}),"\n"]}),"\n"]})]})}function t(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}var p=function(n){return(0,d.jsx)(r.Z,{children:(0,d.jsx)(t,{})})};function h(n){return(0,d.jsxs)(s.Fragment,{children:[(0,d.jsxs)(c(),{children:[(0,d.jsx)("title",{children:"pandas的常用API"}),(0,d.jsx)("meta",{name:"keywords",content:"pandas"}),(0,d.jsx)("meta",{name:"description",content:"pandas的常用API"})]}),(0,d.jsx)(p,{})]})}},94914:function(n,e,l){"use strict";var d=l(85893),s=l(73935),a=l(39332),c=l(29155),r=l(86338),i=l(70612),o=l(30448),t=l(76467),p=l(1294),h=l.n(p);let{BackTop:x}=c.default;e.Z=function(n){let e=(0,a.useRouter)();return[(0,d.jsxs)("div",{className:h().main,children:[n.goBack?(0,d.jsx)("div",{className:"mb-[16px] text-right",children:(0,d.jsxs)(r.ZP,{onClick:function(n){e.push("/")},children:[(0,d.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,n?.children]},"main"),n?.goToTop?(0,d.jsx)(t.default,{children:"object"==typeof document?(0,s.createPortal)((0,d.jsx)(x,{type:"primary",icon:(0,d.jsx)(i.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(n,e,l){"use strict";var d=l(85893),s=l(66252),a=l(94914);e.Z=function(n){return(0,d.jsx)(a.Z,{goToTop:!0,goBack:!0,children:(0,d.jsx)(s.default,{children:n.children})})}},1294:function(n){n.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(n){n.O(0,[6338,5361,2888,9774,179],function(){return n(n.s=39003)}),_N_E=n.O()}]);