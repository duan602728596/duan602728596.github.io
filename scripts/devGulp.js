const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const named = require('vinyl-named');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');
const GulpMemoryFs = require('gulp-memory-fs');
const rename = require('gulp-rename');
const options = require('./options');
const webpackConfig = require('./webpack.config');
const utils = require('./utils');

const { files, postcssConfig, webpackEntry } = options;
const { html, css, javascript, image } = files;

const mfs = new GulpMemoryFs({
  dir: 'dist',
  reload: true,
  fsType: 'memfs'
});

/* pug */
function pugProject() {
  return gulp.src(html[0])
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
      locals: { css: utils.css }
    }))
    .pipe(mfs.dest(html[1]));
}

/* sass */
function sassProject() {
  return gulp.src(css[0])
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcssConfig))
    .pipe(mfs.dest(css[1]));
}

/* webpack */
function webpackProject() {
  return gulp.src(webpackEntry)
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream({ config: webpackConfig() }, webpack))
    .pipe(mfs.dest(javascript[1]));
}

/* webpack */
function webpackModernProject() {
  return gulp.src(webpackEntry)
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream({ config: webpackConfig(true) }, webpack))
    .pipe(rename(utils.modernNameChange))
    .pipe(mfs.dest(javascript[1]));
}


/* image */
function imageProject() {
  return gulp.src(image[0])
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(mfs.dest(image[1]));
}

/* 监听文件 */
function watch() {
  gulp.watch([html[0], 'components/**/*.pug'], pugProject);
  gulp.watch([css[0], 'components/**/*.sass'], gulp.series(sassProject, pugProject));
  gulp.watch(javascript[0], gulp.series(webpackProject, webpackModernProject));
  gulp.watch(image[0], imageProject);
}

/* 启动服务 */
async function runServer() {
  await mfs.createServer();
}

module.exports = gulp.series(
  gulp.parallel(
    gulp.series(sassProject, pugProject),
    gulp.series(webpackProject, webpackModernProject),
    imageProject,
    ...utils.copyStaticFiles(mfs)
  ),
  gulp.parallel(watch, runServer)
);