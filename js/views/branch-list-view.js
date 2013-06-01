define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var BranchListView = Backbone.View.extend({

		tagName: "li",

		className: "branch",

		initialize: function(options) {
			//this.group = this.options.branch;
		},

		render: function(){
			this.$el.html("<a> <h3> Branch </h3> </a>");
		}

	});

	return BranchListView;

});
