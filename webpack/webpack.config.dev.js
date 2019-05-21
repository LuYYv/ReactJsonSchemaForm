const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const app_config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config.json')).toString()).DEV;
const { LISTEN_PORT = 3000, BACKEND, TITLE } = app_config;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        mainFiles: [
            'index.js'
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,  //自动刷新
        port: LISTEN_PORT,
        proxy: {

        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({ use: ["css-loader", "sass-loader"] })
            },
            {
                test: /\.(png|jpg|gif|woff)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: TITLE,
            filename: 'index.html',
            inject: true
        })
    ]
}
