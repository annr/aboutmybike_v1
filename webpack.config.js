var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/index.js",
    vendor: ["jquery", "lodash", "bootstrap", "react", "react-dom"]
  },
  output: {
    //never use dist here until you figure out why it breaks hmr
    path: "dist",
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
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};