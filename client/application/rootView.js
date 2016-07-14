define(function(require , exports, module ){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		NavBarView = require('navbarView'),
		Marionette = require('marionette');

	RootView = Marionette.LayoutView.extend({

		el : 'body',

		regions: {
			navbar: ".ls-navbar",
			content: ".ls-content"

		},

		initialize: function () {

			console.log('init RootView');
			this.showChildView('navbar', new NavBarView());

		}

	});

	module.exports = RootView;
});
