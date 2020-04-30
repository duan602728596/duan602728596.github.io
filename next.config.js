const process = require('process');
const path = require('path');
const withSass = require('@zeit/next-sass');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: isDev ? '[path][name]__[local]___[hash:base64:6]' : '_[hash:base64:6]'
  },
  webpack(config, options) {
    const { rules } = config.module;
    const { use } = rules[rules.length - 1];
    const loaders = options.isServer
      ? ['css-loader/locals']
      : use.slice(0, isDev ? 2 : 1).concat(['css-loader']);

    config.module.rules.push({
      test: /.*\.less$/,
      use: [
        ...loaders,
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            },
            sourceMap: isDev
          }
        }
      ]
    }, {
      test: /.*\.md/,
      use: ['raw-loader']
    });

    // antd
    if (options.isServer) {
      const externalsFunc = config.externals[0];

      config.externals[0] = function(context, request, callback) {
        if (/(antd|rc-|css-animation|@ant-design|highlight)/i.test(request)) {
          return callback();
        }

        return externalsFunc(context, request, callback);
      };
    }

    if (!options.isServer) {
      config.node = {
        fs: 'empty',
        path: 'empty'
      };
    }

    // plugin
    const publicDir = path.join(__dirname, 'public/m');

    config.plugins.push(
      new CopyWebpackPlugin([])
    );

    return config;
  }
});