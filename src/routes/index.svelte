<script lang="ts">
  import { onMount } from 'svelte';

  let flexWrapper: HTMLElement;
  let headshot: HTMLElement;
  let textBubble: HTMLElement;
  let wrapped = 'not-wrapped';

  const setWrappedClass = (elements: HTMLElement[]): string => {
    let isWrapped = elements.reduce((accum, curEl, index, arr) => {
      if (index === 0) return false;
      let prevEl = arr[index - 1];
      if (curEl.offsetTop > prevEl.offsetTop + prevEl.clientHeight) return true;
      else return false;
    }, false);
    return isWrapped ? 'wrapped' : 'not-wrapped';
  };

  onMount(() => {
    const myObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        let children: HTMLElement[] = Array.from(
          entry.target.children
        ) as HTMLElement[];
        wrapped = setWrappedClass(children);
      });
    });
    myObserver.observe(flexWrapper);
  });
</script>

<section bind:this={flexWrapper}>
  <img
    src="https://luke-shafer-web-design.mo.cloudinary.net/images/headshot.png"
    alt="Luke's Headshot"
    width="300"
    bind:this={headshot} />

  <article class="card {wrapped}" bind:this={textBubble}>
    <h2>Hi! I'm Luke!</h2>

    <p>
      I'm a web designer based in Columbus, Ohio. I provide a personal,
      friendly, and communicative website design service for small businesses.
    </p>

    <p>
      <i>
        I believe in a <strong>personalized experience</strong> merging
        <strong>functional design</strong>
        with an <strong>artistic touch</strong>.
      </i>
    </p>

    <a class="btn" href="/contact">Get in Touch!</a>
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5em;
  }

  img {
    width: 21em;
    border-radius: 50%;
  }

  .card {
    width: 25em;
  }

  /* Chat bubble arrow */
  article::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    --triangle-height: 3em;
    --triangle-width: calc(var(--triangle-height) / 1.732);
    --triangle-center-position: calc(50% - var(--triangle-height) / 2);
    --triangle-top-position: calc(-1 * var(--triangle-height) + 1px);
    /* above +1px prevents visible gaps due to rounding  */
    --triangle-base-half: var(--triangle-width) solid transparent;
    --triangle-main-shape: var(--triangle-height) solid
      rgb(var(--background-base));
  }

  article.not-wrapped::before {
    /* Arrow on left when not wrapped */
    top: var(--triangle-center-position);
    left: var(--triangle-top-position);
    border-top: var(--triangle-base-half);
    border-bottom: var(--triangle-base-half);
    border-right: var(--triangle-main-shape);
  }

  article.wrapped::before {
    /* Arrow on top when wrapped */
    left: var(--triangle-center-position);
    top: var(--triangle-top-position);
    border-left: var(--triangle-base-half);
    border-right: var(--triangle-base-half);
    border-bottom: var(--triangle-main-shape);
  }

  p {
    font-size: 1em;
  }

  strong {
    color: rgb(var(--accent-color));
  }

  .btn {
    display: inline-block;
    position: absolute;
    /* font-size: 1.2em; */
  }
</style>
