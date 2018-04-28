'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
    less: ExtractTextPlugin.extract({
      use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
      fallback: 'vue-style-loader'
    }),
    css: ExtractTextPlugin.extract({
      use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
      fallback: 'vue-style-loader'
    })
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
