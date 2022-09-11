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
		><span>LukeShafer</span><span>Web Design</span></svelte:element>
</a>

<style lang="postcss">
	.wrapper {
		/* flex layout */
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: clamp(1.4rem, 2.2vw, 1.6rem);
		padding: 0.5rem;

		/* hover transition */
		transition: filter 50ms;
		text-decoration: none;
	}

	.wrapper:hover {
		/*filter: brightness(110%);*/
		background-color: rgb(var(--background-base));
		box-shadow: 1px 1px 10px #00000033;
		border-radius: 1rem;
	}

	.title {
		/*inner layout*/
		display: flex;
		flex-direction: column;
		justify-content: center;

		/* Spacing */
		margin: 0;
		line-height: 0.85em;
		height: 100%;

		/* font properties */
		font-weight: 100;
		color: rgb(var(--text-color));
		font-family: var(--title-font);
		white-space: nowrap;
		font-size: 1em;

		& > span {
			display: block;

			&:first-child {
				color: rgb(var(--primary-color));
				letter-spacing: 0.24em;
				font-size: 0.71em;
				line-height: 0.9rem;
			}

			&:last-child {
				font-size: 0.9em;
			}
		}
	}
</style>
