define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		Marionette = require('marionette');


var RouteController = Marionette.Object.extend({

	initialize: function () {
		console.log(' route controller init' );
	},

  getIndex: function () {

    console.log('index page CALLED');
  },

	productEntry: function () {
		console.log('hint productEntry rout');
	},


	productList: function (options) {

				console.log('product list');
	}



});


module.exports = RouteController;

});
