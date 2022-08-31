<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { CardEdge } from '$lib/components/Card.svelte';
	import Headshot from '$lib/components/Headshot.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	let flexWrapper: HTMLElement;
	let arrowPos: CardEdge = 'left';
	let isWrapped = false;

	let ready = false;

	const setWrappedClass = (elements: HTMLElement[]) => {
		return elements.reduce((accum, curEl, index, arr) => {
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

<section bind:this={flexWrapper}>
	{#key ready}
		<PageTransition url={'/'}>
			<div style:visibility={ready ? 'visible' : 'hidden'}>
				<Headshot />
			</div>
		</PageTransition>
		<div
			style:visibility={ready ? 'visible' : 'hidden'}
			class="fly"
			in:fly={{
				x: -200,
				duration: 300,
				delay: 700,
			}}>
			<Card arrowPos={isWrapped ? 'top' : 'left'}>
				<h2>Hi! I'm Luke!</h2>
				<p>
					I'm a web designer and developer based in Columbus, Ohio. I provide a personal,
					friendly, and communicative website design service for small
					businesses.
				</p>
				<p>
					<i>
						I believe in a <strong>personalized experience</strong> merging
						<strong>functional design</strong>
						with an <strong>artistic touch</strong>.
					</i>
				</p>
				<a class="btn" href="/contact">Get in Touch!</a>
			</Card>
		</div>
	{/key}
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		height: 100%;
		align-items: center;
		gap: 5em;
	}
	p {
		font-size: 1em;
	}

	.btn {
		display: inline-block;
		position: absolute;
		font-size: 1.6em;
	}
</style>
