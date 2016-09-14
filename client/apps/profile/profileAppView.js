define(function (require, exports, module){


	var ProfileAppView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!profileAppTemplate'),
    ProfileView = require('profileView'),
		Marionette = require('marionette');

ProfileAppView = Marionette.LayoutView.extend({

	el: '.ls-content-child',
	template:  _.template(Template),

  regions: {
    toolbar: '.ls-profileAppToobar',
    productContent: '.ls-profileAppContent'

  },

	initialize: function (opts) {
			this.model = opts.model;
	},

	render: function () {
    var _this = this;
    _this.$el.html(_this.template);
  },

  onBeforeShow: function () {
      this.showChildView('profileContent', new ProfileView());
  }




	});

	module.exports = ProductsAppView;
});