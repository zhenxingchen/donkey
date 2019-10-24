const path = require("path");

const alias = {
  "@": path.resolve(__dirname, "../src/"),
  "@types-common": path.resolve(__dirname, "../src/types/common/"),
  "@types-component": path.resolve(__dirname, "../src/types/component/"),
  "@components": path.resolve(__dirname, "../src/components/"),
  "@api": path.resolve(__dirname, "../src/api/index"),
  "@shared": path.resolve(__dirname, "../src/shared/"),
  "@util": path.resolve(__dirname, "../src/util/index")
};

const rules = [
  { test: /\.tsx?$/, loader: "ts-loader" },
  { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
  { test: /\.css/, use: ["style-loader", "css-loader"] }
];

module.exports = {
  alias,
  rules
};
