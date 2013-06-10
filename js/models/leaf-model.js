define([
  'jquery',
  'underscore',
  'backbone',
  'views/leaf-list-view'
], function($, _, Backbone, LeafListView){
	var Leaf = Backbone.Model.extend({


		defaults: {
			title: "Leaf",
			content: ["content1", "content2"],
		},
		initialize: function(){
			this.view = new LeafListView({"model": this});
		},

		get_view: function(){
			return this.view;
		},
		get_title: function(){
			return this.attributes.title;
		},
		get_items: function(){
			return this.attributes.content;
		},
		focusView: function(){
			focusArray = [];
			this.get_items().each(function(leaf){
				var view = leaf.get_view();
				focusArray.push(view);
			});
			return focusArray
		}
	});
	return Leaf;
});