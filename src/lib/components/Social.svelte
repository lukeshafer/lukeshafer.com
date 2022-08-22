<script lang="ts">
  import type { Icon } from 'lucide-svelte';
  export let social: {
    name: string;
    href: string;
    bottom?: boolean;
    invert?: boolean;
    component: Icon;
  };

  export let backgroundColor: string, iconColor: string;
</script>

<li class="link">
  <a
    id={social.name}
    href={social.href}
    style:background-color={backgroundColor}
    class="social-icon"
    target="_blank">
    <span
      class="icon-wrapper"
      style:align-self={social.bottom ? 'stretch' : 'center'}
      style:top={social.bottom ? '0.1em' : '0'}>
      <svelte:component
        this={social.component}
        size="{social.bottom ? 1 : 0.7}em"
        color={social.invert ? iconColor : 'none'}
        strokeWidth="2"
        fill={social.invert ? 'none' : iconColor} />
    </span>
    <span class="visibly-hidden">{social.name}</span>
  </a>
</li>

<style>
  li {
    overflow: hidden;
    transition: transform var(--link-transition);
  }
  li a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5em;
    width: 1em;
    height: 1em;
    border-radius: 100%;
  }

  li:hover {
    transform: scale(1.15);
  }

  .icon-wrapper {
    position: relative;
  }

  span {
    display: block;
  }

  a {
    font-family: inherit;
    text-transform: inherit;
  }
</style>
