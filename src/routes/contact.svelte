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
      ><span class="main-icon">
        <Mail
          color="rgb(var(--accent-color))"
          fill="rgb(var(--background-base))" />
      </span><span><b>hello</b>@lukeshafer.com</span></a>
    <a id="phone" href="tel:+16145853382"
      ><span class="main-icon">
        <Phone
          color="rgb(var(--accent-color))"
          fill="rgb(var(--background-base))" />
      </span><span class="phone-number"
        >614-<b>LUKE-ETC</b><br />614-585-3382</span
      ></a>
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
  <form action="">
    <h3>Want to collaborate or get a quote for your project?</h3>
    <label for="input-name" class="visibly-hidden">Name</label>
    <input type="text" name="Name" placeholder="Name" id="input-name" />
    <label for="input-email" class="visibly-hidden">Email</label>
    <input type="email" name="Email" placeholder="Email" id="input-email" />
    <label for="input-phone" class="visibly-hidden">Phone</label>
    <input
      type="tel"
      id="input-phone"
      name="Phone"
      placeholder="Phone"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
    <label for="input-message" class="visibly-hidden">Message</label>
    <textarea
      name="Message"
      placeholder="Message"
      id="input-message"
      rows="6" />
    <button class="btn" type="submit">Submit</button>
  </form>
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
    padding: 0em 1.5em;
    font-size: 2em;
    font-style: normal;
    white-space: nowrap;
  }

  address > * {
    margin: 1em;
  }

  h2 {
    text-align: center;
  }

  h3 {
    font-size: 2em;
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

  #email,
  #phone {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
  }

  .phone-number::first-line {
    font-size: calc(1em / 0.8);
  }

  .phone-number {
    font-size: 0.8em;
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

  .main-icon {
    background-color: rgb(var(--accent-color));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3em;
    border-radius: 1em;
  }

  form {
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
    width: 20em;
    padding: 0.5em 1em;
    border: none;
  }

  .btn {
    font-size: 1.2em;
    font-weight: lighter;
  }
</style>
