(function() {
"use strict";

angular.module('public')
.controller('myinfoController', myinfoController);
myinfoController.$inject = ['myinfoService']
function myinfoController(myinfoService) {
	var ctrl = this;
	ctrl.user = myinfoService.user;
	console.log(ctrl.user);
}

})();
