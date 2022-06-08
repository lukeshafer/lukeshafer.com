<script lang="ts">
  import Modal from '../Modal.svelte';
  import type { ProjectComponent } from '$data/projects/_projects';
  import type A11yDialog from 'a11y-dialog';
  import { Github } from 'lucide-svelte';

  export let project: ProjectComponent;
  const metadata = project.metadata;
  const logo = `/projects/assets/${metadata.logo}`;
  const imageFile = `/projects/assets/${metadata.imageFile}`;

  let openModal: () => A11yDialog;
</script>

<article
  class="project-tile"
  style="background-image: url({imageFile})"
  on:click={openModal}>
  <div class="background-box">
    <img src={logo} alt={metadata.partner} width="300" />
  </div>
</article>

<Modal bind:show={openModal}>
  <h1 slot="title">{project.metadata.title}</h1>
  <svelte:component this={project.component} />
  {#if project.metadata.repo !== ''}
    <a
      href={project.metadata.repo}
      target="_blank"
      style="display:block;margin:1em;">
      GitHub Repository</a>
  {/if}
</Modal>

<style>
  article {
    position: relative;
    background-size: cover;
    --width: 30em;
    width: var(--width);
    --height: 20em;
    height: var(--height);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-style: solid;
    border-width: 0.25em;
    border-color: rgb(var(--background-base));
    transition: all 150ms, transform 400ms ease-in-out;
  }

  div.background-box {
    background-color: rgba(var(--background-base), 0.85);
    width: 100%;
    height: 6em;
  }

  article:hover {
    --grow-amt: 1em;
    width: calc(var(--grow-amt) + var(--width));
    height: calc(var(--grow-amt) + var(--height));
    margin: calc(var(--grow-amt) * -1) auto;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 2px 10px #555);
  }
</style>
