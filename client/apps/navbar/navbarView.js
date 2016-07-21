define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!navbarTemplate'),
		Marionette = require('marionette');

	NavbarView = Marionette.View.extend({

		el: '.ls-navbar-child',
		template:  _.template(Template),

		initialize: function (opts) {

			console.log('init navbarView');
		},

		render: function (){
			var that = this;
			
			console.log('render navbarView function');
			 that.$el.html(that.template);

		}




	});

	module.exports = NavbarView;
});
