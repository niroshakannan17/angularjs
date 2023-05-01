var myModel = angular
			.module("ngRepeatScriptModel",[])
			.controller("ngRepeatController",function($scope){

				var employee = [
				{firstName:"shasha",lastName:"karan",gender:"Female",salery:"50000"},
				{firstName:"jotha",lastName:"srither",gender:"Female",salery:"100000"},
				{firstName:"saira",lastName:"vikram",gender:"Female",salery:"80000"}
				];

				$scope.emp = employee;

				var student =[
				{
					name:"Shasha",
					mark:[{
						sub1:"90",
						sub2:"80"
					}]
				},
				{
					name:"Jotha",
					mark:[{
						sub1:"93",
						sub2:"79"
					}]
				},
				{
					name:"jashmin",
					mark:[{
						sub1:"95",
						sub2:"60"
					}]
				}

				]

				$scope.stu = student;


			})