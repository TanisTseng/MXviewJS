'use strict';

require('jquery');
require('angular');
require('bootstrap');
require('angular-bootstrap');

var mxviewClient = angular.module('mxviewClient', ['ui.bootstrap']);

mxviewClient.config(['$logProvider', function($logProvider){
	$logProvider.debugEnabled(true);
}]);

mxviewClient.controller('menuController', ['$scope', '$modal', 'scanRangeDialogService', function($scope, $modal, scanRangeDialogService){

	$scope.topLevelMenuitems = ['File', 'Edit'];
	$scope.subMenuitems = { 'File':['Scan Range', 'Log Out']};

	var menuTasks = {'Scan Range': scanRangeDialogService.open};
	
	$scope.getMenuitemsByMenuName = function(name){
		return $scope.subMenuitems[name];
	};

	$scope.onMenuitemClicked = function(menuitem){
		console.log('Menu item: ' + menuitem + ' is clicked');
		menuTasks[menuitem]();
	};	
}]);

mxviewClient.directive('mxviewMenubar', function(){

	return {
		restrict: 'E',
		replace: true,
		
		templateUrl: 'src/menuitem.html',
		controller: 'menuController'
	};
});

mxviewClient.factory('scanRangeDialogService', ['$modal', function($modal){

	var openScanRangeDialog = function(){
		var modalInstance = $modal.open({
			templateUrl: 'src/scanRange.html',
			controller: 'scanRangeController'
		});
		modalInstance.result.then(function(){
			console.log('ok');
		}, function(){
			console.log('cancel');
		});
	};

	return {
		open: function(){
			openScanRangeDialog();
		}
	}

}]);