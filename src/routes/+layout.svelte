<script>
	import '$lib/styles/layout.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Affiliation from '$lib/components/Affiliation.svelte';

	let { children } = $props();
</script>

<Navbar />
<div class="flex-1">
	{@render children()}
</div>
<Footer />
<Affiliation />