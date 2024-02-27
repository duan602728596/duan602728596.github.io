require('@babel/register')({
  presets: [['@babel/preset-react', {
    runtime: 'automatic'
  }]],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
  extensions: ['.js', '.jsx', '.mjs', '.cjs'],
  cache: true,
  ignore: [/node_modules/]
});

require('./antdSSRStyle.cjs');