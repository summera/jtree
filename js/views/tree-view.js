define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var TreeView = Backbone.View.extend({

		tagName: "div",
		className: "treeContainer",

		initialize: function(options) {
			this.tree =  new Backbone.Collection(this.options.tree);



			this.breadCrumbs = [];
			_.bindAll(this, 'render');
			this.listenTo(this.tree, 'change', this.render);
			this.listenTo(this.tree, 'reset', this.render);
			this.listenTo(this.tree, 'add', this.render);
			//this.tree.bind("reset", this.render);
			//this.tree.bind("change", this.render);
		},

		pushBreadCrumb: function(focus){
			this.tree.push(focus);
		},

		popBreadCrumb: function(){

		},

		setTree: function(newTree){
			this.tree.push(newTree);
		},

		render: function(){
			console.log('Rendering Tree');
			var that = this;
			this.$el.html("<h2> Tree </h2>");
			var currentFocus;

			/*if(this.tree.length == 1){
				currentFocus = this.tree.at(0);
			}
			else{
				currentFocus = this.tree.pop();
			}*/

			currentFocus = this.tree.at(this.tree.length - 1);

			var content = currentFocus.focusView();
			$.each(content,function(index, view){
				view.setRoot(that);
				view.render();
				that.$el.append(view.el);
			});

			/*this.tree.get_items().each(function(leaf){
				var view = leaf.get_view();
				view.render();
				that.$el.append(view.el);
			});*/
		}

	});

	return TreeView;

});
