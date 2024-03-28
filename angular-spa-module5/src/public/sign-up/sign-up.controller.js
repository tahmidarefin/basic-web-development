(function() {
"use strict";

angular.module('public')
.controller('signupController', signupController);
signupController.$inject = ['myinfoService'];
function signupController(myinfoService) {
	var ctrl = this;
	ctrl.regSuccess = false;
	ctrl.submit = function () {
		var promise = myinfoService.menudata(ctrl.favdish);
		var user = {
			firstName: ctrl.firstName,
			lastName: ctrl.lastName,
			email: ctrl.email,
			cell: ctrl.cell,
			favdish: null,
			dish: true
		};
		promise.then(function (response) {
			var menudata = response.data.menu_items;
			for(var menu of menudata) {
				if(menu.short_name == ctrl.favdish) {
					user.favdish = menu;
				}
			}
		})
		.catch(function (error) {
			user.dish = false;
		});
		ctrl.regSuccess = true;
		myinfoService.user = user;
	};
}

})();
