module.exports = function(a) {
  a.cache(true);

  return {
    presets: [['@babel/preset-react', {
      runtime: 'automatic'
    }]]
  };
};