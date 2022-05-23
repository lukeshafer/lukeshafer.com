<script lang="ts">
  export let lColor = 'blue';
  export let sColor = 'green';
  export let width = '200';
  export let height = '200';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  {width}
  zoomAndPan="magnify"
  viewBox="0 0 375 250"
  {height}
  preserveAspectRatio="xMidYMid meet"
  version="1.0">
  <defs>
    <g />
  </defs>
  <path
    stroke-linecap="butt"
    transform="matrix(0, 42, -42, 0, 21, 0)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 4 0 "
    stroke={lColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(42, 0, 0, 42, 0, 163)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 7 0 "
    stroke={lColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(-42, 0, 0, -42, 375, 21)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 7 0 "
    stroke={sColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(42, 0, 0, 42, 0, 225)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 9 0 "
    stroke={sColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(-42, 0, 0, -42, 372, 96)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 7 0 "
    stroke={sColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(0, 39, -42, 0, 93, 0)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 3 0 "
    stroke={sColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
  <path
    stroke-linecap="butt"
    transform="matrix(0, 42, -42, 0, 354, 75)"
    fill="none"
    stroke-linejoin="miter"
    d="M 0 0 L 4 0 "
    stroke={sColor}
    stroke-width="1"
    stroke-opacity="1"
    stroke-miterlimit="4" />
</svg>
