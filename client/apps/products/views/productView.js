define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!productTemplate'),
		Marionette = require('marionette');

	ProductView = Marionette.ItemView.extend({

		template:  _.template(Template),

		initialize: function (opts) {

			console.log('init productView');
		}



	});

	module.exports = ProductView;
});
