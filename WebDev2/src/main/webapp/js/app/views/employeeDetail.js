define(function (require) {

    "use strict";
    
    // require library
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl		            = require('text!tpl/EmployeeDetail.html');
    
    return Backbone.View.extend({

        template : _.template(tpl),
    	initialize: function (options) {
        	console.log("employeeDetail initialize()");
        	
        	var self = this;
        	
        	// 이벤트 청취
        	// change event는 model.set 함수 호출시 발생
        	// destory event는 model.destroy 함수 호출시 발생 
        	self.listenTo(self.model, 'change', this.render);
        	self.listenTo(self.model, 'destroy', this.destroyed);
        	
        	// data 조회
        	self.model.fetch({             
        		url:'employee/selectEmployee',
        		data:JSON.stringify({id:options.id})
        	});
        },
        
        events: {
            "click #EditBtn"   		: "employeeEditView",
            "click #DeleteBtn"   	: "destroy",
        },
        
        remove: function(){
        	console.log("override view remove");
        	$(this.$el).off("click", "#EditBtn");
        	$(this.$el).off("click", "#DeleteBtn");
        	$(this.$el).off("click", "#SaveBtn");
        	
        	this.$el.remove();
        	this.stopListening();
        	return this;
        },
        
        render: function () {
        	console.log("employeeDetail render() " + JSON.stringify(this.model.toJSON()) );
        	// 필수 데이터가 null일 경우는 이전 페이지로 넘긴다.
        	if(this.model.toJSON().id == null){
        		alert("데이터가 없습니다.");
        		return history.back();
        	}
        	this.$el.empty();
        	this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        
        employeeEditView : function(employee) {
        	Backbone.pageMove.employeeEdit(this.id);
        },
        
        destroy: function(event){
        	console.log("employeeDetail employeeDelete()");
        	var con = confirm("삭제 하시겠습니까?");
        	if(con){
        		this.model.destroy({
        			url:'employee/deleteEmployee',
        			data:JSON.stringify({id:this.model.get("id")}),
        		});
        	}
        },
        
        destroyed: function(){
        	Backbone.pageMove.employees();
        }
    });
});