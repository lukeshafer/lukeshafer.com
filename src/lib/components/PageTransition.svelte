<script lang="ts">
	import { fly } from 'svelte/transition';
	export let url: string;
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div
		in:fly={{
			y: 20,
			duration: pageTransitionDuration,
			delay: pageTransitionDuration,
		}}
		out:fly={{
			y: -20,
			delay: 0,
			duration: pageTransitionDuration,
		}}>
		<slot />
	</div>
{/key}
