define(function (require, exports, module){
    var ProductView,
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Template = require('text!productTemplate'),
        ShowDetailsBehavior = require('ShowDetailsBehaviour'),
        Marionette = require('marionette');

    ProductView = Marionette.ItemView.extend({


        template:  _.template(Template),

        events: {
            'click .list-group-item .btn-sm': 'openDetail'
        },

        behaviors: [{
            behaviorClass: ShowDetailsBehavior,
            message: 'You are about to destroy all your data!'
        }],

        initialize: function (opts) {
            console.log('init productView', opts);
        },

        openDetail: function (event) {
            console.log('detail', event);
        }

    });


    module.exports = ProductView;
});
