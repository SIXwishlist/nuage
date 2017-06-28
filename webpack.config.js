const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, 'client', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'server', 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'client'),
                loader: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client', 'index.html'),
            inject:true
        })
    ]
};



if(process.env.NODE_ENV === 'production'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}else{
    config.devtool = '#inline-source-map';
    config.devServer = {
        contentBase: path.join(__dirname, "server", "public"),
        disableHostCheck: true,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000'
            }
        }
    };
}



module.exports = config;
