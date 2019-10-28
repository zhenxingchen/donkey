const path = require("path");
const { alias, rules } = require("./base");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "donkey.min.css",
      hmr: false,
      reloadAll: false
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano")
    }),
    new BundleAnalyzerPlugin()
  ],
  module: { rules }
};
