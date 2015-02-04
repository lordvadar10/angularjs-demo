angular.module("myMoviesApp.services",[])
	.service("Movies",['$http','$q', function($http,$q){

		
		var getMovies = function(type){
			var deferred = $q.defer();

			$http.get("data/"+type+".json").success(function(res){
			

				if (res[0].movies){
					var list = [];
					res.forEach(function(r){
						r.movies.forEach(function(mov){
							list.push(mov);
						});
					});

					deferred.resolve(list);
				} else {
					deferred.resolve(res);
				}

				console.log(res);

				
	        }).error(function(data, status, headers, config) {
                deferred.reject(data);
            });


			return deferred.promise;
		}

		return {
			getMovies: function(type){
				return getMovies(type);
			}

		}

	}]);