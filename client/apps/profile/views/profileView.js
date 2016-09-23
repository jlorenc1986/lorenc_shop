define(function (require, exports, module){


	var ProfileAppView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!profileAppTemplate'),
		User = require('UserModel'),
		Marionette = require('marionette');

ProfileView = Marionette.ItemView.extend({

	el: '.ls-content-child',
	template:  _.template(Template),

	initialize: function (opts) {

			console.log('init ProfileView');
			this.model = new User();
	},

	serializeData: function () {
		console.log('serializeData ', this.model );
		return {
					 name: this.model.get('name'),
					 photoUrl: this.model.get('photoUrl'),
					 nationality: this.model.get('nationality'),
					 surname: this.model.get('surname')
			 };
	},

	// onRender: function () {
  //   var _this = this;
  //   _this.$el.html(_this.template);
  // }
	});

	module.exports = ProfileView;
});
