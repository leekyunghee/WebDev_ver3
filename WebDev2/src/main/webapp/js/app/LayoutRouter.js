define(function(require) {
	
	var $	= require('jquery'),
		Backbone = require('backbone'),
		DashboardView = require('views/dashboard'),
		
        ShellView = require('views/shell'), 
        $container = $('#container'); 
	
		return Backbone.Router.extend({
			
			layoutView : '', 
			
			initialize : function() {
				console.log("layoutRouter initialize()");

				this.layoutView = new ShellView({el : $body}); 				
			},
			routes : {
				"dashboard" : "dashboard"
			},
			dashboard : function() {
				var self = this; 
	            if(self.currentView) self.currentView.remove(); 
	            self.layoutView.render();
				
	            dashboard = new DashboardView({
	            	el : $container
				});
	            dashboard.render();
			}
		});
});