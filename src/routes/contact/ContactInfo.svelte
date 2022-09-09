<script lang="ts">
	import Card from '../../lib/components/Card.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import { Mail, Phone } from 'lucide-svelte';

	const noTypeCheck = (x: any) => x;
</script>

<div class="wrapper">
	<h2 class="main-heading">My Info</h2>
	<Card>
		<address class="card">
			<a id="email" href="mailto:hello@lukeshafer.com"
				><span class="main-icon">
					<Mail
						color="rgb(var(--accent-color))"
						fill="rgb(var(--background-base))"
						{...noTypeCheck({
							size: '0.7em',
						})} />
				</span><span class="link-text"><b>hello</b>@lukeshafer.com</span></a>
			<a id="phone" href="tel:+16145853382"
				><span class="main-icon">
					<Phone
						color="rgb(var(--accent-color))"
						fill="rgb(var(--background-base))"
						{...noTypeCheck({
							size: '0.7em',
						})} />
				</span><span class="link-text phone-number"
					>614-<b>LUKE-ETC</b><br />614-585-3382</span
				></a>
			<div class="socials">
				<Socials
					backgroundColor="rgb(var(--primary-color))"
					iconColor="rgb(var(--background-base))" />
			</div>
		</address>
	</Card>
</div>

<style>
	.wrapper {
		display: flex;
		flex-flow: column;
		gap: 1rem;
	}

	address {
		font-style: normal;
		white-space: nowrap;
		gap: 1em;
	}

	address > * {
		margin: 0.5em;
	}

	address > a {
		display: grid;
		grid-template-columns: 2em 10em;
		grid-template-rows: 2em;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		font-size: 1.3em;
		color: rgb(var(--text-color));
	}

	a {
		font-family: inherit;
		text-transform: inherit;
		text-decoration: none;
	}

	a b {
		color: rgb(var(--accent-color));
	}

	.phone-number::first-line {
		font-size: calc(1em / 0.8);
	}

	.phone-number {
		font-size: 0.8em;
		letter-spacing: 0.15em;
	}

	address > a:hover .main-icon {
		filter: brightness(1.2);
	}

	.main-icon {
		background-color: rgb(var(--accent-color));
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1em;
		font-size: 1.5em;
		width: 1em;
		height: 1em;
		margin: auto;
		transition: font-size 100ms ease-out;
	}

	.socials {
		font-size: 1.3rem;
	}
</style>
