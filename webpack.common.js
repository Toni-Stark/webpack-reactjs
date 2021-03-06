const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        mode: "development",
        entry: {
            index: './src/index.jsx'
        },
        output: {
            // 打包文件根目录
            path: path.resolve(__dirname, "build/"),
        },
        plugins: [
            // 生成 index.html
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./build/index.html",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    use: ["babel-loader"],
                    include: path.resolve(__dirname, 'src'),
                },
            ]
        },
        devServer: {
            port: 8080,
            host: '0.0.0.0',
        },
    }
}