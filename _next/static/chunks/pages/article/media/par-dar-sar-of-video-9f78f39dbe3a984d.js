(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{6408:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/media/par-dar-sar-of-video",function(){return i(38069)}])},38069:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return j}});var s=i(85893),t=i(67294),c=i(9008),o=i.n(c),r=i(76315),l=i(38925),a=i(172),d=i.n(a),p=i(30673),h=i(75749),u=i(39182);let{Title:x,Paragraph:m,Text:f}=r.default;var A=function(e){return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(x,{children:"视频参数PAR、DAR、SAR的区别"}),(0,s.jsx)(m,{children:"昨天接到编辑的反馈，尺寸524\xd7360的视频，转码后给到的尺寸变成了640x360。 我将视频下载下来后，通过FFmpeg来获取视频的编码，得到了如下信息："}),(0,s.jsx)(h.Z,{type:"text",children:`Stream #0:0(eng): Video: h264 (Main) (avc1 / 0x31637661), yuv420p,
640x360 [SAR 59:72 DAR 118:81],646 kb/s, 25 fps, 25 tbr, 12800 tbn, 50 tbc (default)`}),(0,s.jsx)(m,{children:"我又将A站的视频通过FFmpeg来获取视频的编码，得到了如下信息："}),(0,s.jsx)(h.Z,{type:"text",children:`Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p,
3840x2160 [SAR 1:1 DAR 16:9], 7555 kb/s, 25 fps, 25 tbr, 90k tbn, 50 tbc (default)`}),(0,s.jsx)(m,{children:"其中涉及到了PAR、DAR、SAR的计算，由于平时的视频采样纵横比（SAR）比都是1:1，而这个视频的采样纵横比（SAR）是59:72。这就导致了 获取的尺寸有问题。"}),(0,s.jsxs)(m,{children:["FFmpeg中的视频参数PAR、DAR、SAR的解释：",(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"PAR - pixel aspect ratio，单个像素的宽高比，大多数情况像素宽高比为1:1，也就是一个正方形像素，如果不是1:1，则该像素可以 理解为长方形像素。常用的PAR比率有(1:1，10:11, 40:33, 16:11, 12:11)。"}),(0,s.jsx)("li",{children:"DAR - display aspect ratio，显示宽高比。即最终播放出来的画面的宽与高之比。比如常见的16:9和4:3等。缩放视频也要按这个比例 来，否则会使图像看起来被压扁或者拉长了似的。"}),(0,s.jsxs)("li",{className:d().keepAll,children:["SAR - Sample aspect ratio，采样纵横比，表示横向的像素点数和纵向的像素点数的比值，即为我们通常提到的分辨率宽高比。就是对图像 采集时，横向采集与纵向采集构成的点阵，横向点数与纵向点数的比值。比如VGA图像",(0,s.jsx)(f,{className:"inline-block",code:!0,children:"640 / 480 = 4 : 3"}),"，D-1 PAL图像",(0,s.jsx)(f,{className:"inline-block",code:!0,children:"720 / 576 = 5 : 4"}),"，高清视频等。"]})]}),"三者的关系：",(0,s.jsx)(f,{className:"inline-block",code:!0,children:"PAR x SAR = DAR"}),"或者",(0,s.jsx)(f,{className:"inline-block",code:!0,children:"PAR = DAR / SAR"}),"。"]}),(0,s.jsx)(l.Z,{type:"info",message:[(0,s.jsx)("h2",{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,s.jsxs)("div",{className:"py-[8px]",children:["相同的问题：",(0,s.jsx)(u.Z,{href:"https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl",children:"https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl"})]},"stackoverflow"),(0,s.jsxs)("div",{className:"py-[8px]",children:["FFmpeg基础概念之PAR，DAR和SAR：",(0,s.jsx)(u.Z,{href:"https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/",children:"https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/"})]},"ffmpeg")]})]})};function j(e){return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"视频参数PAR、DAR、SAR的区别"}),(0,s.jsx)("meta",{name:"keywords",content:"视频, 媒体, PAR, DAR, SAR, FFmpeg"}),(0,s.jsx)("meta",{name:"description",content:"视频参数PAR、DAR、SAR的区别"})]}),(0,s.jsx)(A,{})]})}},99388:function(e,n,i){"use strict";var s=i(85893),t=i(73935),c=i(45697),o=i.n(c),r=i(39332),l=i(81860),a=i(10932),d=i(75162),p=i(6171),h=i(76467),u=i(63791),x=i.n(u);let{BackTop:m}=l.default;function f(e){let n=(0,r.useRouter)();return[(0,s.jsxs)("div",{className:x().main,children:[e.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,s.jsx)(p.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,s.jsx)(h.default,{children:"object"==typeof document?(0,t.createPortal)((0,s.jsx)(m,{type:"primary",icon:(0,s.jsx)(d.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}f.propTypes={children:o().node,goToTop:o().bool,goBack:o().bool},n.Z=f},30673:function(e,n,i){"use strict";var s=i(85893),t=i(45697),c=i.n(t),o=i(99388);function r(e){return(0,s.jsx)(o.Z,{goToTop:!0,goBack:!0,children:e.children})}r.propTypes={children:c().node},n.Z=r},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},172:function(e){e.exports={keepAll:"parDarSarOfVideo_keepAll__lTxY5"}}},function(e){e.O(0,[932,416,8925,2888,9774,179],function(){return e(e.s=6408)}),_N_E=e.O()}]);