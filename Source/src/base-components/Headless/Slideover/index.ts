import Slideover from "./Slideover.svelte";
import Description from "./Description.svelte";
import Footer from "./Footer.svelte";
import Panel from "./Panel.svelte";
import Title from "./Title.svelte";

const SlideoverComponent = Object.assign(Slideover, {
  Description: Description,
  Footer: Footer,
  Panel: Panel,
  Title: Title,
});

export default SlideoverComponent;
