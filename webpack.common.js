const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|git)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                }
            }
        ]
    }
}