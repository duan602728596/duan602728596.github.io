const process = require('process');
const Config = require('webpack-chain');
const options = require('./options');

const isDev = process.env.NODE_ENV === 'development';

function webpackConfig(esmodules) {
  const config = new Config();

  config
    .mode(process.env.NODE_ENV)
    .devtool(isDev ? 'module-source-map' : 'none')
    .output
    .globalObject('this');

  /* externals */
  config.externals({
    jquery: 'jQuery'
  });

  /* loader */
  config
    .module
    .rule('js')
    .test(/^.*\.jsx?$/)
    .use('babel-loader')
    .loader('babel-loader')
    .options(options.babelConfig(esmodules))
    .end()
    .exclude
    .add(/node_modules/);

  return config.toConfig();
}

module.exports = webpackConfig;