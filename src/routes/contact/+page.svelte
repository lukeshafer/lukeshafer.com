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
	<p>
		{#if responseStatus === 'success'}
			Message sent! Please allow 3 business days for me to respond.
		{:else if responseStatus === 'error'}
			<span style:color="red">
				There was an error. Please email hello@lukeshafer.com directly.
			</span>
		{/if}
	</p>
</div>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 1em 4em;
	}

	.page {
		display: grid;
		place-items: center;
	}

	p {
		text-align: center;
		width: 15rem;
		height: 3rem;
	}
</style>
