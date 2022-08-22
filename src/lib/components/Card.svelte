<script lang="ts" context="module">
  export type CardEdge = 'top' | 'bottom' | 'left' | 'right' | '';
</script>

<script lang="ts">
  export let arrowPos: CardEdge = '';

  let wrapped = 'not-wrapped';
</script>

<article class="card {wrapped} {arrowPos !== '' ? `hasArrow ${arrowPos}` : ''}">
  <slot><p>Oh no! Looks like something didn't load correctly!</p></slot>
</article>

<style>
  article {
    width: 25em;
    max-width: 80vw;
  }

  /* Chat bubble arrow */
  article.hasArrow::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    --triangle-height: 3em;
    --triangle-width: calc(var(--triangle-height) / 1.732);
    --triangle-center-position: calc(50% - var(--triangle-height) / 2);
    --triangle-top-position: calc(-1 * var(--triangle-height) + 1px);
    /* above +1px prevents visible gaps due to rounding  */
    --triangle-base-half: var(--triangle-width) solid transparent;
    --triangle-main-shape: var(--triangle-height) solid
      rgb(var(--background-base));
  }

  article.hasArrow.left::before {
    /* Arrow on left */
    top: var(--triangle-center-position);
    left: var(--triangle-top-position);
    border-top: var(--triangle-base-half);
    border-bottom: var(--triangle-base-half);
    border-right: var(--triangle-main-shape);
  }

  article.hasArrow.top::before {
    /* Arrow on top */
    left: var(--triangle-center-position);
    top: var(--triangle-top-position);
    border-left: var(--triangle-base-half);
    border-right: var(--triangle-base-half);
    border-bottom: var(--triangle-main-shape);
  }

  p {
    font-size: 1em;
  }

  .btn {
    display: inline-block;
    position: absolute;
    /* font-size: 1.2em; */
  }
</style>
