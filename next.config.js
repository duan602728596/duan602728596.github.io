const path = require('node:path');
const process = require('node:process');
const withMdx = require('@next/mdx');
const MiniCssExtractPlugin = require('next/dist/compiled/mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const isOutputExport = process.env.OUTPUT === 'export';

const nextConfig = {
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
                  './src/**/*.{ts,tsx,js,jsx,mdx}',
                  './pages/**/*.{ts,tsx,js,jsx,mdx}'
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
};

if (isOutputExport) {
  nextConfig.output = 'export';
}

module.exports = withMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react'
  }
})(nextConfig);