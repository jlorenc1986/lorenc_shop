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
		"homeTemplate": "../client/apps/home/templates/home-template.html",
		"homeView": "../client/apps/home/homeView",
		"productTemplate": "../client/apps/products/templates/product-template.html",
		"productView": "../client/apps/products/views/productView",
		"productModel": "../client/apps/products/models/productModel",
		"productsCollection": "../client/apps/products/collections/productsCollection",
		"productsListTemplate": "../client/apps/products/templates/productsList-template.html",
		"productsListView": "../client/apps/products/views/productsListView",
		"productsAppTemplate": "../client/apps/products/templates/productsApp-template.html",
		"productsAppView": "../client/apps/products/productsAppView",
		"profileAppTemplate": "../client/apps/profile/templates/profileApp-template.html",
		"profileView": "../client/apps/profile/views/profileAppView",
		"profileAppView": "../client/apps/profile/views/profileView",
		"RouteController": "../client/application/routeController",
		"UserModel": "../client/models/User",
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
