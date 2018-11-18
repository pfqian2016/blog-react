const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = '/';

module.exports = {
    mode: 'development',
    entry: {
        app: paths.appIndexJs
    },
    output: {
        filename: '[name].bundle.[hash:8].js',
        publicPath: publicPath,
        path: paths.appBuild
    },
    devtool:"inline-source-map",
    plugins: [
        new miniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash:8].css'
        }),
        new cleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
        }),
        new htmlWebpackPlugin({
            template: paths.appHtml
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {

                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    // translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    // compiles Sass to CSS, using Node Sass by default
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // js和jsx进行babel转码，否则webpack不能使用es6语法，且不能识别jsx语法
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                exclude: /node_modules/,
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
        extensions: ['.js','.jsx'],
        alias: {
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@imgs': path.resolve(__dirname, '../src/assets/imgs'),
        }
    }
};