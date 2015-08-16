import showModal from 'discourse/lib/show-modal';
import ApplicationRoute from 'discourse/routes/application';
import ComposerView from 'discourse/views/composer';

export default
{
    name: 'composer-help',
    initialize()
    {
        ApplicationRoute.reopen({
            actions: {
                showComposerHelp: function (composerView) {
                    showModal('composer-help');
                    this.controllerFor('composer-help').setProperties({composerView: composerView});
                }
            }
        });

        ComposerView.reopen({
            initEditor: function () {
                // overwrite and wrap.
                this._super();
                if (Discourse.SiteSettings.composer_help_enabled
                    && Discourse.SiteSettings.composer_help_modal_url) {
                    var view = this;
                    var button_text = I18n.t("composer_help.button_text");
                    var btn = $('<button class="wmd-button wmd-composer-help-button" title="' + button_text + '" aria-label="' + button_text + '"></button>');
                    btn.click(function () {
                        view.get("controller").send("showComposerHelp", view);
                    });
                    $("#wmd-button-row,.wmd-button-row").append(btn);
                }
            }
        });
    }
};