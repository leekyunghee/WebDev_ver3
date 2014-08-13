define(function(require) {

	"use strict";

	var $ 					= require('jquery');
	var _ 					= require('underscore');
	var Backbone 			= require('backbone');

	var model				= require('models/login');
	var tpl 				= require('text!tpl/login.html');
	var template = _.template(tpl);

	return Backbone.View.extend({
		render : function() {
			this.$el.html(template());
			return this;
		},
		events : {
			"click #loginBtn" : "login"
		},
		login : function() {
			var userid = $('#userid').val();
			var password = $('#password').val();
		
			model.set({id:userid, pwd:password});
			model.login({
				url: 'login/index'
			});
			
			if (model.get('successYn') == true){
    			location.hash = '#employeeList';
    		}else {
    			alert("id or password is not valid");
    		}
		}
	});
});