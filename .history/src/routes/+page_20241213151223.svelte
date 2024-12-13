<script>
	import { onMount } from 'svelte';
	import { fetchDate, dataStore } from '../Store/store';
	import Carousel from 'svelte-carousel';
	import { paginate, LightPaginationNav } from 'svelte-paginate';

	let loading = true;
	let error = null;
	let currentPage = 1;
	let pageSize = 6;

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
	<div class="flex min-h-screen w-full flex-col justify-between px-60">
		<h1 class=" mt-10 flex text-lg font-bold text-cyan-800">Home</h1>
		<Carousel autoplay={true} arrows={false} dots={false} class="mt-10">
			{#each $dataStore as item}
				<div class="flex w-32 justify-between">
					<div class="flex flex-col justify-between">
						<div class="flex items-center justify-between">{item.title.slice(0, 10)}</div>
						<div class="flex items-center justify-between">{item.price}</div>
					</div>
					<img src={item.image} class="h-fit w-32 object-cover" alt="product" />
				</div>
			{/each}
		</Carousel>
		<ul class="items mt-20 grid grid-cols-3 gap-5">
			{#each paginatedItems as item}
				<div class="flex h-fit w-full flex-col justify-between">
					<img src={item.image} alt="hhh" class="h-52 w-52 object-cover" />

					<div class="mt-4 flex items-center justify-between">
						<p class="">{item.title.slice(0, 10)}</p>
						<p>{item.price}</p>
					</div>
				</div>
			{/each}
		</ul>

		<LightPaginationNav
			className="mt-20 "
			totalItems={$dataStore?.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={false}
			on:setPage={(e) => (currentPage = e.detail.page)}
		/>
	</div>
{/if}

<style>
	/* Styling pagination control buttons */
	.svelte-pagination-nav {
		display: flex;
		justify-content: center;
		gap: 10px;
	}

	.svelte-pagination-nav button {
		padding: 8px 16px;
		border: 1px solid #4b0082;
		border-radius: 5px;
		cursor: pointer;
		background-color: #fff;
		color: #4b0082;
		font-size: 14px;
	}

	.svelte-pagination-nav button:hover {
		background-color: #d4af37;
		color: #fff;
	}

	.svelte-pagination-nav button.disabled {
		background-color: #ccc;
		color: #999;
		cursor: not-allowed;
	}

	.svelte-pagination-nav .svelte-pagination-nav-page {
		font-size: 14px;
		font-weight: bold;
	}

	.svelte-pagination-nav .svelte-pagination-nav-next,
	.svelte-pagination-nav .svelte-pagination-nav-prev {
		background-color: #4b0082;
		color: white;
	}

	/* Styling for active page */
	.svelte-pagination-nav button.active {
		background-color: #4b0082;
		color: white;
	}
</style>
