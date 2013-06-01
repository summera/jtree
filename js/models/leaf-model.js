define([
  'jquery',
  'underscore',
  'backbone',
  'views/leaf-list-view'
], function($, _, Backbone, LeafListView){
	var Leaf = Backbone.Model.extend({


		defaults: {
			title: "Leaf",
		},
		initialize: function(){
			this.view = new LeafListView({"model": this});
		},

		get_view: function(){
			return this.view;
		},
		get_title: function(){
			return this.attributes.title;
		}
	});
	return Leaf;
});