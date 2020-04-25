const { babelPlugins } = require('./config/babel.config');

module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['@vue/babel-preset-jsx'],
    plugins: babelPlugins
  };
};