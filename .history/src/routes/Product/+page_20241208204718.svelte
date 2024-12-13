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
	<div>
		{#each $dataStore as item}
			<div class="h-60 w-60 rounded">
				<img src={item.image} class="h-40 w-full" />
				<p class="p-4">{item.title}</p>
			</div>
		{/each}
	</div>
</div>
