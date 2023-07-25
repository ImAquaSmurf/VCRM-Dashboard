<script lang="ts">
  import {
    colorSchemeStore,
    setColorScheme,
    type ColorSchemes,
  } from "../../stores/color-scheme";
  import { darkModeStore } from "../../stores/dark-mode";
  import clsx from "clsx";

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];
    el.setAttribute("class", $colorSchemeStore.value);
    $darkModeStore.value && el.classList.add("dark");
  };

  const switchColorScheme = (colorScheme: ColorSchemes) => {
    setColorScheme(colorScheme);
    setColorSchemeClass();
  };

  setColorSchemeClass();
</script>

<!-- BEGIN: Main Color Switcher -->
<div
  class="fixed bottom-0 right-0 z-50 flex items-center justify-center h-12 px-5 mb-10 border rounded-full shadow-md box mr-52"
>
  <div class="hidden mr-4 sm:block text-slate-600 dark:text-slate-200">
    Color Scheme
  </div>
  <a
    on:click={(e) => {
      e.preventDefault();
      switchColorScheme("default");
    }}
    class={clsx([
      "block w-8 h-8 cursor-pointer bg-blue-800 rounded-full border-4 mr-1 hover:border-slate-200",

      $colorSchemeStore.value == "default" &&
        "border-slate-300 dark:border-darkmode-800/80",
      $colorSchemeStore.value != "default" &&
        "border-white dark:border-darkmode-600",
    ])}
    href="#top"><span /></a
  >
  <a
    on:click={(e) => {
      e.preventDefault();
      switchColorScheme("theme-1");
    }}
    class={clsx([
      "block w-8 h-8 cursor-pointer bg-emerald-900 rounded-full border-4 mr-1 hover:border-slate-200",

      $colorSchemeStore.value == "theme-1" &&
        "border-slate-300 dark:border-darkmode-800/80",
      $colorSchemeStore.value != "theme-1" &&
        "border-white dark:border-darkmode-600",
    ])}
    href="#top"><span /></a
  >
  <a
    on:click={(e) => {
      e.preventDefault();
      switchColorScheme("theme-2");
    }}
    class={clsx([
      "block w-8 h-8 cursor-pointer bg-blue-900 rounded-full border-4 mr-1 hover:border-slate-200",

      $colorSchemeStore.value == "theme-2" &&
        "border-slate-300 dark:border-darkmode-800/80",
      $colorSchemeStore.value != "theme-2" &&
        "border-white dark:border-darkmode-600",
    ])}
    href="#top"><span /></a
  >
  <a
    on:click={(e) => {
      e.preventDefault();
      switchColorScheme("theme-3");
    }}
    class={clsx([
      "block w-8 h-8 cursor-pointer bg-cyan-900 rounded-full border-4 mr-1 hover:border-slate-200",

      $colorSchemeStore.value == "theme-3" &&
        "border-slate-300 dark:border-darkmode-800/80",
      $colorSchemeStore.value != "theme-3" &&
        "border-white dark:border-darkmode-600",
    ])}
    href="#top"><span /></a
  >
  <a
    on:click={(e) => {
      e.preventDefault();
      switchColorScheme("theme-4");
    }}
    class={clsx([
      "block w-8 h-8 cursor-pointer bg-indigo-900 rounded-full border-4 hover:border-slate-200",

      $colorSchemeStore.value == "theme-4" &&
        "border-slate-300 dark:border-darkmode-800/80",
      $colorSchemeStore.value != "theme-4" &&
        "border-white dark:border-darkmode-600",
    ])}
    href="#top"><span /></a
  >
</div>
<!-- END: Main Color Switcher -->
