const Webpack = require('webpack');
const Server = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new Server(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
}

runServer().then((res)=>{console.log(res, 'webpack运行完毕！')});