<script lang="ts">
	import ContactInfo from './ContactInfo.svelte';

	import ContactForm from './ContactForm.svelte';
</script>

<section>
	<h1 class="visibly-hidden">Contact Me</h1>
	<ContactInfo />
	<ContactForm />
</section>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 1em 4em;
	}
</style>
