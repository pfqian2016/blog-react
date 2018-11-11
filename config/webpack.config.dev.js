const path = require('path');
const paths = require('./paths');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: paths.appIndexJs
    },
    output: {
        filename: '[name].bundle[chunkhash:8].js',
        path: paths.appBuild
    },
    plugins: [
        new cleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
        }),
        new htmlWebpackPlugin({
            template: paths.appHtml
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            // js和jsx进行babel转码，否则webpack不能使用es6语法，且不能识别jsx语法
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                    
                ]
            }
        ]
    },
    // 自动匹配扩展名
    resolve: {
        extensions: ['.js','.jsx']
    }
};