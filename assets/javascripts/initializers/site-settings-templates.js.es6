export default {
    name: "site-settings-template",

        initialize: function (container) {
        if (Discourse.SiteSettingView){
            Discourse.SiteSettingView.reopen({
                templateName: function() {
                    // If we're editing a boolean, show a checkbox
                    if (this.get('content.type') === 'bool') return 'admin/templates/site_settings/setting_bool';
                    // If we're editing an enum field, show a dropdown
                    if (this.get('content.type') === 'enum' ) return 'admin/templates/site_settings/setting_enum';

                    // If we're editing a list, show a list editor
                    if (this.get('content.type') === 'list' ) return 'admin/templates/site_settings/setting_list';

                    if (this.get('content.default') === 'text' ) return 'admin/templates/site_settings/setting_text';
                    // Default to string editor
                    return 'admin/templates/site_settings/setting_string';

                }.property('content.type')
            });
        }
    }
};