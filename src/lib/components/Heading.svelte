<script lang="ts">
	export let type: 'h1' | 'h2' | 'h3';
</script>

<svelte:component this={type}>
	<slot />
</svelte:component>
