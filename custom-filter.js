var custom_filter = angular
					.module("customFilterModel",[])
					.filter("sex",function(){
						return function(gender){
							if(gender == 1){
								return "female";
							}else if(gender == 2){
								return "male";
							}else{
								return "not Disclosed";
							}
						}
					})
					.controller("customFilterCtrl", function($scope){

						var emply = [
						{name:"sara",gender:"1",salery:45000},
						{name:"karan",gender:"2",salery:45000},
						{name:"jotha",gender:"1",salery:45000},
						{name:"srither",gender:"2",salery:45000},
						{name:"shasha",gender:"3",salery:45000}
						];

						$scope.employee = emply;

					})