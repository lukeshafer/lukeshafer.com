<script lang="ts">
	import { isSidebarOpen } from '$lib/stores';

	import { fly } from 'svelte/transition';
	import { backInOut, elasticIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	let mobileWidth: MediaQueryList;

	onMount(() => (mobileWidth = window.matchMedia('(max-width:810px)')));
</script>

{#if !mobileWidth?.matches || $isSidebarOpen}
	<nav
		class={$isSidebarOpen ? 'active' : 'not-active'}
		transition:fly={{ easing: backInOut, x: 50 }}>
		<ul>
			<slot />
		</ul>
	</nav>
{/if}
<div class="overlay" on:click={() => ($isSidebarOpen = false)} />

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

	.overlay {
		display: none;
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
			right: calc(var(--nav-width) * -1); /* negative width */

			/* Initial off-screen position */
			/* transform: translateX(15em); */
			transition: transform 400ms, width 400ms;

			/* background will match the header */
			background: inherit;

			/* Internal layout */
			/* padding: 0; */
		}
		nav.active {
			/* Active nav comes on screen */
			transform: translateX(calc(var(--nav-width) * -1));
		}

		.active + .overlay {
			display: block;
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
