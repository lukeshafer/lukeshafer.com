<script lang="ts">
	import Modal from '../Modal.svelte';
	import type { ProjectComponent } from '$data/projects/_projects';
	import type A11yDialog from 'a11y-dialog';
	import { Globe, Info, Github } from 'lucide-svelte';

	export let project: ProjectComponent;
	const metadata = project.metadata;
	const logo = `/projects/assets/${metadata.logo}`;
	const imageFile = `/projects/assets/${metadata.imageFile}`;

	let openModal: () => A11yDialog;

	const iconSettings = {
		size: 54,
		color: 'rgb(var(--text-color))',
		fill: 'rgba(var(--background-base), .75)',
	};

	let focus = false;
</script>

<article
	class="project-tile"
	style="background-image: url({imageFile})"
	on:focus={() => (focus = false)}
	class:focus>
	<h2 class="visibly-hidden">{metadata.title}</h2>
	<div class="overlay">
		{#if metadata.url}
			<a
				on:focus={() => (focus = true)}
				on:blur={() => (focus = false)}
				href={metadata.url}
				title="Website"
				target="_blank">
				<span aria-hidden="true">
					<Globe {...iconSettings} />
				</span>
			</a>
		{/if}
		<!--		<button
			on:focus={() => (focus = true)}
			on:blur={() => (focus = false)}
			class="modal"
			aria-label="About this project"
			on:click={openModal}>
			<span aria-hidden="true">
				<Info {...iconSettings} />
			</span>
</button>	-->
		{#if metadata.repo}
			<a
				on:focus={() => (focus = true)}
				on:blur={() => (focus = false)}
				href={metadata.repo}
				title="GitHub repository"
				target="_blank">
				<span aria-hidden="true">
					<Github {...iconSettings} />
				</span>
			</a>
		{/if}
	</div>
	<div class="background-box">
		<img
			src={logo}
			title="Logo"
			alt={metadata.logoAlt}
			on:focus={() => (focus = false)}
			width="300" />
	</div>
</article>

<!--<Modal bind:show={openModal}>
	<svelte:component this={project.component} />
</Modal>-->
<style lang="postcss">
	article {
		position: relative;
		background-size: cover;
		--width: 30em;
		width: var(--width);
		--height: 20em;
		height: var(--height);
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border-style: solid;
		border-width: 0.25em;
		border-color: rgb(var(--background-base));
		font-size: 0.9em;

		transform: scale(1, 1);
		transition: transform 150ms cubic-bezier(0, 1, 0.5, 1);
	}

	.overlay {
		width: 100%;
		height: calc(100% - 6em);
		top: 0;
		position: absolute;

		background: #00000044;
		opacity: 0;
		transition: opacity 100ms cubic-bezier(0, 1, 0.5, 1);

		display: flex; /* flex when visible */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2em;
	}

	.overlay > * {
		background-color: rgb(var(--background-base));
		padding: 0.5em;
		border-radius: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		border: none;
	}

	.overlay > :hover {
		filter: brightness(0.9);
	}

	div.background-box {
		background-color: rgba(var(--background-base), 0.85);
		width: 100%;
		height: 6em;
	}

	:where(article:hover, article.focus) > .overlay {
		opacity: 1;
	}

	.overlay:has(a:focus) {
		opacity: 1;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(2px 2px 10px #555);
	}

	a > span {
		width: 60px;
		height: 60px;
		display: grid;
		place-items: center;
	}
</style>
