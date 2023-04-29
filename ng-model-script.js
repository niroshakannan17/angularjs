var model = angular
			.module("Tst",[])
			.controller("TstCtrl",function($scope){
				var marks ={
					tamil:"80",
					english:"90"
				};

				$scope.report = marks;

			});