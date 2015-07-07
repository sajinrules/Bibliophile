angular.module('bucketlist',[
		'controller.bucketlist'
	])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.bucketlist', {
					url: "/bucketlist",
					views: {
					'menuContent': {
						templateUrl : "bucketlist/bucketlist.html",
						controller 	: "bucketlistCtrl"
					}
				}
			})	
	}])