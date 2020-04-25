/* babel插件配置 */
const babelPlugins = exports.babelPlugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-optional-chaining',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-syntax-top-level-await'
];

/* webpack使用的babel插件 */
exports.babelPluginsForWebpack = [
  ...babelPlugins,
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: { version: 3, proposals: true },
      helpers: true,
      regenerator: true,
      useESModules: true
    }
  ]
];

/* es env */
const esBrowsers = [
  'Chrome >= 61',
  'Firefox >= 60',
  'Edge >= 16',
  'Opera >= 47',
  'Safari >= 11',
  'Android >= 61',
  'IOS >= 11',
  'ChromeAndroid >= 61',
  'FirefoxAndroid >= 60'
];

/* old env */
const oldBrowsers = [
  'last 2 versions',
  'last 10 Chrome versions',
  'last 1 year',
  'IE 11'
];

/* @babel/preset-env配置 */
exports.presetEnv = function presetEnv(esModule) {
  return [
    '@babel/preset-env',
    {
      targets: { browsers: esModule ? esBrowsers : oldBrowsers },
      debug: false,
      modules: false,
      useBuiltIns: 'usage',
      corejs: 3,
      bugfixes: true
    }
  ];
};