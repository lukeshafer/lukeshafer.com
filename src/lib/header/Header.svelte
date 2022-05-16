<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<a class=logo-container sveltekit:prefetch href="/">
		<img class=logo src={logo} alt="" />
		<h1>LukeShafer<br>Web Design</h1>
	</a>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Portfolio</a>
			</li>
			<li class:active={$page.url.pathname === '/experience'}>
				<a sveltekit:prefetch href="/experience">Experience</a>
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
		background-color: hsla(0, 0%, 100%, 52%);
        --height: 10em;
        height: var(--height);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 10em;
        align-items: center;
        --padding-x: 5em;
        padding-right: var(--padding-x);
        font-size: 1rem;
    }

    a.logo-container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 2em;
        --padding-y: 1em;
        padding-top: var(--padding-y);
        padding-bottom: var(--padding-y);
        padding-right: 9em;
        padding-left: var(--padding-x);
        font-size: min(0.65em, 2vw);
        background-image: url(./brush-stroke.svg);
        background-size: auto 10.5em;
        background-repeat: no-repeat;
        background-position: right;
        --brightness: 100%;
        filter: brightness(var(--brightness))
    }

    a.logo-container:hover {
        --brightness: 110%;
        transition: --brightness 1s;

    }

    img.logo {
        height: 10em;
    }

    h1::first-line {
        color: var(--primary-color);
        letter-spacing: .27em;
        font-size: 0.66em;
        line-height: 0.9em;
    }

    h1 {
        font-weight: 100;
        color: var(--text-color);
        font-size: 4em;
        line-height: 0.9em;
        padding-bottom: 0.25em;
        white-space: nowrap;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-flow: row nowrap;
        font-size: 1em;
        gap: 1em;
        max-width: 50em;
        margin: auto;
    }

    li {
        font-size: 1.8em;
        font-weight: lighter;
        text-shadow: 0.03em 0.03em hsla(191, 40%, 24%, 0.4);
        padding: 0.3em 0.5em;
    }

    li:hover {
        background-color: white;
        transition: background-color 50ms;
        border-radius: 0.1em;
    }

    li a {
        color: var(--text-color);
    }
    
</style>
