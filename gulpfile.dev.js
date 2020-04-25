const gulp = require('gulp');
const webpack = require('webpack');
const GulpMemoryFs = require('gulp-memory-fs');
const webpackConfig = require('./config/webpack.config');
const { entry, modernEntry, template, output, callbackOnlyError, copyStaticFiles } = require('./config/utils');

const mfs = new GulpMemoryFs({ dir: 'build', reload: true });

/* webpack */
const compiler = webpack(webpackConfig({
  entry: modernEntry,
  output,
  template,
  esModule: true
}));

const oldCompiler = webpack(webpackConfig({
  entry,
  output,
  esModule: false
}));

/* dist */
function distProject() {
  return gulp.src('dist/**/*.*')
    .pipe(mfs.changed('build'))
    .pipe(mfs.dest('build'));
}

/* webpack */
function watch() {
  compiler.watch({
    aggregateTimeout: 500
  }, callbackOnlyError);

  oldCompiler.watch({
    aggregateTimeout: 500
  }, callbackOnlyError);

  gulp.watch('dist', distProject);
}

/* gulp-memory-fs init */
async function serverInit() {
  await mfs.createServer();
}

exports.default = gulp.series(
  gulp.parallel(...copyStaticFiles()),
  distProject,
  gulp.parallel(watch, serverInit)
);