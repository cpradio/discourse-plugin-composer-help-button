import { withPluginApi } from 'discourse/lib/plugin-api';
import Composer from 'discourse/components/d-editor';
import showModal from 'discourse/lib/show-modal';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.composer_help_enabled
    && siteSettings.composer_help_modal_url) {
    Composer.reopen({
      actions: {
        showComposerHelp: function () {
          showModal('composer-help', { title: 'composer_help.title' });
        }
      }
    });

    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "composer_help_button",
        group: "extras",
        icon: "question",
        action: 'showComposerHelp'
      });
    });
  }
}

export default
{
  name: 'composer-help',

  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api));
  }
};
