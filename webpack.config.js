//webpack.config.js

var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: [ './app'], //file extension after index is optional for .js files
    output: {
        path: path.join(__dirname, 'public'),
        fileName: 'live.js'
    },

    plugins: [
        new webpack.optimize.uglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        })
    ]
}