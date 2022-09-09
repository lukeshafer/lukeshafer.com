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

<style>
	a * {
		text-transform: capitalize;
	}

	a {
		color: inherit;
		transition: opacity var(--link-transition-time),
			text-decoration-thickness 100ms cubic-bezier(0.17, 0.67, 0.5, 1.5);
		text-decoration: underline;
		text-decoration-color: transparent;
		text-decoration-thickness: 0px;
	}

	li {
		display: block;
		font-weight: lighter;
		text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
		padding: 0.2em 0.8em;
		color: rgb(var(--text-color));
	}

	.active {
		background-color: rgb(var(--secondary-color));
		transition: background-color 200ms;
		border-radius: 0.5em;
		box-shadow: 1px 1px 10px #00000033;
		color: rgb(var(--background-base));
	}

	li:hover a {
		opacity: 0.9;
		text-decoration: underline;
		text-decoration-color: default;
		text-decoration-thickness: 2px;
	}
</style>
