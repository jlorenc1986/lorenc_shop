define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		Marionette = require('marionette')
		Bootstrap = require('router')
		Router = require('router')
		RootView = require('rootView');

var App = Marionette.Application.extend({

		events:{
			"start": "onStart"
		},

		initialize: function (opts) {
		console.log('init app with ', opts);


		},

		onStart: function (opts) {
			console.log('app started ', opts);
			 this.router = new Router();
			 Backbone.history.start();


		}

});


module.exports = App;

});
