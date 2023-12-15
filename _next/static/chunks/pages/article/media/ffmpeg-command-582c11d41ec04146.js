(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4199],{12488:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return H}});var s=r(67294),t=r(9008),i=r.n(t),c=r(55147),a=r(62079),l=r.n(a),d=r(52020),h=r.n(d),o=r(73324),m=r.n(o),u=r(88546),p=r.n(u),f=r(99595),x=r.n(f),j=r(66775),g=r.n(j),_=r(2201),v=r.n(_),b=r(57445),T=r.n(b),N=r(44845),w=r(85893),Z=r(11151);function k(e,n){var r=l()(e);if(h()){var s=h()(e);n&&(s=m()(s).call(s,function(n){return p()(e,n).enumerable})),r.push.apply(r,s)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r,s,t=null!=arguments[n]?arguments[n]:{};n%2?x()(r=k(Object(t),!0)).call(r,function(n){(0,N.Z)(e,n,t[n])}):g()?v()(e,g()(t)):x()(s=k(Object(t))).call(s,function(n){T()(e,n,p()(t,n))})}return e}var F=r(76315).Z.Text;function L(e){var n=y(y({code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre"},(0,Z.a)()),e.components);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n.h1,{children:"FFmpeg常用的命令"}),"\n",(0,w.jsx)(n.h2,{children:"1、在下载视频时添加Headers"}),"\n",(0,w.jsxs)(n.p,{children:["通过\n",(0,w.jsx)(F,{code:!0,children:"-headers"}),"参数可以在下载视频时添加Headers，header之间用\n",(0,w.jsx)(F,{children:"\\r\\n"}),"分隔。例如："]}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:"language-bash",children:'ffmpeg -headers "Referer: https://video.com/\\r\\nHost: video.com\\r\\n" -i https://video.com/1.mp4 -c copy 1.mp4\n'})}),"\n",(0,w.jsx)(n.p,{children:"如果视频格式是m3u8，则headers只对m3u8文件有效，对切片的ts文件无效。"}),"\n",(0,w.jsx)(n.h2,{children:"2、下载本地m3u8文件"}),"\n",(0,w.jsxs)(n.p,{children:["当m3u8为本地文件时，通过\n",(0,w.jsx)(F,{code:!0,children:"-protocol_whitelist"}),"参数添加协议的白名单，可以正常下载视频。例如："]}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:"language-bash",children:'ffmpeg -protocol_whitelist "file,http,https,tcp,tls" -i c:\\video\\1.m3u8 -c copy 1.mp4\n'})}),"\n",(0,w.jsx)(n.h2,{children:"3、视频裁剪"}),"\n",(0,w.jsxs)(n.p,{children:["通过\n",(0,w.jsx)(F,{code:!0,children:"-ss"}),"和\n",(0,w.jsx)(F,{code:!0,children:"-t"}),"参数来裁剪视频。例如："]}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:"language-bash",children:"ffmpeg -ss 00:00:10 -t 00:00:10 -accurate_seek -i 1.mp4 --avoid_negative_ts 1 1_cut.mp4\n"})}),"\n",(0,w.jsxs)(n.p,{children:["命令的具体功能可以在\n",(0,w.jsx)("a",{href:"https://ffmpeg.org/ffmpeg-all.html",target:"_blank",rel:"noopener noreferrer",children:"FFmpeg Documentation"}),"找到。"]}),"\n",(0,w.jsx)(n.p,{children:"对于视频时长的计算可以使用这段代码："}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:"language-typescript",children:"type Time = [number, number, number];\n\n/**\n * 计算时间差\n * @param { Time } startTime: 开始时间\n * @param { Time } endTime  : 结束时间\n * @return { Time }\n */\nfunction computingTime(startTime: Time, endTime: Time): Time {\n  const startS: number = (startTime[0] * 3600) + (startTime[1] * 60) + startTime[2]; // 开始时间转换到秒\n  const endS: number = (endTime[0] * 3600) + (endTime[1] * 60) + endTime[2];         // 结束时间转换到秒\n  const cha: number = endS - startS;                                                 // 计算时间差\n  const h: number = Number(`${ cha / 3600 }`.match(/\\d+/g)![0]);                     // 时取整数\n  const hp: number = cha % 3600;                                                     // 时取余\n  const m: number = Number(`${ hp / 60 }`.match(/\\d+/g)![0]);                        // 分取整数\n  const s: number = hp % 60;                                                         // 分取余 => 秒\n\n  return [h, m, s];\n}\n"})}),"\n",(0,w.jsx)(n.h2,{children:"4、视频合并"}),"\n",(0,w.jsx)(n.p,{children:"首先创建一个txt文件，写入要合并的文件。"}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{children:"file '1.mp4'\nfile '2.mp4'\nfile '3.mp4'\n"})}),"\n",(0,w.jsx)(n.p,{children:"然后执行命令："}),"\n",(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:"language-bash",children:"ffmpeg -f concat -safe 0 -i list.txt -c copy 1.mp4\n"})})]})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=y(y({},(0,Z.a)()),e.components).wrapper;return n?(0,w.jsx)(n,y(y({},e),{},{children:(0,w.jsx)(L,y({},e))})):L(e)}var I=function(e){return(0,w.jsx)(c.Z,{children:(0,w.jsx)(S,{})})};function H(e){return(0,w.jsxs)(s.Fragment,{children:[(0,w.jsxs)(i(),{children:[(0,w.jsx)("title",{children:"FFmpeg常用的命令"}),(0,w.jsx)("meta",{name:"keywords",content:"视频, 媒体, FFmpeg"}),(0,w.jsx)("meta",{name:"description",content:"FFmpeg常用的命令"})]}),(0,w.jsx)(I,{})]})}},39243:function(e,n,r){"use strict";var s=r(19623),t=r(73935),i=r(11163),c=r(81860),a=r(18610),l=r(75162),d=r(6171),h=r(76467),o=r(63791),m=r.n(o),u=r(85893),p=c.Z.BackTop;n.Z=function(e){var n=(0,i.useRouter)();return[(0,u.jsxs)("div",{className:m().main,children:[e.goBack?(0,u.jsx)("div",{className:"mb-[16px] text-right",children:(0,u.jsxs)(a.ZP,{onClick:function(e){n.push("/")},children:[(0,u.jsx)(d.Z,{className:"mr-[6px]"}),"返回"]})}):null,null==e?void 0:e.children]},"main"),(0,u.jsx)(h.default,{children:null!=e&&e.goToTop&&("undefined"==typeof document?"undefined":(0,s.Z)(document))==="object"?(0,t.createPortal)((0,u.jsx)(p,{type:"primary",icon:(0,u.jsx)(l.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop")]}},31725:function(e,n,r){"use strict";r(64043);var s=r(88946),t=r.n(s),i=r(81290),c=r.n(i),a=r(41664),l=r.n(a),d=r(21612),h=r(78957),o=r(83062),m=r(67337),u=r(32958),p=r.n(u),f=r(96808),x=r(85893),j=[{href:"/",title:"文章"},{href:"/favorites",title:"收藏夹"},{href:"/project",title:"开源项目"}],g=["github.io","vercel.app"],_=t()(j).call(j,function(e,n){return(0,x.jsx)("li",{className:p().navListItem,children:(0,x.jsx)(l(),{href:e.href,children:e.title})},e.href)});n.Z=function(e){return(0,x.jsx)(d.Z.Header,{className:p().antdHeader,children:(0,x.jsxs)("div",{className:p().header,children:[(0,x.jsx)("nav",{className:p().headerLeft,children:(0,x.jsx)("ul",{className:p().navList,children:_})}),(0,x.jsx)("div",{className:p().headerRight,children:(0,x.jsxs)(h.Z,{size:16,children:[(0,x.jsx)(o.Z,{title:"切换网站地址",children:(0,x.jsx)("a",{className:p().switchAddress,role:"button",tabIndex:0,"aria-label":"切换网站地址",onClick:function(e){var n=window.location,r=n.pathname,s=n.hostname,t=/github\.io/.test(s);window.location.href=new(c())(r,"https://duan602728596.".concat(g[t?1:0],"/"))},children:(0,x.jsx)(m.Z,{className:p().switchAddressIcon})})}),(0,x.jsx)("a",{className:p().githubLink,href:"https://github.com/duan602728596",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(f.Z,{className:"block w-full h-full",imageClassName:"block w-full h-full",avifSrc:"/images/github.avif",webpSrc:"/images/github.webp",src:"/images/github.png",alt:"github"})})]})})]})})}},96808:function(e,n,r){"use strict";var s=r(85893);n.Z=function(e){var n=e.className,r=e.imageClassName,t=e.avifSrc,i=e.webpSrc,c=e.src,a=e.alt;return(0,s.jsxs)("picture",{className:n,children:[t&&(0,s.jsx)("source",{srcSet:t,type:"image/avif"}),i&&(0,s.jsx)("source",{srcSet:i,type:"image/webp"}),(0,s.jsx)("img",{className:r,src:c,alt:a})]})}},55147:function(e,n,r){"use strict";var s=r(67294),t=r(31725),i=r(39243),c=r(85893);n.Z=function(e){return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(t.Z,{}),(0,c.jsx)(i.Z,{goToTop:!0,goBack:!0,children:e.children})]})}},62267:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/media/ffmpeg-command",function(){return r(12488)}])},63791:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}},32958:function(e){e.exports={antdHeader:"nav_antdHeader__eCvl0",header:"nav_header__y1mlw",headerLeft:"nav_headerLeft__PrT7_",headerRight:"nav_headerRight__JfqYP",navList:"nav_navList__3HXot",navListItem:"nav_navListItem__hpAdz",switchAddress:"nav_switchAddress__sVzqD",githubLink:"nav_githubLink__BDzSl",switchAddressIcon:"nav_switchAddressIcon__KLxGG"}}},function(e){e.O(0,[8610,1447,4530,9774,2888,179],function(){return e(e.s=62267)}),_N_E=e.O()}]);