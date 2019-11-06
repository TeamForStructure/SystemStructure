// var webpack = require('webpack');
// var HtmlwbpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var merge = require('webpack-merge');
// var webpackBaseConfig = require('./webpack.config.js')


// webpackBaseConfig.plugins = [];

// module.exports = merge(webpackBaseConfig, {
//     output:{
//         publicPath: '/dist/',
//         filename: '[name].[hash].js'
//     },
//     plugins:[
//         new ExtractTextPlugin
//     ]
// })
var merge = require('webpack-merge');
var config = require('./webpack.config.js')
var path = require('path')
module.exports = merge(config, {
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'bundle.js'
    }
})