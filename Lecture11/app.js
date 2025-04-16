(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Claudia";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      return "Claudia wants to learn AngularJS"
    };

    $scope.feedPeople = function () {

      $scope.stateOfBeing = "eating";

    };
  }
  
  })();