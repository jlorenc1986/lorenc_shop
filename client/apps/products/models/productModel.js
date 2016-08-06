define(function (require, exports, module) {


	var ProductModel,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone');

	ProductModel = Backbone.Model.extend({


    initialize: function () {
      console.log('init product collection');


    }
	});

	module.exports = ProductModel;
});
