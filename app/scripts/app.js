'use strict';

/**
 * @ngdoc overview
 * @name voteWebApp
 * @description
 * # voteWebApp
 *
 * Main module of the application.
 */
angular
  .module('voteWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/views/log-in.html', {
        templateUrl: 'views/log-in.html',
        controller: 'LoginController'
      })
      .when('/views/user.html', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      .when('/views/single.html/:id', {
        templateUrl: 'views/single.html',
        controller: 'SingleController'
      })
      .when('/views/register.html', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/views/create.html', {
        templateUrl: 'views/create.html',
        controller: 'CreateController'
      })
      .when('/views/update.html/:id', {
        templateUrl: 'views/update.html',
        controller: 'UpdateController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
