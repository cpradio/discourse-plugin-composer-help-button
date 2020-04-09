const ComposerHelpContentComponent = Ember.Component.extend({
    tagName: "div",
    content: null,
    
    didReceiveAttrs() {
        this.set("content", this.model.parsedContent);
    }
});

export default ComposerHelpContentComponent;
