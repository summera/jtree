define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var TreeView = Backbone.View.extend({

		tagName: "div",
		className: "treeContainer",

		initialize: function(options) {
			this.tree = this.options.tree;
			this.breadCrumbs = [];
		},

		render: function(){
			var that = this;
			this.$el.html("<h2> Tree </h2>");

			this.tree.get_leaves().each(function(leaf){
				var view = leaf.get_view();
				view.render();
				that.$el.append(view.el);
			});
		}

	});

	return TreeView;

});
