<script lang="ts">
  import Modal from '../Modal.svelte';
  import type { ProjectComponent } from '$data/projects/_projects';
  import type A11yDialog from 'a11y-dialog';
  import { Globe, Info, Github } from 'lucide-svelte';

  export let project: ProjectComponent;
  const metadata = project.metadata;
  const logo = `/projects/assets/${metadata.logo}`;
  const imageFile = `/projects/assets/${metadata.imageFile}`;

  let openModal: () => A11yDialog;

  const iconSettings = {
    size: 54,
    color: 'rgb(var(--text-color))',
    fill: 'rgba(var(--background-base), .75)',
  };
</script>

<article class="project-tile" style="background-image: url({imageFile})">
  <div class="overlay">
    {#if project.metadata.url}
      <a href={project.metadata.url} target="_blank">
        <Globe {...iconSettings} />
      </a>
    {/if}
    <button class="modal" on:click={openModal}>
      <Info {...iconSettings} />
    </button>
    {#if project.metadata.repo}
      <a href={project.metadata.repo} target="_blank">
        <Github {...iconSettings} />
      </a>
    {/if}
  </div>
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

    transform: scale(1, 1);
    transition: transform 150ms cubic-bezier(0, 1, 0.5, 1);
  }

  .overlay {
    width: 100%;
    height: calc(100% - 6em);
    top: 0;
    position: absolute;

    background: #00000044;
    opacity: 0;
    transition: opacity 100ms cubic-bezier(0, 1, 0.5, 1);

    display: flex; /* flex when visible */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .overlay > * {
    background-color: rgb(var(--background-base));
    padding: 0.5em;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: none;
  }

  .overlay > :hover {
    filter: brightness(0.9);
  }

  div.background-box {
    background-color: rgba(var(--background-base), 0.85);
    width: 100%;
    height: 6em;
  }

  article:hover {
    /* --grow-amt: 0.4em;
    width: calc(var(--grow-amt) + var(--width));
    height: calc(var(--grow-amt) + var(--height));
    margin: calc(var(--grow-amt) * -1) auto;
    cursor: pointer; */
    transform: scale(1.05);
  }

  article:hover > .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 2px 10px #555);
  }
</style>
