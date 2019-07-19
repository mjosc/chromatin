const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.config.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,      
  },
});
