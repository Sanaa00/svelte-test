<script>
	import { onMount } from 'svelte';
	import { fetchDate, dataStore } from '../Store/store';
	import Carousel from 'svelte-carousel';
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

{#if $dataStore === [] || $dataStore === undefined}
	<div class="flex h-screen w-full items-center justify-center">loading...</div>
{:else}<div class="h-screen w-full">
		home

		<Carousel>
			{#each $dataStore as item}
				<div>{item.title}</div>
			{/each}
		</Carousel>
		<ul class="items">
			{#each paginatedItems as item}
				<li class="item">
					{item.title}
				</li>
			{/each}
		</ul>

		<LightPaginationNav
			totalItems={items?.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)}
		/>
	</div>{/if}
<!-- https://fakestoreapi.com/products  -->
