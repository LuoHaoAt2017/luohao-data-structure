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
  entry: resolve("src/index.js"),
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
      "gantt": resolve("./gantt/index.js")
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