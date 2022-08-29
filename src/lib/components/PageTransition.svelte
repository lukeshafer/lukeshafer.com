<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	export let url: string;
	const pageTransitionDuration = 300;
</script>

{#key url}
	<div
		in:fly={{
			y: 10,
			duration: pageTransitionDuration,
			delay: pageTransitionDuration,
		}}
		out:fly={{ y: -10, duration: pageTransitionDuration }}>
		<slot />
	</div>
{/key}
