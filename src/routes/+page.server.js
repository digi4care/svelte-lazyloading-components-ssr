/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		componentsList: [
			{ comp: 'AsyncComponent', props: 'I am AsyncComponent and i should be visible with ssr' },
			{ comp: 'AsyncComponentv2', props: 'I am AsyncComponentv2 and i should be visible with ssr' }
		]
	};
}
