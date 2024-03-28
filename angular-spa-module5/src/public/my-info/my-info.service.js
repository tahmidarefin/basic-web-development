(function() {
"use strict";

angular.module('public')
.service('myinfoService', myinfoService);

myinfoService.$inject = ['$http'];
function myinfoService($http) {
	var srvc = this;
	srvc.menudata = function (favdish) {
		var promise = $http({
			method: "GET",
			url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + favdish[0] + ".json")
		});
		return promise;
	};
}

})();
