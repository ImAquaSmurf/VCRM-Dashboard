<script lang="ts">
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  import { onMount, createEventDispatcher } from "svelte";
  import Component from "../../base-components/Component";
  import { init, type CkeditorProps, type CkeditorElement } from "./ckeditor";

  let as: CkeditorProps["as"] = "div";
  let value: CkeditorProps["value"];
  let config: CkeditorProps["config"] = {};
  let disabled: CkeditorProps["disabled"] = false;
  let ref: CkeditorProps["ref"] = undefined;

  export { as, value, config, disabled, ref };

  const dispatch = createEventDispatcher();

  const onChange = (newValue) => {
    value = newValue;
  };

  const onFocus = (evt, editor) => {
    dispatch("focus", { evt, editor });
  };

  const onBlur = (evt, editor) => {
    dispatch("blur", { evt, editor });
  };

  const onReady = (editor) => {
    dispatch("ready", { editor });
  };

  let editorRef: CkeditorElement;
  let cacheData = "";

  onMount(() => {
    if (editorRef) {
      ref = editorRef;

      init(editorRef, ClassicEditor, {
        props: { value, onChange, onFocus, onBlur, onReady, config, disabled },
        cacheData,
      });
    }
  });
</script>

<Component {...$$props} {as} {value} bind:ref={editorRef} />
