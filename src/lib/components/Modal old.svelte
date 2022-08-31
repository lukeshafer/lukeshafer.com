<script lang="ts">
	import A11yDialog from 'a11y-dialog';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let dialogEl: HTMLDivElement;
	let dialog: A11yDialog;
	let shown: Boolean;

	onMount(() => {
		dialog = new A11yDialog(dialogEl);
	});

	// $: console.log(shown);

	export const show = () => {
		dialog.show();
		shown = dialog.shown;
	};

	const hide = () => {
		shown = false;
	};
</script>

<svelte:body style:overflow-y="hidden !important" />

<div bind:this={dialogEl} aria-hidden="true" class="dialog-container">
	<div data-a11y-dialog-hide class="dialog-overlay" on:click={hide} />
	<div role="document">
		<button
			class="btn"
			type="button"
			data-a11y-dialog-hide
			aria-label="Close dialog"
			on:click={hide}>
			<span />
			<span />
		</button>
		<div class="dialog-content">
			<slot />
		</div>
	</div>
</div>

{#if shown}
	<style>
		:global(body) {
			background: pink;
		}
	</style>
{/if}

<style>
	@keyframes fade-in {
		0% {
			display: flex;
			opacity: 0;
		}
		99% {
			display: flex;
			opacity: 1;
		}
		100% {
			display: flex;
		}
	}

	@keyframes fade-out {
		0% {
			display: flex;
			opacity: 1;
		}
		99% {
			display: flex;
			opacity: 0;
		}
		100% {
			display: none;
		}
	}
	.dialog-container,
	.dialog-overlay {
		font-size: 1rem;
		z-index: 2;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/* animation: fade-in 200ms; */
	}
	.dialog-container {
		display: flex;
		visibility: visible;
		transition: visibility 500ms;
		justify-content: center;
	}

	div[role='document'] {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		padding: 1em;

		/* margin: 1em; */
		z-index: 3;
		background: rgb(var(--secondary-text));

		box-sizing: border-box;
		width: 50em;
		max-width: 100%;
		/* height: fit-content; */
		box-shadow: 0.5em 0.5em 3em black;
	}

	.dialog-container[aria-hidden='true'] {
		visibility: hidden;
		/* animation: fade-out 200ms forwards; */
	}

	.dialog-overlay {
		z-index: 2;
		background-color: rgba(43, 46, 56, 0.5);
	}

	.dialog-content {
		margin: 1em auto;
		z-index: 2;
		font-size: 1.4em;
		position: relative;
		width: 80%;
		padding: 0 5%;
		height: 90%;
		overflow-y: auto;
		background-color: rgb(var(--background-base));
		border: 1px solid rgb(var(--tertiary-accent));
	}

	button {
		position: absolute;
		left: 0.5em;
		top: 0.5em;
		margin: 0;
		display: flex;
		font-size: 0.7em;
		flex-direction: column;
		justify-content: center;
		justify-self: left;
		border-style: none;
		--line-spacing: 1em;
		gap: var(--line-spacing);
		padding: 0.5em;
		background-color: rgb(var(--accent-color));
	}

	button span {
		display: block;
		width: 2em;
		text-align: center;
		--line-height: 0.3em;
		--translate-amount: calc((var(--line-spacing) + var(--line-height)) / 2);
		height: var(--line-height);
		position: relative;
		background-color: rgb(var(--background-base));
		transform-origin: center;
	}

	button span:first-child {
		transform: translateY(var(--translate-amount)) rotate(0.125turn);
	}

	button span:last-child {
		transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
	}

	/* Everything below styles the inner content */
	.dialog-container :global(h1) {
		font-size: 1.5em;
		text-align: center;
		color: rgb(var(--secondary-accent));
	}

	.dialog-container :global(h2) {
		margin-bottom: 0;
		font-size: 1.4em;
		color: rgb(var(--accent-color));
	}

	.dialog-container :global(p) {
		font-family: inherit;
		color: rgb(var(--background-contrast));
	}

	.dialog-container :global(img) {
		display: block;
		margin: auto;
		width: 20em;
		color: rgb(var(--primary-color));
	}

	.dialog-container :global(a) {
		font-family: var(--body-font);
		text-transform: none;
		text-decoration: underline;
		color: rgb(var(--accent-color));
	}

	.dialog-container :global(ul) {
		list-style: square;
		margin: 10px;
		font-size: 1em;
		padding-left: 0;
	}

	.dialog-container :global(li) {
		margin: 1em;
	}
</style>
