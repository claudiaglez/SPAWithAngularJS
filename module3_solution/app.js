(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

  // Controller
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.searchTerm = '';
    narrow.found = [];
    narrow.searched = false;

    narrow.narrowItDown = function () {
      narrow.searched = true;
      if (!narrow.searchTerm) {
        narrow.found = [];
        return;
      }

      MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function (foundItems) {
        narrow.found = foundItems;
      });
    };

    narrow.removeItem = function (index) {
      narrow.found.splice(index, 1);
    };
  }

  // Service
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
    }).then(function (response) {
      var data = response.data;
      if (!data) {
        console.error("No se encontraron datos en response.data");
        return [];
      }

      var foundItems = [];

      // Recorremos cada categoría (A, B, C, etc.)
      Object.values(data).forEach(function (category) {
        if (category.menu_items && Array.isArray(category.menu_items)) {
          category.menu_items.forEach(function (item) {
            if (
              item.description &&
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              foundItems.push(item);
            }
          });
        }
      });

      return foundItems;
    });
  };
}


  // Directive
  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      scope: {
        items: '<',
        onRemove: '&'
      },
      template: `
        <ul>
          <li ng-repeat="item in items track by $index">
            {{ item.name }} ({{ item.short_name }}): {{ item.description }}
            <button ng-click="onRemove({index: $index})">Don't want this one!</button>
          </li>
        </ul>
      `
    };
    return ddo;
  }

})();
