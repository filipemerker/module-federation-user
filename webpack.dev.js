const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 3003,
  },
  output: {
    publicPath: 'http://localhost:3003/',
    path: path.join(__dirname, 'docs')
  },
})