<script lang="ts">
  import 'normalize.css';
  import '../app.css';

  import HeaderNavBar from '$lib/header/HeaderNavBar.svelte';
</script>

<svelte:head>
  <meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<HeaderNavBar />

<main>
  <slot />
</main>
