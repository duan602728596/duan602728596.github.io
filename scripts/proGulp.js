const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const named = require('vinyl-named');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const rename = require('gulp-rename');
const options = require('./options');
const webpackConfig = require('./webpack.config');
const utils = require('./utils');

const { files, postcssConfig, webpackEntry } = options;
const { html, css, javascript, image } = files;

/* pug */
function pugProject() {
  return gulp.src(html[0])
    .pipe(pug({
      locals: { css: utils.css }
    }))
    .pipe(gulp.dest(html[1]));
}

/* sass */
function sassProject() {
  return gulp.src(css[0])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss(postcssConfig))
    .pipe(gulp.dest(css[1]));
}

/* webpack */
function webpackProject() {
  return gulp.src(webpackEntry)
    .pipe(named())
    .pipe(webpackStream(webpackConfig(), webpack))
    .pipe(gulp.dest(javascript[1]));
}

/* webpack modern */
function webpackModernProject() {
  return gulp.src(webpackEntry)
    .pipe(named())
    .pipe(webpackStream(webpackConfig(true), webpack))
    .pipe(rename(utils.modernNameChange))
    .pipe(gulp.dest(javascript[1]));
}

/* image */
function imageProject() {
  return gulp.src(image[0])
    .pipe(gulp.dest(image[1]));
}

module.exports = gulp.parallel(
  gulp.series(sassProject, pugProject),
  gulp.series(webpackProject, webpackModernProject),
  imageProject,
  ...utils.copyStaticFiles(gulp)
);