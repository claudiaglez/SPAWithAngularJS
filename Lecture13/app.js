(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter);
  
  MsgController.$inject = ['$scope', 'lovesFilter'];
  function MsgController($scope, lovesFilter) {
    $scope.name = "Claudia";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      var msg = "Claudia wants to learn AngularJS";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Claudia wants to learn AngularJS";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedPeople = function () {

      $scope.stateOfBeing = "eating";

    };
  }

  function LovesFilter(){
    return function (input) {
      input = input || "";
      input = input.replace("wants", "loves");
      return input;
    }
  }
  
  })();