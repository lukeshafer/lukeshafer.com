import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			$data: resolve('./src/data'),
		},
	},
	plugins: [sveltekit()]
};

export default config;