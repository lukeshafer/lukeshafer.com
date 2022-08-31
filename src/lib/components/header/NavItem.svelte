<script lang="ts">
	import { page } from '$app/stores';
	import { isSidebarOpen } from '$lib/stores';

	export let path: string;
	// $: console.log($page.url.pathname);
</script>

<li class:active={$page.url.pathname === `/${path}/`}>
	<a
		sveltekit:prefetch
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

	li {
		display: block;
		font-size: 2em;
		font-weight: lighter;
		text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
		width: 3.5em;
		height: 1.3em;
		padding: 0.1em;
	}

	li:hover,
	.active {
		background-color: white;
		transition: background-color 50ms;
		border-radius: 0.1em;
	}

	li a {
		display: inline-block;
		color: rgb(var(--text-color));
		width: 100%;
		height: 100%;
		text-align: center;
	}
</style>
