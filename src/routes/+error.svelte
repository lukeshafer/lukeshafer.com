<script lang="ts">
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
  const status = $page.status;
  const message = $page.error?.message;
</script>

<div class="card-wrapper">
  <Card>
    <h2>Uh oh!!</h2>
    <pre><b>{status}</b>: {message}</pre>
    <p>Click one of the menu buttons above to get back to safety!</p>
  </Card>
</div>

<style>
  .card-wrapper {
    text-align: center;
    width: fit-content;
    margin: auto;
  }

  pre {
    font-size: 1.4em;
    white-space: normal;
  }
</style>
