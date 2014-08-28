define(function(require) {
	
		return {
			
			"": function(){location.href="";},
			"login": function(){location.href="#login";},
			"dashboard": function(){location.href="#dashboard";},
			"employees": function(){location.href="#employees";}, 
			"employee": function(id){location.href="#employee/"+id;}, 
			"employeeAdd": function(){location.href="#employeeAdd";}, 
			"employeeEdit": function(id){location.href="#employeeEdit/"+id;} 
		
		};
});