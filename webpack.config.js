const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' ) ;

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
                test: /\.(gif|png|jpe?g)(\?\S*)?$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: path.posix.join('static',  '[name]_[hash:7].[ext]')
                }
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: `[name][hash:5].bundle.js`,
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, './public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new CleanWebpackPlugin ( ),
    ]
}