<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  let shown: boolean;
  let width: number;

  const handleKeyPress = (evt: KeyboardEvent) => {
    if (evt.repeat || !shown) return;

    if (evt.key === 'Escape') {
      hide();
    }
  };

  export const show = () => {
    shown = true;
  };

  const hide = () => {
    shown = false;
  };
</script>

<svelte:window bind:innerWidth={width} on:keydown={handleKeyPress} />

{#if shown}
  <style>
    :root {
      overflow-y: hidden;
    }
  </style>
  <div aria-modal class="dialog-container">
    <div
      data-a11y-dialog-hide
      class="dialog-overlay"
      on:click={hide}
      transition:fade={{ duration: 300 }} />
    <div
      role="document"
      transition:fly={{
        duration: 500,
        x: width / 3,
        y: 0,
        opacity: 0.0,
        easing: quintOut,
      }}>
      <div class="dialog-content">
        <slot />
      </div>
      <button
        class="btn"
        type="button"
        data-a11y-dialog-hide
        aria-label="Close dialog"
        on:click={hide}>
        <span />
        <span />
      </button>
    </div>
  </div>
{/if}

<style>
  .dialog-container,
  .dialog-overlay {
    font-size: 1rem;
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* animation: fade-in 200ms; */
  }
  .dialog-container {
    display: flex;
    visibility: visible;
    transition: visibility 500ms;
    justify-content: center;
  }

  div[role='document'] {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    /* padding: 1em; */

    /* margin: 1em; */
    z-index: 3;
    /* background: rgb(var(--secondary-text)); */

    box-sizing: border-box;
    width: 50em;
    max-width: 100%;
    /* height: fit-content; */
  }

  .dialog-overlay {
    /* z-index: 2; */
    background-color: rgba(43, 46, 56, 0.5);
  }

  .dialog-content {
    /* margin: 1em auto; */
    /* z-index: 2; */
    display: flex;
    flex-flow: column;
    align-items: center;

    font-size: 1em;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 3em;
    height: 100%;
    overflow-y: auto;
    background-color: rgb(var(--background-base));
    border: 1px solid rgb(var(--tertiary-accent));
    box-shadow: 0.5em 0.5em 3em black;
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
    font-size: 2.5em;
    text-align: left;
    width: 100%;
    max-width: 40rem;
    white-space: normal;
    /* word-break: break-all; */
    color: rgb(var(--secondary-accent));
  }

  .dialog-container :global(h2) {
    margin-bottom: 0;
    font-size: 1.9em;
    text-align: left;
    width: 100%;
    max-width: 40rem;
    color: rgb(var(--tertiary-color));
  }

  .dialog-container :global(p) {
    font-family: inherit;
    color: rgb(var(--background-contrast));
    max-width: 40rem;
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
    color: rgb(var(--secondary-accent));
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
