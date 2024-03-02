<script lang="ts">
	export let icon: string;
	export let text: string;
</script>

<button class="navbar-button flex flex-col items-center justify-around" on:click>
	<i class="{icon} text-2xl text-cyan-950"></i>
	<p class="text-xs font-light text-cyan-950">{text}</p>
</button>
