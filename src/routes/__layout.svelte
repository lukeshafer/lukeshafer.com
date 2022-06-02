<script lang="ts">
  import 'normalize.css';
  import '../app.css';

  import HeaderNavBar from '$lib/components/header/HeaderNavBar.svelte';
</script>

<svelte:head>
  <meta name="theme-color" content="rgb(var(--primary-color))" />
</svelte:head>

<HeaderNavBar>
  <!-- TODO: use slots for this -->
</HeaderNavBar>

<main>
  <slot />
</main>
