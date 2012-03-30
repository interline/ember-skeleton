require('ember-skeleton/core');
require('ember-skeleton/states/start');

App.stateManager = Ember.StateManager.create({

  rootElement: '#main',
  initialState: 'start',

  start: App.StartState

});
