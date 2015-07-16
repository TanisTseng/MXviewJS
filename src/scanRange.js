require('angular');
require('angular-bootstrap');

var mxviewClient = angular.module('mxviewClient');

mxviewClient.controller('scanRangeController', ['$scope', '$modalInstance', function($scope, $modalInstance){
	$scope.ok = function(){

	};

	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	};
}]);