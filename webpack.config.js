const path = require("path");
const Webpackbar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  entry: {
    index: resolve("src/index.js")
  },
  output: {
    filename: "[name].js",
    path: resolve("dist"),
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
        test: /\.ts$/, 
        loader: "ts-loader" 
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
    },
    extensions: [".js", ".ts", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "数据结构和算法",
      filename: "index.html",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
    }),
  ],
};
