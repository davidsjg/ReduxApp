const { appendFile } = require("fs");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(_dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(_dirname, "dist"),
    port: 9000,
  },
  mode: "development",
};
