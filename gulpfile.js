const childProcess = require('child_process');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const GulpMemoryFs = require('gulp-memory-fs');
const chalk = require('chalk');

const mfs = new GulpMemoryFs({
  dir: 'dist',
  reload: true,
  fsType: 'memfs'
});

function copyProject() {
  return gulp.src('example/**/*.*')
    .pipe(mfs.changed('dist'))
    .pipe(plumber())
    .pipe(mfs.dest('dist'));
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

function watch() {
  gulp.watch('example/**/*.*', copyProject);
  gulp.watch('**/*.go', buildWasmProject);
}

async function runServer() {
  await mfs.createServer();
}

exports.default = gulp.series(gulp.parallel(copyProject, buildWasmProject), gulp.parallel(watch, runServer));