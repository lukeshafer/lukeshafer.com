<script lang="ts">
  import {
    Mail,
    Phone,
    Github,
    Linkedin,
    Instagram,
    Facebook,
  } from 'lucide-svelte';

  const socials = [
    {
      name: 'GitHub',
      component: Github,
      href: 'https://github.com/lukeshafer/',
      bottom: true,
    },
    {
      name: 'LinkedIn',
      component: Linkedin,
      href: 'https://www.linkedin.com/in/lukealanshafer/',
    },
    {
      name: 'Instagram',
      component: Instagram,
      href: 'https://www.instagram.com/luke.web.design/',
      invert: true,
    },
    {
      name: 'FaceBook',
      component: Facebook,
      href: 'https://www.facebook.com/lukeshaferwebdesign/',
      bottom: true,
    },
  ];
</script>

<div class="page-wrapper">
  <address>
    <h2>Contact Info</h2>
    <a id="email" href="mailto:hello@lukeshafer.com"
      ><b>hello</b>@lukeshafer.com</a>
    <a id="phone" href="tel:+16145853382"
      >614-<b>LUKE-ETC</b><br />614-585-3382</a>
    <ul id="links">
      {#each socials as social}
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
      {/each}
    </ul>
  </address>
  <section class="form" />
</div>

<style>
  div.page-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1em 4em;
    margin: 3em;
  }

  address {
    background-color: rgb(var(--background-base));
    padding: 1em 1.5em;
    font-size: 2em;
    font-style: normal;
  }

  address > * {
    margin: 1em;
  }

  h2 {
    text-align: center;
  }

  a {
    display: block;
    font-family: inherit;
    text-transform: inherit;
    font-size: 0.8em;
    color: rgb(var(--text-color));
  }

  a b {
    color: rgb(var(--accent-color));
  }

  a#phone::first-line {
    font-size: calc(0.8em / 0.65);
  }

  a#phone {
    font-size: 0.65em;
    letter-spacing: 0.15em;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--primary-color));
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    border-radius: 100%;
  }

  .icon-wrapper {
    position: relative;
    align-self: stretch;
  }
</style>
