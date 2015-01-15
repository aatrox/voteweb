'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteWebApp
 */
var myApp=angular.module('voteWebApp');
myApp.factory('StoreData', function(){
	return{
		Tok : {}
	};
});

myApp.controller('LoginController', ['$scope', '$http', 'StoreData',function ($scope, $http, StoreData) {
    
 $scope.login = function() {
 		console.log($scope.cusername);
 		console.log($scope.cpassword);
 	    $http.post('http://sat-idea-voter.herokuapp.com/api/v1/login', {username: $scope.cusername, password: $scope.cpassword}).success(function(data){
    console.log(data);
      StoreData.Tok = data;
      console.log("s" + StoreData.Tok);
    })
 	  window.location.href='#/views/user.html';
 }

  }]);
