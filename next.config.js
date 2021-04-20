const process = require('process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Fiber = require('fibers');

const isDevelopment = process.env.NODE_ENV === 'development';

function cssLoaderModeFunc(resourcePath) {
  if (/(pure\.(css|less|sass|scss|styl(us)?))/i.test(resourcePath)) {
    return 'pure';
  }

  if (/(node_modules|global\.(css|less|sass|scss|styl(us)?))/i.test(resourcePath)) {
    return 'global';
  }

  return 'local';
}

function cssLoader(config, options) {
  return {
    loader: 'css-loader',
    options: {
      modules: {
        mode: cssLoaderModeFunc,
        localIdentName: isDevelopment ? '[path][name]__[local]___[hash:base64:6]' : '_[hash:base64:6]',
        exportOnlyLocals: options.isServer
      }
    }
  };
}

/* 添加less-loader */
function lessLoader(config, options) {
  const use = [
    cssLoader(config, options),
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  ];

  config.module.rules.push({
    test: /^.*\.(le|c)ss$/i,
    use
  });

  if (!options.isServer) {
    use.unshift(isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader);
  }
}

/* 添加sass-loader */
function sassLoader(config, options) {
  const use = [
    cssLoader(config, options),
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  ];

  config.module.rules.push({
    test: /^.*\.s(a|c)ss$/i,
    use
  });

  if (!options.isServer) {
    use.unshift(isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader);
  }
}

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