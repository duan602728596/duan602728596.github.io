import fs, { promises as fsP } from 'node:fs';
import path from 'node:path';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import { metaHelper } from '@sweet-milktea/utils';
import articlesJson from '../src/pages/Index/link/articles.json' assert { type: 'json' };

const { __dirname } = metaHelper(import.meta.url);

/* 获取结果 */
async function launchChromeAndRunLighthouse(url, fileName) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless']
  });
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['accessibility', 'seo'],
    port: chrome.port
  };
  const runnerResult = await lighthouse(url, options);

  // 将报告写入文件
  const reportDir = path.join(__dirname, '../.analyzes-report');

  if (!fs.existsSync(reportDir)) {
    await fsP.mkdir(reportDir);
  }

  await fsP.writeFile(path.join(reportDir, fileName), runnerResult.report, 'utf8');
  await chrome.kill();
}

/* 查询 */
const hostname = 'https://duan602728596.github.io'; // or http://localhost:5057

await launchChromeAndRunLighthouse(`${ hostname }/`, 'index.html');
await launchChromeAndRunLighthouse(`${ hostname }/favorites`, 'favorites.html');
await launchChromeAndRunLighthouse(`${ hostname }/project`, 'project.html');

const articles = articlesJson.data.map((group) => (group.children.map((item) => item.href))).flat();

for (const item of articles) {
  const name = item.replace(/^\//, '').replace(/\//g, '_');

  await launchChromeAndRunLighthouse(`${ hostname }${ item }`, `${ name }.html`);
}