const process = require('process');
const withSass = require('@zeit/next-sass');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: isDev ? '[path][name]__[local]___[hash:base64:6]' : '_[hash:base64:6]'
  },
  webpack(config, options) {
    // loader
    const { rules } = config.module;
    const { use } = rules[rules.length - 1];
    const loaders = options.isServer
      ? ['css-loader/locals']
      : [isDev ? 'style-loader' : use[0], 'css-loader'];

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

    if (options.isServer) {
      // antd
      const externalsFunc = config.externals[config.externals.length - 1];

      config.externals[config.externals.length - 1] = function(context, request, callback) {
        if (/(antd|rc-|css-animation|@ant-design|highlight)/i.test(request)) {
          return callback();
        }

        return externalsFunc(context, request, callback);
      };
    } else {
      config.node = {
        fs: 'empty',
        path: 'empty'
      };
    }

    if (!isDev) {
      config.optimization.minimizer[1] = new CssMinimizerPlugin();
    }

    return config;
  }
});

module.exports = nextConfig;