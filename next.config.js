const process = require('process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { lessLoader, sassLoader } = require('./utils/css');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = function() {
  return {
    future: {
      webpack5: true
    },
    webpack(config, options) {
      // 文本文件处理
      config.module.rules.push({
        test: /.*\.md/,
        use: ['raw-loader']
      });

      // antd
      if (options.isServer) {
        const externalsFunc = config.externals[config.externals.length - 1];

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
          chunkFilename: 'static/css/[name]_[chunkhash:15].css',
          ignoreOrder: true
        })
      );

      if (!isDevelopment) {
        config.optimization.minimizer[1] = new CssMinimizerPlugin();
      }

      lessLoader(config, options);
      sassLoader(config, options);

      return config;
    }
  };
};