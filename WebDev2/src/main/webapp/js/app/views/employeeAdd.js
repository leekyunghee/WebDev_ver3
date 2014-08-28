define(function(require) {

	"use strict";

	// require library
	var $ 						= require('jquery')
	  , _ 						= require('underscore')
	  , Backbone 				= require('backbone')
	  , tpl 					= require('text!tpl/EmployeeAdd.html');
	

	return Backbone.View.extend({
		
	    template : _.template(tpl),
	    
	    employees : '',
	    
	    events : {
            "click #SaveBtn" : "save"
        },
        remove: function(){
        	console.log("override Add view remove");
        	$(this.$el).off("click", "#SaveBtn");
        	
        	this.$el.remove();
        	this.stopListening();
        	return this;
        },
        initialize: function (options) {
            this.employees = options.collection;
            this.listenTo(this.employees, 'add', this.added);
        },
        
		render : function() {
			this.$el.html(this.template());
			return this;
		},
		
		added : function(){
			Backbone.pageMove.employees();
		},
		
		save : function() {
			if(confirm("저장 하시겠습니까?")){
				
				this.employees.create({
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
                }
				,{
					// 저장 할때마다 실패, 에러남   
//					wait: true,
//				    dataType: "text",
				    // model.save() 타입이 dataType : json이기 때문에 json타입이 아닐경우 error 발생.
//				    success:function(model, resp, options){
//				        console.log( JSON.stringify(resp) );
//				        alert("저장 성공.");
//                    },
//				    error:function(model, resp, options){
//				        console.log( JSON.stringify(resp) );
//			            alert("저장 실패.");
//				    }
				});
			}	
		}
	});
});