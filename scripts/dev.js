const { alias, rules } = require("./base");
const path = require("path");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
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
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`running : http://localhost:9000`]
      },
      onErrors: () => console.log("dev error"),
      clearConsole: true
    }),
    new webpack.HotModuleReplacementPlugin(),
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
    overlay: true,
    quiet: true,
    port: 9000
  }
}
