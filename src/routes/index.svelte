<script lang="ts">
	import { onMount } from 'svelte';
	
	let flexWrapper: HTMLElement;
	let headshot: HTMLElement;
	let textBubble: HTMLElement;
	let wrapped = "not-wrapped";

	const setWrappedClass = (elements:HTMLElement[]): string => {
		let isWrapped = elements.reduce( (accum, curEl, index, arr) => {
			if (index === 0) return false;
			let prevEl = arr[index-1];
			if (curEl.offsetTop > (prevEl.offsetTop+prevEl.clientHeight)) return true;
			else return false;
		}, false);
		return isWrapped ? "wrapped" : "not-wrapped";
	};

	onMount(() => {
		const myObserver = new ResizeObserver((entries) => {
			entries.forEach( (entry) => {
				let children:HTMLElement[] = Array.from(entry.target.children) as HTMLElement[];
				wrapped = setWrappedClass(children);
			});
		});
		myObserver.observe(flexWrapper);
	});
</script>

<div class="flex-wrapper" bind:this={flexWrapper}>
	<img src="images/headshot.png" alt="Luke's Headshot" bind:this={headshot} />

	<div class="text-bubble {wrapped}" bind:this={textBubble}>
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

		font-size: min(1rem,3.3vw);
	}

	img {
		width: 21em;
		border-radius: 50%;
	}

	/* Chat bubble arrow */
	div.text-bubble::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		--triangle-height: 3em;
		--triangle-width: calc(var(--triangle-height) / 1.732);
		--triangle-center-position: calc(50% - var(--triangle-height) / 2);
		--triangle-top-position: calc(-1 * var(--triangle-height) + 1px); 
		/* above +1px prevents visible gaps due to rounding  */
		--triangle-base-half: var(--triangle-width) solid transparent;
		--triangle-main-shape: var(--triangle-height) solid var(--background);
	}
	

	div.text-bubble.not-wrapped::before {
		/* Arrow on left when not wrapped */
		top: var(--triangle-center-position);
		left: var(--triangle-top-position);
		border-top: var(--triangle-base-half);
		border-bottom: var(--triangle-base-half);
		border-right: var(--triangle-main-shape);
	}

	div.text-bubble.wrapped::before {
		/* Arrow on top when wrapped */
		left: var(--triangle-center-position);
		top: var(--triangle-top-position);
		border-left: var(--triangle-base-half);
		border-right: var(--triangle-base-half);
		border-bottom: var(--triangle-main-shape);
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
		margin: 0;
		font-size: 2em;
	}

	p {
		font-size: 1em;
	}

	strong {
		color: var(--accent-color);
	}

	a.btn {
		display: inline-block;
		padding: 0.5em 1em;
		position: absolute;
		color: var(--secondary-text);
		background: var(--secondary-accent);
		border-radius: 1em;
		font-size: 1.2em;
		vertical-align: bottom;
		text-shadow: 0.03em 0.03em var(--text-shadow);
		left: 0;
		right: 0;
		width: fit-content;
		margin: auto;
	}
</style>
