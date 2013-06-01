define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var BranchListView = Backbone.View.extend({

		tagName: "li",

		className: "branch",

		initialize: function(options) {

		},

		render: function(){
			this.$el.html("<a> <h3>" + this.model.get_title() + "</h3> </a>");
		}

	});

	return BranchListView;

});
