'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteWebApp
 */


myApp.controller('UpdateController', ['$http', '$scope', 'Entry', '$routeParams', 'StoreData', function ($http, $scope, Entry, $routeParams, StoreData) {
  $scope.single = Entry.get({id : $routeParams.id, token: StoreData.Tok.token }, function(){
		console.log(StoreData.Tok.token);
		console.log($scope.single);
  });

  $scope.update = function(){

  	console.log("click update");
    // $scope.single.$update({token: StoreData.Tok.token}, function(){ 
    // 	console.log(123);
    	
    // })
		console.log($scope.single);
    $scope.single.$update({id: $scope.single.id, token: StoreData.Tok.token}, function(){ 
    	console.log(123);
    	window.location.href = '#/views/single.html/' + $scope.single.id;
    })

    // .success(function(){
    	// console.log('update success')
    	// window.location.href = '#/views/single.html';
    // })
  }
}]);
