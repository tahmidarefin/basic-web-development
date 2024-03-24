(function() {
	'use strict';
	angular.module('data')
	.component('categoryList', {
		templateUrl: 'src/templates/categoryList.template.html',
		bindings: {
			items: '<'
		}
	});
})();