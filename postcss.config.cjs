const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [autoprefixer, nested],
};

module.exports = config;
