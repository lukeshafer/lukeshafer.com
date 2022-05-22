<script lang="ts">
  import { page } from '$app/stores';
  import logo from './logo.svg';

  let menuButtonActive = false;
  let hidden: boolean;

  // const handleClick = () => isClicked = !isClicked;
</script>

<header>
  <a class="logo-container" sveltekit:prefetch href="/">
    <img class="logo" src={logo} width="200" alt="" />
    <h1>LukeShafer<br />Web Design</h1>
  </a>

  <button
    class="hamburger {menuButtonActive ? 'active' : 'not-active'}"
    on:click={() => (menuButtonActive = !menuButtonActive)}
    hidden>
    <span />
    <span />
    <span />
  </button>

  <nav class={menuButtonActive ? 'active' : 'not-active'}>
    <ul>
      <li class:active={$page.url.pathname === '/work'}>
        <a sveltekit:prefetch href="/work">Work</a>
      </li>
      <li class:active={$page.url.pathname === '/contact'}>
        <a sveltekit:prefetch href="/contact">Contact</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
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
    background-position: right;
    --brightness: 100%;
    filter: brightness(var(--brightness));
    font-size: 0.6em;
  }

  a.logo-container:hover {
    --brightness: 110%;
    transition: --brightness 1s;
  }

  img.logo {
    height: 10em;
    width: auto;
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

  /* button.hamburger span:last-child {
        
    } */

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
    font-size: 2em;
    font-weight: lighter;
    text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
    padding: 0.3em 0.5em;
  }

  li:hover {
    background-color: white;
    transition: background-color 50ms;
    border-radius: 0.1em;
  }

  li a {
    color: rgb(var(--text-color));
  }

  @media screen and (max-width: 810px) {
    :root {
      overflow: hidden;
    }
    header {
      background-color: rgba(var(--background-base), 0.733);
    }

    button.hamburger {
      display: flex;
    }
    nav {
      z-index: 1;
      --font-size: 2;
      font-size: calc(var(--font-size) * 1em);
      position: absolute;
      --width: 15em;
      /* width: 0; */
      width: var(--width);
      right: 0;
      transform: translateX(15em);
      /* right: calc(-1 * var(--width)); */
      top: calc(var(--height) / var(--font-size));
      background: inherit;
      height: calc(100vh - (var(--height) / var(--font-size)));
      transition: transform 400ms, width 400ms;
      padding: 0;
    }

    nav.active {
      /* width: var(--width); */
      transform: translateX(0);
    }
    nav ul {
      overflow: inherit;
      position: absolute;
      left: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      width: var(--width);
      height: 100%;
    }
  }
</style>
