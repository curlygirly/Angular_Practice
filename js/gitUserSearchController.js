githubUserSearch.controller('GitUserSearchController', ['Search', function(Search){

// var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.doSearch = function(){
    Search.query(self.searchTerm)
    .then(function(response){
      self.searchResult = response.data;
    })
  //   self.searchResult = searchResource.get(
  //       { q: self.searchTerm }
  //     );
    };
}]);

//The controller changes in light of havin a factory because it means that the controller will now call into the factory to return the search and therefore remains thin, keeping a separation of concerns.