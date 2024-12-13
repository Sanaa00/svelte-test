<script>
	import { onMount } from 'svelte';
	import { dataStore, fetchDate } from '../../Store/store';
	console.log(dataStore);
	onMount(() => {
		fetchDate();
	});
</script>

<div>
	products
	<div class="grid grid-cols-3">
		{#each $dataStore as item}
			<div class="h-60 w-60 rounded">
				<img src={item.image} alt={item.title} class="h-40 w-full object-cover" />
				<p class="p-4">{item.title}</p>
			</div>
		{/each}
	</div>
</div>
