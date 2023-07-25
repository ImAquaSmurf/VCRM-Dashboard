<script lang="ts">
  import {
    type FormattedMenu,
    nestedMenu,
  } from "../../layouts/SideMenu/side-menu";
  import { linkTo } from "./mobile-menu";
  import { useLocation, useNavigate } from "svelte-navigator";
  import { sideMenuStore } from "../../stores/side-menu";
  import Lucide from "../../base-components/Lucide";
  import logoUrl from "../../assets/images/logo.svg";
  import clsx from "clsx";
  import SimpleBar from "simplebar";
  import { slide } from "svelte/transition";

  const location = useLocation();
  const navigate = useNavigate();

  let formattedMenu: Array<FormattedMenu | "divider"> = [];
  const mobileMenu = () => nestedMenu($sideMenuStore.menu, $location);

  let activeMobileMenu = false;
  const setActiveMobileMenu = (active: boolean) => {
    activeMobileMenu = active;
  };

  let scrollableRef: HTMLDivElement;

  $: {
    if (scrollableRef) {
      new SimpleBar(scrollableRef);
    }

    if ($sideMenuStore || $location) {
      formattedMenu = mobileMenu();
    }
  }
</script>

<!-- BEGIN: Mobile Menu -->
<div
  class={clsx([
    "mobile-menu w-full fixed bg-primary/90 z-[60] border-b border-white/[0.08] -mt-5 -mx-3 sm:-mx-8 mb-6 dark:bg-darkmode-800/90 md:hidden",
    "before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out",
    !activeMobileMenu && "before:invisible before:opacity-0",
    activeMobileMenu && "before:visible before:opacity-100",
  ])}
>
  <div class="h-[70px] px-3 sm:px-8 flex items-center">
    <a href="#top" class="flex mr-auto">
      <img
        alt="Midone Tailwind HTML Admin Template"
        class="w-6"
        src={logoUrl}
      />
    </a>
    <a
      href="#top"
      on:click={(e) => {
        e.preventDefault();
        activeMobileMenu = !activeMobileMenu;
      }}
    >
      <Lucide
        icon="BarChart2"
        class="w-8 h-8 text-white transform -rotate-90"
      />
    </a>
  </div>
  <div
    bind:this={scrollableRef}
    class={clsx([
      "h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800",
      "[&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50",
      activeMobileMenu && "ml-0",
    ])}
  >
    <a
      href="#top"
      on:click={(e) => {
        e.preventDefault();
        activeMobileMenu = !activeMobileMenu;
      }}
      class={clsx([
        "fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out",
        !activeMobileMenu && "invisible opacity-0",
        activeMobileMenu && "visible opacity-100",
      ])}
    >
      <Lucide icon="XCircle" class="w-8 h-8 text-white transform -rotate-90" />
    </a>
    <ul class="py-2">
      <!-- BEGIN: First Child -->
      {#each formattedMenu as menu, menuKey}
        {#if menu == "divider"}
          <li class="my-6 menu__divider" />
        {:else}
          <li>
            <a
              href={menu.subMenu ? "javascript:;" : menu.pathname}
              on:click={(e) => {
                e.preventDefault();
                menu !== "divider" &&
                  linkTo(menu, navigate, setActiveMobileMenu);
                formattedMenu = [...formattedMenu];
              }}
              class={clsx([menu.active ? "menu menu--active" : "menu"])}
            >
              <div class="menu__icon">
                <Lucide icon={menu.icon} />
              </div>
              <div class="menu__title">
                {menu.title}
                {#if menu.subMenu}
                  <div
                    class={clsx([
                      "menu__sub-icon",
                      menu.activeDropdown && "transform rotate-180",
                    ])}
                  >
                    <Lucide icon="ChevronDown" />
                  </div>
                {/if}
              </div>
            </a>
            {#if menu.subMenu && menu.activeDropdown}
              <ul
                class={clsx([menu.activeDropdown && "menu__sub-open"])}
                transition:slide|local={{ duration: 300 }}
              >
                {#each menu.subMenu as subMenu, subMenuKey}
                  <li>
                    <a
                      href={subMenu.subMenu ? "javascript:;" : subMenu.pathname}
                      class={clsx([
                        subMenu.active ? "menu menu--active" : "menu",
                      ])}
                      on:click={(e) => {
                        e.preventDefault();
                        linkTo(subMenu, navigate, setActiveMobileMenu);
                        formattedMenu = [...formattedMenu];
                      }}
                    >
                      <div class="menu__icon">
                        <Lucide icon={subMenu.icon} />
                      </div>
                      <div class="menu__title">
                        {subMenu.title}
                        {#if subMenu.subMenu}
                          <div
                            class={clsx([
                              "menu__sub-icon",
                              subMenu.activeDropdown && "transform rotate-180",
                            ])}
                          >
                            <Lucide icon="ChevronDown" />
                          </div>
                        {/if}
                      </div>
                    </a>
                    {#if subMenu.subMenu && subMenu.activeDropdown}
                      <ul
                        class={clsx([
                          subMenu.activeDropdown && "menu__sub-open",
                        ])}
                        transition:slide|local={{ duration: 300 }}
                      >
                        {#each subMenu.subMenu as lastSubMenu, lastSubMenuKey}
                          <li>
                            <a
                              href={lastSubMenu.subMenu
                                ? "javascript:;"
                                : lastSubMenu.pathname}
                              class={clsx([
                                lastSubMenu.active
                                  ? "menu menu--active"
                                  : "menu",
                              ])}
                              on:click={(e) => {
                                e.preventDefault();
                                linkTo(
                                  lastSubMenu,
                                  navigate,
                                  setActiveMobileMenu
                                );
                                formattedMenu = [...formattedMenu];
                              }}
                            >
                              <div class="menu__icon">
                                <Lucide icon={lastSubMenu.icon} />
                              </div>
                              <div class="menu__title">{lastSubMenu.title}</div>
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/if}
      {/each}
      <!-- END: First Child -->
    </ul>
  </div>
</div>
<!-- END: Mobile Menu -->
