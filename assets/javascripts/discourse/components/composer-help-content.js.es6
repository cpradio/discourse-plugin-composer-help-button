export default Em.Component.extend({
    tagName: "div",
    _shouldRerender: Discourse.View.renderIfChanged('model.parsedContent'),
    render: function(buffer) {
        buffer.push(this.get("model.parsedContent"));
    }
});