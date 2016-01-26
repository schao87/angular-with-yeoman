'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:AppleCtrl
 * @description
 * # AppleCtrl
 * Controller of the angularYoApp
 */
angular.module('storeApp')
  .controller('AppleCtrl', function ($scope) {
    $scope.items = 
			{	name: 'small apple',
				color: 'red',
				price: '$1'
			}
		
  });
