var model = angular
			.module("ngFilterFormet",[])
			.controller("ngFilterFormetCtrl", function($scope){

				var employees =[
				{name:"Sara",dob:"07-07-1996",gender:"Female",salery:"50000"},
				{name:"samu",dob:"02-02-1995",gender:"Female",salery:"57000"},
				{name:"Karan",dob:"07-06-1994",gender:"Male",salery:"60000"},
				{name:"shasha",dob:"07-07-1996",gender:"Female",salery:"55000"},
				{name:"srither",dob:"17-10-1995",gender:"Male",salery:"80000"},
				{name:"jotha",dob:"04-11-1996",gender:"Female",salery:"50000"}
				];

				$scope.emp = employees;
				$scope.rows =2;
			})