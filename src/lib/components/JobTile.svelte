<script lang="ts" context="module">
	export type Job = {
        jobTitle : string;
        employer : string;
        website: string;
        dates : string;
        description : string;
        skills : string[];
	};
</script>

<script lang="ts">
	export let job: Job;
	const jobTitle = job.jobTitle;
	const employer = job.employer;
	const website = job.website;
	const dates = job.dates;
	const description = job.description;
	const skills = job.skills;
</script>

<div class="job-tile">
	<div class="background-box">
		<h3>{employer}</h3>
        <p>{jobTitle}</p>
        <time>{dates}</time>
	</div>
</div>

<style>
    div.job-tile {
        border-width: 1em;
        border-style: solid;
        border-color: var(--primary-color);
        background-color: var(--tertiary-color);
    }
    
    div.background-box {
        color: white;
    }
</style>