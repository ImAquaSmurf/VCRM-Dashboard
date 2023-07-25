import Tab from "./Tab";
import Button from "./Button.svelte";
import Group from "./Group.svelte";
import List from "./List.svelte";
import Panels from "./Panels.svelte";
import Panel from "./Panel.svelte";

const TabComponent = Object.assign(Tab, {
  Button: Button,
  Group: Group,
  List: List,
  Panels: Panels,
  Panel: Panel,
});

export default TabComponent;
