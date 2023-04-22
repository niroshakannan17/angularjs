
var sample_module = angular.module("Test",[]);

var sample_controller = function($scope){
	$scope.msg = "hi this is a sample controlle and module flow learning";
}

sample_module.controller("TestController", sample_controller);

