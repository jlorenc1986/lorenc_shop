define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		RootView = require('rootView'),
		HomeView = require('homeView'),
		ProductsAppView = require('productsAppView'),
		Marionette = require('marionette');


var RouteController = Marionette.Object.extend({

	initialize: function () {
		console.log(' route controller init' );
		this.options.regionManager = new Marionette.RegionManager({

			navbar: ".ls-navbar",
			content: ".ls-content"
		});

		this.options.Layout = new RootView();

	},

  getIndex: function (options) {

		var childView = this.options.Layout;
		 childView.showChildView('content', new HomeView());
  },

	productEntry: function (options) {
		console.log('hint productEntry rout');
	},


	productList: function (options) {
		var childView = this.options.Layout;
		 childView.showChildView('content', new ProductsAppView());

		// render correct subapp for prduct list in the region
	}



});


module.exports = RouteController;

});
