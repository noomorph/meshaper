var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ENV = process.env.ENV;

var srcFolder = path.resolve(__dirname, 'src');
var testFolder = path.resolve(__dirname, 'test');
var projectFolders = [srcFolder, testFolder];


module.exports = {

    context: path.resolve(__dirname, 'src'),

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.[id].js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        contentBase: 'dist/',
        host: '0.0.0.0',
        publicPath: '/',
        port: 8000,
    },

    entry: [
        'main',
    ],

    stats: {
        colors: true,
        reasons: true,
    },

    resolve: {
        root: srcFolder,
        extensions: ['', '.ts', '.tsx', '.js'],
        modulesDirectories: ["node_modules"]
    },

    module: {
        preLoaders: [{
            test: /\.tsx?$/,
            include: projectFolders,
            loader: 'tslint-loader'
        }],
        loaders: [{
        //    loader: 'file-loader?name=[path][name].[ext]',
        //    include: []
        //}, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            include: projectFolders,
        }, {
            test: /\.tsx$/,
            loader: 'react-hot!awesome-typescript-loader',
            include: projectFolders,
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions',
            include: srcFolder
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=8192',
            include: path.resolve(__dirname, 'src')
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcFolder, 'index.html')
        }),
    ]
};
