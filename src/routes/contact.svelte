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

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--primary-color));
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    margin: auto;
    transition: font-size 100ms ease-out;
  }

  li a:hover,
  address > a:hover .main-icon {
    font-size: 1.7em;
  }

  .icon-wrapper {
    position: relative;
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
    font-size: 1.2em;
    font-weight: lighter;
  }
</style>
