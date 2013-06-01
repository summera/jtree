define([
  'jquery',
  'underscore',
  'backbone',
  'views/leaf-list-view'
], function($, _, Backbone, LeafListView){
	var Leaf = Backbone.Model.extend({


		defaults: {
			title: "Leaf",
			view: new LeafListView()
		},
		initialize: function(){

		},

		get_view: function(){
			return this.attributes.view;
		}
	});
	return Leaf;
});