define(function (require, exports, module) {


	var ProductsCollection,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
    ProductModel = require('productModel');



	ProductsCollection = Backbone.Collection.extend({

    model: ProductModel,

    url: 'http:/localhost:9000/products',

    initialize: function () {
      console.log('init product collection');
			this.fetch({
				success: this.fetchSuccess,
				error: this.fetchError,
			})

    },

    parse: function (response) {
      console.log('response.results', response.results);
    },

		fetchSuccess: function (cl, rs) {

			console.log(rs);
		},

		fetchError: function (cl, rs) {
			console.log(rs);

		}
	});

	module.exports = ProductsCollection;
	
});
