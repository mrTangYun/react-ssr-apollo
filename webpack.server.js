// webpack.server.js
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // 通知 webpack 我们构建的是 NodeJS 的打包文件，而不是浏览器端
    target: 'node',
    // 告诉 webpack 我们的服务器应用的根文件（入口文件）
    entry: './src/index.js',
    // 告诉 webpack 构建生成的文件放到哪里
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    // 告诉 webpack 执行时不要打包任何 node_modules 中已有的依赖包
    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);