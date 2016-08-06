define(function (require, exports, module){


	var RootView,
		$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Template = require('text!productsAppTemplate'),
    ProductsListView = require('productsListView'),
		Marionette = require('marionette');

	ProductsAppView = Marionette.LayoutView.extend({

		el: '.ls-content-child',
		template:  _.template(Template),

    regions: {
      toolbar: '.ls-productsAppToobar',
      productContent: '.ls-productsAppContent'

    },

		initialize: function (opts) {

			console.log('init ProductsAppView');
		},

		render: function (){
			var that = this;
			that.$el.html(that.template);

		},

    onBeforeShow: function(){

      this.showChildView('productContent', new ProductsListView());


    }




	});

	module.exports = ProductsAppView;
});
