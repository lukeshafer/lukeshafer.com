<script lang="ts">
	import Package from '$lib/components/services/Package.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import Features from '$lib/components/services/Features.svelte';
	import Feature from '$lib/components/services/Feature.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="services page">
	<Card>
		<h1>Website Packages</h1>
	</Card>

	<Services>
		<Package>
			<h2 slot="title">Small Business Basic</h2>
			<p slot="price">$1500</p>
			<p slot="description">
				A simple site that brings results. No fuss: I take care of everything.
			</p>
			<Features>
				<Feature>Fully custom design</Feature>
				<Feature>Static landing page</Feature>
				<Feature>Content included</Feature>
				<Feature>Contact information</Feature>
				<Feature>Social media</Feature>
				<Feature>A description of the business</Feature>
			</Features>
		</Package>
	</Services>
</div>

<style>
	.services {
		display: grid;
		place-items: center;
		gap: 1.5rem;
		width: 100%;
	}
</style>
