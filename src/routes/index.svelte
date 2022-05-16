<script lang="ts">
	// TODO: check if the flex container wrapped to move the triangle to the top    
</script>

<div class="flex-wrapper">
	<img src="images/headshot.png" alt="Luke's Headshot" />

	<div class="text-bubble">
		<h2>Hi! I'm Luke!</h2>

		<p>
			I'm a web designer based in Columbus, Ohio. I provide a personal, friendly, and communicative
			website design service for small businesses.
		</p>

		<p>
			<i>
				I believe in a <strong>personalized experience</strong> merging
				<strong>functional design</strong>
				with an <strong>artistic touch</strong>.
			</i>
		</p>

		<a class="btn" href="/">Learn more</a>
	</div>
</div>

<style>
	div.flex-wrapper {
		/* margin: 3rem auto; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		height: 30em;
		gap: 5em;
		margin: 2em 2em;
	}

	img {
		width: 21em;
		border-radius: 50%;
	}

	/* Chat bubble arrow */
	div.text-bubble::before {
		content: '';
		position: absolute;
		top: calc(50% - var(--triangle-height) / 2);
		--triangle-height: 4rem;
		--triangle-width: calc(var(--triangle-height) / 1.732);
		left: calc(-1 * var(--triangle-height));
		width: 0;
		height: 0;
		border-top: var(--triangle-width) solid transparent;
		border-bottom: var(--triangle-width) solid transparent;
		border-right: var(--triangle-height) solid var(--background);
	}

	div.text-bubble {
		--background: white;
		position: relative;
		background-color: var(--background);
		height: fit-content;
		width: 25em;
		padding: 1em 1.5em;
		font-size: 1.3em;
	}

	h2 {
		font-weight: 1;
		letter-spacing: 0.01em;
		text-align: center;
		margin: 0;
		font-size: 2em;
	}

	p {
		font-size: 1em;
	}

	strong {
		color: var(--accent-color);
	}
	
	a {
		display: inline-block;
		padding: 0.5em 1em;
		position: absolute;
		color: var(--secondary-text);
		background: var(--secondary-accent);
		border-radius: 1em;
		font-size: 1.2em;
		vertical-align:bottom;
		left: 0;
		right: 0;
		width: fit-content;
		margin: auto;
	}

</style>
