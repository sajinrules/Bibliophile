angular.module('favourites',[
		'controller.favourites'
	])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('app.favourites', {
			url: "/favourites",
			views:{
				'menuContent': {
					templateUrl: "favourites/favourites.html",
					controller:'favouritesCtrl'
				}
			}
		})	
	}])