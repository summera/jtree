define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var LeafListView = Backbone.View.extend({

		tagName: "li",

		className: "leaf",

		initialize: function(options) {
			
		},

		render: function(){
			this.$el.html("<a> <h4> Leaf </h4> </a>");
		}

	});

	return LeafListView;

});
