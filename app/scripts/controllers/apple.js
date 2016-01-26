'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYoApp
 */
angular.module('storeApp')
  .controller('appleController',['$scope' function ($scope) {
    $scope.items= [
			{	name: 'apple',
				color: 'red',
				price: '$1'
			}
		];
  }]);
