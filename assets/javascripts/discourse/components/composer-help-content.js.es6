import { bufferedRender } from 'discourse-common/lib/buffered-render';

export default Em.Component.extend(bufferedRender({
    tagName: "div",
    rerenderTriggers: ['model.parsedContent'],

    buildBuffer(buffer) {
        buffer.push(this.get("model.parsedContent"));
    }
}));