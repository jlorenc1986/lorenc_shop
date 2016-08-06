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

    },
    parse: function (response) {
      console.log('response.results', response.results);
    }
	});

	module.exports = ProductsCollection;
});
