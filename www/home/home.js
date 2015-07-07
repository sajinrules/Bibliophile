angular.module('home',[
		'controller.home'
	])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('app.home', {
			url: "/home",
			views:{
				'menuContent': {
					templateUrl: "home/home.html",
					controller:'homeCtrl'
				}
			}
		})	
	}])