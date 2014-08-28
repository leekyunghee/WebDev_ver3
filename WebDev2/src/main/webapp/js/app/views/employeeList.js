define(function (require) {

    "use strict";
    
	var $ 						= require('jquery'),
	    _ 						= require('underscore'),
	    Backbone 				= require('backbone'),
	    EmployeeListItemView    = require('views/employeeListItem');
   
    return Backbone.View.extend({
    	
    	el : '',
    	employees : '',
    	
        initialize: function (options) {
        	console.log("employeeList initialize()");
        	
        	this.el = options.el;
        	this.employees = options.collection;

        	this.listenTo(this.employees, 'add', this.addOne);
        	this.listenTo(this.employees, 'reset', this.addAll);
        	
        	// 리스트 목록을 조회
        	// reset 함수가 발생하여 화면이 EmployeeListView에 addAll 함수 호출
        	this.employees.fetch({
                url: 'employee/selectEmployeeList'
                ,data: JSON.stringify({})
                ,reset: true    // reset 데이터 전부 리셋할 경우 // 요청 시 자동으로 리셋이 됨 
            });
        	
        },
        remove: function(){
        	console.log("override view remove");
        	
        	this.$el.remove();
        	this.stopListening();
        	return this;
        },

        addOne: function(employee) {
        	var empView = new EmployeeListItemView({model: employee});
            this.$el.append(empView.render().el);
        },
        
        addAll: function() {
        	this.$el.html("");
        	this.employees.each(this.addOne, this);
        }
    });
});

