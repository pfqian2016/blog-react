'use strict';

const paths = require('./paths');

// const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = {
    contentBase: paths.appBuild,
    compress: true,
    host: host,
    open: true,
    hot: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    overlay: true
    // disableHostCheck: true,
    // quiet: true,
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    // https: protocol === 'https',
  };
