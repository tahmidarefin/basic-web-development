(function () {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		$scope.Lunch = "";
		$scope.message = "";
		$scope.GenerateMessage = function () {

			if($scope.Lunch == "") {
				$scope.message = "Please enter data first";
			}
			else {
				const LunchList = $scope.Lunch.split(' ').join('').split(',').filter(function (Item) {
					return Item != "";
				});
				if(LunchList.length > 3) {
					$scope.message = "Too much!";
				}
				else {
					$scope.message = "Enjoy!";
				}
			}
		}
	}
})();

/*
Minified Version
!function(){"use strict";function e(e){e.Lunch="",e.message="",e.GenerateMessage=function(){if(""==e.Lunch)e.message="Please enter data first";else{let n=e.Lunch.split(" ").join("").split(",").filter(function(e){return""!=e});n.length>3?e.message="Too much!":e.message="Enjoy!"}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
*/