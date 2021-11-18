const process = require('process');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('next/dist/compiled/mini-css-extract-plugin');
const { lessLoader } = require('./scripts/css.js');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = function() {
  return {
    webpack(config, options) {
      // 文本文件处理
      config.module.rules.push({
        test: /.*\.md/,
        type: 'asset/source'
      });

      // antd
      if (options.isServer) {
        const externalsFunc = config.externals.at(-1);

        config.externals[config.externals.length - 1] = function(ctx, callback) {
          if (/(antd|rc-|css-animation|@ant-design|highlight)/i.test(ctx.request)) {
            return callback();
          }

          return externalsFunc(ctx, callback);
        };
      }

      // css
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name]_[chunkhash:15].css',
          chunkFilename: 'static/css/[name]_[chunkhash:15].css'
        })
      );

      if (!isDevelopment) {
        config.optimization.minimizer[1] = new CssMinimizerPlugin();
      }

      lessLoader(config, options);

      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src')]
    }
  };
};