<div class="columns">
	<slot><!-- optional fallback --></slot>
</div>

<style>
	.columns {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 2rem;
	}
</style>
