define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		Marionette = require('marionette');


var RouteController = Marionette.Object.extend({

	initialize: function () {
		console.log(' route controller init' );
	},

  getIndex: function (options) {

    console.log('index page CALLED');
  },

	productEntry: function (options) {
		console.log('hint productEntry rout');
	},


	productList: function (options) {
    console.log('product list');

		// render correct subapp for prduct list in the region
	}



});


module.exports = RouteController;

});
