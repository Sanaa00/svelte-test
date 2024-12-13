<script>
	import { onMount } from 'svelte';
	import { fetchDate } from '../../Store/store';

	onMount(() => {
		fetchDate();
	});
</script>

<div></div>
