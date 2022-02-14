const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LessRegex = /.less$/;
const LessOrModuleRegex = /^(.less)$|^(\.module\.less)$/;
const SassRegex = /.scss$/;
const SassOrModuleRegex = /^(.scss)$|^(\.module\.scss)$/;
const SassAndLessOrCss = /^(\.less)$|^(\.css)$|^(\.scss)$/;
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.jsx'),
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ]
            },
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: SassRegex,
                exclude: SassOrModuleRegex,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: LessRegex,
                exclude: LessOrModuleRegex,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ],
                type: 'javascript/auto'
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        })
    ]
}