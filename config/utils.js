const path = require('path');
const gulp = require('gulp');
const glob = require('glob');

/* 解析入口文件 */
const formatFiles = exports.formatFiles = function(files) {
  const result = {};

  for (const file of files) {
    const pathResult = path.parse(file);
    const key = pathResult.dir.replace(/^src\//g, '');

    result[key] = path.join(__dirname, '..', file);
  }

  return result;
};

/* 剔除指定的chunks */
exports.excludeChunks = function(chunks, key) {
  const result = [...chunks];
  const index = result.indexOf(key);

  result.splice(index, 1);

  return result;
};

/* webpack回调函数 */
exports.callbackOnlyError = function(err, stats) {
  if (err) {
    console.error(err);
  } else {
    console.log(stats.toString({
      colors: true,
      assets: false,
      entrypoints: false,
      builtAt: false,
      hash: false,
      modules: false,
      version: false,
      timings: false
    }));
  }
};

/* 入口文件 */
const globOptions = { root: path.join(__dirname, '../src') };
const entry = formatFiles(glob.sync('src/**/entry.js'), globOptions);
const modernEntry = {};

for (const key in entry) {
  modernEntry[`${ key }_modern`] = entry[key];
}

exports.entry = entry;
exports.modernEntry = modernEntry;
exports.serverEntry = formatFiles(glob.sync('src/**/server.js'), globOptions);
exports.template = formatFiles(glob.sync('src/**/template.js'), globOptions);
const output = exports.output = path.join(__dirname, '../dist');

// 静态文件
const staticFiles = [
  ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'static/styles'],
  ['node_modules/highlight.js/styles/github.css', 'static/styles'],
  ['node_modules/three/build/three.min.js', 'static/scripts']
];

exports.copyStaticFiles = function() {
  const func = [];

  for (const staticFile of staticFiles) {
    func.push(function() {
      return gulp.src(path.join(__dirname, '..', staticFile[0]))
        .pipe(gulp.dest(path.join(output, staticFile[1])));
    });
  }

  return func;
};