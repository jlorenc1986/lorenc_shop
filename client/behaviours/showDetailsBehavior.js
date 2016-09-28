define(function (require, exports, module){
    var ShowDetailsBehavior,
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    ShowDetailsBehavior = Marionette.Behavior.extend({

        defaults: {
            message: 'message defaults'
        },

        ui: {
            destroy: '.btn'
        },

        events: {
            'click @ui.destroy': 'warnBeforeDestroy'

        },
        onRender: function () {
            console.log('janela' );
        },
        warnBeforeDestroy: function () {
            console.log('warn before destroy' );
        }






    });
    module.exports = ShowDetailsBehavior;
});
