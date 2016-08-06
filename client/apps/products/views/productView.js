define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!productTemplate'),
		Marionette = require('marionette');

	ProductView = Marionette.ItemView.extend({

		el: 'li',
		template:  _.template(Template),

		initialize: function (opts) {

			console.log('init productView');
		},

		render: function (){
			var that = this;
			that.$el.html(that.template);

		}




	});

	module.exports = ProductView;
});
