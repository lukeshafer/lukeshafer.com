<script lang="ts">
	import Package from '$lib/components/services/Package.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import Features from '$lib/components/services/Features.svelte';
	import Feature from '$lib/components/services/Feature.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="services page">
	<h1 class="main-heading">Website Packages</h1>

	<Services>
		<Package>
			<h2 slot="title">Basic</h2>
			<p slot="price">$1500</p>
			<p slot="description">
				A simple site that brings results. No fuss: I take care of everything.
			</p>
			<Features>
				<Feature>Fully custom design</Feature>
				<Feature>Static landing page</Feature>
				<Feature
					>The important stuff <ul>
						<li>Business name</li>
						<li>What you do</li>
						<li>Contact information</li>
						<li>Social media</li>
						<li>Address</li>
					</ul>
				</Feature>
			</Features>
		</Package>
		<Package>
			<h2 slot="title">Content</h2>
			<p slot="price">$2500</p>
			<p slot="description">
				Get more control, because your business is always changing.
			</p>
			<Features>
				<Feature>Everything in Basic</Feature>
				<Feature>Multiple on-page sections</Feature>
				<Feature
					>Content management
					<ul>
						<li>Simple interface to update your site</li>
						<li>Control your content, anytime</li>
						<li>Add info later on</li>
						<li>Control who can make changes and how much</li>
					</ul></Feature>
			</Features>
		</Package>
		<Package>
			<h2 slot="title">Custom</h2>
			<p slot="price">Contact Me</p>
			<p slot="description">A site as unique as your business.</p>
			<Features>
				<Feature>Multiple pages</Feature>
				<Feature>Interactive content</Feature>
				<Feature>Ecommerce</Feature>
				<Feature>User login</Feature>
				<Feature>A full web app</Feature>
				<Feature>Or anything else you need</Feature>
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
