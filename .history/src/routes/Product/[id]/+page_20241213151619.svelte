<script>
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { fetchSingleDate, singleDataStore } from '../../../Store/store';
	let id = $page.params.id;
	onMount(() => {
		if (id) {
			fetchSingleDate(id);
		}
	});
</script>

<div>
	{#if $singleDataStore}
		<div class="flex justify-between">
			<img src={$singleDataStore.image} alt="product" class="h-60 w-60 object-cover" />
			<div class="flex flex-col">
				<h1>{$singleDataStore.title}</h1>
				<p>{$singleDataStore.description}</p>
				<p>Price: ${$singleDataStore.price}</p>
			</div>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
