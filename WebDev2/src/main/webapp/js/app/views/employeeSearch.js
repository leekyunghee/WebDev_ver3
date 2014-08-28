define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/EmployeeSearch.html');

    return Backbone.View.extend({

    	template : _.template(tpl),
    	
        initialize: function (options) {
        	console.log("employeeSearch initialize()");
        },
        
        events : {
        	"click .searchBtn" : "search",
        	"keypress .searchBtn": "onkeypress"
        },
        remove: function(){
        	console.log("override view remove");
        	$(this.$el).off("click", "#search");
        	
        	this.$el.remove();
        	this.stopListening();
        	return this;
        },
        
        search : function() {
        	this.collection.fetch({
                url: 'employee/selectEmployeeList'
                ,data: JSON.stringify({id:$(".txtSearch").val()})
                ,reset: true    // reset 데이터 전부 리셋할 경우 
            });
        },
        
        render: function () {
        	console.log("employeeSearch render");
            this.$el.html(this.template());
            return this;
        },
        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        }
    });

});