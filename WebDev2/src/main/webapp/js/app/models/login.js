define(function (require){
	
	var $ 				= require('jquery'),
	_ 					= require('underscore'),
	Backbone    		= require('backbone'),

	User = Backbone.Model.extend({
		//url: 'login/index',
		defaults: {
			id: '',
			pwd : '',
			successYn: ''
		},
		initialize : function(){
			console.log('User Model initialize');
		},
		// 로그인 액션 
		login : function(options){
			console.log("login()");
			this.fetch({
				url : options.url,
				async:false,
        		type : 'POST',
        		dataType : 'json',
        		data : JSON.stringify(this.toJSON()),
        		contentType : 'application/json',
        		success: function(user){
					console.log(user.toJSON());
				},
				error: function(data, errorThrown) {
					console.log('request failed :'+JSON.stringify(errorThrown));
				}
			});
		}
	});

	// 객체 생성 
	var user = new User({id :'id', pwd :'pwd'});
	
	// 모델 객체 테스트 
	console.log("*******************");
	console.log(user);
	console.log(user.get('id'));
	console.log(user.get('pwd'));
	
	return user;
});    