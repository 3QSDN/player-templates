const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    audio: './src/audio',
    video: './src/video',
    'demo-page': './src/demo-page'
  },
  target: 'web',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'demo'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/template.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/**/*.html',
          to({ absoluteFilename }) {
            const pathArr = absoluteFilename.split('/src/')
            const segment = pathArr.pop()

            return segment
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
}