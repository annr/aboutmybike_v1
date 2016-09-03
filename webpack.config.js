var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/app.js",
    //mdl: "./src/js/mdl.js",
    vendor: ["jquery", "lodash", "react", "react-dom"]
  },
  output: {
    //path: './dist',
    //filename: "[name].bundle.js",
    //publicPath: "/assets/",
    filename: "main.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};