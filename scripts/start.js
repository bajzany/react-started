const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/start.js');
const webpackConfig = require('react-scripts/config/webpack.config');
const webpackDev = require('../webpack.config.dev');

//In order to override the webpack configuration without ejecting the create-react-app
defaults.__set__('configFactory', (webpackEnv) => {
  let config = webpackConfig(webpackEnv);
  config = webpackDev(config, webpackEnv);

  return config;
});