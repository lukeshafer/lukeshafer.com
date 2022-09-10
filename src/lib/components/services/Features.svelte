<script lang="ts">
	export let heading = 'Features';
</script>

<div class="features">
	<h3 class="styled-link">{heading}</h3>
	<ul>
		<slot />
	</ul>
</div>

<style lang="postcss">
	.features {
		box-shadow: 1px 1px 1px 2px rgb(0, 0, 0, 0.2);
		border-radius: 0.5rem;
	}

	h3 {
		font-size: 1.2em;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		padding: 0.7rem;
		color: rgba(var(--background-contrast), 0.9);
		text-transform: uppercase;
	}

	ul {
		display: grid;
		padding: 1rem;
		place-items: center;
		row-gap: 0.8rem;

		& > :global(:not(:last-child)) {
			padding-bottom: 0.8rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}
	}
</style>
