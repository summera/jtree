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
			this.view = new LeafListView(this);
		},

		get_view: function(){
			return this.view;
		}
	});
	return Leaf;
});