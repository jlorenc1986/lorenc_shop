define(function (require, exports, module){
    var ShowTooltipBehavior,
        Tooltipster = require('tooltipster'),
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    ShowTooltipBehavior = Marionette.Behavior.extend({

        defaults: {
            message: 'message defaults'
        },

        ui: {
            tooltip: '.tooltip'
        },

        events: {
            'click @ui.tooltip': 'showCurrentTooltip'

        },
        onRender: function () {
            console.log('janela' );
        },
        showCurrentTooltip: function () {
            console.log('warn before destroy' );
        }






    });
    module.exports = ShowTooltipBehavior;
});
