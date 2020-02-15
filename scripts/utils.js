const path = require('path');
const gulp = require('gulp');
const options = require('./options');

const styleDir = path.join(__dirname, '../src/style');

exports.css = function(id) {
  const file = path.join(styleDir, `${ id }.css.json`);
  const modulePath = require.resolve(file);

  if (module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(file), 1);
  }

  delete require.cache[modulePath];

  return require(file);
};

exports.copyStaticFiles = function(g) {
  const func = [];

  for (const staticFile of options.staticFiles) {
    func.push(function() {
      return gulp.src(staticFile[0])
        .pipe(g.dest(staticFile[1]));
    });
  }

  return func;
};