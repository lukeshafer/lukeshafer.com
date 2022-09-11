<script lang="ts">
	import { page } from '$app/stores';
	import { isSidebarOpen } from '$lib/stores';

	export let path: string;
	// $: console.log($page.url.pathname);
</script>

<li class:active={$page.url.pathname === `/${path}/`}>
	<a
		class="styled-link"
		data-sveltekit-prefetch
		href="/{path}"
		on:click={() => {
			$isSidebarOpen = false;
		}}>
		<slot>
			{path}
		</slot>
	</a>
</li>

<style lang="postcss">
	a * {
		text-transform: capitalize;
	}

	a {
		color: inherit;
		transition: filter var(--link-transition-time);
	}

	li {
		display: block;
		font-weight: lighter;
		text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
		padding: 0.2em 0.8em;
		color: rgb(var(--text-color));
		border-radius: 0.5em;
		transition: background-color 200ms ease-out, box-shadow 100ms ease-out;

		&:hover {
			background-color: rgb(var(--background-base));
			box-shadow: 1px 1px 10px #00000033;
		}
	}

	.active {
		background-color: rgb(var(--secondary-color));
		box-shadow: 1px 1px 10px #00000033;
		color: rgb(var(--background-base));

		&:hover {
			background-color: rgba(var(--secondary-color), 0.8);
		}
	}
</style>
