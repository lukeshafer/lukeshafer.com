<script lang="ts">
    import JobTile from "$lib/components/JobTile.svelte"
    import type { Job } from "$lib/components/JobTile.svelte"
    export let jobs: Job[];
</script>

    <div class="job-grid">
        {#each jobs as job}
            <JobTile {job} />
        {/each}
    </div>

<style>
    div.job-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
        grid-auto-rows: auto;
        grid-gap: 5px;
    }
</style>