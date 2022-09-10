<script lang="ts">
	import Socials from '$lib/components/socials/Socials.svelte';
	import Copyright from './Copyright.svelte';
</script>

<footer>
	<Socials
		backgroundColor={'rgb(var(--background-base))'}
		iconColor={'rgb(var(--secondary-color))'} />
	<Copyright />
</footer>

<style>
	footer {
		box-sizing: border-box;
		width: 100%;
		font-size: 1.5rem;

		background-color: rgb(var(--secondary-color));

		padding: 1rem;
		color: rgb(240, 253, 255);

		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
		row-gap: 1rem;

		transition: all 300ms;
	}
</style>
