<script context="module" lang="ts">
  import { twMerge } from "tailwind-merge";
  import { Popover as HeadlessPopover } from "@rgossiaux/svelte-headlessui";

  export interface PopoverProps extends ExtractProps<typeof HeadlessPopover> {
    className?: string;
  }
</script>

<script lang="ts">
  let className: PopoverProps["className"] = undefined;
  let as: PopoverProps["as"] = "div";

  export { className as class, as };
</script>

<HeadlessPopover
  {...$$props}
  {as}
  class={twMerge(["relative", className])}
  let:close
>
  <slot {close} />
</HeadlessPopover>
