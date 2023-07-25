<script context="module" lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";

  export interface ImageZoomProps extends HTMLImgAttributes {
    className?: string;
  }
</script>

<script lang="ts">
  import "zoom-vanilla.js/dist/zoom-vanilla.min.js";

  let className: ImageZoomProps["className"] = undefined;
  let alt: ImageZoomProps["alt"];

  export { className as class, alt };
</script>

<img {...$$props} class={className} {alt} data-action="zoom" />
