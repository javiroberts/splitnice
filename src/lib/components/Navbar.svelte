<script lang="ts">
	import NavbarButton from '$lib/components/NavbarButton.svelte';
	import NavbarButtonPlus from '$lib/components/NavbarButtonPlus.svelte';
</script>

<div class="h-16 p-2 flex justify-between items-center bg-cyan-50">
	<NavbarButton icon="ri-user-line" text="Friends" />
	<NavbarButton icon="ri-group-line" text="Groups" />
	<NavbarButtonPlus />
	<NavbarButton icon="ri-bar-chart-horizontal-line" text="Activity" />
	<NavbarButton icon="ri-profile-line" text="Account" />
</div>
