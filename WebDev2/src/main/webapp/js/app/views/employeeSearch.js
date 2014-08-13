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
        	
//         	this.el = options.el;
        	
        	// backbone.js에 viewOptions에 정의 되어 있으므로 this.collection으로 사용할 수 있다.
//        	this.employees = options.collection;		
//            this.listenTo(this.model, 'change', this.render);
        },
        
        events : {
        	"click .searchBtn" : "search"
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
        }
    });

});