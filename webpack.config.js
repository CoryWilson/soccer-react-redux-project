/*
 *  Webpack Dev Config File
 */

const paths = require('./paths.config');

module.exports = {
    entry: `${paths.dev.scripts}/main.js`,
    output: {
        path: paths.dest.scripts,
        publicPath: paths.dest.scripts,
        filename: 'bundle.min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                },
            }, 
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },
};
