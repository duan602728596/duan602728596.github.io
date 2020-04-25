const process = require('process');
const path = require('path');
const Config = require('webpack-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const { babelPluginsForWebpack, presetEnv } = require('./babel.config');
const { excludeChunks } = require('./utils');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

/* webpack配置 */
module.exports = function({ entry, output, template, esModule }) {
  const config = new Config();

  // merge
  config.merge({
    entry,
    output: {
      ecmaVersion: esModule ? 2015 : 5
    },
    resolve: { extensions: ['.js', '.jsx', '.mjs', '.json', '.wasm', '.ts', '.tsx', '.vue'] },
    infrastructureLogging: { level: 'warn' }
  });

  config
    .mode(mode)
    .devtool(isDev ? 'eval-source-map' : false);

  // output
  config
    .output
    .path(output)
    .filename('static/scripts/[name].js')
    .globalObject('this');

  // babel-loader
  config
    .module
    .rule('js')
    .test(/^.*\.jsx?$/)
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      presets: [presetEnv(esModule), '@vue/babel-preset-jsx'],
      plugins: babelPluginsForWebpack
    })
    .end()
    .exclude
    .add(/node_modules/);

  // pug
  config
    .module
    .rule('html')
    .test(/^.*\.pug$/)
    .use('pug-loader')
    .loader('pug-loader')
    .options({
      pretty: isDev,
      name: '[name].html'
    });

  // vue-loader
  config
    .module
    .rule('vue')
    .test(/^.*\.vue$/)
    .use('vue-loader')
    .loader('vue-loader');

  // css-loader
  config
    .module
    .rule('sass')
    .test(/^.*\.s(a|c)ss$/)
    .oneOf('vue')
    .resourceQuery(/scoped/)
    .use('style-loader')
    .loader('style-loader')
    .options({ esModule: true })
    .end()
    // css
    .use('css-loader')
    .loader('css-loader')
    .options({
      onlyLocals: false,
      sourceMap: isDev
    })
    .end()
    // sass
    .use('sass-loader')
    .loader('sass-loader')
    .options({
      sassOptions: {
        outputStyle: isDev ? 'compact' : 'compressed'
      },
      sourceMap: isDev
    });

  // vue-plugin
  const { version } = require('vue-loader/package.json');
  const first = Number(version.split(/\./g)[0]);
  const VueLoaderPlugin = first < 16
    ? require('vue-loader/lib/plugin')
    : require('vue-loader/dist/plugin');

  // plugin
  config
    .plugin('vue')
    .use(VueLoaderPlugin)
    .end()
    .plugin('webpackbar')
    .use(WebpackBar)
    .end()
    .plugin()
    .use(CopyWebpackPlugin, [
      [{
        from: path.join(__dirname, '../src/static'),
        to: path.join(__dirname, '../dist/static')
      }]
    ]);

  if (template) {
    const pugTemplate = path.join(__dirname, '../src/template.pug');
    const chunks = Object.keys(template);
    let index = 0;

    for (const key in template) {
      const options = template[key];

      config
        .plugin(`html-webpack-plugin: ${ index }`)
        .use(HtmlWebpackPlugin, [{
          inject: false,
          template: pugTemplate,
          filename: `${ key }.html`,
          excludeChunks: excludeChunks(chunks, key),
          mode,
          key,
          ...require(options)
        }]);

      index++;
    }
  }

  return config.toConfig();
};