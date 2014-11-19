Discourse.ComposerHelpView = Discourse.ModalBodyView.extend({
    title: function() {return I18n.t("composer_help.title"); }.property()
});

Discourse.ComposerHelpController = Discourse.Controller.extend(Discourse.ModalFunctionality, {
    loading: true,

    actions: {
    },

    init: function(){
        this._super();
        this.setProperties({"loading": true});
        this.set("loading", false);
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