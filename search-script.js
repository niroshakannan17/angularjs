var mymodel = angular
			  .module("searchModel",[])
			  .controller("searchController", function($scope){

			  	var employees = [
			  		{name:"sara",gender:"female",salery:50000,city:"madurai"},
			  		{name:"jasmine",gender:"female",salery:50800,city:"theni"},
			  		{name:"jotha",gender:"female",salery:60000,city:"madurai"},
			  		{name:"srither",gender:"male",salery:75000,city:"pollachi"},
			  		{name:"karan",gender:"male",salery:70000,city:"selam"},
			  	];

			  	$scope.emplys = employees;
			  })