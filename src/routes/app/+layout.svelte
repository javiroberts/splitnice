<script lang="ts">
	import Topbar from '$lib/components/Topbar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="container pt-12">
	<div class="top-bar fixed top-0 left-0 right-0">
		<Topbar/>
	</div>
	<div class="main-section">
		<slot/>
	</div>
	<div class="bottom-bar fixed bottom-0 left-0 right-0">
		<Navbar/>
	</div>
</div>
