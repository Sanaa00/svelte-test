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
			<h1>{$singleDataStore.title}</h1>
			<p>{$singleDataStore.description}</p>
			<p>Price: ${$singleDataStore.price}</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
