<script lang="ts">
	import { onMount, SvelteComponentTyped } from 'svelte';
	import type { Icon } from '../../data/socials';

	let icon: SvelteComponentTyped;

	onMount(async () => {
		// @ts-ignore
		icon = (await import('lucide-svelte'))[iconName];
	});
</script>
