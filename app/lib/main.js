require('ember-skeleton/core');
require('ember-skeleton/store');
require('ember-skeleton/state_manager');
require('ember-skeleton/routes');

// SC.routes.wantsHistory = true;
SC.routes.add('', App, App.routes.mainRoute);
