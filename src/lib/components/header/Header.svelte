<script lang="ts">
	import NavBar from './NavBar.svelte';

	import SiteName from './SiteName.svelte';
	import { isSidebarOpen } from '$lib/stores';
</script>

<header>
	<SiteName />

	<button
		class="hamburger {$isSidebarOpen ? 'active' : 'not-active'}"
		on:click={() => ($isSidebarOpen = !$isSidebarOpen)}
		hidden>
		<span />
		<span />
		<div class="visibly-hidden">Navigation Menu</div>
		<span />
	</button>

	<NavBar><slot /></NavBar>
</header>

<style>
	header {
		background-color: rgba(var(--background-base), 0.52);
		--height: 10em;
		height: var(--height);
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 10em;
		align-items: center;
		--padding-x: 5em;
		padding-right: var(--padding-x);
		/* font-size: min(1rem, 1.4vw); */
		font-size: clamp(min(2.6vw, 0.7rem), 1.4vw, 1rem);
	}

	button.hamburger {
		flex-direction: column;
		justify-content: center;
		border-style: none;
		--line-spacing: 0.5em;
		gap: var(--line-spacing);
		padding: var(--line-spacing);
		background-color: transparent;
		margin-left: auto;
	}

	button.hamburger:hover {
		cursor: pointer;
	}
	button.hamburger:hover span {
		filter: brightness(150%);
		/* font-size: 2em; */
	}

	button.hamburger span {
		display: block;
		width: 3.2em;
		text-align: center;
		--line-height: 0.3em;
		--translate-amount: calc(var(--line-spacing) + var(--line-height));
		height: var(--line-height);
		position: relative;
		background-color: rgb(var(--text-color));
		transform-origin: center;
		transition: transform 250ms;
	}

	button.hamburger.active span:first-child {
		transform: translateY(var(--translate-amount)) rotate(0.125turn);
	}

	button.hamburger.active span:last-child {
		transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
	}

	button.hamburger.active span {
		transform: scale(0, 1);
	}

	@media screen and (max-width: 810px) {
		header {
			background-color: rgba(var(--background-base), 0.8);
		}

		button.hamburger {
			display: flex;
		}
	}
</style>
