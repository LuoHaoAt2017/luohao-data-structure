const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    openPage: 'index.html'
  },
});