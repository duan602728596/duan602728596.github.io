const process = require('process');
const postcssModules = require('postcss-modules');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // webpack编译入口
  webpackEntry: [
    'src/script/queueInJs.js'
  ],

  // 文件地址
  files: {
    html: ['src/**/*.pug', 'dist'],
    css: ['src/style/**/*.sass', 'dist/static/style'],
    javascript: ['src/script/**/*.js', 'dist/static/script'],
    image: ['src/image/**/*.{jpg,jpeg,png,gif,webp,ico}', 'dist/static/image']
  },

  // 静态文件
  staticFiles: [
    ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'dist/static/style'],
    ['node_modules/highlight.js/styles/github.css', 'dist/static/style'],
    ['node_modules/jquery/dist/jquery.min.js', 'dist/static/script']
  ],

  // postcss配置
  postcssConfig: [
    postcssModules({
      generateScopedName: isDev ? '[path][name]__[local]___[hash:base64:6]' : '_[hash:base64:6]'
    })
  ],

  // babel配置
  babelConfig: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              'last 2 versions',
              'last 10 Chrome versions',
              'last 1 year',
              'IE 11'
            ]
          },
          debug: isDev,
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-optional-chaining',
      ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-syntax-bigint',
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: {
            version: 3,
            proposals: true
          },
          helpers: true,
          regenerator: true,
          useESModules: true
        }
      ]
    ]
  }
};