define(function (require){
	
	// require Library
	var $ 				= require('jquery'),
	_ 					= require('underscore'),
	Backbone    		= require('backbone');

	// require i18n
	var locale = require('i18n!nls/str');
	
	var User = Backbone.Model.extend({
		
		defaults: {
			id: '',
			pwd : '',
			successYn: ''
		},
		url: 'login/index',
		initialize : function(){
			console.log('login Model initialize');
		},
		validate : function(attrs, options) {
			if(!attrs.id) {
				return locale.requireUsername;
			}
			if(!attrs.pwd) {
				return locale.requirePassword;
			}
			console.log('attrs:' +JSON.stringify(attrs));
			console.log('options:' +JSON.stringify(options));
		},
		
		// 로그인 액션 
		login : function(options){
			console.log("login()");
			this.fetch({
				async:false,
        		type : 'POST',
        		dataType : 'json',
        		data : JSON.stringify(this.toJSON()),
        		contentType : 'application/json',
        		success : options.success,
        		error : function(model, response) { 
        			console.log('fetch error'); 
        			console.log(model); 
        			console.log(response); 
        		} 

			});
		}
	});

	return User;

});    