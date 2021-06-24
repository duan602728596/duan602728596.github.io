const process = require('process');
const babelPresetSweet = require('@sweet-milktea/babel-preset-sweet');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function(a) {
  a.cache(true);

  const plugins = [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]];

  if (!isDev) {
    plugins.unshift(['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]);
  }

  return {
    presets: [
      function(api, options = {}, dirname) {
        const presets = babelPresetSweet(api, options, dirname);

        presets.plugins.splice(0, 1);

        return presets;
      }
    ],
    plugins
  };
};