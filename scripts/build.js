const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const webpackProd = require('../webpack.config.prod');

let config = defaults.__get__('config');
config = webpackProd(config, process.env)
