const path = require('path');
const withMdx = require('@next/mdx');
const MiniCssExtractPlugin = require('next/dist/compiled/mini-css-extract-plugin');

module.exports = withMdx({ extension: /\.mdx?$/ })({
  webpack(config, options) {
    // 将antd打包到服务端生成的文件中
    if (options.isServer) {
      const endIndex = config.externals.length - 1;
      const externalsFunc = config.externals[endIndex];

      config.externals[endIndex] = function(ctx, callback) {
        if (/(antd|rc-|css-animation|@ant-design|highlight)/i.test(ctx.request)) {
          return callback();
        }

        return externalsFunc(ctx, callback);
      };
    }

    // 为antd添加less-loader
    const lessUse = [
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'global',
            exportOnlyLocals: options.isServer
          }
        }
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ];

    if (!options.isServer) {
      lessUse.unshift(options.dev ? 'style-loader' : MiniCssExtractPlugin.loader);
    }

    const rule = config.module.rules.find((o) => 'oneOf' in o);

    rule && rule.oneOf.push({
      test: /^.*\.less$/i,
      use: lessUse,
      include: /node_modules/
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  }
});