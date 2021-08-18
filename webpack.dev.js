const { merge } = require('webpack-merge')

const defaultConfig = require('./webpack.config')

module.exports = merge(defaultConfig, {
  mode: 'development',
  entry: './demo',
  output: {
    publicPath: './demo'
  },
  devServer: {
    publicPath: '/',
    contentBase: [
      './dist',
      './demo'
    ],
    index: 'index.html'
  }
})