import Popover from "./Popover.svelte";
import Button from "./Button.svelte";
import Panel from "./Panel.svelte";

const DialogComponent = Object.assign(Popover, {
  Button: Button,
  Panel: Panel,
});

export default DialogComponent;
