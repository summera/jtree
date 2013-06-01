define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var LeafListView = Backbone.View.extend({

		tagName: "li",

		className: "leaf",

		initialize: function(options) {
			this.item = this.options.leaf;
		},

		render: function(){
			this.$el.html("<h4> Leaf </h4>");
		}

	});

	return LeafListView;

});
