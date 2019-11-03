var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin') //把多个css文件打包成一个css文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')


var VueLoaderPlugin = require('vue-loader/lib/plugin')
var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //{ test: /\.css$/, use: ['style-loader', 'css-loader'] } //编译规则：从后往前
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader',
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
        })
    ]
}

module.exports = config;