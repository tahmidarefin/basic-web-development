(function () {
	'use strict';
	angular.module('MenuApp')
	.config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/templates/home.template.html'
		})
		.state('categoryList', {
			url: '/categories',
			templateUrl: 'src/templates/categories.template.html',
			controller: 'dataController as mainList',
			resolve: {
				categories: ['menuDataService', function (menuDataService) {
					return menuDataService.getAllCategories();
				}]
			}
		})
		.state('menuList', {
			url: '/{menus}',
			templateUrl: 'src/templates/menus.template.html',
			controller: 'menusController as mainList',
			resolve: {
				menus: ['$stateParams', 'menuDataService', function ($stateParams, menuDataService) {
					return menuDataService.getItemsForCategory($stateParams.menus);
				}]
			}
		});
	}
})();