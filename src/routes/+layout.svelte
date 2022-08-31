<script lang="ts">
	import 'normalize.css';
	import '../app.css';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ url } = data);

	$: urlString = url.toString();

	import Header from '$lib/components/header/Header.svelte';
	import NavItem from '$lib/components/header/NavItem.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	const pages = [
		{ name: 'Work', path: 'work' },
		{ name: 'Contact', path: 'contact' },
		{ name: 'About', path: 'about' },
	];
</script>

<svelte:head>
	<meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<Header>
	{#each pages as { name, path }}
		<NavItem {path}>{name}</NavItem>
	{/each}
</Header>

<main>
	<PageTransition url={urlString}>
		<slot />
	</PageTransition>
</main>

<Footer />

<style>
	main {
		min-height: 50vh;
	}
</style>
