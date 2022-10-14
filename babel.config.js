const process = require('node:process');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function(a) {
  a.cache(true);

  const plugins = [];

  if (!isDev) {
    plugins.unshift(['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]);
  }

  return {
    presets: ['@sweet-milktea/babel-preset-sweet'],
    plugins
  };
};