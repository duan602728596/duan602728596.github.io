const process = require('process');
const Config = require('webpack-chain');
const options = require('./options');

const isDev = process.env.NODE_ENV === 'development';
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
  .options(options.babelConfig)
  .end()
  .exclude
  .add(/node_modules/);

module.exports = config.toConfig();