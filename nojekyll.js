const fs = require('fs');
const path = require('path');

async function main() {
  const nojekyllFile = path.join(__dirname, 'out/.nojekyll');

  await fs.promises.writeFile(nojekyllFile, '', {
    encoding: 'utf8'
  });
}

main();