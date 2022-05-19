<script lang="ts">
    import ProjectTile from "$lib/components/ProjectTile.svelte"
    import type { Project } from "$lib/components/ProjectTile.svelte"
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
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        grid-auto-rows: auto;
        grid-gap: 5px;
    }
</style>