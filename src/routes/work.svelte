<script lang="ts">
  import Projects from '$lib/components/work/Projects.svelte';
  import { projects } from '$data/projects.json';
  import Jobs from '$lib/components/work/Jobs.svelte';
  import { jobs } from '$data/jobs.json';
</script>

<section class="work">
  <div class="card">
    <h3>My Work</h3>
    <p>
      Here, you can find some of my past projects and companies I've worked
      with:
    </p>
  </div>
  <Projects {projects} />
  <div class="card">
    <h3>My Experience</h3>
  </div>
  <Jobs {jobs} />
</section>

<style>
  section.work {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    gap: 2em;
    font-size: min(1rem, 3.3vw);
  }

  p {
    margin: 1em;
  }

  .card {
    max-width: 25em;
    text-align: center;
    align-self: center;
  }
</style>
