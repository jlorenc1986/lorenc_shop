define(function (require, exports, module) {


	var ProductModel,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone');

	ProductModel = Backbone.Model.extend({

		defaults: {
			title: '',
			completed: false,
			created: 0
		},

		initialize: function () {
			if (this.isNew()) {
				this.set('created', Date.now());
			}
		},

		toggle: function () {
			return this.set('completed', !this.isCompleted());
		},

		isCompleted: function () {
			return this.get('completed');
		}
	});

	module.exports = ProductModel;
});
