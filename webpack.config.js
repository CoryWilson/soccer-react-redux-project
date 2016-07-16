/*
 *	Webpack Config File
 */

module.exports = {
    entry: './dev/scripts/main.js',
    output: {
        path: `${__dirname}/dist/scripts`,
        filename: 'bundle.min.js',
    },
    module: {
        loaders: [
	        {
	            test: /.js$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/,
	            query: {
	                presets: ['es2015', 'react'],
	            },
	        },
        ],
    },

};
