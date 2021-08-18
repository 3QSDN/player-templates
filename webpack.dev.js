const { merge } = require('webpack-merge')

const defaultConfig = require('./webpack.config')

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src',
    './src/demo-page',
  ],
  devServer: {
    contentBase: './demo',
    index: 'demo-page/index.html',
  }
})