import Menu from "./Menu.svelte";
import Button from "./Button.svelte";
import Items from "./Items.svelte";
import Item from "./Item.svelte";
import Divider from "./Divider.svelte";
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";

const MenuComponent = Object.assign(Menu, {
  Button: Button,
  Items: Items,
  Item: Item,
  Divider: Divider,
  Header: Header,
  Footer: Footer,
});

export default MenuComponent;
