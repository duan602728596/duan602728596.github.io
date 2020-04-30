module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-top-level-await' // top-level await
    ]
  };
};