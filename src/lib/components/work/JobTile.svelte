<script lang="ts">
  import Modal from '../Modal.svelte';
  import type { JobComponent } from '$data/jobs/_jobs';
  import type A11yDialog from 'a11y-dialog';
  import { onMount, tick } from 'svelte';

  interface JobColorScheme {
    background: string;
    border: string;
    text: string;
    date: string;
  }

  export let job: JobComponent;
  export let colorScheme: JobColorScheme;

  let employerTextElement: HTMLElement;
  let jobTitleElement: HTMLElement;
  let isCardForward = true;
  let faceDirection: string;
  $: faceDirection = isCardForward ? 'front' : 'back';
  let employerFont = 1;
  let jobTitleFont = 0.7;
  let visibility = 'hidden';

  let openModal: () => A11yDialog;

  // TODO: finish this function
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
  on:click={openModal}
  style:--job-background="var({colorScheme.background})"
  style:--job-border="var({colorScheme.border})"
  style:--job-text="var({colorScheme.text})"
  style:--job-date="var({colorScheme.date})">
  <div bind:this={employerTextElement} class="employer-wrapper">
    <h3 class="employer" style:font-size={`${employerFont}em`} style:visibility>
      {job.metadata.employer}
    </h3>
  </div>
  <p
    class="job-title"
    bind:this={jobTitleElement}
    style:font-size={`${jobTitleFont}em`}>
    {job.metadata.title}
  </p>
  <p class="dates"><time>{job.metadata.dates}</time></p>
</div>

<Modal bind:show={openModal}>
  <h1 slot="title">
    <a href={job.metadata.website} target="_blank">{job.metadata.employer}</a>
  </h1>
  <h2><strong>{job.metadata.title}</strong></h2>
  <p style="font-size: 0.9em;text-align: center;color:rgb(var(--accent-color))">
    {job.metadata.dates}
  </p>
  <svelte:component this={job.component} />
</Modal>

<style>
  div.job-tile {
    position: relative;
    border: 0.25em solid rgb(var(--job-border));
    outline: 2px solid rgba(var(--job-background), 70%);
    background-color: rgba(var(--job-background), 70%);
    color: rgb(var(--job-text));
    text-align: center;
    width: 8em;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 2.25em;
    white-space: nowrap;
    padding: 0.2em;
    text-shadow: 1px 1px 0.1em rgba(70, 70, 70, 70%);
    transition: transform 100ms ease-out;
    transform-style: preserve-3d;
  }

  div.job-tile:hover {
    transform: scale(1.05);
    cursor: pointer;
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
</style>
