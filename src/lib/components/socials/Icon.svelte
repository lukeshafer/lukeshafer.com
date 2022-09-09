<script lang="ts">
	import type { IconData } from '$data/socials';
	export let icon: IconData;
	export let isLink = true;

	export let backgroundColor: string, iconColor: string;
</script>

<li class="link">
	{#if isLink}
		<svelte:element
			this={isLink ? 'a' : 'span'}
			id={icon.name}
			href={isLink ? icon.href : ''}
			style:background-color={backgroundColor}
			class="social-icon"
			target="_blank"
			><span
				class="icon-wrapper"
				style:align-self={icon.bottom ? 'stretch' : 'center'}
				style:top={icon.bottom ? '0.1em' : '0'}>
				<svelte:component
					this={icon.component}
					size="{icon.bottom ? 1 : 0.7}em"
					color={icon.invert ? iconColor : 'none'}
					strokeWidth="2"
					fill={icon.invert ? 'none' : iconColor} />
			</span></svelte:element>
	{/if}
</li>

<style>
	li {
		overflow: hidden;
		transition: filter var(--link-transition);
		padding: 5px;
	}
	li .social-icon {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.5em;
		width: 1em;
		height: 1em;
		border-radius: 100%;
	}

	li:hover {
		filter: brightness(1.2);
	}

	.icon-wrapper {
		position: relative;
		display: inline-block;
	}

	span {
		display: block;
	}

	.social-icon {
		font-family: inherit;
		text-transform: inherit;
		text-decoration: inherit;
	}
</style>
