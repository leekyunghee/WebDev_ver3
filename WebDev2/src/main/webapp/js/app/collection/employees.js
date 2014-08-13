define(function (require) {

    "use strict";
	var $ 						= require('jquery');
	var _ 						= require('underscore');
	var Backbone 				= require('backbone');
    var Employee			    = require('models/employee');

    return Backbone.Collection.extend({
    	
    	model: Employee,
		initialize: function(){
			console.log("employeeCollection initialize()"); 
		},
		
		completed: function(){
			return this.filter(function(employee){
				return employee.get('completed');
			});
		}
    });

});