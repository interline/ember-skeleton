(function(window) {
  function requireWrapper(self) {
    var require = function() {
      return self.require.apply(self, arguments);
    };
    require.exists = function() {
      return self.exists.apply(self, arguments);
    };
    return require;
  }

  var Context = function() {
    return this;
  };

  var Loader = function() {
    this.modules = {};
    this.loaded = {};
    this.exports = {};
    return this;
  };

  Loader.prototype.require = function(name) {
    if (!this.loaded[name]) {
      var module = this.modules[name];
      if (module) {
        var require = requireWrapper(this);
        try {
          this.exports[name] = module.call(new Context(), require);
          return this.exports[name];
        } finally {
          this.loaded[name] = true;
        }
      } else {
        throw "The module '" + name + "' has not been registered";
      }
    }
    return this.exports[name];
  };

  Loader.prototype.register = function(name, module) {
    if (this.exists(name)) {
      throw "The module '"+ "' has already been registered";
    }
    this.modules[name] = module;
    return true;
  };

  Loader.prototype.unregister = function(name) {
    var loaded = !!this.loaded[name];
    if (loaded) {
      delete this.exports[name];
      delete this.modules[name];
      delete this.loaded[name];
    }
    return loaded;
  };

  Loader.prototype.exists = function(name) {
    return name in this.modules;
  };

  window.loader = new Loader();
})(this);
