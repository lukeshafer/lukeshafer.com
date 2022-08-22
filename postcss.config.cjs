const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      features: {
        "has-pseudo-class": true
      }
    })
  ],
};

module.exports = config;
