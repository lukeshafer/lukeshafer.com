<script lang="ts">
	import socials from '$data/socials';
	import Social from './Icon.svelte';

	export let backgroundColor: string;
	export let iconColor: string;
</script>

<ul>
	{#each socials as s}
		<Social icon={s} {backgroundColor} {iconColor} />
	{/each}
</ul>

<style>
	ul {
		font-size: 1em;
		width: 100%;
		display: grid;
		place-items: center;
		place-content: center;
		gap: 1em;
		grid-template-columns: repeat(auto-fit, 3rem);
	}
</style>
