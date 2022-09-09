<script>
	export let customProp;
</script>

<p class="block p-4 m-6">
	I'm an child component!
	{#if customProp}
		<br />
		With custom props \o/
		<br />
		and these are: {customProp}
	{/if}
</p>
