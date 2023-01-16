<script lang="ts">
  import type { Animation } from "./animations";
  import { derived, writable } from "svelte/store";
  import { Action, Animal, animations } from "./animations";
  import AnimatedSprite from "./AnimatedSprite.svelte";

  const animal = writable<Animal>(Animal.Bear);
  const action = writable<Action>(Action.Idle);
  const animation = derived([animal, action], ([animal, action]): Animation => {
    const src = `/Wild Animals/${animal}/${animal}_${action}.png`;
    return { src, ...animations[animal][action] };
  });
</script>

<header>
  <form on:submit|preventDefault>
    <label>
      Animal: <select bind:value={$animal}>
        {#each Object.keys(Animal) as value}
          <option {value}>{value}</option>
        {/each}
      </select>
    </label>
    <label>
      Action: <select bind:value={$action}>
        {#each Object.keys(Action) as value}
          <option {value}>{value}</option>
        {/each}
      </select>
    </label>
  </form>
</header>

<main>
  <figure>
    <AnimatedSprite bind:animation={$animation} />
    <figcaption>
      <small>
        Art courtesy of
        <a href="https://opengameart.org/content/animated-wild-animals">
          ScratchIO & OpenGameArt
        </a>
      </small>
    </figcaption>
  </figure>
</main>
