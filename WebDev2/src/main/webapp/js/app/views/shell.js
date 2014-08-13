define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Shell.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            console.log("shell view initialize()" + this.el);
        },

        render: function () {
        	console.log("shell view render");
            this.$el.html(template());
            return this;
        }
    });

});