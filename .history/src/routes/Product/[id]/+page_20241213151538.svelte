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
		<div>
			<img src={$singleDataStore.image} alt="product" />
			<div class="">
				<h1>{$singleDataStore.title}</h1>
				<p>{$singleDataStore.description}</p>
				<p>Price: ${$singleDataStore.price}</p>
			</div>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
