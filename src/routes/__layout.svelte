<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
  import 'normalize.css';
  import '../app.css';
  import PageTransition from '$lib/components/PageTransition.svelte';

  export let url: string;

  import HeaderNavBar from '$lib/components/header/HeaderNavBar.svelte';
</script>

<svelte:head>
  <meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<HeaderNavBar>
  <!-- TODO: use slots for this -->
</HeaderNavBar>

<main>
  <PageTransition {url}>
    <slot />
  </PageTransition>
</main>
