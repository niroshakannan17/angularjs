var sort = angular
			.module("SortModel",[])
			.controller("SortCtrl", function($scope){
				
				var employees =[
				{name:"Sara",dob:new Date("07-07-1996"),gender:"Female",salery:"50000"},
				{name:"samu",dob:new Date("02-02-1995"),gender:"Female",salery:"57000"},
				{name:"Karan",dob:new Date("07-06-1994"),gender:"Male",salery:"60000"},
				{name:"shasha",dob:new Date("07-07-1996"),gender:"Female",salery:"55000"},
				{name:"srither",dob:new Date("12-10-1995"),gender:"Male",salery:"80000"},
				{name:"jotha",dob:new Date("04-11-1996"),gender:"Female",salery:"50000"}
				];

				$scope.emp = employees;

				$scope.sortby = "name";

			})
