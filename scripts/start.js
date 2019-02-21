// 暂时无用，原因暂查
// require('@babel/register');
// require('@babel/polyfill');
const config = require('../config/webpack.config.dev.js');
const webpack = require('webpack');

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('构建过程出错')
        console.log('err: '+ JSON.stringify(err));
        console.log('stats: '+ stats);
    } else {
        console.log('成功完成构建');
    }
})
