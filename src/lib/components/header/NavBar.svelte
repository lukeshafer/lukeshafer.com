<script lang="ts">
	import { isSidebarOpen } from '$lib/stores';

	import { fly, fade } from 'svelte/transition';
	import { cubicIn, cubicOut, backInOut, elasticIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	let mobileWidth: MediaQueryList;
	let prefersReducedMotion: boolean = false;
	let x: number;

	onMount(() => {
		mobileWidth = window.matchMedia('(max-width:810px)');
		prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion)'
		).matches;
	});

	let navTransition = prefersReducedMotion ? fade : fly;
</script>

{#if !mobileWidth?.matches || $isSidebarOpen}
	<nav
		bind:clientWidth={x}
		class={$isSidebarOpen ? 'active' : 'not-active'}
		transition:navTransition={{ easing: cubicOut, x: 200, duration: 300 }}>
		<ul>
			<slot />
		</ul>
	</nav>
{/if}

{#if mobileWidth?.matches && $isSidebarOpen}
	<div class="overlay" on:click={() => ($isSidebarOpen = false)} />
{/if}

<style>
	nav {
		font-size: clamp(0.8rem, 1.3vw, 1rem);
	}

	ul {
		display: flex;
		justify-content: flex-start;
		flex-flow: row nowrap;
		gap: clamp(1rem, 2vw, 2rem);
	}

	@media screen and (max-width: 810px) {
		nav {
			/* Nav sizing */
			font-size: 1.8rem;
			--nav-width: 20rem;
			width: var(--nav-width);

			/* internal layout */
			padding: 6rem 1rem;
			height: 100%;
			box-sizing: border-box;

			/* Nav sidebar position */
			z-index: 2;
			position: absolute;
			top: 0;
			right: 0;

			/* background will match the header */
			background: inherit;
		}

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.2);
			z-index: 1;
		}

		nav ul {
			/* positioning */
			overflow: inherit;
			/* position: absolute; */
			left: 0;

			/* flex layout */
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			gap: 1.5rem;

			/* sizing */
			width: 100%;
			height: 100%;
		}
	}
</style>
