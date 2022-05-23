<script lang="ts" context="module">
  export type Project = {
    title: string;
    partner: string;
    url: string;
    logo: string;
    imageFile: string;
    repo: string;
    description: string;
  };
</script>

<script lang="ts">
  export let project: Project;
  const title = project.title;
  const partner = project.partner;
  const url = project.url;
  const logo = `projects/assets/${project.logo}`;
  const repo = project.repo;
  const description = project.description;
  const imageFile = `projects/assets/${project.imageFile}`;

  let isCardForward = true;
  let faceDirection: string;
  $: faceDirection = isCardForward ? 'front' : 'back';
</script>

<div
  class="project-tile {faceDirection}"
  style="background-image: url({imageFile})"
  on:click={() => (isCardForward = !isCardForward)}>
  <div class="background-box">
    <img src={logo} alt={partner} width="300" />
  </div>
  <div class="tile-back">
    <p class="project-description">{project.description}</p>
  </div>
</div>

<style>
  div.project-tile {
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
    transform-style: preserve-3d;
  }

  div.tile-back {
    transform: rotateY(180deg);
    background-color: white;
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  div.back {
    transform: rotateY(180deg);
  }

  div.background-box {
    background-color: rgba(var(--background-base), 0.85);
    width: 100%;
    height: 6em;
  }

  div.project-tile:hover {
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
