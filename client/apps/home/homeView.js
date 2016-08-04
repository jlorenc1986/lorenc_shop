define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!homeTemplate'),
		Marionette = require('marionette');

	HomeView = Marionette.ItemView.extend({

		el: '.ls-content-child',
		template:  _.template(Template),

		initialize: function (opts) {

			console.log('init HomeView');
		},

		render: function (){
			var that = this;

			console.log('home view function');
			 that.$el.html(that.template);

		}




	});

	module.exports = HomeView;
});
