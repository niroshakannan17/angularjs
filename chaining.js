var test_module = angular
					.module("TestModule",[])
					.controller("TestCtrl",function($scope){

	var student ={
		firstname:"shasha",
		lastname:"karan",
		age:"27"
	};

	$scope.detail = student;



})