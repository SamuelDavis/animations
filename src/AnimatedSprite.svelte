<script lang="ts">
  import type { Animation } from "./animations";

  export let animation: Animation;
  $: style = Object.entries(animation).reduce(
    (acc: any, [key, value]: [keyof Animation, any]) => {
      switch (key) {
        case "width":
        case "height":
          value = `${value}px`;
          break;
        case "src":
          value = `url('${value}')`;
          break;
        case "speed":
          value = `${value}s`;
          break;
      }
      return `${acc}--${key}:${value};`;
    },
    ""
  );
</script>

<div {style} {...$$props} />

<style lang="css">
  :root {
    --frames: 0;
    --width: 0;
    --height: 0;
    --src: "";
    --speed: 0s;
  }
  div {
    width: var(--width);
    height: var(--height);
    background-image: var(--src);
    animation: animateSprite var(--speed) steps(var(--frames), end) infinite;
  }

  @keyframes animateSprite {
    from {
      background-position: 0 0;
    }
    to {
      background-position: calc(-1 * var(--width) * var(--frames)) 0;
    }
  }
</style>
