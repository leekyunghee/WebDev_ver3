define(function(require) {

	"use strict";

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var LoginModel = require('models/login');
	var loginModel = new LoginModel();
	var tpl = require('text!tpl/login.html');
	var template = _.template(tpl);

	// require i18n
	var locale = require('i18n!nls/str');

	return Backbone.View.extend({

		model : loginModel,
		initalize : function(options) {
			console.log("login view initialize()");
		},

		render : function() {
			this.$el.html(template());
			$('#userid').prop('placeholder', locale.id);
			$('#password').prop('placeholder', locale.password);
			$('#loginBtn').html(locale.sign_in);
			return this;
		},
		events : {
			"click #loginBtn" : "login"
		},
		login : function(event) {
			var userid = $('#userid').val();
			var password = $('#password').val();

			loginModel.set({
				id : userid,
				pwd : password
			}, {
				silent : true
			});
			if (loginModel.isValid()) {
				loginModel.login({
					success : this.success
				});
			} else {
				Backbone.AlertView.msg($('#alert'), {
					alert : "warning",
					message : loginModel.validationError
				});
			}
		},

		success : function() {
			console.log(loginModel.toJSON());
			if (loginModel.get('successYn')) {
				Backbone.pageMove.dashboard();
			} else {
				Backbone.AlertView.msg($('#alert'), {
					alert : 'warning',
					message : locale.invalidLogin
				});
				Backbone.ModalView.msg({
					title : 'warning',
					body : locale.invalidLogin
				});
			}
		},
		error : function() {
			console.log("error");
		}
	});
});