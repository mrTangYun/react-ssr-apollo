const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const config = {
    // 告诉 webpack 我们的服务器应用的根文件（入口文件）
    entry: './src/client/client.js',
    // 告诉 webpack 构建生成的文件放到哪里
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};
module.exports = merge(baseConfig, config);