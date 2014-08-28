define(function(require) { 
 	 
 	var Backbone = require('backbone'), 
 		LayoutRouter = require('app/LayoutRouter'),
 		LoginRouter = require('app/LoginRouter'), 
 		EmployeeRouter = require('app/EmployeeRouter'); 
 	 
 	// 각 컨텐츠마다 라우터를 만든다.  
 	// 대시보드 라우터
 	var layoutRouter = new LayoutRouter();
 	// 로그인 라우터 
 	var loginRouter = new LoginRouter();
 	// 계정관리 라우터  
 	var employeeRouter = new EmployeeRouter(); 
 	 
 	return this; 
}); 
