(function () {
	'use strict'
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
	ToBuyController.$inject = ['ShoppingListCheckOffService']
	function ToBuyController(ShoppingListCheckOffService) {
		var itemTobuy = this;
		itemTobuy.to_buy = ShoppingListCheckOffService.to_buy;
		itemTobuy.to_buy.msgVariable = 0;
		itemTobuy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
			itemTobuy.to_buy.msgVariable = ShoppingListCheckOffService.msgVariable;
		};
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var itemAlreadybought = this;
		itemAlreadybought.already_bought = ShoppingListCheckOffService.already_bought;
		itemAlreadybought.already_bought.msgVariable = ShoppingListCheckOffService.already_bought.msgVariable;
	}
	function ShoppingListCheckOffService() {
		var service = this;
		service.to_buy = [{
			name: "Milk", 
			quantity: "2"
		}, {
			name: "Dates", 
			quantity: "3"
		}, {
			name: "Beef", 
			quantity: "2"
		}, {
			name: "Chicken", 
			quantity: "4"
		}, {
			name: "Vegetables", 
			quantity: "3"
		}];
		service.already_bought = [];
		service.msgVariable = 0;
		service.buyItem = function (itemIndex) {
			service.already_bought.push(service.to_buy[itemIndex]);
			service.to_buy.splice(itemIndex, 1);
			service.msgVariable = (service.to_buy.length == 0 ? 2 : 1);
			service.already_bought.msgVariable = service.msgVariable;
			service.to_buy.msgVariable = service.msgVariable;
		};
	}
	function ShoppingListCheckOffServiceProvider() {
		var provider = this;
		provider.$get = function () {
			return new ShoppingListCheckOffService;
		}
	}
})()