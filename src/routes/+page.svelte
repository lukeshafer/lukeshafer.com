<script lang="ts">
	import Button from './../lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Headshot from '$lib/components/Headshot.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	let flexWrapper: HTMLElement;
	let isWrapped = false;

	let ready = false;

	const setWrappedClass = (elements: HTMLElement[]) => {
		return elements.reduce((_accum, curEl, index, arr) => {
			if (index === 0) return false;
			let prevEl = arr[index - 1];
			if (curEl.offsetTop > prevEl.offsetTop + prevEl.clientHeight) return true;
			else return false;
		}, false);
	};

	onMount(() => {
		ready = true;
		const myObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				let children: HTMLElement[] = Array.from(
					entry.target.children
				) as HTMLElement[];
				isWrapped = setWrappedClass(children);
			});
		});
		myObserver.observe(flexWrapper);
	});
</script>

<div class="page">
	<section bind:this={flexWrapper}>
		{#if ready}
			<PageTransition url={'/'}>
				<Headshot />
			</PageTransition>
			<div
				class="fly"
				in:fly={{
					x: -200,
					duration: 300,
					delay: 700,
				}}>
				<Card arrowPos={isWrapped ? 'top' : 'left'} width="30rem">
					<div class="card-wrapper">
						<h2 class="main-heading">Hi! I'm <span class="name">Luke</span></h2>
						<p>
							I'm a web developer based in Columbus, Ohio.<br />
							I provide a personal, friendly, and communicative website design service
							for small businesses.
						</p>
						<p>
							I believe in a <strong>personalized experience</strong> merging
							<strong>functional design</strong>
							with an <strong>artistic touch</strong>.
						</p>
						<span class="buttons">
							<Button href="/services" title="Services" theme="default"
								>Services</Button>
							<Button href="/contact" title="Contact" theme="outline"
								>Get in Touch</Button>
						</span>
					</div>
				</Card>
			</div>
		{/if}
	</section>
</div>

<style>
	section {
		/* page layout */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 6rem;

		/* sizing */
		padding: 2rem;
		height: 100%;

		/* text formatting */
		text-align: center;
		font-size: 1.1rem;
	}

	h2 {
		text-transform: capitalize;
		padding: 0;
	}

	.name {
		color: rgb(var(--primary-color));
	}

	.card-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.4rem;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		font-size: 1.04rem;
	}
</style>
