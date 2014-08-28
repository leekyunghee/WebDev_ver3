define(function(require) {
	
	var $ 			= require('jquery'),
		Backbone 	= require('backbone'),
		tpl			= require('text!tpl/dashboard.html');
	
		template = _.template(tpl);
		
		return Backbone.View.extend({
			
			initialize : function() {
				console.log("dashboard view load()");
			},
			
			render : function() {
				this.$el.empty(); 
				this.$el.removeClass(); 
				this.$el.addClass('container-fluid'); 

				this.$el.html(template());
				return this;
			}
		});
});