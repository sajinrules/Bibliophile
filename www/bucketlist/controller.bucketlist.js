angular.module('controller.bucketlist',[])
	.controller('bucketlistCtrl', ['$scope','$http', function($scope,$http){
		console.log('bucketlist:',$scope);
		$scope.book={};
		$scope.search = function(){
			console.log('find:',$scope.book.query);
			$http.get('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice').
				success(function(data){
					console.log('data:',data.items);
					$scope.results=data.items;
				}).
				error(function(error){
					console.log('error:',error);
				})
		}		
	}])