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
      .when('/apple', {
        templateUrl: 'views/apple.html',
        controller: 'AppleCtrl',
        controllerAs: 'apple'
      })
      .when('/car', {
        templateUrl: 'views/car.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .when('/book', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
