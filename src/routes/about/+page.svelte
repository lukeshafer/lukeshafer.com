<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	let width = '25em';
</script>

<section>
	<h1 class="visibly-hidden">About Me</h1>

	<img
		src="/images/new-headshot.jpeg"
		alt="A casual headshot of Luke smiling"
		width="300" />

	<div class="paragraph">
		<Card {width}>
			<h2>Hi, I'm Luke!</h2>
			<p>
				I am a web developer in Columbus, Ohio. I take a focus on user-friendly
				design, accessibility, site performance, and professional presentation.
				I try to think about the little details that others don’t always
				consider — I’ve always thought of myself a very detail-oriented person.
			</p>
		</Card>
	</div>

	<img
		src="https://luke-shafer-web-design.mo.cloudinary.net/images/about-me-portrait.png"
		alt="Luke sitting at his desk with a cup of coffee. He is programming and smiling at the camera."
		width="300" />

	<div class="paragraph">
		<Card {width}>
			<p>
				I'm a visual and curiosity-driven person, and that drew me to web
				development early in my career. I started coding even earlier than that,
				at the age of 12, when I learned how to program a TI-84 calculator. I
				wrote <em>so</em> many programs on that calculator, to help me with trigonometry,
				complex numbers, and even small things like finding prime numbers!
			</p>
		</Card>
	</div>

	<img
		src="/images/anahita-and-me.jpeg"
		alt="Luke and his wife Anahita smiling at the camera"
		width="300" />

	<div class="paragraph">
		<Card {width}>
			<p>
				I have a lot of creative hobbies outside of programming, like
				embroidering, making digital art, producing music, 3D printing,
				painting, and making great specialty coffee. I love talking hobbies, so
				feel free to ask me about them!
			</p>
		</Card>
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 2em;
		grid-template-columns: repeat(3, 20em);
		grid-auto-rows: auto;
		grid-auto-flow: dense;
		justify-content: center;
		place-items: center;
		text-align: center;
		/* margin: 1.5em; */
	}

	.paragraph {
		grid-column-start: 1;
		grid-column-end: span 2;
		max-width: 100%;

		display: flex;
		justify-content: center;
	}

	.paragraph:nth-of-type(2n) {
		grid-column-start: 2;
	}

	img {
		grid-column-start: span 1;
		grid-column-end: -1;
		width: 20em;
		height: 20em;
		object-fit: cover;
		object-position: top;
	}

	img:nth-of-type(2n) {
		grid-column-end: auto;
	}

	p {
		font-size: 1em;
		text-align: left;
	}

	@media screen and (max-width: 1200px) {
		section {
			grid-template-columns: repeat(2, 22em);
		}

		.paragraph {
			grid-column-end: span 1;
		}
	}

	@media screen and (max-width: 810px) {
		section {
			display: flex;
			flex-flow: column;
			gap: 2em;
		}

		.paragraph {
			margin-bottom: 3em;
		}
	}
</style>
