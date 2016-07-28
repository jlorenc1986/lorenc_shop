require.config({


	paths: {

		"jquery": "../node_modules/jquery/dist/jquery.min",
		"underscore": "../node_modules/underscore/underscore-min",
		'text': '../node_modules/text/text',
		'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
		"backbone": "../node_modules/backbone/backbone-min",
		"marionette": "../node_modules/backbone.marionette/lib/backbone.marionette.min",
		"rootView": "../client/application/rootView",
		"navbarTemplate": "../client/apps/navbar/templates/navbar-template.html",
		"navbarView": "../client/apps/navbar/navbarView",
		"RouteController": "../client/application/routeController",
		"router": "../client/application/router",
		"app": "../client/application/app"

	},
	shim: {

		backbone: {
			deps: ['underscore', 'jquery'],

		exports:function () {
			return Backbone.noConflict();
		},

		marionette: {
			deps:['backbone'],
			exports: "Marionette"
		}
	}
	}
});


require(['app'], function(App){
	var app = new App();
	app.start();


});
