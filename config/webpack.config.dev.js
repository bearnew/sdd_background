const path = require('path');
const baseWebpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    // devtool: 'source-map',
    devServer: {
        contentBase: path.join(process.cwd(), './src'),
        compress: true,
        port: 9000,
        hot: true
    }
})
