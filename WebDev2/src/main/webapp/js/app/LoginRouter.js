define(function(require) { 
 
     var $           		= require('jquery'), 
         Backbone    		= require('backbone'), 
         LoginView 			= require('views/login'), 
          
         ShellView = require('views/shell'), 
         $body = $('body'); 
      
     return Backbone.Router.extend({ 
 
 
         layoutView : '', 
         currentView : '', 
          
         initialize: function () { 
         	console.log("LoginRouter initialize()"); 
             // route 생성시 layout 객체 생성  
             this.layoutView = new ShellView({el : $body}); 
         }, 
          
         routes: { 
         	"" : "login", 
         	"login" : "login" 
         }, 
          
         login : function() { 
         	var self = this; 
         	if(this.currentView) this.currentView.remove(); 
 //        	self.layoutView.render(); 
 //        	// 로그인 화면 생성  
 //        	self.currentView = new LoginView({ 
 //        		 el : $('#content', self.layoutView.el) 
 //        	 }); 
 //        	self.currentView.render(); 
         	var loginView = new LoginView({ 
        		 el : $body 
         	}); 
         	loginView.render(); 
         } 
     }); 
 	 
}); 
