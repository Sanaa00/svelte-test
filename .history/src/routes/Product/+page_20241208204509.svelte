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
			<div>{item.title}</div>
		{/each}
	</div>
</div>
