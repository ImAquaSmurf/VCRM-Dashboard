import Dialog from "./Dialog.svelte";
import Description from "./Description.svelte";
import Footer from "./Footer.svelte";
import Panel from "./Panel.svelte";
import Title from "./Title.svelte";

const DialogComponent = Object.assign(Dialog, {
  Description: Description,
  Footer: Footer,
  Panel: Panel,
  Title: Title,
});

export default DialogComponent;
