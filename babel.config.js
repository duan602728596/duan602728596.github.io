const process = require('node:process');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function(a) {
  a.cache(true);

  return {
    presets: ['@sweet-milktea/babel-preset-sweet'],
    plugins: [
      !isDev && ['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]
    ].filter(Boolean)
  };
};