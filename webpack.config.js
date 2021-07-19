const path = require("path");
const Webpackbar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  mode: 'development',
  entry: resolve("demo/index.js"),
  output: {
    filename: "index.js",
    path: resolve("dist"),
    library: "luohao-gantt",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [resolve('demo'), resolve('demo')],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve('src'), resolve('demo')],
      },
      {
        test: /\.(less|css)$/,
        use: ["css-loader", "less-loader"],
        include: [resolve('src'), resolve('demo')],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
        include: [resolve('src'), resolve('demo')],
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '从0到1开发甘特图',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
};