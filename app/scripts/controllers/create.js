'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteWebApp
 */


myApp.controller('CreateController', ['$scope', '$http', 'StoreData', function ($scope, $http, StoreData) {
  $scope.create = function(){
  	console.log('create' + StoreData.Tok.token);
    $http.post('http://sat-idea-voter.herokuapp.com/api/v1/ideas', {title: $scope.ctitle, content: $scope.ccontent, token: StoreData.Tok.token}).success(function(){
    	console.log('idea created!');
    	window.location.href = '#/views/user.html';
    })
  }
  }]);
