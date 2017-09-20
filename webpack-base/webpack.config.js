var Webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js $/,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                include: /src/,
                loader: "vue-loader"
            }, {
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.css $/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.jpg | .png $/,
                use: ["url-loader"]
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        host: "localhost",
        port: "9999",
        hot: true,
        contentBase: __dirname + "/src/static",
        watchContentBase: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        // new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        })
    ]
}