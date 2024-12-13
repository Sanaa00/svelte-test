<script>
	import { onMount } from 'svelte';
	import { dataStore, fetchDate } from '../../Store/store';
	console.log(dataStore, fetchDate, 'dattttttttt');
	onMount(() => {
		fetchDate();
	});
</script>

<div>
	{console.log(dataStore, fetchDate)}
	product page
</div>
