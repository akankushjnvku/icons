const package = require('./package.json');
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
  assetPrefix: isProd ? '/icons/branch/ve' : '',
  publicRuntimeConfig: {
    libVersion: `v${package.version}`,
  },
};
