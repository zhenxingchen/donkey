const { alias, rules } = require("./base");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
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
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["build success"]
      },
      onErrors: () => console.log("build error list, please check"),
      clearConsole: true
    }),
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
  module: { rules },
  performance: {
    hints: "warning",
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  }
};
