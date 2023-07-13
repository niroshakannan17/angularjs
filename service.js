var test_model = angular
				.module("serviceModel",[])
				.controller("serviceCtrl",function($scope,$http){

						$http({
							"method":"POST",
							"url":"C:/Users/dell/OneDrive/Desktop/angularjs/sample.json"
						}).then(function mySuccess(response){
							$scope.datas = response.data;
							alert(response);
						})
				})

/*
var test_model = angular
				.module("TestModel",[])
				.controller("TestController",function($scope){
					var image = {
						name:"Angulajs",
						path:"angular-js-full-logo.png"
					};

					$scope.img = image;
				});*/