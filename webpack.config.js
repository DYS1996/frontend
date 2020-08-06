const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: '[name]-[contenthash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.(jpe?g|svg)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8096,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/html/index.html'),
            title: 'Redhand',
            favicon: path.resolve(__dirname, './src/html/icon.svg'),
        }),
    ],
};
