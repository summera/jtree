// Filename: test_1.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/branch-model',
  'models/leaf-model',
  'models/tree-model',
  'views/tree-view'
], function($, _, Backbone, Branch, Leaf, Tree, TreeView){
	var Test_1 = function(){

		this.run = function() {
			console.log("Leaves");
			window.leaf = new Leaf();
			window.leaf2 = new Leaf({title: "Leaf2"});
			window.leaf3 = new Leaf({title: "Leaf3"});
			window.leaf4 = new Leaf({title: "Leaf4"});

			//Create branch and add leaves to it
			console.log("Branches:");
			window.branch = new Branch({title: "Branch", leaves:[leaf, leaf]});
			window.branch2 = new Branch({title: "Branch2"});
			window.branch3 = new Branch({title: "Branch3"});
			branch.add(leaf2);
			branch.add(leaf3);
			branch.add(branch2);

			//Create tree, pass in branch, and add leaves to it
			console.log("Tree:");
			window.tree = new Tree({title: "Tree Test", leaves:[branch]});
			tree.add(leaf4);
			tree.add(branch3);


			window.treeView = new TreeView({tree: tree});
			treeView.render();
			$('#container').append(treeView.$el)
		}
	};

	return Test_1;

});			






