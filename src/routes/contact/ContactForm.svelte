<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let responseStatus: '' | 'error' | 'success' = '';

	async function handleSubmit(event: SubmitEvent) {
		const form = event.target as HTMLFormElement;
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: new FormData(form),
		});
		const data = await response.json();
		if (response.status >= 500 || !data?.success) responseStatus = 'error';
		else responseStatus = 'success';
	}
</script>

<div>
	<form
		action="/api/contact"
		method="POST"
		on:submit|preventDefault={handleSubmit}>
		<label for="input-name" class="visibly-hidden" />
		<input type="text" name="name" placeholder="Name" id="input-name" />
		<label for="input-email" class="visibly-hidden">Email</label>
		<input type="email" name="email" placeholder="Email" id="input-email" />
		<label for="input-phone" class="visibly-hidden">Phone</label>
		<input type="tel" id="input-phone" name="phone" placeholder="Phone" />
		<label for="input-message" class="visibly-hidden">Message</label>
		<textarea
			name="message"
			placeholder="Message"
			id="input-message"
			rows="6" />
		<span class="btn-wrapper">
			<Button type="submit" title="submit" theme="accent">Submit</Button>
		</span>
	</form>
	{#if responseStatus === 'success'}
		<p>Message sent! Please allow 3 business days for me to respond.</p>
	{:else if responseStatus === 'error'}
		<p style:color="red">
			There was an error. Please email hello@lukeshafer.com directly.
		</p>
	{/if}
</div>

<style>
	form {
		max-width: 30rem;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.7em;
	}

	input,
	textarea {
		border-radius: 0;
		width: 100%;
		padding: 0.5em 1em;
		border: none;
		box-sizing: border-box;
	}

	div {
		display: grid;
		justify-items: center;
		row-gap: 1rem;
	}

	p {
		text-align: center;
		width: 15rem;
	}
</style>
