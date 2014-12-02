Discourse.ComposerHelpContentView = Discourse.View.extend({
    tagName: "div",
    classNames: ["composer-help-content"],
    parsedContent: function() {
        return this.get("model.content");
    }.property("model.content")
});

Discourse.ComposerHelpView = Discourse.ModalBodyView.extend({
    title: function() {return I18n.t("composer_help.title"); }.property()
});

Discourse.ComposerHelpController = Discourse.Controller.extend(Discourse.ModalFunctionality, {
    loading: true,
    content: '',

    refresh: function() {
        this.set("loading", true);

    },

    init: function(){
        this._super();
        this.setProperties({"loading": true, "content": ''});
        Discourse.ajax(Discourse.SiteSettings.modal_url + '.json').then(function(resp) {
            this.set('content', resp.post_stream.posts[0].cooked);
            this.refresh();
        }.bind(this))
    }
});

Discourse.ApplicationRoute.reopen({
    actions: {
        showComposerHelp: function (composerView) {
            Discourse.Route.showModal(this, 'composerHelp');
            this.controllerFor('composerHelp').setProperties({ composerView: composerView });
        }
    }
});

Discourse.ComposerView.reopen({
    initEditor: function () {
        // overwrite and wrap.
        this._super();
        var view = this;
        var btn = $('<button class="wmd-button"><span class="fa fa-question"></span></button>');
        btn.click(function () {
            view.get("controller").send("showComposerHelp", view);
        });
        $("#wmd-button-row").append(btn);
    }
});