<script lang="ts">
	import { goto } from '$app/navigation';

	import NavbarButton from '$lib/components/NavbarButton.svelte';
	import NavbarButtonPlus from '$lib/components/NavbarButtonPlus.svelte';
	const navigate = (location: string) => () => {
		goto(location);
	}
</script>

<div class="h-16 p-2 flex justify-between items-center bg-cyan-50">
	<NavbarButton icon="ri-user-line" text="Friends" on:click={navigate("/app/friends")} />
	<NavbarButton icon="ri-group-line" text="Groups" on:click={navigate("/app/groups")} />
	<NavbarButtonPlus on:click={navigate("/app/new")} />
	<NavbarButton icon="ri-bar-chart-horizontal-line" text="Activity" on:click={navigate("/app/activity")} />
	<NavbarButton icon="ri-profile-line" text="Account" on:click={navigate("/app/account")} />
</div>
