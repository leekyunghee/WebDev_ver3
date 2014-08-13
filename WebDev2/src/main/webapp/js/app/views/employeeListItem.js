define( function (require) {

    "use strict";
    
	var $ 						= require('jquery')
	  , _ 						= require('underscore')
	  , Backbone 				= require('backbone')
	  , tpl                     = require('text!tpl/EmployeeListItem.html');

    return Backbone.View.extend({

        //tagName: "li",
    	
    	template : _.template(tpl),

        initialize: function () {
        	console.log("employeeListItem initialize()");
        	this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

});