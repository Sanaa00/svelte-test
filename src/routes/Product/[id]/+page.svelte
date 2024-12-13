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

<div class="min-h-screen px-60">
	{#if $singleDataStore}
		<div class="mt-20 flex justify-between gap-10">
			<div class="w-90 flex flex-col">
				<h1 class="">{$singleDataStore.title}</h1>
				<p class="mt-10">{$singleDataStore.description}</p>
				<p class="mt-10">Price: ${$singleDataStore.price}</p>
			</div>
			<img src={$singleDataStore.image} alt="product" class="h-fit w-60 object-cover" />
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
