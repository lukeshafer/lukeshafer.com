<script lang="ts">
  import A11yDialog from 'a11y-dialog';
  import { onMount } from 'svelte';
  let dialogEl: HTMLDivElement;
  let dialog: A11yDialog;
  let str: string;

  onMount(() => {
    dialog = new A11yDialog(dialogEl);
  });

  export const show = () => {
    dialog.show();
  };
</script>

<div bind:this={dialogEl} aria-hidden="true" class="dialog-container">
  <div data-a11y-dialog-hide class="dialog-overlay" />
  <div role="document">
    <button
      class="btn"
      type="button"
      data-a11y-dialog-hide
      aria-label="Close dialog">
      <span />
      <span />
    </button>
    <h1 id="dialog-title">
      <slot name="title" />
    </h1>
    <div class="dialog-content">
      <slot />
    </div>
  </div>
</div>

<style>
  @keyframes expand {
    0% {
      margin-left: 100em;
      margin-right: 100em;
      margin-top: 100em;
      margin-bottom: 100em;
      /* height: 0; */
    }
    50% {
      margin-left: 100em;
      margin-right: 100em;
      margin-top: 2em;
      margin-bottom: 2em;
    }
    100% {
      margin-left: 2em;
      margin-right: 2em;
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .dialog-container,
  .dialog-overlay {
    font-size: 1rem;
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: fade-in 200ms;
  }
  .dialog-container {
    display: flex;
    justify-content: center;
  }

  div[role='document'] {
    position: relative;
    padding: 1em;
    margin: 2em;
    z-index: 3;
    background: rgb(var(--secondary-text));
    max-width: 50em;
    width: 85vw;
    height: fit-content;
    box-shadow: 0.5em 0.5em 3em black;
  }

  .dialog-container[aria-hidden='true'] {
    display: none;
  }

  .dialog-overlay {
    z-index: 2;
    background-color: rgba(43, 46, 56, 0.5);
  }

  .dialog-content {
    margin: 1em auto;
    z-index: 2;
    font-size: 1.4em;
    position: relative;
    width: 80%;
    padding: 0 5%;
    height: 68vh;
    overflow-y: auto;
    background-color: rgb(var(--background-base));
    border: 1px solid rgb(var(--tertiary-accent));
  }

  button {
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    margin: 0;
    display: flex;
    font-size: 0.7em;
    flex-direction: column;
    justify-content: center;
    justify-self: left;
    border-style: none;
    --line-spacing: 1em;
    gap: var(--line-spacing);
    padding: 0.5em;
    background-color: rgb(var(--accent-color));
  }

  button span {
    display: block;
    width: 2em;
    text-align: center;
    --line-height: 0.3em;
    --translate-amount: calc((var(--line-spacing) + var(--line-height)) / 2);
    height: var(--line-height);
    position: relative;
    background-color: rgb(var(--background-base));
    transform-origin: center;
  }

  button span:first-child {
    transform: translateY(var(--translate-amount)) rotate(0.125turn);
  }

  button span:last-child {
    transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
  }

  /* Everything below styles the inner content */
  .dialog-container :global(h1) {
    font-size: 1.5em;
    text-align: left;
    margin: 0;
    margin-left: 1em;
    color: rgb(var(--secondary-accent));
  }

  .dialog-container :global(h2) {
    margin-bottom: 0;
    font-size: 1.4em;
    color: rgb(var(--accent-color));
  }

  .dialog-container :global(p) {
    font-family: inherit;
  }

  .dialog-container :global(img) {
    display: block;
    margin: auto;
    width: 20em;
    color: rgb(var(--primary-color));
  }

  .dialog-container :global(a) {
    font-family: var(--body-font);
    text-transform: none;
    text-decoration: underline;
    color: rgb(var(--accent-color));
  }

  .dialog-container :global(ul) {
    list-style: square;
    margin: 10px;
    font-size: 1em;
    padding-left: 0;
  }

  .dialog-container :global(li) {
    margin: 1em;
  }
</style>
