module.exports = {
    // 告诉 webpack 在它贯穿的每个文件上运行 babel
    module : {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}],
                    ]
                }
            }
        ],
    },
}