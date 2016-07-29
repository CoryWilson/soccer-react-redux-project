/*
 *	Webpack Prod Config File
 */

const webpack = require('webpack');
const paths = require('./paths.config');

module.exports = {
    entry: `${paths.dev.scripts}/main.js`,
    output: {
        filename: 'bundle.min.js',
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
            },
        }],
    },
    plugins: [
        // Minifies JS Bundle
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false,
            },
        })
    ],
};
