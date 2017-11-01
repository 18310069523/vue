var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports={
    entry: __dirname+"/main.js",
    // {
    //     index:__dirname+"/index.js",
    //    main: __dirname+"/main.js"
    // } ,
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    "presets":[
                        "es2015"
                    ]
                }
            },
            {
                test:/\.css$/,
                use:[
                "style-loader",
                "css-loader"
                ]
            },{
                test:/\.html$/,
                use:[
                    "html-loader"
                ]
            },{
                test:/\.png|.jpg|.gif$/,
                loader:"url-loader"
            }
        ]
    },
    devServer:{
        //告诉服务器从哪里提供内容。这只有在您想要提供静态文件时才需要。例如图片？？
                        contentBase:path.join(__dirname + 'dist'),
        // --告诉服务器观看由devServer.contentBase选项提供的文件。文件更改将触发整个页面重新加载。
                        watchContentBase: true,
                        // --随所有内容启用gzip压缩
                        compress: true,
                        // 模块的热加载，必须结合 HotModuleReplacementPlugin使用
        hot: true,  
                        port: 9999,
                        host: "localhost",
        inline:true,
                        //相当于gulp的middleware中间件拦截请求；
                        setup(app) {
                            app.get('/some/path', function(req, res) {
                                console.log(11)
                                res.json({ custom: 'response' });
                            });
                        },
                        // proxy:{
                        //         // "/api": "http://localhost:3000/"
                        //         "/api": "http://localhost:9000"
                        //             //     "/api": {
                        //             //         target: "http://localhost:3000",
                        //             //         pathRewrite: {"^/api" : ""},
                        //             //         secure: false
                        //                 //     }
                        // }
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: "commons",
                // ( 公共chunk(commnons chunk) 的名称)
                filename: "commons.js",
                // ( 公共chunk 的文件名)
            }),
            new HtmlWebpackPlugin({
                // filename: 'test.html',
                template: "./index.html"
    })
        ]
        
}