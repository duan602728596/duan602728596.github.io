const process = require('process');
const MiniCssExtractPlugin = require('next/dist/compiled/mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

/* css-loader mode函数 */
function cssLoaderModeFunc(resourcePath) {
  if (/(pure\.(css|less|sass|scss|styl(us)?))/i.test(resourcePath)) {
    return 'pure';
  }

  if (/(node_modules|global\.(css|less|sass|scss|styl(us)?))/i.test(resourcePath)) {
    return 'global';
  }

  return 'local';
}

/* css-loader配置 */
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
    use,
    include: /node_modules/
  });

  if (!options.isServer) {
    use.unshift(isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader);
  }
}

exports.lessLoader = lessLoader;