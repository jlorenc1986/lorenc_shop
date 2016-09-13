define(function (require, exports, module){


	var ProfileAppView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!profileAppTemplate'),
		Marionette = require('marionette');

ProfileView = Marionette.ItemView.extend({

	el: '.ls-content-child',
	template:  _.template(Template),

	initialize: function (opts) {

			console.log('init ProfileView');
	},

	render: function () {
    var _this = this;
    _this.$el.html(_this.template);
  }
	});

	module.exports = ProfileView;
});
