(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.name = "Claudia";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function () {
      var msg = "Claudia wants to learn AngularJS";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.feedPeople = function () {

      $scope.stateOfBeing = "eating";

    };
  }
  
  })();