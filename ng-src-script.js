
var test_model = angular
				.module("TestModel",[])
				.controller("TestController",function($scope){
					var image = {
						name:"Angulajs",
						path:"angular-js-full-logo.png"
					};

					$scope.img = image;
				});