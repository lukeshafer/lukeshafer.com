<script>
	import ContactInfo from './ContactInfo.svelte';

	import ContactForm from './ContactForm.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="page">
	<h1 class="main-heading">Contact Me</h1>
	<section>
		<ContactInfo />
		<ContactForm />
		{#if form?.success}
			<p>
				Request sent! I will respond to your request within 2 business days.
			</p>
		{/if}
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
