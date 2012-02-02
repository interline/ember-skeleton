require('ember-skeleton/core');
require('ember-skeleton/store');
require('ember-skeleton/state_manager');
require('ember-skeleton/routes');

// Em.routes.wantsHistory = true;
Em.routes.add('', App, App.routes.mainRoute);
