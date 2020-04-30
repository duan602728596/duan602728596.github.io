const process = require('process');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function(api) {
  api.cache(true);

  const plugins = [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]];

  if (!isDev) {
    plugins.unshift(['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]);
  }

  return {
    presets: ['next/babel'],
    plugins
  };
};