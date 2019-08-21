'use strict';
const path = require("path");

module.exports = {
  entry: {
    donkey: path.resolve(__dirname, "../src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "donkey.min.js"
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js" ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.less$/, use: [ "style-loader", "css-loader", "less-loader" ]}
    ]
  }
}
