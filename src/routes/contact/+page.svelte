<script>
	import ContactInfo from './ContactInfo.svelte';
	import ContactForm from './ContactForm.svelte';

	/** @type import("./$types").Actions */
	export let form;
	$: console.log(form);

	/**
	 * @type import('./ContactForm.svelte').responseStatus
	 */
	let responseStatus = '';

	$: if (form)
		if (form?.success) responseStatus = 'success';
		else responseStatus = 'error';
</script>

<div class="page">
	<h1 class="main-heading">Contact Me</h1>
	<section>
		<ContactInfo />
		<ContactForm {responseStatus} />
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
