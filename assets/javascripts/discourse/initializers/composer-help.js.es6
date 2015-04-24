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
                    showModal(this, 'composer-help');
                    this.controllerFor('composer-help').setProperties({composerView: composerView});
                }
            }
        });

        ComposerView.reopen({
            initEditor: function () {
                // overwrite and wrap.
                this._super();
                if (Discourse.SiteSettings.modal_url) {
                    var view = this;
                    var btn = $('<button class="wmd-button"><span class="fa fa-question"></span></button>');
                    btn.click(function () {
                        view.get("controller").send("showComposerHelp", view);
                    });
                    $("#wmd-button-row").append(btn);
                }
            }
        });
    }
};