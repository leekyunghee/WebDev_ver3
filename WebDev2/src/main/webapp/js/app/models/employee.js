define(function (require) {

    "use strict";

	var $ 						= require('jquery'),
		_ 						= require('underscore'),
		Backbone 				= require('backbone'),
	
    Employee = Backbone.Model.extend({
    	
        url: function(){
        	return this.isNew() ? 'employee/addEmployee' : 'employee/editEmployee';
        },
    	
    	idAttribute: "_id",
    	
	  	defaults: {
	  		id:'', 
			firstName:'', 
			lastName:'', 
			title:'', 
			managerName:'', 
			managerId:'', 
			officePhone:'', 
			cellPhone:'', 
			city:'', 
			email:'', 
			twitterId:'', 
			pic:'', 
			blog:''
	  	},
        initialize: function () {
        	console.log("employee initialize()");
        }
    });
	return Employee;
});