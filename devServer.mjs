import https from 'node:https';
import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import next from 'next';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname } = metaHelper(import.meta.url);
const app = next({ dev: true, port: 5057 });
const handle = app.getRequestHandler();

const httpsConfig = {
  key: await fs.readFile(path.join(__dirname, 'dev.key')),
  cert: await fs.readFile(path.join(__dirname, 'dev.crt'))
};

await app.prepare();
https.createServer(httpsConfig, async function(req, res) {
  try {
    const parsedUrl = url.parse(req.url, true);

    await handle(req, res, parsedUrl);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end(err);
  }
}).listen(5057, (err) => {
  if (err) throw err;
});