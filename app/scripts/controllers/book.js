'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the angularYoApp
 */
angular.module('storeApp')
  .controller('BookCtrl', function ($scope) {
    $scope.items= 
			{	name: 'harry potter',
				color: 'green',
				price: '$5'
			}
  });
