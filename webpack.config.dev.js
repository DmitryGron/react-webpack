var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },            
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            sourceMap: true,
                            includePaths: [
                                'src'
                                // 'app/assets/stylesheets/legacy',
                            ]
                        }
                    }
                ])
            },
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}