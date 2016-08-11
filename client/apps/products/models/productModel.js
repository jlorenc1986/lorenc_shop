define(function (require, exports, module) {


	var ProductModel,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone');

	ProductModel = Backbone.Model.extend({

		defaults: {
			title: 'Default product Title',
			description: 'default description for item',
			price: 0
		},

		initialize: function () {
			if (this.isNew()) {
				this.set('created', Date.now());
			}
		}
	});

	module.exports = ProductModel;
});
