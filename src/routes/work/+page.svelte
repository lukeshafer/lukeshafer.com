<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Projects from '$lib/components/work/Projects.svelte';
	import projects from '$data/projects/_projects';
	import Jobs from '$lib/components/work/Jobs.svelte';
	import jobs from '$data/jobs/_jobs';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="portfolio page">
	<h1 class="visibly-hidden">Portfolio</h1>
	<section class="projects">
		<!-- <Card><h2 class="main-heading">My Projects</h2></Card> -->
		<Projects {projects} />
	</section>
	<!-- <section class="jobs">
		<Card>
			<h2>Work Experience</h2>
		</Card>
		<Jobs {jobs} />
	</section> -->
	<section class="card-wrapper">
		<Card>
			<h2>Download Resume</h2>
			<div class="downloads">
				<Button
					href="/downloads/resume/Shafer-Luke-2022-Resume.pdf"
					title="Download PDF"
					theme="accent"
					download={true}>PDF</Button>
				<Button
					href="/downloads/resume/Shafer-Luke-2022-Resume.pdf"
					title="Download Text/Markdown"
					theme="accent-outline"
					download={true}>Text/Markdown</Button>
			</div>
		</Card>
	</section>
</div>

<style>
	.portfolio {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;
		font-size: min(1rem, 3.3vw);
		width: 100%;
	}

	.downloads {
		display: flex;
		justify-content: space-evenly;
		gap: 1rem;
		margin-top: 1em;
	}

	.card-wrapper {
		align-self: center;
	}
</style>
