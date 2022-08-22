<script lang='ts'>
        import type { Icon } from "lucide-svelte";
         export let social: {
                name: string,
                href: string,
                bottom?: boolean,
                invert?: boolean,
                component: Icon,
         }
</script>

<li class="link">
  <a
    id={social.name}
    href={social.href}
    class="social-icon"
    target="_blank">
    <span
      class="icon-wrapper"
      style:align-self={social.bottom ? 'stretch' : 'center'}
      style:top={social.bottom ? '0.1em' : '0'}>
      <svelte:component
        this={social.component}
        size="{social.bottom ? 1 : 0.7}em"
        color={social.invert ? 'rgb(var(--background-base))' : 'none'}
        strokeWidth="2"
        fill={social.invert ? 'none' : 'rgb(var(--background-base))'} />
    </span>
    <span class="visibly-hidden">{social.name}</span>
  </a>
</li>

<style>
        

  .icon-wrapper {
    position: relative;
  }
</style>
