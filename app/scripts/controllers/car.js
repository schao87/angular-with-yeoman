'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the angularYoApp
 */
angular.module('storeApp')
  .controller('CarCtrl', function ($scope) {
    $scope.items = 
			{
				name: 'subaru',
				color: 'blue',
				price: '$5000'
			}
  });
