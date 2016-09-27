define(function (require, exports, module){
    var ShowDetailsBehaviour,
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    ShowDetailsBehaviour = Marionette.Behaviour.extend({

        defaults: {
            message: 'message defaults'
        },

        ui: {
            destroy: '.btn'
        },

        warnBeforeDestroy: function () {
            console.log('warn before destroy' );
            this.view.destroy();
        },

        events: {
            'hover @ui.destroy': warnBeforeDestroy

        }




    });
    module.exports = ShowDetailsBehaviour;
});
