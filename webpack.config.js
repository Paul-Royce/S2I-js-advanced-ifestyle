const path = require("path");
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./assets/js/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new Dotenv()
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
