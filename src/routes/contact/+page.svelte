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

  const noTypeCheck = (x: any) => x;
</script>

<section>
  <address class="card">
    <h3>Contact Info</h3>
    <a id="email" href="mailto:hello@lukeshafer.com"
      ><span class="main-icon">
        <Mail
          color="rgb(var(--accent-color))"
          fill="rgb(var(--background-base))"
          {...noTypeCheck({
            size: '0.7em',
          })} />
      </span><span class="link-text"><b>hello</b>@lukeshafer.com</span></a>
    <a id="phone" href="tel:+16145853382"
      ><span class="main-icon">
        <Phone
          color="rgb(var(--accent-color))"
          fill="rgb(var(--background-base))"
          {...noTypeCheck({
            size: '0.7em',
          })} />
      </span><span class="link-text phone-number"
        >614-<b>LUKE-ETC</b><br />614-585-3382</span
      ></a>
    <ul id="social-links">
      {#each socials as social}
        <Social
          {social}
          backgroundColor="rgb(var(--primary-color))"
          iconColor="rgb(var(--background-base))" />
      {/each}
    </ul>
  </address>
  <form action="https://formspree.io/f/mvollorl" method="POST">
    <h3>Want to collaborate or get a quote for your project?</h3>
    <label for="input-name" class="visibly-hidden">Name</label>
    <input type="text" name="name" placeholder="Name" id="input-name" />
    <label for="input-email" class="visibly-hidden">Email</label>
    <input type="email" name="email" placeholder="Email" id="input-email" />
    <label for="input-phone" class="visibly-hidden">Phone</label>
    <input type="tel" id="input-phone" name="phone" placeholder="Phone" />
    <label for="input-message" class="visibly-hidden">Message</label>
    <textarea
      name="message"
      placeholder="Message"
      id="input-message"
      rows="6" />
    <span class="btn-wrapper">
      <button class="btn" type="submit">Submit</button>
    </span>
  </form>
</section>

<style>
  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1em 4em;
  }

  address {
    font-style: normal;
    white-space: nowrap;
    gap: 1em;
  }

  address > * {
    margin: 0.5em;
  }

  address > a {
    display: grid;
    grid-template-columns: 2em 10em;
    grid-template-rows: 2em;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    font-size: 1.3em;
    color: rgb(var(--text-color));
  }

  h3 {
    text-align: center;
  }

  form h3 {
    font-size: 1.6em;
  }

  a {
    font-family: inherit;
    text-transform: inherit;
  }

  a b {
    color: rgb(var(--accent-color));
  }

  .phone-number::first-line {
    font-size: calc(1em / 0.8);
  }

  .phone-number {
    font-size: 0.8em;
    letter-spacing: 0.15em;
  }

  ul {
    margin-top: 0.9em;
    font-size: 1.3em;
    display: grid;
    grid: 1.4em / auto-flow 2em;
    align-items: center;
    justify-content: space-evenly;
    height: 1.4em;
  }

  address > a:hover .main-icon {
    font-size: 1.7em;
  }

  .main-icon {
    background-color: rgb(var(--accent-color));
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    margin: auto;
    transition: font-size 100ms ease-out;
  }

  form {
    max-width: 25em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5em;
    gap: 0.7em;
  }

  input,
  textarea {
    border-radius: 0;
    width: 80%;
    padding: 0.5em 1em;
    border: none;
  }

  .btn {
    font-weight: lighter;
    cursor: pointer;
  }
</style>
