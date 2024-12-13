<script>
	import { page } from '$app/stores';
	let id = $page.params.id;
	import { onMount } from 'svelte';
	import { fetchSingleDate, singleDataStore } from '../lib/stores/dataStore';

	onMount(() => {
		if (id) {
			fetchSingleDate(id);
		}
	});
</script>

<div>
	{#if $singleDataStore}
		<div>
			<h1>{$dataStore.title}</h1>
			<p>{$dataStore.description}</p>
			<p>Price: ${$dataStore.price}</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
