'use strict';
const path = require("path");
const { alias, rules } = require("./base");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../public/"),
    filename: "donkey.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias
  },
  module: { rules },
  devServer: {
    contentBase: path.resolve(__dirname, "../public/"),
    publicPath: "/",
    compress: true,
    port: 9000
  }
}
