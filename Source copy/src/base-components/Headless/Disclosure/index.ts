import Disclosure from "./Disclosure";
import Group from "./Group.svelte";
import Button from "./Button.svelte";
import Panel from "./Panel.svelte";

const DisclosureComponent = Object.assign(Disclosure, {
  Group: Group,
  Button: Button,
  Panel: Panel,
});

export default DisclosureComponent;
