const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { alias, rules } = require("./base");

module.exports = {
  entry: {
    donkey: path.resolve(__dirname, "../src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "donkey.min.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias
  },
  module: { rules },
  plugins: [new BundleAnalyzerPlugin()]
};
