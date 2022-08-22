<script lang="ts">
  import Modal from '../Modal.svelte';
  import type { JobComponent } from '$data/projects/jobs/_jobs';
  import type A11yDialog from 'a11y-dialog';

  interface JobColorScheme {
    background: string;
    border: string;
    text: string;
    date: string;
  }

  export let job: JobComponent;
  export let colorScheme: JobColorScheme;

  let isCardForward = true;
  let faceDirection: string;
  $: faceDirection = isCardForward ? 'front' : 'back';

  let openModal: () => A11yDialog;

  const fitFont = (
    str: string,
    maxChar: number,
    preferredSize: number,
    fontRatio: number
  ) => {
    let size: number;
    if (str.length <= maxChar) {
      size = preferredSize;
    } else {
      let ratio = maxChar / str.length;
      if (ratio / fontRatio < 1) ratio /= fontRatio;
      size = preferredSize * ratio;
    }
    return size;
  };
</script>

<button
  class="job-tile {faceDirection}"
  on:click={openModal}
  style:--job-background="var({colorScheme.background})"
  style:--job-border="var({colorScheme.border})"
  style:--job-text="var({colorScheme.text})"
  style:--job-date="var({colorScheme.date})"
  tabindex="0">
  <div class="employer-wrapper">
    <h3
      class="employer"
      style:font-size={`${fitFont(job.metadata.employer, 9, 1, 0.85)}em`}>
      {job.metadata.employer}
    </h3>
  </div>
  <p
    class="job-title"
    style:font-size={`${fitFont(job.metadata.title, 25, 0.7, 0.5)}em`}>
    {job.metadata.title}
  </p>
  <p class="dates"><time>{job.metadata.dates}</time></p>
</button>

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
  .job-tile {
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
    /* white-space: nowrap; */
    padding: 0.2em;
    text-shadow: 1px 1px 0.1em rgba(70, 70, 70, 70%);
    transition: transform 100ms ease-out;
    transform-style: preserve-3d;
  }

  .job-tile:focus {
    outline: 2px solid #0099ff;
    transform: scale(1.05);
  }

  .job-tile:hover {
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
    color: rgb(var(--job-text));
  }

  p.dates {
    color: rgb(var(--job-date));
    font-size: 0.6em;
  }
</style>
