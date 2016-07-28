define(function (require, exports, module) {


var $ = require('jquery')
		_ = require('underscore')
		Backbone = require('backbone')
		Marionette = require('marionette')
		Bootstrap = require('router')
		Router = require('rootView')
		RootView = require('rootView');

var App = Marionette.Application.extend({

		events:{
			"start": "onStart"
		},

		initialize: function(opts){
		console.log('init app with ', opts);

		},

		rootView: new RootView(),

		onStart: function(opts){
			console.log('app started ', opts);

		}


});


module.exports = App;

});
