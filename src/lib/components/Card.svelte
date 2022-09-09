<script lang="ts" context="module">
	export type CardEdge = 'top' | 'bottom' | 'left' | 'right' | '';
</script>

<script lang="ts">
	export let arrowPos: CardEdge = '';
	export let width = '';

	let wrapped = 'not-wrapped';
</script>

<section
	class="card {wrapped} {arrowPos !== '' ? `hasArrow ${arrowPos}` : ''}"
	style:width={width !== '' ? width : 'auto'}>
	<slot />
</section>

<style>
	.card {
		/* sizing */
		max-width: 80vw;
		width: fit-content;
		height: fit-content;
		box-sizing: border-box;

		/* positioning and layout */
		position: relative;
		padding: 1rem;

		/* appearance */
		border-radius: 1.2rem;
		background-color: rgb(var(--background-base));
		box-shadow: 1px 1px 10px #00000033;
	}

	/* Chat bubble arrow */
	.hasArrow::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		--triangle-height: 5rem;
		--triangle-width: calc(var(--triangle-height) / 1.732);
		--triangle-center-position: calc(50% - var(--triangle-height) / 2);
		--triangle-top-position: calc(-1 * var(--triangle-height) + 1px);
		/* above +1px prevents visible gaps due to rounding  */
		--triangle-base-half: var(--triangle-width) solid transparent;
		--triangle-main-shape: var(--triangle-height) solid
			rgb(var(--background-base));
	}

	.hasArrow.left::before {
		/* Arrow on left */
		top: var(--triangle-center-position);
		left: var(--triangle-top-position);
		border-top: var(--triangle-base-half);
		border-bottom: var(--triangle-base-half);
		border-right: var(--triangle-main-shape);
	}

	.hasArrow.top::before {
		/* Arrow on top */
		left: var(--triangle-center-position);
		top: var(--triangle-top-position);
		border-left: var(--triangle-base-half);
		border-right: var(--triangle-base-half);
		border-bottom: var(--triangle-main-shape);
	}
</style>
