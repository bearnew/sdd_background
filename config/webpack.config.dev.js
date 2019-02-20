const baseWebpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

const webapckDevConfig = merge(baseWebpackConfig, {
    devtool: true,
    hot: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
})
