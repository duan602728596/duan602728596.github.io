const process = require('process');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function(a) {
  a.cache(true);

  const plugins = [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]];

  if (!isDev) {
    plugins.unshift(['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]);
  }

  return {
    presets: ['@sweet-milktea/babel-preset-sweet'],
    plugins
  };
};