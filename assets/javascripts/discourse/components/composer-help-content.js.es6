const ComposerHelpContentComponent = Em.Component.extend({
    tagName: "div",
    content: null,
    
    didReceiveAttrs() {
        this.set("content", this.model.parsedContent.htmlSafe());
    }
});

export default ComposerHelpContentComponent;
