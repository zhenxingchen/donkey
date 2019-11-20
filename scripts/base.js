const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const alias = {
  "@": path.resolve(__dirname, "../src/"),
  "@api": path.resolve(__dirname, "../src/api/index"),
  "@components": path.resolve(__dirname, "../src/components/"),
  "@hooks": path.resolve(__dirname, "../src/hooks/index"),
  "@shared": path.resolve(__dirname, "../src/shared/"),
  "@types-common": path.resolve(__dirname, "../src/types/common/"),
  "@types-component": path.resolve(__dirname, "../src/types/component/"),
  "@util": path.resolve(__dirname, "../src/util/index")
};

const rules = [
  {
    test: /\.tsx?$/,
    loader: "ts-loader"
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      // "style-loader",
      "css-loader",
      "postcss-loader",
      "less-loader"
    ]
  },
  {
    test: /\.css/,
    use: [
      MiniCssExtractPlugin.loader,
      // "style-loader",
      "css-loader"
    ]
  }
];

module.exports = {
  alias,
  rules
};
