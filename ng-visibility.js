var app = angular
		  .module("ngVisibilityModel",[])
		  .controller("ngVisibilityCtrl",function($scope){

		  		var emply = [
		  			{name:"sara",gender:"Female",salery:45000},
		  			{name:"jotha",gender:"Female",salery:50000},
		  			{name:"srither",gender:"male",salery:65000}
		  		];

		  		$scope.emplyees = emply;
		  });