angular.module('myMoviesApp', [
  'ngRoute',
  'myMoviesApp.filters',
  'myMoviesApp.services',
  'myMoviesApp.directives',
  'myMoviesApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/menu.html', controller: 'MenuCtl'});
	$routeProvider.when('/list/:listType', {templateUrl: 'partials/list.html', controller: 'ListCtl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);