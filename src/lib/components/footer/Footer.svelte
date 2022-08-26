<script lang="ts">
  import Social from '$lib/components/Social.svelte';
  import {
    Mail,
    Phone,
    Github,
    Linkedin,
    Instagram,
    Facebook,
  } from 'lucide-svelte';
  import type { Icon } from 'lucide-svelte';

  const socials: {
    name: string;
    component: Icon;
    href: string;
    bottom?: boolean;
    invert?: boolean;
  }[] = [
    {
      name: 'GitHub',
      // @ts-ignore
      component: Github,
      href: 'https://github.com/lukeshafer/',
      bottom: true,
    },
    {
      name: 'LinkedIn',
      // @ts-ignore
      component: Linkedin,
      href: 'https://www.linkedin.com/in/lukealanshafer/',
    },
    {
      name: 'Instagram',
      // @ts-ignore
      component: Instagram,
      href: 'https://www.instagram.com/luke.web.design/',
      invert: true,
    },
    {
      name: 'FaceBook',
      // @ts-ignore
      component: Facebook,
      href: 'https://www.facebook.com/lukeshaferwebdesign/',
      bottom: true,
    },
  ];
</script>

<footer>
  <ul>
    {#each socials as social}
      <Social
        {social}
        backgroundColor={'rgb(var(--background-base))'}
        iconColor={'rgb(var(--secondary-color))'} />
    {/each}
  </ul>
  <p>
    © Luke Shafer 2022. Built with ♥ using <a
      target="_blank"
      href="https://kit.svelte.dev/">SvelteKit</a
    >. Hosted on
    <a target="_blank" href="https://pages.cloudflare.com/"
      >Cloudflare Pages.</a>
  </p>
</footer>

<style>
  footer {
    box-sizing: border-box;
    width: 100%;

    background-color: rgb(var(--secondary-color));

    padding: 1rem;
    color: rgb(240, 253, 255);

    display: grid;
    place-items: end center;
  }

  p {
    color: rgb(240, 253, 255);
  }

  a {
    font-family: inherit;
    color: rgb(var(--highlight));
    text-decoration: underline;
    text-transform: none;
  }

  ul {
    font-size: 2rem;
    width: 100%;
    display: grid;
    place-items: center;
    place-content: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, 3rem);
  }

  a:hover {
    filter: brightness(1.2);
  }
</style>
