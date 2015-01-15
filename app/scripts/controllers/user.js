'use strict';

/**
 * @ngdoc function
 * @name voteWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteWebApp
 */
angular.module('voteWebApp')
  .controller('UserController', ['$scope', 'StoreData', function ($scope, StoreData){
  	console.log('yo');
  	console.log(StoreData.Tok);
  }]);

