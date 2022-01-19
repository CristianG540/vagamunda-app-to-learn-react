/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindConfig = require('./tailwind.config');

module.exports = {
  plugins: [
    tailwindcss(tailwindConfig),
    autoprefixer,
    cssnano({
      preset: 'default'
    })
  ]
};
