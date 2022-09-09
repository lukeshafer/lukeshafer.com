<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<form action="https://formspree.io/f/mvollorl" method="POST">
	<h2 class="main-heading">Want to get a quote?</h2>
	<label for="input-name" class="visibly-hidden">Name</label>
	<input type="text" name="name" placeholder="Name" id="input-name" />
	<label for="input-email" class="visibly-hidden">Email</label>
	<input type="email" name="email" placeholder="Email" id="input-email" />
	<label for="input-phone" class="visibly-hidden">Phone</label>
	<input type="tel" id="input-phone" name="phone" placeholder="Phone" />
	<label for="input-message" class="visibly-hidden">Message</label>
	<textarea name="message" placeholder="Message" id="input-message" rows="6" />
	<span class="btn-wrapper">
		<Button type="submit" title="submit" theme="accent">Submit</Button>
	</span>
</form>

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
		width: 80%;
		padding: 0.5em 1em;
		border: none;
	}
</style>
