<header>
	<slot><!-- optional fallback --></slot>
</header>

<style>
	header {
		/* background appearance */
		background-color: rgba(var(--background-base), 0.8);

		/* header size */
		--header-height: 5rem; /* this variable is used by other components */

		/* layout */
		display: flex;
		align-items: center;
		padding: clamp(0.8rem, 1vw, 1rem) clamp(1.8rem, 3vw, 3rem);
		gap: clamp(2rem, 4.5vw, 5rem);
	}

	@media screen and (max-width: 810px) {
		header {
			justify-content: space-between;
		}
	}
</style>
