angular.module('myMoviesApp.controllers', [])
	.controller('MenuCtl', ['$scope', function ($scope) {
		
	}])
	.controller('ListCtl', ['$scope','$routeParams','$http','Movies',  
		function ($scope, $routeParams, $http, Movies) {
		

  		Movies.getMovies($routeParams.listType).then(function(res){
			$scope.list = res;
		});		

	}]);