(function() {
"use strict";

angular.module('public')
.controller('signupController', signupController);
signupController.$inject = ['myinfoService'];
function signupController(myinfoService) {
	var ctrl = this;
	ctrl.regSuccess = false;
	ctrl.cat = "";
	ctrl.submit = function () {
		ctrl.cat = ctrl.favdish.replace(/[^a-zA-Z]/gm,"");
		var promise = myinfoService.menudata(ctrl.cat);
		var user = {
			firstName: ctrl.firstName,
			lastName: ctrl.lastName,
			email: ctrl.email,
			cell: ctrl.cell,
			cat: ctrl.cat,
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
