'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteWebApp
 */
 
myApp.controller('SingleController',  ['$http', '$scope' , '$routeParams', 'Entry', 'StoreData', function($http, $scope, $routeParams, Entry, StoreData){
	console.log($routeParams.id);
	console.log(StoreData.Tok.token);
	$scope.single = Entry.get({id : $routeParams.id, token: StoreData.Tok.token }, function(){
		console.log(StoreData.Tok.token);
		console.log($scope.single);
  });
  
  $scope.upfun = function(){
  	var upurl = 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/' + $scope.single.id + '/up';
  	console.log('this is upurl' + upurl);
    $http.post(upurl, {token: StoreData.Tok.token}).success( function(){
    	console.log('up success');
    	$scope.single = Entry.get({id : $routeParams.id, token: StoreData.Tok.token }, function(){	
      })
   })
 }

  $scope.downfun = function(){
    var downurl = 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/' + $scope.single.id + '/down';
  	console.log('this is downurl' + downurl);
    $http.post(downurl, {token: StoreData.Tok.token}).success( function(){
    	console.log('down success');
    	$scope.single = Entry.get({id : $routeParams.id, token: StoreData.Tok.token }, function(){	
      })
   })
  }
  
  $scope.deletefun = function(){
  	$scope.single.$delete({id: $routeParams.id, token: StoreData.Tok.token}, function(){
  		console.log('delete done');
  	})
  }

	
}])




 
