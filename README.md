Ember Skeleton
==============

A skeleton application framework using Ember.js and Rake Pipeline.

Running
-------

    $ bundle install
    $ bundle exec rackup

App Structure
-------------

    ember-skeleton
    ├── Assetfile - App build file
    ├── Gemfile - Package dependencies for rakep/rack
    ├── Gemfile.lock - Here be dragons: don't touch, always include
    ├── app - App specific code
    │   ├── css - App CSS or SCSS (.scss)
    │   ├── lib - App code, *modularized during build*
    │   ├── modules - Module code, *already modularized*
    │   ├── plugins - Plugins (e.g. jquery.jsonrpc.js)
    │   │   └── loader.js - JS module loader
    │   ├── static - Static files, never touched, copied over during build
    │   ├── templates - Handlebars templates, *modularized during build*
    │   ├── tests - App tests
    │   └── vendor - Vendor code, *modularized during build*
    ├── assets - Built out asset files, minified in production
    │   ├── app.css - Built out app CSS/SCSS
    │   ├── loader.js - Built out JS module loader
    │   └── app.js - Built out app JS
    ├── config.ru - Rack development web server configuration
    ├── index.html - The app entry point
    └── tmp - Temporary build files used by rakep

Testing
-------

You can test the app by invoking

    $ bundle exec rake test

This executes the tests by using [Phantom.JS](http://www.phantomjs.org/), which you need to have installed.

Or you can run the tests via

    $ bundle exec rackup
    $ open http://localhost:9292/tests/index.html

If you develop on a Mac, you can automatically execute the tests everytime a file changes via

    $ bundle exec rake autotest
