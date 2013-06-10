define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var BranchListView = Backbone.View.extend({

		tagName: "li",

		className: "branch",

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
			this.$el.html("<a> <h3>" + this.model.get_title() + "</h3> </a>");
		}

	});

	return BranchListView;

});
