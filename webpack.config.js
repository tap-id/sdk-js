const path = require('path');

module.exports = {
  entry: './src/main.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    filename: 'sdk.js',
    library: 'tapId',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};