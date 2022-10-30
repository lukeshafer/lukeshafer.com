<script context="module" lang="ts">
	export type responseStatus = '' | 'error' | 'success';
</script>

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';

	export let responseStatus: responseStatus = '';
</script>

<div>
	<form method="POST" use:enhance>
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
		<p class="visibly-hidden">The next checkbox, called "agreement" is present to stop spam bots. If you are a person, please don't check it, or I won't receive your message!</p>
		<input type="checkbox" id="agreement" name="agreement" class="visibly-hidden" />
		<label for="agreement" class="visibly-hidden">Agreement</label>
		<span class="btn-wrapper">
			<Button type="submit" title="submit" theme="accent">Submit</Button>
		</span>
	</form>
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
		height: 3rem;
	}
</style>
