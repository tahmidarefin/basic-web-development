(function () {
	'use strict';
	angular.module('data')
	.service('menuDataService', menuDataService);
	menuDataService.$inject = ['$http'];
	function menuDataService($http) {
		var menuData = this;
		menuData.getAllCategories = function () {
			var promise = $http({
				method: "GET",
				url: ("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
			});
			return promise;
		};
		var menuData = this;
		menuData.getItemsForCategory = function (menuList) {
			var promise = $http({
				method: "GET",
				url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + menuList + ".json")
			});
			return promise;
		};
	}
})();