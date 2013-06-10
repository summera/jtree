define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var LeafListView = Backbone.View.extend({

		tagName: "li",

		className: "leaf",
		events: {
			"click a": "renderToTree"
		},

		initialize: function(options) {
			
		},

		renderToTree: function(){
			if(this.root){
				this.root.setTree(this.model);
				//this.root.pushBreadCrumb(this.model);
			}
		},

		setRoot: function(root){
			this.root = root;
		},

		render: function(){
			this.$el.html("<a> <h4>" + this.model.get_title() + "</h4> </a>");
		},

	});

	return LeafListView;

});
