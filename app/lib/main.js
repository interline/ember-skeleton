require('ember-skeleton/core');
require('ember-skeleton/store');
require('ember-skeleton/state_manager');
require('ember-skeleton/routes');

// Ember.routes.wantsHistory = true;
Ember.routes.add('', App, App.routes.mainRoute);
