<script lang="ts" context="module">
  export type Job = {
    title: string;
    employer: string;
    website: string;
    dates: string;
    description: string;
    skills: string[];
  };
</script>

<script lang="ts">
  import Logo from '$lib/assets/Logo.svelte';
  import { afterUpdate, onMount, tick } from 'svelte';

  interface JobColorScheme {
    background: string;
    border: string;
    text: string;
    date: string;
  }

  export let job: Job;
  export let colorScheme: JobColorScheme;

  let jobTileElement: HTMLElement;
  let employerTextElement: HTMLElement;
  let jobTitleElement: HTMLElement;
  let isCardForward = true;
  let faceDirection: string;
  $: faceDirection = isCardForward ? 'front' : 'back';
  let employerFont = 1;
  let jobTitleFont = 0.7;
  let visibility = 'hidden';

  const fitFontToContainer = async (element: HTMLElement) => {
    let count = 0;
    let style = window.getComputedStyle(element);
    let fontSize = style.getPropertyValue('font-size');

    while (element.scrollWidth > element.clientWidth) {}
  };

  onMount(async () => {
    let count = 0;
    while (
      employerTextElement.scrollWidth > employerTextElement.clientWidth &&
      count < 100
    ) {
      employerFont -= 0.02;
      await tick();
      count++;
    }
    // TODO: make while loop above a function that takes in the element and font
    while (
      jobTitleElement.scrollWidth > jobTitleElement.clientWidth &&
      count < 100
    ) {
      jobTitleFont -= 0.02;
      await tick();
      count++;
    }
    visibility = 'visible';
  });
</script>

<div
  class="job-tile {faceDirection}"
  bind:this={jobTileElement}
  on:click={() => (isCardForward = !isCardForward)}
  style:--job-background="var({colorScheme.background})"
  style:--job-border="var({colorScheme.border})"
  style:--job-text="var({colorScheme.text})"
  style:--job-date="var({colorScheme.date})">
  <div bind:this={employerTextElement} class="employer-wrapper">
    <h3 class="employer" style:font-size={`${employerFont}em`} style:visibility>
      {job.employer}
    </h3>
  </div>
  <p
    class="job-title"
    bind:this={jobTitleElement}
    style:font-size={`${jobTitleFont}em`}>
    {job.title}
  </p>
  <p class="dates"><time>{job.dates}</time></p>
  <span>i</span>
  <div class="tile-back">
    <p class="job-description">{job.description}</p>
  </div>
</div>

<style>
  div.job-tile {
    position: relative;
    border: 0.25em solid rgb(var(--job-border));
    outline: 2px solid rgba(var(--job-background), 70%);
    background-color: rgba(var(--job-background), 70%);
    color: rgb(var(--job-text));
    text-align: center;
    --width: 8em;
    width: var(--width);
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 2.25em;
    white-space: nowrap;
    --padding: 0.2em;
    padding: var(--padding);
    text-shadow: 1px 1px 0.1em rgba(70, 70, 70, 70%);
    transition: all 100ms ease-out, transform 400ms ease-in-out;
    transform-style: preserve-3d;
  }

  div.back {
    transform: rotateY(180deg);
  }

  div.tile-back {
    transform: rotateY(180deg);
    background-color: rgb(var(--job-border));
    backface-visibility: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  div.job-tile:hover {
    --grow-amt: 0.1em;
    font-size: 2.35em;
    margin: calc(var(--grow-amt) * -1) auto;
    cursor: pointer;
  }

  div.job-tile:hover span {
    filter: contrast(100%);
  }

  div.job-tile span {
    /* visibility: hidden; */
    position: absolute;
    right: 0.1em;
    bottom: 0.1em;
    font-size: 0.3em;
    display: inline-block;
    width: 1em;
    height: 1em;
    color: rgb(var(--job-text));
    border: 1px solid rgb(var(--job-text));
    border-radius: 50%;
    filter: contrast(20%);
  }

  div.employer-wrapper {
    height: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3,
  p {
    backface-visibility: hidden;
  }

  h3 {
    margin: 0;
  }

  p {
    font-family: var(--link-font);
    font-size: 0.7em;
    margin: 0;
  }

  p.dates {
    color: rgb(var(--job-date));
    font-size: 0.6em;
  }

  div.tile-back p {
    font-family: var(--body-font);
    font-size: 0.5em;
    color: rgb(var(--secondary-text));
    white-space: normal;
  }
</style>
