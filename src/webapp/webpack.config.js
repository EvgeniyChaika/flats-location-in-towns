const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const output = path.join(__dirname, './dist');

module.exports = {
    entry: __dirname + '/src/app/app',
    output: {
        path: output,
        filename: 'bundle.js'
    },
    cache: true,
    watch: true,
    devtool: NODE_ENV === 'development' ? 'source-map' : null,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader",
                })

            },
            {
                test: /\.(ico|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?url-loader?limit=100000name=[path][name].[ext]?[hash]'   //TODO
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "raw-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        address: 'localhost',
        port: '9999',
        // proxy: {
        //     '/**': {
        //         target: 'http://localhost:8080',
        //         secure: false
        //     }
        // },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            favicon: 'src/public/img/favicon.ico',
            template: __dirname + '/src/index.html'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
};