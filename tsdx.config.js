/* eslint-disable @typescript-eslint/no-var-requires */
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const postcss = require('rollup-plugin-postcss');
const postcssConfig = require('./postcss.config');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config) {
    config.plugins = [
      postcss({
        ...postcssConfig,
        inject: true,
        extract: false
      }),
      ...config.plugins
    ];

    return config; // always return a config.
  }
};
