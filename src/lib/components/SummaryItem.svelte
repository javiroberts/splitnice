<script lang="ts">
	export let title: string
	export let icon: string
	export let detail: string
</script>

<div class="summary-item flex justify-between h-16">
	<div class="user-segment flex content-start items-center">
		<i class="{icon} text-5xl text-cyan-950"></i>
		<h2 class="ml-1 text-lg">{title}</h2>
	</div>
	<div class="finance-segment flex content-end items-center">
		<p class="text-xs text-cyan-800 font-light">{detail}</p>
	</div>
</div>
