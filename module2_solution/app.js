(function () {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .service('ShoppingListCheckOffService', function() {
        var service = this;
  
        var toBuyItems = [
          { name: "Leche", quantity: 2 },
          { name: "Pan", quantity: 1 },
          { name: "Huevos", quantity: 12 }
        ];
        var boughtItems = [];
  
        service.getToBuyItems = function() {
          return toBuyItems;
        };
  
        service.getBoughtItems = function() {
          return boughtItems;
        };
  
        service.buyItem = function(itemIndex) {
          var item = toBuyItems[itemIndex];
          toBuyItems.splice(itemIndex, 1);
          boughtItems.push(item);
        };
      })
      .controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var toBuy = this;
  
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
        toBuy.buyItem = function(itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
        };
      }])
      .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var alreadyBought = this;
  
        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
      }]);
  })();
  
  