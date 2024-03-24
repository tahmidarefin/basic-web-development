(function () {
	'use strict';
	angular.module('data')
	.controller('menusController', menusController);
	menusController.$inject = ['menus'];
	function menusController(menus) {
		var mainList = this;
		mainList.menus = menus.data;
	}
})();