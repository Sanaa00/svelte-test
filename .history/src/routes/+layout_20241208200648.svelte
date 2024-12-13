<script>
	import '../app.css';
	let { children } = $props();

	import Footer from '../component/Footer.svelte';
	import Navbar from '../component/Navbar.svelte';
</script>

{@render children()}
<Navbar />
<slot />
<Footer />
