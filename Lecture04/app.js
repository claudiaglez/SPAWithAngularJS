(function () {
'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function ($scope) {
        $scope.name = "Claudia";
        $scope.sayHello = function () {
            return "Hello everyone!";
        }
    })

 } )();