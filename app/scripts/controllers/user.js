'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteWebApp
 */
 
myApp.factory('Entry', function($resource){
  return $resource('http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id', {id: '@id'}, {
  	update: {
  		method: 'PUT'
  	}
  });
})



myApp.controller('UserController', ['$scope', 'StoreData', 'Entry', function ($scope, StoreData, Entry){
  	console.log('yoqi');
  	console.log(StoreData.Tok.token);

  	
  	$scope.entries=Entry.query({token: StoreData.Tok.token}, function(){
  		console.log($scope.entries);
  	});

}]);




 
