<script>
	import { onMount } from 'svelte';
	import { fetchDate, dataStore } from '../Store/store';

	import { paginate, LightPaginationNav } from 'svelte-paginate';
	onMount(() => {
		fetchDate();
	});
	console.log($dataStore);
	let items = $dataStore;
	let currentPage = 1;
	let pageSize = 4;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="h-screen w-full">home</div>
<ul class="items">
	{#each paginatedItems as item}
		<li class="item">
			{item}
		</li>
	{/each}
</ul>

<LightPaginationNav
	totalItems={items.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>
<!-- https://fakestoreapi.com/products  -->
