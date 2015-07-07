
angular.module('library',[
		'controller.library'
	])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('app.library', {
			url: "/library",
			views:{
				'menuContent': {
					templateUrl: "library/library.html",
					controller:'libraryCtrl'
				}
			}
		})	
	}])