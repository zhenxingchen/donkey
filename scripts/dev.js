'use strict';
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../public/"),
    filename: "index.js"
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js" ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../public/"),
    publicPath: '/',
    compress: true,
    port: 9000
  }
}
