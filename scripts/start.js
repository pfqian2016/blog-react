const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.config.dev');
const webpack = require('webpack');
const devServerConfig = require('../config/webpackDevServer.config');
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const {
    prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');

const compiler = webpack(webpackConfig);
const HOST = process.env.HOST || '0.0.0.0';
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const urls = prepareUrls(protocol, HOST, 3000);

const devServer = new webpackDevServer(compiler, devServerConfig);

devServer.listen(3000, HOST, err => {
    if (err) {
        console.log(err);
    }
    clearConsole();
    console.log('server start at port: ', 3000);
    openBrowser(urls.localUrlForBrowser);
});