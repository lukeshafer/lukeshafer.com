<script lang="ts">
	import ProjectTile from '$lib/components/work/ProjectTile.svelte';
	import type { ProjectComponent } from '$data/projects/_projects';
	export let projects: ProjectComponent[];
</script>

<div class="project-grid">
	{#each projects as project, index}
		<ProjectTile {project} />
	{/each}
</div>

<style>
	div.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, 30em);
		grid-auto-rows: 20em;
		gap: 3em;
		justify-content: center;
		align-items: center;
		font-size: min(1em, 2.7vw);
		width: 100%;
		max-width: 100em;
	}
</style>
