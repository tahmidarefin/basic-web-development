(function () {
	'use strict';
	angular.module('data')
	.controller('dataController', dataController);
	dataController.$inject = ['categories'];
	function dataController(categories) {
		var mainList = this;
		mainList.categories = categories.data;
	}
})();