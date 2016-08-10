define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!productsListTemplate'),
		ProductView = require('productView'),
		ProductsCollection = require('productsCollection'),
		Marionette = require('marionette');

	ProductsListView = Marionette.CollectionView.extend({



		template:  _.template(Template),

		childView: ProductView,

		initialize: function (opts) {

			console.log('init productList View');
			this.collection = new ProductsCollection();
			this.collection.add({});
			this.collection.add({});
			this.collection.add({});
			this.collection.on('change', this.collectionUpdated);
		},

		render: function (){
			var that = this;
			var data = this.collection.toJSON();
			var template = this.template(data);
			that.$el.html(that.template);

		},

		onBeforeShow: function () {

		},

		collectionUpdated: function () {
			console.log('collection updated');
		}




	});

	module.exports = ProductsListView;
});
