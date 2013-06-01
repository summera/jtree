// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'tests/test_1'
], function($, _, Backbone, Test_1){
	var AppRouter = Backbone.Router.extend({
		routes: {
	  		// Define some URL routes
	  		'':'home',
		}
  	});

	var initialize = function(){
		
		var app_router = new AppRouter;
		app_router.on('route:home', function(){
			console.log('Running Test 1');
			var test1 = new Test_1();
			test1.run();

		});
	
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});