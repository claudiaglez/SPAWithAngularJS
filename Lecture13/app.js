(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);
  
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

  function TruthFilter(){
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }
  
  })();