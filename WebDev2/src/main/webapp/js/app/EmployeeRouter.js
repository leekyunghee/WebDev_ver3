define(function(require) { 
 	 
 
 
     var $           			= require('jquery'), 
         Backbone    			= require('backbone'), 
         Employee 				= require('models/employee'), 
         Employees 				= require('collection/employees'), 
         EmployeeListView 		= require('views/employeeList'), 
         EmployeeListSearch 	= require('views/employeeSearch'), 
         EmployeeEdit			= require('views/employeeEdit'), 
         EmployeeAdd 			= require('views/employeeAdd'), 
         EmployeeDetail 		= require('views/employeeDetail'), 
          
         ShellView = require('views/shell'), 
         $body = $('body'); 
      
     return Backbone.Router.extend({  
 
         layoutView : '', 
         currentView : '', 
          
         initialize: function () { 
         	 
         	console.log("EmployeeRouter initialize()"); 
             // route 생성시 layout 객체 생성  
             this.layoutView = new ShellView({el : $body}); 
              
             // router안에서 공통으로 사용 할 전역 변수 선언  
             // data가 공유되어야 할 객체들은 전역으로 잡음 
             // collection 
             this.employees = new Employees(); 
         }, 
          
         routes: {
             "employees": "employeeList", 
             "employee/:id": "employeeDetails", 
             "employeeAdd": "employeeAdd", 
             "employeeEdit/:id": "employeeEdit" 
         }, 

         employeeList : function() { 
//         	var self = this; 
//         	if(self.currentView) self.currentView.remove(); 
//         	self.layoutView.render(); 
         	
         	// 검색 화면 생성  
         	var searchView = new EmployeeListSearch({ 
         		el : $('#search', self.layoutView.el), 
         		collection : self.employees 
         	}); 
         	searchView.render(); 
         	
         	// 리스트 화면 생성  
         	self.currentView = new EmployeeListView({ 
                 el : $('#sidebar', self.layoutView.el), 
                 collection : self.employees 
             }); 
         }, 
         employeeDetails: function (id) {                      
         	var self = this; 
         	//if(self.currentView) self.currentView.remove(); 
         	//self.layoutView.render(); 
         	 
         	// 목록 화면 호출
         	//self.employeeList();
         	
         	// 상세 보기 화면  
         	var employee = new Employee(); 
         	console.log('employee : '+JSON.stringify(employee)); 
         	self.currentView = new EmployeeDetail({ 
 	    	    el : $('#content', self.layoutView.el), 
 	       		model : employee, 
 	       		id : id 
 	       	}); 
         }, 
         employeeEdit : function(id) { 
         	var self = this; 
         	if(self.currentView) self.currentView.remove(); 
         	self.layoutView.render(); 
         	
         	// 목록 화면 호출
         	self.employeeList();
         	
         	var employee = new Employee(); 
         	var editView = new EmployeeEdit({ 
         		el : $('#content', self.layoutView.el), 
         		model : employee, 
         		id : id 
         	}); 
         	editView.render(); 
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