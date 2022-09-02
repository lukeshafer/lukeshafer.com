<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Projects from '$lib/components/work/Projects.svelte';
	import projects from '$data/projects/_projects';
	import Jobs from '$lib/components/work/Jobs.svelte';
	import jobs from '$data/jobs/_jobs';
</script>

<section class="projects">
	<Card>
		<h3>Projects</h3>
		<p>Here, you can find websites I've made in the past!</p>
	</Card>
	<Projects {projects} />
</section>
<section class="jobs">
	<Card>
		<h3>Work Experience</h3>
	</Card>
	<Jobs {jobs} />
</section>
<section class="card-wrapper">
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;
		font-size: min(1rem, 3.3vw);
	}

	section:not(:last-of-type) {
		margin-bottom: 5rem;
	}

	p {
		margin: 1em;
	}

	.card {
		/* max-width: 25em; */
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
