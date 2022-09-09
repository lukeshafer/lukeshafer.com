<script lang="ts">
	import { page } from '$app/stores';

	import Logo from '$lib/components/header/Logo.svelte';
</script>

<a class="wrapper" data-sveltekit-prefetch href="/">
	<Logo
		title="Logo"
		size="2em"
		lColor="rgb(var(--primary-color)"
		sColor="rgb(var(--secondary-color)" />
	<svelte:element this={$page.url.pathname === '/' ? 'h1' : 'h2'} class="title"
		>LukeShafer<br />Web Design</svelte:element>
</a>

<style>
	.wrapper {
		/* flex layout */
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 1rem;
		font-size: clamp(1.4rem, 2.2vw, 1.6rem);

		/* hover transition */
		transition: filter 50ms;
		text-decoration: none;
	}

	.wrapper:hover {
		filter: brightness(110%);
	}

	.title::first-line {
		color: rgb(var(--primary-color));
		letter-spacing: 0.24em;
		font-size: 0.71em;
		line-height: 0.3rem;
	}

	.title {
		/* Spacing */
		margin: 0;
		line-height: 0.85em;

		/* font properties */
		font-size: 1em;
		font-weight: 100;
		color: rgb(var(--text-color));
		font-family: var(--title-font);
		white-space: nowrap;

		/* due to font size difference, we need to add a little padding to center properly */
		padding-bottom: 5px;
	}
</style>
