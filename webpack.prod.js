const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'https://filipemerker.github.io/module-federation-user/',
    path: path.join(__dirname, 'docs')
  }
})