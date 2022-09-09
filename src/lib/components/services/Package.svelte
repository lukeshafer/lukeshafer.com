<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<div class="package">
		<div class="title">
			<slot name="title" />
		</div>
		<div class="price">
			<slot name="price" />
		</div>
		<div class="description">
			<slot name="description" />
		</div>
		<slot />
	</div>
</Card>

<style>
	.package {
		width: 15rem;
		display: grid;
		row-gap: 1rem;
	}

	.title {
		font-size: 1.2rem;
		text-align: center;
		color: rgb(var(--accent-color));
	}

	.description > :global(*) {
		/* font-style: italic; */
		text-align: center;
		font-size: 1rem;
		color: #556;
	}

	.price {
		font-weight: 600;
		font-size: 2em;
		text-align: center;
	}
</style>
