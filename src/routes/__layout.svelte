<script lang="ts">
    import 'normalize.css'
    import '../app.css';
    import Header from '$lib/header/Header.svelte';
</script> 

<Header/>

<main>
    <slot></slot>
</main>