<li><slot><!-- optional fallback --></slot></li>

<style lang="postcss">
	li {
		/* font-family: var(--link-font); */
		display: block;
		width: 90%;
		text-align: center;
		font-weight: 600;

		& > :global(ul) {
			padding: 0.5em 0em;
			font-size: 0.9em;
			display: flex;
			flex-flow: column;
			gap: 0.5em;
			color: rgba(var(--background-contrast), 0.6);
		}
	}
</style>
