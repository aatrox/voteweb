'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteWebApp
 */
var myApp= angular.module('voteWebApp');

myApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(123);
  });
