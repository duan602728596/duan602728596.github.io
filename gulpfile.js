const childProcess = require('child_process');
const path = require('path');
const gulp = require('gulp');
const gulpPug = require('gulp-pug');
const gulpSass = require('gulp-sass');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const rollup = require('gulp-better-rollup');
const plumber = require('gulp-plumber');
const GulpMemoryFs = require('gulp-memory-fs');
const changed = require('gulp-changed');
const pug = require('pug');
const sass = require('sass');
const Fiber = require('fibers');
const postcssModules = require('postcss-modules');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const alias = require('@rollup/plugin-alias');
const json = require('@rollup/plugin-json');
const chalk = require('chalk');

gulpSass.compiler = sass;

const isDevelopment = process.env.NODE_ENV === 'development';
const styleDir = path.join(__dirname, 'example');

/* 加载css-module文件 */
function css(id) {
  const file = path.join(styleDir, `${ id }.css.json`);
  const modulePath = require.resolve(file);
  const main = require.main ?? module.parent;

  if (main) {
    main.children.splice(main.children.indexOf(id), 1);
  }

  delete require.cache[modulePath];

  return require(file);
}

/* postcss */
const postcssConfig = [
  postcssModules({
    generateScopedName: isDevelopment ? '[path][name]__[local]___[hash:base64:6]' : '_[hash:base64:6]'
  })
];

/* 开发环境编译 */
function developmentProject() {
  const mfs = new GulpMemoryFs({
    dir: 'dist',
    reload: true
  });

  /* 拷贝静态文件 */
  function copyProject() {
    return gulp.src(['example/{image,statics}/**/*.*', 'example/solar-system.wasm'])
      .pipe(mfs.changed())
      .pipe(mfs.dest());
  }

  /* 编译go */
  function buildWasmProject() {
    return new Promise((resolve, reject) => {
      const child = childProcess.spawn('yarn', ['build:dev']);

      child.stdout.on('data', (data) => {
        console.log(data.toString());
      });

      child.stderr.on('data', (data) => {
        console.log(chalk.red(data.toString()));
      });

      child.on('close', () => {
        resolve();
      });

      child.on('error', (err) => {
        reject(err);
      });
    });
  }

  function pugProject() {
    return gulp.src('example/**/*.pug')
      .pipe(mfs.changed())
      .pipe(plumber())
      .pipe(gulpPug({
        pretty: true,
        pug,
        locals: { css }
      }))
      .pipe(mfs.dest());
  }

  function sassProject() {
    return gulp.src('example/**/*.{sass,scss}')
      .pipe(mfs.changed())
      .pipe(plumber())
      .pipe(gulpSass({
        fiber: Fiber
      }).on('error', gulpSass.logError))
      .pipe(postcss(postcssConfig))
      .pipe(mfs.dest());
  }

  function jsProject() {
    return gulp.src(['example/**/*.{js,jsx}', '!example/statics/*.{js,jsx}'])
      .pipe(changed('.babel-build-cache'))
      .pipe(plumber())
      .pipe(babel({
        presets: [['@sweet-milktea/babel-preset-sweet', {
          env: { ecmascript: true }
        }]]
      }))
      .pipe(gulp.dest('.babel-build-cache'));
  }

  function rollupProject() {
    return gulp.src('.babel-build-cache/**/*.{js,jsx}')
      .pipe(mfs.changed())
      .pipe(plumber())
      .pipe(rollup({
        plugins: [
          nodeResolve({
            browser: true
          }),
          commonjs(),
          alias({
            entries: [{ find: '@css', replacement: styleDir }]
          }),
          json()
        ]
      }, {
        format: 'iife'
      }))
      .pipe(mfs.dest());
  }

  async function createServer() {
    await mfs.createServer();
  }

  function watch() {
    gulp.watch(['example/**/*.pug'], pugProject);
    gulp.watch(['example/**/*.{sass,scss}'], gulp.series(
      sassProject,
      gulp.parallel(pugProject, gulp.series(jsProject, rollupProject))
    ));
    gulp.watch(['example/**/*.{js,jsx}'], gulp.series(jsProject, rollupProject));
    gulp.watch(['example/{image,statics}/**/*.*', 'example/solar-system.wasm'], copyProject);
    gulp.watch('**/*.go', buildWasmProject);
  }

  return gulp.series(
    gulp.parallel(sassProject, buildWasmProject),
    gulp.parallel(copyProject, pugProject, gulp.series(jsProject, rollupProject)),
    gulp.parallel(watch, createServer)
  );
}

exports.default = developmentProject();