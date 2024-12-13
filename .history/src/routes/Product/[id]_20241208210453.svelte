<script>
	import { page } from '$app/stores';
	let id = $page.params.id;
	import { onMount } from 'svelte';
	import { fetchSingleDate } from '../lib/stores/dataStore';

	onMount(() => {
		if (id) {
			fetchSingleDate(id);
		}
	});
</script>

<div></div>
