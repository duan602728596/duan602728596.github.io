(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3698],{19360:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/python/use-label-studio-and-YOLO-to-identify-verification-codes",function(){return l(44233)}])},44233:function(n,e,l){"use strict";l.r(e),l.d(e,{default:function(){return p}});var r=l(85893),s=l(67294),t=l(9008),a=l.n(t),i=l(26219),c=l(11151),o=l(41577);function h(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"使用label-studio和YOLO识别验证码"}),"\n",(0,r.jsx)(e.h2,{children:"安装label-studio"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Github地址：\n",(0,r.jsx)(o.Z,{href:"https://github.com/HumanSignal/label-studio/",children:"https://github.com/HumanSignal/label-studio/"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"依赖：requirements.txt"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"label-studio==1.15.0\npsycopg2==2.9.10\npsycopg[binary]==2.9.10\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"安装后启动："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:".venv/Scripts/label-studio.exe start my_project --init -db postgresql --username postgres --password postgres\n"})}),"\n",(0,r.jsx)(e.h2,{children:"安装YOLO"}),"\n",(0,r.jsx)(e.p,{children:"YOLO安装时要注意Python的版本，超过要求的版本是无法安装的。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Github地址：\n",(0,r.jsx)(o.Z,{href:"https://github.com/ultralytics/ultralytics",children:"https://github.com/ultralytics/ultralytics"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"依赖：requirements.txt"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"ultralytics==8.3.51\npillow==11.0.0\n"})}),"\n",(0,r.jsx)(e.h2,{children:"编写label interface："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:'<View>\n  <Image name="image_object" value="$image_url" />\n    <RectangleLabels name="rectangles" toName="image_object" showInline="true">\n      <Label value="top" background="red" />\n      <Label value="right" background="yellow" />\n      <Label value="bottom" background="blue"/>\n      <Label value="left" background="green"/>\n      <Label value="top-right" background="magenta" />\n      <Label value="top-left" background="cyan" />\n      <Label value="bottom-right" background="purple" />\n      <Label value="bottom-left" background="orange" />\n    </RectangleLabels>\n</View>\n'})}),"\n",(0,r.jsx)(e.h2,{children:"转换"}),"\n",(0,r.jsx)(e.h3,{children:"准备导出的文件"}),"\n",(0,r.jsx)(e.p,{children:"目录结构如下："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"classes.txt"}),"\n",(0,r.jsx)(e.li,{children:"notes.json"}),"\n",(0,r.jsxs)(e.li,{children:["images","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"test"}),"\n",(0,r.jsx)(e.li,{children:"train"}),"\n",(0,r.jsx)(e.li,{children:"val"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["labels","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"test"}),"\n",(0,r.jsx)(e.li,{children:"train"}),"\n",(0,r.jsx)(e.li,{children:"val"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"data.yaml"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"其中data.yaml如下配置："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"# dataset path\ntrain: D:/repo/project/datasets/yolo/v8-1/images/train\nval: D:/repo/project/datasets/yolo/v8-1/images/val\ntest: D:/repo/project/datasets/yolo/v8-1/images/test\n\n# number of classes\nnc: 8\n\n# class names\nnames: [\n  'name1' # 对应notes.json中的id和name\n]\n"})}),"\n",(0,r.jsx)(e.h3,{children:"准备验证码图片"}),"\n",(0,r.jsx)(e.p,{children:"使用playwright拦截和下载验证码图片。"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import time\nfrom playwright._impl._errors import Error as PlaywrightError\nfrom playwright.sync_api import sync_playwright, Playwright, Response\n\ndef handle_route(response: Response):\n    \"\"\"\n    监听响应，并下载图片\n    \"\"\"\n    if 'static.geetest.com/captcha_v4/policy/' in response.request.url:\n        name = response.request.url.split('/')[-1]\n        with open(f'resources/original-yanzhengma-images/{name}', 'wb') as f:\n            f.write(response.body())\n    response.finished()\n\ndef run(playwright: Playwright):\n    \"\"\"\n    使用无头浏览器下载图片\n    \"\"\"\n    urllib = 'https://demo'\n    chromium = playwright.chromium\n    browser = chromium.launch(executable_path='C:/Program Files/Google/Chrome/Application/chrome.exe', headless=False, timeout=0)\n    page = browser.new_page()\n    page.on('response', handle_route)\n    page.goto(urllib)\n    # 输入并触发验证码\n    page.wait_for_selector('#orgName').type('科技公司')\n    page.wait_for_selector('.conditionLine .btn-primary').click()\n    # 拦截并下载验证码\n    index = 0\n    while index < 100:\n        print(f'下载第{index}张图片。')\n        page.wait_for_selector('.geetest_bg')\n        time.sleep(5)\n        page.wait_for_selector('.geetest_refresh').click()\n        index += 1\n    browser.close()\n\ntry:\n    with sync_playwright() as playwright:\n        run(playwright)\nexcept PlaywrightError as err:\n    pass\n\n"})}),"\n",(0,r.jsx)(e.h3,{children:"转换的代码"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from ultralytics import YOLO\n\nmodel = YOLO()\n# https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml\nmodel.train(cfg='train.yaml', data='datasets/yolo/v8-1/data.yaml')\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["配置文件：\n",(0,r.jsx)(o.Z,{href:"https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml",children:"https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{children:"验证"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from ultralytics import YOLO\nfrom PIL import Image\n\nmodel = YOLO('runs/detect/train/weights/best.pt')\nresults = model([\n    'resources/images/2149ca73-3f174c60951d4ca1a6191cacd66b2154.jpg',\n    'resources/images/cf311413-ef0bac7490474f09820a7aaf53741abf.jpg',\n])\n\nfor i, r in enumerate(results):\n    im_bgr = r.plot()\n    im_rgb = Image.fromarray(im_bgr[..., ::-1])\n    r.show()\n    # r.save(filename=f'resources/result-images/results{i}.jpg')\n    print(r.to_json())\n"})})]})}function d(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}var u=function(n){return(0,r.jsx)(i.Z,{children:(0,r.jsx)(d,{})})};function p(n){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"使用label-studio和YOLO识别验证码"}),(0,r.jsx)("meta",{name:"keywords",content:"label-studio, YOLO"}),(0,r.jsx)("meta",{name:"description",content:"使用label-studio和YOLO识别验证码"})]}),(0,r.jsx)(u,{})]})}},94914:function(n,e,l){"use strict";var r=l(85893),s=l(73935),t=l(39332),a=l(29155),i=l(73991),c=l(70612),o=l(30448),h=l(76467),d=l(1294),u=l.n(d);let{BackTop:p}=a.default;e.Z=function(n){let e=(0,t.useRouter)();return[(0,r.jsxs)("div",{className:u().main,children:[n.goBack?(0,r.jsx)("div",{className:"mb-[16px] text-right",children:(0,r.jsxs)(i.ZP,{onClick:function(n){e.push("/")},children:[(0,r.jsx)(o.Z,{className:"mr-[6px]"}),"返回"]})}):null,n?.children]},"main"),n?.goToTop?(0,r.jsx)(h.default,{children:"object"==typeof document?(0,s.createPortal)((0,r.jsx)(p,{type:"primary",icon:(0,r.jsx)(c.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(n,e,l){"use strict";var r=l(85893),s=l(66252),t=l(94914);e.Z=function(n){return(0,r.jsx)(t.Z,{goToTop:!0,goBack:!0,children:(0,r.jsx)(s.default,{children:n.children})})}},1294:function(n){n.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(n){n.O(0,[3991,5361,2888,9774,179],function(){return n(n.s=19360)}),_N_E=n.O()}]);