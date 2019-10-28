const path = require("path");
const { alias, rules } = require("./base");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "donkey.css",
      hmr: true,
      reloadAll: true
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano")
    })
  ],
  module: { rules },
  devServer: {
    contentBase: path.resolve(__dirname, "../public/"),
    publicPath: "/",
    compress: true,
    port: 9000
  }
}
