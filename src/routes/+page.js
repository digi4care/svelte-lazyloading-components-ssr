function __variableDynamicImportRuntime__(component_name) {
	switch (component_name) {
		case component_name:
			return import(`../components/${component_name}.svelte`);
		default:
			return new Promise(function (resolve, reject) {
				queueMicrotask(
					reject.bind(
						null,
						new Error(`Unknown variable dynamic import: ../components/${component_name}.svelte`)
					)
				);
			});
	}
}

function importComponent(component_name) {
	return __variableDynamicImportRuntime__(`${component_name}`);
}

/** @type {import('./$types').PageLoad} */
export function load({ data }) {
	let componentsContainer = [];
	data.componentsList.map((component, index) => {
		importComponent(component.comp).then(
			(res) => (componentsContainer[component.comp] = { default: res.default, props: component.props })
		);
	});

	// console.log('page.js', data);
	return {
		list: data.componentsList,
		container: componentsContainer
	};
}
