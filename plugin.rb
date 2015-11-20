# name: discourse-plugin-composer-help-button
# about: Add a help button to the composer window
# version: 0.4.1
# authors: Matthew Wilkin
# url: https://github.com/cpradio/discourse-plugin-composer-help-button

enabled_site_setting :composer_help_enabled

register_asset "javascripts/admin/templates/site_settings/setting_text.hbs"
register_asset "javascripts/discourse/templates/composer-help.hbs"

register_asset 'stylesheets/composer-help.scss'