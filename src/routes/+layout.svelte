<script lang="ts">
	import 'normalize.css';
	import '@fontsource/jetbrains-mono/variable.css';
	import '@fontsource/nunito-sans/400.css';
	import '@fontsource/nunito-sans/600.css';
	import '@fontsource/assistant/variable.css';
	import '@fontsource/montserrat/variable.css';

	import '../app.css';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: url = data.url.toString();

	import Header from '$lib/components/header/Header.svelte';
	import SiteName from '$lib/components/header/SiteName.svelte';
	import Hamburger from '$lib/components/header/Hamburger.svelte';
	import NavBar from '$lib/components/header/NavBar.svelte';
	import NavItem from '$lib/components/header/NavItem.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	const pages = [
		{ name: 'Services', path: 'services' },
		{ name: 'Portfolio', path: 'work' },
		{ name: 'Contact', path: 'contact' },
		{ name: 'About', path: 'about' },
	];
</script>

<svelte:head>
	<meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<div class="site-wrapper">
	<Header>
		<SiteName />
		<Hamburger />
		<NavBar>
			{#each pages as { name, path }}
				<NavItem {path}>{name}</NavItem>
			{/each}
		</NavBar>
	</Header>

	<main>
		<PageTransition {url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.site-wrapper {
		display: grid;
		min-height: 100vh;
		grid-template-rows: min-content 1fr min-content;
		align-items: center;
	}
</style>
