<script lang="ts" context="module">
    export type Project = {
        title : string;
        partner : string;
        url: string;
        logo : string;
        repo : string;
        description : string;
    }
</script>

<script lang="ts">
    export let project: Project;
    const title = project.title;
    const partner = project.partner;
    const url = project.url;
    const logo = `projects/assets/${project.logo}`;
    const repo = project.repo;
    const description = project.description;
</script>


<div class="project-tile">
    <div class="background-box">
        <img src={logo} alt={partner} width=300>
    </div>
</div>

<style>

    div.project-tile {
        background-image: url('projects/assets/goh.org.png');
        background-size: cover;
        width: min(30em, 100%);
        height: 20em;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-style: solid;
        border-width: 0.25em;
        border-color: white;
    }

    div.background-box {
        background-color: var(--header-background);
        width: 100%;
        height: 8em;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(2px 2px 10px #555);
    }

</style>