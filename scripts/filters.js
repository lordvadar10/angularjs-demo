angular.module('myMoviesApp.filters', []).
  filter('formatMovie', function() {
    return function(item) {
      return "Title: "+item.title+" ("+item.year+"), rank - "+item.ranking+", rate - "+item.rating;
    };
  });