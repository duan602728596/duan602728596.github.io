import fs from 'fs';
import path from 'path';

const nojekyllFile = path.join(__dirname, '../out/.nojekyll');

await fs.promises.writeFile(nojekyllFile, '', {
  encoding: 'utf8'
});