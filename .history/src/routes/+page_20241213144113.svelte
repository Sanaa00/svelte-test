<script>
	import { onMount } from 'svelte';
	import { fetchDate, dataStore } from '../Store/store';
	import Carousel from 'svelte-carousel';
	import { paginate, LightPaginationNav } from 'svelte-paginate';

	let loading = true;
	let error = null;
	let currentPage = 1;
	let pageSize = 4;

	$: paginatedItems = paginate({ items: $dataStore, pageSize, currentPage });

	onMount(async () => {
		try {
			await fetchDate();
		} catch (err) {
			error = 'Failed to fetch data';
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<div
		class="text-in flex h-screen w-full items-center justify-center text-lg font-bold text-cyan-800"
	>
		Loading...
	</div>
{:else if error}
	<div class="flex h-screen w-full items-center justify-center text-red-500">{error}</div>
{:else if !$dataStore?.length}
	<div
		class="text-in flex h-screen w-full items-center justify-center text-lg font-bold text-cyan-800"
	>
		No data available.
	</div>
{:else}
	<div class="flex h-screen w-full flex-col justify-between px-60">
		<h1 class=" mt-10 flex text-lg font-bold text-cyan-800">Home</h1>
		<Carousel class="mt-10">
			{#each $dataStore as item}
				<div>
					<div class="flex items-center justify-between">{item.title.slice(0, 10)}</div>
					<div class="flex items-center justify-between">{item.price}</div>
				</div>
			{/each}
		</Carousel>
		<ul class="items">
			{#each paginatedItems as item}
				<li class="item">{item.title}</li>
			{/each}
		</ul>

		<LightPaginationNav
			totalItems={$dataStore?.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)}
		/>
	</div>
{/if}
