<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Projects from '$lib/components/work/Projects.svelte';
  import projects from '$data/projects/_projects';
  import Jobs from '$lib/components/work/Jobs.svelte';
  import jobs from '$data/jobs/_jobs';
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
  <div class="card-wrapper">
    <Card>
      <h3>Download Resume</h3>
      <div class="downloads">
        <a
          href="/downloads/resume/Shafer-Luke-2022-Resume.pdf"
          class="btn"
          download>
          PDF</a>
        <a
          href="/downloads/resume/Shafer-Luke-2022-Resume.txt"
          class="btn"
          download>
          Text/Markdown</a>
      </div>
    </Card>
  </div>
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

  .downloads {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1em;
  }

  .card-wrapper {
    align-self: center;
  }
</style>
