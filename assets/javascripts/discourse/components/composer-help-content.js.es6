const ComposerHelpContentComponent = Em.Component.extend({
    tagName: "div",
    content: null,
    
    this.set("content", this.get("model.parsedContent"));
});

export default ComposerHelpContentComponent;
