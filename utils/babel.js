const babelPresetSweet = require('@sweet-milktea/babel-preset-sweet');

module.exports = function(api, options = {}, dirname) {
  const presets = babelPresetSweet(api, options, dirname);

  presets.plugins.splice(0, 1);

  return presets;
};