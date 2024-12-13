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

<div class="min-h-screen">
	{#if $singleDataStore}
		<div class="mt-20 flex justify-between gap-10">
			<div class="w-90 flex flex-col">
				<h1>{$singleDataStore.title}</h1>
				<p>{$singleDataStore.description}</p>
				<p>Price: ${$singleDataStore.price}</p>
			</div>
			<img src={$singleDataStore.image} alt="product" class="h-fit w-72 object-cover" />
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
