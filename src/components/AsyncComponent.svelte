<script>
	export let customProp;

	import ChildComponent from './ChildComponent.svelte';
</script>

<p class="block p-4 m-6">
	I'm an async component!
	{#if customProp}
		<br />
		With custom props \o/
		<br />
		and these are: {customProp}
	{/if}

	<ChildComponent customProp='oh agina a csutomn prop' />
</p>
