'use strict';

/**
 * @ngdoc overview
 * @name angularYoApp
 * @description
 * # angularYoApp
 *
 * Main module of the application.
 */
angular
  .module('storeApp', [
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
        templateUrl: 'views/apple.html',
        controller: 'appleController',
        controllerAs: 'appleCtrl'
      })
      .when('/book', {
        templateUrl: 'views/book.html',
        controller: 'bookController',
        controllerAs: 'bookCtrl'
      })
      .when('/car', {
        templateUrl: 'views/car.html',
        controller: 'carController',
        controllerAs: 'carCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
