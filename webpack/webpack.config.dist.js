const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app_config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config.json')).toString()).DIST;
const { TITLE } = app_config;

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.js'),
    resolve: {
        mainFiles: [
            'index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=1&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: TITLE,
            filename: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin('style-[hash].css'),
        new webpack.DefinePlugin({
            APP_MODE: JSON.stringify('PRODUCTION')
        })
    ]
}
