define(function(require) {

	"use strict";

	// require library
	var $ 			= require('jquery'),
		_ 			= require('underscore'),
		Backbone 	= require('backbone');
		
	// require template
	var tpl 		= require('text!tpl/sidebar.html');
	var template 	= _.template(tpl);

	return Backbone.View.extend({
		
		initialize : function(options) {
			console.log("layout load()");
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