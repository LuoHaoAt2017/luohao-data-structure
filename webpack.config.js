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
  entry: {
    index: resolve("src/index.js"),
    svgs: resolve('modules/svg-elem/index.js')
  },
  output: {
    filename: "[name].js",
    path: resolve("dist"),
    // library: "luohao-gantt",
    // libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "gantt": resolve("./lib/gantt/index.js")
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '从0到1开发甘特图',
      filename: 'index.html',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'SVG教程',
      filename: 'svgs.html',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
      chunks: ['svgs']
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    openPage: 'index.html'
  },
};