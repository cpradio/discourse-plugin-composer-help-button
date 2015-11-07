import showModal from 'discourse/lib/show-modal';
import ApplicationRoute from 'discourse/routes/application';
import ComposerView from 'discourse/views/composer';
import { onToolbarCreate } from 'discourse/components/d-editor';

export default
{
    name: 'composer-help',

    initialize(container)
    {
      const siteSettings = container.lookup('site-settings:main');

      if (siteSettings.composer_help_enabled
        && siteSettings.composer_help_modal_url)
      {
        if (typeof Discourse.ComposerEditorComponent === "undefined")
        {
          ApplicationRoute.reopen({
            actions: {
              showComposerHelp: function (composerView)
              {
                showModal('composer-help');
                this.controllerFor('composer-help').setProperties({composerView: composerView});
              }
            }
          });

          ComposerView.reopen({
            initEditor: function ()
            {
              // overwrite and wrap.
              this._super();
              var view = this;
              var button_text = I18n.t("composer_help.button_text");
              var btn = $('<button class="wmd-button wmd-composer-help-button" title="' + button_text + '" aria-label="' + button_text + '"></button>');
              btn.click(function () {
                view.get("controller").send("showComposerHelp", view);
              });
              $("#wmd-button-row,.wmd-button-row").append(btn);
            }
          });
        }
        else
        {
          Discourse.DEditorComponent.reopen({
            actions: {
              showComposerHelp: function()
              {
                showModal('composer-help');
              }
            }
          });

          onToolbarCreate(toolbar => {
            toolbar.addButton({
              id: "composer_help_button",
              group: "extras",
              icon: "question",
              action: 'showComposerHelp'
            });
          });
        }
      }
    }
};