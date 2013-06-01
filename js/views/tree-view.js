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
		},

		render: function(){
			var that = this;
			this.$el.html("<h2> Tree </h2>");
			console.log(this.$el);

			this.tree.get_leaves().each(function(leaf){
				//console.log(leaf);
				//that.$('.tree').append(leaf.get_view().render().el);
				var view = leaf.get_view();

				console.log(view);
				that.$('.tree').append(view.render());
			});
		}

	});

	return TreeView;

});
