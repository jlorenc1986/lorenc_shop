define(function (require, exports, module){
    var ProductView,
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Template = require('text!productTemplate'),
        ShowDetailsBehaviour = require('module'),
        Marionette = require('marionette');

    ProductView = Marionette.ItemView.extend({


        template:  _.template(Template),

        events: {
            'click .list-group-item .btn-sm': 'openDetail'
        },

        behaviours: [ShowDetailsBehaviour],

        initialize: function (opts) {
            console.log('init productView', opts);
        },

        openDetail: function (event) {
            console.log('detail', event);
        }

    });


    module.exports = ProductView;
});
