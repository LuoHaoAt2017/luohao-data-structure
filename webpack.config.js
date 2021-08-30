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
    index: resolve("src/index.js"),
    algorithms: resolve("modules/algorithms/index.js"),
    gantt: resolve("modules/gantt/index.js"),
    chess: resolve("modules/chess/index.js"),
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
      gantt: resolve("./libs/gantt/index.js"),
    },
    extensions: [".js", ".ts", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "SVG乐园",
      filename: "chess.html",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      chunks: ["chess"],
    }),
    new HtmlWebpackPlugin({
      title: "从0到1开发甘特图",
      filename: "gantt.html",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      chunks: ["gantt"],
    }),
    new HtmlWebpackPlugin({
      title: "数据结构和算法",
      filename: "index.html",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      chunks: ["algorithms"],
    }),
  ],
};
