<script lang="ts">
	import SiteName from './SiteName.svelte';
	import { isSidebarOpen } from '$lib/stores';
</script>

<nav class={$isSidebarOpen ? 'active' : 'not-active'}>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	nav {
		padding-left: 10vw;
	}

	ul {
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
		font-size: 1em;
		gap: 1em;
	}

	@media screen and (max-width: 810px) {
		nav {
			z-index: 1;
			--font-size: 3;
			font-size: calc(var(--font-size) * 1em);
			position: absolute;
			--width: 10em;
			/* width: 0; */
			width: var(--width);
			right: 0;
			transform: translateX(15em);
			/* right: calc(-1 * var(--width)); */
			top: calc(var(--height) / var(--font-size));
			background: inherit;
			height: calc(100% - (var(--height) / var(--font-size)));
			transition: transform 400ms, width 400ms;
			padding: 0;
		}
		nav.active {
			transform: translateX(0);
		}
		nav ul {
			overflow: inherit;
			position: absolute;
			left: 0;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			width: 100%;
			height: 100%;
		}
	}
</style>
