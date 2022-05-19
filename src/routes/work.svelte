<script lang="ts">
    import Projects from "$lib/components/Projects.svelte";
    import { projects } from "$data/projects.json";
</script>

<section class="work">
    <div class="text-container">
        <h2>My Work</h2>
        <p>Here, you can find some of my past projects and companies I've worked with:</p>
    </div>
    <Projects {projects}/>
</section>

<style>
    section.work {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        padding: 3em;
        font-size: min(1rem,3.3vw);
    }

    h2 {
        margin: 0.5em;
    }

    p {
        margin: 1em;
    }
    div.text-container {
        background-color: white;
        font-size: 1.5em;
        padding: 0em 1.5em;
        margin-bottom: 2em;
        max-width: 25em;
        text-align: center;
        align-self: center;
    }

</style>