import ModalFunctionality from 'discourse/mixins/modal-functionality';

export default Ember.Controller.extend(ModalFunctionality, {
    loading: true,
    parsedContent: '',

    refresh: function () {
        this.set("loading", true);
    },

    init: function () {
        this._super();
        this.setProperties({"loading": true, "parsedContent": ''});
        Discourse.ajax(Discourse.SiteSettings.composer_help_modal_url + '.json').then(function (resp) {
            this.set('parsedContent', resp.post_stream.posts[0].cooked);
            this.refresh();
        }.bind(this))
    }
});