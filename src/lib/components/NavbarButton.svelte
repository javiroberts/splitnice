<script lang="ts">
	export let icon: string;
	export let text: string;
</script>

<div class="navbar-button flex flex-col items-center justify-around">
	<i class="{icon} text-2xl text-cyan-950"></i>
	<p class="text-xs font-light text-cyan-950">{text}</p>
</div>
