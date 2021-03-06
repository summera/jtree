// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.10.0.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates'
  },
  shim: {
  	backbone: {
  		deps: ["underscore", "jquery"],
  		exports: "Backbone"
  	},
  	underscore: {
  		exports: "_"
  	}
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});