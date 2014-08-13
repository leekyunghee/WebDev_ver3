define(function (require) {

    "use strict";

    var $           		= require('jquery'),
        Backbone    		= require('backbone'),
        
        LoginView 			= require('views/login'),
        Employee 			= require('models/employee'),
        Employees 			= require('collection/employees'),
        EmployeeListView 	= require('views/employeeList'),
        EmployeeListSearch  = require('views/employeeSearch'),
        EmployeeAdd 		= require('views/employeeAdd'),
        EmployeeDetail 		= require('views/employeeDetail'),
        
        
        ShellView = require('views/shell'),
        $body = $('body');
       
    return Backbone.Router.extend({

        layoutView : '',
        currentView : '',
        
        initialize: function () {
            // route 생성시 layout 객체 생성 
            this.layoutView = new ShellView({el : $body});
            
            // router안에서 공통으로 사용할 전역 변수 선언 
            // data가 공유되어야 할 객체들은 전역으로 잡음
            // collection
            this.employees = new Employees();
        },
        
        routes: {
        	"" : "login",
        	"login" : "login",
            "employeeList": "employeeList",
            "employeeList/:id": "employeeDetails",
            "employeeAdd": "employeeAdd",
            "employeeEdit/:id": "employeeEdit"
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
        },
        employeeList : function() {
        	var self = this;
        	if(self.currentView) self.currentView.remove();
        	self.layoutView.render();
        	
        	// 리스트 화면 생성 
        	self.currentView = new EmployeeListView({
                el : $('#content', self.layoutView.el),
                collection : self.employees
            });
        	
        	// 검색 화면 생성 
        	var searchView = new EmployeeListSearch({
        		el : $('#search', self.layoutView.el),
        		collection : self.employees
        	});
        	searchView.render();
        },
        employeeDetails: function (id) {                     
        	var self = this;
        	if(self.currentView) self.currentView.remove();
        	self.layoutView.render();
        	
        	// 상세 보기 화면 
        	var employee = new Employee();
        	console.log('employee : '+JSON.stringify(employee));
        	self.currentView = new EmployeeDetail({
	    	    el : $('#content', self.layoutView.el),
	       		model : employee,
	       		id : id
	       	});
        },
        employeeAdd: function(){
	    	var self = this;
	    	if(self.currentView) self.currentView.remove();
	    	self.layoutView.render();
	    	
	    	// 등록 화면 
	    	self.currentView = new EmployeeAdd({
	    	    el : $('#content', self.layoutView.el),
	       		collection : self.employees
	       	});
	       	self.currentView.render();
        }
    });

});