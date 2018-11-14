const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.config.dev');
const webpack = require('webpack');
const devServerConfig = require('../config/webpackDevServer.config');
const clearConsole = require('react-dev-utils/clearConsole');

const compiler = webpack(webpackConfig);

const devServer = new webpackDevServer(compiler, devServerConfig);

devServer.listen(3000, 'localhost', err => {
    if (err) {
        console.log(err);
    }
    clearConsole();
    console.log('server start at port: ', 3000);
});