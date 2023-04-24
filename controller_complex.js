var test_module = angular.module("TestModule",[]); // Module creation

// register a controller with the module

test_module.controller("TestCtrl",function($scope){

	var student ={
		firstname:"shasha",
		lastname:"karan",
		age:"27"
	};

	$scope.detail = student;



}) ;

