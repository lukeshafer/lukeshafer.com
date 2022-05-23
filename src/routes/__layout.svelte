<script lang="ts">
  import 'normalize.css';
  import '../app.css';

  import HeaderNavBar from '$lib/header/HeaderNavBar.svelte';
</script>

<HeaderNavBar />

<main>
  <slot />
</main>
