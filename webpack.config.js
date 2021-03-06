/*
 *  Webpack Dev Config File
 */

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
};
