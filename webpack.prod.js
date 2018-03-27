const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')

const webpackConfig = {
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  mode: 'production'
}

module.exports = merge(common, webpackConfig)
