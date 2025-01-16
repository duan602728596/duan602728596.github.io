(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3698],{19360:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/python/use-label-studio-and-YOLO-to-identify-verification-codes",function(){return t(84227)}])},84227:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var s=t(85893),i=t(67294),l=t(9008),a=t.n(l),r=t(26219),o=t(11151),c=t(57307),d=t(41577);function h(e){let n={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"使用label-studio和YOLO识别验证码"}),"\n",(0,s.jsx)(n.h2,{children:"安装label-studio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Github地址：\n",(0,s.jsx)(d.Z,{href:"https://github.com/HumanSignal/label-studio/",children:"https://github.com/HumanSignal/label-studio/"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"依赖：pyproject.toml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"# python -m pip install -e . -i https://pypi.tuna.tsinghua.edu.cn/simple\n[project]\nname = 'yolo-verification-code-training'\nversion = '0.0.0'\nrequires-python = '<3.13'\ndependencies = [\n  # label-studio\n  'label-studio==1.15.0',\n  'psycopg[binary]==3.2.3',\n  # yolo\n  'ultralytics==8.3.51; python_version<\"3.13\"',\n  'pillow==11.0.0',\n  'playwright==1.49.1'\n]\n\n[tool.distutils.egg_info]\negg_base = \"target\"\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"安装后启动：\n安装时的环境变量，可以参考目录："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".venv/Lib/site-packages/label_studio/core/settings/label_studio.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"启动时的命令："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".venv\\Scripts\\label-studio.exe start --init -db postgresql --username postgres --password postgres -p 13500 --data-dir .label-studio-data\n"})}),"\n",(0,s.jsx)(n.p,{children:"启动时不创建新的project，可以使用命令"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".venv\\Scripts\\label-studio.exe -db postgresql --username postgres --password postgres -p 13500 --data-dir .label-studio-data\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"安装YOLO"}),"\n",(0,s.jsx)(n.p,{children:"YOLO安装时要注意Python的版本，超过要求的版本是无法安装的。"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Github地址：\n",(0,s.jsx)(d.Z,{href:"https://github.com/ultralytics/ultralytics",children:"https://github.com/ultralytics/ultralytics"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"依赖：requirements.txt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"ultralytics==8.3.51\npillow==11.0.0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"编写label interface："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<View>\n  <Image name="image_object" value="$image_url" />\n    <RectangleLabels name="rectangles" toName="image_object" showInline="true">\n      <Label value="top" background="red" />\n      <Label value="right" background="yellow" />\n      <Label value="bottom" background="blue"/>\n      <Label value="left" background="green"/>\n      <Label value="top-right" background="magenta" />\n      <Label value="top-left" background="cyan" />\n      <Label value="bottom-right" background="purple" />\n      <Label value="bottom-left" background="orange" />\n    </RectangleLabels>\n</View>\n'})}),"\n",(0,s.jsx)(n.h2,{children:"转换"}),"\n",(0,s.jsx)(n.h3,{children:"准备导出的文件"}),"\n",(0,s.jsx)(n.p,{children:"目录结构如下："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"classes.txt"}),"\n",(0,s.jsx)(n.li,{children:"notes.json"}),"\n",(0,s.jsxs)(n.li,{children:["images","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"test"}),"\n",(0,s.jsx)(n.li,{children:"train"}),"\n",(0,s.jsx)(n.li,{children:"val"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["labels","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"test"}),"\n",(0,s.jsx)(n.li,{children:"train"}),"\n",(0,s.jsx)(n.li,{children:"val"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"data.yaml"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"其中data.yaml如下配置："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# dataset path\ntrain: D:/repo/project/datasets/yolo/v8-1/images/train\nval: D:/repo/project/datasets/yolo/v8-1/images/val\ntest: D:/repo/project/datasets/yolo/v8-1/images/test\n\n# number of classes\nnc: 1\n\n# class names\nnames: [\n  'name1' # 对应notes.json中的id和name\n]\n"})}),"\n",(0,s.jsx)(n.h3,{children:"准备验证码图片"}),"\n",(0,s.jsx)(n.p,{children:"使用playwright拦截和下载验证码图片。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import time\nfrom playwright._impl._errors import Error as PlaywrightError\nfrom playwright.sync_api import sync_playwright, Playwright, Response\n\ndef handle_route(response: Response):\n    \"\"\"\n    监听响应，并下载图片\n    \"\"\"\n    if 'static.geetest.com/captcha_v4/policy/' in response.request.url:\n        name = response.request.url.split('/')[-1]\n        with open(f'resources/original-yanzhengma-images/{name}', 'wb') as f:\n            f.write(response.body())\n    response.finished()\n\ndef run(playwright: Playwright):\n    \"\"\"\n    使用无头浏览器下载图片\n    \"\"\"\n    urllib = 'https://demo'\n    chromium = playwright.chromium\n    browser = chromium.launch(executable_path='C:/Program Files/Google/Chrome/Application/chrome.exe', headless=False, timeout=0)\n    page = browser.new_page()\n    page.on('response', handle_route)\n    page.goto(urllib)\n    # 输入并触发验证码\n    page.wait_for_selector('#orgName').type('科技公司')\n    page.wait_for_selector('.conditionLine .btn-primary').click()\n    # 拦截并下载验证码\n    index = 0\n    while index < 100:\n        print(f'下载第{index}张图片。')\n        page.wait_for_selector('.geetest_bg')\n        time.sleep(5)\n        page.wait_for_selector('.geetest_refresh').click()\n        index += 1\n    browser.close()\n\ntry:\n    with sync_playwright() as playwright:\n        run(playwright)\nexcept PlaywrightError as err:\n    pass\n"})}),"\n",(0,s.jsx)(n.h3,{children:"将文件分组"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"python\nfrom typing import TypedDict\nimport os\nimport json\nfrom shutil import move\nfrom settings import TrainSetting\n\nclass NoteJsonInfo(TypedDict):\n    \"\"\" NoteJson['info'] \"\"\"\n    year: int\n    version: str\n    contributor: str\n\n\nclass NoteJsonCategoriesItem(TypedDict):\n    \"\"\" NoteJson['categories'] \"\"\"\n    id: int\n    name: str\n\n\nclass NoteJson(TypedDict):\n    \"\"\" 定义notes.json的类型 \"\"\"\n    categories: list[NoteJsonCategoriesItem]\n    info: NoteJsonInfo\n\n\ntrain_datasets_yolo = '/train_datasets_yolo/file'\nnotes_json = '/train_datasets_yolo/file/notes.json'\ntrain_yolo_yaml_path = '/train_datasets_yolo/file/data.yaml'\n\n\ndef delete_space(dir_name: str) -> None:\n    \"\"\" 去掉文件中的尾空格 \"\"\"\n    dir1: str = train_datasets_yolo + '/' + dir_name\n    file_list: list[str] = os.listdir(dir1)\n    for file in file_list:\n        with open(dir1 + '/' + file, encoding='utf-8') as f:\n            text: str = f.read()\n            new_text: list[str] = text.split('\\n')\n            new_text.remove('')\n            with open(dir1 + '/' + file, mode='w+', encoding='utf-8') as f2:\n                f2.write('\\n'.join(new_text))\n\n\ndef copy_files_group() -> None:\n    \"\"\"\n    对图片分组\n    train 80%\n    val   15%\n    test  5%\n    \"\"\"\n    images_dir: str = train_datasets_yolo + '/images/'\n    labels_dir: str = train_datasets_yolo + '/labels/'\n    file_list: list[str] = os.listdir(images_dir)\n    # 文件分组\n    for x in ['train', 'val', 'test']:\n        os.mkdir(images_dir + x)\n        os.mkdir(labels_dir + x)\n    train_images_len: int = int(len(file_list) * 0.8)\n    val_images_len: int = int(len(file_list) * 0.15) + train_images_len\n    images_train_dir: str = images_dir + 'train/'\n    images_val_dir: str = images_dir + 'val/'\n    images_test_dir: str = images_dir + 'test/'\n    labels_train_dir: str = labels_dir + 'train/'\n    labels_val_dir: str = labels_dir + 'val/'\n    labels_test_dir: str = labels_dir + 'test/'\n    for index, file in enumerate(file_list):\n        file_name: str = os.path.basename(file).split('.')[0]\n        if index < train_images_len:\n            move(images_dir + file , images_train_dir + file)\n            move(labels_dir + file_name + '.txt' , labels_train_dir + file_name + '.txt')\n        elif train_images_len <= index < val_images_len:\n            move(images_dir + file , images_val_dir + file)\n            move(labels_dir + file_name + '.txt' , labels_val_dir + file_name + '.txt')\n        else:\n            move(images_dir + file , images_test_dir + file)\n            move(labels_dir + file_name + '.txt' , labels_test_dir + file_name + '.txt')\n\n\ndef write_yaml() -> None:\n    \"\"\" 写入yaml文件 \"\"\"\n    notes_json: NoteJson = json.load(open(notes_json, encoding='utf-8'))\n    textwrap: list[str] = []\n    for category in notes_json['categories']:\n        textwrap.append(f\"'{category['name']}'\")\n    with open(train_yolo_yaml_path, mode='w+', encoding='utf-8') as f:\n        f.write(f'train: {train_datasets_yolo}/images/train\\n')\n        f.write(f'val: {train_datasets_yolo}/images/val\\n')\n        f.write(f'test: {train_datasets_yolo}/images/test\\n')\n        f.write(f\"nc: {len(notes_json['categories'])}\\n\")\n        f.write(f\"names: [{', '.join(textwrap)}]\\n\")\n\n\ndelete_space('labels')\ncopy_files_group()\nwrite_yaml()\n\n"})}),"\n",(0,s.jsx)(n.h3,{children:"转换的代码"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from ultralytics import YOLO\n\nmodel = YOLO()\n# https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml\nmodel.train(cfg='train.yaml', data='datasets/yolo/v8-1/data.yaml')\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["配置文件：\n",(0,s.jsx)(d.Z,{href:"https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml",children:"https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"验证"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from ultralytics import YOLO\nfrom PIL import Image\n\nmodel = YOLO('runs/detect/train/weights/best.pt')\nresults = model([\n    'resources/images/2149ca73-3f174c60951d4ca1a6191cacd66b2154.jpg',\n    'resources/images/cf311413-ef0bac7490474f09820a7aaf53741abf.jpg',\n])\n\nfor i, r in enumerate(results):\n    im_bgr = r.plot()\n    im_rgb = Image.fromarray(im_bgr[..., ::-1])\n    r.show()\n    # r.save(filename=f'resources/result-images/results{i}.jpg')\n    print(r.to_json())\n"})}),"\n",(0,s.jsx)(c.Z,{type:"info",message:[(0,s.jsx)(n.h2,{className:"mb-0 py-[8px] text-[16px]",children:"参考地址："},"cankaodizhi"),(0,s.jsxs)(n.div,{className:"py-[8px]",children:["使用Label Studio标注YOLOv8数据集：",(0,s.jsx)(d.Z,{href:"https://richelf.tech/posts/2023-09/0f87cd80-8c23-c2dd-40f3-e1d2df83c2f7.html",children:"https://richelf.tech/posts/2023-09/0f87cd80-8c23-c2dd-40f3-e1d2df83c2f7.html"})]},"0f87cd80"),(0,s.jsxs)(n.div,{className:"py-[8px]",children:["使用YOLOv8在Label Studio的自定义数据集上进行训练/推理：",(0,s.jsx)(d.Z,{href:"https://richelf.tech/posts/2024-09/2a7262df-2893-42af-8e66-0fb59d807aef.html",children:"https://richelf.tech/posts/2024-09/2a7262df-2893-42af-8e66-0fb59d807aef.html"})]},"2a7262df")]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}var p=function(e){return(0,s.jsx)(r.Z,{children:(0,s.jsx)(m,{})})};function u(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"使用label-studio和YOLO识别验证码"}),(0,s.jsx)("meta",{name:"keywords",content:"label-studio, YOLO"}),(0,s.jsx)("meta",{name:"description",content:"使用label-studio和YOLO识别验证码"})]}),(0,s.jsx)(p,{})]})}},94914:function(e,n,t){"use strict";var s=t(85893),i=t(73935),l=t(39332),a=t(29155),r=t(86338),o=t(70612),c=t(30448),d=t(76467),h=t(1294),m=t.n(h);let{BackTop:p}=a.default;n.Z=function(e){let n=(0,l.useRouter)();return[(0,s.jsxs)("div",{className:m().main,children:[e.goBack?(0,s.jsx)("div",{className:"mb-[16px] text-right",children:(0,s.jsxs)(r.ZP,{onClick:function(e){n.push("/")},children:[(0,s.jsx)(c.Z,{className:"mr-[6px]"}),"返回"]})}):null,e?.children]},"main"),e?.goToTop?(0,s.jsx)(d.default,{children:"object"==typeof document?(0,i.createPortal)((0,s.jsx)(p,{type:"primary",icon:(0,s.jsx)(o.Z,{}),title:"返回顶部",tabIndex:0,role:"button","aria-label":"返回顶部"}),document.body):null},"backTop"):null]}},26219:function(e,n,t){"use strict";var s=t(85893),i=t(66252),l=t(94914);n.Z=function(e){return(0,s.jsx)(l.Z,{goToTop:!0,goBack:!0,children:(0,s.jsx)(i.default,{children:e.children})})}},1294:function(e){e.exports={main:"main_main__IZXSv",goToTop:"main_goToTop__Py8c8"}}},function(e){e.O(0,[6338,5361,7307,2888,9774,179],function(){return e(e.s=19360)}),_N_E=e.O()}]);