var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, './client/public/');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: { inline: true }
};


module.exports = config;
