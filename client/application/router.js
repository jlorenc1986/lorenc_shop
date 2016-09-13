define(function(require , exports, module ){


	var Router,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		RouteController = require('RouteController'),
		Marionette = require('marionette');

	Router = Marionette.AppRouter.extend({


    appRoutes: {
      '' : 'getIndex',
			'product/:id': 'productEntry',
			'profile/:profile': 'profileView',
			'products': 'productList'
    },

    initialize: function(){
			this.controller = new RouteController(this.options);
    }


	});

	module.exports = Router;
});
