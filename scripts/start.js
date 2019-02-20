require('babel-register');
require('babel-polyfill');
const config = require('./webpack.config.dev.js');

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('构建过程出错');
    } else {
        console.log('成功完成构建');
    }
})
