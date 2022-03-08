const Webpack = require('webpack');
const WebpackServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig, open: true };
const server = new WebpackServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
}

runServer().then((res)=>{console.log(res, 'webpack运行完毕！')});