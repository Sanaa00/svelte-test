<script>
	import { onMount } from 'svelte';
	import { dataStore, fetchDate } from '../../Store/store';
	console.log(dataStore);
	onMount(() => {
		fetchDate();
	});
</script>

<div>
	<div>
		{#each dataStore as item}
			<div>here</div>
		{/each}
	</div>
</div>
