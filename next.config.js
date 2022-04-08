const path = require('path');
const withMdx = require('@next/mdx');
const MiniCssExtractPlugin = require('next/dist/compiled/mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = withMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react'
  }
})({
  webpack(config, options) {
    /* 将antd打包到服务端生成的文件中 */
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

    /* 为antd添加less-loader */
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

    /* tailwindcss */
    const tailwindcssUse = [
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
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              tailwindcss({
                content: [
                  './src/**/*.{ts,tsx,js,jsx}',
                  './pages/**/*.{ts,tsx,js,jsx}'
                ]
              }),
              autoprefixer()
            ]
          }
        }
      }
    ];

    if (!options.isServer) {
      tailwindcssUse.unshift(options.dev ? 'style-loader' : MiniCssExtractPlugin.loader);
    }

    config.module.rules.push({
      test: /\.tailwindcss$/i,
      use: tailwindcssUse,
      include: [/src/]
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  }
});