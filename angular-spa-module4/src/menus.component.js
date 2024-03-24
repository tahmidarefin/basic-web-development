(function() {
	'use strict';
	angular.module('data')
	.component('menuList', {
		templateUrl: 'src/templates/menuList.template.html',
		bindings: {
			items: '<'
		}
	});
})();