angular.module("myMoviesApp.directives",[])
	.directive("movieItem", function() {
        return {
            restrict : "E",
            scope: {
            	item: "="
            },
            templateUrl: "templates/movie_item.html",
            link : function(scope, element, attrs) {


            	var getVector = function(length){
            		return Array.apply(null, Array(length)).map(function (_, i) {return i;});
            	}

                //console.log("directive item: ",scope.item);

                scope.rankVector = [];
                scope.rateVector = [];

                if (scope.item.ranking){
                	scope.rankVector = getVector(parseInt(scope.item.ranking));
                }
                if (scope.item.rating){
                	scope.rateVector = getVector(parseInt(scope.item.rating));
                }
            }
        };
    });