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
			'product/:entry': 'productEntry'

    },

    initialize: function(){
      console.log('<INIT>ROUTER</INIT>' );
			this.controller = new RouteController(this.options);

    }

	});

	module.exports = Router;
});
