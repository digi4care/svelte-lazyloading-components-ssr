import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini'
		},
		browser: {
			hydrate: true,
			router: false
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			entries: ['*']
		},
		trailingSlash: 'always',
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
