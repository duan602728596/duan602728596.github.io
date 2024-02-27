const path = require('node:path');
const process = require('node:process');
const withMdx = require('@next/mdx');

const isOutputExport = process.env.OUTPUT === 'export';

/** @type { import('next').NextConfig } */
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