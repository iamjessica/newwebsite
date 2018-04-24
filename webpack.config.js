const ExtractPlugin = require("extract-text-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/styles/base.scss",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractPlugin.extract({
          // fallback: "style-loader",

          use: ["css-loader","sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractPlugin("styles.css"),
    new HTMLPlugin({
      template: "./src/index.html"
    }),
    new CopyPlugin([
      {
        from: "./src/images",
        to: "images"
      }
    ]),
  ],
  devServer: {
    contentBase: './dist',
    port: 3000 // port to run dev-server
  }
}
