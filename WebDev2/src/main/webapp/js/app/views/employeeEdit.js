define(function(require) {
	
	var $ 			= require('jquery'),
		_ 			= require('underscore'),
		Backbone    = require('backbone'),
		tpl		    = require('text!tpl/EmployeeEdit.html');	
	
		return Backbone.View.extend({
			
			template : _.template(tpl),
			
			initialize : function(options) {
				console.log("employeeEdit initialize()");
				
				var self = this;
				self.model.fetch({
	        		url:'employee/selectEmployee',
	        		data:JSON.stringify({id:options.id})
	        	}, {
	        		silent:true
	        	});
				
				this.listenTo(this.model, 'change', this.render);
			},
			
			events: {
	            "click #SaveBtn"   		: "edit"
			},
	        edit: function(event){
	        	console.log("employeeDetail employeeEditSave()");
				var con = confirm("수정 하시겠습니까?");
				var self=this;
				if(con){
					this.model.save({
	                    id:$('#txtid').val(), 
	                    firstName:$('#txtFirstName').val(), 
	                    lastName:$('#txtLastName').val(), 
	                    title:$('#selTitle').val(), 
	                    managerName:$('#txtManagerName').val(), 
	                    managerId:$('#txtManagerId').val(), 
	                    officePhone:$('#txtOfficePhone').val(), 
	                    cellPhone:$('#txtCellPhone').val(), 
	                    city:$('#txtCity').val(), 
	                    email:$('#txtEmail').val(), 
	                    twitterId:$('#txtTwitter').val(), 
	                    pic:$('#imgName').val(), 
	                    blog:$('#txtBlog').val()
	                }, 
	                {
	                	wait:true, 
	                	silent:true,
	                	success:function(model, resp, options){
//	                		console.log("강제 이벤트 발생");
//	                		model.trigger("change");
	                		Backbone.pageMove.employee(self.id);
	                	},
	                	error:function(model, resp, options){alert(resp);}
	                });
				}
	        },
			render : function() {
				console.log("employeeEdit render");
	        	this.$el.html(this.template(this.model.toJSON()));
	        	return this;
			}
		});
});