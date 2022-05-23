<script lang="ts">
  import JobTile from '$lib/components/JobTile.svelte';
  import type { Job } from '$lib/components/JobTile.svelte';
  import { onMount } from 'svelte';
  // import { CSSColorProperties } from "$lib/components/CSSColorProperties.js"
  export let jobs: Job[];

  interface Colors {
    [key: string]: string;
  }

  const propertyNames = [
    '--primary-color',
    '--secondary-color',
    '--tertiary-color',
    '--accent-color',
    '--secondary-accent',
    '--tertiary-accent',
    '--secondary-text',
    '--background-base',
    '--highlight',
  ];
  let body: HTMLElement;

  const colorSchemes = [
    {
      background: '--tertiary-color',
      border: '--primary-color',
      text: '--secondary-text',
      date: '--highlight',
    },
    {
      background: '--secondary-accent',
      border: '--tertiary-accent',
      text: '--secondary-text',
      date: '--highlight',
    },
    {
      background: '--secondary-text',
      border: '--tertiary-color',
      text: '--text-color',
      date: '--primary-color',
    },
    {
      background: '--tertiary-accent',
      border: '--accent-color',
      text: '--tertiary-text',
      date: '--secondary-text',
    },
  ];
</script>

<svelte:body bind:this={body} />

<div class="job-grid">
  {#each jobs as job, index}
    <JobTile {job} colorScheme={colorSchemes[index % colorSchemes.length]} />
  {/each}
</div>

<style>
  div.job-grid {
    --repeat: auto-fit;
    display: grid;
    grid-template-columns: repeat(var(--repeat), minmax(18em, 1fr));
    grid-auto-rows: 8em;
    gap: 3em 1.5em;
    /* max-width: 50em; */
    /* margin: auto; */
    font-size: 1.3em;
  }

  @media screen and (min-width: 100em) {
    div.job-grid {
      --repeat: 3;
    }
  }
</style>
