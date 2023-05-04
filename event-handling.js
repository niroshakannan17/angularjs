var myapp = angular
				.module("EventModle",[])
				.controller("EventCtrl",function($scope){

						var technology = [
						{name: "C#",likes: 0,dislikes: 0},
						{name: "Python",likes: 0,dislikes: 0},
						{name: "Angularjs",likes: 0,dislikes: 0},
						{name: "Dotnet",likes: 0,dislikes: 0},
						{name: "PHP",likes: 0,dislikes: 0}
						];

						$scope.tech = technology;


						$scope.likeIncrement = function(techs){
								techs.likes++;
						};

						$scope.disLikeIncrement = function(techs){
							techs.dislikes++;
						};

				})