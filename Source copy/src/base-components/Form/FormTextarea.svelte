<script context="module" lang="ts">
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import { type FromInlineContext } from "./FormInline.svelte";
  import { type InputGroupContext } from "./InputGroup/InputGroup.svelte";

  export interface FormTextareaProps extends HTMLTextareaAttributes {
    className?: string;
    formTextareaSize?: "sm" | "lg";
    rounded?: boolean;
    ref?: HTMLTextAreaElement;
  }
</script>

<script lang="ts">
  let className: FormTextareaProps["className"] = undefined;
  let formTextareaSize: FormTextareaProps["formTextareaSize"] = undefined;
  let rounded: FormTextareaProps["rounded"] = undefined;
  let ref: FormTextareaProps["ref"] = undefined;
  let value: FormTextareaProps["value"] = undefined;

  export { className as class, formTextareaSize, rounded, ref, value };

  const formInline = getContext<FromInlineContext>("formInline");
  const inputGroup = getContext<InputGroupContext>("inputGroup");
</script>

<textarea
  {...$$props}
  class={twMerge([
    "disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent",
    "[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent",
    "transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80",
    formTextareaSize == "sm" && "text-xs py-1.5 px-2",
    formTextareaSize == "lg" && "text-lg py-1.5 px-4",
    rounded && "rounded-full",
    formInline && "flex-1",
    inputGroup &&
      "rounded-none [&:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10",
    className,
  ])}
  on:blur
  on:change
  on:contextmenu
  on:focus
  on:input
  on:invalid
  on:reset
  on:select
  on:submit
  on:keydown
  on:keypress
  on:keyup
  on:click
  on:dblclick
  on:mousedown
  on:mousemove
  on:mouseout
  on:mouseover
  on:mouseup
  on:wheel
  bind:this={ref}
  bind:value
/>
