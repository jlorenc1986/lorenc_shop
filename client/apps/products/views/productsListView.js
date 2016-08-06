define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!productsListTemplate'),
		ProductView = require('productView'),
		Marionette = require('marionette');

	ProductsListView = Marionette.CollectionView.extend({



		template:  _.template(Template),

		childView: ProductView,

		initialize: function (opts) {

			console.log('init productList View');
		},

		render: function (){
			var that = this;
			that.$el.html(that.template);

		}




	});

	module.exports = ProductsListView;
});
