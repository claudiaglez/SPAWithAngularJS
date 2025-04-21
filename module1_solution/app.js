(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function () {
      if ($scope.lunchMenu.trim() === "") {
        $scope.message = "Please enter data first";
        return;
      }

      var dishes = $scope.lunchMenu.split(",");
      if (dishes.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
