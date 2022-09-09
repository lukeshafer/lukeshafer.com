<script lang="ts">
	import { isSidebarOpen } from '$lib/stores';
</script>

<button
	class="hamburger {$isSidebarOpen ? 'active' : 'not-active'}"
	on:click={() => ($isSidebarOpen = !$isSidebarOpen)}
	aria-pressed={$isSidebarOpen}
	hidden>
	<div class="visibly-hidden">Navigation Menu</div>
	<span />
	<span />
	<span />
</button>

<style>
	.hamburger {
		/* sizing */
		--line-spacing: 4px;
		--line-height: 3px;
		width: calc(var(--line-spacing) * 4 + var(--line-height) * 5);

		/* inner layout */
		flex-direction: column;
		place-content: center;
		align-items: center;
		border-style: none;
		gap: var(--line-spacing);
		padding: 0;
		background-color: transparent;
		z-index: 3;
	}

	.hamburger:hover {
		cursor: pointer;
	}
	.hamburger:hover span {
		filter: brightness(150%);
	}

	.hamburger span {
		/* hamburger lines */

		/* line size */
		width: 100%;
		height: var(--line-height);
		display: inline-block;

		/* line layout and color */
		text-align: center;
		position: relative;
		background-color: rgb(var(--text-color));

		/* on-click animation */
		--translate-amount: calc(var(--line-spacing) + var(--line-height));
		transform-origin: center;
		transition: transform 250ms;
	}

	.hamburger.active span:first-of-type {
		/* first hamburger line */
		transform: translateY(var(--translate-amount)) rotate(0.125turn);
	}

	.hamburger.active span:last-of-type {
		/* third hamburger line */
		transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
	}

	.hamburger.active span {
		/* shrink and hide the middle line */
		transform: scale(0, 1);
	}

	@media screen and (max-width: 810px) {
		button.hamburger {
			/* hamburger should only be visible on mobile */
			display: flex;
		}
	}
</style>
