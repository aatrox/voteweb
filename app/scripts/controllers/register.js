'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteWebApp
 */


myApp.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {
    $scope.register = function(){
      $http.post('http://sat-idea-voter.herokuapp.com/api/v1/signup', {username: $scope.rusername, password: $scope.rpassword, password_confirmation: $scope.rconfirmation}).success(function(){
        console.log('done!');
      	window.location.href='#/views/log-in.html';
      })
    }
  }]);
