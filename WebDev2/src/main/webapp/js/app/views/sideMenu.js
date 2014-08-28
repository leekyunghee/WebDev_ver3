define(function(require) {
	
	var $ 			= require('jquery'),
		Backbone 	= require('backbone');
		tpl 		= require('text!tpl/sideMenu.html'),

		template = _.template(tpl);
		
		return Backbone.View.extend({
			
			initialize : function() {
				console.log("side menu initialize()");
			},
			render : function() {
				this.$el.html(template());
				return this;
			}
		});
});