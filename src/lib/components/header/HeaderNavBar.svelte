<script lang="ts">
  import { page } from '$app/stores';
  import logo from './logo.svg';
  import Logo from '$lib/assets/Logo.svelte';

  let menuButtonActive = false;
  let hidden: boolean;

  let backgroundImage = ``;
</script>

<header>
  <a class="logo-container" sveltekit:prefetch href="/">
    <Logo
      title="Logo"
      width="10em"
      height="10em"
      lColor="rgb(var(--primary-color)"
      sColor="rgb(var(--secondary-color)" />
    <h1>LukeShafer<br />Web Design</h1>
  </a>

  <button
    class="hamburger {menuButtonActive ? 'active' : 'not-active'}"
    on:click={() => (menuButtonActive = !menuButtonActive)}
    hidden>
    <span />
    <span />
    <div class="visibly-hidden">Navigation Menu</div>
    <span />
  </button>

  <nav class={menuButtonActive ? 'active' : 'not-active'}>
    <ul>
      <li class:active={$page.url.pathname === '/work'}>
        <a
          sveltekit:prefetch
          href="/work"
          on:click={() => {
            menuButtonActive = false;
          }}>Work</a>
      </li>
      <li class:active={$page.url.pathname === '/contact'}>
        <a
          sveltekit:prefetch
          href="/contact"
          on:click={() => {
            menuButtonActive = false;
          }}>Contact</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a
          sveltekit:prefetch
          href="/about"
          on:click={() => {
            menuButtonActive = false;
          }}>About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: rgba(var(--background-base), 0.52);
    --height: 10em;
    height: var(--height);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 10em;
    align-items: center;
    --padding-x: 5em;
    padding-right: var(--padding-x);
    /* font-size: min(1rem, 1.4vw); */
    font-size: clamp(min(2.6vw, 0.7rem), 1.4vw, 1rem);
  }

  a.logo-container {
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 2em;
    --padding-y: 1em;
    padding: var(--padding-y) var(--padding-x);
    background-image: url(./brush-stroke.svg);
    background-size: auto 10.5em;
    background-repeat: no-repeat;
    background-position: 105% 50%;
    --brightness: 100%;
    filter: brightness(var(--brightness));
    font-size: 0.6em;
    transition: background-size 100ms, background-position 100ms;
  }

  a.logo-container > * {
    z-index: 1;
  }

  a.logo-container:hover {
    --brightness: 105%;
    background-size: auto 11em;
    background-position: 100% 50%;
  }

  h1::first-line {
    color: rgb(var(--primary-color));
    letter-spacing: 0.27em;
    font-size: 0.66em;
    line-height: 0.9em;
  }

  h1 {
    font-weight: 100;
    color: rgb(var(--text-color));
    font-size: 4em;
    line-height: 0.9em;
    padding-bottom: 0.25em;
    white-space: nowrap;
  }

  button.hamburger {
    flex-direction: column;
    justify-content: center;
    border-style: none;
    --line-spacing: 0.5em;
    gap: var(--line-spacing);
    padding: var(--line-spacing);
    background-color: transparent;
    margin-left: auto;
  }

  button.hamburger:hover {
    cursor: pointer;
  }
  button.hamburger:hover span {
    filter: brightness(150%);
    /* font-size: 2em; */
  }

  button.hamburger span {
    display: block;
    width: 3.2em;
    text-align: center;
    --line-height: 0.3em;
    --translate-amount: calc(var(--line-spacing) + var(--line-height));
    height: var(--line-height);
    position: relative;
    background-color: rgb(var(--text-color));
    transform-origin: center;
    transition: transform 250ms;
  }

  button.hamburger.active span:first-child {
    transform: translateY(var(--translate-amount)) rotate(0.125turn);
  }

  button.hamburger.active span:last-child {
    transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
  }

  button.hamburger.active span {
    transform: scale(0, 1);
  }

  nav {
    padding-left: 10vw;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 1em;
    gap: 1em;
  }

  li {
    display: block;
    font-size: 2em;
    font-weight: lighter;
    text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
    width: 3.5em;
    height: 1.3em;
  }

  li:hover {
    background-color: white;
    transition: background-color 50ms;
    border-radius: 0.1em;
  }

  li a {
    display: inline-block;
    color: rgb(var(--text-color));
    width: 100%;
    height: 100%;
    text-align: center;
  }

  @media screen and (max-width: 810px) {
    header {
      background-color: rgba(var(--background-base), 0.8);
    }

    button.hamburger {
      display: flex;
    }
    nav {
      z-index: 1;
      --font-size: 3;
      font-size: calc(var(--font-size) * 1em);
      position: absolute;
      --width: 10em;
      /* width: 0; */
      width: var(--width);
      right: 0;
      transform: translateX(15em);
      /* right: calc(-1 * var(--width)); */
      top: calc(var(--height) / var(--font-size));
      background: inherit;
      height: calc(100% - (var(--height) / var(--font-size)));
      transition: transform 400ms, width 400ms;
      padding: 0;
    }
    nav.active {
      transform: translateX(0);
    }
    nav ul {
      overflow: inherit;
      position: absolute;
      left: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      width: 100%;
      height: 100%;
    }
  }
</style>
