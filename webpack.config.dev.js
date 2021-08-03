const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 8090,
    open: true,
    openPage: 'index.html'
  },
});