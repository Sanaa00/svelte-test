<script>
	import { onMount } from 'svelte';
	import { fetchDate, dataStore } from '../Store/store';

	import { paginate, LightPaginationNav } from 'svelte-paginate';
   onMount(()=>{
     dataStore.set(fetchDate)
   })
	let items = ;
	let currentPage = 1;
	let pageSize = 4;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="h-screen w-full">home</div>

<!-- https://fakestoreapi.com/products  -->
