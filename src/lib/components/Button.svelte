<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: MouseEvent }>();

	export let href: string = '/';
	export let title: string;
	export let theme: 'default' | 'outline' | 'accent' | 'accent-outline' =
		'default';
	export let type: 'link' | 'submit' | 'button' = 'link';
	export let download = false;
</script>

{#if type === 'link'}
	{#if download}
		<a {href} class="btn {theme}" {title} download>
			<slot />
		</a>
	{:else}
		<a {href} class="btn {theme}" {title}>
			<slot />
		</a>
	{/if}
{:else if type === 'submit'}
	<button type="submit" class="btn {theme}"><slot /></button>
{:else if type === 'button'}
	<button on:click={(event) => dispatch('click', event)} class="btn {theme}"
		><slot /></button>
{/if}

<style>
	.btn {
		/* button layout */
		display: inline-block;
		padding: 0.5em 0.8em;
		box-sizing: border-box;
		height: fit-content;
		width: fit-content;

		/* text formatting */
		font-family: var(--link-font);
		text-decoration: none;
		text-transform: uppercase;
		text-shadow: 0.03em 0.03em rgba(var(--background-contrast), 25%);

		/* button appearance */
		border-radius: 0.7em;
		box-shadow: 1px 1px 3px #00000033;
		border: 2px solid var(--button-color);
		background-color: var(--button-color);

		transition: filter var(--link-transition-time);
	}

	.btn:hover {
		filter: brightness(1.1);
		cursor: pointer;
		text-decoration: underline;
	}

	/* COLOR THEMES */
	.default,
	.outline {
		--button-color: rgb(var(--primary-color));
	}

	.default,
	.accent {
		color: rgb(var(--background-base));
	}

	.outline {
		color: rgb(var(--text-color));
	}

	.accent-outline {
		color: rgb(var(--secondary-accent));
	}

	.outline,
	.accent-outline {
		background-color: transparent;
	}

	.accent,
	.accent-outline {
		--button-color: rgb(var(--accent-color));
	}
</style>
