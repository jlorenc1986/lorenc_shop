define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone');

	User = Backbone.Model.extend({

		defaults: {
			name: 'foo',
			surname: 'foo',
			photoUrl: 'urlPhoto',
			nationality: 'nationality',
			email: 'test@test.com'
		},

		initialize: function (opts) {
			console.log('init user model');
		}
	});

	module.exports = User;
});
