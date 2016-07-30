define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		Marionette = require('marionette');


var RouteController = Marionette.Object.extend({

  getIndex: function () {

    console.log('index page CALLED');
  },

	productEntry: function () {
		console.log('hint productEntry route');
	},

  initialize: function () {
    console.log(' route controller init' );
  }


});


module.exports = RouteController;

});
