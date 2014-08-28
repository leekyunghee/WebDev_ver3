define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Shell.html'),

        template = _.template(tpl);
        $menuItems;

    return Backbone.View.extend({

        initialize: function () {
            console.log("base view initialize()" + this.el);
        },

        render: function () {
        	console.log("base view render");
            this.$el.html(template());
            $menuItems = $('navbar .nav li', this.el);
            return this;
        },
		selectMenuItem : function(menuItem) {
			$menuItems.removeClass('active');
			if (menuItem) {
				$('.' + menuItem + '-menu').addClass('active');
			}
		}
    });

});