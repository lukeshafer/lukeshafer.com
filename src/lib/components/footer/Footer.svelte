<script lang="ts">
  //
</script>

<footer>
  <p>
    © Luke Shafer 2022. Built with ♥ using <a
      target="_blank"
      href="https://kit.svelte.dev/">SvelteKit</a
    >. Hosted on
    <a target="_blank" href="https://pages.cloudflare.com/"
      >Cloudflare Pages.</a>
  </p>
</footer>

<style>
  footer {
    box-sizing: border-box;
    width: 100%;
    height: 10rem;

    background-color: rgb(var(--secondary-color));

    padding: 1rem;
    color: rgb(240, 253, 255);

    display: grid;
    place-items: end center;
  }

  p {
    color: rgb(240, 253, 255);
  }

  a {
    font-family: inherit;
    color: rgb(var(--highlight));
    text-decoration: underline;
    text-transform: none;
  }

  a:hover {
    filter: brightness(1.2);
  }
</style>
