<script context="module" lang="ts">
  import { twMerge } from "tailwind-merge";
  import { Menu as HeadlessMenu } from "@rgossiaux/svelte-headlessui";

  export interface MenuProps extends ExtractProps<typeof HeadlessMenu> {
    className?: string;
  }
</script>

<script lang="ts">
  let className: MenuProps["className"] = undefined;
  let as: MenuProps["as"] = "div";

  export { className as class, as };
</script>

<HeadlessMenu {...$$props} {as} class={twMerge(["relative", className])}>
  <slot />
</HeadlessMenu>
