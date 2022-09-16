import fs from 'node:fs';
import path from 'node:path';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname } = metaHelper(import.meta.url);
const nojekyllFile = path.join(__dirname, '../out/.nojekyll');

await fs.promises.writeFile(nojekyllFile, '', {
  encoding: 'utf8'
});