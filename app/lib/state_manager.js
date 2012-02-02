require('ember-skeleton/core');
require('ember-skeleton/states/start');

App.stateManager = Em.StateManager.create({

  rootElement: '#main',
  initialState: 'start',

  start: App.StartState

});
