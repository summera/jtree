define([
  'jquery',
  'underscore',
  'backbone',
  'views/branch-list-view'
], function($, _, Backbone, BranchListView){
	var Branch = Backbone.Model.extend({
		
		defaults: {
			title: "Branch",
			leaves: null, //Items and groups in group
			view: new BranchListView()
		},
		initialize: function(){

			//Set items as a collection containing provided items
			if(!this.get("leaves")){ 
				this.set("leaves", new Backbone.Collection());
			}
			else{
				if(this.get("leaves") instanceof Array){
					this.set("leaves", new Backbone.Collection(this.get("leaves")));
				}
				else{console.error("Did not receive Array for Branch.");}
			}
		},

		add: function(leaf){
			this.attributes.leaves.add(leaf);
		},

		remove: function(leaf){
			this.attributes.leaves.remove(leaf);
		},

		clear: function(leaf){
			if (leaves){this.attributes.leaves.reset(leaves);}
			else{this.attributes.leaves.reset();}
		},

		get_leaves: function(){
			return this.attributes.leaves;
		},

		get_view: function(){
			return this.attributes.view;
		}

		/*render: function(){

		}*/
	});

	return Branch;
});