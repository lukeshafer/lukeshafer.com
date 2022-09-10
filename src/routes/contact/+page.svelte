<script lang="ts">
	import ContactInfo from './ContactInfo.svelte';

	import ContactForm from './ContactForm.svelte';
</script>

<div class="page">
	<h1 class="main-heading">Contact Me</h1>
	<section>
		<ContactInfo />
		<ContactForm />
	</section>
</div>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 1em 4em;
	}
</style>
