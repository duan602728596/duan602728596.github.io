(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1886],{96273:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/python/extract-accompaniment-using-spleeter",function(){return r(97101)}])},97101:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t=r(85893),s=r(67294),a=r(9008),l=r.n(a),i=r(26219),c=r(11151),o=r(41577),p=r(21652),u=function(e){let n=(0,s.useRef)(null),r=(0,s.useRef)(null);return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)("h4",{children:"原版音乐：《I love you 私の君》"}),(0,t.jsx)("audio",{src:"/media/extract-accompaniment-using-spleeter/1.mp4",controls:!0}),(0,t.jsx)("h4",{className:"mt-[12px]",children:"提取后的人声和伴奏"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"align-[21px]",children:"人声："}),(0,t.jsx)("audio",{ref:n,src:"/media/extract-accompaniment-using-spleeter/vocals.wav",controls:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"align-[21px]",children:"伴奏："}),(0,t.jsx)("audio",{ref:r,src:"/media/extract-accompaniment-using-spleeter/accompaniment.wav",controls:!0})]}),(0,t.jsxs)(p.ZP.Group,{className:"mt-[12px]",children:[(0,t.jsx)(p.ZP,{type:"primary",onClick:function(e){n.current&&r.current&&(n.current.currentTime=r.current.currentTime=0,n.current.play(),r.current.play())},children:"同时播放"}),(0,t.jsx)(p.ZP,{onClick:function(e){n.current&&r.current&&(n.current.pause(),r.current.pause())},children:"暂停"})]})]})};function d(e){let n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"使用Spleeter提取伴奏"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(o.Z,{href:"https://github.com/deezer/spleeter",children:"Spleeter"}),"\n是由法国在线音乐流媒体服务提供商Deezer开源的分离音频库，可以将音频分离成人声、伴奏、鼓点、贝斯、钢琴等等。\n它是基于TensorFlow的深度学习模型，可以在CPU或GPU上运行。它的分离效果非常好，可以说是目前最好的分离音频库了。"]}),"\n",(0,t.jsx)(n.h2,{children:"安装流程"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"安装pyenv（可选）"}),"\n",(0,t.jsx)(n.p,{children:"Spleeter要求Python版本为3.7 - 3.10，所以我们需要安装pyenv或venv来管理Python版本。"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"安装python：推荐版本为v3.10.5。"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"安装FFmpeg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"使用pip安装Spleeter"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/path/to/.pyenv/pyenv-win/versions/3.10.5/python.exe -m pip install spleeter\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"使用Spleeter提取伴奏"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"通过执行命令来提取伴奏"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python.exe -m spleeter separate -p spleeter:2stems -o /path/to/output /path/to/audio.mp3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"通过python执行代码（代码由AI生成）"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import spleeter\n\n# Separate vocals and accompaniment from an audio file\nseparator = spleeter.Separator('spleeter:2stems')\nseparator.separate_to_file('path/to/audio/file', 'output/path')\n\n# Separate vocals, drums, bass, and other from an audio file\nseparator = spleeter.Separator('spleeter:4stems')\nseparator.separate_to_file('path/to/audio/file', 'output/path')\n\n# Separate vocals, drums, bass, piano, and other from an audio file\nseparator = spleeter.Separator('spleeter:5stems')\nseparator.separate_to_file('path/to/audio/file', 'output/path')\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"提取效果"}),"\n",(0,t.jsx)(u,{})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var x=function(e){return(0,t.jsx)(i.Z,{children:(0,t.jsx)(h,{})})};function m(e){return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"使用Spleeter提取伴奏"}),(0,t.jsx)("meta",{name:"keywords",content:"视频, 媒体"}),(0,t.jsx)("meta",{name:"description",content:"使用Spleeter提取伴奏"})]}),(0,t.jsx)(x,{})]})}},94914:function(e,n,r){"use strict";var t=r(85893),s=r(73935),a=r(39332),l=r(29155),i=r(21652),c=r(70612),o=r(30448),p=r(76467),u=r(1294),d=r.n(u);let{BackTop:h}=l.default;n.Z=function(e){let n=(0,a.useRouter)();return[(0,t.jsxs)("div",{className:d().main,children:[e.goBack?(0,t.jsx)("div",{className:"mb-[16px] text-right",children:(0,t.jsxs)(i.ZP,{onClick:function(e){n.push("/")},children:[(0,t.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,t.jsx)(p.default,{children:"object"==typeof document?(0,s.createPortal)((0,t.jsx)(h,{type:"primary",icon:(0,t.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(e,n,r){"use strict";var t=r(85893),s=r(66252),a=r(94914);n.Z=function(e){return(0,t.jsx)(a.Z,{goToTop:!0,goBack:!0,children:(0,t.jsx)(s.default,{children:e.children})})}},1294:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[1652,5361,2888,9774,179],function(){return e(e.s=96273)}),_N_E=e.O()}]);