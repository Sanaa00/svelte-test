<script>
	import { onMount } from 'svelte';
	import { dataStore, fetchDate } from '../../Store/store';
	console.log(dataStore);
	onMount(() => {
		fetchDate();
	});
</script>

<div class="px-60">
	products
	<div class="mt-10 grid grid-cols-3">
		{#each $dataStore as item (item.id)}
			<a href={`/product/${item.id}`} class=" w-60 rounded">
				<img src={item.image} alt={item.title} class="h-60 w-full object-cover" />
				<p class="p-4">{item.title}</p>
			</a>
		{/each}
	</div>
</div>
