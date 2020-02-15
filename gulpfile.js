const process = require('process');

const isDev = process.env.NODE_ENV === 'development';

exports.default = isDev
  ? require('./scripts/devGulp')
  : require('./scripts/proGulp');