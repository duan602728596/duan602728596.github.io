const fs = require('fs');
const path = require('path');

async function nojekyll() {
  const nojekyllFile = path.join(__dirname, '../out/.nojekyll');

  await fs.promises.writeFile(nojekyllFile, '', {
    encoding: 'utf8'
  });
}

nojekyll();