import Component from "@ember/component";
import { bufferedProperty } from "discourse/mixins/buffered-content";

const ComposerHelpContentComponent = Component.extend(bufferedProperty("model"), {
    tagName: "div",
});

export default ComposerHelpContentComponent;
