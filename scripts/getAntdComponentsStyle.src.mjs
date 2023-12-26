import { join } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { glob } from 'glob';
import { renderToString } from 'react-dom/server';
import postcss from 'postcss';
import cssnano from 'cssnano';
import * as antd from 'antd';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN.js';
import { geekblue } from '@ant-design/colors';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname } = metaHelper(import.meta.url);

const blackList = ['ConfigProvider', 'Drawer', 'Grid', 'Modal', 'Popconfirm', 'Popover', 'Tooltip', 'Tour', 'message'];

/* 获取组件 */
async function getComponents(file) {
  const codes = (await readFile(file, 'utf-8')).split('\n');
  const allComponents = [];

  for (const code of codes) {
    if (/} from ["']antd["']/.test(code) && /^import/.test(code)) {
      const components = code.match(/{[^\{\}]+}/g);

      if (components) {
        const componentsArray = components[0].replace(/[\{\}]/g, '').split(/\s*,\s*/);

        allComponents.push(...componentsArray);
      }
    }
  }

  return allComponents.map((o) => o.trim());
}

/* 创建Node */
function createNode(component) {
  const Component = antd[component];

  if (component === 'Dropdown') {
    return (
      <Component key={ component } menu={{ items: [] }}>
        <div />
      </Component>
    );
  }

  return <Component key={ component } />;
}

/* css压缩 */
async function cssMinify(css) {
  const result = await postcss([cssnano({ preset: 'default' })]).process(css);

  return result.css;
}

async function getAntdComponentsStyleSrc() {
  // 获取next的所有js文件
  const pagesDir = join(__dirname, '../pages');
  const srcDir = join(__dirname, '../src');
  const nextFiles = (await Promise.all([
    glob(`${ pagesDir }/**/*.{js,jsx,cjs,mjs}`.replace(/\\/g, '/')),
    glob(`${ srcDir }/**/*.{js,jsx,cjs,mjs}`.replace(/\\/g, '/'))
  ])).flat();

  // 获取使用的antd组件
  let antdComponents = [];

  for (const file of nextFiles) {
    const components = await getComponents(file);

    antdComponents.push(...components);
  }

  antdComponents = Array.from(new Set(antdComponents)).filter((o) => !blackList.includes(o));

  // 创建style
  const cache = createCache();

  renderToString(
    <StyleProvider cache={ cache }>
      <ConfigProvider locale={ zhCN } theme={{ token: { colorPrimary: geekblue.primary } }}>
        { antdComponents.map((o) => createNode(o)) }
      </ConfigProvider>
    </StyleProvider>
  );

  const styleText = await cssMinify(extractStyle(cache, true));
  const styleTextHash = createHash('md5').update(styleText).digest('hex');
  const antdSSRCssFileName = `antd.ssr.${ styleTextHash.substring(0, 8) }.css`;
  const antdSSRCssFile = join(__dirname, `../public/styles/${ antdSSRCssFileName }`);

  await Promise.all([
    writeFile(antdSSRCssFile, styleText),
    writeFile(join(__dirname, '../src/antd.ssr.json'), JSON.stringify({
      css: antdSSRCssFileName
    }))
  ]);
}

getAntdComponentsStyleSrc();