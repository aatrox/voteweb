'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteWebApp
 */
 
myApp.controller('SingleController',  function($scope, $routeParams, Entry, StoreData){
	console.log($routeParams.id);
	console.log(StoreData.Tok.token);
	$scope.single = Entry.get({id : $routeParams.id, token: StoreData.Tok.token }, function(){
		console.log(StoreData.Tok.token);
		console.log($scope.single);

	});
})




 
