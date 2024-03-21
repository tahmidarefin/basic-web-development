(function (){
	'use strict'
	angular.module('NarrowItDownApp', [])
	.directive('foundItems', foundItems)
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService);

	function foundItems() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			}
		};
		return ddo;
	}
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var menu = this;
		menu.searchTerm = "";
		var promise =  MenuSearchService.getMenuItems();
		promise.then(function (response) {
			menu.data = response.data;
		});
		menu.getMatchedMenuItems = function () {
			menu.found = [];
			for(const x of Object.keys(menu.data)) {
				for(const y of menu.data[x].menu_items) {
					if(y.description.includes(menu.searchTerm)) {
						console.log(y);
						menu.found.push(y);
					}
				}
			}
		};
		menu.removeItem = function (itemIndex) {
			menu.found.splice(itemIndex, 1);
		}
	}
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;
		service.getMenuItems = function () {
			var response = $http({
				method: "GET",
				url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"),
			});
			return response;
		};
	}
})()