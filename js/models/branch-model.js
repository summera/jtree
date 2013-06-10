define([
  'jquery',
  'underscore',
  'backbone',
  'views/branch-list-view'
], function($, _, Backbone, BranchListView){
	var Branch = Backbone.Model.extend({
		
		defaults: {
			title: "Branch",
			leaves: null, //Leaves and branches in branch
		},
		
		initialize: function(){
			this.view = new BranchListView({"model":this});
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

		get_items: function(){
			return this.attributes.leaves;
		},

		get_view: function(){
			return this.view;
		},

		get_title: function(){
			return this.attributes.title;
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

	return Branch;
});