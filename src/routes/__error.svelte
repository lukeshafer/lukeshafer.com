<script context="module" lang="ts">
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

<article class="card">
  <h2>Uh oh!!</h2>
  <pre><b>{title}</b></pre>
  <p>Click one of the menu buttons above to get back to safety!</p>
</article>

<style>
  article {
    text-align: center;
    width: fit-content;
    margin: auto;
  }

  pre {
    font-size: 2em;
  }
</style>
