import { type NavigateFn } from "svelte-navigator";
import { type FormattedMenu } from "../../layouts/SideMenu/side-menu";

const linkTo = (
  menu: FormattedMenu,
  navigate: NavigateFn,
  setActiveMobileMenu: (active: boolean) => void
) => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    if (menu.pathname !== undefined) {
      setActiveMobileMenu(false);
      navigate(menu.pathname);
    }
  }
};

export { linkTo };
