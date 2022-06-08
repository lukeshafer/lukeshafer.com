<script context="module" lang="ts">
  import Card from '$lib/components/Card.svelte';
  export function load({ error, status }: any) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  export let title: any;
</script>

<div class="card-wrapper">
  <Card>
    <h2>Uh oh!!</h2>
    <pre><b>{title}</b></pre>
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
