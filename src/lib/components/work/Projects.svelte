<script lang="ts">
  import ProjectTile from '$lib/components/work/ProjectTile.svelte';
  import type { Project } from '$lib/components/work/ProjectTile.svelte';
  export let projects: Project[];
</script>

<div class="project-grid">
  {#each projects as project}
    <ProjectTile {project} />
  {/each}
</div>

<style>
  div.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-auto-rows: 20em;
    grid-gap: 2em;
    align-items: center;
    font-size: min(1em, 2.7vw);
  }
</style>
