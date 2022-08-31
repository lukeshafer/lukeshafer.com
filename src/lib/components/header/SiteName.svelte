<script lang="ts">
	import Logo from '$lib/components/header/Logo.svelte';
	import BrushStroke from '$lib/assets/BrushStroke.svelte';
</script>

<a class="logo-container" sveltekit:prefetch href="/">
	<div class="brush-stroke">
		<BrushStroke color="rgb(var(--secondary-text))" />
	</div>
	<Logo
		title="Logo"
		width="10em"
		height="10em"
		lColor="rgb(var(--primary-color)"
		sColor="rgb(var(--secondary-color)" />
	<h1>LukeShafer<br />Web Design</h1>
</a>

<style>
	a.logo-container {
		display: flex;
		position: relative;
		flex-flow: row nowrap;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 2em;
		--padding-y: 1em;
		padding: var(--padding-y) var(--padding-x);
		/* background-image: url(./brush-stroke.svg); */
		background-size: auto 10.5em;
		background-repeat: no-repeat;
		background-position: 105% 50%;
		--brightness: 100%;
		filter: brightness(var(--brightness));
		font-size: 0.6em;
		transition: background-size 100ms, background-position 100ms;
	}

	.brush-stroke {
		position: absolute;
		height: 100%;
		width: 32rem;

		top: 0;
		right: 0;
	}

	a.logo-container > :global(*) {
		z-index: 1;
	}

	a.logo-container:hover {
		--brightness: 105%;
		background-size: auto 11em;
		background-position: 100% 50%;
	}

	h1::first-line {
		color: rgb(var(--primary-color));
		letter-spacing: 0.27em;
		font-size: 0.66em;
		line-height: 0.9em;
	}

	h1 {
		font-weight: 100;
		color: rgb(var(--text-color));
		font-size: 4em;
		line-height: 0.9em;
		padding-bottom: 0.25em;
		white-space: nowrap;
	}
</style>
