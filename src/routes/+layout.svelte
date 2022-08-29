<script lang="ts">
	import 'normalize.css';
	import '../app.css';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ url } = data);

	$: urlString = url.toString();

	import HeaderNavBar from '$lib/components/header/HeaderNavBar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<HeaderNavBar>
	<!-- TODO: use slots for this -->
</HeaderNavBar>

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
