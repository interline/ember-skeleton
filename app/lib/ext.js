var get = Ember.get;

Ember.View.reopen({
  templateForName: function(name, type) {
    if (!name) { return; }

    var templates = get(this, 'templates'),
        template = get(templates, name);

    if (!template) {
      template = require(name);
      if (!template) {
        throw new Ember.Error(fmt('%@ - Unable to find %@ "%@".', [this, type, name]));
      }
    }

    return template;
  }
});
